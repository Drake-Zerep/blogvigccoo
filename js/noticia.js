// Obtener el slug de la URL
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

fetch("data/noticias.json")
  .then(res => res.json())
  .then(noticias => {
    const noticia = noticias.find(n => n.slug === slug);
    const contenedor = document.getElementById("contenido-noticia");

    if (!noticia) {
      contenedor.innerHTML = "<h2>Noticia no encontrada</h2>";
      return;
    }

    contenedor.innerHTML = `
      <img src="${noticia.imagen}" class="noticia-img">
      <h1>${noticia.titulo}</h1>
      <small>${noticia.fecha} — ${noticia.categoria.toUpperCase()}</small>
      <p>${noticia.contenido}</p>
      <a href="index.html" class="volver">← Volver</a>
    `;
  })
  .catch(err => console.error("Error cargando noticia:", err));
