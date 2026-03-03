# UPHSL Game Developers' Club — Website

Website for the UPHSL Game Developers' Club, implemented from the [Figma design](https://www.figma.com/design/RK8lapBphhfsduXMY8HNS4/uphsl-gdc-web-design?node-id=1-2).

## Design system

Design tokens live in **`design-system.json`**. Use it to keep typography, colors, spacing, and component specs consistent when adding or changing pages.

- **Colors**: `colors.background`, `colors.text`, `colors.border`, `colors.overlay`
- **Typography**: `typography.fontFamily`, `typography.fontSizes`, `typography.fontWeights`
- **Spacing**: `spacing.*`
- **Border radius**: `borderRadius.*`
- **Shadows**: `shadows.*`
- **Layout**: `layout.contentMaxWidth`, `layout.headerHeight`, etc.
- **Components**: `components.button`, `components.card`, `components.panel`

Global CSS variables in `src/index.css` are derived from this file.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Assets

Image and SVG paths are in `src/constants/assets.ts`. Place exported assets in **`public/assets/`** with these filenames (or update the constants):

- `gdc-official-logo.png`
- `uphsl-gdc-official-logo.png`
- `yuki-questioning.png`, `yuki-2d.png`, `yuki-graduation-pose.png`
- `pixie-pose-1.png`, `pixie-pose-4.png`
- `img-1385.png`, `hero-photo.png`, `achievement-card.png`

Social icons and avatar placeholder SVGs are already in `public/assets/`. To export from Figma: select the frame (e.g. node 1:2), use the Figma MCP or Figma’s export, and save files into `public/assets/`.

## Build

```bash
npm run build
npm run preview
```

## Stack

- React 18 + TypeScript
- Vite
- CSS (design tokens from `design-system.json`)
