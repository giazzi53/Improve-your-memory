function shuffle(array) { //funcao de embaralhar as cartas
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

function Card(id, name){ //classe Card
    this.id = id;
    this.name = name;
    //this.position = position;
    this.getId = function(){
        return this.id;
    };
    this.getName = function(){
        return this.name;
    };
    /*this.getPosition = function(){
        return this.position;
    };
    this.getInfo = function(){
        return this.id + this.name + this.position;
    };*/
}

cards = ["images/queda-bastilha.png", "images/diretas-ja.png", "images/homem-lua.png",
         "images/steve-jobs.png", "images/hitler.png", "images/queda-bastilha.png", 
         "images/diretas-ja.png", "images/homem-lua.png",
         "images/steve-jobs.png", "images/hitler.png"];
userPoints = 0;
cards = shuffle(cards);
cardsObject = [];
clicks = 0;
selectedCards = [];
for(a = 0; a < 10; a++){ //criando objetos card
    var card = new Card(a, cards[a]);
    cardsObject.push(card);
}

function findCard(id){ //encontrando a carta selecionada
    for(card of cardsObject){
        if(id == card.getId()){
            return card;
        }
    }
}

function revealCard(num){
    clicks++;
    selectedCard = findCard(num);
     alert("Antes");
    document.getElementById(num).src = selectedCard.getName();
    alert("Depois");

    //desedenvolver forma de comparar as duas cartas sem que seja por uma lista
    selectedCards.push(selectedCard);

    if(clicks == 2){
        checkPair(selectedCards[0], selectedCards[1]);
    }

}

function checkPair(card1, card2){
    if(card1.getName() == card2.getName() && card1.getId() != card2.getId()){ //se a primeira carta for igual
        clicks = 0;                                                           //a segunda e nao for a mesma carta
        userPoints++;   
        selectedCards = [];
        document.getElementById(card1.getId()).src = ""; 
        document.getElementById(card2.getId()).src = "";                                                 
        alert("cartas iguais");
    } else if(card1.getName() == card2.getName() && card1.getId() == card2.getId()){ //se a primeira carta for igual
        clicks--;                                                                    //a segunda, mas for a mesma carta
        selectedCards.pop();
        alert("nao pode clicar na mesma carta");
    } else{ //se as cartas forem diferentes
        clicks = 0;                                                           
        selectedCards = [];
        document.getElementById(card1.getId()).src = "images/hidden-card.png"; 
        document.getElementById(card2.getId()).src = "images/hidden-card.png";       
        alert("cartas diferentes");
    }
}


var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}

function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}