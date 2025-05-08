const API_URL = "http://localhost:8080/empresas";

document.getElementById("empresaForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const empresa = {
    nome: document.getElementById("nome").value,
    cnpj: document.getElementById("cnpj").value,
    vantagens: document.getElementById("vantagens").value,
  };

  const id = document.getElementById("id").value;

  if (id) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...empresa }),
    });
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(empresa),
    });
  }

  this.reset();
  carregarEmpresas();
});

async function carregarEmpresas() {
  const resposta = await fetch(API_URL);
  const empresas = await resposta.json();
  const tbody = document.querySelector("#tabelaEmpresas tbody");
  tbody.innerHTML = "";

  empresas.forEach((e) => {
    const linha = `<tr>
      <td>${e.nome}</td>
      <td>${e.cnpj}</td>
      <td>${e.vantagens}</td>
      <td>
        <button class="btn btn-warning btn-sm btn-editar" onclick='editarEmpresa(${JSON.stringify(e)})'>Editar</button>
        <button class="btn btn-danger btn-sm" onclick='deletarEmpresa("${e.id}")'>Excluir</button>
      </td>
    </tr>`;
    tbody.innerHTML += linha;
  });
}

function editarEmpresa(empresa) {
  document.getElementById("id").value = empresa.id;
  document.getElementById("nome").value = empresa.nome;
  document.getElementById("cnpj").value = empresa.cnpj;
  document.getElementById("vantagens").value = empresa.vantagens;
  document.getElementById("btnSalvar").textContent = "Atualizar Empresa";
}

async function deletarEmpresa(id) {
  if (confirm("Deseja realmente excluir esta empresa?")) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    carregarEmpresas();
  }
}

document.addEventListener("DOMContentLoaded", carregarEmpresas);
