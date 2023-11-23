<?php
// Inclui o arquivo de verificação de login e o arquivo de conexão com o banco de dados
include_once('verifica_login.php');
include_once('db_conn.php');

// Cria um array para a resposta da requisição
$response = array();

// Verifica se o formulário foi submetido corretamente
if (isset($_POST['submit_remarcacao'])) {
    // Obtém e escapa os valores do formulário para prevenir SQL injection
    $data_agendada = mysqli_real_escape_string($conexao, $_POST['remarcao_data']);
    $hora_agendada = mysqli_real_escape_string($conexao, $_POST['remarcacao_horarios']);
    $corte_esc = mysqli_real_escape_string($conexao, $_POST['tipos_cortes_remarcacao']);
    $barba_esc = mysqli_real_escape_string($conexao, $_POST['tipos_barbas_remarcacao']);
    $agendamento_id = mysqli_real_escape_string($conexao, $_POST['agendamento_id']);

    // Verifica se já existe um agendamento para essa data e hora
    $sql_verifica = "SELECT COUNT(*) AS total FROM agendamentos WHERE data_agendada = ? AND hora_agendada = ?";
    $stmt_verifica = $conexao->prepare($sql_verifica);
    $stmt_verifica->bind_param('ss', $data_agendada, $hora_agendada);
    $stmt_verifica->execute();
    $result_verifica = $stmt_verifica->get_result();
    $row_verifica = $result_verifica->fetch_assoc();

    // Se já existir agendamento para essa data e hora, retorna um erro
    if ($row_verifica['total'] > 0) {
        $response['success'] = false;
        $response['error'] = 'Já existe um agendamento para esta data e hora.';
    } else {
        // Prepara a instrução SQL para a inserção do agendamento
        $sql = "UPDATE agendamentos SET data_agendada = ?, hora_agendada = ?, corte_esc = ?, barba_esc = ? WHERE agendamento_id = ?";

        $stmt = $conexao->prepare($sql);

        if ($stmt) {
            // Faz o bind dos parâmetros e executa a inserção do agendamento
            $stmt->bind_param('ssssi', $data_agendada, $hora_agendada, $corte_esc, $barba_esc, $agendamento_id);
            $stmt->execute();

            // Se a inserção foi bem sucedida, retorna sucesso, caso contrário, retorna um erro
            if ($stmt->affected_rows > 0) {
                $response['success'] = true;
                $response['message'] = 'Agendamento realizado com sucesso!';
                include('atualiza_agendamentos.php');
                header('Location: ../../../project-academic-php/pages/menu/menu.html');
            } else {
                $response['success'] = false;
                $response['error'] = 'Erro ao inserir no banco de dados. Detalhes: ' . $stmt->error;
            }

            $stmt->close(); // Fecha o statement
        } else {
            $response['success'] = false;
            $response['error'] = 'Erro na preparação da declaração. Detalhes: ' . $conexao->error;
        }
    }

    $conexao->close(); // Fecha a conexão com o banco de dados
} else {
    $response['success'] = false;
    $response['error'] = 'Formulario nao submetido corretamente.';
}
?>
