$(function() {
    // Faz a requisição AJAX para verificar a autenticação
    $.ajax({
        url: '../project-academic-php/php/verifica_autenticacao.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            // Limpa o conteúdo atual do menu
            $('#menuList').empty();

            if (response.isAuthenticated) {
                // Usuário autenticado, adiciona links específicos para usuário logado
                addMenuItem('HOME', 'index.html', 'paginaInicial');
                addMenuItem('MENU', 'pages/menu/menu.html', 'menuLink');
            } else {
                // Usuário não autenticado, adiciona links específicos para usuário não logado
                addMenuItem('HOME', 'index.html', 'paginaInicial');
                addMenuItem('CADASTRO', 'pages/cadastro/cadastro.html', 'cadastroLink');
                addMenuItem('LOGIN', 'pages/login/login.html', 'loginLink');
            }
        },
        error: function(xhr, status, error) {
            console.error('Erro ao verificar autenticação:', error);
        }
    });

    // Função para adicionar itens ao menu dinamicamente
    function addMenuItem(text, href, id) {
        // Cria um novo elemento <li> e <a>
        var newItem = $('<li><a></a></li>');

        // Define os atributos do link (<a>)
        newItem.find('a')
            .attr('href', href)
            .attr('id', id)
            .addClass('menu-link')
            .text(text);

        // Adiciona o novo item ao menu
        $('#menuList').append(newItem);
    }
});

