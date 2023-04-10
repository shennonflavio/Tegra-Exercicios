const sizeA = document.getElementById("sizeA");
const sizeB = document.getElementById("sizeB");
const sizeC = document.getElementById("sizeC");
const areaSquare = document.getElementById("areaSquare");
const areaTriangle = document.getElementById("areaTriangle");
const areaTrapeze = document.getElementById("areaTrapeze");

function calculateArea() {
  document.getElementById("sizeA").value = parseFloat(
    Number(sizeA.value)
  ).toFixed(1);
  document.getElementById("sizeB").value = parseFloat(
    Number(sizeB.value)
  ).toFixed(1);
  document.getElementById("sizeC").value = parseFloat(
    Number(sizeC.value)
  ).toFixed(1);

  if (sizeB.value === "0.0") {
    document.getElementById("sizeB").value = "";
  }
  if (sizeC.value === "0.0") {
    document.getElementById("sizeC").value = "";
  }

  calcSquare();
  calcTriangle();
  calcTrapeze();
}

function calcSquare() {
  const squareArea = sizeA.value * sizeA.value;
  areaSquare.value = squareArea.toFixed(4);
}

function calcTriangle() {
  const triangleArea = (sizeA.value * sizeB.value) / 2;
  areaTriangle.value = triangleArea.toFixed(4);
}

function calcTrapeze() {
  const trapezeArea = ((+sizeA.value + +sizeB.value) * +sizeC.value) / 2;
  areaTrapeze.value = trapezeArea.toFixed(4);
}

function reset() {
  sizeA.value = "";
  sizeB.value = "";
  sizeC.value = "";
  areaSquare.value = "";
  areaTriangle.value = "";
  areaTrapeze.value = "";
}
