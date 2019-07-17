function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != "m" && sexo != "f"){

    alert("El dato ingresado es invalido.")
    sexo = prompt("ingrese f ó m .");
}

document.getElementById('Sexo').value= sexo;

}//FIN DE LA FUNCIÓN