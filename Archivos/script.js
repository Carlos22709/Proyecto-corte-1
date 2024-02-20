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

// Agregamos un event listener a todos los botones "Añadir al carrito"
document.querySelectorAll('.añadir-carrito').forEach(item => {
  item.addEventListener('click', agregarAlCarrito);
});

// Función para agregar un elemento al carrito
function agregarAlCarrito(evento) {
  const nombreElemento = evento.target.parentElement.querySelector('.mostrarDescripcionItem').textContent.trim();
  const listaCarrito = document.getElementById('listaCarrito');
  
  // Crear un nuevo elemento de lista y agregar el nombre del elemento
  const nuevoElementoLista = document.createElement('li');
  nuevoElementoLista.textContent = nombreElemento;
  
  // Agregar el nuevo elemento a la lista del carrito
  listaCarrito.appendChild(nuevoElementoLista);
}

// Event listener para limpiar el carrito
document.getElementById('limpiarCarrito').addEventListener('click', limpiarCarrito);
  
// Función para limpiar el carrito
function limpiarCarrito() {
  const listaCarrito = document.getElementById('listaCarrito');
  listaCarrito.innerHTML = ''; // Limpiar la lista de elementos del carrito
}

