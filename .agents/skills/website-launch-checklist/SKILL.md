---
name: website-launch-checklist
description: A 42-point production launch checklist covering discovery, analytics tracking, Core Web Vitals speed, on-page SEO, social proof, conversion lead capture, and pre-launch cleanup based on the Outlier Synapse framework. Use when building, auditing, or launching web applications.
---

# Website Launch Checklist (42 Points)

This skill provides a systematic 7-part, 42-point checklist to audit and optimize web applications before and immediately after production launch to ensure max search visibility, speed performance, visitor trust, and conversion rates.

---

## ⚡ Fast-Track 11 Priority Items (Do First in 60 Mins)

| Priority | Action | Description |
|---|---|---|
| **1** | Google Search Console Setup | Verify domain ownership & request index for home page |
| **2** | Submit Sitemap | Ensure `/sitemap.xml` exists & submit to Search Console |
| **3** | Google Analytics (GA4) | Install measurement tag & verify realtime active visitors |
| **4** | Core Web Vitals Test | Run PageSpeed Insights (Mobile LCP < 2.5s, INP < 200ms, CLS < 0.1) |
| **5** | Bing Webmaster Tools | Import from GSC & enable IndexNow protocol |
| **6** | Page Titles & Descriptions | Unique 50-60 char title & 150-160 char meta description per page |
| **7** | `robots.txt` Verification | Ensure `/robots.txt` allows crawling and references sitemap |
| **8** | Social Share Preview (OG Tags) | `og:title`, `og:description`, `og:image` (1200x630px), `og:url` |
| **9** | Google Business Profile | Add business name, category, address, phone & site link |
| **10** | Mobile-Friendly & HTTPS | Verify 100% responsive layout, viewport tag & SSL redirection |
| **11** | Internal Links & Image Alt Text | Ensure zero orphan pages and descriptive `alt` tags on images |

---

## Part 1: Get Found by Google & Search Engines (Items 1–5)

1. **Google Search Console**:
   - Add Domain / URL prefix property.
   - Verify DNS or HTML tag.
   - Submit homepage for indexing via URL Inspection.
2. **Submit Sitemap**:
   - Verify `/sitemap.xml` loads cleanly.
   - Submit sitemap path in Google Search Console.
3. **Check `robots.txt`**:
   - Verify `/robots.txt` exists and does NOT contain `Disallow: /` for search bots.
   - Ensure sitemap URL is listed (`Sitemap: https://yourdomain.com/sitemap.xml`).
4. **Bing Webmaster Tools & IndexNow**:
   - Import property directly from GSC.
   - Enable IndexNow for instant page update notifications.
5. **Google Business Profile (For Local Businesses)**:
   - Claim listing with matching NAP (Name, Address, Phone).
   - Link website URL and upload at least 10 real photos.

---

## Part 2: Measure Traffic & Conversions (Items 6–8)

6. **Google Analytics (GA4)**:
   - Add GA4 Measurement ID (`G-XXXXXXXXXX`) in document `<head>`.
   - Verify active session in GA4 Realtime dashboard.
7. **Lead Action Event Tracking**:
   - Track form submissions, WhatsApp clicks, phone call taps (`tel:`), and calendar bookings using GTM or custom event triggers.
   - Mark lead events as Key Events in GA4.
   - Install Meta Pixel & fire `Lead` event on Thank-You confirmation.
8. **Microsoft Clarity**:
   - Add free Clarity script for heatmaps and session recordings.
   - Monitor mobile session recordings for rage clicks and UX drop-offs.

---

## Part 3: Speed & Core Web Vitals (Items 9–12)

9. **Core Web Vitals Optimization**:
   - LCP (Largest Contentful Paint) < 2.5 seconds.
   - INP (Interaction to Next Paint) < 200 milliseconds.
   - CLS (Cumulative Layout Shift) < 0.1.
10. **Image Compression**:
    - Convert raster images to WebP / AVIF format.
    - Compress images (< 200KB standard, < 300KB hero image).
    - Explicitly set `width` and `height` attributes to prevent CLS layout jumps.
11. **Lazy Loading**:
    - Add `loading="lazy"` to all images below the fold.
    - Keep hero images eager loaded (`priority` in Next.js).
