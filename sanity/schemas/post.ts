/**
 * Sanity schema for IPL blog posts. Loaded by the Studio in /studio (studio/schemaTypes/index.ts).
 * Field names must stay in sync with src/data/posts.ts.
 */
export const categories = ["Hitting", "Hitting Data", "Pitching", "Strength", "Michigan Season", "Facility", "Parents", "Rules"];

export default {
  name: "post",
  title: "Blog posts",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "settings", title: "Settings" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { name: "title", title: "Title", type: "string", group: "content", validation: (r: any) => r.required() },
    { name: "slug", title: "URL slug", type: "slug", group: "content", description: "The end of the post's web address. Click Generate.", options: { source: "title", maxLength: 96 }, validation: (r: any) => r.required() },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3, group: "content", description: "Shown on cards and in Google. Aim for 1 to 2 sentences, under 160 characters.", validation: (r: any) => r.required().max(200) },
    { name: "category", title: "Category", type: "string", group: "content", description: "The orange pill, and the filter on /blog.", options: { list: categories }, validation: (r: any) => r.required() },
    {
      name: "mainImage", title: "Main image", type: "image", group: "content", options: { hotspot: true },
      description: "Landscape photo, at least 1600px wide. Drag the hotspot onto the subject so crops keep it in frame.",
      fields: [{ name: "alt", title: "Alt text", type: "string", description: "Describe the photo for screen readers and Google." }],
      validation: (r: any) => r.required(),
    },
    {
      name: "body", title: "Body", type: "array", group: "content",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Lead (bold intro)", value: "lead" },
            { title: "Heading", value: "h2" },
            { title: "Subheading", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        },
        {
          type: "image", options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alt text", type: "string" },
            { name: "caption", title: "Caption", type: "string" },
          ],
        },
      ],
    },
    { name: "author", title: "Author", type: "reference", group: "settings", to: [{ type: "coach" }] },
    { name: "publishedAt", title: "Published", type: "datetime", group: "settings", initialValue: () => new Date().toISOString(), validation: (r: any) => r.required() },
    { name: "featured", title: "Feature at the top of /blog", type: "boolean", group: "settings", initialValue: false, description: "If more than one is on, the newest wins. If none are on, the newest post is featured." },
    { name: "readTime", title: "Read time (minutes)", type: "number", group: "settings", description: "Leave empty to calculate from the body." },
    {
      name: "relatedPages", title: "Also show on these pages", type: "array", group: "settings", of: [{ type: "string" }],
      description: "Pages whose blog row should prefer this post. Leave empty and it appears wherever the latest posts show.",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Batting Cages", value: "batting-cages" },
          { title: "HitTrax", value: "hittrax" },
          { title: "The Den", value: "the-den" },
          { title: "Memberships", value: "memberships" },
          { title: "Baseball Training", value: "baseball-training" },
          { title: "Softball Training", value: "softball-training" },
          { title: "Pitching", value: "pitching" },
          { title: "Mental Performance", value: "mental-performance" },
          { title: "Team Rentals", value: "team-rentals" },
        ],
      },
    },
    { name: "seoTitle", title: "SEO title", type: "string", group: "seo", description: "Optional. Overrides the title in Google. Under 60 characters." },
    { name: "seoDescription", title: "SEO description", type: "text", rows: 2, group: "seo", description: "Optional. Overrides the excerpt in Google. Under 160 characters." },
  ],
  orderings: [{ title: "Newest first", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "mainImage" } },
};
