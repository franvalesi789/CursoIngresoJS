function mostrar()
{

var numero;
var contadorPares = 0;
var i;

numero = parseInt(prompt("Ingrese un numero: "));

for(i = 1; i <= numero; i++){
    if(i % 2 == 0){
        contadorPares++;
        document.write(i + "<br>");
    }
}

document.write("Cantidad de pares " + "= " + contadorPares);

}//FIN DE LA FUNCIÓN