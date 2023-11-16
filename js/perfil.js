$(function() {
    loadTable();
    function loadTable(){
        $.ajax({
            url: '../../json/agendamentos.json',
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
                    console.log(agendamentos_id)
                    
                    setupEditModal();
                    setupDeleteModal();
                    
                    console.log('ID do agendamento a ser excluído:', agendamentos_id);
                    
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
            // Abre o modal ao clicar no botão de edição
            $('#myRescheduleModal').show();
        });
        
        $('#rescheduleClose').on('click', function () {
                // Fecha o modal ao clicar no botão "Não"
                $('#myRescheduleModal').hide();
            });
            
            $('#rescheduleOpen').on('click', function () {
                console.log('Remarcar');
                $('#myRescheduleModal').hide();
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
                $('#cancelOpen').off('click').on('click', function () {
                    // Chama a função para deletar do JSON
                    deleteItemFromJSON(idToDelete);
                    $('#cancelModal').hide();
            });
            
            $('#cancelClose').on('click', function () {
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
    
    // function updateTable() {
    //     $.ajax({
    //         url: '../../json/agendamentos.json',
    //         type: 'GET',
    //         dataType: 'json',
    //         success: function(agendamentos) {
    //             if (agendamentos && agendamentos.length > 0) {

    //                 agendamentos.sort(function(a, b) {
    //                     var dateA = new Date(a.data_agendada);
    //                     var dateB = new Date(b.data_agendada);
    
    //                     // Primeiro ordena pela data
    //                     if (dateA < dateB) return -1;
    //                     if (dateA > dateB) return 1;
    
    //                     // Se as datas forem iguais, ordena pela hora
    //                     var horaA = a.hora_agendada.split(':').join('');
    //                     var horaB = b.hora_agendada.split(':').join('');
    
    //                     return horaA - horaB;
    //                 });

    //                 var tabela = "<tr>";
    //                 tabela += "<th>Data Agendada</th>";
    //                 tabela += "<th>Horario Marcado</th>";
    //                 tabela += "<th>Corte de Cabelo</th>";
    //                 tabela += "<th>Estilo de Barba</th>";
    //                 tabela += "<th class='acao'>Remarcar</th>";
    //                 tabela += "<th class='acao'>Cancelar</th>";
    //                 tabela += "</tr>";
                    
    //                 for (var i = 0; i < agendamentos.length; i++) {
    //                     var dataFormatada = formatarData(agendamentos[i].data_agendada);
    //                     tabela += "<tr>";
    //                     tabela += "<td>" + dataFormatada + "</td>";
    //                     tabela += "<td>" + agendamentos[i].hora_agendada + "</td>";
    //                     tabela += "<td>" + agendamentos[i].corte_esc + "</td>";
    //                     tabela += "<td>" + agendamentos[i].barba_esc + "</td>";
    //                     tabela += '<td class="acao"><button class="edit-btn" dataAgendamentoId="' + agendamentos[i].agendamento_id + '"><i class="bx bx-edit"></i></button></td>';
    //                     tabela += '<td class="acao"><button class="delete-btn" dataAgendamentoId="' + agendamentos[i].agendamento_id + '"><i class="bx bx-x"></i></button></td>';
    //                     tabela += "</tr>";
    //                 }

    //                 $('#tabelaAgendamentos').html(tabela);
    //                 console.log('Tabela atualizada com os novos dados.');
    //                 setupEditModal();
    //                 setupDeleteModal();
    //             } else {
    //                 console.error('O JSON está vazio ou não é um array.');
    //             }
    //         },
    //         error: function(xhr, status, error) {
    //             console.error('Erro ao carregar os dados do banco de dados. Status:', xhr.status, 'Mensagem:', xhr.statusText);
    //         }
    //     });
    // }
    
});