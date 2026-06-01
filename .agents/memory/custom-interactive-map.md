---
name: Custom interactive maps (no map library)
description: How to build a dependency-light interactive geo map where markers align with the drawn world geography.
---

# Custom interactive geo maps

When building a custom interactive map (markers on a stylized world map) without a full mapping library, the markers MUST be projected with the exact same projection as the rendered land geometry, or pins drift off the continents.

**Why:** A first cut that draws markers with a hand-rolled `x=(lng+180)/360, y=(90-lat)/180` over a generic dot grid (no real continents) gives no geographic meaning — a reviewer will flag it. Most off-the-shelf world SVGs are NOT full-extent plate carrée (they crop Antarctica / use Robinson/Mercator), so overlaying linear-projected markers misaligns.

**How to apply:**
- Use `d3-geo` (`geoEquirectangular`, `geoPath`) + `topojson-client` `feature()` + the `world-atlas` package (`countries-110m.json`) for real country geometry.
- Build ONE `projection` (e.g. `geoEquirectangular().scale(W/(2*Math.PI)).translate([W/2,H/2])`) and use it for both `geoPath` (land `<path d>`) and each marker via `projection([lng, lat])` (note: d3 takes [lng, lat], not [lat, lng]).
- Render land into an SVG `viewBox="0 0 W H"`; convert marker pixel coords to % of W/H so an absolutely-positioned button layer over the same aspect-ratio box lines up.
- For the dotted brand look: fill land subtly, then overlay an SVG `<pattern>` of small circles clipped to the land paths via `<clipPath>`.
- Accessibility: icon-only marker/close buttons need `aria-label`; keep `focus-visible` rings.
- Verify alignment numerically before trusting it (project a few known cities and sanity-check x%/y%).
