<?php
include_once('db_conn.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit_cadastro'])) {
    // Obtém os dados do formulário
    $nome = $_POST['nome'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $sexo = $_POST['sexo'];
    $data_nasc = $_POST['data_nascimento'];

    // Prepare a instrução SQL para inserir os dados na tabela 'usuarios'
    $sql = "INSERT INTO usuarios (nome, password, email, telefone, sexo, data_nasc) 
        VALUES (?, ?, ?, ?, ?, ?)";

    // Prepare a declaração
    $stmt = $conexao->prepare($sql);

    // Verifica se a preparação da declaração foi bem-sucedida
    if ($stmt) {
        // Vincule os parâmetros e execute a declaração
        $stmt->bind_param('ssssss', $nome, $password, $email, $telefone, $sexo, $data_nasc);
        $stmt->execute();

        // Verifica se a execução foi bem-sucedida
        if ($stmt->affected_rows > 0) {
            // Cadastro realizado com sucesso
            header('Location: ../../../project-academic-php/index.html');
            exit;
        } else {
            // Erro ao inserir no banco de dados
            echo 'Erro ao cadastrar.';
        }

        // Feche a declaração
        $stmt->close();
    } else {
        // Erro na preparação da declaração
        echo 'Erro na preparação da declaração.';
    }

    // Feche a conexão
    $conexao->close();
}
?>
