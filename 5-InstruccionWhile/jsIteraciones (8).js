function mostrar()
{
	var positivo=0;
	var negativo=1;
	var seguir = 's';
	var contadorNegativos = 0;
	var numero;

	while(seguir == 's'){
		numero = parseInt(prompt("Ingrese un numero: "));
		while(isNaN(numero)){
			alert("eso no es un numero chinwenwencha");
			numero = parseInt(prompt("ingrese un numero: "));
		}
		if (numero >= 0) {
			positivo = positivo + numero;

		} else {
			negativo = negativo * numero;
			contadorNegativos++;
		}
		seguir = prompt("Quiere ingresar otro numero?");
	}

document.getElementById('suma').value=positivo;
if (contadorNegativos == 0) {
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN