# SKILL.md — Build Rules for UNITY FURNITURE Static HTML/CSS/JS

## 1. Vai trò của AI

Bạn là AI hỗ trợ build giao diện website tĩnh cho UNITY FURNITURE.

Chỉ được dùng:
- HTML
- CSS
- JavaScript thuần
- Fancybox CDN

Không dùng:
- React
- Vue
- jQuery
- Bootstrap
- Tailwind
- Swiper
- GSAP
- build tool
- npm package
- PHP
- WordPress function
- animation library khác

Mục tiêu là tạo giao diện frontend tĩnh, sạch, dễ chuyển sang WordPress sau này.

---

## 2. Nguyên tắc làm việc

Khi nhận yêu cầu code:

1. Giữ cấu trúc rõ ràng.
2. Viết code đầy đủ, chạy được ngay.
3. Không viết code nửa vời.
4. Không dùng thư viện ngoài trừ Fancybox và Google Fonts nếu cần.
5. Không phá class đã có nếu người dùng yêu cầu giữ.
6. Không đổi ý tưởng chính nếu chưa được yêu cầu.
7. Ưu tiên code dễ copy vào theme WordPress.
8. HTML semantic.
9. CSS gọn, chia section rõ bằng comment.
10. JS thuần, ít phụ thuộc.

---

## 3. Cấu trúc file khuyến nghị

Nếu build nhiều file:

```txt
unity-furniture/
├── index.html
├── about.html
├── services.html
├── styles.html
├── projects.html
├── blog.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   └── videos/
```

Nếu người dùng yêu cầu một file duy nhất, nhúng CSS trong `<style>` và JS trong `<script>`.

---

## 4. HTML rules

Dùng semantic HTML:

```html
<header class="site-header"></header>
<main>
  <section class="hero-section"></section>
  <section class="section"></section>
</main>
<footer class="site-footer"></footer>
```

Các section nên có:
- class riêng
- container riêng
- heading
- content
- CTA nếu phù hợp

Ví dụ:

```html
<section class="section unity-system">
  <div class="container">
    <div class="section-heading">
      <span class="eyebrow">UNITY SYSTEM</span>
      <h2>Thiết kế, sản xuất và thi công trong cùng một quy trình.</h2>
      <p>Chúng tôi giúp khách hàng kiểm soát tốt hơn thẩm mỹ, vật liệu, chi phí và tiến độ.</p>
    </div>
  </div>
</section>
```

---

## 5. CSS base bắt buộc

Luôn reset cơ bản:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Be Vietnam Pro", Arial, sans-serif;
  color: var(--color-text);
  background: var(--color-warm-white);
  line-height: 1.7;
}

img,
video {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
}

button,
input,
select,
textarea {
  font: inherit;
}
```

Variables:

```css
:root {
  --color-black: #111111;
  --color-graphite: #1b1b1b;
  --color-dark: #24211f;
  --color-white: #ffffff;
  --color-warm-white: #f7f3ee;
  --color-beige: #e8ded2;
  --color-muted-orange: #c7652f;
  --color-copper: #a9572c;
  --color-border: rgba(17, 17, 17, 0.12);
  --color-text: #1d1d1d;
  --color-muted: #6f6a64;

  --container: 1200px;
  --radius-lg: 28px;
  --radius-md: 18px;
  --section-space: clamp(72px, 9vw, 140px);
}
```

Container:

```css
.container {
  width: min(var(--container), calc(100% - 40px));
  margin-inline: auto;
}
```

---

## 6. Header JS

Header đổi style khi scroll:

```js
const header = document.querySelector(".site-header");

function handleHeaderScroll() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", handleHeaderScroll);
handleHeaderScroll();
```

Mobile menu:

```js
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggle.classList.toggle("is-active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      menuToggle.classList.remove("is-active");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}
```

---

## 7. Reveal animation JS

Dùng IntersectionObserver:

```js
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.16
  });

  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("is-visible"));
}
```

CSS:

```css
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .7s ease, transform .7s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 8. Fancybox usage

CDN trong HTML:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox/fancybox.css">
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox/fancybox.umd.js"></script>
```

Init trong JS:

```js
if (window.Fancybox) {
  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
    dragToClose: true,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"]
      }
    }
  });
}
```

Gallery HTML:

```html
<a href="assets/images/project-large-01.jpg" data-fancybox="project-01" class="project-gallery-item">
  <img src="assets/images/project-01.jpg" alt="Không gian phòng khách hiện đại" loading="lazy">
