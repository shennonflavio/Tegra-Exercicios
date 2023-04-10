const result = document.getElementById("result");
const cnpj = document.getElementById("CNPJ");
document.getElementById("CNPJ").addEventListener("input", function (e) {
  var x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
  e.target.value = !x[2]
    ? x[1]
    : x[1] + "." + x[2] + "." + x[3] + "/" + x[4] + (x[5] ? "-" + x[5] : "");
});
function validarCnpj() {
  // receber o cpf informado no pagina html e transforma em string
  let cnpj = String(document.getElementById("CNPJ").value).replace(
    /(\.|\/|\-)/g,
    ""
  );

  let cnpjD1 = cnpj[12]; // recebe o penúltimo digito
  let cnpjD2 = cnpj[13]; // recebe o último digito

  // variáveis que divide o cnpj em 4 partes
  let cnpjR = cnpj.split("").reverse().join(""); //recebe os números e os ordena de trás para frente
  let cnpjDV1 = cnpjR.slice(2, 10); // recebe os primeiros 9 números partindo do índice 2 do array
  let cnpjDV2 = cnpjR.slice(10, 15); // recebe os 4 últimos do array
  let cnpjDV3 = cnpjR.slice(1, 10); // recebe os primeiros 9 números partindo do índice 1 do array
  let cnpjDV4 = cnpjR.slice(9, 15); // recebe os 5 últimos do array

  // armazena a somatoria de valores para o calculo dos dv
  let soma = 0;
  // laço que calcula a soma da primeira partição do array
  for (let i = 0; i <= 7; i++) {
    soma += cnpjDV1[i] * (i + 2);
  }
  // soma resultante
  soma = soma;

  // laço que calcula a soma da segunda partição do array
  for (let i = 0; i <= 3; i++) {
    soma += cnpjDV2[i] * (i + 2);
  }

  // calculo que encontra o valor do primeiro digito
  let calcDv1 = 11 - (soma % 11);
  //verifica se é maior que 10 e caso true o defini como 0.
  if (calcDv1 >= 10) {
    calcDv1 = 0;
  }

  // variável com o primeiro digito
  let somaCalc1 = calcDv1;

  // zera a soma para iniciar a validação do segundo digito
  soma = 0;
  // laço que calcula a soma da terceira partição do array
  for (let i = 0; i <= 7; i++) {
    soma += cnpjDV3[i] * (i + 2);
  }
  // soma resultante
  soma = soma;
  // laço que calcula a soma da quarta partição do array
  for (let i = 0; i <= 4; i++) {
    soma += cnpjDV4[i] * (i + 2);
  }
  // calculo que encontra o valor do segundo digito
  let calcDv2 = 11 - (soma % 11);
  //verifica se é maior que 10 e caso true o defini como 0.
  if (calcDv2 >= 10) {
    calcDv2 = 0;
  }
  // variável com o segundo digito
  let somaCalc2 = calcDv2;

  // verificação se os digitos calulados são iguais aos  digitados
  if (cnpjD1 == somaCalc1 && cnpjD2 == somaCalc2) {
    result.innerHTML = " Válido";
  } else {
    result.innerHTML = " Inválido";
  }
}

function reset() {
  cnpj.value = "";
  result.innerText = "";
}
