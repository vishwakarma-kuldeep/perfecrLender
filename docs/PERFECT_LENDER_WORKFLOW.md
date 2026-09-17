# Perfect Lender Website — Development Workflow

## 1. Project Goal

Upgrade the existing Perfect Lender website into a modern, attractive, responsive and fast-loading website using:

- Next.js
- TypeScript
- Tailwind CSS
- Motion/Framer Motion where useful
- Static content initially
- Dynamic-ready architecture for future API/CMS/database integration

The existing website remains the content/business reference. The new implementation should improve the visual design, UX, responsiveness, accessibility, SEO and performance.

---

## 2. Core Architecture Principles

### Content and UI must remain separate

Static content will live inside `src/constants/` and components will consume that content.

Example:

```text
src/
├── app/
├── components/
├── constants/
├── types/
├── lib/
└── ...
```

Content files:

```text
src/constants/
├── site.ts
├── navigation.ts
├── home.ts
├── loans.ts
├── banners.ts
├── about.ts
├── contact.ts
└── footer.ts
```

Do not hard-code large amounts of website copy directly inside UI components.

### Future dynamic support

Current:

```text
constants → components → static website
```

Future:

```text
API / CMS / Database
        ↓
data/repository layer
        ↓
same component interfaces
        ↓
dynamic website
```

The UI should not depend on where the content comes from.

---

## 3. Content Formatting

Content should remain simple and human-readable.

For inline formatting, prefer Markdown-style content where appropriate:

```text
**bold**
*italic*
[link](...)
```

Avoid creating a separate object for every word unless a real requirement appears.

Styling classes should generally remain in components, not content files.

---

## 4. Banner System

The website must support banners from the beginning even if only a few are used initially.

Supported banner types:

- Image banner
- Video banner
- Responsive image
- Responsive video
- Desktop-specific media
- Mobile-specific media
- Poster image for videos
- Text overlay
- CTA buttons
- Optional overlay
- Optional animation
- Optional start/end dates for future scheduling

Example conceptual structure:

```text
Banner
├── Image
├── Video
├── Responsive media
├── Content
├── CTA
├── Overlay
└── Animation
```

Future banner data may come from an API/CMS without replacing the banner UI component.

---

## 5. Responsive Media

Images and videos must adapt to screen size.

Support:

```text
Desktop
Tablet
Mobile
```

Where useful, allow separate desktop/mobile assets so mobile users do not download unnecessarily large media.

Video banners should support appropriate defaults such as:

```text
muted
autoplay
loop
playsInline
poster
```

Video loading should be handled intelligently to avoid unnecessary initial network usage.

---

## 6. Animation & Transition Strategy

The website will intentionally use animations and transitions.

Animations may include:

- Hero entrance animations
- Scroll reveal
- Section transitions
- Card hover effects
- Button micro-interactions
- Icon animations
- Image reveals
- Counters
- Background effects
- Page transitions
- Subtle parallax where appropriate

Use:

- Tailwind transitions for simple interactions
- CSS animations for lightweight effects
- Motion/Framer Motion for richer interactions

Prefer smooth `transform` and `opacity` based animations.

Do not avoid animation merely to save a tiny amount of load time. The priority is a good balance between visual quality and performance.

---

## 7. Performance Goals

The website should feel fast while still being visually rich.

Priorities:

1. Fast initial page load
2. Optimized images
3. Optimized video loading
4. Minimal unnecessary JavaScript
5. Server Components by default
6. Static generation where possible
7. Proper font loading
8. Lazy loading for non-critical media
9. Avoid unnecessary dependencies
10. Good caching strategy
11. Production optimization through Nginx/CDN where applicable

Do not over-optimize at the cost of design quality.

---

## 8. Component Architecture

Components should be reusable and focused.

```text
components/
├── layout/
│   ├── Header.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
│
├── sections/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Banner.tsx
│
├── media/
│   ├── ResponsiveImage.tsx
│   ├── ResponsiveVideo.tsx
│   └── BannerMedia.tsx
│
└── ui/
    ├── Button.tsx
    ├── Card.tsx
    └── SectionHeading.tsx
```

Avoid creating components for every tiny piece unless reuse or complexity justifies it.

---

## 9. TypeScript Types

