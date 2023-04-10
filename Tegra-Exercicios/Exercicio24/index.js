const numbers = document.getElementById("numbers");
const orderedNumbers = document.getElementById("orderedNumbers");

function orderNumbers() {
  const num = [];
  const list = numbers.value;
  const result = list.split("");
  num.push(result);
  num[0].sort();
  console.log(num);
  num.forEach((item) => (orderedNumbers.innerText = item));
}

function reset() {
  numbers.value = "";
  orderedNumbers.innerText = "";
}
