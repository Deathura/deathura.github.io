/**
 * Comportements principaux : en-tête, menu mobile, navigation et année.
 */
(() => {
  const header = document.getElementById('site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('main-navigation');
  const navLinks = navigation ? [...navigation.querySelectorAll('a[href^="#"]')] : [];
  const sections = [...document.querySelectorAll('main section[id]')];
  const year = document.getElementById('current-year');

  const closeMenu = () => {
    if (!menuToggle || !navigation) return;
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
  };

  const toggleMenu = () => {
    if (!menuToggle || !navigation) return;
    const isOpen = navigation.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  };

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  const updateActiveLink = () => {
    const offset = window.scrollY + window.innerHeight * 0.35;
    let currentId = '';

    sections.forEach((section) => {
      if (section.offsetTop <= offset) currentId = section.id;
    });

    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute('href') === `#${currentId}`;
      if (isCurrent) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

// Protect email adress from bot
function initProtectedMail() {

    const mail = document.getElementById("contact-mail");
    if (!mail) return;

    setTimeout(() => {

        const address = `${mail.dataset.user}@${mail.dataset.domain}`;

        mail.href = `mailto:${address}`;
        mail.textContent = address;

    }, 250);
}

  menuToggle?.addEventListener('click', toggleMenu);
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeMenu();
  });
  window.addEventListener('scroll', () => {
    updateHeader();
    updateActiveLink();
  }, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener("DOMContentLoaded", initProtectedMail); // Call of the protect email fonction

  if (year) year.textContent = String(new Date().getFullYear());
  updateHeader();
  updateActiveLink();

})();
