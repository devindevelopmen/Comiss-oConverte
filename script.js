let totalComissoes = 0; // 🔹 Variável global para somar comissões

function calcularOuroAlto() {
  let gramas = parseFloat(document.getElementById('gramasAlto').value);
  let valor = parseFloat(document.getElementById('valorAlto').value);
  let resultadoDiv = document.getElementById('resultadoAlto');
  if (isNaN(gramas) || isNaN(valor) || gramas <= 0) {
    resultadoDiv.textContent = "Preencha todos os campos corretamente.";
    return;
  }

  let V = valor / gramas;
  let segundaSaida = "";
  let comissao = 0;

  if (V <= 200) {
    comissao = gramas * 12;
    segundaSaida = "Comissão: " + comissao.toFixed(2);
  } else if (V > 200 && V < 300) {
    segundaSaida = "Esse colaborador não bateu a meta";
  }

  totalComissoes += comissao; // 🔹 soma comissão
  resultadoDiv.textContent = `ValorPorGrama: ${V.toFixed(2)}\n${segundaSaida}`;
}

function calcularOuroBaixo() {
  let gramas = parseFloat(document.getElementById('gramasBaixo').value);
  let valor = parseFloat(document.getElementById('valorBaixo').value);
  let resultadoDiv = document.getElementById('resultadoBaixo');
  if (isNaN(gramas) || isNaN(valor) || gramas <= 0) {
    resultadoDiv.textContent = "Preencha todos os campos corretamente.";
    return;
  }

  let ValorPorGrama = valor / gramas;
  let segundaSaida = "";
  let comissao = 0;

  if (ValorPorGrama <= 130) {
    comissao = gramas * 12;
    segundaSaida = "Comissão: " + comissao.toFixed(2);
  } else if (ValorPorGrama > 130) {
    segundaSaida = "Esse colaborador não bateu a meta";
  }

  totalComissoes += comissao; // 🔹 soma comissão
  resultadoDiv.textContent = `ValorPorGrama: ${ValorPorGrama.toFixed(2)}\n${segundaSaida}`;
}

function calcularComprasAltas() {
  let gramas = parseFloat(document.getElementById('gramasCompras').value);
  let valor = parseFloat(document.getElementById('valorCompras').value);
  let resultadoDiv = document.getElementById('resultadoCompras');
  if (isNaN(gramas) || isNaN(valor) || gramas <= 0) {
    resultadoDiv.textContent = "Preencha todos os campos corretamente.";
    return;
  }

  let ValorPorGrama = valor / gramas;
  let segundaSaida = "";
  let comissao = 0;

  if (ValorPorGrama >= 300 && ValorPorGrama <= 330) {
    comissao = gramas * 3;
    segundaSaida = "Comissão: " + comissao.toFixed(2);
  }

  totalComissoes += comissao; // 🔹 soma comissão
  resultadoDiv.textContent = `ValorPorGrama: ${ValorPorGrama.toFixed(2)}\n${segundaSaida}`;
}

// 🔹 Função para exibir o total acumulado
function mostrarTotal() {
  let resultadoDiv = document.getElementById('resultadoTotal');
  resultadoDiv.textContent = "💰 Total de Comissões: " + totalComissoes.toFixed(2);
}

