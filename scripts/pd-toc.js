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
    lenis.on('scroll', updateTocTheme);
  } else {
    window.addEventListener('scroll', updateTocTheme, { passive: true });
  }

  window.addEventListener('resize', updateTocTheme, { passive: true });
  if (typeof tocMq.addEventListener === 'function') {
    tocMq.addEventListener('change', updateTocTheme);
  } else if (typeof tocMq.addListener === 'function') {
    tocMq.addListener(updateTocTheme);
  }

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) {
            return b.intersectionRatio - a.intersectionRatio;
          });

        if (!visible.length) return;
        var id = visible[0].target.id;
        if (id) setActive(id);
        updateTocTheme();
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.15, 0.35, 0.6]
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  updateTocTheme();
})();
