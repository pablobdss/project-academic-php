<?php
include_once('db_conn.php');

if(isset($POST['submit_cadastro'])){
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $telefone = $_POST['telefone'];
    $sexo = $_POST['sexo'];
    $data_nasc = $_POST['data_nasc'];
}
?>
<!-- calma, vou setar o agendamento primeiro -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <div id="logo">The Grooming Studio</div>
        <div id="homepage">
            <a href="index.html">Home</a>
        </div>
    </header>

    <h2>Horários Reservados</h2>
    <form method="post" action="visualizarreserva.php">
        <!--em construção-->
        <button type="submit" name="visualizarreserva">Visualizar Reserva</button>
</body>
</html>