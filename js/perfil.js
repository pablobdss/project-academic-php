// Verifique se a variável 'agendamentos' está definida
if (typeof agendamentos !== 'undefined') {
    // Loop através dos agendamentos e crie as linhas da tabela
    for (var i = 0; i < agendamentos.length; i++) {
        document.write('<tr>');
        document.write('<td>' + agendamentos[i]['data_agendada'] + '</td>');
        document.write('<td>' + agendamentos[i]['hora_agendada'] + '</td>');
        document.write('<td>' + agendamentos[i]['corte_esc'] + '</td>');
        document.write('<td>' + agendamentos[i]['barba_esc'] + '</td>');
        document.write('</tr>');
    }
}