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

document.querySelectorAll('.flecha').forEach(item => {
  item.addEventListener('click', event => {
    let descripcion = event.target.parentElement.nextElementSibling; // Selecciona el elemento de la descripción
    descripcion.style.display = descripcion.style.display === 'none' ? 'block' : 'none'; // Alterna la visibilidad
    item.classList.toggle('rotada'); // Alterna la clase para rotar la flecha
  });
});
