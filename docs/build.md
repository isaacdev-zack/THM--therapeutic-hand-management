# Prompt for — THM Website Build

## Context You Already Have
Before writing any code, re-read `/home/isaacdev14/Desktop/projects/personal projects/myfuture` and `/home/isaacdev14/Desktop/projects/vibes/xBelong` (read-only, do not alter) and the Design & Architecture Specification Blueprint you already produced from them. That blueprint is our starting reference library, not a template to copy wholesale — see "What to Borrow" below.

You also have two new files: `THM_LOGO.pdf` and `5__AUG_2026_THM_PROFILE.docx`. Read both fully before writing any code or copy.

---

## The Project

Build a marketing website for **Therapeutic Hands Management Co. Limited (THM)** — a Kenyan caregiver training school (Nairobi, Westlands, also operating in Kisumu), NITA-curriculum certified. The site must sell the school visually and emotionally: it should feel premium, human, and trustworthy — not like a generic SaaS landing page.

**Stack:** Next.js + Tailwind CSS.

**Non-negotiable design constraints:**
- No gradients anywhere.
- No soft/pastel color washes behind icons — use solid, confident color fills.
- No redundant badge-style labels ("New!", "Premium", pill tags with no real function).
- No generic "AI-generated startup" aesthetic — no default rounded-blob illustrations, no stock hero gradients, no cookie-cutter SaaS layout patterns.
- Fonts: use **Inter** and/or **Poppins** as the primary official typefaces (Google Fonts, self-hosted via `next/font`) — not Space Grotesk/Sofia Sans from the reference blueprint, those were specific to the fintech/edu reference brands, not THM.
- Prioritize real performance (Core Web Vitals, image optimization via `next/image`, lazy-loaded media) and full responsiveness — this is not optional polish, it's a primary requirement equal to visual design.

---

## Brand Identity (confirmed, do not re-derive)

