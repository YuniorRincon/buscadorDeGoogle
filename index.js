var oprimir = document.querySelector(".BTN");
var seach = document.getElementById("buscador");
var space = document.getElementById("espacio");
var lupa = document.getElementById("lupa");

var letra;
var op = oprimir;

oprimir = document.addEventListener("click", EscribirLetras);
lupa.addEventListener("click", internet);
 

function EscribirLetras(ev)
{
    var contador = ev.srcElement.accessKey;

    if(contador == contador)
    {
        letra = contador;
    }
   
    if(space == contador)
    {
        letra = " ";
    }
    
    seach.defaultValue += letra;
    //console.log(ev);
}


function internet()
{ 
    window.location.assign(`https://www.google.com/search?q=${seach.defaultValue}`);
}
