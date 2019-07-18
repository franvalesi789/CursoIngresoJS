function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var respuesta='s';

	do {
		numero = parseInt(prompt("Ingrese un numero: "));

		if(numero > maximo || contador == 0){
			maximo = numero;
		}
		if (numero < minimo || contador == 0) {
			minimo = numero;
			contador = 1;
		}	
		respuesta = prompt("Desea ingresar otro numero?");

	} while (respuesta == 's');

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;




}//FIN DE LA FUNCIÓN