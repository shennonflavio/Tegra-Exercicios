const firstValue = document.getElementById("firstValue");
const secondValue = document.getElementById("secondValue");
const thirdValue = document.getElementById("thirdValue");
const minorValue = document.getElementById("minorValue");

function getValues() {
  let num = [];
  num.push(+firstValue.value, +secondValue.value, +thirdValue.value);
  const minor = Math.min(...num);
  minorValue.value = minor;
}

function reset() {
  firstValue.value = "";
  secondValue.value = "";
  thirdValue.value = "";
  minorValue.value = "";
}
