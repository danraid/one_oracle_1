// Lista de amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); // Remove espaços extras

    // Expressão regular para validar apelidos (mínimo 2 letras, não apenas símbolos)
    let regexNomeValido = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]*$/;

    // Validação: impede nomes vazios, muito curtos ou apenas símbolos
    if (!regexNomeValido.test(nome)) {
        alert("Por favor, insira um nome válido com pelo menos 2 letras.");
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

    listaAmigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`; // Adiciona numeração aos nomes
        li.classList.add("item-lista"); // Classe CSS para melhor visualização
        ulLista.appendChild(li);
    });
}


