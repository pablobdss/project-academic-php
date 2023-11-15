$(function() {
    $.ajax({
        url: '../../json/agendamentos.json',
        type: 'GET',
        dataType: 'json',
        success: function(agendamentos) {
            if (agendamentos && agendamentos.length > 0) {
                var tabela = "<tr>";
                tabela += "<th>Data Agendada</th>";
                tabela += "<th>Horario Marcado</th>";
                tabela += "<th>Corte de Cabelo</th>";
                tabela += "<th>Estilo de Barba</th>";
                tabela += "<th class='acao'>Remarcar</th>";
                tabela += "</tr>";

                for (var i = 0; i < agendamentos.length; i++) {
                    var dataFormatada = formatarData(agendamentos[i].data_agendada);

                    tabela += "<tr>";
                    tabela += "<td>" + dataFormatada + "</td>";
                    tabela += "<td>" + agendamentos[i].hora_agendada + "</td>";
                    tabela += "<td>" + agendamentos[i].corte_esc + "</td>";
                    tabela += "<td>" + agendamentos[i].barba_esc + "</td>";
                    tabela += '<td class="acao"><button class="edit-btn"><i class="bx bx-edit"></i></button></td>';
                    tabela += "</tr>";
                }

                $('#tabelaAgendamentos').html(tabela);

                // Adicione um ouvinte de evento usando jQuery para a classe edit-btn
                $(function() {
                    $('.edit-btn').on('click', function() {
                        // Abre o modal ao clicar no botão de edição
                        $('#myModal').show();
                    });
        
                    $('#rescheduleClose').on('click', function() {
                        // Fecha o modal ao clicar no botão de fechar
                        $('#myModal').hide();
                    });
        
                    $('#rescheduleOpen').on('click', function() {
                        // Lógica para remarcação (caso necessário)
                        console.log('Remarcar');
                        $('#myModal').hide();
                    });
                });
            } else {
                console.error('O JSON está vazio ou não é um array.');
            }
        },
        error: function(xhr, status, error) {
            console.error('Erro ao carregar os dados do banco de dados. Status:', xhr.status, 'Mensagem:', xhr.statusText);
        }
    });

    // Função para formatar a data no formato "DD MM YYYY"
    function formatarData(data) {
        var dataObj = new Date(data);
        var dia = dataObj.getDate().toString().padStart(2, '0');
        var mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
        var ano = dataObj.getFullYear();
        return dia + '/' + mes + '/' + ano;
    }
});
