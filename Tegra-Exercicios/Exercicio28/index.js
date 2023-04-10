const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const result = document.getElementById("minMax");

function minAndMax() {
  const numbers = [];

  numbers.push(
    Number(number1.value),
    Number(number2.value),
    Number(number3.value),
    Number(number4.value),
    Number(number5.value)
  );

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  result.innerText = `${min} e ${max}`;
}

function reset() {
  number1.value = "";
  number2.value = "";
  number3.value = "";
  number4.value = "";
  number5.value = "";
  result.innerText = "";
}
