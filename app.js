// Lista de amigos
let listaAmigos = [];
let totalSorteios = 0; // Contador de sorteios
let listaSorteios = []; // Histórico de sorteios
let ultimoTamanhoLista = 0; // Guarda o tamanho da lista antes do último sorteio

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

    // Impede nomes duplicados na lista
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado! Insira um nome diferente.");
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
        li.classList.add("item-lista");
        ulLista.appendChild(li);
    });
}

// Função para sortear um amigo da lista
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    totalSorteios++; // Incrementa o número de sorteios
    let mensagem = `🎲 Sorteio #${totalSorteios}: <strong>${amigoSorteado}</strong>`;

    // Verifica se novos participantes foram adicionados após o último sorteio
    let novosParticipantes = listaAmigos.slice(ultimoTamanhoLista);
    if (totalSorteios > 1 && novosParticipantes.length > 0) {
        mensagem += ` (Novos participantes: ${novosParticipantes.join(", ")})`;
    }

    // Atualiza o tamanho da lista antes do próximo sorteio
    ultimoTamanhoLista = listaAmigos.length;

    // Salva no histórico de sorteios
    listaSorteios.push(amigoSorteado);

    // Exibe o histórico de sorteios
    let resultado = document.getElementById("resultado");
    let li = document.createElement("li");
    li.innerHTML = mensagem;
    resultado.appendChild(li);
}

