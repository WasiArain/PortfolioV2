
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
      title: 'Wiki Profile Creations',
      category: ['Custom (HTML/CSS/JS)'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Wiki_Profile_Creations/wikiprofilecreations-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Wiki_Profile_Creations/wikiprofilecreations-landing-page.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Wiki_Profile_Creations/wikiprofilecreations-home.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Wiki_Profile_Creations/wikiprofilecreations-about-us.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Wiki_Profile_Creations/wikiprofilecreations-portfolio.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Wiki_Profile_Creations/wikiprofilecreations-services.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Wiki_Profile_Creations/wikiprofilecreations-contact-us.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Wiki_Profile_Creations/wikiprofilecreations-why-hire-us.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Wiki_Profile_Creations/wikiprofilecreations-faqs.png'
      ],
      description: 'Wiki Profile Creations Website built with Custom (HTML/CSS/JS). It is outstanding Wikipedia Page & Profile creation service website with a modern design and user-friendly interface.'
    },
    {
      id: 'proj-2',
      title: 'StepTech Solutions',
      category: ['WordPress/Wix/Shopify'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/StepTech/StepTech-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/StepTech/StepTech-Landing-Page.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/StepTech/StepTech-Home.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/StepTech/StepTech-Portfolio.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/StepTech/StepTech-Services.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/StepTech/StepTech-Contact-Us.png'
      ],
      description: 'StepTech Solutions Website built with WordPress.'
    },
    {
      id: 'proj-3',
      title: 'Jaries Pet Shop',
      category: ['WordPress/Wix/Shopify'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Jaries_Pet_Shop/jariespetshop-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Jaries_Pet_Shop/jariespetshop-thumbnail.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Jaries_Pet_Shop/jariespetshop-shop.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Jaries_Pet_Shop/jariespetshop-collections.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Jaries_Pet_Shop/jariespetshop-featured.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Jaries_Pet_Shop/jariespetshop-social.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Jaries_Pet_Shop/jariespetshop-home.jpeg',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Jaries_Pet_Shop/jariespetshop-logo.jpeg'
      ],
      description: 'Jaries Pet Shop Website built with Wix.'
    },
    {
      id: 'proj-4',
      title: 'Timeless Media',
      category: ['Custom (HTML/CSS/JS)'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Timeless_Media/TimelessMedia-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Timeless_Media/TimelessMedia-landing-page.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Timeless_Media/TimelessMedia-home.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Timeless_Media/TimelessMedia-about-us.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Timeless_Media/TimelessMedia-portfolio.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Timeless_Media/TimelessMedia-contact-us.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Timeless_Media/TimelessMedia-home-category-engagement.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Timeless_Media/TimelessMedia-home-category-wedding.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Timeless_Media/TimelessMedia-home-category-portrait.png'
      ],
      description: 'Timeless Media Website built with Custom (HTML/CSS/JS).'
    },
    {
      id: 'proj-5',
      title: 'KDar',
      category: ['Custom (HTML/CSS/JS)'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/KDar/KDar-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/KDar/KDar-Landing-Page.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/KDar/KDar-Home.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/KDar/KDar-About-Us.png'
      ],
      description: 'KDar Website built with Custom (HTML/CSS/JS).'
    },
    {
      id: 'proj-6',
      title: 'Muza Capital',
      category: ['Custom (HTML/CSS/JS)'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Muza_Capital/MuzaCapital-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Muza_Capital/MuzaCapital-Landing-Page.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Muza_Capital/MuzaCapital-Home.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Muza_Capital/MuzaCapital-SignIn.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Muza_Capital/MuzaCapital-SignUp.png'
      ],
      description: 'Muza Capital Website built with Custom (HTML/CSS/JS).'
    },
    {
      id: 'proj-7',
      title: 'Monki NYC',
      category: ['WordPress/Wix/Shopify'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/MonkiNYC/monkinyc-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/MonkiNYC/monkinyc-thumbnail.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/MonkiNYC/monkinyc-home.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/MonkiNYC/monkinyc-about-us.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/MonkiNYC/monkinyc-our-projects.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/MonkiNYC/monkinyc-services-our-services-list.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/MonkiNYC/monkinyc-contact-us.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/MonkiNYC/monkinyc-book-appointment.png'
      ],
      description: 'Monki NYC Website built with WordPress.'
    },
    {
      id: 'proj-8',
      title: 'CNB Leather Goods',
      category: ['WordPress/Wix/Shopify'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/CNB_Leather_Goods/CnbLeatherGoods-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/CNB_Leather_Goods/CnbLeatherGoods-Landing-Page.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/CNB_Leather_Goods/CnbLeatherGoods-Home.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/CNB_Leather_Goods/CnbLeatherGoods-Shop.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/CNB_Leather_Goods/CnbLeatherGoods-Product-Page.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/CNB_Leather_Goods/CnbLeatherGoods-Checkout.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/CNB_Leather_Goods/CnbLeatherGoods-About-Us.png'
      ],
      description: 'CNB Leather Goods Website built with WordPress.'
    },
    {
      id: 'proj-9',
      title: 'Tenwickets',
      category: ['WordPress/Wix/Shopify'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Tenwickets/Tenwickets-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Tenwickets/Tenwickets-Landing-Page.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Tenwickets/Tenwickets-Home.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Tenwickets/Tenwickets-Livestream.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Tenwickets/Tenwickets-News.png'
      ],
      description: 'Tenwickets Website built with WordPress.'
    },
    {
      id: 'proj-10',
      title: 'Masquerade Candle Shop',
      category: ['WordPress/Wix/Shopify'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Masquerade_Candle_Shop/masqueradecandlesshop-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Masquerade_Candle_Shop/masqueradecandlesshop-home.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Masquerade_Candle_Shop/masqueradecandlesshop-store.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Masquerade_Candle_Shop/masqueradecandlesshop-gift-card.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Masquerade_Candle_Shop/masqueradecandlesshop-contact-us.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Masquerade_Candle_Shop/masqueradecandlesshop-blog.png'
      ],
      description: 'Masquerade Candle Shop Website built with Shopify.'
    },
    {
      id: 'proj-11',
      title: 'Unique Kennels',
      category: ['WordPress/Wix/Shopify'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Unique_Kennels/uniquekennels-org-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Unique_Kennels/uniquekennels-org-thumbnail.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Unique_Kennels/uniquekennels-org-landing-page.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Unique_Kennels/uniquekennels-org.png'
      ],
      description: 'Unique Kennels Website built with Shopify.'
    },
    {
      id: 'proj-12',
      title: 'Black Travel Events',
      category: ['WordPress/Wix/Shopify'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Black_Travel_Events/blacktravelevents-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Black_Travel_Events/blacktravelevents-home-1.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Black_Travel_Events/blacktravelevents-home-2.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Black_Travel_Events/blacktravelevents-home-3.png'
      ],
      description: 'Black Travel Events Website built with WordPress.'
    },
    {
      id: 'proj-13',
      title: 'WASI - Developers Old Portfolio',
      category: ['Custom (HTML/CSS/JS)'],
      thumb: 'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Wasi_-_Developers_Portfolio_Old/Wasi-Portfolio-thumbnail.png',
      screenshots: [
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Wasi_-_Developers_Portfolio_Old/Wasi-Portfolio-thumbnail.png',
        'https://wasiarain.github.io/PortfolioV2/assets/portfolio/Wasi_-_Developers_Portfolio_Old/Wasi-Portfolio.png'
      ],
      description: 'WASI - Developers Old Portfolio Website built with Custom (HTML/CSS/JS).'
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
