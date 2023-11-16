<?php
// Inclui o arquivo de conexão
include_once('verifica_login.php');
include_once('db_conn.php');

$response = array();

if (isset($_POST['submit_agendamento'])) {
    $data_agendada = mysqli_real_escape_string($conexao, $_POST['data_agendamento']);
    $hora_agendada = mysqli_real_escape_string($conexao, $_POST['horarios']);
    $corte_esc = mysqli_real_escape_string($conexao, $_POST['tipos_cortes']);
    $barba_esc = mysqli_real_escape_string($conexao, $_POST['tipos_barbas']);

    session_start(); // Inicia a sessão se ainda não foi iniciada
    $user_id = $_SESSION['id']; // Obtém o user_id da sessão

    // Prepare a instrução SQL para a inserção
    $sql = "INSERT INTO agendamentos (data_agendada, hora_agendada, corte_esc, barba_esc, user_id) VALUES (?, ?, ?, ?, ?)";

    // Prepare a declaração
    $stmt = $conexao->prepare($sql);

    if ($stmt) {
        $stmt->bind_param('ssssi', $data_agendada, $hora_agendada, $corte_esc, $barba_esc, $user_id);
        $stmt->execute();

        if ($stmt->affected_rows > 0) {
            $response['success'] = true;
            $response['message'] = 'Agendamento realizado com sucesso!';
            header('Location: ../../../project-academic-php/pages/menu/menu.html');
            include('atualiza_agendamentos.php');
            exit;
        } else {
            $response['success'] = false;
            $response['error'] = 'Erro ao inserir no banco de dados. Detalhes: ' . $stmt->error;
        }

        $stmt->close();
    } else {
        $response['success'] = false;
        $response['error'] = 'Erro na preparação da declaração. Detalhes: ' . $conexao->error;
    }

    $conexao->close();
} else {
    $response['success'] = false;
    $response['error'] = 'Formulário não submetido corretamente.';
}

ob_clean();
header('Content-Type: application/json');
echo json_encode($response);
exit;
?>
