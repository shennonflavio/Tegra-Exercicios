const valueX = document.getElementById("valueX");
const result = document.getElementById("result");

function calcX() {
  const x = valueX.value;
  const xValue = [];
  for (let i = 1; i <= x; i++) {
    if (i % 2 === 0) {
      xValue.push(i);
    }
  }
  [xValue].forEach((item) => (result.innerHTML = item.join("<br/> ")));
}

function reset() {
  valueX.value = "";
  result.innerHTML = "";
}
