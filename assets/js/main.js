function initLucideIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

function initMobileMenu() {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (!menuToggle || !mobileMenu) return;

  function renderIcon(name) {
    const icon = menuToggle.querySelector("[data-lucide]");
    if (!icon) return;
    icon.setAttribute("data-lucide", name);
    initLucideIcons();
  }

  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    renderIcon("menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
    renderIcon(isOpen ? "x" : "menu");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function initMobileSubmenus() {
  const submenuToggles = document.querySelectorAll("[data-submenu-toggle]");

  submenuToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const group = toggle.closest(".mobile-nav-group");
      const isOpen = group.classList.toggle("is-open");
      const icon = toggle.querySelector("[data-lucide]");

      toggle.setAttribute("aria-expanded", String(isOpen));

      if (icon) {
        icon.setAttribute("data-lucide", isOpen ? "chevron-up" : "chevron-down");
        initLucideIcons();
      }
    });
  });
}

function initProjectSlider() {
  const slider = document.querySelector("[data-projects-slider]");
  const carousel = slider?.closest(".projects-carousel");

  if (!slider || !window.Swiper) return;

  const projectSwiper = new Swiper(slider, {
    slidesPerView: 1.2,
    spaceBetween: 16,
    grabCursor: true,
    loop: true,
    pagination: {
      el: slider.querySelector(".projects-pagination"),
      clickable: true,
    },
    breakpoints: {
      560: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 22,
      },
      1100: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });

  carousel?.querySelector(".projects-prev")?.addEventListener("click", () => {
    projectSwiper.slidePrev();
  });

  carousel?.querySelector(".projects-next")?.addEventListener("click", () => {
    projectSwiper.slideNext();
  });
}

function initFancybox() {
  if (!window.Fancybox) return;

  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
  });
}

function initTestimonialsSlider() {
  const slider = document.querySelector("[data-testimonials-slider]");
  const carousel = slider?.closest(".testimonials-carousel");

  if (!slider || !window.Swiper) return;

  const testimonialsSwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 18,
    grabCursor: true,
    loop: true,
    pagination: {
      el: slider.querySelector(".testimonials-pagination"),
      clickable: true,
    },
  });

  carousel?.querySelector(".testimonials-prev")?.addEventListener("click", () => {
    testimonialsSwiper.slidePrev();
  });

  carousel?.querySelector(".testimonials-next")?.addEventListener("click", () => {
    testimonialsSwiper.slideNext();
  });
}

function initReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  });

  revealElements.forEach(el => observer.observe(el));
}

function initStatsCounter() {
  const statsStrip = document.querySelector('.stats-strip');
  if (!statsStrip) return;

  const statElements = statsStrip.querySelectorAll('strong[data-count]');
  if (!statElements.length) return;

  if (!window.IntersectionObserver) {
    statElements.forEach(el => {
      const target = el.getAttribute('data-count');
      const suffix = el.getAttribute('data-suffix') || '';
      el.textContent = target + suffix;
    });
    return;
  }

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statElements.forEach(el => {
          const target = parseFloat(el.getAttribute('data-count'));
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 3500;
          let startTimestamp = null;

          el.classList.add('is-counting');
          el.textContent = '0' + suffix;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            let progress = elapsed / duration;
            if (progress > 1) progress = 1;

            const easeProgress = 1 - Math.pow(1 - progress, 2);
            const current = Math.floor(easeProgress * target);

            el.textContent = current + suffix;

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              el.textContent = target + suffix;
            }
          };

          window.requestAnimationFrame(step);
        });

        observerInstance.unobserve(statsStrip);
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(statsStrip);
}

function initFixedBottomContactBar() {
  if (document.querySelector(".floating-contact-stack")) return;

  const barHTML = `
    <div class="floating-contact-stack">
      <a href="#" target="_blank" rel="noopener" class="fbc-btn fbc-tiktok" aria-label="TikTok">
        <img src="assets/images/tiktok.png" alt="TikTok" class="fbc-icon-img">
      </a>
      <a href="#" target="_blank" rel="noopener" class="fbc-btn fbc-youtube" aria-label="YouTube">
        <img src="assets/images/youtube.png" alt="YouTube" class="fbc-icon-img">
      </a>
      <a href="https://www.facebook.com/UNITYFurnitureVietnam" target="_blank" rel="noopener" class="fbc-btn fbc-facebook" aria-label="Facebook">
        <img src="assets/images/facebook.png" alt="Facebook" class="fbc-icon-img">
      </a>
      <a href="https://zalo.me/0905131030" target="_blank" rel="noopener" class="fbc-btn fbc-zalo" aria-label="Zalo">
        <img src="assets/images/zalo.png" alt="Zalo" class="fbc-icon-img">
      </a>
      <a href="tel:0905131030" class="fbc-btn fbc-phone" aria-label="Điện thoại">
        <img src="assets/images/call.png" alt="Điện thoại" class="fbc-icon-img">
      </a>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', barHTML);
}

document.addEventListener("DOMContentLoaded", () => {
  initFixedBottomContactBar();
  initLucideIcons();
  initMobileMenu();
  initMobileSubmenus();
  initProjectSlider();
  initFancybox();
  initTestimonialsSlider();
  initReveal();
  initStatsCounter();
});
