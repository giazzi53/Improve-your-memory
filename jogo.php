<?php
session_start();
include('verifica_login.php');
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    
	<meta charset = "utf-8" author = "Guilherme Giazzi, Matheus Lança e André Vinicius">
	<link rel="stylesheet" type="text/css" href="jogo.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <meta name="description" content="Exercite sua memória e previna-se contra o Alzheimer e outras doenças degenerativas">
    <script src="jogo.js"></script>
	<title>Improve your memory - Jogo</title>
</head>

<body>
	<div class="cards">
		<img class="hidden-card" src="images/hidden-card.png" onclick="revealCard(0)">
		<img class="hidden-card" src="images/hidden-card.png" onclick="revealCard(1)">
		<img class="hidden-card" src="images/hidden-card.png" onclick="revealCard(2)">
		<img class="hidden-card" src="images/hidden-card.png" onclick="revealCard(3)">
		<img class="hidden-card" src="images/hidden-card.png" onclick="revealCard(4)">

		<br>

		<img class="hidden-card" src="images/hidden-card.png" onclick="revealCard(5)">
		<img class="hidden-card" src="images/hidden-card.png" onclick="revealCard(6)">
		<img class="hidden-card" src="images/hidden-card.png" onclick="revealCard(7)">
		<img class="hidden-card" src="images/hidden-card.png" onclick="revealCard(8)">
		<img class="hidden-card" src="images/hidden-card.png" onclick="revealCard(9)">

	</div>
	<button id="modalBtn" class="btn btn-default btn-lg">Abre Pergunta</button>

	  <div id="simpleModal" class="modal">
	    <div class="modal-content">
	      <div class="modal-header">
	          <span class="closeBtn">&times;</span>
	          <h2>Pergunta!</h2>
	      </div>
	      <div class="modal-body">
			<form>
			  <input type="radio" name="gender" value="male"> Pergunta A<br>
			  <input type="radio" name="gender" value="female"> Pergunta B<br>
			  <input type="radio" name="gender" value="other"> Pergunta C<br>
			  <input type="radio" name="gender" value="other"> Pergunta D
			</form>
	      </div>
	      <div class="modal-footer">
	        <input type="button" name="" class="button" value="Confirma resposta" onclick="closeModal()">
	      </div>
	    </div>
	  </div>
    
        <!-- Trigger the modal with a button -->
<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Instruções</button>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Caro <?php echo $_SESSION['usuario'];?></h4>
          
      </div>
      <div class="modal-body">
        <p>Este jogo tem o intuito de manter a memória dos usuários ativa, sejam eles jovens que ainda estão cursando o Ensino Médio, universitários ou idosos, através de um jogo da memória da história da humanidade</p>

		<p>Para começar a jogar, clique em voltar e depois em iniciar. Você deverá selecionar um nível de dificuldade, entre fácil, médio e difícil</p>

		<p>Serão disponibilizadas cartas com imagens de acontecimentos históricos ao longo da humanidade, que estarão viradas para baixo. O número de cartas será definido de acordo com o nível escolhido</p>

		<p>Para selecionar uma carta, basta escolher uma e clicá-la. Você deverá encontrar o par desta carta</p>

		<p>Ao encontrar um par, uma pergunta referente à imagem aparecerá. O objetivo é fazer o maior número de pontos dentro do tempo determinado</p>

	<h2>Entendendo a pontuação:</h2>

		<p>Para cada par encontrado, você ganhará um ponto</p>

		<p>Para cada pergunta referente ao acontecimento respondida corretamente, você ganhará 3 pontos</p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
      </div>
    </div>

  </div>
</div>
    
	<script src="jogo.js"></script>
</body>
<footer>
	<hr>
	<p>Jogo desenvolvido por Guilherme Giazzi, Matheus Lança e André Vinicius</p>
</footer>

</html>