const glicValue = document.getElementById("glicValue");
const result = document.getElementById("result");

function calcGlic() {
  glicValue.value = parseFloat(glicValue.value).toFixed(1);
  const value = glicValue.value;
  switch (true) {
    case value <= 100:
      result.innerHTML = ` <span>Normal</span>`;
      break;
    case value > 100 && value <= 140:
      result.innerHTML = ` <span>Elevado</span>`;
      break;
    case value > 140:
      result.innerHTML = ` <span>Diabetes</span>`;
      break;

    default:
      break;
  }
}

function reset() {
  glicValue.value = "";
  const text = result;
  const child = text.children[0];
  text.removeChild(child);
}