12. **Limit Web Fonts & Third-Party Scripts**:
    - Restrict fonts to a maximum of 2 families & 3 weights.
    - Defer non-critical scripts (chat widgets, tracking scripts) after main content load.

---

## Part 4: On-Page SEO & Schema (Items 13–20)

13. **Unique Page Titles**: 50–60 characters, target keyword first, brand name at end.
14. **Meta Descriptions**: 150–160 characters with clear value proposition and call-to-action.
15. **Heading Structure**: Exactly one `<h1>` per page; logical `<h2>` and `<h3>` hierarchy.
16. **Image Alt Text**: Descriptive accessibility text for images; empty `alt=""` for purely decorative SVGs.
17. **Internal Linking**: Link home page to main service/project pages; ensure zero orphan pages (min 2 internal links per key page).
18. **Local / Targeted Keywords**: Include location & service keyword in Title, H1, hero copy, and footer where applicable.
19. **Structured Data (JSON-LD Schemas)**: Add `LocalBusiness`, `Organization`, `Person`, `SoftwareApplication`, `FAQPage`, or `BreadcrumbList` schemas.
20. **Breadcrumbs**: Clickable breadcrumb trail for subpages (`Home > Category > Page`).

---

## Part 5: Sharing, Trust & Social Proof (Items 21–28)

21. **Open Graph & Social Share Preview**:
    - `og:title`, `og:description`, `og:image` (1200x630px), `og:url`.
    - Twitter Card metadata (`summary_large_image`).
22. **Favicon & Apple Touch Icons**:
    - 48x48px (or larger) PNG/ICO favicon.
    - Dark mode & Light mode favicon variants (`media="(prefers-color-scheme: light/dark)"`).
    - 180x180px Apple touch icon.
23. **Real Customer Reviews / Testimonials**: Show 3–5 real quotes/video reviews near main call-to-action.
24. **Case Studies**: Structure as **Problem → Solution → Quantified Result** (with metrics/numbers).
25. **Interactive FAQ Section**: Answer top 5 buyer objections (pricing, process, timeline) with `FAQPage` schema.
26. **Real Team / Author Bio**: High quality photo and short background line.
27. **Embedded Map & Directions**: Embedded Google Maps widget for physical locations.
28. **Privacy Policy & Legal**: Footer link to Privacy Policy, Terms, and cookie consent banner where required.

---

## Part 6: Conversion Rate Optimization (Items 29–34)

29. **Above-the-Fold CTA**: Clear value headline & primary action button visible without scrolling (5-second rule).
30. **Sticky Mobile CTA Bar**: Fixed bottom bar on mobile screens with quick tap actions (Call / WhatsApp / Book).
31. **Dedicated Thank-You Page**: Redirect form submits to a confirmation page with GA4 conversion firing.
32. **Form UX Feedback**: Explicit success confirmation message & inline validation error messages.
33. **Promised Response Time**: Add micro-copy near submit buttons (e.g. *"We reply within 1 hour on business days"*).
34. **Clickable Action Links**:
    - Phone: `tel:+123456789`
    - Email: `mailto:name@domain.com`
    - Logo: Clickable home link (`/`).

---

## Part 7: Pre-Launch Cleanup & QA Pass (Items 35–42)

35. **Custom 404 Error Page**: User-friendly page with search/home navigation returning strict HTTP 404 status.
36. **Zero Broken Links / Dead Buttons**: Test all header links, footer links, and CTAs.
37. **Mobile Layout QA**: Zero horizontal scroll overflow; minimum 44px tap targets.
38. **Zero Placeholder Text**: Eliminate all `Lorem Ipsum`, dummy images, and update copyright year dynamically.
39. **Streamlined Navigation**: Keep main menu concise (5–6 items max); verify every footer link works.
40. **Enforce HTTPS & Single Canonical Domain**: 301 redirect HTTP → HTTPS and `www` → `non-www` (or vice versa).
41. **Automated Backups & Security**: Configure daily site backups and SSL certificate auto-renewal.
42. **Real Mobile Incognito QA**: Perform a end-to-end dry run on an actual mobile device over mobile data before final announcement.
