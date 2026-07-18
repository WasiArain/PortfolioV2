
export function initPortfolio() {
  const grid = document.querySelector('.portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const showMoreBtn = document.getElementById('load-more-btn');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  const fsViewer = document.querySelector('.fullscreen-viewer');

  if (!grid) return;

  const portfolioData = [
    {
      id: 'proj-1',
      title: 'Modern E-Commerce Store',
      category: ['Shopify', 'React/Next'],
      thumb: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'A headless Shopify build with extremely fast load times.'
    },
    {
      id: 'proj-2',
      title: 'Corporate Webflow Site',
      category: ['Webflow'],
      thumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Full corporate redesign with complex Webflow interactions.'
    },
    {
      id: 'proj-3',
      title: 'Custom Admin Dashboard',
      category: ['Custom (HTML/CSS/JS)', 'Node.js/PHP'],
      thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Internal CMS dashboard built with Vanilla JS and Node backend.'
    },
    {
      id: 'proj-4',
      title: 'Local Business WordPress',
      category: ['WordPress'],
      thumb: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Custom Elementor theme for a local service business.'
    },
    {
      id: 'proj-5',
      title: 'Fitness App Landing Page',
      category: ['React/Next'],
      thumb: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'High-conversion landing page for a mobile fitness application.'
    },
    {
      id: 'proj-6',
      title: 'Real Estate Portal',
      category: ['WordPress', 'Node.js/PHP'],
      thumb: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Property listing portal with custom filtering and maps.'
    },
    {
      id: 'proj-7',
      title: 'SaaS Dashboard',
      category: ['React/Next', 'Custom (HTML/CSS/JS)'],
      thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Analytics dashboard with D3.js charting.'
    },
    {
      id: 'proj-8',
      title: 'Creative Agency Portfolio',
      category: ['Webflow'],
      thumb: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=600&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1481481322814-3d5408cb3cd7?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Slick and highly animated portfolio for a creative agency.'
    },
    {
      id: 'proj-9',
      title: 'Travel Blog CMS',
      category: ['WordPress', 'Custom (HTML/CSS/JS)'],
      thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'High performance WordPress theme customized for an international travel blog.'
    },
    {
      id: 'proj-10',
      title: 'Music Festival Landing Page',
      category: ['React/Next'],
      thumb: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1540039155732-6761b20ce8b1?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Interactive Next.js page with WebGL animations for a large music festival.'
    },
    {
      id: 'proj-11',
      title: 'Restaurant Order System',
      category: ['Node.js/PHP', 'React/Next'],
      thumb: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Full-stack application managing live orders and inventory for a restaurant.'
    },
    {
      id: 'proj-12',
      title: 'Automotive Dealer Site',
      category: ['Webflow', 'Custom (HTML/CSS/JS)'],
      thumb: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80',
      screenshots: [
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80'
      ],
      description: 'Webflow build tailored for a luxury car dealership showcasing their catalog.'
    }
  ];

  let currentFilter = "All";
  let showingAll = false;
  let activeProj = null;
  let activeSlideIndex = 0;

  function renderGrid() {
    grid.innerHTML = "";
    const filtered = currentFilter === "All" ? portfolioData : portfolioData.filter(p => p.category.includes(currentFilter));

    const limit = showingAll ? filtered.length : Math.min(filtered.length, 6);

    if (showMoreBtn) {
      if (filtered.length <= 6) {
        showMoreBtn.style.display = "none";
      } else {
        showMoreBtn.style.display = "inline-flex";
        showMoreBtn.textContent = showingAll ? "Show Less" : "Show More";
      }
    }

    for (let idx = 0; idx < limit; idx++) {
      const proj = filtered[idx];
      const delay = (idx % 6) * 100;
      const card = document.createElement("div");
      card.className = "portfolio-card glass reveal";
      card.style.transitionDelay = delay + "ms";
      card.setAttribute("data-tilt", "");
      card.innerHTML = `
        <div class="portfolio-thumb">
          <img src="${proj.thumb}" alt="${proj.title}" loading="lazy">
        </div>
        <div class="portfolio-info">
          <h3>${proj.title}</h3>
          <div class="portfolio-tags">
            ${proj.category.map(c => `<span class="portfolio-tag">${c}</span>`).join("")}
          </div>
        </div>
      `;
      card.addEventListener("click", () => openTier1Modal(proj));
      grid.appendChild(card);
    }

    if (window.VanillaTilt && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.VanillaTilt.init(grid.querySelectorAll(".portfolio-card"), { max: 15, speed: 400, glare: true, "max-glare": 0.2 });
    }
    setTimeout(() => grid.querySelectorAll(".reveal").forEach(el => el.classList.add("active")), 50);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      showingAll = false;
      renderGrid();
    });
  });

  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showingAll = !showingAll;
      renderGrid();
    });
  }

  function openTier1Modal(proj) {
    activeProj = proj;
    activeSlideIndex = 0;
    const content = modalOverlay.querySelector(".modal-inner-content");
    content.innerHTML = `
      <div class="modal-carousel" id="tier1-carousel">
        <div class="carousel-nav" style="position:absolute; width:100%; top:50%; transform:translateY(-50%); display:flex; justify-content:space-between; z-index:10; pointer-events:none;">
          <button id="t1-prev" style="pointer-events:auto; background:rgba(0,0,0,0.5); color:#fff; border:none; border-radius:50%; width:40px; height:40px; cursor:pointer; margin-left:10px;"><ion-icon name="chevron-back-outline"></ion-icon></button>
          <button id="t1-next" style="pointer-events:auto; background:rgba(0,0,0,0.5); color:#fff; border:none; border-radius:50%; width:40px; height:40px; cursor:pointer; margin-right:10px;"><ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div>
        <img id="tier1-img" src="${proj.screenshots[activeSlideIndex]}" class="active" alt="${proj.title}" style="cursor:zoom-in;">
      </div>
      <div class="carousel-bullets" id="t1-bullets" style="margin-top: -10px; margin-bottom: 20px;">
        ${proj.screenshots.map((s, i) => `<div class="carousel-bullet ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('')}
      </div>
      <h2>${proj.title}</h2>
      <div class="portfolio-tags" style="margin-bottom: 1rem;">
        ${proj.category.map(c => `<span class="portfolio-tag">${c}</span>`).join("")}
      </div>
      <p>${proj.description}</p>
    `;

    const imgEl = content.querySelector('#tier1-img');
    imgEl.addEventListener('click', () => openTier2Modal());

    content.querySelector('#t1-prev').addEventListener('click', (e) => { e.stopPropagation(); updateSlide(-1); });
    content.querySelector('#t1-next').addEventListener('click', (e) => { e.stopPropagation(); updateSlide(1); });

    content.querySelectorAll('#t1-bullets .carousel-bullet').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        activeSlideIndex = parseInt(b.getAttribute('data-index'));
        updateSlide(0);
      });
    });

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function updateSlide(dir) {
    if (!activeProj) return;
    activeSlideIndex = (activeSlideIndex + dir + activeProj.screenshots.length) % activeProj.screenshots.length;

    const imgEl = document.getElementById('tier1-img');
    if (imgEl) {
      imgEl.style.opacity = 0;
      setTimeout(() => {
        imgEl.src = activeProj.screenshots[activeSlideIndex];
        imgEl.style.opacity = 1;
      }, 200);
    }

    const bullets = document.querySelectorAll('#t1-bullets .carousel-bullet');
    bullets.forEach((b, i) => b.classList.toggle('active', i === activeSlideIndex));

    // If fsViewer is active, sync it
    if (fsViewer && fsViewer.classList.contains('active')) {
      const fsImg = fsViewer.querySelector("img");
      fsImg.style.opacity = 0;
      setTimeout(() => {
        fsImg.src = activeProj.screenshots[activeSlideIndex];
        fsImg.style.opacity = 1;
      }, 200);
    }
  }

  function openTier2Modal() {
    if (!fsViewer || !activeProj) return;
    const fsImg = fsViewer.querySelector("img");
    fsImg.style.transition = "opacity 0.2s";
    fsImg.src = activeProj.screenshots[activeSlideIndex];
    fsImg.style.opacity = 1;
    fsViewer.classList.add("active");
  }

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
      activeProj = null;
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
        activeProj = null;
      }
    });
  }

  if (fsViewer) {
    const fsClose = fsViewer.querySelector(".fs-close");
    const fsPrev = fsViewer.querySelector(".fs-prev");
    const fsNext = fsViewer.querySelector(".fs-next");

    if (fsClose) fsClose.addEventListener("click", () => fsViewer.classList.remove("active"));
    if (fsPrev) fsPrev.addEventListener("click", () => updateSlide(-1));
    if (fsNext) fsNext.addEventListener("click", () => updateSlide(1));
  }

  renderGrid();
}