Define reusable types for important content structures.

Example areas:

```text
types/
├── content.ts
├── navigation.ts
├── loan.ts
├── banner.ts
└── testimonial.ts
```

Types should make future API/CMS integration easier.

---

## 10. SEO

The upgraded website should preserve and improve SEO.

Plan for:

- Page metadata
- Open Graph metadata
- Twitter/X metadata where useful
- Semantic HTML
- Proper heading hierarchy
- Descriptive image alt text
- Sitemap
- Robots configuration
- Canonical URLs where required
- Clean URLs
- Fast Core Web Vitals

Existing important URLs should be preserved where practical.

---

## 11. Accessibility

Build accessibility into components from the beginning.

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper button/link usage
- Image alt text
- Accessible mobile navigation
- Accessible video controls when controls are exposed
- Reduced-motion support

---

## 12. Development Workflow

We will work in this order:

### Phase 1 — Audit

- Review current Perfect Lender website
- Identify pages
- Identify existing content
- Identify existing assets
- Identify current layout
- Identify reusable sections
- Identify SEO requirements
- Identify opportunities for improvement

### Phase 2 — Design System

- Select fonts
- Define colors
- Define spacing
- Define typography scale
- Define border radius
- Define shadows
- Define buttons
- Define cards
- Define animation language
- Define responsive breakpoints

### Phase 3 — Next.js Setup

- Create Next.js project
- Configure TypeScript
- Configure Tailwind CSS
- Configure aliases
- Create folder structure
- Create global styles
- Create base UI components

### Phase 4 — Content Architecture

- Create `constants/`
- Create content types
- Move website content into content files
- Create banner data structure
- Create navigation data
- Create reusable content rendering patterns

### Phase 5 — Core Layout

Build:

- Header
- Navigation
- Mobile menu
- Footer
- Global page container
- Buttons
- Typography
- Common UI elements

### Phase 6 — Homepage

Build the homepage section by section.

Each section should:

1. Receive content/data
2. Render reusable UI
3. Support responsive layouts
4. Support required animations
5. Avoid unnecessary client-side code

### Phase 7 — Other Pages

Implement remaining pages using the same component system.

### Phase 8 — Media

Add:

- Optimized images
- Responsive images
- Video banners
- Poster images
- Desktop/mobile media variants
- Lazy loading where appropriate

### Phase 9 — Animation Pass

After the basic UI is stable:

- Add entrance animations
- Add scroll reveals
- Add hover effects
- Add transitions
- Add page transitions where useful
- Add reduced-motion behavior

Animation should be added systematically rather than randomly per component.

### Phase 10 — Performance Pass

Check:

- Bundle size
- Image sizes
- Video sizes
- Font loading
- Client components
- Lazy loading
- Caching
- Core Web Vitals
- Lighthouse performance

### Phase 11 — SEO & Accessibility Pass

Verify:

- Metadata
- Headings
- Links
- Alt text
- Keyboard navigation
- Focus states
- Sitemap
- Robots
- Mobile usability

### Phase 12 — Production Deployment

Target deployment architecture:

```text
User
 ↓
CDN / Cloudflare (optional)
 ↓
Nginx
 ↓
Next.js
```

Configure:

- Nginx reverse proxy
- Compression
- Cache headers
- HTTPS
- Security headers
- Process management
- Deployment workflow

### Phase 13 — CI/CD

After the application is stable, consider:

- GitHub Actions
- Automated linting
- Type checking
- Production build checks
- Automated deployment
- Deployment rollback strategy

---

## 13. Rules for Future Development

### Rule 1
Do not put website content directly into reusable components unless it is truly UI-specific.

### Rule 2
Do not introduce a dependency when native Next.js, CSS or Tailwind can solve the problem cleanly.

### Rule 3
Do not make a component `"use client"` unless it actually requires client-side functionality.

### Rule 4
Do not sacrifice attractive design for microscopic performance gains.

### Rule 5
Do not sacrifice performance by adding unnecessary heavy libraries.

### Rule 6
Keep components reusable but avoid unnecessary abstraction.

### Rule 7
Any new content type should be designed so it can later come from an API/CMS.

### Rule 8
Any new media-heavy feature should consider desktop/mobile asset sizes.

