function readMorePresentacion() {
    var dots = document.getElementById("dotsReadMorePresentacion");
    var moreText = document.getElementById("moreTextPresentacion");
    var btnText = document.getElementById("btnReadMorePresentacion");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}

document.querySelectorAll('.mostrarDescripcionItem').forEach(item => {
  item.addEventListener('click', event => {
    let descCarrito = event.target.parentElement.nextElementSibling; // Selecciona el elemento contenedor de la descripción y el botón
    descCarrito.classList.toggle('mostrar'); // Alterna la clase para mostrar/ocultar la descripción y el botón
  });
});

// Menú de ejemplo con identificadores únicos para cada elemento
const menu = [
  { id: 1, nombre: "Aros de Cebolla", precio: 5 },
  { id: 2, nombre: "Palitos de Mozzarella", precio: 6 },
  { id: 3, nombre: "Ensalada Cesar", precio: 8 },
];

// Función para agregar un elemento al carrito
function addToCart(itemId) {
  const item = menu.find(item => item.id === itemId);
  if (item) {
    carrito.push(item);
    actualizarCarrito();
  }
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
  const carritoElement = document.querySelector('.resumenPago .resumen');
  carritoElement.innerHTML = ''; // Limpiar el contenido anterior

  let total = 0;

  carrito.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.nombre} - $${item.precio}`;
    carritoElement.appendChild(itemElement);
    total += item.precio;
  });

  // Mostrar el total
  const totalElement = document.createElement('div');
  totalElement.textContent = `Total: $${total}`;
  carritoElement.appendChild(totalElement);
}

// Event listener para los botones "Añadir al carrito"
document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.añadir-carrito');
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const itemId = parseInt(boton.dataset.itemId);
      addToCart(itemId);
    });
  });
});

// Carrito de compras (inicialmente vacío)
const carrito = [];
