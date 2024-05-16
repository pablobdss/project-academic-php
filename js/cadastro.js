$(document).ready(function () {
    $('#registerForm').submit(function (event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        // Obtém os dados do formulário
        var formData = $(this).serialize();

        // Faz a requisição AJAX para o arquivo de cadastro.php
        $.ajax({
            url: '../../php/cadastro.php', // Caminho para o arquivo PHP
            type: 'POST',
            data: formData, // Dados a serem enviados para o PHP
            dataType: 'json',
            success: function (response) {
                // Lógica para lidar com a resposta do PHP
                console.log(response);
                if (response.success) {
                    // Se o cadastro for bem sucedido, redireciona para a página de login
                    window.location.href = '../../login.html';
                } else {
                    // Se houver erros, exibe os erros para o usuário
                    alert(response.message);
                }
            },
            error: function (xhr, status, error) {
                // Trata erros de requisição
                console.error(error);
            }
        });
    });
});
