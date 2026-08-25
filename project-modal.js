// Project case-study modal — shared across pages. Requires PROJECTS (from projects-data.js)
// and a modal skeleton in the DOM: #modalOverlay > .modal#modalPanel > #modalGallery, #modalBody
//
// You shouldn't need to edit this file to add or update a project — that all
// happens in projects-data.js. This file just reads whatever is in PROJECTS
// and builds the HTML for whichever project's modal is opened. The main things
// it decides automatically, based on what fields are present in the data:
//   - Carousel vs. flat color tiles at the top (see renderProject → galleryImages)
//   - Plain text tab vs. a tab broken into labeled stages (see renderProject → caseStudy)
//   - A bullet list vs. no list within a stage (see mediaHtmlFor / stage.list)

(function () {
  const overlay = document.getElementById('modalOverlay');
  const panel = document.getElementById('modalPanel');
  const gallery = document.getElementById('modalGallery');
  const body = document.getElementById('modalBody');
  if (!overlay || !panel || typeof PROJECTS === 'undefined') return;

  function renderProject(p) {
    panel.className = 'modal ' + p.gradient;

    // Top carousel: real "final project" images (galleryImages: [{src, alt}])
    // if provided, otherwise fall back to the gradient-block + text-label tiles.
    if (p.galleryImages && p.galleryImages.length) {
      gallery.classList.add('is-carousel');
      const slides = p.galleryImages.map(img =>
        `<div class="carousel-slide"><img src="${img.src}" alt="${img.alt || ''}" loading="lazy"></div>`
      ).join('');
      const dots = p.galleryImages.length > 1
        ? p.galleryImages.map((_, i) => `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to image ${i + 1}"></button>`).join('')
        : '';
      gallery.innerHTML = `
        <div class="carousel-track">${slides}</div>
        ${p.galleryImages.length > 1 ? `
          <button class="carousel-btn prev" aria-label="Previous image">‹</button>
          <button class="carousel-btn next" aria-label="Next image">›</button>
          <div class="carousel-dots">${dots}</div>
        ` : ''}
      `;

      const track = gallery.querySelector('.carousel-track');
      const dotEls = Array.from(gallery.querySelectorAll('.carousel-dot'));
      const total = p.galleryImages.length;
      let current = 0;

      function goTo(i) {
        current = (i + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        dotEls.forEach((d, idx) => d.classList.toggle('active', idx === current));
      }
      gallery.querySelector('.carousel-btn.prev')?.addEventListener('click', () => goTo(current - 1));
      gallery.querySelector('.carousel-btn.next')?.addEventListener('click', () => goTo(current + 1));
      dotEls.forEach((d, idx) => d.addEventListener('click', () => goTo(idx)));
    } else {
      gallery.classList.remove('is-carousel');
      gallery.innerHTML = p.gallery.map(label =>
        `<div class="g-tile"><span>${label}</span></div>`
      ).join('');
    }

    const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

    const tabBtns = p.caseStudy.map((s, i) =>
      `<button class="tab-btn${i === 0 ? ' active' : ''}" data-cs-tab="cs-${i}">${s.heading}</button>`
    ).join('');

    // Renders whatever image content a case-study section (or a stage inside
    // it) has: a real image grid if `images` is set, the old text-caption
    // placeholder box if only `image` (a string) is set, or nothing at all.
    function mediaHtmlFor(section) {
      if (section.images && section.images.length) {
        return `<div class="modal-img-grid">${
          section.images.map(img => `<img src="${img.src}" alt="${img.alt || ''}" loading="lazy">`).join('')
        }</div>`;
      }
      if (section.image) {
        return `<div class="modal-img-placeholder"><span>${section.image}</span></div>`;
      }
      return '';
    }

    const tabPanels = p.caseStudy.map((s, i) => {
      let content;
      if (s.stages && s.stages.length) {
        // e.g. the "Process" tab, broken into Design Thinking stages —
        // each stage is its own sub-heading with its text and inline images.
        const introHtml = s.text ? `<p class="modal-stage-intro">${s.text}</p>` : '';
        content = introHtml + s.stages.map(stage => {
          const listHtml = stage.list && stage.list.length
            ? `<ul class="modal-list">${stage.list.map(item => `<li>${item}</li>`).join('')}</ul>`
            : '';
          return `
            <div class="modal-stage">
              <h3>${stage.heading}</h3>
              <p>${stage.text}</p>
              ${listHtml}
              ${mediaHtmlFor(stage)}
            </div>
          `;
        }).join('');
      } else {
        content = `<p>${s.text}</p>${mediaHtmlFor(s)}`;
      }
      return `
        <div class="tab-panel${i === 0 ? ' active' : ''}" id="cs-${i}">
          <div class="modal-section">${content}</div>
        </div>
      `;
    }).join('');

    body.innerHTML = `
      <div class="modal-meta">
        <div>
          <div class="modal-tags">${tagsHtml}</div>
          <h2>${p.title}</h2>
        </div>
        <div class="modal-date">${p.date}</div>
      </div>
      <p class="modal-brief">${p.brief}</p>
      <a class="modal-live" href="${p.liveUrl}" target="_blank" rel="noopener">View live ↗</a>
      <div class="modal-divider"></div>
      <div class="modal-tabs">
        <div class="tabs">${tabBtns}</div>
        ${tabPanels}
      </div>
    `;

    body.querySelectorAll('.modal-tabs .tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        body.querySelectorAll('.modal-tabs .tab-btn').forEach(b => b.classList.remove('active'));
        body.querySelectorAll('.modal-tabs .tab-panel').forEach(pn => pn.classList.remove('active'));
        btn.classList.add('active');
        body.querySelector('#' + btn.dataset.csTab).classList.add('active');
      });
    });
  }

  function openModal(id) {
    const project = PROJECTS.find(p => p.id === id);
    if (!project) return;
    renderProject(project);
    overlay.classList.add('open');
    document.body.classList.add('modal-locked');
    overlay.scrollTop = 0;
    closeBtnFocus();
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.classList.remove('modal-locked');
  }

  function closeBtnFocus() {
    const btn = document.getElementById('modalClose');
    if (btn) btn.focus();
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  // Event delegation: works for cards present at load AND any added later
  // (e.g. project cards inserted dynamically by a "view all" expand action).
  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-project]');
    if (card) openModal(card.dataset.project);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('[data-project]');
    if (card) {
      e.preventDefault();
      openModal(card.dataset.project);
    }
  });
})();
