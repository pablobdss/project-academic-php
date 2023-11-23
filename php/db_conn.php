<?php
    // Configurações do banco de dados
    $dbHost = "Localhost"; // Host do banco de dados (no caso, local)
    $dbUsername = "root"; // Nome de usuário do banco de dados
    $dbPassword = ""; // Senha do banco de dados (neste caso, vazia)
    $dbName = "db_studio"; // Nome do banco de dados a ser utilizado

    // Cria uma nova conexão com o banco de dados utilizando a classe mysqli
    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    // Verifica se ocorreu algum erro durante a conexão
    if ($conexao->connect_errno) {
        echo "Erro ao conectar ao banco de dados"; // Mensagem exibida se houver um erro na conexão
    } 
?>
