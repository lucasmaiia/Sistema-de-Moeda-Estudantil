
function cadastrarEmpresa(event) {
    event.preventDefault(); // Evita o recarregamento da página
    const id = document.getElementById("id").value;

    // Captura os dados do formulário
    const empresa = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        //vantagens: document.getElementById("vantagens").value,
        cnpj: document.getElementById("cnpj").value,
        
    };

    const url = id ? `http://localhost:8080/empresas/${id}` : "http://localhost:8080/empresas";
    const metodo = id ? "PUT" : "POST";

    // Envia a requisição para o backend
    fetch(url, {
      method: metodo,
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(empresa)
  })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao cadastrar empresa");
        }
        return response.json();
    })
    .then(data => {
      alert(id ? "Empresa atualizado com sucesso!" : "Cadastro realizado com sucesso!");

      document.getElementById("empresaForm").reset();
      document.getElementById("id").value = "";
      document.getElementById("btnCadastrar").textContent = "Cadastrar Empresa";

      carregarEmpresas(); // Recarrega a lista na tela
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao salvar. Verifique os dados e tente novamente.");
    });
}

function carregarEmpresas() {
  fetch("http://localhost:8080/empresas")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao carregar empresas");
      }
      return response.json();
    })
    .then(empresas => {
      exibirEmpresas(empresas); 
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao carregar empresas.");
    });
}

function exibirEmpresas(empresas) {
  const tbody = document.querySelector("#tabelaEmpresas tbody");
  tbody.innerHTML = ""; // Limpa a tabela antes de preencher

  empresas.forEach(empresa => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${empresa.nome}</td>
      <td>${empresa.cnpj}</td>
      <td>${empresa.email}</td>
      <td>${empresa.senha}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="editarEmpresa('${empresa.id}')">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="excluirEmpresa('${empresa.id}')">Excluir</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function editarEmpresa(id) {
  fetch(`http://localhost:8080/empresas/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao buscar empresa para edição");
      }
      return response.json();
    })
    .then(empresa => {
      // Preencher os campos do modal
      document.getElementById("id").value = empresa.id;
      document.getElementById("modalNome").value = empresa.nome;
      document.getElementById("modalCnpj").value = empresa.cnpj;
      document.getElementById("modalEmail").value = empresa.email;
      document.getElementById("modalSenha").value = empresa.senha;


      // Exibir o modal
      const modal = new bootstrap.Modal(document.getElementById("modalEmpresa"));
      modal.show();
    })
    .catch(error => {
      console.error("Erro ao buscar empresa:", error);
      alert("Erro ao carregar os dados do empresa.");
    });
}


function atualizarEmpresa(event) {
    event.preventDefault();

    const id = document.getElementById("id").value;

    const empresa = {
        nome: document.getElementById("modalNome").value,
        cnpj: document.getElementById("modalCnpj").value,
        email: document.getElementById("modalEmail").value,
        senha: document.getElementById("modalSenha").value,
    };

    fetch(`http://localhost:8080/empresas/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(empresa)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao atualizar empresa");
        }
        return response.json();
    })
    .then(() => {
        alert("Empresa atualizado com sucesso!");
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalEmpresa'));
        modal.hide();
        carregarEmpresas();
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao atualizar empresa.");
    });
}



function excluirEmpresa(id) {
  if (confirm("Tem certeza que deseja excluir esta empresa?")) {
    fetch(`http://localhost:8080/empresas/${id}`, {
      method: "DELETE"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao excluir empresa");
      }
      alert("Empresa excluído com sucesso!");
      carregarEmpresas(); // Atualiza a tabela
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao excluir empresa.");
    });
  }
}

document.getElementById("formEditarEmpresa").addEventListener("submit", atualizarEmpresa);

document.addEventListener("DOMContentLoaded", function () {
  carregarEmpresas(); // Chama a função ao carregar a página
  const form = document.querySelector("form");
  form.addEventListener("submit", cadastrarEmpresa);
  
});