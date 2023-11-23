// Chamar a função para configurar a data mínima
configurarDataMinima();
// Chamar a função para validar o formulário
validarFormulario();
// Chamar a função para carregar os dados
carregarDados();

function configurarDataMinima() {
    document.addEventListener('DOMContentLoaded', function () {
        const dataInput = document.getElementById('data_agendamento');

        // Obter a data de hoje
        const hoje = new Date();

        // Adicionar um dia para garantir que a data mínima seja sempre a partir de amanhã
        hoje.setDate(hoje.getDate());

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
}
function validarFormulario() {
    // Ouve o evento de submissão do formulário
    document.getElementById('validaForm').addEventListener('submit', function (event) {
        // Obtém os valores dos campos
        var corteCabelo = document.getElementById('tipos_cortes').value;
        var estiloBarba = document.getElementById('tipos_barbas').value;

        // Verifica se nenhum corte de cabelo e nenhum estilo de barba foram selecionados
        if (corteCabelo === 'nenhum' && estiloBarba === 'nenhum') {
            // Exibe um alerta solicitando a seleção de pelo menos um corte ou estilo
            alert('Por favor, escolha pelo menos um corte de cabelo ou um estilo de barba.');
            event.preventDefault(); // Impede o envio do formulário
        } else {
            // Se pelo menos um corte ou estilo foi selecionado, exibe um alerta de sucesso
            alert("Agendamento realizado com Sucesso!")
            realizarAgendamento();
        }
    });
}
// Envia uma requisição AJAX para o arquivo agendamento.php
function realizarAgendamento() {
    $.ajax({
        url: '../../php/agendamento.php',
        type: 'POST',
        dataType: 'json',
        success: function(data) {
            if (data.success) {
                alert('Agendamento realizado com sucesso!');
                window.location.href = '../menu/menu.html';
            } else {
                console.error('Erro ao processar agendamento: ' + data.error);
            }
        },
        error: function(xhr, status, error) {
            console.error('Erro ao processar agendamento:', error);
        }
    });
}

function carregarDados() {
    // Faz uma requisição AJAX para o arquivo gerar.php
    $.ajax({
        url: '../../php/gerar.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Verifica se existe data retornada da requisição
            if (data) {
                // Chama a função populateSelect para preencher os campos do formulário
                populateSelect('tipos_cortes', data.corte_cabelo);
                populateSelect('tipos_barbas', data.estilo_barba);
                populateSelect('horarios', data.horario);
            } else {
                console.error('O JSON está vazio ou não é válido.'); // Mensagem de erro se o JSON estiver vazio ou inválido
            }
        },
        error: function(xhr, status, error) {
            // Se houver um erro na requisição, exibe no console
            console.error('Erro ao carregar os dados do arquivo JSON. Status:', xhr.status, 'Mensagem:', xhr.statusText);
        }
    });
}
// Função para preencher um elemento select com opções
function populateSelect(selectId, optionsArray) {
    const select = document.getElementById(selectId);

    // Itera sobre o array de opções
    optionsArray.forEach(option => {
        // Cria um elemento option para cada opção do array
        const optionElement = document.createElement('option');
        optionElement.value = option; // Define o valor da opção
        optionElement.text = option; // Define o texto da opção
        select.appendChild(optionElement); // Adiciona a opção ao elemento select
    });
}
