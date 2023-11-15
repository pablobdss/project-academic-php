// Esconde o conteúdo protegido inicialmente
$('#conteudoProtegido').hide();

// Função para verificar a autenticação
function verificarAutenticacao() {
    fetch('../../php/verifica_autenticacao.php')
        .then(response => response.json())
        .then(data => {
            // Se o usuário não estiver autenticado, redirecione para a página de login
            if (!data.isAuthenticated) {
                window.location.href = '../../pages/login/login.html';
            } else {
                // Mostra o conteúdo protegido
                mostrarConteudoAutenticado();
            }
        })
}

// Função para mostrar o conteúdo autenticado usando jQuery
function mostrarConteudoAutenticado() {
    $('#conteudoProtegido').show();
}

// Chama a função de verificação quando a página é carregada
$(function () {
    verificarAutenticacao();
});
