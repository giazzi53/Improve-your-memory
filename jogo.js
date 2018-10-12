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
    this.getId = function(){
        return this.id;
    };
    this.getName = function(){
        return this.name;
    };
    this.getInfo = function(){
        return this.id + this.name;
    };
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
auxNum = [];
for(a = 0; a < 10; a++){ //criando objetos card
    var card = new Card(a, cards[a]);
    cardsObject.push(card);
}

function revealCard(num){
    selectedCard = findCard(num);
    document.getElementById(num).src = selectedCard.getName();
    selectedCards.push(selectedCard);
}

function checkMove(num){
    jogadaValida = true;
    if(clicks < 2){
        clicks++;
        revealCard(num);

        if(clicks == 2){
            if(selectedCards[0].getName() == selectedCards[1].getName() &&
                selectedCards[0].getId() == selectedCards[1].getId()){ //se forem cartas iguais, mas for a mesma carta

                clicks--; //volta um click, jogada inválida
                selectedCards.pop(); //retira a ultima carta selecionada, jogada inválida 
                alert("Não pode clicar na mesma carta");   
                jogadaValida = false; //invalida a jogada
            }

            if(jogadaValida){
                setTimeout(checkPair, 2000)
            }
            
        }
        
    }
}

function checkPair(){
    if(selectedCards[0].getName() == selectedCards[1].getName() &&
       selectedCards[0].getId() != selectedCards[1].getId()){ //se forem cartas iguais, e nao for a mesma carta

        document.getElementById(selectedCards[0].getId()).src = "";  //retira a carta da tela
        document.getElementById(selectedCards[1].getId()).src = ""; 
        userPoints++;
        document.getElementById("pontos").innerHTML = userPoints;
    } else{
        document.getElementById(selectedCards[0].getId()).src = "images/hidden-card.png"; //vira a carta para baixo
        document.getElementById(selectedCards[1].getId()).src = "images/hidden-card.png"; 
    }
    
    clicks = 0; //resetando o numero de clicks
    selectedCards = []; //resetando a lista de cartas selecionadas
}

function findCard(id){ //encontrando a carta selecionada
    for(card of cardsObject){
        if(id == card.getId()){
            return card;
        }
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