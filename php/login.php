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

        // Cria a query parametrizada para buscar o usuário no banco de dados
        $sql = "SELECT * FROM usuarios WHERE email = ? AND password = ?";
        
        // Prepara a declaração
        $stmt = $conexao->prepare($sql);

        // Verifica se a preparação da declaração foi bem-sucedida
        if ($stmt) {
            // Vincula os parâmetros
            $stmt->bind_param('ss', $email, $password);

            // Executa a declaração
            $stmt->execute();

            // Armazena o resultado
            $result = $stmt->get_result();

            // Verifica se a consulta retornou algum resultado
            if ($result && $result->num_rows > 0) {

                // Obtém a linha do resultado
                $row = $result->fetch_assoc();

                // Armazena o ID do usuário na sessão
                $_SESSION['id'] = $row['id'];

                // Se as credenciais estão corretas, cria a sessão e redireciona para o menu
                $_SESSION['email'] = $email;
                $_SESSION['password'] = $password;
                header('Location: ../../../project-academic-php/pages/menu/menu.html');
                exit;
            } else {
                // Se as credenciais estão incorretas, redireciona para a página de login com uma mensagem de erro
                header('Location: ../../../project-academic-php/pages/login/login.html?error=1');
                exit;
            }

            // Fecha a declaração
            $stmt->close();
        } else {
            // Se a preparação da declaração falhar, redireciona para a página de login com uma mensagem de erro
            header('Location: ../../../project-academic-php/pages/login/login.html?error=2');
            exit;
        }
    } else {
        // Se os campos do formulário estiverem vazios, redireciona para a página de login com uma mensagem de erro
        header('Location: ../../../project-academic-php/pages/login/login.html?error=3');
        exit;
    }
?>
