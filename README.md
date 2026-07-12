# DP-TT

Project frontend dùng **Vite** với SCSS, JavaScript, Font, Image và HTML.

## Cấu trúc thư mục

```
DP-TT/
├── index.html              # Entry HTML
├── vite.config.js          # Cấu hình Vite
├── public/                 # Static assets (copy nguyên khi build)
│   ├── favicon.svg
│   └── images/
│       └── logo.svg
└── src/
    ├── main.js             # Entry JavaScript
    ├── scss/
    │   ├── main.scss       # SCSS chính
    │   ├── _variables.scss # Biến SCSS
    │   └── _fonts.scss     # @font-face
    └── assets/
        ├── fonts/          # Font files (.woff2)
        └── images/         # Image import qua JS
```

## Sử dụng

```bash
# Cài dependencies
npm install

# Chạy dev server
npm run dev

# Build production
npm run build

# Xem preview bản build
npm run preview
```

## Hướng dẫn assets

| Loại | Vị trí | Cách dùng |
|------|--------|-----------|
| **HTML** | `index.html` | Entry point, link script tại `/src/main.js` |
| **JS** | `src/main.js` | Import SCSS, images, logic app |
| **SCSS** | `src/scss/` | Import trong `main.js`, dùng `@use` cho partials |
| **Font** | `src/assets/fonts/` | Khai báo `@font-face` trong `_fonts.scss` |
| **Image (static)** | `public/images/` | Dùng trực tiếp trong HTML: `/images/logo.svg` |
| **Image (bundled)** | `src/assets/images/` | Import trong JS: `import img from './assets/images/...'` |

## Auto build & deploy

Mỗi khi push lên nhánh `main`, GitHub Actions sẽ tự động:

1. Cài dependencies
2. Chạy `npm run build`
3. Deploy thư mục `dist/` lên nhánh `gh-pages`

### Bật GitHub Pages

1. Vào repo **Settings → Pages**
2. **Source**: chọn **Deploy from a branch**
3. **Branch**: `gh-pages` / `/ (root)`
4. Truy cập: `https://phucdaivo-magic.github.io/DP-TT/`

### Build local cho GitHub Pages

```bash
npm run build:pages
```
