<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de Compra</title>
    <link rel="stylesheet" href="../Css/confirmacion-compra.css?v1234567">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="shortcut icon" href="../img/logo-tienda.png" type="image/x-icon">
</head>
<body>
    
    <header>
        <div class="menu__contenedor">
            <nav class="menu__contenedor-enlaces">
                <ul class="menu__enlaces-links">
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="gorras.html">Gorras</a></li>
                    <li><a href="playeras.html">Playeras</a></li>
                    <li><a href="pantalones.html">Pantalones</a></li>
                    <li><a href="outfits.html">Outfits</a></li>
                    <!-- <div class="menu__boton-buscar">
                        <input type="text" placeholder="Buscar">
                        <div class="btn">
                            <button><i class="fas fa-search icon"></i></button>
                        </div>
                    </div>    -->
                </ul>
            </nav>   
            <div class="menu__icono">
                <a class="menu__contenedor-logo" href="">
                    <h1 class="menu__logo-titulo">Tienda de Ropa</h1>
                    <img  class="menu__logo-negocio" src="../img/logo-tienda.png" alt="logo-negocio">
                </a>
            </div>
        </div>
    </header>

    <section class="Compra__info">
        <h2 class="Compra__info-titulo">Tienda de Ropa</h2>
        <p class="Compra__info-descripcion">Estas seguro de que deseas comprar?</p>
    </section>

    <?php 
        // $productos = $_GET['productos'] ?? array();
        // $precioNormal = $_GET['precio_normal'] ?? '';
        // $precioDescuento = $_GET['precio_descuento'] ?? '';
    ?>

    <section class="Formulario__compra">
        <div class="Formulario__compra-contenedor">
            <form class="Formulario__compra-form" action="../php/confirmacion-compra-BE.php" method="POST" autocomplete="off" id="formulario-de-compra">
                <label for="cliente">Nombre del Cliente</label>
                <input type="text" name="cliente" placeholder="Nombre" required>
                <label for="apellido">Apellido del Cliente</label>
                <input type="text" name="apellido" placeholder="Apellido" required>
                <label for="direccion">Dirección</label>
                <input type="text" name="direccion" placeholder="Dirección" required>
                <label for="codigo_postal">Código Postal</label>
                <input type="text" name="codigo_postal" placeholder="Código Postal" required>
                <label for="metodo_pago">Método de Pago</label>
                <input type="text" name="metodo_pago" placeholder="Efectivo o tarjeta" required>
                <label for="productos">Productos Seleccionados</label>
                <input type="text" name="productos" id="productos" value="" readonly>
                <label for="precio_normal">Precio Original sin Descuento</label>
                <input type="text" id="precio_normal_input" name="precio_normal" readonly>
                <label for="precio_descuento">Precio Final con Descuento</label>
                <input type="text" name="precio_descuento" id="precio_descuento" value="" readonly>
                <div class="Formulario__compra-form-chk">
                    <input type="checkbox">
                    <label>Usar cupon del 50% <b>(Valido durante el mes de Junio <br>
                    en compras mayores a $600)</b></label>
                </div>
                <button class="btnConfirmar" type="submit">Confirmar la compra</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="contenedor-footer">
            <div class="redes-sociales">
                <h2>Siguenos en nuestras redes sociales</h2>
                <a class="fab fa-facebook-f" href="#"></a>
                <a class="fab fa-instagram" href="#"></a>
                <a class="fab fa-twitter" href="#"></a>
                <a class="fab fa-tiktok" href=""></a>
            </div>
            <div class="enlaces-importantes">
                <h2>Enlaces importantes</h2>
                <a href="#">Politica de Privacidad</a>
                <a href="#">Terminos y Condiciones</a>
                <a href="#">Aviso de no discriminación</a>
            </div>
            <div class="contacto">
                <h2>Contacto</h2>
                <p>Telefono: 8178363622</p>
                <p>Correo: Tienda_ropa@gmail.com</p>
                <p>Ubicación: </p>
            </div>
        </div>
        <div class="footer-final">
            <span></span>
            <h4 class="titulo-final">&copy; Tienda de Ropa | Todos los derechos reservados</h4>
        </div>
    </footer>

    <script src="https://kit.fontawesome.com/3ec83c960a.js" crossorigin="anonymous"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <!-- <script src="../js/carrito.js"></script> -->

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const formProductsInput = document.querySelector('input[name="productos"]');
            const formNormalPriceInput = document.querySelector('input[name="precio_normal"]');
            const formDiscountPriceInput = document.querySelector('input[name="precio_descuento"]');

            // Obtener los valores de los parámetros de la URL
            const urlParams = new URLSearchParams(window.location.search);
            const productos = urlParams.get('productos');
            const precioNormal = urlParams.get('precio_normal');
            const precioDescuento = urlParams.get('precio_descuento');

            // Asignar los valores a los campos del formulario
            formProductsInput.value = productos;
            formNormalPriceInput.value = precioNormal;
            formDiscountPriceInput.value = precioDescuento;
        });
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const precioDescuentoInput = document.getElementById('precio_descuento');
            const cuponCheckbox = document.querySelector('.Formulario__compra-form-chk input[type="checkbox"]');

            const precioDescuento = parseFloat(precioDescuentoInput.value);

            if (precioDescuento > 650) {
            cuponCheckbox.disabled = false;
            } else {
            cuponCheckbox.disabled = true;
            }

            cuponCheckbox.addEventListener('change', function() {
            if (cuponCheckbox.checked && precioDescuento > 650) {
                const descuento = precioDescuento * 0.5;
                const precioConDescuento = precioDescuento - descuento;
                precioDescuentoInput.value = precioConDescuento.toFixed(2);
            } else {
                precioDescuentoInput.value = precioDescuento.toFixed(2);
            }
            });
        });
    </script>
    <script>
        document.getElementById("formulario-de-compra").addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

            // Aquí puedes agregar tu lógica de validación del formulario antes de mostrar el SweetAlert

            if (typeof errorMessage !== 'undefined') {
                Swal.fire({
                    title: "Error",
                    text: errorMessage,
                    confirmButtonText: "OK",
                    icon: "error"
                });
            } else {
                Swal.fire({
                    title: "¡Muchas Gracias por tu compra!",
                    text: "Tu producto llegará a tu domicilio de 2 a 3 días.",
                    confirmButtonText: 'OK',
                    icon: "success"
                }).then(function() {
                    // Aquí puedes redirigir al usuario a otra página o realizar otras acciones después de que se muestre el SweetAlert
                    document.getElementById("formulario-de-compra").submit();
                    // window.location.href = "/ruta-a-otra-pagina.html"; // Redirige al usuario a otra página después de mostrar el SweetAlert
                });
            }
        });
    </script>

</body>
</html>