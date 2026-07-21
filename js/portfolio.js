
export function initPortfolio() {
  // Select necessary DOM elements for portfolio functionality
  const grid = document.querySelector('.portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const showMoreBtn = document.getElementById('load-more-btn');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  const fsViewer = document.querySelector('.fullscreen-viewer');

  // Guard clause to prevent errors on pages without the portfolio grid
  if (!grid) return;

  // Array containing all portfolio projects and their details
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
      description: 'A bespoke Wikipedia page and profile creation service featuring a modern, user-friendly interface built with custom HTML, CSS, and vanilla JavaScript.'
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
      description: 'A comprehensive corporate website designed and developed for StepTech Solutions utilizing WordPress for scalable content management.'
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
      description: 'A vibrant and engaging e-commerce platform for Jaries Pet Shop, built with Wix to streamline the shopping experience.'
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
      description: 'A sleek, highly interactive portfolio and booking platform for Timeless Media, crafted entirely with custom HTML, CSS, and JavaScript.'
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
      description: 'A fast and responsive corporate landing page for KDar, developed using a custom HTML/CSS/JS architecture for optimal performance.'
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
      description: 'A secure, visually refined digital presence and client portal interface for Muza Capital, built with pure web technologies.'
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
      description: 'A sophisticated, high-end agency portfolio for Monki NYC, powered by a customized WordPress architecture.'
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
      description: 'A premium e-commerce storefront for CNB Leather Goods, seamlessly integrating shopping functionality within a tailored WordPress environment.'
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
      description: 'A dynamic sports news and live-streaming hub for Tenwickets, utilizing WordPress to handle frequent updates and rich media content.'
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
      description: 'An elegant, conversion-optimized Shopify storefront for Masquerade Candle Shop, featuring custom theme modifications.'
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
      description: 'A dedicated Shopify e-commerce solution for Unique Kennels, designed to provide a seamless browsing and purchasing experience.'
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
      description: 'An engaging event directory and booking platform for Black Travel Events, built on a robust WordPress foundation.'
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
      description: 'My previous personal portfolio iteration, showcasing early design concepts and vanilla JavaScript animations.'
    }
  ];

  // State variables for filtering and pagination
  let currentFilter = "All";
  let showingAll = false;
  let activeProj = null;
  let activeSlideIndex = 0;

  // Function to render the portfolio grid based on active filters
  function renderGrid() {
    grid.innerHTML = "";

    // Filter projects based on the selected category
    const filtered = currentFilter === "All" ? portfolioData : portfolioData.filter(p => p.category.includes(currentFilter));

    // FIX: some filter buttons in index.html (React.js/Next.js, PHP/SQL) don't
    // have any matching projects yet. Previously this silently rendered an
    // empty grid with no explanation — indistinguishable from a broken page.
    // Root-caused instead of patched around: this handles ANY filter with
    // zero results, present or future, rather than requiring index.html's
    // buttons to be kept in sync with portfolioData by hand.
    if (filtered.length === 0) {
      if (showMoreBtn) showMoreBtn.style.display = "none";
      const emptyState = document.createElement("div");
      emptyState.className = "portfolio-empty-state reveal active";
      emptyState.innerHTML = `
        <p style="text-align:center; grid-column: 1 / -1; padding: 2rem 0; color: var(--text-secondary);">
          No projects in this category yet — check back soon, or explore another filter above.
        </p>
      `;
      grid.appendChild(emptyState);
      return;
    }

    // Determine how many projects to show
    const limit = showingAll ? filtered.length : Math.min(filtered.length, 6);

    // Update the visibility and text of the 'Show More' button
    if (showMoreBtn) {
      if (filtered.length <= 6) {
        showMoreBtn.style.display = "none";
      } else {
        showMoreBtn.style.display = "inline-flex";
        showMoreBtn.textContent = showingAll ? "Show Less" : "Show More";
      }
    }

    // Create and append portfolio cards to the grid
    for (let idx = 0; idx < limit; idx++) {
      const proj = filtered[idx];
      const delay = (idx % 6) * 100; // Staggered animation delay
      const card = document.createElement("div");
      card.className = "portfolio-card glass reveal";
      card.style.transitionDelay = delay + "ms";
      card.setAttribute("data-tilt", "");
      card.innerHTML = `
        <div class="portfolio-thumb">
          <img src="${proj.thumb}" alt="${proj.title}" loading="lazy" decoding="async">
        </div>
        <div class="portfolio-info">
          <h3>${proj.title}</h3>
          <div class="portfolio-tags">
            ${proj.category.map(c => `<span class="portfolio-tag">${c}</span>`).join("")}
          </div>
        </div>
      `;
      // Open the modal when a card is clicked
      card.addEventListener("click", () => openTier1Modal(proj));
      grid.appendChild(card);
    }

    // Re-initialize Vanilla-Tilt effect for new cards
    if (window.VanillaTilt && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.VanillaTilt.init(grid.querySelectorAll(".portfolio-card"), { max: 15, speed: 400, glare: true, "max-glare": 0.2 });
    }

    // Trigger entrance animations for newly added cards
    setTimeout(() => grid.querySelectorAll(".reveal").forEach(el => el.classList.add("active")), 50);
  }

  // Attach event listeners to filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update active state class on buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Update filter state and re-render grid
      currentFilter = btn.getAttribute("data-filter");
      showingAll = false;
      renderGrid();
    });
  });

  // Attach event listener for the 'Show More' button
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showingAll = !showingAll;
      renderGrid();
    });
  }

  // Function to open the first-tier modal (project details and image slider)
  function openTier1Modal(proj) {
    activeProj = proj;
    activeSlideIndex = 0;
    const content = modalOverlay.querySelector(".modal-inner-content");

    // Inject HTML for the modal content
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

    // Open fullscreen viewer on image click
    const imgEl = content.querySelector('#tier1-img');
    imgEl.addEventListener('click', () => openTier2Modal());

    // Slider navigation logic
    content.querySelector('#t1-prev').addEventListener('click', (e) => { e.stopPropagation(); updateSlide(-1); });
    content.querySelector('#t1-next').addEventListener('click', (e) => { e.stopPropagation(); updateSlide(1); });

    // Handle bullet navigation for the slider
    content.querySelectorAll('#t1-bullets .carousel-bullet').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        activeSlideIndex = parseInt(b.getAttribute('data-index'));
        updateSlide(0);
      });
    });

    // Show the modal and lock background scrolling
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Function to change the active slide in the modal image viewers
  function updateSlide(dir) {
    if (!activeProj) return;

    // Calculate new index with looping
    activeSlideIndex = (activeSlideIndex + dir + activeProj.screenshots.length) % activeProj.screenshots.length;

    // Fade out, swap source, and fade in the Tier 1 image
    const imgEl = document.getElementById('tier1-img');
    if (imgEl) {
      imgEl.style.opacity = 0;
      setTimeout(() => {
        imgEl.src = activeProj.screenshots[activeSlideIndex];
        imgEl.style.opacity = 1;
      }, 200);
    }

    // Update active bullet indicators
    const bullets = document.querySelectorAll('#t1-bullets .carousel-bullet');
    bullets.forEach((b, i) => b.classList.toggle('active', i === activeSlideIndex));

    // If fullscreen viewer is active, sync its image as well
    if (fsViewer && fsViewer.classList.contains('active')) {
      const fsImg = fsViewer.querySelector("img");
      fsImg.style.opacity = 0;
      setTimeout(() => {
        fsImg.src = activeProj.screenshots[activeSlideIndex];
        fsImg.style.opacity = 1;
      }, 200);
    }
  }

  // Function to open the second-tier modal (fullscreen image viewer)
  function openTier2Modal() {
    if (!fsViewer || !activeProj) return;
    const fsImg = fsViewer.querySelector("img");
    fsImg.style.transition = "opacity 0.2s";
    fsImg.src = activeProj.screenshots[activeSlideIndex];
    fsImg.style.opacity = 1;
    fsViewer.classList.add("active");
  }

  // Handle closing of the primary modal via close button
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
      activeProj = null;
    });
  }

  // Handle closing of the primary modal by clicking the background overlay
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
        activeProj = null;
      }
    });
  }

  // Setup listeners for the fullscreen viewer
  if (fsViewer) {
    const fsClose = fsViewer.querySelector(".fs-close");
    const fsPrev = fsViewer.querySelector(".fs-prev");
    const fsNext = fsViewer.querySelector(".fs-next");

    if (fsClose) fsClose.addEventListener("click", () => fsViewer.classList.remove("active"));
    if (fsPrev) fsPrev.addEventListener("click", () => updateSlide(-1));
    if (fsNext) fsNext.addEventListener("click", () => updateSlide(1));
  }

  // Initial render of the grid on load
  renderGrid();
}
