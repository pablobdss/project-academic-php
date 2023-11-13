document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        const corteCabelo = document.getElementById('corte-cabelo').value;
        const estiloBarba = document.getElementById('barba').value;

        if (corteCabelo === 'nenhum' && estiloBarba === 'nenhum') {
            alert('Escolha pelo menos um corte de cabelo ou um estilo de barba.');
            event.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Obtendo referência aos elementos do formulário
    const horaInput = document.getElementById('hora');
    const selectMinutos = document.getElementById('minutos');

    // Definindo os horários disponíveis
    const horarios = [
        { inicio: 8, fim: 12 },  // Horários da manhã
        { inicio: 14, fim: 19 }, // Horários da tarde
    ];

    // Incremento em minutos para as opções do select
    const minutoIncremento = 10;

    // Iterando sobre os horários
    for (const horario of horarios) {
        for (let hora = horario.inicio; hora <= horario.fim; hora++) {
            // Definindo o limite máximo de minutos para a última hora
            const maxMinuto = (hora === horario.fim) ? 60 : 60;

            // Iterando sobre os minutos com o incremento especificado
            for (let minuto = 0; minuto < maxMinuto; minuto += minutoIncremento) {
                // Formatando a hora e o minuto com zero à esquerda, se necessário
                const horaFormatada = hora.toString().padStart(2, '0');
                const minutoFormatado = minuto.toString().padStart(2, '0');

                // Criando uma opção para o elemento select
                const opcao = document.createElement('option');
                opcao.value = `${horaFormatada}:${minutoFormatado}`;
                opcao.textContent = `${horaFormatada}:${minutoFormatado}`;

                // Adicionando a opção ao menu suspenso de minutos
                selectMinutos.appendChild(opcao);
            }
        }
    }

    // Definindo um valor padrão para os minutos
    selectMinutos.value = '08:00';

    // Adicionando um ouvinte de evento para ajustar a hora ao alterar os minutos
    selectMinutos.addEventListener('change', function () {
        horaInput.value = selectMinutos.value;
    });

    // Adicionando um ouvinte de evento ao alterar a hora diretamente
    horaInput.addEventListener('input', function () {
        selectMinutos.value = horaInput.value;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const dataInput = document.getElementById('data');

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
});

