// Esconde o conteúdo protegido inicialmente
$('#conteudoProtegido').hide();

$(function () {
    fetch('../../php/verifica_autenticacao.php')
        .then(response => response.json())
        .then(data => {
            if (!data.isAuthenticated) {
                window.location.href = '../../pages/login/login.html';
            } else {
                $('#conteudoProtegido').show();
            }
        })
        .catch(error => {
            console.error('Erro na verificação de autenticação:', error);
        });
});


// Função para fazer logout
function logout() {
    // Redirecione para o arquivo de logout
    window.location.href = '../../php/logout.php';
}