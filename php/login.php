<?php
    // Início da sessão
    session_start();

    // Verifica se o formulário de login foi submetido e se os campos de e-mail e senha não estão vazios
    if (isset($_POST['submit_login']) && !empty($_POST['email']) && !empty($_POST['password'])) {
        // Inclui o arquivo de conexão com o banco de dados
        include_once('db_conn.php');

        // Obtém e filtra os valores do formulário
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Cria a query para buscar o usuário no banco de dados
        $sql = "SELECT * FROM usuarios WHERE email = '$email' AND password = '$password'";

        // Executa a query no banco de dados
        $result = $conexao->query($sql);

        // Verifica se a consulta retornou algum resultado
        if ($result && $result->num_rows > 0) {
            // Se as credenciais estão corretas, cria a sessão e redireciona para o menu
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            header('Location: menu.php');
            exit;
        } else {
            // Se as credenciais estão incorretas, destrói a sessão e redireciona para a página de login
            header('Location: ../../../project-academic-php/pages/login/index.html');
            session_destroy();
            exit;
        }
    } else {
        // Se os campos do formulário estiverem vazios, redireciona para a página de login
        header('Location: ../../../project-academic-php/pages/login/index.html');
        exit;
    }
?>
