# Perfect Lender — AI Coding Agent Instructions

## Project Context

This repository is the upgraded version of the existing Perfect Lender website.

The goal is to create a modern, attractive, responsive and fast website while keeping the architecture simple, maintainable and ready for future dynamic data.

Read `PERFECT_LENDER_WORKFLOW.md` before starting significant work. It is the project's master workflow and product/architecture direction.

---

## 1. Technology Stack

Use:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Motion/Framer Motion when animation complexity justifies it
- Next.js built-in image/font optimization
- Modern CSS where it is simpler than JavaScript

Do not add dependencies without a clear reason.

---

## 2. Core Architecture

Keep these concerns separate:

```text
Content
  ↓
Data / constants
  ↓
Components
  ↓
Pages
```

Static content initially lives under:

```text
src/constants/
```

Expected content areas may include:

```text
site.ts
navigation.ts
home.ts
loans.ts
banners.ts
about.ts
contact.ts
footer.ts
```

Do not place large amounts of business copy directly inside reusable components.

The architecture must remain compatible with future:

```text
API
CMS
Database
```

without requiring a complete UI rewrite.

---

## 3. Components

Prefer reusable components with clear responsibilities.

Suggested structure:

```text
src/components/
├── layout/
├── sections/
├── media/
└── ui/
```

Do not over-componentize tiny pieces that are only used once and have no meaningful complexity.

Do not create abstractions just for the sake of abstraction.

---

## 4. Server vs Client Components

Use Server Components by default.

Only add:

```tsx
"use client";
```

when the component genuinely requires browser/client functionality, such as:

- State
- Event handlers
- Theme switching
- Interactive menus
- Carousels
- Browser APIs
- Client-side animation that requires it

Do not make an entire page a Client Component just because one small section is interactive.

---

## 5. Content Formatting

Keep content easy for humans to edit.

Prefer simple Markdown-style inline formatting where required:

```text
**bold**
*italic*
[link](...)
```

Do not create an object for every word unless a real requirement requires structured rich text.

Avoid storing Tailwind classes inside content data.

Bad:

```ts
{
  text: "Perfect",
  className: "text-blue-500 font-bold"
}
```

Prefer:

```ts
"**Perfect**"
```

Design/styling belongs to components and the design system.

---

## 6. Theme System

The website must have a centralized theme system.

Support:

- Light
- Dark
- Optional System preference

The user must be able to switch themes through the UI.

Do not scatter arbitrary colors throughout components.

Use semantic/global design tokens such as:

```text
background
foreground
primary
primary-foreground
secondary
secondary-foreground
accent
accent-foreground
muted
border
card
success
warning
error
```

Components should consume semantic theme tokens.

Example:

```text
bg-primary
text-primary-foreground
bg-background
text-foreground
border-border
```

The final palette should be modern, eye-catching and premium while maintaining:

- Good contrast
- Professional appearance
- Readability
- Accessibility
- Consistency in both themes

---

## 7. Design System

Before implementing many pages, establish:

- Typography
- Font family
- Font weights
- Color tokens
- Spacing scale
- Border radius
- Shadows
- Gradients
- Breakpoints
- Button styles
- Card styles
- Transitions
- Animation timings

Do not introduce random visual values throughout the project when a shared design token can solve the problem.

---

## 8. Animation

Animations are an intentional part of this project.

Use them to create a premium and engaging experience.

Possible animations:

- Hero entrance
- Scroll reveal
- Section reveal
- Card hover
- Button interactions
- Icon movement
- Image reveal
- Counters
- Background effects
- Page transitions
- Subtle parallax

Use Tailwind/CSS for simple transitions.

Use Motion/Framer Motion for more complex coordinated animations.

Prefer:

```text
opacity
transform
translate
scale
rotate
```

Avoid excessive animation that makes the interface distracting.

Do not remove useful animation solely for tiny theoretical performance gains. Balance visual quality and performance.

Respect reduced-motion preferences.

---

## 9. Banner System

The application must support both image and video banners.

Banner capabilities should be designed to support:

- Image banners
- Video banners
- Responsive media
- Desktop-specific assets
- Mobile-specific assets
- Video poster images
- Text overlays
- CTA buttons
- Overlay effects
- Animation options
- Optional scheduling metadata

Conceptually:

```text
Banner
├── Media
│   ├── Image
│   └── Video
├── Content
├── CTA
├── Overlay
└── Animation
```

Video banners may use:

```text
muted
autoplay
loop
playsInline
poster
```

when appropriate.

Do not force users to download large desktop media on mobile when a smaller mobile asset can be provided.

---

## 10. Responsive Design

Every feature must be tested for:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Do not design desktop first and patch mobile later.

Use responsive Tailwind utilities and fluid layouts wherever practical.

Avoid fixed heights that can cause content clipping unless there is a strong visual reason.

---

## 11. Images and Media

Use Next.js image optimization where appropriate.

Consider:

- Correct dimensions
- Modern formats
- Responsive sizing
- Lazy loading
- Proper priority for above-the-fold media
- Appropriate quality
- Mobile variants
- Video poster images

