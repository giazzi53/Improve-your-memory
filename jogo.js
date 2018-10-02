userPoints = 0;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

cards = ["images/queda-bastilha.png", "images/diretas-ja.png", "images/homem-lua.png",
         "images/steve-jobs.png", "images/hitler.png", "images/queda-bastilha.png", 
         "images/diretas-ja.png", "images/homem-lua.png",
         "images/steve-jobs.png", "images/hitler.png"];

index = [0,1,2,3,4,5,6,7,8,9];
randomIndex = shuffle(index);
equalCards = false;
clicks = 0;
selectedCards = [];
auxClickedCards = [];
function revealCard(num){
    clicks++;
    document.getElementsByClassName("hidden-card")[num].src = cards[randomIndex[num]]; 
    selectedCard = cards[randomIndex[num]];
    selectedCards.push(selectedCard);
    auxClickedCards.push(num);
    if(clicks == 2){
    	///!!!
        window.alert("Concluiu uma jogada"); //o bug está aqui, mas pq?
        ///!!!
        if(auxClickedCards[0] != auxClickedCards[1]){
            checkCards(selectedCards[0], selectedCards[1]);
        
            if(equalCards == true){ //tira o par de cartas da tela se for igual
                document.getElementsByClassName("hidden-card")[auxClickedCards[0]].src = "";
                document.getElementsByClassName("hidden-card")[auxClickedCards[1]].src = "";
            } else{ //volta as duas cartas para baixo
                document.getElementsByClassName("hidden-card")[auxClickedCards[0]].src = "images/hidden-card.png";
                document.getElementsByClassName("hidden-card")[auxClickedCards[1]].src = "images/hidden-card.png";
            }

            clicks = 0;
            selectedCards = [];
            auxClickedCards = [];

        } else{
            auxClickedCards.pop();
            selectedCards.pop();
            alert("Nao pode clicar na mesma carta");
            clicks--;
            
        }
    } 
}

function checkCards(card1, card2){ //funcao que verifica se as cartas viradas sao iguais
    if(card1 == card2){
        userPoints ++;
        equalCards = true;
    } else{
        equalCards = false;
    }

    
}



