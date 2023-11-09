<?php
session_start();

if (isset($_SESSION['logado'])) {
    header('Location: menu.php');
    exit;
}

if (isset($_POST['submit_login'])) {
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    //credenciais corretas
    if ($usuario === 'seu_usuario' && $senha === 'sua_senha') {
        $_SESSION['logado'] = true;
        header('Location: menu.php');
        exit;
    } else {
        $mensagemErro = "Credenciais incorretas. Tente novamente.";
    }
}
?>
