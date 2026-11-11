# IPL Sanity Studio

Project `diyqcziw` (organization: Inge Performance Lab), dataset `production`.
Hosted Studio: https://inge-performance-lab.sanity.studio

Schemas live in `/sanity/schemas` (shared with the site's data files in `/src/data`).

## First-time setup (run once, from this folder)
```
npm install
npx sanity login
npx sanity dataset import seed/ipl-seed.ndjson production --missing
npx sanity deploy
```
`--missing` only adds documents that don't exist yet, so re-running it never overwrites edits.
To rebuild the seed file: from the repo root, `npx tsx --tsconfig tsconfig.json studio/seed/build-seed.ts`.

## Day to day
- Edit at the hosted Studio URL. `npm run dev` runs it locally at http://localhost:3333.
- `npm run deploy` after any schema change.
- The website is static: published changes appear after the next site build on Cloudflare.
