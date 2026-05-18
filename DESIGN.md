# DESIGN.md — UNITY FURNITURE Website UI Direction

## 1. Mục tiêu thiết kế

Website cho UNITY FURNITURE không được làm theo kiểu “profile PDF đưa lên web”.  
Hướng đúng là **digital showroom**: sang, nhiều hình ảnh, có chiều sâu, có chuyển đổi.

Web cần đạt 4 mục tiêu:

1. Thể hiện năng lực thiết kế và thi công nội thất trọn gói.
2. Làm nổi bật lợi thế có xưởng sản xuất trực tiếp.
3. Tạo cảm giác thương hiệu cao cấp, đáng tin, chỉn chu.
4. Thu lead qua form tư vấn, nút CTA, Zalo, hotline.

Không thiết kế kiểu:
- nhiều khung viền đen
- chia ô cứng
- giống catalogue thầu
- giống web xây dựng cũ
- animation lòe loẹt
- màu cam quá gắt

Thiết kế theo hướng:
- modern luxury
- warm minimal
- cinematic interior
- nhiều khoảng thở
- hình ảnh lớn
- typography sạch
- motion nhẹ, mượt

---

## 2. Brand direction

### Tinh thần thương hiệu

UNITY FURNITURE = thiết kế và thi công nội thất trọn gói, có xưởng, làm đồng bộ từ ý tưởng đến hoàn thiện.

Keyword:
- Harmony
- Warm
- Premium
- Trust
- Craftsmanship
- Direct factory
- Design → Production → Construction

Thông điệp chính nên xoay quanh:

> Thiết kế chuẩn thi công — sản xuất trực tiếp — hoàn thiện đồng bộ.

Hoặc:

> Không gian sống được thiết kế để thuộc về bạn.

---

## 3. Visual style

### Phong cách chính

Modern luxury + warm minimal.

Không dùng style quá màu mè.  
Không dùng style quá corporate.

Cảm giác cần có:
- sang
- chậm
- sạch
- rộng
- có ánh sáng
- có vật liệu
- có chiều sâu

### Layout

Ưu tiên:
- full-width hero
- image-first section
- grid bất đối xứng nhẹ
- masonry project grid
- card tối giản
- text ngắn, có nhịp
- khoảng cách lớn giữa các section

Hạn chế:
- border đen dày
- card vuông đều 100%
- text block dài ngang full màn
- quá nhiều box cùng kích thước
- section nào cũng giống section nào

---

## 4. Color system

### Màu chính

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
}
```

Không dùng cam quá chói kiểu `#ff5a00` làm nền lớn.  
Cam chỉ nên là accent cho:
- button
- line nhỏ
- tag
- icon
- hover state

---

## 5. Typography

Khuyến nghị dùng Google Font:

```html
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Hoặc:

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

CSS base:

```css
body {
  font-family: "Be Vietnam Pro", Arial, sans-serif;
  color: var(--color-text);
  background: var(--color-warm-white);
  font-size: 16px;
  line-height: 1.7;
}

h1, h2, h3 {
  line-height: 1.15;
  letter-spacing: -0.03em;
}

h1 {
  font-size: clamp(42px, 7vw, 92px);
  font-weight: 600;
}

h2 {
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 600;
}

h3 {
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 600;
}

p {
  color: var(--color-muted);
  max-width: 720px;
}
```

Tránh:
- bold toàn bộ text
- uppercase quá nhiều
- title nhỏ nhưng dày
- line-height quá chật

---

## 6. Header

Header không dùng button viền đen từng menu như wireframe.

Nên làm:
- logo trái
- nav giữa hoặc phải
- CTA phải
- nền transparent ở hero
- khi scroll đổi sang nền blur / trắng

Ví dụ hướng style:

```css
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  height: 86px;
  display: flex;
  align-items: center;
  transition: background .3s ease, box-shadow .3s ease;
}

.site-header.is-scrolled {
  background: rgba(247, 243, 238, .86);
  backdrop-filter: blur(18px);
  box-shadow: 0 12px 40px rgba(0,0,0,.06);
}

.main-nav a {
  font-size: 14px;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  opacity: .78;
}

