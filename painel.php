<?php
session_start();
include('verifica_login.php');
?>

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title> Improve Your Memory </title>
    <meta charset="utf-8"> 
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/konami_code.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="img/logo.png">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <meta name="description" content="Exercite sua memória e previna-se contra o Alzheimer e outras doenças degenerativas">
  </head>
  <body>
        <div class="container-fluid">
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <!-- Brand -->
                 <a class="navbar-brand" href="#"><img src="img/logo.png"></a>
                 <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <span class="nav-link" href="#">IMPROVE YOUR MEMORY</span>
                    </li> 
                  </ul>
                <!-- Navbar links -->
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                  
                   <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <span class="nav-link">Olá, <?php echo $_SESSION['usuario'];?></span>
                    </li> 
                  </ul>
                   <ul class="navbar-nav">
                    <li class="nav-item">
                      <a href="logout.php" class="nav-link">Sair</a>
                    </li> 
                  </ul>
                </div> 
              </nav>
                <div class="row">
                   
                </div>
                      
                <div class="jumbotron">
                        <h1>Bem-vindo ao Improve Your Game</h1>
                         
                        <p>Stress, exposição a uma grande quantidade de informações, ritmo acelerado da vida moderna e muitos outros fatores são decisivos para causar danos à saúde humana. Não só a saúde física é afetada, mas a mente também fica prejudicada. <b>Improve Your Memory</b> é um game desenvolvido visando minimizar esses efeitos citados, trazendo maior qualidade de vida através do entretenimento.</p> <p>Clique no botão abaixo e confira gratuitamente.</p> 
                        
                        <button class="btn btn-default btn-lg"> <a href="jogo.php" style="text-decoration:none"> Clique para acessar o game </a> </button>
                </div>
                <div class="container-fluid">
                <h2 style="text-align:center;">Instruções</h2>

<p>Este jogo tem o intuito de manter a memória dos usuários ativa, sejam eles jovens que ainda estão cursando o Ensino Médio, universitários ou idosos, através de um jogo da memória da história da humanidade.</p>


<p>Serão disponibilizadas cartas com imagens de acontecimentos históricos ao longo da humanidade, que estarão viradas para baixo. O número de cartas será definido de acordo com o nível escolhido.</p>

<p>Para selecionar uma carta, basta escolher uma e clicá-la. Você deverá encontrar o par desta carta.</p>

<p>Ao encontrar um par, uma pergunta referente à imagem aparecerá. O objetivo é fazer o maior número de pontos dentro do tempo determinado.</p>

<b>Entendendo a pontuação:</b>

<p>Para cada par encontrado, você ganhará um ponto</p>

<p>Para cada pergunta referente ao acontecimento respondida corretamente, você ganhará 3 pontos</p>  
                  

                </div>


                <div class="container-fluid" id="sobre">
                  <h3 style="text-align: center;"> Sobre o projeto e os desenvolvedores</h3>

                  
                   
                      <p style="text-align:center;"> O projeto foi desenvolvido para a disciplina <b> Fatores Humanos em Sistemas Computacionais (Turma 4J11)</b> pelos seguintes alunos de Sistemas de Informação da Universidade Presbiteriana Mackenzie:</p>
                      
                      <ul class="list-group">
                          <li class="list-group-item">André Santos - <b>31780628</b> </li>
                          <li class="list-group-item">Guilherme Giazzi - <b>31722792</b> </li>
                          <li class="list-group-item">Matheus Lança - <b>31700004</b> </li>
                        </ul>

                      <p style="text-align:center;"> O público - alvo deste game são pessoas interessadas em exercitar sua memória através do entretenimento, com foco maior em pessoas idosas</p>
                    
                    
                  

                </div>

                <div class="container-fluid" id="footer">
                    
                    <p style="text-align: center;"> <span id="ano">  </span> | &copy; Todos os direitos reservados </p>
                    
  
                  </div>
                      
                
        </div>

        <script>
            var date = new Date();
            document.getElementById("ano").innerText = date.getFullYear();

          </script>
</body>
</html>