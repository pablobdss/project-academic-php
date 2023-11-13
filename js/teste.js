// Seleciona elementos do DOM
const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const agendaHorario = document.querySelector('#agenda-hora');
const agendaData = document.querySelector('#agenda-data');
const vCorte = document.querySelector('#corte-cabelo');
const vBarbaSty = document.querySelector('#barba-style');
const btnSalvar = document.querySelector('#salvar-button');

// Variáveis globais
let items;
let editIndex;

// Função para abrir o modal (com ou sem edição)
function openModal(edit = false, index = 0) {
    modal.classList.add('active');

    // Fecha o modal se clicar fora dele
    modal.onclick = (e) => {
        if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active');
        }
    };

    // Preenche os campos do modal se estiver editando
    if (edit) {
        agendaHorario.value = items[index].horario;
        agendaData.value = items[index].data;
        vCorte.value = items[index].corte;
        vBarbaSty.value = items[index].barba;
        editIndex = index;
    } else {
        // Limpa os campos se não estiver editando
        agendaHorario.value = '';
        agendaData.value = '';
        vCorte.value = '';
        vBarbaSty.value = '';
        editIndex = undefined;  // Certifica-se de que editIndex seja undefined para novo agendamento
    }
}

// Função para editar um item
function editItem(index) {
  openModal(true, index);
}

// Função para deletar um item
function deleteItem(index) {
  items.splice(index, 1);
  setItemsInLocalStorage();
  loadItems();
}

// Função para inserir um item na tabela
function insertItem(item, index) {
  let tr = document.createElement('tr');

  // Cria uma nova linha na tabela com os dados do item
  tr.innerHTML = `
    <td>${item.data}</td>
    <td>${item.horario}</td>
    <td>${item.corte}</td>
    <td>${item.barba}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit'></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbody.appendChild(tr);
}

// Adiciona um ouvinte de evento para o botão de salvar
btnSalvar.addEventListener('click', (e) => {
  e.preventDefault();

  // Verifica se os campos obrigatórios estão preenchidos
  if (agendaHorario.value === '' || agendaData.value === '' || vCorte.value === '' || vBarbaSty.value === '') {
    return;
  }

  // Atualiza o item se estiver editando, senão, cria um novo
  if (editIndex !== undefined) {
    items[editIndex].horario = agendaHorario.value;
    items[editIndex].data = agendaData.value;
    items[editIndex].corte = vCorte.value;
    items[editIndex].barba = vBarbaSty.value;
  } else {
    items.push({
      'Horario Agendado': agendaHorario.value,
      'Data Agendada': agendaData.value,
      'Corte Selecionado': vCorte.value,
      'Estilo de Barba': vBarbaSty.value,
    });
  }

  // Salva os itens no armazenamento local
  setItemsInLocalStorage();

  // Fecha o modal e recarrega os itens
  modal.classList.remove('active');
  loadItems();
  editIndex = undefined;
});

// Função para carregar os itens da tabela
function loadItems() {
  items = getItemsFromLocalStorage();
  tbody.innerHTML = '';
  items.forEach((item, index) => {
    insertItem(item, index);
  });
}

// Funções de obtenção e armazenamento de itens no armazenamento local
const getItemsFromLocalStorage = () => JSON.parse(localStorage.getItem('dbfunc')) || [];
const setItemsInLocalStorage = () => localStorage.setItem('dbfunc', JSON.stringify(items));

// Carrega os itens ao carregar a página
loadItems();
