document.addEventListener('DOMContentLoaded', function () {
    const dataInput = document.getElementById('data_agendamento');

    // Obter a data de hoje
    const hoje = new Date();

    // Adicionar um dia para garantir que a data mínima seja sempre a partir de amanhã
    hoje.setDate(hoje.getDate() + 1);

    // Formatar a data no formato DD-MM-YYYY
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Mês é base 0, por isso é necessário adicionar 1
    const ano = hoje.getFullYear();
    const dataFormatada = `${ano}-${mes}-${dia}`;

    // Configurar a data mínima
    if (dataInput) {
        dataInput.min = dataFormatada;

        // Adicionar um ouvinte de evento ao selecionar a data
        dataInput.addEventListener('input', function () {
            const dataSelecionada = new Date(dataInput.value);
            const diaSemana = dataSelecionada.getDay();

            // Dia da semana 6 é sábado e o dia da semana 0 é domingo
            if (diaSemana === 5 || diaSemana === 6) {
                alert('Escolha uma data que não seja sábado ou domingo.');
                dataInput.value = ''; // Limpar o valor do input
            }
        });
    }
});

document.getElementById('valida_form').addEventListener('submit', function (event) {
    console.log('Script executado');
    var corteCabelo = document.getElementById('tipos_cortes').value;
    var estiloBarba = document.getElementById('tipos_barbas').value;

    if (corteCabelo === 'nenhum' && estiloBarba === 'nenhum') {
        alert('Por favor, escolha pelo menos um corte de cabelo ou um estilo de barba.');
        event.preventDefault(); // Impede o envio do formulário
    } else {
        alert("Agendamento realizado com Sucesso!")
    }
});

// Enviar solicitação ao servidor usando fetch
fetch('../../php/agendamento.php', {
    method: 'POST',
    body: formData,
})
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Agendamento realizado com sucesso!');
            window.location.href = '../menu/menu.html';
        } else {
            // Se houver um erro, exibir a mensagem de erro
            alert('Erro ao processar agendamento: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Erro ao processar agendamento:', error);
        alert('Erro ao processar agendamento:', error);
    });