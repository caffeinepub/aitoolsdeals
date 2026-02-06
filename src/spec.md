# Specification

## Summary
**Goal:** Improve landing page SEO and loading performance using technical-only optimizations while keeping the UI pixel-identical (no visible changes of any kind).

**Planned changes:**
- Enforce a strict “no visible changes” approach by limiting updates to technical/performance/SEO work only.
- Code-split and lazy-load below-the-fold React sections (after the tools grid) so above-the-fold content loads with a smaller initial JS bundle, without introducing layout shift.
- Defer/async non-critical JavaScript work so it doesn’t block first paint/interaction while preserving identical behavior.
- Optimize image delivery without altering appearance: add explicit intrinsic sizing to prevent CLS, keep lazy loading/async decoding for non-critical images, and serve modern formats (WebP/AVIF) via `<picture>` with identical fallback dimensions/visuals.
- Tighten React Query hook-level caching/deduplication to prevent duplicate network requests and unnecessary refetching (without modifying `frontend/src/main.tsx`).
- Ensure skeleton/loading states end immediately once tools data is available (no visual redesign of skeletons).
- Add technical SEO metadata in `frontend/index.html` (title, meta description using existing messaging, canonical URL, Open Graph, Twitter tags) with no visible UI changes.
- Add static `sitemap.xml` and `robots.txt` (allow indexing) served from the frontend.
- Add JSON-LD structured data (WebSite, Organization, ItemList derived from the same tools data) without rendering anything into the UI.
- Provide a technical validation checklist in PR/notes including Lighthouse Performance/SEO scores and explicit confirmation of pixel-identical UI.

**User-visible outcome:** The landing page looks exactly the same but loads faster, avoids unnecessary refetching, and is more discoverable by search engines (metadata, sitemap/robots, and structured data in place).
