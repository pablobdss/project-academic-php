function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function closeMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
}

function verificarAutenticacao() {
    fetch('../../php/verifica_autenticacao.php')
        .then(response => response.json())
        .then(data => {
            // Se o usuário não estiver autenticado, redirecione para a página de login
            if (!data.isAuthenticated) {
                $('#cadastroLink, #loginLink').show(); // Mostra os links de Cadastro e Login
                $('#menuLink').hide();
            } else {
                // Mostra o conteúdo protegido
                $('#cadastroLink, #loginLink').hide(); // Esconde os links de Cadastro e Login
                $('#menuLink').show()
            }
        })
}