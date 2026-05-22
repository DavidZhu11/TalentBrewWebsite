/* ========================================
   TALENT BREW — Shared JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Navigation: scroll glass effect ----- */
  const nav = document.getElementById('main-nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();                       // run once on load
  }

  /* ----- Mobile hamburger toggle ----- */
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const navContainer = document.getElementById('nav-container');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
      if (navContainer) navContainer.classList.toggle('open');
    });

    // Close when a link is tapped
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
        if (navContainer) navContainer.classList.remove('open');
      });
    });
  }

  /* ----- FAQ Accordion ----- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');

      // Close every item first
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      // Toggle the clicked one
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ----- Scroll-Reveal (IntersectionObserver) ----- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach(el => observer.observe(el));
  }

  /* ----- Active nav link ----- */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ----- Smooth scroll for same-page anchors ----- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  /* ----- Contact Form (demo mode) ----- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#ff96c7';
      btn.disabled = true;
      contactForm.reset();
      setTimeout(() => {
        btn.textContent = origText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    });
  }
});
