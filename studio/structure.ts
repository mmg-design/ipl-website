import type { StructureResolver } from "sanity/structure";

/** Left-hand menu in the Studio. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Inge Performance Lab")
    .items([
      S.documentTypeListItem("post").title("Blog posts"),
      S.documentTypeListItem("coach").title("Coaches and staff"),
    ]);
