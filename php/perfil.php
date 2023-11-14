<?php
include_once('verifica_login.php');
include_once('db_conn.php');

// Recuperação dos Agendamentos
$user_id = $_SESSION['id'];
$sql = "SELECT * FROM agendamentos WHERE user_id = $user_id";

// Execute a consulta e processe os resultados
$result = $conexao->query($sql);

// Inicializa um array para armazenar os resultados
$agendamentos = array();

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Adiciona cada linha como um item no array
        $agendamentos[] = $row;
    }
}

// Converte o array para formato JSON
$agendamentos_json = json_encode($agendamentos);
printf($agendamentos_json);
// Envia o JSON para o JavaScript
echo "<script>var agendamentos = $agendamentos_json;</script>";
?>
