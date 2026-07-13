---
name: thiep-moi-vu-quy
description: >-
  Tạo và chỉnh sửa trang thiệp mời Lễ Vu Quy trong project Vite DP-TT.
  Dùng khi user nhắc vu qui, vu quy, vu-quy, thiệp mời vu quy, hoặc cần
  thêm/sửa trang /vu-quy/.
---

# Thiệp mời Vu Quy

## Mục tiêu

Trang **Lễ Vu Quy** tại `/vu-quy/` — layout center, video YouTube nền, nhạc khi click, ảnh overlay `img.jpg`, ngày **01.08.2026**.

## Files liên quan

| File                     | Vai trò                                          |
| ------------------------ | ------------------------------------------------ |
| `vu-quy/index.html`      | HTML entry                                       |
| `src/js/vu-quy.js`       | Video + nhạc + import SCSS                       |
| `src/scss/vu-quy.scss`   | Style + responsive                               |
| `src/scss/img.jpg`       | Ảnh nền overlay                                  |
| `src/media/le-duong.mp3` | Nhạc nền                                         |
| `vite.config.js`         | `vuqui: resolve(__dirname, 'vu-quy/index.html')` |

## Quy tắc Vite

- HTML **không** link CSS/JS tĩnh (`./scss/*.css`, `./js/*.js`)
- Script: `<script type="module" src="/src/js/vu-quy.js"></script>`
- Audio: `<audio autoplay id="music"></audio>` — gán `src` trong JS
- SCSS import trong JS: `import '../scss/vu-quy.scss'`
- MP3: `import musicUrl from '@/media/le-duong.mp3'`
- Ảnh trong SCSS: `url('./img.jpg')` (cùng thư mục `src/scss/`)

## Cấu trúc HTML

```html
<div class="screen-intro">
  <div data-video data-ids="VIDEO_ID"></div>
  <div class="screen-intro__content">
    <div class="screen-intro__content-title">Lễ Vu Quy</div>
    <div class="screen-intro__content-description">
      <div class="screen-intro__content-description-name">Tên chú rể</div>
      <div class="screen-intro__content-description-separator">
        <!-- SVG -->
      </div>
      <div class="screen-intro__content-description-name">Tên cô dâu</div>
    </div>
    <div class="screen-intro__content-date">
      <span>01</span><span>.</span><span>08</span><span>.</span
      ><span>2026</span>
    </div>
  </div>
</div>
```

## SCSS

- `px()`: `clamp(min, vw/1920, max)` — responsive font
- Layout: `.screen-intro__content` center, `&::after` overlay `img.jpg` opacity 0.3
- Font: `--font-name: 'The Nautigal'`, `--font-save: 'Cormorant'`
- Responsive **inline** trong file (không tách mixin):
  - `@media (max-width: 1024px)` — giảm gap/padding
  - `@media (max-width: 767px)` — tên xếp dọc, SVG xoay 90°

## JS (vu-quy.js)

1. Import SCSS + `le-duong.mp3` + `youtube-player`
2. `VideoPlayer` trên `[data-video]`
3. Click → fullscreen + `music.play()`

## Thêm trang mới (nếu clone pattern)

1. Tạo `{slug}/index.html`
2. Tạo `src/js/{slug}.js` + `src/scss/{slug}.scss`
3. Thêm input trong `vite.config.js` → `rollupOptions.input`
4. Chạy `npm run build` — verify `dist/{slug}/index.html`

## Deploy

- URL: `https://daiphucthuytrang.com/vu-quy/`
- Push `main` → GitHub Actions build → `gh-pages`
- Không dùng `base: '/DP-TT/'`

## Checklist khi sửa

- [ ] `vu-quy/index.html` dùng module script `/src/js/vu-quy.js`
- [ ] Title: **Lễ Vu Quy**, ngày đúng
- [ ] `img.jpg` tồn tại trong `src/scss/`
- [ ] Responsive có trong `vu-quy.scss` (không file mixin riêng)
- [ ] `npm run build` thành công, có `dist/vu-quy/index.html`
