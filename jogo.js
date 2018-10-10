function shuffle(array) { //funcao de embaralhar as cartas
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function Card(id, name) { //classe Card
    this.id = id;
    this.name = name;
    //this.position = position;
    this.getId = function () {
        return this.id;
    };
    this.getName = function () {
        return this.name;
    };
}

cards = ["images/queda-bastilha.png", "images/diretas-ja.png", "images/homem-lua.png",
    "images/steve-jobs.png", "images/hitler.png", "images/queda-bastilha.png",
    "images/diretas-ja.png", "images/homem-lua.png",
    "images/steve-jobs.png", "images/hitler.png"
];


function findCard(id) { //encontrando a carta selecionada
    for (card of cardsObject) {
        if (id == card.getId()) {
            return card;
        }
    }
}

//objeto TURNO que vai guardar o "estado" do turno atual
var turno = {
    primeiro:{
        elementoClicado : "",
        cartaCorrespondente: ""
    },
    segundo:{
        elementoClicado: "",
        cartaCorrespondente: ""
    },
}
var vezes = 0 //numero de "clicks"
var pontos = 0 

$(document).ready(function () {
    cards = shuffle(cards); //embaralha os cards
    domCardsClone = []; //cria uma lista vazia

    //itera sobre cada um dos elementos que tem a classe "hidden-card" e adiciona
    //uma copia desse elemento para a lista "domCardsClone"
    $(".hidden-card").each(function () {
        domCardsClone.push(this.cloneNode())
    });

    //para cada copia do node na lista, adiciona o caminho 
    //que esta em "cards"
    for (var i = 0; i < domCardsClone.length; i++) {
        domCardsClone[i].src = cards[i]
    }


    //para cada click no elemento "hidden-card"
    $('.hidden-card').click(function () {
        //verifica o numero da vez
        if (vezes == 0) {
            vezes++ //incrementa o numero de vezes

            //adiciona o elemento <img> para o atributo "elementoclicado" do
            //objeto "primeiro" que faz parte de "turno"
            turno.primeiro.elementoClicado = this
            turno.primeiro.cartaCorrespondente = cards[this.id]
            this.src = turno.primeiro.cartaCorrespondente

        } else if (vezes == 1) {
            vezes++
            turno.segundo.elementoClicado = this
            turno.segundo.cartaCorrespondente = cards[this.id]
            this.src = turno.segundo.cartaCorrespondente


            //usa a função setTimeout, que faz com que o codigo so execute
            //apos o numero de milisegundos definido
            setTimeout(function(){
                 if(turno.primeiro.cartaCorrespondente != turno.segundo.cartaCorrespondente){
                     turno.primeiro.elementoClicado.src = 'images/hidden-card.png'
                     turno.segundo.elementoClicado.src = 'images/hidden-card.png'
                 }else if(turno.primeiro.cartaCorrespondente == turno.segundo.cartaCorrespondente){
                    console.log('igual')
                    pontos++
                    document.getElementById('pontos').innerHTML = pontos
                 }
            }, 2000);
        console.log("antes do if final", vezes)    
        }if(vezes == 2){
            //reseta o numero de vezes ao final
            vezes = 0
        }
    });
});