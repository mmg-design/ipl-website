/**
 * Sanity schema for coaches and staff (About page grid, training pages, blog authors).
 * Loaded by the Studio in /studio (studio/schemaTypes/index.ts).
 * Field names must stay in sync with src/data/coaches.ts.
 */
export default {
  name: "coach",
  title: "Coaches and staff",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (r: any) => r.required() },
    { name: "role", title: "Role", type: "string", description: "Shown under the name, e.g. Founder · Hitting and fielding" },
    { name: "bio", title: "Short bio", type: "text", rows: 3, validation: (r: any) => r.max(200) },
    {
      name: "photo",
      title: "Headshot",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    },
    {
      name: "sports", title: "Show on training pages", type: "array", of: [{ type: "string" }],
      options: { list: ["baseball", "softball", "pitching", "strength", "mental"] },
    },
    { name: "sportRole", title: "Role on training pages", type: "string", description: "Optional shorter role, e.g. Hitting and fielding" },
    { name: "sportBio", title: "Bio on training pages", type: "text", rows: 2, description: "Optional shorter bio for training pages" },
    { name: "aboutPage", title: "Show on About page", type: "boolean", initialValue: true },
    { name: "order", title: "Display order", type: "number", description: "Lower numbers show first" },
    { name: "showOnSite", title: "Show on site", type: "boolean", initialValue: true },
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "role", media: "photo" } },
};
