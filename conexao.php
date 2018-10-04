<?php
define('HOST', 'localhost');
define('USUARIO', 'id7335093_andresantos');
define('SENHA', '18041999');
define('DB', 'id7335093_login');

$conexao = mysqli_connect(HOST, USUARIO, SENHA, DB) or die ('Não foi possível conectar');