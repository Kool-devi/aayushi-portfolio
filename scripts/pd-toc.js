/* ═══════════════════════════════════════════════════════════════
   CASE STUDY TABLE OF CONTENTS
   Jump links, active-section highlighting, and dark-band theme.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var toc = document.querySelector('.pd-toc');
  if (!toc) return;

  var links = Array.prototype.slice.call(toc.querySelectorAll('.pd-toc-link[href^="#"]'));
  if (!links.length) return;

  var flow = document.getElementById('pd-flow');
  var problem = document.getElementById('pd-problem');
  var tocMq = window.matchMedia('(max-width: 1200px)');

  var sections = links.map(function (link) {
    return document.querySelector(link.getAttribute('href'));
  }).filter(Boolean);

  function setActive(id) {
    links.forEach(function (link) {
      var match = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-active', match);
    });
  }

  function updateTocVisibility() {
    if (!problem || tocMq.matches) {
      toc.classList.remove('pd-toc--visible');
      toc.setAttribute('aria-hidden', 'true');
      return;
    }

    var activationLine = Math.min(140, window.innerHeight * 0.18);
    var shouldShow = problem.getBoundingClientRect().top <= activationLine;
    toc.classList.toggle('pd-toc--visible', shouldShow);
    toc.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
  }

  function updateActiveFromScroll() {
    if (!sections.length) return;

    var activationLine = Math.min(180, window.innerHeight * 0.24);
    var activeSection = sections[0];

    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= activationLine) {
        activeSection = section;
      }
    });

    if (activeSection && activeSection.id) setActive(activeSection.id);
  }

  function updateTocTheme() {
    if (!flow || tocMq.matches) {
      toc.classList.remove('pd-toc--on-dark');
      return;
    }

    var flowRect = flow.getBoundingClientRect();
    var tocRect = toc.getBoundingClientRect();
    var sampleY = tocRect.top + Math.min(tocRect.height * 0.4, 120);
    var onDark = sampleY >= flowRect.top && sampleY <= flowRect.bottom;
    toc.classList.toggle('pd-toc--on-dark', onDark);
  }

  function scrollToTarget(target) {
    if (!target) return;
    if (typeof lenis !== 'undefined' && lenis) {
      lenis.scrollTo(target, { offset: -12, duration: 1.05 });
      return;
    }
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var href = link.getAttribute('href');
      var target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      scrollToTarget(target);
      setActive(href.slice(1));
      if (history.replaceState) {
        history.replaceState(null, '', href);
      }
      requestAnimationFrame(updateTocTheme);
    });
  });

  if (typeof lenis !== 'undefined' && lenis) {
    lenis.on('scroll', function () {
      updateTocVisibility();
      updateActiveFromScroll();
      updateTocTheme();
    });
  } else {
    window.addEventListener('scroll', function () {
      updateTocVisibility();
      updateActiveFromScroll();
      updateTocTheme();
    }, { passive: true });
  }

  window.addEventListener('resize', function () {
    updateTocVisibility();
    updateActiveFromScroll();
    updateTocTheme();
  }, { passive: true });
  if (typeof tocMq.addEventListener === 'function') {
    tocMq.addEventListener('change', function () {
      updateTocVisibility();
      updateTocTheme();
    });
  } else if (typeof tocMq.addListener === 'function') {
    tocMq.addListener(function () {
      updateTocVisibility();
      updateTocTheme();
    });
  }

  updateTocVisibility();
  updateActiveFromScroll();
  updateTocTheme();
})();
