/* ═══════════════════════════════════════════════════════════════
   CONTACT PAGE SCRIPTS
   Scroll-reveal, textarea auto-grow, character counter,
   and form submit → success state swap.
   ═══════════════════════════════════════════════════════════════ */


/* ── Scroll-reveal ─────────────────────────────────────────────────
   Observes .ct-reveal elements and adds .is-visible once each one
   enters the viewport. Fires once per element, then unobserves.
─────────────────────────────────────────────────────────────────── */
(function () {
  var reveals = document.querySelectorAll('.ct-reveal');
  if (!reveals.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach(function (el) { observer.observe(el); });
}());


/* ── Textarea auto-grow ─────────────────────────────────────────────
   Expands the message textarea to fit its content as the user types,
   removing the need for a fixed height or a scroll bar.
─────────────────────────────────────────────────────────────────── */
(function () {
  var textarea = document.getElementById('ct-message');
  if (!textarea) return;

  function resize() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  textarea.addEventListener('input', resize, { passive: true });
}());


/* ── Character counter ──────────────────────────────────────────────
   Updates the "X / 500" label inside the message field as the
   user types. Nudges colour at 90 % of the limit.
─────────────────────────────────────────────────────────────────── */
(function () {
  var textarea = document.getElementById('ct-message');
  var counter  = document.querySelector('.ct-char-count');
  if (!textarea || !counter) return;

  var MAX = parseInt(textarea.getAttribute('maxlength'), 10) || 500;

  textarea.addEventListener('input', function () {
    var len = textarea.value.length;
    counter.textContent = len + ' / ' + MAX;

    /* Near the limit: make the counter more prominent */
    counter.style.color = len > MAX * 0.9
      ? 'rgba(0,0,0,0.62)'
      : '';
  }, { passive: true });
}());


/* ── Form submit → success state ────────────────────────────────────
   Validates required fields, then swaps the form out for the
   .ct-success block.

   To connect a real back-end:
     1. Set the <form> action attribute to your endpoint URL.
     2. Remove e.preventDefault() and this entire submit handler.
     Alternatively, use Formspree / Netlify Forms for a no-server
     solution — just update the action and method attributes.
─────────────────────────────────────────────────────────────────── */
(function () {
  var form    = document.getElementById('ct-form');
  var success = document.getElementById('ct-success');
  if (!form || !success) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    /* Validate required fields */
    var nameEl  = document.getElementById('ct-name');
    var emailEl = document.getElementById('ct-email');
    var isValid = true;

    [nameEl, emailEl].forEach(function (field) {
      if (!field || !field.value.trim()) {
        if (field) {
          field.focus();
          /* Brief visual shake via border flash */
          field.style.borderColor = 'rgba(0,0,0,0.6)';
          setTimeout(function () { field.style.borderColor = ''; }, 900);
        }
        isValid = false;
      }
    });

    if (!isValid) return;

    /* Swap form → success */
    form.style.transition = 'opacity 0.35s ease';
    form.style.opacity    = '0';

    setTimeout(function () {
      form.hidden    = true;
      success.hidden = false;
    }, 350);
  });
}());
