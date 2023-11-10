<?php
include_once('db_conn.php');
if(isset($_POST['submit'])){
    
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $sexo = $_POST['sexo'];
        $data_nasc = $_POST['data_nascimento'];

        $result = mysqli_query($conexao, "INSERT INTO usuarios (nome, email, telefone, sexo, data_nasc) 
        VALUES('$nome', '$email', '$telefone', '$sexo', '$data_nasc')");
    }
?>