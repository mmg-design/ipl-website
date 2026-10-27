/**
 * Minimal Sanity client (no dependencies). Uses the public CDN query API.
 * Set these in .env (and in Cloudflare build env) to turn Sanity on:
 *   SANITY_PROJECT_ID=xxxx
 *   SANITY_DATASET=production
 *   SANITY_API_VERSION=2025-01-01   (optional)
 * With no project id, every fetch returns null and pages use their fallback data.
 */
const projectId = import.meta.env.SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.SANITY_DATASET as string | undefined) ?? "production";
const apiVersion = (import.meta.env.SANITY_API_VERSION as string | undefined) ?? "2025-01-01";

export const sanityEnabled = Boolean(projectId);

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!projectId) return null;
  const url = new URL(`https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`);
  url.searchParams.set("query", query);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(`$${key}`, JSON.stringify(value));
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return ((await res.json()) as { result: T }).result;
  } catch (error) {
    console.warn("[sanity] query failed, using fallback data:", error);
    return null;
  }
}

export interface SanityImage {
  asset?: { _ref?: string };
  alt?: string;
  hotspot?: { x: number; y: number };
}

/** Builds a cropped CDN URL from a Sanity image reference (image-<id>-<w>x<h>-<ext>). */
export function sanityImageUrl(image: SanityImage | undefined, opts: { width: number; height?: number }): string | undefined {
  const ref = image?.asset?._ref;
  if (!ref || !projectId) return undefined;
  const [, id, size, ext] = ref.split("-");
  const url = new URL(`https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${size}.${ext}`);
  url.searchParams.set("w", String(opts.width));
  if (opts.height) {
    url.searchParams.set("h", String(opts.height));
    url.searchParams.set("fit", "crop");
    if (image?.hotspot) {
      url.searchParams.set("crop", "focalpoint");
      url.searchParams.set("fp-x", String(image.hotspot.x));
      url.searchParams.set("fp-y", String(image.hotspot.y));
    }
  }
  url.searchParams.set("auto", "format");
  return url.toString();
}
