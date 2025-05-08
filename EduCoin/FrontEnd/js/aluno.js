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
    const id = document.getElementById("id").value;

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

    const url = id ? `http://localhost:8080/alunos/${id}` : "http://localhost:8080/alunos";
    const metodo = id ? "PUT" : "POST";

    // Envia a requisição para o backend
    fetch(url, {
      method: metodo,
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
      alert(id ? "Aluno atualizado com sucesso!" : "Cadastro realizado com sucesso!");

      document.getElementById("alunoForm").reset();
      document.getElementById("id").value = "";
      document.getElementById("btnSalvar").textContent = "Cadastrar Aluno";

      carregarAlunos(); // Recarrega a lista na tela
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao salvar. Verifique os dados e tente novamente.");
    });
}

function carregarAlunos() {
  fetch("http://localhost:8080/alunos")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao carregar alunos");
      }
      return response.json();
    })
    .then(alunos => {
      exibirAlunos(alunos); // Exibir os veículos na tela
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao carregar alunos.");
    });
}

function exibirAlunos(alunos) {
  const tbody = document.querySelector("#tabelaAlunos tbody");
  tbody.innerHTML = ""; // Limpa a tabela antes de preencher

  alunos.forEach(aluno => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${aluno.nome}</td>
      <td>${aluno.cpf}</td>
      <td>${aluno.email}</td>
      <td>${aluno.curso}</td>
      <td>${aluno.instituicao}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="editarAluno(${aluno.id})">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="excluirAluno(${aluno.id})">Excluir</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

/*function editarAluno(id) {
  fetch(`http://localhost:8080/alunos/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao buscar aluno");
      }
      return response.json();
    })
    .then(aluno => {
      // Preenche o formulário com os dados do aluno
      document.getElementById("id").value = aluno.id;
      document.getElementById("nome").value = aluno.nome;
      document.getElementById("cpf").value = aluno.cpf;
      document.getElementById("rg").value = aluno.rg;
      document.getElementById("email").value = aluno.email;
      document.getElementById("endereco").value = aluno.endereco;
      document.getElementById("curso").value = aluno.curso;
      document.getElementById("instituicao").value = aluno.instituicao;

      // Muda o texto do botão (opcional)
      document.getElementById("btnSalvar").textContent = "Atualizar Aluno";
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao carregar dados do aluno.");
    });
}

function excluirAluno(id) {
  if (confirm("Tem certeza que deseja excluir este aluno?")) {
    fetch(`http://localhost:8080/alunos/${id}`, {
      method: "DELETE"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao excluir aluno");
      }
      alert("Aluno excluído com sucesso!");
      carregarAlunos(); // Atualiza a tabela
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao excluir aluno.");
    });
  }
}*/

document.addEventListener("DOMContentLoaded", function () {
  carregarAlunos(); // Chama a função ao carregar a página
  const form = document.querySelector("form");
  form.addEventListener("submit", cadastrarAluno);
  
});