// Esconde o conteúdo protegido inicialmente
$('#conteudoProtegido').hide();

$(function () {
    // Realiza uma requisição para verificar a autenticação do usuário
    fetch('../../php/verifica_autenticacao.php')
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            // Verifica se o usuário não está autenticado
            if (!data.isAuthenticated) {
                // Redireciona para a página de login se não estiver autenticado
                window.location.href = '../../pages/login/login.html';
            } else {
                // Mostra o conteúdo protegido se o usuário estiver autenticado
                $('#conteudoProtegido').show();
            }
        })
        .catch(error => {
            // Se ocorrer algum erro na requisição, exibe o erro no console
            console.error('Erro na verificação de autenticação:', error);
        });
});



// Função para fazer logout
function logout() {
    // Redirecione para o arquivo de logout
    window.location.href = '../../php/logout.php';
}