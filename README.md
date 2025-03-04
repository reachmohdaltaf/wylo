# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

```
zylo
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ CommentCard.jsx
│  │  ├─ CreatePost.jsx
│  │  ├─ layout
│  │  │  ├─ Layout.jsx
│  │  │  └─ Navbar.jsx
│  │  ├─ PostCard.jsx
│  │  └─ PostContainer.jsx
│  ├─ features
│  │  ├─ imagePreviewSlice.js
│  │  └─ PostSlice.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  └─ Home.jsx
│  └─ store
│     └─ store.js
└─ vite.config.js

```