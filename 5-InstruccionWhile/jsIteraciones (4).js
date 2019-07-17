function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while(numero >= 10 || numero < 0){

		alert("Ingreso un numero invalido, intente nuevamente...")

		numero = prompt("ingrese un número entre 0 y 9.");

	}

	document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN