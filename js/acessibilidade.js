var gigante = 35;
var pequena = 18;
var estado = "padrao";

function aumentaFonte(){
    if(estado == "padrao"){
        for(i=0; i< document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span,b').length; i++){
            document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span')[i].style.fontSize = gigante+"px";   
        }  
        estado = "grande";
    } else {
        for(i=0; i< document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span,b').length; i++){
            document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span')[i].style.fontSize = pequena+"px";   
        }  
        estado = "padrao";   
    }
    
    
}

