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
// Agregar event listener al contenedor de los botones "Añadir al carrito"
document.querySelector('.menu').addEventListener('click', function(evento) {
  if (evento.target && evento.target.matches('.añadir-carrito')) {
      agregarAlCarrito(evento);
  }
});

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
