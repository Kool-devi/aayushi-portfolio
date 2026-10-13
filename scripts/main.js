/* ═══════════════════════════════════════════════════════════════
   MAIN SCRIPTS
   Native scrolling only. A virtualised smooth-scroll loop was
   fighting the WebGL hero and made the page feel late.
   ═══════════════════════════════════════════════════════════════ */


/* ── Corner nav — scroll hide / show ───────────────────────────
   Home page: hidden while the landing (which has its own menu) is
   on screen, then slides in from the corners once it is scrolled past.
   Other pages:
   Scrolling DOWN  → adds .nav--hidden to .corner-nav.
   Scrolling UP    → removes .nav--hidden.
──────────────────────────────────────────────────────────────── */
(function () {
  var nav = document.querySelector('.corner-nav');
  if (!nav) return;

  var landing = document.querySelector('.landing:not([hidden])');
  if (landing && 'IntersectionObserver' in window) {
    nav.classList.add('nav--landing');
    // Landing counts as "on screen" until its bottom edge passes 15% from the top.
    new IntersectionObserver(function (entries) {
      nav.classList.toggle('nav--landing', entries[0].isIntersecting);
    }, { rootMargin: '-15% 0px -84% 0px' }).observe(landing);
    return;
  }

  var THRESHOLD = 50;
  var lastScrollY = window.scrollY;

  window.addEventListener('scroll', function () {
    var currentScrollY = window.scrollY;
    var delta = currentScrollY - lastScrollY;
    if (delta > 0 && currentScrollY > THRESHOLD) {
      nav.classList.add('nav--hidden');
    } else if (delta < 0) {
      nav.classList.remove('nav--hidden');
    }
    lastScrollY = currentScrollY;
  }, { passive: true });
}());


/* ── Copy email ─────────────────────────────────────────────────
   Any [data-copy-email] button copies its address and briefly
   swaps its label for a confirmation.
──────────────────────────────────────────────────────────────── */
(function () {
  var MESSAGE = 'Copied. See you on the other side!';
  var RESET_MS = 2400;

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text);
      });
    }
    return legacyCopy(text);
  }

  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var field = document.createElement('textarea');
      field.value = text;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(field);
      if (ok) resolve(); else reject();
    });
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-copy-email]');
    if (!button) return;

    var email = button.getAttribute('data-copy-email');
    var label = button.querySelector('.nav-copy-label');

    copyText(email).then(function () {
      if (!label) return;
      if (!button._copyLabel) button._copyLabel = label.textContent;
      clearTimeout(button._copyTimer);
      label.textContent = MESSAGE;
      button.classList.add('is-copied');
      button._copyTimer = setTimeout(function () {
        label.textContent = button._copyLabel;
        button.classList.remove('is-copied');
      }, RESET_MS);
    }, function () {
      window.location.href = 'mailto:' + email;
    });
  });
}());


/* ── Phone menu ─────────────────────────────────────────────────
   Below 768px the corner nav collapses into a hamburger. The drawer
   is built from the corner nav's own links so the pages only define
   the menu once.
──────────────────────────────────────────────────────────────── */
(function () {
  var nav = document.querySelector('.corner-nav');
  if (!nav) return;

  var mq = window.matchMedia('(max-width: 768px)');

  var burger = document.createElement('button');
  burger.type = 'button';
  burger.className = 'nav-burger';
  burger.setAttribute('aria-label', 'Open menu');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-controls', 'nav-drawer');
  burger.innerHTML = '<span></span><span></span>';
  nav.appendChild(burger);

  var drawer = document.createElement('div');
  drawer.className = 'nav-drawer';
  drawer.id = 'nav-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('aria-label', 'Menu');

  var closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'nav-drawer-close';
  closeBtn.setAttribute('aria-label', 'Close menu');
  closeBtn.innerHTML = '<span></span><span></span>';

  var links = document.createElement('nav');
  links.className = 'nav-drawer-links';
  links.setAttribute('aria-label', 'Site navigation');
  Array.prototype.forEach.call(nav.querySelectorAll('a.nav-item'), function (link) {
    var clone = link.cloneNode(true);
    clone.removeAttribute('class');
    links.appendChild(clone);
  });

  drawer.appendChild(closeBtn);
  drawer.appendChild(links);

  var contact = nav.querySelector('.nav--tc');
  if (contact) {
    var group = contact.cloneNode(true);
    group.className = 'nav-drawer-contact';
    drawer.appendChild(group);
  }

  document.body.appendChild(drawer);

  function open() {
    drawer.classList.add('is-open');
    document.documentElement.classList.add('nav-drawer-open');
    burger.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }

  function close(returnFocus) {
    if (!drawer.classList.contains('is-open')) return;
    drawer.classList.remove('is-open');
    document.documentElement.classList.remove('nav-drawer-open');
    burger.setAttribute('aria-expanded', 'false');
    if (returnFocus) burger.focus();
  }

  burger.addEventListener('click', open);
  closeBtn.addEventListener('click', function () { close(true); });

  links.addEventListener('click', function (event) {
    if (event.target.closest('a')) close(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') close(true);
  });

  var onBreakpoint = function () {
    if (!mq.matches) close(false);
  };
  if (typeof mq.addEventListener === 'function') mq.addEventListener('change', onBreakpoint);
  else if (typeof mq.addListener === 'function') mq.addListener(onBreakpoint);
}());


/* ── Floating image parallax ────────────────────────────────────
   Retired hero only. No-ops when that image is not in the page.
──────────────────────────────────────────────────────────────── */
(function () {
  var img = document.querySelector('.floating-img');
  if (!img) return;

  var FACTOR = 0.18;

  window.addEventListener('scroll', function () {
    var offset = window.scrollY * FACTOR;
    if (window.innerWidth > 768) {
      img.style.transform = 'translate(-50%, calc(-50% - ' + offset + 'px))';
    } else {
      img.style.transform = 'translateY(calc(-50% - ' + offset + 'px))';
    }
  }, { passive: true });
}());
