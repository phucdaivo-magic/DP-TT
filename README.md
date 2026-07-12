# DP-TT

Project frontend dùng **Vite** với SCSS, JavaScript, Font, Image và HTML.

## Cấu trúc thư mục

```
DP-TT/
├── index.html              # Trang chính (Save The Date)
├── vu-qui/index.html       # Trang Vu Quy
├── tan-hon/index.html      # Trang Tân Hôn
├── pre-ending/index.html   # Trang Pre Ending
├── vite.config.js          # Cấu hình Vite
├── public/                 # Static assets (copy nguyên khi build)
│   ├── CNAME               # Custom domain
│   └── images/
└── src/
    ├── js/                 # JS từng trang
    ├── scss/               # SCSS từng trang
    ├── media/              # MP3
    └── assets/
        ├── fonts/
        └── images/
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
2. Chạy `npm run build` (build tất cả trang)
3. Deploy thư mục `dist/` lên nhánh `gh-pages`

### Các trang sau deploy

| URL | Trang |
|-----|-------|
| `https://daiphucthuytrang.com/` | Save The Date |
| `https://daiphucthuytrang.com/vu-qui/` | Vu Quy |
| `https://daiphucthuytrang.com/tan-hon/` | Tân Hôn |
| `https://daiphucthuytrang.com/pre-ending/` | Pre Ending |

### Bật GitHub Pages

1. Vào repo **Settings → Pages**
2. **Source**: chọn **Deploy from a branch**
3. **Branch**: `gh-pages` / `/ (root)`
4. Custom domain: `daiphucthuytrang.com` (CNAME đã cấu hình sẵn)
