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



