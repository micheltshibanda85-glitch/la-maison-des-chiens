(() => {
  "use strict";

  console.log("[La Maison des Chiens] script.js chargé");

  /* ============ GÉNÉRATEUR D'IMAGES SVG ============ */
  const PALETTE = ["#E07A5F", "#81B29A", "#E9C46A", "#6B574A", "#C8603E", "#5F9079", "#D4A574", "#A67C52"];

  function dogPlaceholder(name, breed, idx, w = 600, h = 400) {
    const bg = PALETTE[idx % PALETTE.length];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${bg}" stop-opacity="0.95"/>
          <stop offset="1" stop-color="${bg}" stop-opacity="0.7"/>
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#g)"/>
      <g fill="rgba(255,255,255,0.22)" transform="translate(${w / 2} ${h / 2 - 30})">
        <ellipse cx="-42" cy="-40" rx="14" ry="18"/>
        <ellipse cx="-14" cy="-58" rx="14" ry="18"/>
        <ellipse cx="14" cy="-58" rx="14" ry="18"/>
        <ellipse cx="42" cy="-40" rx="14" ry="18"/>
        <path d="M0,-30c-24,0-46,24-46,52 0,16 12,28 28,28 8,0 14-3 18-8 4,5 10,8 18,8 16,0 28-12 28-28 0-28-22-52-46-52z"/>
      </g>
      <text x="${w / 2}" y="${h - 90}" font-family="Georgia, serif" font-size="${Math.round(w / 18)}" font-weight="700" fill="white" text-anchor="middle" opacity="0.95">${name}</text>
      <text x="${w / 2}" y="${h - 55}" font-family="sans-serif" font-size="${Math.round(w / 34)}" fill="white" text-anchor="middle" opacity="0.8">${breed}</text>
    </svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  /* ============ IMAGE DU HERO (tout de suite) ============ */
  const heroImg = document.getElementById("hero-img") || document.querySelector(".hero-image img");
  if (heroImg) {
    heroImg.src = dogPlaceholder("Bienvenue", "La Maison des Chiens", 2, 900, 900);
    console.log("[La Maison des Chiens] image hero OK");
  } else {
    console.warn("[La Maison des Chiens] image hero introuvable");
  }

  /* ============ DONNÉES DES CHIENS ============ */
  const dogs = [
    { id: 1, name: "Rex", breed: "Berger Allemand", age: "4 mois", sex: "Mâle", size: "Grand", price: 450,
      img: dogPlaceholder("Rex", "Berger Allemand", 0),
      temperament: "Loyal, protecteur et très intelligent. Idéal pour une famille active.",
      description: "Rex est un chiot Berger Allemand curieux et déjà très obéissant pour son âge. Il adore jouer à la balle et suit son humain partout.",
      health: "Vaccins à jour, vermifugé, pucé. Carnet de santé fourni. Parents testés dysplasie." },
    { id: 2, name: "Bella", breed: "Golden Retriever", age: "3 mois", sex: "Femelle", size: "Grand", price: 500,
      img: dogPlaceholder("Bella", "Golden Retriever", 1),
      temperament: "Douce, joueuse et parfaite avec les enfants.",
      description: "Bella est la bonne humeur incarnée. Elle aime les câlins, les enfants et l'eau.",
      health: "Vaccins à jour, vermifugé, pucée. Radio des hanches des parents disponible." },
    { id: 3, name: "Milo", breed: "Labrador", age: "5 mois", sex: "Mâle", size: "Grand", price: 480,
      img: dogPlaceholder("Milo", "Labrador", 2),
      temperament: "Sociable, gourmand et facile à éduquer.",
      description: "Milo est un Labrador typique : toujours partant, un peu gourmand, et très attaché à sa famille.",
      health: "Vaccins à jour, vermifugé, pucé. Suivi vétérinaire complet." },
    { id: 4, name: "Nala", breed: "Husky Sibérien", age: "3 mois", sex: "Femelle", size: "Moyen", price: 550,
      img: dogPlaceholder("Nala", "Husky Sibérien", 3),
      temperament: "Énergique, curieuse et un brin têtue.",
      description: "Nala est une petite boule d'énergie. Elle a besoin d'un maître actif et cohérent.",
      health: "Vaccins à jour, vermifugée, pucée. Parents testés pour les yeux." },
    { id: 5, name: "Cookie", breed: "Bouledogue Français", age: "4 mois", sex: "Mâle", size: "Petit", price: 600,
      img: dogPlaceholder("Cookie", "Bouledogue Français", 4),
      temperament: "Câlin, drôle et parfait en appartement.",
      description: "Cookie est un petit clown au grand cœur. Il s'adapte très bien à la vie en appartement.",
      health: "Vaccins à jour, vermifugé, pucé. Respiration vérifiée par le vétérinaire." },
    { id: 6, name: "Simba", breed: "Rottweiler", age: "6 mois", sex: "Mâle", size: "Grand", price: 520,
      img: dogPlaceholder("Simba", "Rottweiler", 5),
      temperament: "Calme, confiant et très fidèle.",
      description: "Simba est un Rottweiler équilibré, déjà bien socialisé. Il a besoin d'une éducation ferme et bienveillante.",
      health: "Vaccins à jour, vermifugé, pucé. Parents testés dysplasie et caractère." },
    { id: 7, name: "Lola", breed: "Caniche", age: "3 mois", sex: "Femelle", size: "Petit", price: 400,
      img: dogPlaceholder("Lola", "Caniche", 6),
      temperament: "Vive, intelligente et affectueuse.",
      description: "Lola est une caniche naine brillante et pleine de vie. Elle ne perd presque pas de poils.",
      health: "Vaccins à jour, vermifugée, pucée. Poils soignés, oreilles propres." },
    { id: 8, name: "Oscar", breed: "Beagle", age: "5 mois", sex: "Mâle", size: "Moyen", price: 380,
      img: dogPlaceholder("Oscar", "Beagle", 7),
      temperament: "Joyeux, curieux et très proche de son nez.",
      description: "Oscar est un Beagle espiègle, toujours le nez au sol. Il aime les longues balades.",
      health: "Vaccins à jour, vermifugé, pucé. Suivi vétérinaire complet." }
  ];

  const testimonials = [
    { quote: "Nous avons adopté Bella il y a un an. Le suivi a été incroyable, même après l'adoption.", name: "Christelle M.", area: "Gombe, Kinshasa", stars: 5 },
    { quote: "J'avais peur d'acheter un chien en ligne, mais tout était clair : vaccins, carnet, visite vétérinaire.", name: "Patrick K.", area: "Limete, Kinshasa", stars: 5 },
    { quote: "Cookie est devenu la star de l'immeuble. Le courant est tout de suite passé.", name: "Sarah T.", area: "Ngaliema, Kinshasa", stars: 5 }
  ];

  /* ============ HELPERS ============ */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ============ INIT SÉCURISÉE ============ */
  try {
    /* --- MENU MOBILE --- */
    const navToggle = $(".nav-toggle");
    const navMenu = $("#nav-menu");
    if (navToggle && navMenu) {
      const closeMenu = () => {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
      };
      navToggle.addEventListener("click", () => {
        const open = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!open));
        navMenu.classList.toggle("is-open", !open);
      });
      $$(".nav-link, .nav-cta", navMenu).forEach(l => l.addEventListener("click", closeMenu));
      document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
    }

    /* --- CARTES CHIENS --- */
    const grid = $("#dogs-grid");
    const emptyMsg = $("#dogs-empty");
    const breedSelectFilter = $("#filter-breed");
    const formBreedSelect = $("#breed");

    const breeds = [...new Set(dogs.map(d => d.breed))].sort((a, b) => a.localeCompare(b, "fr"));
    breeds.forEach(breed => {
      if (breedSelectFilter) {
        const o = document.createElement("option");
        o.value = breed; o.textContent = breed;
        breedSelectFilter.appendChild(o);
      }
      if (formBreedSelect) {
        const o = document.createElement("option");
        o.value = breed; o.textContent = breed;
        formBreedSelect.appendChild(o);
      }
    });

    function dogCardHTML(d) {
      return `
        <article class="dog-card" data-size="${d.size}" data-breed="${d.breed}">
          <div class="dog-card-img">
            <img src="${d.img}" alt="${d.name}, ${d.breed}, ${d.age}" loading="lazy" width="600" height="400">
          </div>
          <div class="dog-card-body">
            <div class="dog-card-head">
              <h3>${d.name}</h3>
              <span class="dog-price">${d.price} $</span>
            </div>
            <p class="dog-meta">${d.breed} · ${d.age} · ${d.sex}</p>
            <p class="dog-temperament">${d.temperament}</p>
            <button class="btn btn-outline dog-card-btn" data-dog-id="${d.id}">Voir la fiche</button>
          </div>
        </article>`;
    }

    if (grid) {
      grid.innerHTML = dogs.map(dogCardHTML).join("");
      console.log("[La Maison des Chiens] cartes rendues:", dogs.length);
    }

    /* --- FILTRES --- */
    let activeSize = "all";
    let activeBreed = "all";

    function applyFilters() {
      if (!grid) return;
      let visible = 0;
      $$(".dog-card", grid).forEach(card => {
        const ok = (activeSize === "all" || card.dataset.size === activeSize) &&
                   (activeBreed === "all" || card.dataset.breed === activeBreed);
        card.style.display = ok ? "" : "none";
        if (ok) visible++;
      });
      if (emptyMsg) emptyMsg.hidden = visible > 0;
    }

    $$(".chip[data-filter-size]").forEach(btn => {
      btn.addEventListener("click", () => {
        $$(".chip[data-filter-size]").forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        activeSize = btn.dataset.filterSize;
        applyFilters();
        console.log("[Filtre taille]", activeSize);
      });
    });

    if (breedSelectFilter) {
      breedSelectFilter.addEventListener("change", () => {
        activeBreed = breedSelectFilter.value;
        applyFilters();
        console.log("[Filtre race]", activeBreed);
      });
    }

    /* --- MODAL --- */
    const modal = $("#dog-modal");
    const modalImg = $("#dog-modal-img");
    const modalTitle = $("#dog-modal-title");
    const modalPrice = $("#dog-modal-price");
    const modalMeta = $("#dog-modal-meta");
    const modalDesc = $("#dog-modal-desc");
    const modalHealth = $("#dog-modal-health");
    let lastFocused = null;

    function openModal(dog) {
      if (!modal) return;
      lastFocused = document.activeElement;
      if (modalImg) { modalImg.src = dog.img; modalImg.alt = `${dog.name}, ${dog.breed}`; }
      if (modalTitle) modalTitle.textContent = dog.name;
      if (modalPrice) modalPrice.textContent = `${dog.price} $`;
      if (modalMeta) modalMeta.textContent = `${dog.breed} · ${dog.age} · ${dog.sex} · ${dog.size}`;
      if (modalDesc) modalDesc.textContent = dog.description;
      if (modalHealth) modalHealth.textContent = dog.health;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      const closeBtn = $("#modal-close");
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      if (!modal || modal.hidden) return;
      modal.hidden = true;
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    if (grid) {
      grid.addEventListener("click", e => {
        const btn = e.target.closest(".dog-card-btn");
        if (!btn) return;
        const dog = dogs.find(d => d.id === Number(btn.dataset.dogId));
        if (dog) openModal(dog);
      });
    }
    $$("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

    if (modal) {
      modal.addEventListener("keydown", e => {
        if (e.key !== "Tab") return;
        const f = $$("button, a, input, select, textarea", modal).filter(el => !el.disabled && el.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      });
    }

    /* --- CARROUSEL AVIS --- */
    const track = $("#carousel-track");
    const dotsWrap = $("#carousel-dots");
    let currentSlide = 0;
    let carouselTimer = null;

    if (track && dotsWrap) {
      track.innerHTML = testimonials.map(t => `
        <li class="carousel-slide">
          <div class="carousel-stars" aria-label="${t.stars} étoiles sur 5">${"★".repeat(t.stars)}</div>
          <p class="carousel-quote">« ${t.quote} »</p>
          <p class="carousel-author">${t.name}<span>${t.area}</span></p>
        </li>`).join("");

      dotsWrap.innerHTML = testimonials.map((_, i) =>
        `<button class="carousel-dot${i === 0 ? " is-active" : ""}" data-slide="${i}" aria-label="Témoignage ${i + 1}"></button>`
      ).join("");

      $$(".carousel-dot", dotsWrap).forEach(dot =>
        dot.addEventListener("click", () => goToSlide(Number(dot.dataset.slide)))
      );
    }

    function goToSlide(i) {
      if (!track) return;
      currentSlide = (i + testimonials.length) % testimonials.length;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      $$(".carousel-dot", dotsWrap).forEach((d, idx) =>
        d.classList.toggle("is-active", idx === currentSlide)
      );
    }

    function startCarousel() {
      if (prefersReducedMotion) return;
      stopCarousel();
      carouselTimer = setInterval(() => goToSlide(currentSlide + 1), 6000);
    }
    function stopCarousel() {
      if (carouselTimer) clearInterval(carouselTimer);
      carouselTimer = null;
    }

    const prevBtn = $("#carousel-prev");
    const nextBtn = $("#carousel-next");
    if (prevBtn) prevBtn.addEventListener("click", () => { goToSlide(currentSlide - 1); startCarousel(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { goToSlide(currentSlide + 1); startCarousel(); });

    const carouselEl = $(".carousel");
    if (carouselEl) {
      carouselEl.addEventListener("mouseenter", stopCarousel);
      carouselEl.addEventListener("mouseleave", startCarousel);
    }

    /* --- ACCORDÉON FAQ --- */
    const accordionItems = $$(".accordion-item");
    console.log("[La Maison des Chiens] accordéon:", accordionItems.length, "items");
    accordionItems.forEach(item => {
      const btn = $(".accordion-btn", item);
      const panel = $(".accordion-panel", item);
      if (!btn || !panel) return;
      btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        accordionItems.forEach(other => {
          const ob = $(".accordion-btn", other);
          const op = $(".accordion-panel", other);
          if (ob) ob.setAttribute("aria-expanded", "false");
          if (op) op.style.maxHeight = "";
        });
        if (!isOpen) {
          btn.setAttribute("aria-expanded", "true");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });

    /* --- FORMULAIRE --- */
    const form = $("#contact-form");
    const successMsg = $("#form-success");
    if (form) {
      const rules = {
        name: v => v.trim().length >= 2,
        email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
        phone: v => v.replace(/\D/g, "").length >= 8,
        message: v => v.trim().length >= 10
      };

      function validateField(name) {
        const input = form.elements[name];
        const field = input.closest(".field");
        const error = document.getElementById(name + "-error");
        const ok = rules[name](input.value);
        field.classList.toggle("has-error", !ok);
        if (error) error.hidden = ok;
        input.setAttribute("aria-invalid", String(!ok));
        return ok;
      }

      ["name", "email", "phone", "message"].forEach(name => {
        const input = form.elements[name];
        if (!input) return;
        input.addEventListener("blur", () => validateField(name));
        input.addEventListener("input", () => {
          if (input.closest(".field").classList.contains("has-error")) validateField(name);
        });
      });

      form.addEventListener("submit", e => {
        e.preventDefault();
        const valid = ["name", "email", "phone", "message"].map(validateField).every(Boolean);
        if (!valid) {
          const firstError = $(".field.has-error input, .field.has-error textarea", form);
          if (firstError) firstError.focus();
          return;
        }
        if (successMsg) successMsg.hidden = false;
        form.reset();
        setTimeout(() => { if (successMsg) successMsg.hidden = true; }, 6000);
      });
    }

    /* --- RÉVÉLATION AU SCROLL --- */
    const revealEls = $$(".reveal");
    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      revealEls.forEach(el => el.classList.add("will-animate"));
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(el => io.observe(el));
      setTimeout(() => revealEls.forEach(el => el.classList.add("is-visible")), 2500);
    } else {
      revealEls.forEach(el => el.classList.add("is-visible"));
    }

    /* --- RETOUR EN HAUT --- */
    const backBtn = $("#back-to-top");
    if (backBtn) {
      window.addEventListener("scroll", () => {
        backBtn.hidden = window.scrollY < 500;
      }, { passive: true });
      backBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      });
    }

    /* --- LIEN NAV ACTIF --- */
    const sections = $$("main section[id]");
    const navLinks = $$(".nav-link");
    if ("IntersectionObserver" in window && sections.length) {
      const navIO = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLinks.forEach(link => {
              link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
            });
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(s => navIO.observe(s));
    }

    /* --- LANCEMENT --- */
    applyFilters();
    goToSlide(0);
    startCarousel();
    console.log("[La Maison des Chiens] initialisation terminée ✓");

  } catch (err) {
    console.error("[La Maison des Chiens] Erreur d'initialisation :", err);
  }
})();