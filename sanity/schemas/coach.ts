/**
 * Sanity Studio schema for the About page coaches grid.
 * Copy into the Studio project's schemaTypes and add to the schema array.
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
    { name: "order", title: "Display order", type: "number", description: "Lower numbers show first" },
    { name: "showOnSite", title: "Show on site", type: "boolean", initialValue: true },
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "role", media: "photo" } },
};
