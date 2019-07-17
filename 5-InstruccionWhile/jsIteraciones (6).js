function mostrar()
{

	var contador=0;
	var acumulador=0;
	var suma = 0;

	while(contador < 5 ){
		acumulador = parseInt(prompt("Ingrese un numero: "));
		acumulador = suma + acumulador;

		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN