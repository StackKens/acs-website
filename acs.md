# MASTER PROMPT: ACS WEBSITE COMPLETE AUDIT, PROFESSIONAL REDESIGN AND PRODUCTION IMPLEMENTATION

## 1. Your Role and Mission

Act as a senior product designer, UX architect, SaaS brand designer, frontend architect, conversion-focused website designer, accessibility specialist, and senior frontend engineer.

You are working on the existing ACS Web marketing website for Academic Cloud System (ACS), a school management platform being developed primarily for primary schools in Uganda.

Your mission is to audit the existing website, understand its actual content and capabilities, preserve important established information, and transform it into a cohesive, professional, production-quality marketing website.

This is a redesign and improvement of an existing product website, not an instruction to replace the existing website with a simplified template.

The finished website must communicate the value of ACS clearly, explain its capabilities in detail, present its actual pricing and branding accurately, and make it easy for school decision-makers to learn about the platform and contact the team.

**The objective is not merely to make the website look attractive. The objective is to create a complete, credible, polished, functional marketing experience that represents the real ACS product.**

Work directly in the existing project and preserve the current technology stack and useful architecture unless a justified change is necessary.

If the environment is Framer, use editable native Framer elements and reusable components wherever possible. If it is a coding environment, use the existing framework and conventions. If the project already uses Next.js and TypeScript, retain them unless there is a compelling reason not to.

Do not begin by generating a replacement website or deleting existing pages.

---

## 2. NON-NEGOTIABLE RULE: AUDIT BEFORE REDESIGNING

Before modifying the website, thoroughly inspect the existing project.

Do not change any code, content, design, routes, pricing, configuration, or assets during this initial audit.

Investigate the following:

### A. Existing website structure

- All existing routes and pages.
- Header, footer, navigation and mobile menu.
- Hero sections and calls to action.
- Feature pages and detailed feature descriptions.
- Pricing page, plans, prices, billing periods, discounts and pricing conditions.
- AI-related sections, explanations, demonstrations and associated product claims.
- About, contact, demo enquiry and onboarding pages.
- Existing privacy and terms pages.
- Product screenshots, dashboard previews, illustrations and icons.
- Existing animations, interactions and responsive behaviour.
- SEO metadata, social-sharing metadata, sitemap and robots configuration.
- Existing forms, submission handlers, APIs, integrations and environment variables.

Inspect the actual source files and running website where available. Do not rely solely on screenshots or assumptions.

### B. Existing brand identity

Identify and preserve the established ACS identity, including:

- The actual ACS logo and any logo variants.
- Existing favicon and brand assets.
- Established brand colours and typography, where applicable.
- Existing brand wording and product descriptions.
- Existing spacing, visual conventions and reusable components worth retaining.

**Use the real ACS logo and existing brand assets. Do not create a replacement logo merely because a new logo concept has been supplied in a design prompt.**

If the current logo is available as an image, SVG or component, reuse the actual asset. Do not approximate it with ordinary text, emoji or an unrelated icon.

### C. Existing product information

Treat the existing website and verified project documentation as the primary sources of truth for established ACS product information.

Specifically investigate:

1. Existing pricing and plan structures.
2. AI functionality and its actual intended purpose.
3. The complete list of advertised product features.
4. Existing feature descriptions and explanations.
5. Current onboarding or trial offers, if any.
6. Existing contact details and enquiry destinations.
7. Existing customer evidence, testimonials or case studies, if any.
8. Existing technical or integration claims.
9. Existing product screenshots and demonstrations.

Determine which capabilities are implemented, which are partially implemented, which are planned, and which cannot be verified.

Do not automatically treat a feature as unavailable simply because its implementation is outside the marketing website repository. Conversely, do not treat an existing marketing claim as proof that the underlying functionality works.

Where necessary, distinguish between information verified in the website, information confirmed by application code or documentation, and information requiring owner confirmation.

### D. Technical audit

Inspect:

- Framework and dependency versions.
- Routing and page composition.
- Component reuse and design tokens.
- Styling architecture.
- Existing image and font loading.
- Responsive breakpoints.
- Accessibility issues.
- Runtime errors, broken links and console errors.
- Form submission behaviour.
- Security-sensitive configuration and environment variables.
- Build, lint and test commands.
- Deployment configuration.

### Required audit report

Before implementation, present:

1. The current website architecture.
2. A list of all existing pages and their purpose.
3. An inventory of existing pricing, AI content, features, branding and other important product information.
4. A list of assets and components to preserve.
5. A list of confirmed defects and design weaknesses.
6. A list of missing or incomplete pages and functionality.
7. A proposed redesign and implementation plan.
8. A clear list of information that requires owner confirmation.

Then stop and wait for my approval of the redesign plan.

Do not begin redesigning or modifying files during this first stage.

---

## 3. CONTENT PRESERVATION AND ACCURACY

The redesign must preserve the substance of the existing ACS website while improving its presentation, clarity, structure and usability.

### Pricing

Pricing information already exists on the website.

Inspect the current pricing implementation and preserve its actual plan names, amounts, billing periods, feature allocations, conditions and other relevant information.

Do not replace existing prices with invented values or generic "pricing to be confirmed" placeholders when verified pricing is already available.

Do not remove existing pricing tiers or simplify them into a single pricing card merely to fit the new design.

If prices or plan conditions conflict across pages, identify the inconsistency and propose a correction before changing them.

If a particular price or condition cannot be verified, preserve the issue for owner review rather than inventing an answer.

### Logo and branding

Preserve the real ACS logo, favicon and established brand identity.

You may improve how the logo is positioned, scaled and integrated into the design, but do not replace it without explicit approval.

### AI-related content

AI-related content already exists on the website and must be investigated carefully.

Preserve and professionally present the existing AI information that is accurate and relevant to ACS.

Explain the actual purpose of each AI-related capability, its intended users, its practical value and its availability status.

Do not automatically remove AI from the website. Equally, do not position ACS as an AI-only product or imply that every part of the platform is AI-powered.

Avoid inventing autonomous capabilities, predictive analytics, integrations, model-training features, automated decision-making or other functionality not supported by the actual product information.

### Detailed feature descriptions

Preserve and improve the existing detailed feature page and other feature descriptions.

Do not replace a comprehensive feature catalogue with a generic grid containing only a few vague summaries.

Organise the features into understandable groups, provide useful explanations, show relevant product previews where appropriate, and distinguish confirmed functionality from planned capabilities.

### Other existing content

Review every existing page before deciding whether to preserve, revise, consolidate or remove its content.

Do not silently remove useful sections, working interactions, SEO content, existing routes or conversion opportunities.

Any material removal, consolidation, or change in product positioning must be identified in the redesign proposal and approved before implementation.

---

## 4. THE REQUIRED VISUAL DESIGN SYSTEM

Apply the following visual system consistently across the redesigned website.

This is the target visual direction. Existing factual content, pricing and brand assets remain authoritative.

### Colour palette

Define reusable design tokens for:

- Brand blue: #245CDE
- Heading and primary ink: #142D4E
- Supporting text: #617188
- Pale section background: #F2F6FC
- Borders and dividers: #DEE6F0
- White: #FFFFFF
- Product preview outer surface: #E5EDFA
- Product preview outer border: #D5E1F3
- Secondary chart bars: #9EB9F4

Use these colours consistently throughout navigation, buttons, cards, forms, product previews, charts and footer sections.

Avoid unrelated accent colours, rainbow gradients, unnecessary decorative gradients, excessive shadows and visually noisy backgrounds.

Where the actual logo contains additional colours, preserve the logo itself while keeping the website interface within the approved palette.

### Typography

Use Inter throughout the website.

Desktop:

- Main heading: 54px, weight 600, line height 1.12, letter spacing -2px.
- Section heading: 36px, weight 600, line height 1.2, letter spacing -1.2px.
- Item heading: 20px, weight 600, line height 1.35.
- Body: 16px, weight 400, line height 1.65.
- Supporting text: 13px, weight 400, line height 1.55.
- Eyebrow: 11px, weight 600, uppercase, letter spacing 1.5px.
- Button label: 14px, weight 600.

Tablet:

- Main heading: 44px.
- Section heading: 32px.

Mobile:

- Main heading: 38px.
- Section heading: 28px.

Keep body text readable at 16px. Use responsive adjustments where necessary to prevent wrapping problems and preserve a clear visual hierarchy.

### Layout and spacing

- Maximum main content width: 1104px.
- Desktop horizontal gutters: 48px.
- Tablet gutters: 32px.
- Mobile gutters: 24px.
- Desktop section spacing: approximately 64–80px vertically.
- Mobile section spacing: approximately 40–48px vertically.

Use a consistent spacing scale: 8, 12, 16, 20, 24, 32, 40, 48, 64 and 80px.

Avoid unnecessary empty space, cramped content, excessively long text lines and inconsistent section widths.

### Surfaces and controls

- Buttons: 7px radius, approximately 14px vertical and 22px horizontal padding.
- Primary button: brand blue with white text.
- Secondary button: white background, subtle border and navy text.
- Cards and product panels: 8–12px radius.
- Product preview frames: 14px radius.
- Subtle borders and little or no shadow.

Avoid pill-shaped buttons everywhere, glassmorphism, excessive floating cards and decorative effects that reduce clarity.

### Overall design character

The finished website must feel like a mature, professional education technology platform.

It must not resemble:

- A generic AI-generated SaaS template.
- A school website builder.
- A gaming or consumer social application.
- A futuristic AI landing page full of glowing effects.
- A generic startup landing page with little real product information.

Use real product-oriented layouts, clear information hierarchy, restrained colours and credible explanations.

---

## 5. COMPLETE WEBSITE PAGE REQUIREMENTS

Audit and preserve existing routes, then implement a coherent set of complete pages. Use these routes when applicable, adapting them to existing routes and established URL conventions.

### Home — /

Create a strong, polished homepage with:

1. Shared navigation.
2. A split-layout hero.
3. A believable ACS product dashboard preview.
4. A clear explanation of what ACS does.
5. Core product capabilities.
6. A detailed academic-results showcase.
7. Other important established features, including relevant AI capabilities.
8. A concise explanation of how schools can get started.
9. The actual existing pricing introduction or pricing summary.
10. The existing brand and Uganda-focused product context.
11. A demo or enquiry section.
12. A complete shared footer.

Hero headline:

"Your school. Better organized."

Supporting copy:

"Bring pupil records, attendance and academic results together with Academic Cloud System. A practical school management platform, built around primary schools in Uganda."

Primary action: "Get Started"

Secondary action: "Explore ACS"

The hero should immediately explain the product and pair the copy with a high-quality product preview.

Do not overload the hero with too many claims, buttons, floating elements or decorative illustrations.

The homepage must introduce the breadth of ACS without trying to explain every feature in full. Link to detailed pages for visitors who want to learn more.

### Features — /features

This must be a genuinely comprehensive product-capabilities page, not a shallow marketing grid.

Audit the existing feature catalogue and preserve its meaningful information.

Organise the actual capabilities into logical groups, including the following where supported by the product:

- Pupil records and profiles.
- Class organisation and pupil allocation.
- Attendance management.
- Assessments and examination results.
- Academic calculations and grading.
- Report-card preparation and publication.
- School administration.
- School-level reporting and analytics.
- AI-related capabilities.
- Other established modules already advertised on the existing website.

For every feature group, explain:

1. What it does.
2. Which school roles use it.
3. The problem it addresses.
4. How it fits into everyday school workflows.
5. What relevant information or output it provides.
6. Its availability status, where this cannot be assumed.

