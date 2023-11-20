$(function() {
    // Faz a requisição AJAX para verificar a autenticação
    $.ajax({
        url: '../project-academic-php/php/verifica_autenticacao.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            if (response.isAuthenticated) {
                // Usuário autenticado, oculta o link de cadastro e login, exibe o link do menu
                $('#cadastroLink').hide();
                $('#loginLink').hide();
                $('#menuLink').show();
            } else {
                // Usuário não autenticado, mantém os links de cadastro e login visíveis, esconde o link do menu
                $('#cadastroLink').show();
                $('#loginLink').show();
                $('#menuLink').hide();
            }
        },
        error: function(xhr, status, error) {
            console.error('Erro ao verificar autenticação:', error);
        }
    });
});