// Carregue os dados do endpoint PHP usando uma requisição assíncrona (AJAX)
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Parse o JSON
      var agendamentos = JSON.parse(xhr.responseText);

      // Agora você pode acessar a variável 'agendamentos' aqui
      console.log(agendamentos);

      // Use a variável 'agendamentos' conforme necessário
    } else {
      console.error('Erro ao carregar os dados do banco de dados.');
    }
  }
};

xhr.open('GET', '../../php/perfil.php', true);
xhr.send();