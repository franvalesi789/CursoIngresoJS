function mostrar()
{

	var contador=0;
	var acumulador=0;
	var seguir = 's';
	var numero;

	while(seguir == 's'){
		numero = parseInt(prompt("Ingrese un numero: "));
			while(isNaN(numero)){
				alert("eso no es un numero chinwenwencha");
				numero = parseInt(prompt("ingrese un numero: "));

			}
			acumulador = acumulador + numero;
			contador ++;
			seguir = prompt("Quiere ingresar otro numero?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN