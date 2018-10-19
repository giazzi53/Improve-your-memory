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
    this.getInfo = function(){
        return this.id + " " + this.name + " " + this.question;
    };
}

document.getElementsByClassName("info")[0].style = 'display: none';  //retirando o nivel e pts da tela antes de começar o jogo
document.getElementsByClassName("info")[1].style = 'display: none';

var level;
var el2 = document.getElementById('body');
facil = 'facil';
medio = 'medio';
dificil = 'dificil';
listHtml = ['</div>',
            '<button id="facil" class="btn btn-primary" onclick="generateCards('+facil+')">Facil</button>', 
            '<button id="medio" class="btn btn-primary" onclick="generateCards('+medio+')">Medio</button>',
            '<button id="dificil" class="btn btn-primary" onclick="generateCards('+dificil+')">Dificil</button>',
            '<div id="botoes">',
            '<h1 id="levelSelect" class="jumbotron text-center">Selecione um nível: </h1>'];
// for(content2 of listHtml){
//     el2.insertAdjacentHTML('afterbegin', content2); //loop para inserir o codigo HTML que vai criar os botoes na tela
// }

jaClicou = false;
function generateCards(dificuldade){
    if(!jaClicou){
        if(dificuldade == "facil"){
            qtdeCartas = 10;
        } else if(dificuldade == "medio"){
            qtdeCartas = 14;
        } else{
            qtdeCartas = 18;
        }
        document.getElementById("nivel").innerHTML = dificuldade; //escreve o nivel na tela
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

    if(level == "facil"){
        //sem ação, todas as cartas ja estao na lista
    } else if(level == "medio"){ 
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
    for(card of cardsObject){ //gerando perguntas para cada carta
        aux++;
        generateQuestions(card, questionIdx); 
        if(aux == 2){
            aux = 0;
            questionIdx++; //o índice das perguntas deve ser adicionado a cada par, assim o par de cartas terá a mesma pergunta
        }
    }
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

function generateQuestions(card, idx){ //adiciona as opções para cada carta
    for(a = 0; a < 4; a++){
        card.setQuestion(listQuestions[idx][a]);
    }
}

function revealCard(num){ //vira a carta
    selectedCard = findCard(num);
    document.getElementById(num).src = selectedCard.getName(); //substitui o nome da carta
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
                alert("Não pode clicar na mesma carta");   
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

        document.getElementById(selectedCards[0].getId()).src = "";  //retira a carta da tela
        document.getElementById(selectedCards[1].getId()).src = ""; 
        userPoints++;
        document.getElementById("pontos").innerHTML = userPoints;
        openModal();
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

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
  showQuestion();
  modal.style.display = 'block';
}

alternativas = ["alternativaA", "alternativaB", "alternativaC", "alternativaD"];

function showQuestion(){
    for(a = 0; a < 4; a++){ //como as cartas são iguais, não faz diferença qual será escolhida para mostrar as perguntas
        document.getElementById(alternativas[a]).textContent = selectedCards[0].getQuestion(a);
    }
}

function closeModal(){
  modal.style.display = 'none';
}

function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}