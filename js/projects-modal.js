/**
 * projects-modal.js
 * Handles Resume preview modal, ATS print triggers, email copy toast, and contact form handling.
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Toast Notification System
     ========================================================================== */
  const toastBox = document.getElementById('toast-notification');
  let toastTimeout = null;

  function showToast(message, icon = '✓') {
    if (!toastBox) return;
    toastBox.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toastBox.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastBox.classList.remove('show');
    }, 3500);
  }

  window.showDevOpsToast = showToast;

  /* ==========================================================================
     2. Copy Email to Clipboard
     ========================================================================== */
  const copyEmailBtns = document.querySelectorAll('.btn-copy-email');
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const email = 'arsalanqayum09@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard: arsalanqayum09@gmail.com', '📋');
      }).catch(() => {
        showToast('Email: arsalanqayum09@gmail.com', '✉');
      });
    });
  });

  /* ==========================================================================
     3. Resume Modal Controls
     ========================================================================== */
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtns = document.querySelectorAll('.btn-open-resume');
  const closeResumeBtns = document.querySelectorAll('.btn-close-modal');
  const printResumeBtn = document.getElementById('btn-print-resume');

  function openModal() {
    if (!resumeModal) return;
    resumeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!resumeModal) return;
    resumeModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openResumeBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  closeResumeBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
    });
  });

  if (resumeModal) {
    resumeModal.addEventListener('click', function (e) {
      if (e.target === resumeModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && resumeModal && resumeModal.classList.contains('open')) {
      closeModal();
    }
  });

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', function () {
      window.print();
    });
  }

  /* ==========================================================================
     4. Contact Form Simulated Transmission
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Transmitting Message...';

      setTimeout(() => {
        showToast('Message sent successfully! Arsalan will respond shortly.', '🚀');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 900);
    });
  }
})();
