<?php
    include_once('db_conn.php');

    // Recupera o agendamento_id do parâmetro POST
    $agendamento_id = $_POST['agendamento_id'];

    // Consulta SQL para excluir o agendamento pelo agendamento_id
    $sql = "DELETE FROM agendamentos WHERE agendamento_id = $agendamento_id";
    printf("ID A SER EXCLUIDO ".$agendamento_id);
    if ($conexao->query($sql) === TRUE) {
        echo "Agendamento excluído com sucesso";
        include('atualiza_agendamentos.php');
    } else {
        echo "Erro ao excluir agendamento: " . $conexao->error;
    }
    //Fecha a conexao
    $conexao->close();
?>