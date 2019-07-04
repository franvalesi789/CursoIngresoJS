/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var dinero;
    var descuento;

    dinero = document.getElementById("importe").value;
    dinero = parseInt(dinero);

    descuento = dinero - (dinero * 25 / 100);

    document.getElementById("resultado").value = descuento;

}
