userPoints = 0;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
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

clicks = 0;
selectedCards = [];

function revealCard(num){
    clicks++;
    document.getElementsByClassName("hidden-card")[num].src = cards[randomIndex[num]]; 
    selectedCard = cards[randomIndex[num]];
    selectedCards.push(selectedCard);
    if(clicks == 2){
        checkCards(selectedCards[0], selectedCards[1]);
        clicks = 0;
        selectedCards = [];
    }
}

function checkCards(card1, card2){ //funcao que verifica se as cartas viradas sao iguais
    if(card1 == card2){
        userPoints ++;
    }

    window.alert("Pontuação:" + userPoints);
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

