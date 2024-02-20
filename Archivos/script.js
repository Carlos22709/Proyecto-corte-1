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



function ocultarCategoria(categoriaId) {
  var categoria = document.getElementById(categoriaId);
  // Ocultar la categoría al cargar la página
  categoria.style.display = 'none';
}

// Ocultar todos los elementos de las categorías al cargar la página
ocultarCategoria('listaItemsEntrada');
ocultarCategoria('listaItemsPlatosPrincipales');
ocultarCategoria('listaItemsBebidas');
ocultarCategoria('listaItemsPostres');

// Función para mostrar u ocultar los elementos de una categoría
function toggleCategoria(categoriaId) {
  var categoria = document.getElementById(categoriaId);
  // Verificar si la categoría está visible o no
  if (categoria.style.display === 'none') {
      // Si está oculta, mostrarla
      categoria.style.display = 'block';
  } else {
      // Si está visible, ocultarla
      categoria.style.display = 'none';
  }
}

// Agregar un evento de clic a cada botón de categoría
document.querySelector('.entradas .mostrarCategoria').addEventListener('click', function() {
  toggleCategoria('listaItemsEntrada');
});

document.querySelector('.platosPrincipales .mostrarCategoria').addEventListener('click', function() {
  toggleCategoria('listaItemsPlatosPrincipales');
});

document.querySelector('.bebidas .mostrarCategoria').addEventListener('click', function() {
  toggleCategoria('listaItemsBebidas');
});

document.querySelector('.postres .mostrarCategoria').addEventListener('click', function() {
  toggleCategoria('listaItemsPostres');
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
