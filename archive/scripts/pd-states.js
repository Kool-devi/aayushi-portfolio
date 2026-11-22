/* ═══════════════════════════════════════════════════════════════
   PAST / PRESENT / FUTURE
   Desktop: a 100vh sticky frame. Scroll progress through the
   tall track swaps left copy and slides the masked phone stack.
   Disabled (no sticky animation) below 768px — mobile uses
   per-panel copy rendered in the HTML instead.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var CHIP_KEYS = ['plan', 'date', 'action'];

  var STATES = [
    {
      title:  'Today',
      plan:   'Active plan',
      date:   'Today',
      action: 'View only',
      body:   'If today\'s delivery was already locked, users could see their assigned meals and delivery details, but could not make changes. The interface needed to make that restriction clear without making the screen feel disabled.'
    },
    {
      title:  'Tomorrow',
      plan:   'Active plan',
      date:   'Tomorrow',
      action: 'Manage delivery',
      body:   'Future days were more flexible. Before the cut-off, users could change a meal, skip delivery, resume delivery, or change the delivery address. This was the most action-heavy state, so the priority was making the options easy to find without overcrowding the meal cards.'
    },
    {
      title:  'Yesterday',
      plan:   'Active plan',
      date:   'Yesterday',
      action: 'Rate meal',
      body:   'Past days had a different purpose. Instead of delivery controls, users could review and rate the meals they had received. If the delivery had been skipped, rating was not shown because no meal was delivered.'
    }
  ];

  var TRANSITION_MS = 520;
  var MOBILE_MQ = window.matchMedia('(max-width: 768px)');

  var section = document.getElementById('pd-states');
  if (!section) return;

  var panels = Array.prototype.slice.call(
    section.querySelectorAll('.pd-states-panel')
  );
  if (!panels.length) return;

  var titleA = document.getElementById('pd-states-title-a');
  var titleB = document.getElementById('pd-states-title-b');
  var bodyA  = document.getElementById('pd-states-body-a');
  var bodyB  = document.getElementById('pd-states-body-b');
  var titleWrap = section.querySelector('.pd-states-title-wrap');
  var bodyWrap  = section.querySelector('.pd-states-body-wrap');

  var chipEls = {};
  CHIP_KEYS.forEach(function (key) {
    chipEls[key] = {
      a: section.querySelector('[data-chip="' + key + '"][data-slot="a"]'),
      b: section.querySelector('[data-chip="' + key + '"][data-slot="b"]')
    };
  });

  if (!titleA || !titleB || !bodyA || !bodyB) return;
  if (CHIP_KEYS.some(function (key) { return !chipEls[key].a || !chipEls[key].b; })) return;

  var activeIdx = 0;
  var animating = false;
  var pendingIdx = null;
  var titleActive = titleA;
  var titleStand  = titleB;
  var bodyActive  = bodyA;
  var bodyStand   = bodyB;
  var chipActive = {};
  var chipStand = {};
  CHIP_KEYS.forEach(function (key) {
    chipActive[key] = chipEls[key].a;
    chipStand[key] = chipEls[key].b;
  });

  function syncWrapHeight(wrap, a, b) {
    if (!wrap) return;
    wrap.style.height = Math.max(a.scrollHeight, b.scrollHeight, 1) + 'px';
  }

  function setPanelIndex(idx) {
    section.style.setProperty('--pd-states-index', String(idx));
  }

  function seed(state) {
    titleActive.textContent = state.title;
    bodyActive.textContent = state.body;
    CHIP_KEYS.forEach(function (key) {
      chipActive[key].textContent = state[key];
    });
    setPanelIndex(0);
    syncWrapHeight(titleWrap, titleActive, titleStand);
    syncWrapHeight(bodyWrap, bodyActive, bodyStand);
  }

  seed(STATES[0]);

  var pinVisible = false;
  var pin = section.querySelector('.pd-states-pin');
  var mask = section.querySelector('.pd-states-mask');
  var hint = section.querySelector('.pd-states-hint');

  function panelVideo(panel) {
    return panel ? panel.querySelector('video.pd-states-media-video') : null;
  }

  function prepareVideo(video) {
    if (!video) return;
    /* iOS requires the muted property (not just the attribute) for autoplay. */
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = false;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.removeAttribute('autoplay');
    video.playsInline = true;
  }

  function pauseAllVideos() {
    panels.forEach(function (panel) { pauseVideo(panelVideo(panel)); });
  }

  function playVideo(video) {
    if (!video) return;
    prepareVideo(video);
    var playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function () { /* autoplay may be blocked until gesture */ });
    }
  }

  function pauseVideo(video) {
    if (!video) return;
    video.pause();
  }

  function canPlayVideos() {
    return pinVisible && !document.hidden;
  }

  function syncVideos(activeIndex) {
    panels.forEach(function (panel, i) {
      var video = panelVideo(panel);
      if (!video) return;
      if (canPlayVideos() && i === activeIndex) playVideo(video);
      else pauseVideo(video);
    });
  }

  panels.forEach(function (panel) {
    var video = panelVideo(panel);
    prepareVideo(video);
    pauseVideo(video);
  });

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      section.classList.add('pd-states--ready');
      syncWrapHeight(titleWrap, titleActive, titleStand);
      syncWrapHeight(bodyWrap, bodyActive, bodyStand);
    });
  });

  /* Park standby off-screen without animating, so the next
     transition can enter from either below (scroll down) or above (scroll up). */
  function parkStandby(el, fromAbove) {
    el.style.transition = 'none';
    el.classList.remove('is-visible', 'is-above', 'is-below');
    el.classList.add(fromAbove ? 'is-above' : 'is-below');
    void el.offsetWidth;
    el.style.transition = '';
  }

  function swapPair(activeEl, standEl, nextText, reverse) {
    standEl.textContent = nextText;
    standEl.setAttribute('aria-hidden', 'false');
    activeEl.setAttribute('aria-hidden', 'true');

    parkStandby(standEl, reverse);

    activeEl.classList.remove('is-visible');
    activeEl.classList.add(reverse ? 'is-below' : 'is-above');

    standEl.classList.remove(reverse ? 'is-above' : 'is-below');
    standEl.classList.add('is-visible');

    return { active: standEl, stand: activeEl };
  }

  function resetStandby(el) {
    el.classList.remove('is-above', 'is-below');
    el.classList.add('is-below');
    el.textContent = '';
  }

  function applyState(idx) {
    if (idx === activeIdx || idx < 0 || idx >= STATES.length) return;

    panels[activeIdx].classList.remove('is-active');
    panels[idx].classList.add('is-active');
    setPanelIndex(idx);

    if (MOBILE_MQ.matches) {
      activeIdx = idx;
      /* Playback on mobile is owned by the phone IntersectionObserver. */
      return;
    }

    syncVideos(idx);

    if (animating) {
      pendingIdx = idx;
      return;
    }

    animating = true;
    var reverse = idx < activeIdx;
    var state = STATES[idx];

    titleStand.textContent = state.title;
    bodyStand.textContent = state.body;
    syncWrapHeight(titleWrap, titleActive, titleStand);
    syncWrapHeight(bodyWrap, bodyActive, bodyStand);

    var t = swapPair(titleActive, titleStand, state.title, reverse);
    titleActive = t.active;
    titleStand = t.stand;

    var b = swapPair(bodyActive, bodyStand, state.body, reverse);
    bodyActive = b.active;
    bodyStand = b.stand;

    CHIP_KEYS.forEach(function (key) {
      if (chipActive[key].textContent === state[key]) {
        chipStand[key].textContent = state[key];
        return;
      }
      var c = swapPair(chipActive[key], chipStand[key], state[key], reverse);
      chipActive[key] = c.active;
      chipStand[key] = c.stand;
    });

    activeIdx = idx;

    setTimeout(function () {
      resetStandby(titleStand);
      resetStandby(bodyStand);
      CHIP_KEYS.forEach(function (key) { resetStandby(chipStand[key]); });
      syncWrapHeight(titleWrap, titleActive, titleStand);
      syncWrapHeight(bodyWrap, bodyActive, bodyStand);

      animating = false;
      if (pendingIdx !== null && pendingIdx !== activeIdx) {
        var next = pendingIdx;
        pendingIdx = null;
        applyState(next);
      } else {
        pendingIdx = null;
      }
    }, TRANSITION_MS + 40);
  }

  function resolveActive() {
    if (MOBILE_MQ.matches) return;

    var rect = section.getBoundingClientRect();
    var viewH = window.innerHeight || document.documentElement.clientHeight;
    var track = section.offsetHeight - viewH;
    var progress = 0;

    if (track > 0) {
      progress = Math.min(1, Math.max(0, -rect.top / track));
    }

    var n = STATES.length;
    var bestIdx = progress >= 1
      ? n - 1
      : Math.max(0, Math.min(n - 1, Math.floor(progress * n)));

    applyState(bestIdx);
  }

  /*
     Videos stay paused until their frame is in the viewport.
     Desktop: observe the masked phone. Mobile: observe each phone.
  */
  var videoObserver = null;

  function showHint() {
    if (!hint || MOBILE_MQ.matches) return;
    hint.classList.remove('is-in');
    void hint.offsetWidth;
    hint.classList.add('is-in');
  }

  function hideHint() {
    if (!hint) return;
    hint.classList.remove('is-in');
  }

  function setPinVisible(visible) {
    var next = !!visible;
    var arrived = next && !pinVisible;
    pinVisible = next;

    if (MOBILE_MQ.matches) return;

    if (arrived) showHint();
    else if (!pinVisible) hideHint();

    if (pinVisible) syncVideos(activeIdx);
    else pauseAllVideos();
  }

  function setupVideoObserver() {
    if (videoObserver) {
      videoObserver.disconnect();
      videoObserver = null;
    }

    if (!('IntersectionObserver' in window)) {
      setPinVisible(true);
      return;
    }

    if (!MOBILE_MQ.matches) {
      var desktopTarget = mask || pin || section;
      videoObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            setPinVisible(entry.isIntersecting && entry.intersectionRatio >= 0.35);
          });
        },
        { threshold: [0, 0.2, 0.35, 0.5, 0.75] }
      );
      videoObserver.observe(desktopTarget);
      return;
    }

    pinVisible = false;
    videoObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var phone = entry.target;
          var video = phone.querySelector('video.pd-states-media-video');
          if (!video) return;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25 && !document.hidden) {
            playVideo(video);
          } else {
            pauseVideo(video);
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75] }
    );

    panels.forEach(function (panel) {
      var phone = panel.querySelector('.pd-states-phone--video');
      if (phone) videoObserver.observe(phone);
    });
  }

  if (typeof lenis !== 'undefined' && lenis) {
    lenis.on('scroll', resolveActive);
  } else {
    window.addEventListener('scroll', resolveActive, { passive: true });
  }

  window.addEventListener('resize', function () {
    resolveActive();
    setupVideoObserver();
  }, { passive: true });

  if (typeof MOBILE_MQ.addEventListener === 'function') {
    MOBILE_MQ.addEventListener('change', setupVideoObserver);
  } else if (typeof MOBILE_MQ.addListener === 'function') {
    MOBILE_MQ.addListener(setupVideoObserver);
  }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      pauseAllVideos();
    } else if (!MOBILE_MQ.matches) {
      syncVideos(activeIdx);
    } else {
      setupVideoObserver();
    }
  });

  resolveActive();
  setupVideoObserver();
})();
