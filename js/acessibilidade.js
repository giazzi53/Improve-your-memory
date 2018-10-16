function aumentaFonte(){
    var elementos = document.querySelectorAll('p');
   for(i=0; i< elementos.length; i++){
        elementos[i].style.fontSize = "1.2em";  
        elementos[i].style.fontWeight = "bold";  
        elementos[i].style.color = "brown";  
    }
}

function diminuiFonte(){
   var elementos = document.querySelectorAll('p');
   for(i=0; i< elementos.length; i++){
        if(elementos[i].style.fontSize == "1.2em"){
            elementos[i].style.fontSize = "1em"; 
            elementos[i].style.fontWeight = "normal";  
            elementos[i].style.color = "black";  
        }
        
    } 
    
}