/**
 * Builds studio/seed/ipl-seed.ndjson from the site's fallback content, so Sanity starts with everything the site shows today.
 * Run from the repo root:  npx tsx --tsconfig tsconfig.json studio/seed/build-seed.ts
 * Import (from /studio, after `npx sanity login`):  npx sanity dataset import seed/ipl-seed.ndjson production --missing
 * Images are uploaded from the local /public folder via _sanityAsset file:// paths. Set SEED_ROOT to the repo path on the machine that runs the import.
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fallbackPosts } from "../../src/data/posts";
import { fallbackCoaches } from "../../src/data/coaches";

const ROOT = process.env.SEED_ROOT ?? resolve(process.cwd());
const asset = (src: string) => `image@file://${ROOT}/public${src}`;
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
let k = 0;
const key = () => `k${(++k).toString(36).padStart(5, "0")}`;

const coaches = [...fallbackCoaches, { name: "IPL Staff", role: "Inge Performance Lab", bio: "Posts from the IPL front desk and coaching staff.", aboutPage: false, showOnSite: false }];
const coachId = (name: string) => `coach-${slugify(name)}`;

const docs: any[] = coaches.map((c: any, i) => ({
  _id: coachId(c.name), _type: "coach",
  name: c.name, role: c.role, bio: c.bio, sportRole: c.sportRole, sportBio: c.sportBio,
  sports: c.sports, aboutPage: c.aboutPage ?? true, showOnSite: c.showOnSite ?? true, order: (i + 1) * 10,
  photo: c.photo?.startsWith("/") ? { _type: "image", _sanityAsset: asset(c.photo), alt: c.photoAlt ?? c.name } : undefined,
}));

for (const p of fallbackPosts) {
  docs.push({
    _id: `post-${p.slug}`, _type: "post",
    title: p.title, slug: { _type: "slug", current: p.slug }, excerpt: p.excerpt, category: p.category,
    publishedAt: p.publishedAt ? new Date(`${p.publishedAt}T12:00:00-05:00`).toISOString() : new Date().toISOString(),
    featured: Boolean(p.featured), readTime: p.readTime,
    author: { _type: "reference", _ref: coachId(p.author?.name ?? "IPL Staff") },
    mainImage: { _type: "image", _sanityAsset: asset(p.image), alt: p.imageAlt },
    body: (p.body ?? []).map((n: any) => n._type === "image"
      ? { _type: "image", _key: key(), _sanityAsset: asset(n.src), alt: n.alt, caption: n.caption }
      : { ...n, _key: key(), markDefs: n.markDefs ?? [], children: n.children.map((c: any) => ({ ...c, _key: key() })) }),
  });
}

const out = resolve(process.cwd(), "studio/seed/ipl-seed.ndjson");
writeFileSync(out, docs.map((d) => JSON.stringify(JSON.parse(JSON.stringify(d)))).join("\n") + "\n");
console.log(`Wrote ${docs.length} documents to ${out}`);
