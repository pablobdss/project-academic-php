<?php
include 'db_conn.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $data = $_POST["data"];
    $hora = $_POST["hora"];
    $corteCabelo = $_POST["corte_cabelo"];
    $estiloBarba = $_POST["estilo_barba"];

    //inserir dados na tabela do banco de dados (botei tabela_agendamentos por nao saber o nome dela)
    $sql = "INSERT INTO tabela_agendamentos (nome, data, hora, corte_cabelo, estilo_barba) VALUES (?, ?, ?, ?, ?)";

    //instrução sql
    $stmt = $conexao->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("sssss", $nome, $data, $hora, $corteCabelo, $estiloBarba);
        //executar instrução
        $stmt->execute();
        if ($stmt->affected_rows > 0) {
            echo "Agendamento realizado com sucesso!";
        } else {
            echo"Erro ao realizar o agendamento";
        }
        $stmt->close();
    } else {
        echo "Erro na preparação da instrução SQL.";
    }
    $conexao->close();
} else {
    echo "O formulário não foi submetido corretamente.";
}
?>