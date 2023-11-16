// Esconde o conteúdo protegido inicialmente
$('#conteudoProtegido').hide();

// Função para verificar a autenticação
function verificarAutenticacao() {
    fetch('../../php/verifica_autenticacao.php')
        .then(response => response.json())
        .then(data => {
            console.log("olaa")
            if (!data.isAuthenticated) {
                window.location.href = '../../pages/login/login.html';
            } else {
                mostrarConteudoAutenticado(); // Mostra o conteúdo autenticado
                atualizarMenu(true); // Atualiza o menu com autenticação verdadeira
            }
        })
        .catch(error => {
            console.error('Erro na verificação de autenticação:', error);
        });
}

function mostrarConteudoAutenticado() {
    $('#conteudoProtegido').show(); // Mostra o conteúdo autenticado
}

function atualizarMenu(isAuthenticated) {
    if (isAuthenticated) {
        $('#cadastroLink, #loginLink').hide();
        $('#menuLink').show();
    } else {
        $('#cadastroLink, #loginLink').show();
        $('#menuLink').hide();
    }
}

$(function () {
    verificarAutenticacao();
});

// Função para fazer logout
function logout() {
    // Redirecione para o arquivo de logout
    window.location.href = '../../php/logout.php';
}