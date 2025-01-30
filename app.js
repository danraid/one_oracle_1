// Lista de amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); // Remove espaços extras

    // Validação: impede nomes vazios
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona o nome à lista
    listaAmigos.push(nome);

    // Atualiza a exibição da lista
    atualizarLista();

    // Limpa o campo de entrada
    inputNome.value = "";
}

// Função para atualizar a lista na tela
function atualizarLista() {
    let ulLista = document.getElementById("listaAmigos");
    ulLista.innerHTML = ""; // Limpa a lista antes de atualizar

    listaAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ulLista.appendChild(li);
    });
}
