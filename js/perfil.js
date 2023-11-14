var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            // Parse o JSON
            var agendamentos = JSON.parse(xhr.responseText);

            if (agendamentos && agendamentos.length > 0) {
                // Crie a tabela HTML
                var tabela = "<tr>";
                tabela += "<th>Data Agendada</th>";
                tabela += "<th>Horario Marcado</th>";
                tabela += "<th>Corte de Cabelo</th>";
                tabela += "<th>Estilo de Barba</th>";
                tabela += "<th class='acao'>Editar</th>";
                tabela += "<th class='acao'>Excluir</th>";
                tabela += "</tr>";

                // Itere sobre os agendamentos e adicione as linhas à tabela
                for (var i = 0; i < agendamentos.length; i++) {
                    // Formate a data no formato "DD MM YYYY"
                    var dataFormatada = formatarData(agendamentos[i].data_agendada);
                  
                    tabela += "<tr>";
                    tabela += "<td>" + dataFormatada + "</td>";
                    tabela += "<td>" + agendamentos[i].hora_agendada + "</td>";
                    tabela += "<td>" + agendamentos[i].corte_esc + "</td>";
                    tabela += "<td>" + agendamentos[i].barba_esc + "</td>";
                    tabela += '<td class="acao"><button class="editar-btn"><i class="bx bx-edit"></i></button></td>';
                    tabela += '<td class="acao"><button class="excluir-btn"><i class="bx bx-trash"></i></button></td>';
                    tabela += "</tr>";
                  }

                // Adicione a tabela ao elemento HTML desejado (por exemplo, com id="tabelaAgendamentos")
                document.getElementById("tabelaAgendamentos").innerHTML = tabela;
            } else {
                console.error('O JSON está vazio ou não é um array.');
            }
        } else {
            console.error('Erro ao carregar os dados do banco de dados. Status:', xhr.status, 'Mensagem:', xhr.statusText);
        }
    }
};

xhr.open('GET', '../../json/agendamentos.json', true);
xhr.send();

// Função para formatar a data no formato "DD MM YYYY"
function formatarData(data) {
    var dataObj = new Date(data);
    var dia = dataObj.getDate().toString().padStart(2, '0');
    var mes = (dataObj.getMonth() + 1).toString().padStart(2, '0'); // Mês é base 0
    var ano = dataObj.getFullYear();
    return dia + '/' + mes + '/' + ano;
}