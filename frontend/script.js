const API = "http://localhost:8080"

document.addEventListener("DOMContentLoaded", iniciar)

function iniciar() {
    carregarSelecoes()
    carregarJogadores()

    const form = document.getElementById("formJogador")
    form.addEventListener("submit", cadastrarOuAtualizar)
}

async function carregarSelecoes() {
    try {
        const response = await fetch(`${API}/copas/selecoes`)
        const selecoes = await response.json()
        const select = document.getElementById("selecao")
        select.innerHTML = '<option value="">Selecione...</option>'

        selecoes.forEach(s => {
            select.innerHTML += `<option value="${s.id}">${s.nome}</option>`
        })
    } catch (error) {
        console.error("Erro ao carregar seleções", error)
    }
}

async function carregarJogadores() {
    try {
        const response = await fetch(`${API}/copas`);
        if (response.status === 204) {
            document.getElementById("listaJogadores").innerHTML = "<tr><td colspan='5'>Nenhum jogador encontrado</td></tr>";
            return;
        }
        const jogadores = await response.json();
        const tabela = document.getElementById("listaJogadores")
        tabela.innerHTML = ""

        jogadores.forEach(j => {
            tabela.innerHTML += `
            <tr>
                <td>${j.nome}</td>
                <td>${j.numeroCamisa}</td>
                <td>${j.posicao}</td>
                <td>${j.selecao?.nome || "Não informada"}</td>
                <td>
                    <button onclick="prepararEdicao(${j.id})">Editar</button>
                    <button onclick="excluirJogador(${j.id})">Excluir</button>
                </td>
            </tr>`
        })
    } catch (error) {
        console.error("Erro ao carregar jogadores", error)
    }
}

async function cadastrarOuAtualizar(event) {
    event.preventDefault();

    const id = document.getElementById("jogadorId").value;
    const nome = document.getElementById("nome").value;
    const numero = document.getElementById("numeroCamisa").value;
    const data = document.getElementById("dataNascimento").value;
    const posicao = document.getElementById("posicao").value;
    const selecaoId = document.getElementById("selecao").value;
    const radioTitular = document.querySelector('input[name="titular"]:checked');
    const aceitouTermos = document.getElementById("termos").checked;

    if (nome == "" || numero == "" || data == "" || posicao == "" || selecaoId == "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (!radioTitular) {
        alert("Por favor, escolha se o jogador é titular ou não!");
        return;
    }

    if (!aceitouTermos) {
        alert("Por favor, Ative a RESENHA!");
        return;
    }

    const jogador = {
        nome: nome,
        numeroCamisa: numero,
        dataNascimento: data,
        posicao: posicao,
        selecao: {
            id: selecaoId
        },
        titular: radioTitular.value === "true"
    };

    let url = `${API}/copas`;
    let metodo = "POST";

    if (id != "") {
        url = `${API}/copas/${id}`;
        metodo = "PUT";
    }

    try {
        const response = await fetch(url, {
            method: metodo,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jogador)
        });

        if (response.ok) {
            alert("Sucesso!");
            document.getElementById("formJogador").reset();
            document.getElementById("jogadorId").value = "";
            carregarJogadores();
        } else {
            alert("Erro ao salvar no servidor.");
        }
    } catch (error) {
        alert("Erro de conexão.");
    }
}

async function prepararEdicao(id) {
    try {
        const response = await fetch(`${API}/copas/${id}`);
        const j = await response.json();

        document.getElementById("jogadorId").value = j.id;
        document.getElementById("nome").value = j.nome;
        document.getElementById("numeroCamisa").value = j.numeroCamisa;
        document.getElementById("dataNascimento").value = j.dataNascimento;
        document.getElementById("posicao").value = j.posicao;
        document.getElementById("selecao").value = j.selecao?.id || "";

        const valorTitular = j.titular ? "true" : "false";
        const radio = document.querySelector(`input[name="titular"][value="${valorTitular}"]`);
        if (radio) radio.checked = true;

        window.scrollTo(0, 0);
    } catch (error) {
        console.error("Erro ao carregar para edição", error);
    }
}

async function excluirJogador(id) {
    if (confirm("Deseja realmente tirar ele da copa?")) {
        try {
            await fetch(`${API}/copas/${id}`, { method: "DELETE" });
            carregarJogadores();
        } catch (error) {
            console.error("Erro ao excluir", error);
        }
    }
}