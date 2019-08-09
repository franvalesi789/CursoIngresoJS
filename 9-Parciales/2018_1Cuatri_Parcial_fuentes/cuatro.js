function mostrar()
{

    var numUno;
    var numDos;

    numUno = (prompt("Ingrese el primer numero: "));
    numDos = (prompt("Ingrese el segundo numero: "));

    if(numUno == numDos){
        alert(numUno + numDos)
    }else if(numUno > numDos){
        numUno = parseInt(numUno);
        numDos = parseInt(numDos);
        alert(numUno - numDos);
    }else if(numUno < numDos){
        numUno = parseInt(numUno);
        numDos = parseInt(numDos);
        alert(numUno + numDos);
    }
}
