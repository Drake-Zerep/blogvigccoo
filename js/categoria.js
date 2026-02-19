const params = new URLSearchParams(window.location.search);
const categoria = params.get("cat");

document.getElementById("titulo-categoria").textContent =
  categoria.charAt(0).toUpperCase() + categoria.slice(1);

fetch("data/noticias.json")
  .then(res => res.json())
  .then(noticias => {
    const filtradas = noticias.filter(n => n.categoria === categoria);
    const contenedor = document.getElementById("lista-categoria");

    filtradas.forEach(noticia => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3><a href="noticia.html?slug=${noticia.slug}">${noticia.titulo}</a></h3>
        <small>${noticia.fecha}</small>
        <p>${noticia.contenido}</p>
      `;

      contenedor.appendChild(card);
    });
  });
