<?php

    //Incluye la conexión a la base de datos de la página
    include 'conexion_bd.php';

    //Declaración de las variables, a través de los inputs en la página confirmar-compra.php
    $fecha_compra = date("d/m/y");
    $cliente = $_POST['cliente'];
    $apellidos = $_POST['apellido'];
    $direccion = $_POST['direccion'];
    $codigo_postal = $_POST['codigo_postal'];
    $productos = $_POST['productos'] ?? array();
    $precioNormal = $_POST['precio_normal'] ?? '';
    $precioDescuento = $_POST['precio_descuento'] ?? '';

    $querysql = "INSERT INTO facturas (fecha_compra, Cliente, Apellidos, Direccion, Codigo_Postal, Productos, 
    PrecioNormal, PrecioDescuento) VALUES ('$fecha_compra','$cliente','$apellidos','$direccion','$codigo_postal',
    '$productos','$precioNormal','$precioDescuento')";

    $comprobar_conexion = mysqli_query($conexion, $querysql);

    if ($comprobar_conexion) {
        echo '<script> window.location = "/Tienda-Ropa/index.html"; </script>';
    } else {
        $error_message = "Ocurrió un problema al procesar la compra, intenta de nuevo.";
        echo '<script> 
                var errorMessage = "' . $error_message . '";
              </script>';
        echo '<script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>';
    }

?>