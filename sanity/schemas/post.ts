/**
 * Sanity Studio schema for IPL blog posts.
 * Copy into the Studio project's schemaTypes alongside coach.ts.
 * Field names must stay in sync with src/data/posts.ts.
 */
export default {
  name: "post",
  title: "Blog posts",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (r: any) => r.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r: any) => r.required() },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3, description: "Shown on cards. Keep it under ~160 characters.", validation: (r: any) => r.max(200) },
    { name: "category", title: "Category", type: "string", description: "Shown as the orange pill, e.g. Hitting Data, Michigan Season, Parents" },
    {
      name: "mainImage", title: "Main image", type: "image", options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    },
    { name: "author", title: "Author", type: "reference", to: [{ type: "coach" }] },
    { name: "publishedAt", title: "Published", type: "datetime", initialValue: () => new Date().toISOString() },
    { name: "readTime", title: "Read time (minutes)", type: "number", description: "Leave empty to calculate from the body." },
    {
      name: "body", title: "Body", type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alt text", type: "string" }] }],
    },
    {
      name: "relatedPages", title: "Show on pages", type: "array", of: [{ type: "string" }],
      description: "Page keys this post should be featured on (e.g. hittrax, batting-cages, home). Empty means latest posts only.",
      options: { list: ["home", "batting-cages", "hittrax", "the-den", "baseball-training", "softball-training", "pitching", "mental-performance"] },
    },
    { name: "seoTitle", title: "SEO title", type: "string" },
    { name: "seoDescription", title: "SEO description", type: "text", rows: 2 },
  ],
  orderings: [{ title: "Newest first", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "mainImage" } },
};
