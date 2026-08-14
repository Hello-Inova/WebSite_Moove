(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      mobileNav.classList.toggle("is-open", !isOpen);
    });

    // Fecha o menu ao clicar em qualquer link (rolagem pra âncora já
    // aconteceu, não faz sentido manter a gaveta aberta por cima do conteúdo).
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Abrir menu");
        mobileNav.classList.remove("is-open");
      });
    });
  }

  /* ---------- Header com sombra ao rolar ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScrollHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScrollHeader();
    window.addEventListener("scroll", onScrollHeader, { passive: true });
  }

  /* ---------- Revelar elementos ao rolar ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Sem suporte a IntersectionObserver: mostra tudo direto.
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Accordion do FAQ ---------- */
  document.querySelectorAll(".accordion-trigger").forEach(function (trigger) {
    var panel = trigger.nextElementSibling;
    if (!panel) return;

    trigger.addEventListener("click", function () {
      var isOpen = trigger.getAttribute("aria-expanded") === "true";

      // Fecha os outros itens abertos do mesmo accordion (comportamento
      // "só um por vez", mais fácil de escanear numa lista de perguntas).
      var accordion = trigger.closest(".accordion");
      if (accordion) {
        accordion.querySelectorAll(".accordion-trigger[aria-expanded='true']").forEach(function (other) {
          if (other !== trigger) {
            other.setAttribute("aria-expanded", "false");
            other.nextElementSibling.style.maxHeight = null;
          }
        });
      }

      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
    });
  });

  /* ---------- Ano no rodapé ---------- */
  var anoEl = document.getElementById("ano-atual");
  if (anoEl) anoEl.textContent = String(new Date().getFullYear());
})();
