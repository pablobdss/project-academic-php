<?php
include_once('db_conn.php');

$query = "SELECT tipo, nome FROM opcoes_agendamento";
$result = mysqli_query($conexao, $query);

$opcoes_agendamento = array();

while ($row = mysqli_fetch_assoc($result)) {
    $tipo = $row['tipo'];
    $nome = $row['nome'];

    // Adiciona cada opção ao array associativo pelo tipo
    if (!isset($opcoes_agendamento[$tipo])) {
        $opcoes_agendamento[$tipo] = array();
    }

    // Adiciona o nome da opção ao array do tipo correspondente
    $opcoes_agendamento[$tipo][] = $nome;
}

// Converte o array para formato JSON com formatação para fácil leitura
$options_gerado = json_encode($opcoes_agendamento, JSON_PRETTY_PRINT);

// Apenas envie o JSON para o JavaScript
echo $options_gerado;
?>
