$(function() {
    loadTable();
    function loadTable(){
        $.ajax({
            url: '../../php/atualiza_agendamentos.php',
            type: 'GET',
            dataType: 'json',
            success: function(agendamentos) {
                if (agendamentos && agendamentos.length > 0) {
                    $('#semAgendamentos').hide();
                    agendamentos.sort(function(a, b) {
                        var dateA = new Date(a.data_agendada);
                        var dateB = new Date(b.data_agendada);
    
                        // Primeiro ordena pela data
                        if (dateA < dateB) return -1;
                        if (dateA > dateB) return 1;
    
                        // Se as datas forem iguais, ordena pela hora
                        var horaA = a.hora_agendada.split(':').join('');
                        var horaB = b.hora_agendada.split(':').join('');
    
                        return horaA - horaB;
                    });
    
                    var agendamentos_id = []
                    var tabela = "<tr>";
                    tabela += "<th>Data Agendada</th>";
                    tabela += "<th>Horario Marcado</th>";
                    tabela += "<th>Corte de Cabelo</th>";
                    tabela += "<th>Estilo de Barba</th>";
                    tabela += "<th class='acao'>Remarcar</th>";
                    tabela += "<th class='acao'>Cancelar</th>";
                    tabela += "</tr>";
                    
                    for (var i = 0; i < agendamentos.length; i++) {
                        var dataFormatada = formatarData(agendamentos[i].data_agendada);
                        agendamentos_id.push(agendamentos[i].agendamento_id)
                        tabela += "<tr>";
                        tabela += "<td>" + dataFormatada + "</td>";
                        tabela += "<td>" + agendamentos[i].hora_agendada + "</td>";
                        tabela += "<td>" + agendamentos[i].corte_esc + "</td>";
                        tabela += "<td>" + agendamentos[i].barba_esc + "</td>";
                        tabela += '<td class="acao"><button class="edit-btn" dataAgendamentoId="' + agendamentos[i].agendamento_id + '"><i class="bx bx-edit"></i></button></td>';
                        tabela += '<td class="acao"><button class="delete-btn" dataAgendamentoId="' + agendamentos[i].agendamento_id + '"><i class="bx bx-x"></i></button></td>';
                        tabela += "</tr>";
                    }
                    $('#tabelaAgendamentos').html(tabela);
                    
                    setupEditModal();
                    setupDeleteModal();
            
                } else {
                    console.error('O JSON está vazio ou não é um array.');
                    $('#semAgendamentos').show();
                }
                
            },
            error: function(xhr, status, error) {
                console.error('Erro ao carregar os dados do banco de dados. Status:', xhr.status, 'Mensagem:', xhr.statusText);
            }
            
        });
    }
   
    // Função para formatar a data no formato "DD MM YYYY"
    function formatarData(data) {
        var dataObj = new Date(data);
        var dia = dataObj.getDate().toString().padStart(2, '0');
        var mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
        var ano = dataObj.getFullYear();
        return dia + '/' + mes + '/' + ano;
    }

    function setupEditModal() {
        $('.edit-btn').on('click', function () {
            var agendamentoId = $(this).attr('dataAgendamentoId');
            // Abre o modal ao clicar no botão de edição
            $('#confirmRescheduleModal').show();
        });
        
        $('#rescheduleYes').on('click', function () {
            $('#modalRemarcacao').show();
            $('#confirmRescheduleModal').hide();
            carregarDados();
        });
        
        $('#rescheduleNo').on('click', function () {
            // Fecha o modal ao clicar no botão "Não"
            $('#confirmRescheduleModal').hide();
        });
        
        $('#returnFormModal').on('click', function () {
            // Fecha o modal ao clicar no botão "Não"
            $('#modalRemarcacao').hide();
        });
        
        $('#remarcacaoForm').submit(function(event) {
            // event.preventDefault(); // Evita o comportamento padrão do formulário
        
            const agendamentoId = $(this).data('dataAgendamentoId');
        
            // Obtém os dados do formulário
            const formData = {
                agendamento_id: agendamentoId,
                remarcao_data: $('#remarcao_data').val(),
                remarcao_horarios: $('#remarcao_horarios').val(),
                tipos_cortes_remarcacao: $('#tipos_cortes_remarcacao').val(),
                tipos_barbas_remarcacao: $('#tipos_barbas_remarcacao').val(),
                submit_remarcacao: true // Adiciona um campo para identificar a submissão do formulário
            };
        
            // Envia os dados para o arquivo PHP
            $.ajax({
                url: '../../php/remarcacao.php',
                type: 'POST',
                data: formData,
                dataType: 'json',
                success: function(response) {
                    // Lógica para lidar com a resposta do PHP
                    console.log("Success", response);
                },
                error: function(xhr, status, error) {
                    // Trata erros de requisição
                    console.error(error);
                }
            });
        });
        
    }
        
    function setupDeleteModal() {
        // Evento associado ao clique no botão de cancelar
        $('.delete-btn').on('click', function () {
            // Abre o modal ao clicar no botão de cancelar
            $('#cancelModal').show();
            // Obtém o agendamento_id associado ao botão clicado
            var idToDelete = $(this).attr('dataAgendamentoId');
            
            // Evento associado ao clique no botão "Sim" do modal de cancelamento
            $('#cancelYes').off('click').on('click', function () {
                // Chama a função para deletar do JSON
                deleteItemFromJSON(idToDelete);
                $('#cancelModal').hide();
            });
        
            $('#cancelNo').on('click', function () {
                // Fecha o modal ao clicar no botão "Não" 
                $('#cancelModal').hide();
            });
        });
    }
    
    function deleteItemFromJSON(agendamentos_id) {
        $.ajax({
            url: '../../php/deleta_agendamentos.php',
            type: 'POST',
            data: { agendamento_id: agendamentos_id },
            success: function (data) {
                console.log('Agendamento excluído com sucesso:', data);
                location.reload();
            },
            error: function (xhr, status, error) {
                console.error('Erro ao excluir agendamento. Status:', xhr.status, 'Mensagem:', xhr.statusText);
            }
        });
    }    
});












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