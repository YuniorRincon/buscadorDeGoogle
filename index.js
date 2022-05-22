var teclas = {
    
    ltr_Q :"q", ltr_W :"w", ltr_E :"e", ltr_R :"r", ltr_T :"t", ltr_Y :"y", ltr_U :"u", ltr_I :"i", ltr_O :"o", ltr_P :"p",
    ltr_A :"a", ltr_S :"s", ltr_D :"d", ltr_F :"f", ltr_G :"g", ltr_H :"h", ltr_J :"j", ltr_K :"k", ltr_L :"l",
    ltr_Z :"z", ltr_X :"x", ltr_C :"c", ltr_V :"v", ltr_B :"b", ltr_N :"n", ltr_M :"m"

}

var oprimir = document.querySelector(".BTN");
var op = oprimir;
op = document.addEventListener("click",EscribirLetras);
var letra;


function EscribirLetras(ev)
{

    switch(ev.srcElement.accessKey)
    {
        case teclas.ltr_Q:
            letra = "q";
        break;
        
        case teclas.ltr_W:
            letra = "w";
        break;
        
        case teclas.ltr_E:
            alert("soy la letra E");
        break;

        case teclas.ltr_R:
            alert("soy la letra R");
        break;

        case teclas.ltr_T:
            alert("soy la letra T");
        break;

        case teclas.ltr_Y:
            alert("soy la letra Y");
        break;  

        case teclas.ltr_U:
            alert("soy la letra U");
        break;  

        case teclas.ltr_I:
            alert("soy la letra I");
        break;  

        case teclas.ltr_O:
            alert("soy la letra O");
        break;  

        case teclas.ltr_P:
            alert("soy la letra P");
        break;      
    }

    console.log(ev)   
}
