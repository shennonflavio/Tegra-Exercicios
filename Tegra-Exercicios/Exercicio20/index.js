const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function sumValues() {
  if (num1.value !== "" && num2.value !== "") {
    let num = +num1.value;
    let sum = 0;
    for (let i = num; i <= num2.value; i++) {
      let numbers = [];
      numbers.push(i);
      sum += numbers[0];
    }
    result.innerText = `Resultado: ${sum}`;
  }
}

function reset() {
  num1.value = "";
  num2.value = "";
  result.innerText = "";
}