.main-nav a:hover,
.main-nav a.is-active {
  opacity: 1;
  color: var(--color-muted-orange);
}
```

Mobile:
- hamburger
- full-screen menu hoặc side drawer
- CTA hotline/Zalo dễ bấm

---

## 7. Hero section

Hero là phần quan trọng nhất.

Không làm hero như khung trắng placeholder.  
Hero nên full màn, dùng ảnh/video nội thất đẹp.

Cấu trúc:
- background image/video
- dark overlay nhẹ
- headline ngắn
- subtext 1–2 dòng
- CTA chính
- CTA phụ
- mini trust item

Ví dụ nội dung:

```html
<h1>Thi công nội thất đồng bộ từ thiết kế đến hoàn thiện.</h1>
<p>UNITY FURNITURE sở hữu đội ngũ thiết kế, xưởng sản xuất và thi công trọn gói tại Đà Nẵng.</p>
<a href="#consult" class="btn btn-primary">Nhận tư vấn ngay</a>
<a href="tel:0905131030" class="btn btn-outline">Gọi 0905 131 030</a>
```

Hero nên dùng:
- `min-height: 100vh`
- overlay `linear-gradient`
- text max-width 760px
- CTA rõ

---

## 8. Trang chủ

Trang chủ là funnel chính.

Thứ tự section đề xuất:

1. Hero cinematic
2. Intro ngắn về UNITY
3. Stats: năm kinh nghiệm / xưởng / công trình / hài lòng
4. Pain points của khách hàng
5. Hệ thống UNITY: Design → Production → Construction
6. Dịch vụ chính
7. Dự án nổi bật
8. Xưởng sản xuất
9. Quy trình làm việc
10. Feedback khách hàng
11. Form tư vấn
12. Footer

### Stats section

Không ghi quá nhiều.  
Chỉ dùng số lớn + label ngắn.

Ví dụ:
- 5+ năm kinh nghiệm
- 1000m² xưởng
- 100+ công trình
- 97% khách hàng hài lòng

### Pain points

Nên viết theo insight thật:

- Thiết kế một kiểu, thi công một kiểu
- Không kiểm soát được chi phí phát sinh
- Đội thi công rời rạc, khó đồng bộ
- Chậm tiến độ, thiếu minh bạch vật liệu

### UNITY System

Section quan trọng, nên làm nổi bật:

Design → Production → Construction

Ba card:
- Thiết kế chuẩn thi công
- Xưởng sản xuất trực tiếp
- Thi công đồng bộ

Mỗi card có ảnh thật hoặc ảnh công trình, không dùng icon chung chung.

---

## 9. Trang Giới thiệu

Trang giới thiệu không nên chỉ kể “chúng tôi là ai”.  
Cần chứng minh năng lực.

Cấu trúc đề xuất:

1. Hero: đội ngũ / văn phòng / xưởng
2. About statement
3. Tầm nhìn — sứ mệnh
4. Giá trị cốt lõi
5. Định vị thương hiệu
6. Vì sao nên chọn UNITY
7. Pháp lý công ty
8. Văn phòng và nhà xưởng
9. Form tư vấn

Giá trị cốt lõi:
- Hòa hợp
- Chân thực
- Tối giản
- Ấm áp
- Bền vững

Cách trình bày:
- không dùng quá nhiều text
- mỗi value là 1 card nhỏ
- có line/icon tối giản

---

## 10. Trang Dịch vụ

Trang dịch vụ cần rõ nhóm dịch vụ và có CTA.

Nhóm dịch vụ:
1. Thiết kế nội thất
2. Thi công nội thất trọn gói
3. Sản xuất nội thất theo yêu cầu
4. Gia công nội thất

Cấu trúc:

1. Hero dịch vụ
2. Overview ngắn
3. Grid 4 nhóm dịch vụ
4. Chi tiết từng nhóm
5. Banner CTA
6. Quy trình làm việc
7. FAQ
8. Form tư vấn

Mỗi service card:
- ảnh thật/render đẹp
- tên dịch vụ
- mô tả ngắn
- link xem chi tiết

Không làm card cam đặc quá nhiều.  
Cam chỉ dùng cho hover/CTA.

---

## 11. Trang Phong cách thiết kế

Trang này phục vụ SEO và tư vấn khách.

Phong cách chính:
- Hiện đại sang trọng
- Neo Classic
- Indochine
- Nhật Bản / Japandi
- Vintage
- Căn hộ cao cấp
- Nhà phố
- Văn phòng

Layout:
- hero
- intro ngắn về “phong cách thiết kế”
- grid bài viết/card
- có filter nếu nhiều bài
- CTA tư vấn chọn phong cách

Card nên có:
- ảnh đẹp
- tag
- title
- excerpt 2 dòng
- “Khám phá phong cách”

---

## 12. Trang Dự án

Trang dự án phải là showroom.

Không làm card đều và cứng quá.  
Nên dùng masonry hoặc alternating grid.

Filter:
- Tất cả
- Căn hộ
- Nhà phố
- Biệt thự
- Văn phòng
- Modern
- Neo Classic
- Indochine
- Japandi

Project card:
- ảnh lớn
- tên dự án
- phong cách
- diện tích
- địa điểm
- hover overlay

Project detail nên có:
- hero ảnh lớn
- thông tin dự án
- gallery Fancybox
- mô tả concept
- vật liệu chính
- timeline
- ảnh thực tế nếu có
- CTA tư vấn dự án tương tự

---

## 13. Trang Blog/Tin tức

Blog không chỉ để đăng tin, mà để SEO.

Nhóm nội dung:
- Phong thủy nội thất
- Kinh nghiệm xây nhà
- Phong cách thiết kế
- Vật liệu nội thất
- Báo giá / quy trình
- Công trình thực tế

Card blog:
- image
- category
- date
- title
- excerpt
- read more

Layout:
- featured post lớn
- grid bài viết
- sidebar category nếu desktop
- responsive 1 cột mobile

---

## 14. Trang Liên hệ

Trang liên hệ rất quan trọng.

Form nên giữ các field:

- Họ và tên
- Số điện thoại
- Email
- Địa chỉ / khu vực
- Diện tích
- Loại hình dự án
- Upload mặt bằng
- Ngân sách dự kiến
- Phong cách thiết kế
- Ghi chú

CTA:
- Nhận tư vấn ngay
- Gọi hotline
- Chat Zalo

Bên phải form nên có:
- ảnh công trình
- ảnh xưởng
- thông tin liên hệ
- cam kết phản hồi trong 24h

Form visual:
- không dùng input quá thô
- dùng border-bottom hoặc field card nhẹ
- button rõ, nổi

---

## 15. Button style

Button chính:

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 28px;
  border-radius: 999px;
  background: var(--color-muted-orange);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  background: var(--color-copper);
  box-shadow: 0 18px 44px rgba(167, 87, 44, .28);
}
```

