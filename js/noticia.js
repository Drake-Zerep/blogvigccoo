// Obtener el slug de la URL
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

fetch("/blogvigccoo/data/noticias.json")
  .then(res => res.json())
  .then(noticias => {
    const noticia = noticias.find(n => n.slug === slug);
    const contenedor = document.getElementById("contenido-noticia");

    if (!noticia) {
      contenedor.innerHTML = "<h2>Noticia no encontrada</h2>";
      return;
    }

    contenedor.innerHTML = `
  <div class="noticia-img-wrapper">
    <img src="${noticia.imagen}" class="noticia-img">
  </div>
  <h1>${noticia.titulo}</h1>
  <p>${noticia.fecha} — ${noticia.categoria.toUpperCase()}</p>
  <p>${noticia.contenido}</p>
  <a href="index.html" class="volver">← Volver</a>
`;


  })
  .catch(err => console.error("Error cargando noticia:", err));
