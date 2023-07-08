//   JS PARA ABRIR CADA MODAL POR SEPARADO
// Seleccionar todos los botones de abrir modal
const abrirModalBtns = document.querySelectorAll(".btn-abrir-modal");

// Recorrer todos los botones de abrir modal y asignarles un event listener
abrirModalBtns.forEach((abrirModalBtn) => {
    abrirModalBtn.addEventListener("click", () => {
        const modalId = abrirModalBtn.getAttribute("id").replace("btn-abrir-modal-", ""); // Obtener el ID del botón
        const modal = document.querySelector(`#modalDialog-${modalId}`); // Encontrar el modal correspondiente al ID

        modal.classList.add("active"); // Agregar la clase "active" al modal para mostrarlo
    });
});

// Seleccionar todos los botones de cerrar modal
const cerrarModalBtns = document.querySelectorAll(".btn-cerrar-modal");

// Recorrer todos los botones de cerrar modal y asignarles un event listener
cerrarModalBtns.forEach((cerrarModalBtn) => {
    cerrarModalBtn.addEventListener("click", () => {
        const modal = cerrarModalBtn.closest(".modal"); // Encontrar el modal más cercano al botón de cerrar modal

        modal.classList.remove("active"); // Remover la clase "active" del modal para ocultarlo
    });
});



function actualizarCarrito(modalId) {
    // Obtener referencia al contador y al carrito específicos del modal
    var contadorElement = document.getElementById(`contador-${modalId}`);
    var carritoElement = document.getElementById(`carrito-${modalId}`);
    var precioElement = document.querySelector(`#modalDialog-${modalId} .precio`); // Obtener el elemento de precio específico del modal

    // Obtener el valor del contador y convertirlo a un número entero
    var contador = parseInt(contadorElement.textContent);

    // Obtener el valor del precio, eliminar el símbolo de dólar ($) y convertirlo a un número de punto flotante
    var precio = parseFloat(precioElement.textContent.substring(1));

    // Calcular el resultado de la multiplicación del contador por el precio
    var resultado = contador * precio;

    // Mostrar el resultado sin decimales en el elemento de carrito correspondiente
    carritoElement.textContent = '$' + resultado;
}
// Evento de clic en el botón de sumar
document.querySelectorAll('.sumar').forEach((sumarBtn) => {
    sumarBtn.addEventListener('click', function () {
        var modalId = sumarBtn.closest('.modal').id.replace('modalDialog-', ''); // Obtener el ID del modal

        // Obtener referencia al contador específico del modal
        var contadorElement = document.getElementById(`contador-${modalId}`);

        // Incrementar el contador en 1 y actualizar el carrito
        contadorElement.textContent = parseInt(contadorElement.textContent) + 1;
        actualizarCarrito(modalId);
    });
});

// Evento de clic en el botón de restar
document.querySelectorAll('.restar').forEach((restarBtn) => {
    restarBtn.addEventListener('click', function () {
        var modalId = restarBtn.closest('.modal').id.replace('modalDialog-', ''); // Obtener el ID del modal

        // Obtener referencia al contador específico del modal
        var contadorElement = document.getElementById(`contador-${modalId}`);

        // Verificar que el contador sea mayor a 0 antes de restar y actualizar el carrito
        if (parseInt(contadorElement.textContent) > 0) {
            contadorElement.textContent = parseInt(contadorElement.textContent) - 1;
            actualizarCarrito(modalId);
        }
    });
});





// Obtener todos los botones de zoom
var btnZooms = document.querySelectorAll('.btn-zoom-modal');

// Recorrer todos los botones de zoom y asignarles el evento de clic
btnZooms.forEach(function(btnZoom) {
  var myModal = document.createElement('div');
  var myModalContent = document.createElement('div');
  var myModalClose = document.createElement('span');
  var body = document.querySelector('body');

  btnZoom.addEventListener('click', function () {
    var productoImg = btnZoom.closest('.modal').querySelector('.producto');
    myModal.classList.add('my-modal');
    myModalContent.classList.add('my-modal-content');
    myModalClose.classList.add('my-modal-close');
    myModalClose.innerHTML = '&#x2715;';

    myModalClose.addEventListener('click', function () {
      myModal.style.display = 'none';
    });

    var clonedImage = productoImg.cloneNode(true);
    myModalContent.innerHTML = '';
    myModalContent.appendChild(clonedImage);
    myModalContent.appendChild(myModalClose);
    myModal.appendChild(myModalContent);
    body.appendChild(myModal);
    myModal.style.display = 'block';
  });

  body.addEventListener('click', function (event) {
    if (event.target === myModal) {
      myModal.style.display = 'none';
    }
  });
});







// Obtener todos los botones de clase "heart" en las cards
var btnHearts = document.querySelectorAll('.heart');
var modalBtnHearts = document.querySelectorAll('.btn-heart-modal');

// Función para cambiar el estado del botón y mostrar la imagen correspondiente
function toggleButton(button) {
  var inactivoImg = button.querySelector('.inactivo');
  var activoImg = button.querySelector('.activo');

  button.classList.toggle('active');
  inactivoImg.style.display = button.classList.contains('active') ? 'none' : 'block';
  activoImg.style.display = button.classList.contains('active') ? 'block' : 'none';
}

// Asignar el evento de clic a cada botón individualmente
btnHearts.forEach(function (btnHeart) {
  btnHeart.addEventListener('click', function () {
    toggleButton(btnHeart);
    
    var modalTarget = btnHeart.dataset.modalTarget;
    
    // Obtener el botón de clase "heart" dentro del modal correspondiente
    var modalBtnHeart = document.querySelector(`#${modalTarget} .btn-heart-modal`);
    
    // Activar o desactivar el botón del modal correspondiente
    if (modalBtnHeart) {
      toggleButton(modalBtnHeart);
    }
  });
});

// Asignar el evento de clic a cada botón del modal individualmente
modalBtnHearts.forEach(function (modalBtnHeart) {
  modalBtnHeart.addEventListener('click', function () {
    toggleButton(modalBtnHeart);
    
    var modalId = modalBtnHeart.closest('.modal').id;
    
    // Obtener el botón de clase "heart" en la card correspondiente al modal
    var cardBtnHeart = document.querySelector(`.heart[data-modal-target="${modalId}"]`);
    
    // Activar o desactivar el botón de la card correspondiente
    if (cardBtnHeart) {
      toggleButton(cardBtnHeart);
    }
  });
});