Button phụ:

```css
.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 28px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.42);
  color: #fff;
  text-decoration: none;
}
```

---

## 16. Card style

Card không cần border đen dày.

```css
.card {
  background: rgba(255,255,255,.72);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  overflow: hidden;
  transition: transform .3s ease, box-shadow .3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 70px rgba(0,0,0,.08);
}

.card img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform .6s ease;
}

.card:hover img {
  transform: scale(1.06);
}
```

---

## 17. Image usage

Ảnh là linh hồn của web nội thất.

Nguyên tắc:
- ảnh phải lớn
- không bóp méo
- không crop mặt quan trọng
- ưu tiên ảnh ngang cho hero
- ảnh project dùng object-fit cover
- có lazy loading
- gallery mở bằng Fancybox

```html
<a href="images/project-01-large.jpg" data-fancybox="project-gallery">
  <img src="images/project-01.jpg" alt="Nội thất phòng khách hiện đại" loading="lazy">
</a>
```

---

## 18. Motion / animation

Animation phải mượt và tiết chế.

Dùng JS thuần + CSS transition.  
Không cần GSAP nếu không được yêu cầu.

Hiệu ứng nên có:
- fade-up khi section vào viewport
- image reveal nhẹ
- hover zoom ảnh
- header đổi nền khi scroll
- counter số liệu nếu cần
- slider đơn giản nếu cần

Không dùng:
- animation nhấp nháy
- bouncing nhiều
- text chạy liên tục
- hiệu ứng quá game

Class chuẩn:

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

## 19. Fancybox

Chỉ dùng Fancybox cho:
- project gallery
- ảnh công trình
- ảnh xưởng
- video nếu có

CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox/fancybox.css">
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox/fancybox.umd.js"></script>
```

Init:

```js
if (window.Fancybox) {
  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
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

---

## 20. Responsive rules

Breakpoints:

```css
@media (max-width: 1024px) {}
@media (max-width: 768px) {}
@media (max-width: 480px) {}
```

Mobile:
- hero text ngắn hơn
- grid về 1 cột
- spacing giảm
- menu thành drawer
- CTA sticky dưới cùng nếu cần
- form 1 cột
- footer 1 cột

Không để:
- menu bị tràn
- card quá nhỏ
- text dính mép
- button khó bấm

---

## 21. Footer

Footer hiện trong wireframe đang quá nặng.  
Nên làm gọn, sang hơn.

Footer nên có:
- logo
- mô tả ngắn
- liên kết
- dịch vụ
- thông tin liên hệ
- map nhỏ hoặc link Google Map
- social icons

Không làm 3 box cam quá lớn.

---

## 22. Floating contact

Có thể dùng floating social bên phải:
- Zalo
- Facebook
- TikTok
- YouTube
- Hotline

Nhưng cần nhỏ, gọn, không phá UI.

Mobile nên chuyển thành sticky bottom:

- Gọi ngay
- Zalo
- Tư vấn

---

## 23. Content tone

Giọng văn:
- rõ
- chắc
- ít sáo rỗng
- tập trung lợi ích thật

Không dùng quá nhiều câu generic như:
- uy tín hàng đầu
- chất lượng tốt nhất
- tận tâm chuyên nghiệp

Nên dùng câu cụ thể:
- Có xưởng sản xuất trực tiếp tại Đà Nẵng
- Đội thiết kế và thi công làm việc theo cùng một quy trình
- Hạn chế phát sinh nhờ bóc tách vật liệu rõ từ đầu
- Theo dõi tiến độ minh bạch trong quá trình thi công

---

## 24. Tiêu chí nghiệm thu UI

Một page được xem là đạt khi:

- Có cảm giác cao cấp, không giống template rẻ.
- Ảnh chiếm vai trò chính.
- Section có nhịp, không đều đều.
- CTA xuất hiện đúng lúc.
- Typography thoáng, dễ đọc.
- Mobile không vỡ.
- Tốc độ tải ổn.
- Fancybox hoạt động.
- Header responsive.
- Form rõ ràng.
- Màu cam dùng tiết chế.
- Không có border đen thô như wireframe.
