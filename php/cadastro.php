<?php
    include_once('db_conn.php'); // Inclui o arquivo de conexão com o banco de dados

    // Verifica se o formulário foi submetido
    if(isset($_POST['submit_cadastro'])){
    
        // Obtém os dados do formulário
        $nome = $_POST['nome'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $sexo = $_POST['sexo'];
        $data_nasc = $_POST['data_nascimento'];

        // Executa a consulta SQL para inserir os dados na tabela 'usuarios'
        $result = mysqli_query($conexao, "INSERT INTO usuarios (nome, password, email, telefone, sexo, data_nasc) 
            VALUES('$nome', '$password', '$email', '$telefone', '$sexo', '$data_nasc')");

        // Redireciona para a página inicial após o cadastro ser realizado
        header('Location: ../../../project-academic-php/index.html');
        exit;
    }
?>
