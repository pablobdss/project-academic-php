<?php
include_once('db_conn.php');
if(isset($_POST['submit_cadastro'])){
    
        $nome = $_POST['nome'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $telefone = $_POST['telefone'];
        $sexo = $_POST['sexo'];
        $data_nasc = $_POST['data_nascimento'];

        $result = mysqli_query($conexao, "INSERT INTO usuarios (nome, password, email, telefone, sexo, data_nasc) 
        VALUES('$nome', '$password', '$email', '$telefone', '$sexo', '$data_nasc')");

        header('Location: ../../../project-academic-php/index.html');
        exit;
    }
?>