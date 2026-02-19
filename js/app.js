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
  <h3><a href="noticia.html?slug=${noticia.slug}">${noticia.titulo}</a></h3>
  <small>${noticia.fecha} — ${noticia.categoria.toUpperCase()}</small>
  <p>${noticia.contenido}</p>
`;

      contenedor.appendChild(card);
    });
  })
  .catch(err => console.error("Error cargando noticias:", err));
