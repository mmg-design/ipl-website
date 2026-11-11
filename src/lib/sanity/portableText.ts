/**
 * Minimal Portable Text to HTML renderer (no dependencies).
 * Handles: paragraphs, h2 to h4, blockquote, bullet and numbered lists,
 * strong / em / underline / code, links, and images with captions.
 * Local fallback content can pass `{ _type: "image", src, alt, caption }`.
 */
import { sanityImageUrl, type SanityImage } from "@/lib/sanity/client";

export interface PTSpan { _type: "span"; text: string; marks?: string[] }
export interface PTMarkDef { _key: string; _type: string; href?: string; blank?: boolean }
export interface PTBlock {
  _type: "block"; _key?: string; style?: string; listItem?: "bullet" | "number"; level?: number;
  children: PTSpan[]; markDefs?: PTMarkDef[];
}
export interface PTImage extends SanityImage { _type: "image"; _key?: string; src?: string; caption?: string }
export type PTNode = PTBlock | PTImage;

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const DECORATORS: Record<string, string> = { strong: "strong", em: "em", underline: "u", code: "code", "strike-through": "s" };

function spans(block: PTBlock): string {
  const defs = new Map((block.markDefs ?? []).map((d) => [d._key, d]));
  return block.children.map((span) => {
    let html = esc(span.text ?? "").replace(/\n/g, "<br />");
    for (const mark of span.marks ?? []) {
      if (DECORATORS[mark]) { html = `<${DECORATORS[mark]}>${html}</${DECORATORS[mark]}>`; continue; }
      const def = defs.get(mark);
      if (def?._type === "link" && def.href) {
        const external = /^https?:/.test(def.href) && !def.href.includes("ingeperformancelab.com");
        html = `<a href="${esc(def.href)}"${external || def.blank ? ' target="_blank" rel="noopener"' : ""}>${html}</a>`;
      }
    }
    return html;
  }).join("");
}

function image(node: PTImage): string {
  const src = node.src ?? sanityImageUrl(node, { width: 1400 });
  if (!src) return "";
  const caption = node.caption ? `<figcaption>${esc(node.caption)}</figcaption>` : "";
  return `<figure><img src="${esc(src)}" alt="${esc(node.alt ?? "")}" loading="lazy" />${caption}</figure>`;
}

export function toHTML(nodes: PTNode[] = []): string {
  const out: string[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;
  const flush = () => { if (list) { out.push(`<${list.type}>${list.items.join("")}</${list.type}>`); list = null; } };

  for (const node of nodes) {
    if (node._type === "image") { flush(); out.push(image(node)); continue; }
    if (node._type !== "block") continue;
    const inner = spans(node);
    if (node.listItem) {
      const type = node.listItem === "number" ? "ol" : "ul";
      if (!list || list.type !== type) { flush(); list = { type, items: [] }; }
      list.items.push(`<li>${inner}</li>`);
      continue;
    }
    flush();
    if (!inner.trim()) continue;
    const style = node.style ?? "normal";
    if (/^h[2-4]$/.test(style)) out.push(`<${style}>${inner}</${style}>`);
    else if (style === "h1") out.push(`<h2>${inner}</h2>`);
    else if (style === "blockquote") out.push(`<blockquote><p>${inner}</p></blockquote>`);
    else if (style === "lead") out.push(`<p class="is-lead">${inner}</p>`);
    else out.push(`<p>${inner}</p>`);
  }
  flush();
  return out.join("\n");
}

/** Plain text word count, for read time. */
export function wordCount(nodes: PTNode[] = []): number {
  return nodes.filter((n): n is PTBlock => n._type === "block")
    .map((b) => b.children.map((c) => c.text).join(" "))
    .join(" ").split(/\s+/).filter(Boolean).length;
}

/* Helpers for writing fallback content by hand */
const block = (style: string, text: string, extra: Partial<PTBlock> = {}): PTBlock => ({ _type: "block", style, children: [{ _type: "span", text, marks: [] }], markDefs: [], ...extra });
export const pt = {
  p: (text: string) => block("normal", text),
  lead: (text: string) => block("lead", text),
  h2: (text: string) => block("h2", text),
  h3: (text: string) => block("h3", text),
  quote: (text: string) => block("blockquote", text),
  li: (text: string) => block("normal", text, { listItem: "bullet", level: 1 }),
  img: (src: string, alt: string, caption?: string): PTImage => ({ _type: "image", src, alt, caption }),
};
