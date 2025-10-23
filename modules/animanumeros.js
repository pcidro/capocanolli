export default function initAnimaNumeros() {
  class NumberAnimator {
    constructor(selector, options = {}) {
      this.items = document.querySelectorAll(selector);
      this.duration = options.duration || 2000;
      this.observer = null;
      this.initObserver();
    }

    animateNumber(element) {
      const targetValue = +element.dataset.value;
      const prefix = element.dataset.prefix || "";
      let startValue = 0;
      const step = targetValue / (this.duration / 16); // 60fps

      const updateNumber = () => {
        startValue += step;
        if (startValue < targetValue) {
          element.textContent = prefix + Math.floor(startValue);
          requestAnimationFrame(updateNumber);
        } else {
          element.textContent = prefix + targetValue;
          element.classList.add("animated");
        }
      };

      updateNumber();
    }

    initObserver() {
      const observerOptions = { threshold: 0.4 };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateNumber(entry.target);
            this.observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      this.items.forEach((item) => this.observer.observe(item));
    }
  }

  new NumberAnimator(".metric__number", { duration: 2000 });
}
