/*
    -------------------
    Landing Page Inicio
    -------------------
*/
/*function readMorePresentacion() {
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
}*/

function readMorePresentacion() {
  var dots = document.getElementById("dotsReadMorePresentacion");
  var moreText = document.getElementById("moreTextPresentacion");
  var btnText = document.getElementById("btnReadMorePresentacion");
  var hamburguesaImg = document.getElementById("hamburguesaDescripcion");
  var malteadaImg = document.getElementById("malteadaDescripcion");
  var descripcion = document.getElementsByClassName("divPresentacion").clientHeight;

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";

      hamburguesaImg.style.marginLeft = "5px"; // Restablecer margen izquierdo
        hamburguesaImg.setAttribute("style", "aspect-ratio: 150 / 100; min-height: 150px; min-width: 225px; max-width: 225px; margin-top: 5px; max-height: 150px;");
        malteadaImg.setAttribute("style", "aspect-ratio: 150 / 100; min-height: 150px; min-width: 225px; max-width: 225px; margin-top: 5px; max-height: 150px;");




  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      hamburguesaImg.style.aspectRatio = 225 / 350; // Alter
      hamburguesaImg.style.minHeight = "350px"; // Altura automática para mostrar la imagen completa
      hamburguesaImg.style.minWidth = "225px"; // Ancho automático para mantener el aspect ratio
      hamburguesaImg.style.maxWidth = "225px"; // Ancho automático para mantener el aspect ratio

      malteadaImg.style.aspectRatio = 225 / 350; // Alter
      malteadaImg.style.minHeight = "350px"; // Ancho gener
      malteadaImg.style.minWidth = "225px"; // Ancho automático para mantener el aspect ratio
      malteadaImg.style.maxWidth = "225px"; // Ancho automático para mantener el aspect ratio
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
document.querySelector('#entradas .mostrarCategoria').addEventListener('click', function() {
  toggleCategoria('listaItemsEntrada');
});

document.querySelector('#platosPrincipales .mostrarCategoria').addEventListener('click', function() {
  toggleCategoria('listaItemsPlatosPrincipales');
});

document.querySelector('#bebidas .mostrarCategoria').addEventListener('click', function() {
  toggleCategoria('listaItemsBebidas');
});

document.querySelector('#postres .mostrarCategoria').addEventListener('click', function() {
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
  { id: 1, nombre: "Hamburguesa Clásica", precio: 23.000 },
  { id: 2, nombre: "Palitos de Mozzarella", precio: 10.000 },
  { id: 3, nombre: "Ensalada Cesar", precio: 12.000 },
];

// Función para agregar elementos del menú dinámicamente
function cargarMenu() {
  const menuList = document.getElementById('menu_list');

  menu.forEach(item => {
      const li = document.createElement('li');
      const h3 = document.createElement('h3');
      const button = document.createElement('button');

      h3.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
      button.textContent = "Añadir al carrito";
      button.setAttribute('onclick', `agregarAlCarrito('${item.nombre}', ${item.precio})`);

      li.appendChild(h3);
      li.appendChild(button);
      menuList.appendChild(li);
  });
}

// Event listener para cargar el menú cuando la página se cargue
window.addEventListener('load', cargarMenu);

/*
    --------------
    Carrito Final
    --------------
*/