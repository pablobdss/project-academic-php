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

    // Verifica se o e-mail ou telefone já existem no banco de dados
    $verifica_dados = $conexao->prepare("SELECT * FROM usuarios WHERE email = ? OR telefone = ?");
    $verifica_dados->bind_param('ss', $email, $telefone);
    $verifica_dados->execute();
    $result = $verifica_dados->get_result();

    if ($result->num_rows > 0) {
        // Se e-mail ou telefone já estiverem cadastrados
        echo json_encode(array('status' => 'error', 'message' => 'E-mail ou telefone já cadastrado.'));
        
        exit;
    } else {
        // Prepare a instrução SQL para inserir os dados na tabela 'usuarios'
        $sql = "INSERT INTO usuarios (nome, password, email, telefone, sexo, data_nasc) VALUES (?, ?, ?, ?, ?, ?)";

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
                echo json_encode(array('status' => 'success', 'message' => 'Cadastro realizado com sucesso.'));
                header('Location: ../../../project-academic-php/index.html');
            } else {
                // Erro ao inserir no banco de dados
                echo json_encode(array('status' => 'error', 'message' => 'Erro ao cadastrar.'));
            }

            // Feche a declaração
            $stmt->close();
        } else {
            // Erro na preparação da declaração
            echo 'Erro na preparação da declaração.';
        }
    }

    // Feche a conexão
    $conexao->close();
}
?>
