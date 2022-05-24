var oprimir = document.querySelector(".BTN");
var seach = document.getElementById("buscador");
var space = document.getElementById("espacio");


var op = oprimir;
op = document.addEventListener("click",EscribirLetras);
var letra;


function EscribirLetras(ev)
{
    var contador = ev.srcElement.accessKey

    if( contador)
    {
        letra = contador;
    }
    if(space == contador)
    {
        letra = " ";
    }
    seach.value += letra;
}
