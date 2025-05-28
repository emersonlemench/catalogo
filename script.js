let productos = [];
let index = 0;

fetch("productos_carteleria.json")
  .then(res => res.json())
  .then(data => {
    productos = data;
    mostrarProducto(index);
  });

function mostrarProducto(i) {
  const contenedor = document.getElementById("product-view");
  const producto = productos[i];

  contenedor.innerHTML = `
    <div class="product-card active">
      <div class="carousel">
        <img src="${producto.imagen}" alt="${producto.titulo}" loading="lazy" />
      </div>
      <h2>${producto.titulo}</h2>
      <p><strong>Descripción:</strong> ${producto.descripcion}</p>
      <p><strong>Uso:</strong> ${producto.uso}</p>
    </div>
  `;
}


// Delegar el click en la imagen dentro del contenedor dinámico
document.getElementById("product-view").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const src = e.target.getAttribute("src");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = src;
    lightbox.style.display = "flex";
  }
});

// Cerrar lightbox al hacer click en la X
document.querySelector(".lightbox .close").addEventListener("click", () => {
  document.getElementById("lightbox").style.display = "none";
});

// Cerrar lightbox al hacer click fuera de la imagen
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = "none";
  }
});



document.getElementById("btn-inicio").addEventListener("click", () => {
  index = 0;
  mostrarProducto(index);
});

document.getElementById("btn-atras").addEventListener("click", () => {
  if (index > 0) {
    index--;
    mostrarProducto(index);
  }
});

document.getElementById("btn-siguiente").addEventListener("click", () => {
  if (index < productos.length - 1) {
    index++;
    mostrarProducto(index);
  }
});

document.getElementById("btn-final").addEventListener("click", () => {
  index = productos.length - 1;
  mostrarProducto(index);
});