</a>
```

---

## 9. Button component

HTML:

```html
<a href="#consult" class="btn btn-primary">Nhận tư vấn ngay</a>
<a href="tel:0905131030" class="btn btn-outline">Gọi 0905 131 030</a>
```

CSS:

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 28px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--color-muted-orange);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-copper);
  box-shadow: 0 18px 44px rgba(167, 87, 44, .28);
}

.btn-outline {
  border-color: rgba(17,17,17,.22);
  color: var(--color-text);
  background: transparent;
}

.dark-section .btn-outline,
.hero-section .btn-outline {
  border-color: rgba(255,255,255,.42);
  color: #fff;
}
```

---

## 10. Card component

HTML:

```html
<article class="feature-card reveal">
  <figure>
    <img src="assets/images/factory.jpg" alt="Xưởng sản xuất nội thất UNITY" loading="lazy">
  </figure>
  <div class="feature-card__body">
    <h3>Xưởng sản xuất trực tiếp</h3>
    <p>Chủ động tiến độ, kiểm soát vật liệu và hạn chế phát sinh trong quá trình thi công.</p>
  </div>
</article>
```

CSS:

```css
.feature-card {
  background: rgba(255,255,255,.72);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform .3s ease, box-shadow .3s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 70px rgba(0,0,0,.08);
}

.feature-card figure {
  margin: 0;
  overflow: hidden;
}

.feature-card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform .65s ease;
}

.feature-card:hover img {
  transform: scale(1.06);
}

.feature-card__body {
  padding: 24px;
}
```

---

## 11. Grid system

Dùng CSS Grid thuần.

```css
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 1024px) {
  .grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

---

## 12. Form rules

Form cần dễ dùng, rõ, không quá phức tạp.

HTML field:

```html
<label class="form-field">
  <span>Họ và tên *</span>
  <input type="text" name="name" placeholder="Nhập họ và tên" required>
</label>
```

CSS:

```css
.form-field {
  display: grid;
  gap: 8px;
}

.form-field span {
  font-size: 14px;
  font-weight: 600;
}

.form-field input,
.form-field select,
.form-field textarea {
  width: 100%;
  min-height: 52px;
  border: 0;
  border-bottom: 1px solid rgba(17,17,17,.22);
  background: transparent;
  outline: none;
  color: var(--color-text);
}

.form-field textarea {
  min-height: 120px;
  resize: vertical;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  border-color: var(--color-muted-orange);
}
```

JS validate đơn giản nếu cần:

```js
const forms = document.querySelectorAll("[data-form]");

forms.forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault();

    const requiredFields = form.querySelectorAll("[required]");
    let firstInvalid = null;

    requiredFields.forEach(field => {
      field.classList.remove("is-invalid");

      if (!field.value.trim()) {
        field.classList.add("is-invalid");
        if (!firstInvalid) firstInvalid = field;
      }
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    form.classList.add("is-submitted");
  });
});
```

---

## 13. Slider rules

Không dùng Swiper.

Nếu cần slider đơn giản, dùng JS thuần:
- track
- prev/next
- dots
- transform translateX
- pointer drag nếu cần

Nhưng ưu tiên:
- grid/masonry trước
- slider chỉ dùng khi thật cần

Không làm slider auto nếu ảnh quan trọng, vì user cần xem kỹ.

---

## 14. Responsive rules

Bắt buộc kiểm tra:

Desktop:
- 1440px
- 1366px
- 1200px

Tablet:
- 1024px
- 768px

Mobile:
- 480px
- 390px
- 360px

Mobile CSS:

```css
@media (max-width: 768px) {
  :root {
    --section-space: 72px;
  }

  .container {
    width: min(100% - 28px, var(--container));
  }

  h1 {
    font-size: clamp(36px, 11vw, 54px);
  }

  h2 {
    font-size: clamp(28px, 8vw, 42px);
  }

  .desktop-only {
    display: none !important;
  }
}
```

---

## 15. Performance rules

Bắt buộc:
- image có `loading="lazy"` trừ hero
- hero image nên dùng ảnh tối ưu
- không load quá nhiều JS
- không dùng icon library nặng
- không dùng video autoplay quá lớn nếu chưa nén
- object-fit cho ảnh
- không set fixed height gây vỡ mobile

Video hero:

```html
<video class="hero-video" autoplay muted loop playsinline poster="assets/images/hero-poster.jpg">
  <source src="assets/videos/hero.mp4" type="video/mp4">
