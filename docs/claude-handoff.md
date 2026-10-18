# Inge Performance Lab: Claude handoff

## Objective and current status

Continue an existing implementation of the Inge Performance Lab homepage from Figma using Lumos for Astro. The homepage has been built, including desktop Training and Features mega menus, mobile navigation, all main sections and the footer. Work is local and uncommitted on branch `main`. No deployment or PR was created. Do not rebuild the project from scratch.

The real project root is `/Users/andymilligan_mac/IPL_Website/IPL_Website`. The outer `/Users/andymilligan_mac/IPL_Website` directory is only the workspace parent. The preview is `http://localhost:4321/`; verify server status before starting another instance.

## User decisions that persist

- Never use em dashes in user-facing writing.
- Use Lumos for Astro, not Lumos for Webflow.
- Preserve the design while using Lumos rem and fluid token conventions. The user's exact direction was: “Keep what's in Lumos to match the design, but round it to the nearest rem value or fluid values that Lumos uses in order to keep the project scalable.”
- Live booking and navigation destination URLs do not exist yet. The user confirmed they will come later. Keep current section anchors and email inquiry actions until those URLs arrive. Do not repeatedly ask for them.
- The request was to implement the homepage and navigation states, not to invent additional interior pages, booking software or a backend.

## Read these first

1. `AGENTS.md`: repo instructions and development commands.
2. `LUMOS.md`: mandatory architecture, CSS and component conventions.
3. `.agents/skills/lumos-import-figma/SKILL.md`: Figma measurement and token-mapping workflow.
4. `docs/homepage-implementation.md`: decisions, assumptions, new tokens/components, normalization, contrast and open items.
5. `docs/figma-inventory.json`: measured design values.
6. `src/pages/index.astro`, `src/data/home.ts`, `src/styles/base.css`.

The project already has `.claude/skills/` and uses the shared `.agents/skills/` procedures. Check that relative skill symlinks remain intact if copying the repository. Codex-specific plugins and browser sessions do not transfer automatically to Claude. Use Claude's available Figma/browser integrations, or read the source and saved preview if those integrations are unavailable.

## Figma reference

Design URL: https://www.figma.com/design/9u2OeTbrbqqaZl7S79XtR1/Inge-Performance-Lab?node-id=10410-16100

File key: `9u2OeTbrbqqaZl7S79XtR1`.

| Area | Node ID |
| --- | --- |
| Page | 10410:16100 |
| Home frame, 1440 × 9261 | 10410:16104 |
| Hero | 10410:16105 |
| Facility | 10410:16123 |
| Training | 10410:16193 |
| HitTrax | 10410:16250 |
| The Den | 10410:16279 |
| Programs | 10410:16295 |
| Testimonials | 10410:16322 |
| Closing CTA | 10410:16370 |
| Footer | 10410:16400 |
| Navigation states group | 10410:16498 |
| Training dropdown | 10410:16521 |
| Features dropdown | 10410:16499 |

Figma MCP was used to inspect metadata, variables, design context, screenshots and assets. The implementation was compared at the 1440px frame width. Mobile sizing is derived, not measured from an approved mobile frame. Use the exact design imagery already downloaded rather than replacing it with stock images.

## Stack and commands

- Astro dependency `^7.3.8`, TypeScript `^6.0.3`, Lumos 1.0.0.
- Plain Astro components, CSS custom properties and small browser scripts. No React or Tailwind application layer.
- Static output with `@astrojs/sitemap`.
- Node requirement in package.json: `>=22.19.0`. Prior environment used Node 26.

Run from the actual project root:

```sh
npm exec astro dev status
npm exec astro dev -- --background
npm exec astro dev logs
npm exec astro dev stop
npm run check
npm run build
git diff --check
```

Do not start a second server when the existing one is running. If moving to another machine, copy the entire working project including untracked assets and dot-directories, then install dependencies with the existing lockfile. A clone of the current committed branch alone will omit this implementation.

## Architecture and file map

| File | Purpose/change |
| --- | --- |
| `src/pages/index.astro` | Homepage section composition, without page CSS |
| `src/data/home.ts` | Training/facility/program data, asset paths, contact and booking targets |
| `src/components/global/Nav.astro` | Transparent/solid header, desktop mega menus and mobile navigation |
| `src/components/global/Footer.astro` | Footer mockup, navigation, contact, hours and social marks |
| `src/components/interactive/Dropdown.astro` | Mega-menu variant, exclusive open state and keyboard/dismissal handling |
| `src/components/item/Card.astro` | Facility, pathway, program, nav-training and nav-feature variants; existing variants retained |
| `src/components/Button.astro` | Branded styling and regular/small sizing |
| `src/components/typography/Eyebrow.astro` | Pill treatment |
| `src/components/wrapper/ContentWrapper.astro` | Optional variant-specific visual ratio, used for The Den |
| `src/components/content/HeroMain.astro` | Hero composition and partner logos |
| `src/components/content/FacilityGallery.astro` | Rotated cards and inert decorative outer copies |
| `src/components/content/TechnologyGallery.astro` | Staggered photo gallery and handwritten annotation |
| `src/components/content/Testimonial.astro` | Rating, quote and attribution |
| `src/components/content/CtaMain.astro` | Closing image CTA |
| `src/components/media/Scene.astro` | Layered image/SVG backgrounds |
| `src/styles/base.css` | Shared brand and fluid design tokens |
| `astro.config.mjs` | Local font registration and site configuration |
| `src/components/utility/BaseHead.astro` | Gotham preload, page metadata and favicon |
| `src/consts.ts` | Site identity, description and canonical origin |

