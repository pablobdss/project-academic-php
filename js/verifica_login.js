// Função para verificar a autenticação
function verificarAutenticacao() {
    fetch('../../php/verifica_autenticacao.php')
        .then(response => response.json())
        .then(data => {
            // Se o usuário não estiver autenticado, redirecione para a página de login
            if (!data.isAuthenticated) {
                window.location.href = '../../pages/login/login.html';
            } else {
                // Se o usuário estiver autenticado, exiba o conteúdo oculto
                document.getElementById('conteudoProtegido').classList.remove('escondido');
            }
        })
        // .catch(error => {
        //     alert('Erro ao verificar autenticação:', error);
        // });
        
}

// Chame a função de verificação quando a página for carregada
window.onload = verificarAutenticacao;