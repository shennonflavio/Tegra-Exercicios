const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calcUnpaired() {
  const x = +num1.value;
  const y = +num2.value;
  let sum = 0;
  for (let i = x; i < y; i++) {
    const values = [];
    if (i % 2 !== 0) {
      values.push(i);
    }
    sum += +values;
  }
  result.innerText = sum;
}

function reset() {
  num1.value = "";
  num2.value = "";
  result.innerText = "";
}
