<?php
session_start();

if (!isset($_SESSION['logado'])) {
    header('Location: login.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu</title>
</head>
<body>
    <h1> Menu de Opções </h1>
    <ul>
        <li><a href="realizar_reserva.php">Realizar Reserva de Horário</a></li>
        <li><a href="cancelar_reserva.php">Cancelar Reserva</a></li>
        <li><a href="verificar_reservas.php">Verificar Reservas</a></li>
    </ul>
</body>
</html>