function mostrar()
{
    var letra;
    var numero;
    var seguir;
    var contadorPares = 0;
    var contadorImpares = 0;
    var numPositivos = 0;
    var numNegativos = 0;
    var contadorCeros = 0;
    var contadorPositivos = 0;
    var sumaNegativos;
    var maximo;
    var minimo;
    var letraMaximo;
    var letraminimo;
    var flag = 0;
    var promedioPositivos = 0;


    do {
        
        letra = prompt("Ingrese una letra: ").toLowerCase();

        numero = parseInt(prompt("Ingrese un numero: "));

        while(!(numero >= -100 && numero <= 100)){
            numero = parseInt(prompt("Error!Reingrese un numero: "));
        }

        if(numero % 2 == 0){
            contadorPares++;
        }else{
            contadorImpares++;
        }

        if(numero > 0){
            numPositivos += numero;
            contadorPositivos++;
        }else if(numero < 0){
            numNegativos += numero;
            
        }else{
            contadorCeros++;
        }

        if(numero < minimo || flag == 0){
            minimo = numero;
            letraminimo = letra;
        }

        if(numero > maximo || flag == 0){
            maximo = numero;
            letraMaximo = letra;
            flag = 1;
        }

       seguir = prompt("¿Quiere seguir ingresando datos?");
    } while (seguir == 's');

    if(contadorPositivos != 0){
        promedioPositivos = numPositivos / contadorPositivos;
    }

    document.write("Cantidad de numero pares: " + contadorPares + "<br>");
    document.write("Cantidad de numeros impares: " + contadorImpares + "<br>");
    document.write("Cantidad de ceros: " + contadorCeros + "<br>");
    document.write("Promedio de todos los numeros positivos: " + promedioPositivos + "<br>");
    document.write("Suma de todos los numeros negativos: " + numNegativos + "<br>");
    document.write("Numero maximo: " + maximo + " y letra maxima: " + letraMaximo + "<br>");
    document.write("Numero minimo: " + minimo + " y letra minima: " + letraminimo + "<br>");

}
