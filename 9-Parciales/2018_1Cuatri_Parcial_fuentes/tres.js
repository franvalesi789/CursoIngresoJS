function mostrar()
{

    var precio;
    var porcentajeDescuento;
    var precioFinal;

    precio = parseFloat(prompt("Ingrese el precio: "));
    porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));

    precioFinal = precio * porcentajeDescuento / 100;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
