Swal.fire({
    title: 'Bienvenido a Tienda de ropa!',
    html: '<p class="swal-custom-text">Tenemos un cupón para ti del <b>50%</b> de descuento en toda nuestra Tienda!</p><br><p class="swal-custom-text">Durante todo el mes de Junio!<p>',
    showCancelButton: true,
    backdrop: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false,
    confirmButtonText: 'Tomarlo',
    cancelButtonText: 'No Gracias',
    icon: 'success',
    customClass: {
        popup: 'swal-custom-popup',
        title: 'swal-custom-title',
        confirmButton: 'swal-custom-button',
        cancelButton: 'swal-custom-button'
    },
    buttonsStyling: false,
    confirmButtonClass: 'swal-custom-confirm-button',
    cancelButtonClass: 'swal-custom-cancel-button'
});