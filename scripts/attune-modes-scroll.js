/* ═══════════════════════════════════════════════════════════════
   ATTUNE — THE FOUR MODES
   Desktop: a 100vh sticky frame. Scroll progress through the tall
   track picks the active mode; CSS slides its copy and phone in.
   Prototypes reload from the start when a mode becomes active and
   unload (pause) when you leave that mode or the section.
   Below 768px the modes are stacked; each plays while in view.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var MOBILE_MQ = window.matchMedia('(max-width: 768px)');

  var section = document.getElementById('attune-modes-scroll');
  if (!section) return;

  var items = Array.prototype.slice.call(
    section.querySelectorAll('.attune-modes-item')
  );
  if (!items.length) return;

  var pin = section.querySelector('.attune-modes-pin');
  var hint = section.querySelector('.attune-modes-hint');
  var activeIdx = -1;
  var pinVisible = false;
  var playingIdx = -1;

  items.forEach(function (item) {
    var iframe = item.querySelector('.attune-modes-phone--prototype iframe');
    if (!iframe) return;
    var src = iframe.getAttribute('data-src') || iframe.getAttribute('src') || '';
    if (src && src !== 'about:blank') iframe.dataset.src = src;
    iframe.removeAttribute('src');
    iframe.src = 'about:blank';
  });

  function getFrame(item) {
    return item
      ? item.querySelector('.attune-modes-phone--prototype iframe')
      : null;
  }

  function stopPrototype(idx) {
    var iframe = getFrame(items[idx]);
    if (!iframe) return;
    iframe.src = 'about:blank';
  }

  function startPrototype(idx) {
    var iframe = getFrame(items[idx]);
    if (!iframe || !iframe.dataset.src) return;
    iframe.src = iframe.dataset.src;
  }

  function playOnly(idx) {
    if (playingIdx === idx) return;
    if (playingIdx >= 0) stopPrototype(playingIdx);
    playingIdx = idx;
    if (playingIdx >= 0) startPrototype(playingIdx);
  }

  function stopAll() {
    if (playingIdx >= 0) stopPrototype(playingIdx);
    playingIdx = -1;
  }

  function syncDesktopPlayback() {
    if (MOBILE_MQ.matches) return;
    if (pinVisible && activeIdx >= 0) playOnly(activeIdx);
    else stopAll();
  }

  function applyState(idx) {
    if (idx === activeIdx) return;
    activeIdx = idx;
    items.forEach(function (item, i) {
      item.classList.toggle('is-active', i === idx);
      item.classList.toggle('is-before', i < idx);
    });
    syncDesktopPlayback();
  }

  function resolveActive() {
    if (MOBILE_MQ.matches) return;

    var rect = section.getBoundingClientRect();
    var viewH = window.innerHeight || document.documentElement.clientHeight;
    var track = section.offsetHeight - viewH;
    var progress = track > 0 ? Math.min(1, Math.max(0, -rect.top / track)) : 0;
    var n = items.length;

    applyState(progress >= 1 ? n - 1 : Math.floor(progress * n));
  }

  function setPinVisible(visible) {
    var arrived = visible && !pinVisible;
    pinVisible = visible;
    if (hint && !MOBILE_MQ.matches) {
      if (arrived) {
        hint.classList.remove('is-in');
        void hint.offsetWidth;
        hint.classList.add('is-in');
      } else if (!visible) {
        hint.classList.remove('is-in');
      }
    }
    syncDesktopPlayback();
  }

  if ('IntersectionObserver' in window) {
    if (pin) {
      new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            setPinVisible(entry.isIntersecting && entry.intersectionRatio >= 0.35);
          });
        },
        { threshold: [0, 0.2, 0.35, 0.5, 0.75] }
      ).observe(pin);
    }

    items.forEach(function (item, idx) {
      new IntersectionObserver(
        function (entries) {
          if (!MOBILE_MQ.matches) return;
          entries.forEach(function (entry) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
              playOnly(idx);
            } else if (!entry.isIntersecting && playingIdx === idx) {
              stopPrototype(idx);
              playingIdx = -1;
            }
          });
        },
        { threshold: [0, 0.35, 0.5] }
      ).observe(item);
    });
  }

  applyState(0);
  resolveActive();
  syncDesktopPlayback();

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      section.classList.add('attune-modes-scroll--ready');
    });
  });

  if (typeof lenis !== 'undefined' && lenis) {
    lenis.on('scroll', resolveActive);
  } else {
    window.addEventListener('scroll', resolveActive, { passive: true });
  }
  window.addEventListener('resize', function () {
    resolveActive();
    if (MOBILE_MQ.matches) {
      /* Mobile observers drive playback; clear desktop sticky play. */
      if (!pinVisible) stopAll();
    } else {
      syncDesktopPlayback();
    }
  }, { passive: true });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stopAll();
    else if (!MOBILE_MQ.matches) syncDesktopPlayback();
  });
})();
