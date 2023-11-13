<?php
    session_start();

    // Verificar se o usuário está autenticado no PHP
    $isAuthenticated = isset($_SESSION['email']) && isset($_SESSION['password']);

    // Encaminhar o status de autenticação como JSON
    header('Content-Type: application/json');
    echo json_encode(['isAuthenticated' => $isAuthenticated]);
?>