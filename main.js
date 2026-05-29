/* ═══════════════════════════════════════════════════════
   LUXURY DUBAI REAL ESTATE — main.js
   GSAP Animations · Slider · Form · Header Scroll
═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Register GSAP ScrollTrigger Plugin ───────────────
  gsap.registerPlugin(ScrollTrigger);

  // ─── Utility ──────────────────────────────────────────
  const qs  = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ═══════════════════════════════════════════════════
     1. HEADER — Scroll Behaviour
  ═══════════════════════════════════════════════════ */
  const header = qs('#site-header');

  ScrollTrigger.create({
    start: 'top -60px',
    onEnter:      () => header.classList.add('scrolled'),
    onLeaveBack:  () => header.classList.remove('scrolled'),
  });

  /* ═══════════════════════════════════════════════════
     2. MOBILE NAV
  ═══════════════════════════════════════════════════ */
  const hamburger    = qs('#hamburger-btn');
  const mobileNav    = qs('#mobile-nav');
  const mobileClose  = qs('#mobile-nav-close');
  const mobileLinks  = qsa('.mobile-nav-link');

  const openMobileNav  = () => mobileNav.classList.add('open');
  const closeMobileNav = () => mobileNav.classList.remove('open');

  hamburger.addEventListener('click', openMobileNav);
  mobileClose.addEventListener('click', closeMobileNav);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  /* ═══════════════════════════════════════════════════
     3. HERO ENTRANCE ANIMATIONS
  ═══════════════════════════════════════════════════ */
  const heroTl = gsap.timeline({ delay: 0.3 });

  heroTl
    .to('#hero-eyebrow', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .to('#hero-headline', {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: 'power3.out',
    }, '-=0.4')
    .to('#hero-sub', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
    .to('#hero-cta', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
    }, '-=0.4')
    .to('#scroll-indicator', {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.2')
    .to('.stat-card', {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out',
    }, '-=0.3');

  /* ═══════════════════════════════════════════════════
     4. ABOUT SECTION — Scroll-Triggered
  ═══════════════════════════════════════════════════ */
  gsap.from('#about-image-col', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    x: -60,
    duration: 1.1,
    ease: 'power3.out',
  });

  gsap.from('#about-text-col > *', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 70%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    x: 40,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power3.out',
  });

  /* ═══════════════════════════════════════════════════
     5. SECTION HEADERS — Generic Fade-Up
  ═══════════════════════════════════════════════════ */
  qsa('.section-header').forEach(el => {
    gsap.from(el.children, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 28,
      stagger: 0.12,
      duration: 0.8,
      ease: 'power3.out',
    });
  });

  /* ═══════════════════════════════════════════════════
     6. PROPERTY CARDS — Stagger In
  ═══════════════════════════════════════════════════ */
  gsap.from('.property-card', {
    scrollTrigger: {
      trigger: '#property-grid',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 50,
    stagger: 0.15,
    duration: 0.9,
    ease: 'power3.out',
  });

  /* ═══════════════════════════════════════════════════
     7. FEATURED IN LOGOS
  ═══════════════════════════════════════════════════ */
  gsap.from('.media-logo', {
    scrollTrigger: {
      trigger: '.featured-in',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.7,
    ease: 'power3.out',
  });

  /* ═══════════════════════════════════════════════════
     8. CONTACT SECTION
  ═══════════════════════════════════════════════════ */
  gsap.from('#contact-left > *', {
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    x: -36,
    stagger: 0.12,
    duration: 0.9,
    ease: 'power3.out',
  });

  gsap.from('#contact-right', {
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    x: 36,
    duration: 1.0,
    ease: 'power3.out',
  });

  /* ═══════════════════════════════════════════════════
     9. GOLD DIVIDER LINES — parallax feel
  ═══════════════════════════════════════════════════ */
  gsap.from('.gold-divider span', {
    scrollTrigger: {
      trigger: '.gold-divider',
      start: 'top 90%',
    },
    opacity: 0,
    scale: 0,
    stagger: 0.15,
    duration: 0.6,
    ease: 'back.out(2)',
  });

  /* ═══════════════════════════════════════════════════
     10. TESTIMONIAL SLIDER
  ═══════════════════════════════════════════════════ */
  const slides = qsa('.testimonial-slide');
  const dots   = qsa('.dot');
  let current  = 0;
  let autoTimer;

  function goToSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() {
    autoTimer = setInterval(() => goToSlide(current + 1), 5000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  qs('#next-btn').addEventListener('click', () => { goToSlide(current + 1); resetAuto(); });
  qs('#prev-btn').addEventListener('click', () => { goToSlide(current - 1); resetAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goToSlide(i); resetAuto(); }));

  startAuto();

  /* ═══════════════════════════════════════════════════
     11. CONTACT FORM — Submit Handler
  ═══════════════════════════════════════════════════ */
  const contactForm   = qs('#contact-form');
  const formSuccess   = qs('#form-success');
  const submitBtn     = qs('#submit-btn');
  const btnText       = qs('.btn-text');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name      = qs('#full-name').value.trim();
    const interest  = qs('#interest').value;
    const whatsapp  = qs('#whatsapp').value.trim();

    if (!name || !interest || !whatsapp) {
      // Shake animation on empty fields
      qsa('.form-group').forEach(group => {
        const input = group.querySelector('input, select');
        if (input && !input.value.trim()) {
          input.style.borderColor = '#c0392b';
          gsap.fromTo(input,
            { x: -6 },
            { x: 0, duration: 0.4, ease: 'elastic.out(1, 0.3)',
              onComplete: () => { input.style.borderColor = ''; }
            }
          );
        }
      });
      return;
    }

    // Loading state
    btnText.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Build WhatsApp URL
    const message = encodeURIComponent(
      `Hello Khalid,\n\nMy name is ${name}.\nI am interested in: ${interest}.\n\nPlease contact me to discuss further.\n\nThank you.`
    );
    const waURL = `https://wa.me/971500000000?text=${message}`;

    // Simulate brief loading then show success
    setTimeout(() => {
      gsap.to(contactForm, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          contactForm.style.display = 'none';
          formSuccess.classList.add('show');
          window.open(waURL, '_blank');
        }
      });
    }, 900);
  });

  /* ═══════════════════════════════════════════════════
     12. SMOOTH ANCHOR SCROLLING (offsets for fixed header)
  ═══════════════════════════════════════════════════ */
  qsa('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = qs(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = header.offsetHeight + 20;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ═══════════════════════════════════════════════════
     13. HERO STATS — Animated Counter
  ═══════════════════════════════════════════════════ */
  function animateCounter(el, target, prefix, suffix, decimals = 0) {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2.2,
      ease: 'power2.out',
      delay: 1.8,
      onUpdate: () => {
        el.textContent = prefix + obj.val.toFixed(decimals) + suffix;
      }
    });
  }

  const statNums = qsa('.stat-number');
  if (statNums[0]) animateCounter(statNums[0], 4.2, 'AED ', 'B+', 1);
  if (statNums[1]) animateCounter(statNums[1], 12,  '',     '+');
  if (statNums[2]) animateCounter(statNums[2], 340, '',     '+');

  /* ═══════════════════════════════════════════════════
     14. PROPERTY CARDS — micro parallax on mouse move
  ═══════════════════════════════════════════════════ */
  qsa('.property-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) / rect.width;
      const dy   = (e.clientY - cy) / rect.height;

      gsap.to(card, {
        rotateX: -dy * 4,
        rotateY:  dx * 4,
        transformPerspective: 800,
        ease: 'power1.out',
        duration: 0.35,
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
    });
  });

  /* ═══════════════════════════════════════════════════
     15. FOOTER LINKS — stagger in
  ═══════════════════════════════════════════════════ */
  gsap.from('.footer-grid > *', {
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 24,
    stagger: 0.1,
    duration: 0.7,
    ease: 'power3.out',
  });

});
