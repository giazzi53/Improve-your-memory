<?php
session_start();
?>

<!DOCTYPE html>
<html>
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
	<link rel="stylesheet" type="text/css" href="util.css">
    <meta name="description" content="Exercite sua memória e previna-se contra o Alzheimer e outras doenças degenerativas">
  </head>
<body>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <!-- Brand -->
            <a class="navbar-brand" href="index.html"><img src="img/logo.png"></a>
            
            <!-- Navbar links -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <span class="nav-link">IMPROVE YOUR MEMORY</span>
                </li> 
            </ul>
        </nav>
	<div class="jumbotron">
        
		<div class="row login">
			<form action="login.php" method="POST" class="pagination-centered">
	                 <ul class="navbar-nav ml-auto">
	                    <li class="nav-item">
	                      <span class="nav-link" href="#">IMPROVE YOUR MEMORY</span>
	                    </li> 
	                  </ul>
	          <br>
			  <div class="form-group">
			    <h3 for="email" class="">Email address:</h3>
                <input name="usuario" name="text" class="form-control" placeholder="Seu usuário" autofocus="">
			  </div>
			  <div class="form-group">
			    <h3 for="pwd">Password:</h3>
                <input name="senha" class="form-control" type="password" placeholder="Sua senha">
			  </div>
			  <div class="checkbox">
			    <label><input type="checkbox"> Remember me</label>
			  </div>
              <button type="submit" class="btn btn-default">Entrar</button>
			</form>
            <?php
                    if(isset($_SESSION['nao_autenticado'])):
                    ?>
                    <div class="alert alert-danger">
  <strong>Falha!</strong> Usuário ou senha incorretos
</div>
                    <?php
                    endif;
                    unset($_SESSION['nao_autenticado']);
                    ?>
		</div>	
	</div>
</body>
</html>