## Lumos conventions to preserve

- Compose ordinary layouts from existing Section, Grid, ContentWrapper, typography and ButtonWrapper components.
- Add a variant to an existing component before creating a parallel library component.
- A custom component must own actual CSS or behavior, with the smallest useful boundary.
- Keep custom CSS inside its owning component using `<style is:global>` and `@layer components`. Pages carry no CSS.
- Root component classes end in `_wrap`; child classes share the family prefix. Do not target library component internals from a custom wrapper.
- Use rem lengths, ch text widths and em font-relative sizes. Use existing fluid tokens for scalable spacing and type.
- Read Grid breakpoints rather than guessing them. Navigation uses an intentional 80rem collapse threshold because the full menu crowds tablet widths.
- Preserve prop order, render handling, shared tooltip wording and discriminated variant-specific props. Read LUMOS.md for the complete checklist.

## Design system choices

- Navy `#022337`, raised navy `#0b3550`, orange `#ef4023`, white text.
- Additional deeper navy layers `#011a29` and `#000f17`, darker orange `#c8361c`, secondary border `#b0b4b8`.
- Heading fluid endpoints: h1 36–58px, h2 32–42px, h3 32–36px, implemented through the existing rem-based clamp system.
- Heading line heights: 1.02, 1.08, 1.15. Body/nav shared line height: 1.667.
- Main container maximum: 80rem. Main radius: .75rem.
- Irregular spacing was normalized into the existing scale with user authorization. See the implementation report for exact deltas.
- Global text-box trimming affects apparent spacing and height. Account for that before changing typography or margins.

## Gotham error and resolution

The user encountered `FontFamilyNotFound` for `<Font cssVariable="--font-gotham" />`. Gotham is now registered through Astro's local font provider in astro.config.mjs, using supplied files at weights 400 Regular, 500 Medium and 700 Bold. BaseHead requests the same CSS variable. Restarting the development server after the config change resolved the error, and browser rendering confirmed font availability.

If the error returns, verify the loaded project/config, exact CSS-variable match and font files, then restart the server. Do not edit Astro's internal Font component or silently replace Gotham.

## Assets

- `public/images/figma/`: referenced WebP and SVG assets.
- `src/assets/figma/`: original raster sources retained for the assets in use.
- `src/assets/fonts/`: supplied Gotham OTF files plus existing Inter.
- Raster images were converted to WebP, quality 88, maximum width 1920. SVGs remain SVGs.
- Useful identifiers: hero `hero-4.webp`, closing CTA `cta-0.webp`, HitTrax portrait `technology-0.webp`, nav logo `b1d48.webp`, footer logo `795a9.webp`.
- Card image crops are deliberate and variant-specific. Preserve them unless a visual comparison warrants a change.
- `docs/homepage-preview.jpg` is a saved desktop screenshot, not an asset used by the page.

## Interaction behavior

- Desktop Training and Features menus open exclusively.
- Dropdown keyboard arrows move through links; Escape closes and restores focus.
- Outside interaction and focus leaving dismiss menus.
- Header changes from transparent to solid with scroll or open navigation.
- Mobile toggle contains nested menus and closes after a section link is selected.
- Decorative facility copies are inert and do not duplicate section IDs.
- Booking currently opens an email inquiry to `info@ingeperformancelab.com`. No actual booking system is connected.

## Verification already completed

- `npm run check`: 55 files, zero errors, warnings or hints.
- `npm run build`: successful static production build.
- `git diff --check`: passed.
- Browser inspected at 1440, 1024, 768 and 375px with no horizontal page overflow and no broken loaded images in the checks.
- Desktop menu switching, keyboard arrows, Escape, mobile menu opening and section selection were exercised.
- Gotham loaded successfully after restart.

These are prior verification results, not a guarantee after future edits. Lazy images may need to scroll into view before a full-page screenshot captures them. Cross-browser testing and a formal accessibility audit have not been completed.

## Remaining items and honest limitations

- Await live booking URLs and eventual interior-page destinations. User knows these are unavailable.
- Replace visibly marked testimonial placeholders when real copy/attributions arrive.
- Supply social destinations and legal-page content/URLs.
- Supply video sources if the hero or closing CTA should play video. Current backgrounds are still frames.
- The handwritten annotation uses a cursive fallback because its design font was unavailable.
- Confirm `https://ingeperformancelab.com` as the production canonical domain before deployment. It was inferred from the email address.
- White on the bright orange endpoint is approximately 3.87:1, below 4.5:1 for small text. This design match was flagged, not changed.
- Responsive layouts and interaction states not drawn in Figma are implementation judgments. Further visual review is reasonable, but do not claim pixel-perfect parity everywhere.

## Working-tree preservation

All implementation edits and new assets are currently uncommitted. package-lock.json was already modified and Gotham files were already present as untracked user files before implementation began. Preserve those changes. Avoid reset, clean or replacement scaffolding. No commit, push or deployment is needed merely to continue locally.

## Suggested first action in Claude

Read this handoff and the repo instructions, inspect git status, check the dev server, and open the existing homepage. Establish current state before editing. Ask the user what refinement they want next if no new change is specified. Continue the existing implementation and preserve the accepted decisions above.
