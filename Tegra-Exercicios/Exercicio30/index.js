const numbers = document.getElementById("number");
const result = document.getElementById("result");

function transcribeNumber() {
  const unidades = [
    "Zero",
    "Um",
    "Dois",
    "Três",
    "Quatro",
    "Cinco",
    "Seis",
    "Sete",
    "Oito",
    "Nove",
  ];
  const especiais = [
    "Dez",
    "Onze",
    "Doze",
    "Treze",
    "Catorze",
    "Quinze",
    "Dezeseis",
    "Dezsete",
    "Dezoito",
    "Deznove",
  ];
  const dezenas = [
    "Vinte",
    "Trinta",
    "Quarenta",
    "Cinquenta",
    "Sessenta",
    "Setenta",
    "Oitenta",
    "Noventa",
  ];
  const number = numbers.value;
  //Valores com 1 algarismo
  if (number.length === 1) {
    //Imprimir unidadades
    result.innerText = unidades[parseInt(number[0])];
  }

  //Valores com 2 algarismos
  else if (number.length === 2) {
    console.log(number.length);
    //Especiais
    if (
      number[0] === "1" &&
      (number[1] === "0" ||
        number[1] === "1" ||
        number[1] === "2" ||
        number[1] === "3" ||
        number[1] === "4" ||
        number[1] === "5" ||
        number[1] === "6" ||
        number[1] === "7" ||
        number[1] === "8" ||
        number[1] === "9")
    ) {
      result.innerText = especiais[parseInt(number[1])];
    }

    //Dezenas
    else if (
      (number[0] === "2" ||
        number[0] === "3" ||
        number[0] === "4" ||
        number[0] === "5" ||
        number[0] === "6" ||
        number[0] === "7" ||
        number[0] === "8" ||
        number[0] === "9") &&
      number[1] === "0"
    ) {
      result.innerText = dezenas[parseInt(number[0] - 2)];
    }

    //Dezenas compostas
    else {
      result.innerText =
        dezenas[parseInt(number[0] - 2)] +
        " e " +
        unidades[parseInt(number[1])];
    }
  }
}

function reset() {
  numbers.value = "";
  result.innerText = "";
}
