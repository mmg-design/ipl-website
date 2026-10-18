# Homepage implementation

Source: Figma Home frame 10410:16104 at 1440px, plus Training and Features dropdown states. Built with existing Lumos Section, Grid, ContentWrapper, typography, Button, Card and Dropdown components. Assets are local WebP/SVG; original used raster sources are retained in src/assets/figma.

## New variables
- `--dark-950: #011a29` and `--dark-1000: #000f17`: deeper navy background layers from the design.
- `--brand-600: #c8361c`: darker orange button treatment.
- `--line-strong: #b0b4b8`: secondary button border.
- `--font-gotham`: Astro local font registration using supplied Regular, Medium and Bold files.
- Existing color, heading, spacing and radius tokens were updated instead of creating a second scale. Headings use fluid 36–58, 32–42 and 32–36px endpoints converted to rem; body/nav line height is 1.667. Main radius is .75rem and container maximum is 80rem.

## New components
- HeroMain: hero background, overlay and partner-logo composition.
- Facility section: 8 Figma cards (card1 to card8) in the Lumos Slider `centered` variant with `loop`: infinite horizontal scroll and drag, proximity center snap, cards ride the top edge of a circle (drop and tilt from offset, radius 6x the slider width) and fade toward the edges (min opacity .45). Markers and arrows hidden via `controls={false}`.
- TechnologyGallery: staggered photographs and handwritten annotation.
- Testimonial: reusable quote, rating and attribution composition.
- CtaMain: full-image closing call to action.
- Scene: reusable layered backgrounds and decorative SVG assets.
These compositions are not represented by an existing library component. Existing Card, Dropdown and Button were extended with variants; ContentWrapper gained an optional visual ratio.

## Guesses
- Mobile sizing and stacking are derived from the desktop design and existing Lumos fluid patterns, with user approval to normalize values into the system.
- Navigation collapses below 80rem to prevent tablet crowding. Dropdowns support keyboard navigation, Escape, outside-click dismissal and exclusive opening.
- Hover and focus states use the existing token patterns and brand colors.
- The handwritten annotation uses a cursive fallback because the design font was not supplied.
- Hero and closing CTA backgrounds play muted, looping Bunny CDN videos (set in Scene.astro), with the Figma stills as posters.
- Generic design button labels were replaced with descriptive booking/contact actions.
- The canonical domain is inferred from the provided business email and should be confirmed before deployment.

## Snapped
- Gaps near 16px (15–17px) map to the existing 1rem maximum, delta +1 to -1px.
- Gaps near 24px (22.538–23.622px) map to 1.5rem, delta +1.462 to +.378px.
- Gaps near 32px (30–33px) map to 2rem, delta +2 to -1px.
- With user authorization, 37px maps to the 40px spacing maximum (+3px); 84/92px map to 80px (-4/-12px). The 4px label gap remains .25rem.

## Contrast
- White on the bright #ef4023 orange endpoint is approximately 3.87:1, below the 4.5:1 floor for small text. The matching design color is retained; darker portions of the gradient have higher contrast.

## Still open
- Live booking and navigation destination URLs will be supplied later, as confirmed by the user. Section links and email inquiries are centralized in src/data/home.ts for replacement.
- Real testimonial content, social destinations, legal pages and video sources remain unavailable. Design testimonial placeholders remain visibly marked.

## Validation
- Astro check: 55 files, zero errors, warnings or hints.
- Production build succeeds.
- Browser verified at 1440, 1024, 768 and 375px with no horizontal page overflow or broken loaded images.
- Desktop dropdown switching, arrow navigation, Escape and mobile menu selection were exercised.
- Gotham loads after restarting the development server with its new font configuration.
