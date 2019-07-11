function mostrar()
{

var mes = document.getElementById('mes').value;

    switch(mes){
        case "Febrero": alert("Este mes tiene 28 dias");
        break;

        case "Abril": 30
        case "Junio": 30
        case "Septiembre":30
        case "Noviembre": alert("Este mes tiene 30 dias");
        break;

        case "Enero": 31
        case "Marzo":31
        case "Mayo":31
        case "Julio":31
        case "Agosto":31
        case "Octubre":31
        case "Diciembre": alert("Este mes tiene 31 dias");
        break;
    }

}//FIN DE LA FUNCIÓN