### Rule 9
Animations should improve UX, not make the interface distracting.

### Rule 10
Before changing the architecture, discuss the impact on future dynamic conversion.

---

## 14. Definition of Done

A page/feature is considered complete when:

- Content is separated from UI
- TypeScript passes
- ESLint passes
- Responsive behavior works
- Mobile layout works
- Required animations work
- Images/videos are optimized
- Accessibility basics are covered
- SEO metadata is appropriate
- No unnecessary client-side code exists
- The feature can reasonably be migrated to dynamic data later

---

## 15. Long-Term Direction

The final architecture should allow this evolution:

```text
VERSION 1
Static Next.js website
        ↓
VERSION 2
Better content management
        ↓
VERSION 3
API/CMS powered content
        ↓
VERSION 4
Dynamic admin-controlled website
```

The frontend should be designed now so that moving from Version 1 to Version 3/4 does not require rebuilding the UI from scratch.

---

## 16. Working Method

We will build the project incrementally.

For each major step:

```text
PLAN
 ↓
IMPLEMENT
 ↓
TEST
 ↓
REVIEW
 ↓
APPROVE
 ↓
NEXT STEP
```

No large unexplained code dump.

When a structural decision affects future development, document it before implementation.

---

## Current Status

**Project:** Perfect Lender Website Upgrade

**Current Stage:** Workflow / Architecture Planning

**Next Stage:** Website audit + Next.js project initialization

**Primary Goals:**

- Modern unique design
- Fast and lightweight
- Responsive
- Animated
- Static initially
- Dynamic-ready
- Image + video banner support
- Maintainable architecture
- SEO friendly
- Production ready

---

## 17. Theme System

The website will use a centralized theme system rather than hard-coded colors throughout components.

### Theme modes

Support at least:

- Light theme
- Dark theme
- User-controlled theme switching

The default theme can be selected during implementation, but the architecture must allow the user to switch between light and dark mode easily.

Theme preference should be persisted on the client where appropriate and should avoid an obvious flash of the wrong theme during page load.

### Global color tokens

All major colors should be defined globally through theme/design tokens.

Examples:

```text
Primary
Primary foreground
Secondary
Secondary foreground
Accent
Accent foreground
Background
Foreground
Muted
Border
Card
Success
Warning
Error
```

Components should consume these semantic tokens instead of repeatedly using arbitrary Tailwind colors.

Example concept:

```text
bg-primary
text-primary-foreground
bg-background
text-foreground
border-border
```

This makes future global redesigns much easier.

### Color direction

The visual identity should use attractive, modern, eye-catching colors while maintaining:

- Good contrast
- Professional financial/loan-industry feel
- Accessibility
- Readability
- Consistency across light and dark themes

The final palette will be selected during the Design System phase.

---

## 18. Theme Architecture

Keep theme logic separate from page content.

Conceptually:

```text
Theme System
    ↓
Global Design Tokens
    ↓
Components
    ↓
Pages
```

Not:

```text
Page → random colors → component → random colors
```

When the global palette changes, we should ideally update the theme tokens rather than editing dozens of components.

### Dark / Light switching

The UI should provide a clear theme switcher, such as:

```text
☀ Light
🌙 Dark
```

or a compact toggle in the header/navigation.

The implementation should support:

```text
Light
Dark
System (optional)
```

If System mode is included, the site can follow the user's operating-system preference.

---

## 19. Design Token Strategy

Before building the main UI, define a centralized visual system covering:

```text
Colors
Typography
Spacing
Border radius
Shadows
Gradients
Transitions
Animation timings
Breakpoints
```

Use semantic names instead of component-specific color names.

For example:

```text
--background
--foreground
--primary
--primary-foreground
--secondary
--accent
--muted
--border
```

This allows the same component to automatically look correct in both light and dark modes.

---

## 20. Updated Design Philosophy

The final website should balance:

```text
Modern Design
      +
Eye-catching Colors
      +
Smooth Animations
      +
Responsive Layout
      +
Fast Loading
      +
Simple Content Management
      +
Future Dynamic Support
```

We are NOT trying to make the site ultra-minimal at the expense of visual quality.

The goal is:

> **Premium-looking, animated and engaging — without unnecessary technical bloat.**

