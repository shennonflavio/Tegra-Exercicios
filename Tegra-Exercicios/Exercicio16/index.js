const distancyOne = document.getElementById("distancyOne");
const distancyTwo = document.getElementById("distancyTwo");
const distancyThree = document.getElementById("distancyThree");
const result = document.getElementById("result");

function calcDistancy() {
  distancyOne.value = parseFloat(distancyOne.value).toFixed(2);
  distancyTwo.value = parseFloat(distancyTwo.value).toFixed(2);
  distancyThree.value = parseFloat(distancyThree.value).toFixed(2);
  const distancies = [];
  distancies.push(+distancyOne.value, +distancyTwo.value, +distancyThree.value);
  const distancy = Math.max(...distancies);
  result.innerHTML = `
    <span>${distancy.toFixed(2)}</span>
  `;
}

function reset() {
  distancyOne.value = "";
  distancyTwo.value = "";
  distancyThree.value = "";

  const element = result;
  const child = element.children[0];
  element.removeChild(child);
}