- **Brand Purple:** `#702F99`
- **Brand Gold/Amber:** `#F8BC0A`
- Use purple as the dominant/primary brand color (headers, primary buttons, dark sections) and gold as the accent/highlight color (CTAs, icons, callouts) — this matches how they're used in the official logo.
- The logo PDF is **vector** (paths + embedded fonts, no raster images). Extract it properly rather than screenshotting it:
  - Use a vector conversion tool (`pdftocairo -svg`, or open in Illustrator/Inkscape) to pull a true SVG of the logomark.
  - Produce a transparent-background PNG/SVG version for use in the navbar (on both light and dark backgrounds — there's already a white-icons-on-transparent variant printed in the PDF you can isolate) and a favicon set.
  - Do not attempt to "guess" the logo via prompted image generation — extract the actual asset.
- **Tagline note:** the printed tagline has a typo — "**Enbaling** Caregivers with Life Saving Skills" (should be "Enabling"). Use the corrected spelling, "Enabling Caregivers with Life Saving Skills," in all website copy and alt text. Keep the logo file itself as-is (don't try to edit the graphic).

---

## Real Content to Use (pull from `5__AUG_2026_THM_PROFILE.docx`, don't invent generic filler)

Use this as the actual source of truth for copy — rewrite it in a more compelling, web-native voice, but keep the facts accurate:

- **Vision:** To be a household name and pace-setter in the caregiving global market, empowering caregivers with specialized skills.
- **Mission:** To equip caregivers with high-quality skills to safeguard children and adults at risk, with empathy, love, and respect.
- **Core values:** Accountability, Confidentiality, Compassion, Communication, Equality, Kindness, Integrity.
- **Track record:** Registered April 2023; 150+ Caregivers graduated since 2023; trains under the NITA (National Industrial Training Authority) curriculum; operating in Nairobi and Kisumu Counties.
- **Financing partnership:** THM partners with **CHANCEN International** (an NGO) on a "Study Now, Pay Later" model for youth aged 19–35 — no upfront fees, no collateral, repay only after finishing studies. CHANCEN has financed 9,000+ students globally with a 93% graduation rate. This is a strong differentiator — give it real visual/section weight, not a footnote.
- **Curriculum highlights** (use for a "What You'll Learn" / curriculum section): hand hygiene, proper gloving, bed making, disinfection & decontamination, back care, vital signs, bedpan administration, catheter and perineum care, tube feeding, wheelchair transfer, hot/cold therapy, use of medical equipment & assistive devices, positioning, bed bath, standard/transmission-based precautions, sugar level monitoring, oxygen administration, patient grooming.
- **Career outcomes:** graduates work in hospitals (under registered nurse supervision), elder care homes, childcare centres, and private home-based care.
- **Collaborators:** hospitals/healthcare providers, homecare institutions, elderly care homes, childcare centres, individual homes needing care.
- **Contact:** New Waumini House, 3rd Floor, Westlands, Nairobi. P.O. Box 27268–00100. Tel: 0722 590 457 / 0700 589 647. Email: info@thm.co.ke. CEO: Mrs. Janipher Aluoch Otieno.

---

## Site Structure / Pages & Sections

1. **Sticky navbar** — logo, nav links (About, Programs, Financing/CHANCEN, Admissions, Contact), primary gold CTA button ("Apply Now" or "Enroll Today"). Transparent-over-hero on load, solid on scroll — reuse the scroll-state navbar pattern from the blueprint, restyled in THM colors/fonts.
2. **Hero section** — strong, real photography (see Imagery below) of caregivers with patients/elderly, headline built from the mission/tagline, primary + secondary CTA (Apply / Learn the Curriculum).
3. **About / Vision & Mission** — vision, mission, core values as a clean values grid (solid-color icon tiles, not soft-background icons).
4. **Track record / impact strip** — 150+ graduates, NITA-certified, counties served, founding year — treat as confident stat callouts, not soft "badge" chips.
5. **Curriculum / What You'll Learn** — the skills list above, organized into logical groups (e.g., Clinical Basics, Patient Support, Safety & Equipment) rather than one long bullet dump.
6. **Financing / CHANCEN partnership** — dedicated section explaining "Study Now, Pay Later," eligibility (19–35), and the 93% graduation stat. This should feel like a genuine feature, not an afterthought.
7. **Career pathways** — where graduates end up (hospitals, elder care, childcare, private homes) — could use a step/ladder pattern similar to the blueprint's "Ladder Section," restyled.
8. **Testimonials / social proof placeholder** — structure it even if using placeholder quotes, clearly marked for the client to replace with real graduate testimonials later.
9. **Admissions / CTA section** — clear next steps to apply, contact details.
10. **Footer** — dark purple (`#702F99` / darker derivative), full contact info, address, socials, sitemap.

Reuse from the blueprint where it genuinely fits THM's tone: glassmorphism sticky navbar, pill CTA buttons, staggered scroll-in animations, ladder/step section for career pathways. Skip anything that reads as fintech-specific (compounding calculators, referral mechanics) or that conflicts with the "no soft gradients / no AI aesthetic" rule (e.g., soft blurred background blobs).

---

## Imagery & Video

Use high-quality, real (non-AI-generated) photography and video relevant to caregiving/healthcare training — caregivers with elderly patients, hands-on training scenes, home care moments, hospital settings. Source both from licensed/free-to-use libraries with working, real URLs:
- **Photos:** Unsplash, Pexels.
- **Video b-roll:** Pexels Videos, Coverr, or Mixkit — short, muted, loopable clips suitable for a hero background or a dedicated training-showcase section.
Do not fabricate image/video links or hotlink from arbitrary/unlicensed sites — confirm each asset is licensed for commercial use. Optimize all images through `next/image` and all video through lazy-loaded, compressed, muted `<video>` elements (autoplay only when muted, with a reduced-motion fallback).

---

## Distinctive Design Direction — Do Not Replicate the Reference Projects 1:1

The blueprint from xBelong/MyFuture is a reference library for *patterns and interaction quality*, not a template to reskin. THM is a caregiving school, not a fintech or higher-ed platform — the visual identity should read as its own thing. Specifically:

1. **Duotone photography treatment** — process real caregiving photos into a two-tone duotone using brand purple + gold/cream (instead of full color). This makes licensed stock photography feel custom and brand-specific, and visually differs from both reference sites' full-color imagery.
2. **The hand motif as a recurring visual language** — the logo's hand-cradling-figures icon is a distinctive brand asset. Use a simplified hand silhouette as a scroll-reveal mask, section divider, or photo clip-path — solid shapes, not soft blurred blobs.
3. **Editorial, asymmetric hero layout** — large display headline overlapping a photo edge, off-center CTA, tight type tracking — more magazine-spread than the boxed "headline-left / art-right" hero pattern in the blueprint.
4. **Curriculum as an explorable index, not a bullet dump** — group the ~20 skills into interactive tabs or an accordion (Clinical Basics / Patient Support / Safety & Equipment), visually distinct from the reference projects' card-grid and category-selector patterns.
5. **A distinct visual identity for the CHANCEN financing section** — this is THM's strongest differentiator, so give it its own motif (e.g., a simple line-drawn progress/ledger graphic in solid brand colors) rather than reusing xBelong's compounding-calculator/SVG-graph pattern, which would read as too literal a copy.
6. **"Pathway" scroll narrative for career outcomes** — sequential story (classroom → hands-on practice → hospital placement → working graduate) using bold solid numeral tags (01–04), not soft badge chips.
7. **Warm paper-grain texture instead of gradients** — a subtle grain/texture overlay on cream background sections adds depth without violating the no-gradient rule.
8. **Real, muted, looped video b-roll** for the hero or a "See the Training" section — genuine footage, not the scroll-scrubbing frame-by-frame video pattern from the blueprint (a very literal signature of the reference projects; reusing it as-is would read as a direct copy).

Where a blueprint pattern still genuinely fits (glassmorphism sticky navbar, pill CTA buttons, staggered scroll-in animations), restyle it fully in THM's palette/typography/motifs rather than porting it unchanged.

---

## Git Workflow

Commit incrementally as the build progresses (not one giant commit) so the history reflects real progress — expect on the order of two dozen-plus commits across setup, design tokens, each major section, responsiveness pass, and polish. Write commit messages in plain, natural language describing what changed (e.g., "add sticky navbar with scroll transition," "build curriculum section with grouped skill categories") rather than conventional-commit prefixes like `feat:`, `fix:`, `refactor:`, `style:`.

---

