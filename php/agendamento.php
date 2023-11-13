<?php
// Inclua o arquivo de conexão
include_once('db_conn.php');
include_once('verifica_login.php');

// Inicializa a resposta como um array
$response = array();

// Verifica se o formulário foi submetido
if(isset($_POST['submit_agendamento'])){
    // Obtenha os dados do formulário
    $data_agendada = mysqli_real_escape_string($conexao, $_POST['data_agendamento']);
    $hora_agendada = mysqli_real_escape_string($conexao, $_POST['horarios']);
    $corte_esc = mysqli_real_escape_string($conexao, $_POST['tipos_cortes']);
    $barba_esc = mysqli_real_escape_string($conexao, $_POST['tipos_barbas']);

    // Prepare a instrução SQL para a inserção
    $sql = "INSERT INTO agendamentos (data_agendada, hora_agendada, corte_esc, barba_esc) VALUES (?, ?, ?, ?)";

    // Prepare a declaração
    $stmt = $conexao->prepare($sql);

    // Verifica se a preparação da declaração foi bem-sucedida
    if ($stmt) {
        // Vincule os parâmetros e execute a declaração
        $stmt->bind_param('ssss', $data_agendada, $hora_agendada, $corte_esc, $barba_esc);
        $stmt->execute();

        // Verifica se a execução foi bem-sucedida
        if ($stmt->affected_rows > 0) {
            // Redireciona para o menu
            header('Location: ../menu/menu.html');
            exit;
        } else {
            $response['success'] = false;
            $response['error'] = 'Erro ao inserir no banco de dados. Detalhes: ' . $stmt->error;
        }

        // Feche a declaração
        $stmt->close();
    } else {
        $response['success'] = false;
        $response['error'] = 'Erro na preparação da declaração. Detalhes: ' . $conexao->error;
    }

    // Feche a conexão
    $conexao->close();
} else {
    $response['success'] = false;
    $response['error'] = 'Formulario nao submetido corretamente.';
}

// Remova qualquer saída anterior
ob_clean();

// Envia a resposta como JSON
header('Content-Type: application/json');
echo json_encode($response);
exit;
?>
