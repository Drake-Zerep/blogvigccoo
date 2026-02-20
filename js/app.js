// =========================
// SLIDER DE NOTICIAS (3 primeras) CON MOVIMIENTO AUTOMÁTICO
// =========================
fetch("/blogvigccoo/data/noticias.json")
  .then(res => res.json())
  .then(noticias => {
    const slider = document.getElementById("slider");

    // Ordenar por fecha
    noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    // Tomar 3 noticias para el slider
    const slides = noticias.slice(0, 3);

    slider.innerHTML = `
      <div class="slider-container" id="sliderContainer">
        ${slides.map(noticia => `
          <div class="slide">
            <img src="${noticia.imagen}" alt="${noticia.titulo}">
            <h3>${noticia.titulo}</h3>
            <small>${noticia.fecha} — ${noticia.categoria.toUpperCase()}</small>
          </div>
        `).join("")}
      </div>
    `;

    // Movimiento automático
    const container = document.getElementById("sliderContainer");
    let index = 0;

    setInterval(() => {
      index = (index + 1) % slides.length;
      container.style.transform = `translateX(-${index * 300}px)`;
    }, 3500); // Cambia cada 3.5 segundos
  })
  .catch(err => console.error("Error cargando slider:", err));



// =========================
// BLOQUE DESTACADA
// =========================
fetch("/blogvigccoo/data/noticias.json")
  .then(res => res.json())
  .then(noticias => {
    const destacada = noticias.find(n => n.destacada === true);
    const contenedor = document.getElementById("destacada");

    if (destacada) {
      contenedor.innerHTML = `
        <div class="destacada-contenido">
          <img src="${destacada.imagen}" class="destacada-img">
          <div class="destacada-texto">
            <h2>${destacada.titulo}</h2>
            <small>${destacada.fecha} — ${destacada.categoria.toUpperCase()}</small>
            <p>${destacada.contenido}</p>
            <a href="noticia.html?slug=${destacada.slug}" class="btn-leer">Leer más</a>
          </div>
        </div>
      `;
    }
  })
  .catch(err => console.error("Error cargando destacada:", err));

// =========================
// COMUNICADOS RECIENTES (3 últimos)
// =========================
fetch("/blogvigccoo/data/noticias.json")
  .then(res => res.json())
  .then(noticias => {
    const contenedor = document.getElementById("comunicados");

    // Filtrar solo comunicados
    const comunicados = noticias.filter(n => n.categoria === "comunicados");

    // Ordenar por fecha
    comunicados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    // Tomar solo 3
    const ultimos = comunicados.slice(0, 3);

    ultimos.forEach(com => {
      const item = document.createElement("div");
      item.className = "comunicado-item";

      item.innerHTML = `
        <img src="${com.imagen}" alt="${com.titulo}">
        <div class="comunicado-texto">
          <h3><a href="noticia.html?slug=${com.slug}">${com.titulo}</a></h3>
          <small>${com.fecha} — ${com.categoria.toUpperCase()}</small>
          <p>${com.contenido}</p>
        </div>
      `;

      contenedor.appendChild(item);
    });
  })
  .catch(err => console.error("Error cargando comunicados:", err));

// =========================
// ELECCIONES SINDICALES 2026
// =========================
fetch("/blogvigccoo/data/noticias.json")
  .then(res => res.json())
  .then(noticias => {
    const contenedor = document.getElementById("elecciones");

    // Filtrar solo elecciones
    const elecciones = noticias.filter(n => n.categoria === "elecciones");

    if (elecciones.length === 0) return;

    // Tomar la más reciente
    const elec = elecciones.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))[0];

    contenedor.innerHTML = `
      <div class="eleccion-item">
        <img src="${elec.imagen}" alt="${elec.titulo}">
        <div class="eleccion-texto">
          <h3>${elec.titulo}</h3>
          <small>${elec.fecha} — ${elec.categoria.toUpperCase()}</small>
          <p>${elec.contenido}</p>
          <a href="noticia.html?slug=${elec.slug}" class="btn-elecciones">Ver más</a>
        </div>
      </div>
    `;
  })
  .catch(err => console.error("Error cargando elecciones:", err));


// =========================
// ÚLTIMAS 3 NOTICIAS
// =========================
fetch("/blogvigccoo/data/noticias.json")
  .then(res => res.json())
  .then(noticias => {
    const contenedor = document.getElementById("noticias");

    // Ordenar por fecha
    noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    // Tomar solo 3
    const ultimas = noticias.slice(0, 3);

    ultimas.forEach(noticia => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${noticia.imagen}" class="card-img">
        <h3><a href="noticia.html?slug=${noticia.slug}">${noticia.titulo}</a></h3>
        <small>${noticia.fecha} — ${noticia.categoria.toUpperCase()}</small>
        <p>${noticia.contenido}</p>
      `;

      contenedor.appendChild(card);
    });
  })
  .catch(err => console.error("Error cargando noticias:", err));
