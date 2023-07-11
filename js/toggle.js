var toggle = document.getElementById('container');
var body = document.querySelector('body');
var icon = document.getElementById('icon');
var productTitles = document.getElementsByClassName('Producto__titulo');
var productDescriptions = document.getElementsByClassName('Producto__descripcion');
var ropaCards = document.getElementsByClassName('productos__ropa-cards');
var descuentoRopa = document.getElementsByClassName('descuento-span');
var ropaTitulos = document.getElementsByClassName('productos__ropa-titulo');
var ropaPrecios = document.getElementsByClassName('productos__ropa-precio');
var botonComprar = document.getElementsByClassName('btnComprar');

toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');

    for (var i = 0; i < productTitles.length; i++) {
        productTitles[i].classList.toggle('active');
    }

    for (var i = 0; i < productDescriptions.length; i++) {
        productDescriptions[i].classList.toggle('active');
    }

    for (var i = 0; i < descuentoRopa.length; i++) {
        descuentoRopa[i].classList.toggle('active');
    }

    for (var i = 0; i < ropaCards.length; i++) {
        ropaCards[i].classList.toggle('active');
    }

    for (var i = 0; i < ropaTitulos.length; i++) {
        ropaTitulos[i].classList.toggle('active');
    }

    for (var i = 0; i < ropaPrecios.length; i++) {
        ropaPrecios[i].classList.toggle('active');
    }

    for (var i = 0; i < botonComprar.length; i++) {
        botonComprar[i].classList.toggle('active');
    }

    if (toggle.classList.contains('active')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
};
