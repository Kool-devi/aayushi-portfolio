/* ═══════════════════════════════════════════════════════════════
   PROJECT INDEX RENDER
   Homepage cards + case-study “Also check out” + mailto subject.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var portfolio = window.PORTFOLIO || {};
  var projects = portfolio.projects || [];
  var email = portfolio.email || 'hello@aayushi.design';
  var DEFAULT_PREVIEW = 'ProjectSectionImage.png';

  function publishedProjects() {
    return projects.filter(function (project) {
      return project.published && project.href;
    });
  }

  function pad(index) {
    var n = index + 1;
    return n < 10 ? '0' + n : String(n);
  }

  function metaLine(project) {
    return [project.name, project.category, project.year]
      .filter(Boolean)
      .join(' · ');
  }

  function cssUrl(path) {
    return 'url("' + encodeURI(path).replace(/"/g, '%22') + '")';
  }

  function previewLayer(path) {
    return (
      'linear-gradient(rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), ' +
      cssUrl(path || DEFAULT_PREVIEW)
    );
  }

  function currentProjectId() {
    return document.body.getAttribute('data-project') || '';
  }

  function findProject(id) {
    for (var i = 0; i < projects.length; i += 1) {
      if (projects[i].id === id) return projects[i];
    }
    return null;
  }

  /* ── Homepage numbered cards ─────────────────────────────── */

  function renderHomepage() {
    var root = document.querySelector('[data-projects-home]');
    if (!root || !projects.length) return;

    var left = document.querySelector('.projects-left');
    root.textContent = '';

    projects.forEach(function (project, index) {
      var isLive = project.published && project.href;
      var card = document.createElement(isLive ? 'a' : 'article');
      card.className = 'proj-card' + (isLive ? '' : ' proj-card--soon');

      if (isLive) {
        card.href = project.href;
      } else {
        card.setAttribute('aria-disabled', 'true');
      }

      var name = document.createElement('span');
      name.className = 'proj-card-name';
      name.textContent = project.name;

      var num = document.createElement('span');
      num.className = 'proj-card-num';
      num.textContent = pad(index);

      card.appendChild(name);
      card.appendChild(num);
      root.appendChild(card);

      if (!left) return;

      card.addEventListener('mouseenter', function () {
        left.style.backgroundImage = previewLayer(project.preview);
      });
      card.addEventListener('mouseleave', function () {
        left.style.backgroundImage = previewLayer(DEFAULT_PREVIEW);
      });
      card.addEventListener('focus', function () {
        left.style.backgroundImage = previewLayer(project.preview);
      });
      card.addEventListener('blur', function () {
        left.style.backgroundImage = previewLayer(DEFAULT_PREVIEW);
      });
    });
  }

  /* ── Case study: Also check out ──────────────────────────── */

  function renderRelated() {
    var grid = document.querySelector('[data-projects-related]');
    if (!grid) return;

    var section = grid.closest('.pd-related');
    var currentId = currentProjectId();
    var others = publishedProjects().filter(function (project) {
      return project.id !== currentId;
    }).slice(0, 2);

    if (!others.length) {
      if (section) section.hidden = true;
      return;
    }

    grid.textContent = '';

    others.forEach(function (project) {
      var card = document.createElement('a');
      card.className = 'pd-related-card';
      card.href = project.href;

      if (project.thumbnail) {
        var media = document.createElement('div');
        media.className = 'pd-related-media';
        var img = document.createElement('img');
        img.src = project.thumbnail;
        img.alt = project.title || project.name;
        img.loading = 'lazy';
        img.decoding = 'async';
        media.appendChild(img);
        card.appendChild(media);
      }

      var meta = document.createElement('p');
      meta.className = 'pd-related-meta';
      meta.textContent = metaLine(project);
      card.appendChild(meta);

      var title = document.createElement('h3');
      title.className = 'pd-related-title';
      title.textContent = project.title || project.name;
      card.appendChild(title);

      grid.appendChild(card);
    });

    if (section) section.hidden = false;
  }

  /* ── Case study mailto subject ───────────────────────────── */

  function enhanceContactCta() {
    var cta = document.querySelector('.pd-contact-cta');
    if (!cta) return;

    var project = findProject(currentProjectId());
    var subject = (project && project.emailSubject) || 'Case study';
    cta.href = 'mailto:' + email + '?subject=' + encodeURIComponent(subject);

    var label = 'Email Aayushi at ' + email;
    if (project && project.name) {
      label += ' about the ' + project.name + ' case study';
    }
    cta.setAttribute('aria-label', label);
  }

  renderHomepage();
  renderRelated();
  enhanceContactCta();
})();
