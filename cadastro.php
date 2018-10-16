<!DOCTYPE html>

<html>
    <head>
        <title> Cadastro</title>
        <meta charset="utf-8"> 
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="stylesheet" type="text/css" href="util.css">
        <script type="text/javascript" src="js/konami_code.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/png" href="img/logo.png">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <meta name="description" content="Exercite sua memória e previna-se contra o Alzheimer e outras doenças degenerativas">
    </head>
    </body>
         <nav class="navbar navbar-expand-md bg-dark navbar-dark pagination-centered">
            <!-- Brand -->
            <a class="navbar-brand" href="index.html"><img src="img/logo.png"></a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <span class="nav-link" href="#">IMPROVE YOUR MEMORY</span>
                </li> 
            </ul>
            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="painel.php" class="nav-link">Home</a>
                    </li> 
                </ul>
            </div> 
        </nav>

    <div class="jumbotron" >
        <div class="row login">
            <div class="pagination-centered">
            <form action="/action_page.php">
            <a class="navbar-brand" href="#"><img src="img/logo.png"></a>
                     <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                          <span class="nav-link" href="#">IMPROVE YOUR MEMORY</span>
                        </li> 
                      </ul>
              <br>
              <div class="form-group">
                <h3 for="login" class="">Usuario:</h3><input type="text" class="form-control" id="login">
              </div>
              <div class="form-group">
                <h3 for="pwd">Senha:</h3><input type="password" class="form-control" id="pwd">       
              </div>
              <div class="form-group">
                <h3 for="email" class="">Data de Nascimento:</h3>
                <input type="date" class="form-control" placeholder="Ex.: dd/mm/aaaa" data-mask="00/00/0000" maxlength="10" autocomplete="on" id="idade">
              </div>
              <button type="submit" class="btn btn-default">Cadastrar</button>
        </form>
        </div>
    </div>  
    </div>
    </body>
</html>