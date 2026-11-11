/** One source of truth: the schemas live in /sanity/schemas and the site's data files read the same field names. */
import post from "../../sanity/schemas/post";
import coach from "../../sanity/schemas/coach";

export const schemaTypes = [post, coach];
