export default function initMenuHamburguer() {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.querySelector(".close-menu");
  const backdrop = document.querySelector("[data-backdrop]");
  const body = document.body;

  function openMenu() {
    mobileMenu.classList.add("is-open");
    backdrop.classList.add("is-visible");
    backdrop.hidden = false;
    menuToggle.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    body.style.overflow = "hidden";
    const firstLink = mobileMenu.querySelector("a, button");
    firstLink && firstLink.focus();
  }

  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    backdrop.classList.remove("is-visible");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    body.style.overflow = "";
    setTimeout(() => {
      backdrop.hidden = true;
    }, 250);
    menuToggle.focus();
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);

  mobileMenu.addEventListener("click", (e) => {
    const el = e.target;
    if (el.matches("a.nav-link, a.btn-order")) closeMenu();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });
}
