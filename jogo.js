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
    this.questions = [];
    this.answer = "";
    this.getId = function(){
        return this.id;
    };
    this.getName = function(){
        return this.name;
    };
    this.getQuestion = function(idx){
        return this.questions[idx];
    };
    this.setQuestion = function(question){
        this.questions.push(question);
    };
    this.getAnswer = function(){
        return this.answer;
    };
    this.setAnswer = function(resp){
        this.answer = resp;
    };
    this.getInfo = function(){
        return this.id + " " + this.name + " " + this.question + " " + this.answer;
    };
}

document.getElementsByClassName("info")[0].style = 'display: none';  //retirando o nivel e pts da tela antes de começar o jogo
document.getElementsByClassName("info")[1].style = 'display: none';
document.getElementById("final").style = 'display: none';

var level;
var cardsLenght;

jaClicou = false;
function generateCards(dificuldade){
    if(!jaClicou){
        if(dificuldade == "Fácil"){
            qtdeCartas = 10;
        } else if(dificuldade == "Médio"){
            qtdeCartas = 14;
        } else{
            qtdeCartas = 18;
        }
        document.getElementById("nivel").innerHTML = "Nível: " + dificuldade; //escreve o nivel na tela
        level = dificuldade;
        jaClicou = true;
        var el = document.getElementById('body');
        var content;
        auxRandom = [];
        for(a = 0; a < qtdeCartas; a++){ 
            auxRandom.push(a);
        }
        auxRandom = shuffle(auxRandom); //embaralhando as cartas
        for(a = 0; a < qtdeCartas; a++){ //loop para criar as cartas na tela
            content = '<img class="hidden-card col-md-2 col-sm-4" src="images/hidden-card.png" id="'+auxRandom[a]+'" onclick="checkMove('+auxRandom[a]+')">';
            el.insertAdjacentHTML('afterbegin', content);
        }
        document.getElementById("levelSelect").style = 'display: none';
        document.getElementById("facil").style = 'display: none';
        document.getElementById("medio").style = 'display: none'; //tira a opção de esolher o nivel
        document.getElementById("dificil").style = 'display: none'; 
        document.getElementById("divLevel").style = 'display: none'; 

        document.getElementsByClassName("info")[0].style = 'display: show';  //recolocando o nivel e pts na tela
        document.getElementsByClassName("info")[1].style = 'display: show';  

        defineCards();
    }
}

function defineCards(){
    cards = ["images/queda-bastilha.png", "images/queda-bastilha.png",
    "images/diretas-ja.png", "images/diretas-ja.png",
    "images/homem-lua.png", "images/homem-lua.png",
    "images/steve-jobs.png", "images/steve-jobs.png",
     "images/hitler.png", "images/hitler.png"];

    if(level == "Fácil"){
        //sem ação, todas as cartas ja estao na lista
    } else if(level == "Médio"){ 
        cards.push("images/torres-gemeas.jpg");
        cards.push("images/torres-gemeas.jpg");
        cards.push("images/14bis.jpg");
        cards.push("images/14bis.jpg");
    } else{
        cards.push("images/torres-gemeas.jpg");
        cards.push("images/torres-gemeas.jpg");
        cards.push("images/14bis.jpg");
        cards.push("images/14bis.jpg");
        cards.push("images/cafu-2002.jpg");
        cards.push("images/cafu-2002.jpg");
        cards.push("images/barack-obama.jpg");
        cards.push("images/barack-obama.jpg");
    }

    for(a = 0; a < cards.length; a++){ //criando objetos card
        var card = new Card(a, cards[a]);
        cardsObject.push(card);
    }

    aux = 0;
    questionIdx = 0;
    for(card of cardsObject){ //gerando perguntas e respostas para cada carta
        aux++;
        generateQuestion(card, questionIdx); 
        generateAnswer(card, questionIdx);
        if(aux == 2){
            aux = 0;
            questionIdx++; //o índice das perguntas deve ser adicionado a cada par, assim o par de cartas terá a mesma pergunta
        }
    }
    cardsLenght = cards.length;
}


cardsObject = [];
userPoints = 0;
clicks = 0;
selectedCards = [];

