<?php
session_start();
include('conexao.php');

if(empty($_POST['usuario']) || empty($_POST['senha'])) {
	header('Location: index.php');
	exit();
}

$usuario = mysqli_real_escape_string($conexao, $_POST['usuario']);
$senha = mysqli_real_escape_string($conexao, $_POST['senha']);

$query = "select usuario from usuario where usuario = '{$usuario}' and senha = '{$senha}'";
$sql = "select idade from usuario where usuario = '{$usuario}' and senha = '{$senha}'";
$resultado=mysqli_query($conexao,$sql);


$result = mysqli_query($conexao, $query);

$linha=mysqli_fetch_assoc($resultado);



$row = mysqli_num_rows($result);

if($row == 1) {
	$_SESSION['usuario'] = $usuario;
	$_SESSION['idade'] = $linha['idade'];
	header('Location: painel.php');
	exit();
} else {
	$_SESSION['nao_autenticado'] = true;
	header('Location: index.php');
	exit();
}