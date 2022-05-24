var oprimir = document.querySelector(".BTN");
var seach = document.getElementById("buscador");



var op = oprimir;
op = document.addEventListener("click",EscribirLetras);
var sea = seach;
sea = document.addEventListener("se", busca);
var letra;

function EscribirLetras(ev)
{

    if(ev.srcElement.accessKey == ev.srcElement.accessKey)
    {
        letra = ev.srcElement.accessKey ;
        alert(`soy la letra ${letra}`);
    }

    console.log(ev)   
}

function busca(evv)
{
    console.log(evv);
}