listQuestions =[[" Queda da bastilha, que aconteceu na França quando o povo se revoltou contra a monarquia", 
                 " Queda do muro de Berlim, que ocorreu na Alemanha após o fim da divisão entre Oriente e Ocidente no país",
                 " Ataque às Torres Gêmeas, que ocorreu nos EUA após o atentado praticado em 11 de Setembro de 2001",
                 " Nenhuma das opções acima"], 
                 
                [" Protesto pedindo o impeachment da presidente Dilma Roussef, em 2015",
                 " Protesto pedindo eleições diretas, na qual a população escolheria seu governante, no fim da ditadura militar",
                 " Movimento em prol dos trabalhadores sem teto, pedindo uma mudança imediatamente",
                 " Nenhuma das opções acima"], 
                
                [" Primeiro homem ao chegar ao topo do monte Everest, deixando sua marca com a bandeira dos EUA",
                 " Um homem confeccionando a primeira bandeira nacional de todas",
                 " Chegada do homem à lua, no qual Neil Armstrong fixou a bandeira Americana em solo desconhecido",
                 " Nenhuma das opções acima"],

                [" Steve Jobs apresentando o primeiro Iphone, em 2007, que viraria mais adiante o celular mais desejado por todos",
                 " Bill gates em uma palestra sobre seu novo produto, o Windows, que seria anos depois o sistema operacional mais usado no mundo",
                 " Larry Page, um dos fundadores do Google, mostrando como seu sistema de busca na web funcionava",
                 " Nenhuma das opções acima"],

                [" Preparação de ataque a Hiroshima e Nagasaki, ordenado pelo então presidente Amerciano Harry S. Truman",
                 " Desfile militar nas ruas de Pyongyang, capital da Coréia do Norte, sendo comandado pelo seu primeiro ditador Kim Il-Sung",
                 " Adolf Hitler, lider Nazista responsável pela morte de milhares de judeus e negros, por defender a \"raça superior\" e tentar levantar a Alemanha pós Segunda Guerra",
                 " Nenhuma das opções acima"],
                
                [" Atentando as Torres Gêmeas do World Trade Center, nos EUA, em 11 de setembro de 2001, comandado pelo grupo terrorista Al Qaeda",
                 " Acidente aéreo da Malaysia Airlines em um prédio comercial, o qual deixou centenas de mortos e feridos",
                 " Incêndio no prédio Wilton Paes de Almeida, em São Paulo, causado por curto circuito em uma tomada, levando a construção abaixo",
                 " Nenhuma das opções acima"],

                [" Primeira câmera fotográfica, criada por Joseph Nicéphore Niépce em 1826, na França",
                 " Criação do primeiro avião, chamado de 14 Bis, pelo inventor brasileiro Santos Dumont, em 1906",
                 " Primeiro carro já criado em 1886, por Karl Benz",
                 " Nenhuma das opções acima"],
                
                [" Conquista do Pentacampeonato da seleção brasileira em 2002, após vencer a Alemanha por 2 a 0", 
                 " Ayrton Senna, um grande ícone do automobilismo, comemorando uma de suas conquistas na Fórmula 1",
                 " Conquista do Tetracampeonato do Brasil em 1994, após bater a Itália nos pênaltis",
                 " Nenhuma das opções acima"],

                [" Martin Luther King, imagem que lutou a favor dos direitos civis americanos, de 1954 até sua morte em 1968", 
                 " Nelson Mandela, líder sul-africano de movimentos sociais contra o Apartheid",
                 " Barack Obama, o primeiro presidente negro a ser eleito nos Estados Unidos",
                 " Nenhuma das opções acima"]
            ];


function generateQuestion(card, idx){ //adiciona as opções para cada carta
    for(a = 0; a < 4; a++){
        card.setQuestion(listQuestions[idx][a]);
    }
}

answers = ["A", "B", "C", "A", "C", "A", "B", "A", "C"];
function generateAnswer(card, idx){ //definindo as respostas de cada carta
    card.setAnswer(answers[idx]);
}

