(function () {
  'use strict';

  var precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!precisePointer.matches) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.selected-work-cover').forEach(function (cover) {
    var follower = cover.querySelector('.selected-work-cursor');
    if (!follower) return;

    var currentX = 0;
    var currentY = 0;
    var targetX = 0;
    var targetY = 0;
    var frame = 0;
    var active = false;
    var lastClientX = 0;
    var lastClientY = 0;
    var scrollFrame = 0;

    cover.classList.add('has-custom-cursor');

    function positionFollower() {
      if (reducedMotion) {
        currentX = targetX;
        currentY = targetY;
      } else {
        currentX += (targetX - currentX) * 0.18;
        currentY += (targetY - currentY) * 0.18;
      }

      follower.style.transform = 'translate3d(' + currentX + 'px,' + currentY + 'px,0)';

      if (active && (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1)) {
        frame = window.requestAnimationFrame(positionFollower);
      } else {
        frame = 0;
      }
    }

    function updateTarget(event) {
      lastClientX = event.clientX;
      lastClientY = event.clientY;
      var bounds = cover.getBoundingClientRect();
      targetX = lastClientX - bounds.left;
      targetY = lastClientY - bounds.top;
    }

    function syncDuringScroll() {
      scrollFrame = 0;
      if (!active) return;

      var elementUnderPointer = document.elementFromPoint(lastClientX, lastClientY);
      if (!elementUnderPointer || elementUnderPointer.closest('.selected-work-cover') !== cover) {
        active = false;
        cover.classList.remove('is-cursor-active');
        return;
      }

      var bounds = cover.getBoundingClientRect();
      targetX = lastClientX - bounds.left;
      targetY = lastClientY - bounds.top;
      currentX = targetX;
      currentY = targetY;
      follower.style.transform = 'translate3d(' + currentX + 'px,' + currentY + 'px,0)';
    }

    cover.addEventListener('pointerenter', function (event) {
      active = true;
      updateTarget(event);
      currentX = targetX;
      currentY = targetY;
      follower.style.transform = 'translate3d(' + currentX + 'px,' + currentY + 'px,0)';
      cover.classList.add('is-cursor-active');
    });

    cover.addEventListener('pointermove', function (event) {
      updateTarget(event);
      if (!frame) frame = window.requestAnimationFrame(positionFollower);
    });

    cover.addEventListener('pointerleave', function () {
      active = false;
      cover.classList.remove('is-cursor-active');
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    });

    window.addEventListener('scroll', function () {
      if (active && !scrollFrame) {
        scrollFrame = window.requestAnimationFrame(syncDuringScroll);
      }
    }, { passive: true });
  });
})();
