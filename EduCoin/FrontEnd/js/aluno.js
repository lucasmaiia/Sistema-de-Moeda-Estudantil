/*const API_URL = "http://localhost:8080/alunos";

document.getElementById("alunoForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const aluno = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    rg: document.getElementById("rg").value,
    email: document.getElementById("email").value,
    endereco: document.getElementById("endereco").value,
    curso: document.getElementById("curso").value,
    instituicao: document.getElementById("instituicao").value,
  };

  const id = document.getElementById("id").value;

  if (id) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...aluno }),
    });
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno),
    });
  }

  this.reset();
  carregarAlunos();
});

async function carregarAlunos() {
  const resposta = await fetch(API_URL);
  const alunos = await resposta.json();
  const tbody = document.querySelector("#tabelaAlunos tbody");
  tbody.innerHTML = "";

  alunos.forEach((a) => {
    const linha = `<tr>
      <td>${a.nome}</td>
      <td>${a.cpf}</td>
      <td>${a.email}</td>
      <td>${a.curso}</td>
      <td>${a.instituicao}</td>
      <td>
        <button class="btn btn-warning btn-sm btn-editar" onclick='editarAluno(${JSON.stringify(a)})'>Editar</button>
        <button class="btn btn-danger btn-sm" onclick='deletarAluno("${a.id}")'>Excluir</button>
      </td>
    </tr>`;
    tbody.innerHTML += linha;
  });
}

function editarAluno(aluno) {
  document.getElementById("id").value = aluno.id;
  document.getElementById("nome").value = aluno.nome;
  document.getElementById("cpf").value = aluno.cpf;
  document.getElementById("rg").value = aluno.rg;
  document.getElementById("email").value = aluno.email;
  document.getElementById("endereco").value = aluno.endereco;
  document.getElementById("curso").value = aluno.curso;
  document.getElementById("instituicao").value = aluno.instituicao;
  document.getElementById("btnSalvar").textContent = "Atualizar Aluno";
}

async function deletarAluno(id) {
  if (confirm("Tem certeza que deseja excluir este aluno?")) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    carregarAlunos();
  }
}

document.addEventListener("DOMContentLoaded", carregarAlunos);*/

function cadastrarAluno(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os dados do formulário
    const aluno = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        //senha: document.getElementById("senha").value,
        endereco: document.getElementById("endereco").value,
        rg: document.getElementById("rg").value,
        cpf: document.getElementById("cpf").value,
        instituicao: document.getElementById("instituicao").value,
        curso: document.getElementById("curso").value
    };

    // Envia a requisição para o backend
    fetch("http://localhost:8080/alunos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao cadastrar aluno");
        }
        return response.json();
    })
    .then(data => {
        alert("Cadastro realizado com sucesso!");
        
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao cadastrar. Verifique os dados e tente novamente.");
    });
}

function carregarPedidos() {
  fetch("http://localhost:8080/alunos")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao carregar alunos");
      }
      return response.json();
    })
    .then(pedidos => {
      exibirPedidos(pedidos); // Exibir os veículos na tela
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao carregar alunos.");
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", cadastrarAluno);
});