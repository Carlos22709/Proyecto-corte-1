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
// Menú de ejemplo con identificadores únicos para cada elemento
const menu = [
  { id: 1, nombre: "Aros de Cebolla", precio: 5 },
  { id: 2, nombre: "Palitos de Mozzarella", precio: 6 },
  { id: 3, nombre: "Ensalada Cesar", precio: 8 },
];

// Función para agregar un elemento al carrito
function agregarAlCarrito(evento) {
  const nombreElemento = evento.target.parentElement.querySelector('.mostrarDescripcionItem').textContent.trim();

  // Obtener el arreglo actual de elementos en el carrito (si existe)
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Agregar el nuevo elemento al arreglo del carrito
  carrito.push(nombreElemento);

  // Guardar el arreglo actualizado en localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Event listener para limpiar el carrito
document.getElementById('limpiarCarrito').addEventListener('click', limpiarCarrito);
  
// Función para limpiar el carrito
function limpiarCarrito() {
  const listaCarrito = document.getElementById('listaCarrito');
  listaCarrito.innerHTML = ''; // Limpiar la lista de elementos del carrito
}


/*
    --------------
    Carrito Final
    --------------
*/
