/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    perimetro = largo * 2  + ancho * 2;

    alambre = perimetro * 3;

    alert(alambre + "mts.");

}
function Circulo () 
{
    var radio;
    var perimetro;
    var alambre;

    radio = document.getElementById("Radio").value;

    perimetro = 2 * Math.PI * radio;

    alambre = perimetro * 3;

    alert(alambre.toFixed(2) + "mts.");
}
function Materiales () 
{
    var largo;
    var ancho;
    var superficie;
    var bolsasCemento;
    var bolsasCal;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    superficie = ancho * largo;

    bolsasCal = superficie * 3;

    bolsasCemento = superficie * 2;

    alert("Para el contrapiso de un terreno de " + superficie + " mts2 \n se necesitan " + bolsasCal + " bolsas de cal y " + bolsasCemento + " bolsas de cemento");
}