Use alternating text-and-product-preview sections, appropriate subheadings and meaningful examples.

Do not invent capabilities simply to make the page look complete.

Do not omit existing important features simply because they are not explicitly listed above.

Provide navigation or a table of contents for a long feature page where it improves usability.

Finish with a clear enquiry or demonstration action.

### How It Works — /how-it-works

Explain a credible adoption journey:

1. Start a conversation.
2. Discuss the school's needs and the available modules.
3. Agree on the necessary setup information, users and configuration.
4. Begin using the agreed workflows.

Explain what school administrators can prepare before onboarding, such as class structures, pupil records and relevant assessment information.

Do not promise instant setup, automatic migration, guaranteed onboarding timelines or integrations that have not been verified.

Include a concise FAQ based on real product information and common onboarding questions.

Provide a clear next action.

### Pricing — /pricing

Use the existing website's actual pricing information.

Preserve the existing plans, prices, billing periods, conditions and inclusions after verifying them.

Design the page to make comparisons easy without inventing additional tiers or changing the meaning of existing plans.

If the existing website has a trial, promotion, introductory offer or school-specific arrangement, preserve it only with its actual terms and current availability.

Where the existing information is incomplete or contradictory, identify the problem and obtain approval for corrections.

Explain relevant pricing considerations such as available modules, onboarding, billing periods, support and total cost, where appropriate.

Provide a prominent action such as "Discuss school pricing" or the existing established pricing CTA.

### About — /about

Explain:

- What ACS stands for.
- What the platform is intended to do.
- Why it is being developed.
- The challenge of scattered paper records and disconnected school information.
- Its focus on Ugandan primary schools.
- Its practical, clarity-first approach.
- The product's direction and established principles.

Preserve any verified existing company or team information that is relevant.

Do not invent founders, biographies, founding dates, office locations, institutional affiliations, awards or customer relationships.

### Contact / Request a Demo — /contact

Create a complete, accessible enquiry experience.

Fields:

- Name.
- School name.
- Email.
- Optional phone number.
- Enquiry topic.
- Message.

Enquiry topics should include:

- Product demonstration.
- Pricing and available features.
- School onboarding.
- Other enquiries.

Inspect the existing form and preserve any configured, functioning submission destination.

If no working destination exists, explain what configuration is required and provide a genuine integration-ready implementation.

The form must include:

- Required-field validation.
- Email validation.
- Useful inline error messages.
- A visible pending state.
- Protection against accidental duplicate submission.
- A genuine success state after confirmed submission.
- A recoverable error state when submission fails.
- Keyboard accessibility and correct field labels.

Never show a fake success message. Never silently discard enquiries. Never expose credentials or private API keys in client-side code.

Do not replace working existing integrations without a reason and approval.

### Privacy — /privacy

Preserve and review any existing privacy content.

Where a policy requires drafting or updating, clearly mark the document as a draft requiring owner and legal review.

Do not invent retention periods, hosting locations, legal entity details, certifications, subprocessors or compliance claims.

### Terms — /terms

Preserve and review any existing terms.

Clearly identify unfinished legal content as a draft requiring owner and legal review.

Do not represent unapproved terms as final or legally reviewed.

### Not Found — 404

Create a polished 404 page with a helpful message and working links back to Home and Contact.

It should share the site's branding and layout conventions.

### Additional existing routes

Preserve and appropriately redesign other meaningful existing routes discovered during the audit.

Do not leave existing important links pointing to missing pages, empty pages or the homepage by default.

---

## 6. REALISTIC PRODUCT PREVIEWS

Create reusable, responsive product-preview components that make ACS understandable to prospective schools.

Include previews for:

1. School overview dashboard.
2. Attendance register.
3. Academic results.
4. Pupil report card.
5. Any additional existing modules that benefit from a visual demonstration, including AI-related functionality if supported.

Every illustrative preview
