
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
        <button class="btn btn-sm btn-warning" onclick="editarAluno('${aluno.id}')">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="excluirAluno('${aluno.id}')">Excluir</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function editarAluno(id) {
  fetch(`http://localhost:8080/alunos/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao buscar aluno para edição");
      }
      return response.json();
    })
    .then(aluno => {
      // Preencher os campos do modal
      document.getElementById("id").value = aluno.id;
      document.getElementById("modalNome").value = aluno.nome;
      document.getElementById("modalCpf").value = aluno.cpf;
      document.getElementById("modalRg").value = aluno.rg;
      document.getElementById("modalEmail").value = aluno.email;
      document.getElementById("modalEndereco").value = aluno.endereco;
      document.getElementById("modalCurso").value = aluno.curso;
      document.getElementById("modalInstituicao").value = aluno.instituicao;

      // Exibir o modal
      const modal = new bootstrap.Modal(document.getElementById("modalAluno"));
      modal.show();
    })
    .catch(error => {
      console.error("Erro ao buscar aluno:", error);
      alert("Erro ao carregar os dados do aluno.");
    });
}


function atualizarAluno(event) {
    event.preventDefault();

    const id = document.getElementById("id").value;

    const aluno = {
        nome: document.getElementById("modalNome").value,
        cpf: document.getElementById("modalCpf").value,
        rg: document.getElementById("modalRg").value,
        email: document.getElementById("modalEmail").value,
        endereco: document.getElementById("modalEndereco").value,
        curso: document.getElementById("modalCurso").value,
        instituicao: document.getElementById("modalInstituicao").value
    };

    fetch(`http://localhost:8080/alunos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao atualizar aluno");
        }
        return response.json();
    })
    .then(() => {
        alert("Aluno atualizado com sucesso!");
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalAluno'));
        modal.hide();
        carregarAlunos();
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao atualizar aluno.");
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
}

document.getElementById("formEditarAluno").addEventListener("submit", atualizarAluno);

document.addEventListener("DOMContentLoaded", function () {
  carregarAlunos(); // Chama a função ao carregar a página
  const form = document.querySelector("form");
  form.addEventListener("submit", cadastrarAluno);
  
});