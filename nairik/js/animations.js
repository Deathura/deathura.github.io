/**
 * Animations légères déclenchées au scroll.
 * Le module respecte automatiquement prefers-reduced-motion.
 */
(() => {
  const elements = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      instance.unobserve(entry.target);
    });
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -5% 0px'
  });

  elements.forEach((element) => observer.observe(element));

  // Parallaxe extrêmement légère sur l’image de couverture.
  const heroMedia = document.querySelector('.hero-media');
  if (!heroMedia) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking || window.scrollY > window.innerHeight * 1.2) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      heroMedia.style.transform = `translateY(${window.scrollY * 0.08}px) scale(1.04)`;
      ticking = false;
    });
  }, { passive: true });
})();
