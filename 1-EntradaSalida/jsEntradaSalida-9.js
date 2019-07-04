/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var dinero;
    var nuevoSueldo;

    dinero = document.getElementById("sueldo").value;
    dinero = parseInt(dinero);

    nuevoSueldo = dinero + (dinero * 10 / 100);

    document.getElementById("resultado").value = nuevoSueldo

	
}
