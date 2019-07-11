function mostrar()
{

var mes = document.getElementById('mes').value;


    switch(mes){
        case "Febrero": alert("Este mes no tiene mas de 29 dias");
        break;
        case "Enero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre": alert("Este mes tiene 30 o más días");
        break;   
    }

    //Otra forma de hacerlo

    /*switch(mes){
        case "Febrero": alert("Este mes no tiene mas de 29 dias");
        break;
        default: alert("Este mes tiene 30 o más días");
	*/


}//FIN DE LA FUNCIÓN