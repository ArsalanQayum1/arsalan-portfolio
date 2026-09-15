/**
 * main.js
 * Primary application orchestrator: Navbar behavior, mobile menu, scrollspy,
 * skills filtering, experience domain tabs, and KPI counter animation.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       1. Sticky Glass Navbar & Scrollspy
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    function handleScroll() {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Scrollspy
      const scrollY = window.pageYOffset + 120;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Mobile Hamburger Menu
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        navToggle.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        navToggle.setAttribute('aria-expanded', isOpen);
      });

      // Close menu when clicking nav link
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          navToggle.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    /* ==========================================================================
       2. Experience Domain Tabs (K2XTech)
       ========================================================================== */
    const expTabBtns = document.querySelectorAll('.exp-tab-btn');
    const expTabPanels = document.querySelectorAll('.exp-tab-panel');

    expTabBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const targetId = this.getAttribute('data-tab');

        expTabBtns.forEach(b => b.classList.remove('active'));
        expTabPanels.forEach(p => p.classList.remove('active'));

        this.classList.add('active');
        const targetPanel = document.getElementById(`exp-${targetId}`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });

    /* ==========================================================================
       3. Technical Skills Matrix Filtering
       ========================================================================== */
    const filterBtns = document.querySelectorAll('.skill-filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');

        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        skillCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    /* ==========================================================================
       4. KPI Number Counters Animation
       ========================================================================== */
    const statNumbers = document.querySelectorAll('.stat-number');
    let counted = false;

    function countUpStats() {
      if (counted) return;
      const statsSection = document.getElementById('stats');
      if (!statsSection) return;

      const rect = statsSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.85) {
        counted = true;
        statNumbers.forEach(item => {
          const target = parseInt(item.getAttribute('data-target') || '0', 10);
          if (!target) return;
          let current = 0;
          const increment = Math.ceil(target / 20);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            const suffix = item.getAttribute('data-suffix') || '';
            item.innerHTML = `${current}<span>${suffix}</span>`;
          }, 45);
        });
      }
    }

    window.addEventListener('scroll', countUpStats, { passive: true });
    countUpStats();
  });
})();
