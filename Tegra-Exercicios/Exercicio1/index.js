function calcArea() {
  let len = document.getElementById("len");
  let squareMeter = document.getElementById("squareMeter");
  let width = document.getElementById("width");

  // Include decimal in the input value
  document.getElementById("width").value = parseFloat(width.value).toFixed(1);
  document.getElementById("len").value = parseFloat(len.value).toFixed(1);
  document.getElementById("squareMeter").value = parseFloat(
    squareMeter.value
  ).toFixed(2);

  // Calcs
  const calculateArea =
    parseFloat(width.value).toFixed(1) * parseFloat(len.value).toFixed(1);
  const areaResult = calculateArea.toFixed(2);
  const priceResult = calculateArea * parseFloat(squareMeter.value).toFixed(2);

  //Insert results at the input
  document.getElementById("area").value = areaResult;
  document.getElementById("price").value = priceResult.toFixed(2);
}
