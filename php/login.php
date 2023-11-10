<?php
    session_start();
    
    if(isset ($_POST['submit_login']) && !empty($_POST['email']) && !empty($_POST['password'])){
            
        include_once('db_conn.php');

        $email = $_POST['email'];
        $password = $_POST['password'];

        $sql = "SELECT * FROM usuarios WHERE email = '$email' and password = '$password'";

        $result = $conexao->query($sql);
        
        if ($result && $result->num_rows > 0) {
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            header('Location: menu.php');
            exit;
        } else {
            header('Location: ../../../project-academic-php/pages/login/index.html');
            session_destroy();
            exit;
        }

    }else{
        header('Location: ../../../project-academic-php/pages/login/index.html');
    }

?>