function revealCard(num){ //vira a carta
    selectedCard = findCard(num);
    document.getElementById(num).src = selectedCard.getName(); //substitui o nome da carta, ou seja, vira pra cima
    selectedCards.push(selectedCard); //adiciona a carta selecionada na lista de cartas selecionadas
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
                openModalMesmaCarta(); 
                jogadaValida = false; //invalida a jogada
            }

            if(jogadaValida){ //dando um intervalo para tomar alguma ação nas cartas
                setTimeout(checkPair, 2000)
            }
        }  
    }
}

function checkPair(){
    if(selectedCards[0].getName() == selectedCards[1].getName() &&
       selectedCards[0].getId() != selectedCards[1].getId()){ //se forem cartas iguais, e nao for a mesma carta
        openModal();
        document.getElementById(selectedCards[0].getId()).style.display = 'none'; //retira a carta da tela
        document.getElementById(selectedCards[1].getId()).style.display = 'none';
        userPoints++;
        cardsLenght -= 2;
        // alert(cardsLenght);
        if (cardsLenght == 0){
            document.getElementById("body").innerHTML = "";
            endGame();
            // window.location.assign("end_session.html");
            
        }
        
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
var modalInstrucoes = document.getElementById('modalInstrucoes');
var modalRespCerta = document.getElementById('modalRespCerta');
var modalMesmaCarta = document.getElementById('modalMesmaCarta');
var modalRespErrada = document.getElementById('modalRespErrada');
var modalBtn = document.getElementById('modalBtn');

function openModalMesmaCarta(){
    modalMesmaCarta.style.display = 'block';
  }

function closeModalMesmaCarta(){
    modalMesmaCarta.style.display = 'none';
  }

function openModalRespostaCerta(){
    modalRespCerta.style.display = 'block';
  }

function closeModalRespostaCerta(){
    modalRespCerta.style.display = 'none';
  }

function openModalRespostaErrada(resposta){
    document.getElementById('respErrada').innerHTML = "A alternativa correta era: "+ resposta;
    modalRespErrada.style.display = 'block';
  }

function closeModalRespostaErrada(){
    modalRespErrada.style.display = 'none';
  }

function openmodalInstrucoes(){
    modalInstrucoes.style.display = 'block';
  }

  function closemodalInstrucoes(){
    modalInstrucoes.style.display = 'none';
  }

function openModal(){
  showQuestion();
  modal.style.display = 'block';
}

alternativas = ["alternativaA", "alternativaB", "alternativaC", "alternativaD"];
auxSelectedCard = ""; //variavel auxiliar criada pois quando o submeter a resposta, as cartas selecionadas ja vao estar zeradas
function showQuestion(){
    for(a = 0; a < 4; a++){ //como as cartas são iguais, não faz diferença qual será escolhida para mostrar as perguntas
        document.getElementById(alternativas[a]).textContent = selectedCards[0].getQuestion(a);
    }
    auxSelectedCard = selectedCards[0];
}

questions = document.getElementById("questoes");
function checkAnswer(){
    if(questions.alternative.value == auxSelectedCard.getAnswer()){ //verificando se o valor da alternativa selecionada é o correto
        // alert("Resposta certa!");
        openModalRespostaCerta();
        userPoints += 3;
        
    } else{
        idx = 0;
        if(auxSelectedCard.getAnswer() == "A"){
            idx = 0;
        } else if (auxSelectedCard.getAnswer() == "B"){
            idx = 1;
        } else if(auxSelectedCard.getAnswer() == "C"){
            idx = 2;
        }

        
        openModalRespostaErrada(auxSelectedCard.getQuestion(idx));
        // alert("Resposta errada!");
    }
    document.getElementById('rad1').checked = false;
    document.getElementById('rad2').checked = false;
    document.getElementById('rad3').checked = false;
    document.getElementById('rad4').checked = false;
    document.getElementById("pontos").innerHTML = "Pontuação: " + userPoints; //escrevendo os pontos na tela
    closeModal();

}

function closeModal(){
  modal.style.display = 'none';
}

function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}

function endGame(){
    document.getElementById("nivelFinal").innerHTML = "Você concluiu o nível: " + level;
    document.getElementById("pontuacaoFinal").innerHTML = "Pontuação: " + userPoints;
    document.getElementById("final").style = 'display: block';

}