Do not ship unnecessarily huge images or videos.

---

## 12. Performance

Performance matters, but this is not an ultra-minimal website.

Target:

```text
Fast
+
Smooth
+
Visually rich
```

Performance priorities:

1. Avoid unnecessary JavaScript
2. Optimize images
3. Optimize videos
4. Avoid unnecessary dependencies
5. Use Server Components by default
6. Lazy-load non-critical media
7. Optimize fonts
8. Keep CSS manageable
9. Use caching appropriately
10. Check Lighthouse/Core Web Vitals

Do not sacrifice the visual design for negligible performance gains.

---

## 13. SEO

Every page should be SEO-conscious.

Use:

- Metadata
- Semantic HTML
- Proper heading hierarchy
- Descriptive titles/descriptions
- Open Graph metadata where useful
- Canonical URLs where required
- Sitemap
- Robots configuration
- Meaningful alt text
- Clean URLs

Preserve important existing URLs where practical.

---

## 14. Accessibility

Build accessibility into the components.

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Correct buttons vs links
- Accessible navigation
- Alt text
- Reduced-motion support
- Sufficient color contrast
- Accessible interactive controls

---

## 15. Code Quality

Use strict TypeScript.

Avoid:

```ts
any
```

unless there is a documented reason.

Prefer:

```text
small
typed
reusable
readable
```

code.

Do not duplicate the same UI logic across multiple components.

Before adding a new component, check whether an existing component can be reused or extended cleanly.

---

## 16. Styling Rules

Tailwind CSS is the primary styling system.

Do not mix multiple CSS frameworks.

Use custom CSS/global CSS only when Tailwind cannot reasonably provide the required behavior or when defining global design tokens/base styles.

Do not put arbitrary color values throughout the application when a theme token should be used.

---

## 17. Data Architecture

Initial data flow:

```text
src/constants/
      ↓
components
      ↓
pages
```

Future data flow:

```text
API / CMS / Database
        ↓
Repository / data layer
        ↓
components
        ↓
pages
```

Keep component props compatible with both static and future dynamic sources.

---

## 18. File Naming

Use clear, predictable names.

React components:

```text
PascalCase.tsx
```

Examples:

```text
Header.tsx
Hero.tsx
Banner.tsx
ResponsiveVideo.tsx
```

Data/constants:

```text
camelCase.ts
```

Examples:

```text
home.ts
navigation.ts
banners.ts
```

---

## 19. Do Not Over-Engineer

This is important.

Do NOT introduce:

- Complex state management without need
- A database for static content
- A CMS before it is required
- Excessive repository abstractions
- Large UI libraries for simple UI
- Multiple animation libraries
- Complex rich-text systems for simple formatted content

The project should remain easy to understand.

---

## 20. Development Workflow

Follow the master workflow:

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

For major architectural changes:

1. Explain the proposed change
2. Explain why it is needed
3. Consider future dynamic support
4. Implement only after the direction is clear

Do not make large unrelated changes while implementing a small feature.

---

## 21. Existing Website Reference

The existing Perfect Lender website is the functional/content reference.

When redesigning:

- Preserve important business information
- Preserve important routes where practical
- Improve UX
- Improve visual hierarchy
- Improve responsiveness
- Improve accessibility
- Improve SEO
- Improve performance

Do not blindly reproduce the old UI. The objective is a unique, modern upgrade.

---

## 22. Deployment Awareness

The application is expected to eventually run behind Nginx and may use a CDN such as Cloudflare.

Do not make development choices that unnecessarily complicate:

- Static generation
- Production builds
- Nginx reverse proxying
- Caching
- HTTPS
- CI/CD

Deployment optimization will be handled after the application is stable.

---

## 23. CI/CD

Future CI/CD should be compatible with:

- GitHub
- GitHub Actions
- Automated lint
- Type checking
- Production build verification
- Automated deployment
- Rollback strategy

Do not add CI/CD complexity during initial UI development unless specifically requested.

---

## 24. Before Finishing a Feature

Check:

```text
[ ] TypeScript passes
[ ] ESLint passes
[ ] Responsive layout works
[ ] Light theme works
[ ] Dark theme works
[ ] Keyboard/accessibility basics work
[ ] Animations work
[ ] Reduced motion is respected
[ ] Images/media are optimized
[ ] No unnecessary "use client"
[ ] Content is separated from UI
[ ] Future dynamic data is not blocked
```

---

## 25. Agent Behavior

When working on this project:

- Read the relevant existing files before modifying them.
- Reuse existing components where appropriate.
- Keep changes scoped to the requested task.
- Do not silently replace architectural decisions.
- Do not delete existing functionality without a reason.
- Prefer simple solutions.
- Explain significant trade-offs briefly.
- Verify builds/lint/type checks after meaningful changes.
- If a requirement conflicts with the workflow, surface the conflict before making a major architectural change.

The goal is not maximum abstraction.

The goal is a **clean, modern, attractive, maintainable and dynamic-ready Perfect Lender website**.
