const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calcInt() {
  const numbers = [];
  numbers.push(num1.value, num2.value);
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const calculate = max % min;

  if (calculate === 0) {
    result.innerHTML = `<span>São múltiplos.</span>`;
    return;
  } else if (num2.value !== "") {
    result.innerHTML = `<span>Não são múltiplos.</span>`;
  }
}

function reset() {
  num1.value = "";
  num2.value = "";
  const parent = result;
  const child = parent.children[0];
  parent.removeChild(child);
}
