// Cargar noticia destacada
fetch("data/noticias.json")
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
  });

fetch("data/noticias.json")
  .then(res => res.json())
  .then(noticias => {
    const contenedor = document.getElementById("noticias");

    // Ordenar por fecha (más reciente primero)
    noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    // Tomar solo las 3 primeras
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
