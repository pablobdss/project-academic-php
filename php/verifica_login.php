<?php
    // Inicia ou retoma a sessão
    session_start();

    // Verifica se as variáveis de sessão para e-mail e senha não estão definidas
    if(!isset($_SESSION['email']) || !isset($_SESSION['password'])) {
        // Redireciona para a página de login se o usuário não estiver logado
        header('Location: ../../../project-academic-php/pages/login/login.html');
        exit; // Garante a interrupção da execução do script após o redirecionamento
    }
?>