</video>
```

CSS:

```css
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## 16. Accessibility

Bắt buộc:
- ảnh có alt
- button có type
- menu toggle có aria-expanded
- form có label
- link không để rỗng
- màu text đủ contrast

Ví dụ:

```html
<button class="menu-toggle" type="button" aria-label="Mở menu" aria-expanded="false" data-menu-toggle>
  <span></span>
  <span></span>
</button>
```

---

## 17. Naming convention

Dùng class rõ nghĩa, không đặt quá chung.

Tốt:
- `.site-header`
- `.hero-section`
- `.project-card`
- `.service-card`
- `.consult-form`
- `.factory-section`

Tránh:
- `.box1`
- `.left`
- `.right`
- `.abc`
- `.item1`
- `.content2`

Có thể dùng BEM nhẹ:

```css
.project-card {}
.project-card__image {}
.project-card__body {}
.project-card__title {}
```

---

## 18. Comment code

CSS nên chia rõ:

```css
/* =========================
   Base
========================= */

/* =========================
   Header
========================= */

/* =========================
   Hero
========================= */

/* =========================
   Services
========================= */

/* =========================
   Projects
========================= */

/* =========================
   Footer
========================= */
```

JS nên có function rõ:

```js
function initHeaderScroll() {}
function initMobileMenu() {}
function initRevealAnimation() {}
function initFancybox() {}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initMobileMenu();
  initRevealAnimation();
  initFancybox();
});
```

---

## 19. Page-specific requirements

### Home

Bắt buộc có:
- hero
- intro
- stats
- pain points
- UNITY system
- services
- projects
- factory
- process
- testimonials
- consult form

### About

Bắt buộc có:
- story
- mission
- vision
- core values
- legal info
- office/factory images
- CTA

### Services

Bắt buộc có:
- service overview
- 4 service groups
- process
- CTA
- FAQ nếu phù hợp

### Styles

Bắt buộc có:
- intro
- style cards
- CTA tư vấn chọn phong cách

### Projects

Bắt buộc có:
- filter
- project grid
- Fancybox gallery hoặc link detail
- CTA

### Blog

Bắt buộc có:
- featured post
- post grid
- category tag
- excerpt

### Contact

Bắt buộc có:
- form nhiều field
- upload mockup field
- contact info
- map/fanpage area
- CTA floating

---

## 20. Không được làm

Không làm các lỗi sau:

- Không dùng border đen dày như wireframe.
- Không để menu giống button admin.
- Không dùng màu cam làm nền quá nhiều.
- Không làm section nào cũng card bằng nhau.
- Không viết text quá dài trong hero.
- Không dùng ảnh placeholder nếu đã có ảnh thật.
- Không dùng slider phức tạp nếu grid đủ tốt.
- Không dùng jQuery.
- Không dùng Swiper.
- Không dùng CSS inline tràn lan.
- Không copy nguyên layout PDF.
- Không để mobile vỡ menu.
- Không để footer quá to và lấn át nội dung.
- Không dùng animation nhấp nháy rẻ tiền.

---

## 21. Checklist trước khi gửi code

Trước khi trả code, tự kiểm tra:

- HTML có chạy độc lập không?
- CSS có đầy đủ không?
- JS có lỗi console không?
- Fancybox có init chưa?
- Header mobile có hoạt động không?
- Reveal animation có fallback không?
- Ảnh có loading lazy chưa?
- Alt ảnh có chưa?
- Button có hover chưa?
- Responsive 768px ổn chưa?
- Responsive 390px ổn chưa?
- Form nhìn rõ chưa?
- CTA đủ nổi chưa?
- Màu cam dùng tiết chế chưa?
- Cảm giác đã premium hơn wireframe chưa?

---

## 22. Cách phản hồi khi user yêu cầu sửa

Nếu user yêu cầu sửa một phần:
- chỉ sửa đúng phần đó
- không rewrite toàn bộ nếu không cần
- giữ nguyên cấu trúc/class cũ nếu user nói giữ
- nếu cần đổi class, nói rõ đổi ở đâu
- gửi lại đoạn code đầy đủ của phần liên quan
- nếu user yêu cầu “gửi full”, gửi full file

Phong cách phản hồi:
- ngắn
- thẳng
- rõ vị trí sửa
- không giải thích dài nếu user đang cần code
