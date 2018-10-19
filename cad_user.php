<?php
$servername = "localhost";
$username = "id7335093_andresantos";
$password = "18041999";
$dbname = "id7335093_login";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$user =  $_POST['usuario_cad'];
$passw = $_POST['senha_cad'];
$age = $_POST['nascimento_cad'];



$sql = "INSERT INTO usuario (usuario, senha, idade) VALUES ('$user', '$passw', $age)";


// the message
$msg = "Obrigado por se cadastrar em Improve Your Memory. Sua senha para acesso a esta conta é: $passw e você pode redefini-la a qualquer momento";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail($user,"Testando envio de emails",$msg);

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
   
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>




