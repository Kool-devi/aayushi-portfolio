/* ═══════════════════════════════════════════════════════════════
   USE CASES / STATES
   Sticky left copy updates as right-side panels scroll into view.
   Disabled (no sticky animation) below 768px — mobile uses
   per-panel copy rendered in the HTML instead.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var STATES = [
    {
      title:  'Before the plan begins',
      user:   'New user',
      plan:   'Plan not started',
      date:   'Upcoming plan',
      action: 'View plan details',
      body:   'The plan is purchased but deliveries haven\'t started yet. Users need a clear preview of what\'s coming — menu, start date, and how to tweak before day one.'
    },
    {
      title:  'Today\'s delivery is locked',
      user:   'New user',
      plan:   'Plan active',
      date:   'Today',
      action: 'Changes locked',
      body:   'Once the kitchen cut-off passes, edits are frozen. The screen explains why changes aren\'t available and points users to what they can still do.'
    },
    {
      title:  'Tomorrow is still flexible',
      user:   'New user',
      plan:   'Plan active',
      date:   'Tomorrow',
      action: 'Manage delivery',
      body:   'Looking ahead, users can skip, swap, or reschedule tomorrow\'s meal — as long as they\'re inside the management window.'
    },
    {
      title:  'Reflect on yesterday',
      user:   'New user',
      plan:   'Plan active',
      date:   'Yesterday',
      action: 'Rate meal',
      body:   'Past deliveries become feedback opportunities. Rating a meal feeds the preference engine and makes future menus feel more personal.'
    },
    {
      title:  'Plan is winding down',
      user:   'Existing user',
      plan:   'Plan active',
      date:   'Expiring soon',
      action: 'Review renewal',
      body:   'With a few days left, the experience shifts toward renewal — clear timing, plan options, and no pressure to decide in a hurry.'
    },
    {
      title:  'Coming back after a break',
      user:   'Returning user',
      plan:   'Plan expired',
      date:   'No active deliveries',
      action: 'Renew plan',
      body:   'The plan has lapsed and there\'s nothing on the calendar. Returning users need a short path back in — renew, pick a start date, and go.'
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

  var chipEls = {
    user: {
      a: section.querySelector('[data-chip="user"][data-slot="a"]'),
      b: section.querySelector('[data-chip="user"][data-slot="b"]')
    },
    plan: {
      a: section.querySelector('[data-chip="plan"][data-slot="a"]'),
      b: section.querySelector('[data-chip="plan"][data-slot="b"]')
    },
    date: {
      a: section.querySelector('[data-chip="date"][data-slot="a"]'),
      b: section.querySelector('[data-chip="date"][data-slot="b"]')
    },
    action: {
      a: section.querySelector('[data-chip="action"][data-slot="a"]'),
      b: section.querySelector('[data-chip="action"][data-slot="b"]')
    }
  };

  if (!titleA || !titleB || !bodyA || !bodyB) return;
  if (!chipEls.user.a || !chipEls.plan.a || !chipEls.date.a || !chipEls.action.a) return;

  var activeIdx = 0;
  var animating = false;
  var pendingIdx = null;
  var titleActive = titleA;
  var titleStand  = titleB;
  var bodyActive  = bodyA;
  var bodyStand   = bodyB;
  var chipActive = {
    user: chipEls.user.a,
    plan: chipEls.plan.a,
    date: chipEls.date.a,
    action: chipEls.action.a
  };
  var chipStand = {
    user: chipEls.user.b,
    plan: chipEls.plan.b,
    date: chipEls.date.b,
    action: chipEls.action.b
  };

  function syncWrapHeight(wrap, a, b) {
    if (!wrap) return;
    wrap.style.height = Math.max(a.scrollHeight, b.scrollHeight, 1) + 'px';
  }

  function seed(state) {
    titleActive.textContent = state.title;
    bodyActive.textContent = state.body;
    chipActive.user.textContent = state.user;
    chipActive.plan.textContent = state.plan;
    chipActive.date.textContent = state.date;
    chipActive.action.textContent = state.action;
    syncWrapHeight(titleWrap, titleActive, titleStand);
    syncWrapHeight(bodyWrap, bodyActive, bodyStand);
  }

  seed(STATES[0]);

  function panelVideo(panel) {
    return panel ? panel.querySelector('video.pd-states-media-video') : null;
  }

  function playVideo(video) {
    if (!video) return;
    var playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function () { /* autoplay may be blocked until gesture */ });
    }
  }

  function pauseVideo(video) {
    if (!video) return;
    video.pause();
  }

  function syncVideos(activeIndex) {
    panels.forEach(function (panel, i) {
      var video = panelVideo(panel);
      if (!video) return;
      if (i === activeIndex) playVideo(video);
      else pauseVideo(video);
    });
  }

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      section.classList.add('pd-states--ready');
      syncWrapHeight(titleWrap, titleActive, titleStand);
      syncWrapHeight(bodyWrap, bodyActive, bodyStand);
      syncVideos(activeIdx);
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

    if (MOBILE_MQ.matches) {
      panels[activeIdx].classList.remove('is-active');
      panels[idx].classList.add('is-active');
      activeIdx = idx;
      syncVideos(activeIdx);
      return;
    }

    if (animating) {
      pendingIdx = idx;
      return;
    }

    animating = true;
    var reverse = idx < activeIdx;
    var state = STATES[idx];

    panels[activeIdx].classList.remove('is-active');
    panels[idx].classList.add('is-active');
    syncVideos(idx);

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

    var keys = ['user', 'plan', 'date', 'action'];
    keys.forEach(function (key) {
      var c = swapPair(chipActive[key], chipStand[key], state[key], reverse);
      chipActive[key] = c.active;
      chipStand[key] = c.stand;
    });

    activeIdx = idx;

    setTimeout(function () {
      resetStandby(titleStand);
      resetStandby(bodyStand);
      keys.forEach(function (key) { resetStandby(chipStand[key]); });
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

    var mid = window.innerHeight * 0.45;
    var bestIdx = activeIdx;
    var bestDist = Infinity;

    panels.forEach(function (panel, i) {
      var rect = panel.getBoundingClientRect();
      var center = rect.top + rect.height * 0.5;
      var dist = Math.abs(center - mid);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    });

    applyState(bestIdx);
  }

  /* Mobile: stacked panels — play only the video currently in view. */
  var mobileVideoObserver = null;

  function setupMobileVideoObserver() {
    if (mobileVideoObserver) {
      mobileVideoObserver.disconnect();
      mobileVideoObserver = null;
    }

    if (!MOBILE_MQ.matches) {
      syncVideos(activeIdx);
      return;
    }

    mobileVideoObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var video = entry.target;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            playVideo(video);
          } else {
            pauseVideo(video);
          }
        });
      },
      { threshold: [0, 0.4, 0.65], rootMargin: '-10% 0px -10% 0px' }
    );

    panels.forEach(function (panel) {
      var video = panelVideo(panel);
      if (video) mobileVideoObserver.observe(video);
    });
  }

  if (typeof lenis !== 'undefined' && lenis) {
    lenis.on('scroll', resolveActive);
  } else {
    window.addEventListener('scroll', resolveActive, { passive: true });
  }

  window.addEventListener('resize', function () {
    resolveActive();
    setupMobileVideoObserver();
  }, { passive: true });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      panels.forEach(function (panel) { pauseVideo(panelVideo(panel)); });
    } else if (!MOBILE_MQ.matches) {
      syncVideos(activeIdx);
    }
  });

  resolveActive();
  setupMobileVideoObserver();
})();
