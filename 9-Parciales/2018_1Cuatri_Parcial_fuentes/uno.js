
function mostrar()
{

    var alto;
    var ancho;
    var perimetro;

    alto = parseFloat(prompt("Ingrese el alto del rectangulo: "));
    ancho = parseFloat(prompt("Ingrese el ancho del rectangulo: "));

    perimetro = (alto + ancho) * 2;

    alert("El perimetro del rectangulo es: " + perimetro);
}
