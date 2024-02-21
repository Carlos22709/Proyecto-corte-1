/*
    -------------------
    Landing Page Inicio
    -------------------
*/
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
      categoria.style.display = 'initial';
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

/*Precios*/

// Selecciona todos los elementos que tienen la clase 'precio'
var elementosPrecio = document.querySelectorAll('.precio');

// Itera sobre los elementos y aplica la lógica de manejo de precios
elementosPrecio.forEach(function(elemento) {
    // Obtiene el precio bruto del elemento
    var precioBruto = parseFloat(elemento.textContent);
    // Formatea y actualiza el precio mostrado
    elemento.textContent = precioBruto.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
});


/*
    ------------------
    Landing Page Final
    ------------------
*/




/*
    --------------
    Carrito Inicio
    --------------
*/

const menu = [
  { id: 1, nombre: "Aros de Cebolla", precio: 5 },
  { id: 2, nombre: "Palitos de Mozzarella", precio: 6 },
  { id: 3, nombre: "Ensalada Cesar", precio: 8 },
];

// Función para agregar un elemento al carrito
function agregarAlCarrito(nombreElemento) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(nombreElemento);
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar los elementos del carrito desde localStorage
function cargarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const carritoList = document.getElementById('carrito_list');
  carritoList.innerHTML = '';

  carrito.forEach(item => {
      const li = document.createElement('li');
      li.innerText = item;
      carritoList.appendChild(li);
  });
}

// Event listener para cargar el carrito cuando la página se cargue
window.addEventListener('load', () => {
  cargarCarrito();
});

// Event listener para los botones "Añadir al carrito"
document.querySelectorAll('.añadir-carrito').forEach(item => {
  item.addEventListener('click', () => {
      const nombreElemento = item.parentElement.querySelector('.mostrarDescripcionItem').textContent.trim();
      agregarAlCarrito(nombreElemento);
  });
});
/*
    --------------
    Carrito Final
    --------------
*/