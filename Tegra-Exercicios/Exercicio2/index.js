function calcBase() {
  const base = Number(document.getElementById("base").value);
  const height = Number(document.getElementById("height").value);
  const area = document.getElementById("area");
  const perimeter = document.getElementById("perimeter");
  const diagonal = document.getElementById("diagonal");

  document.getElementById("base").value = parseFloat(base).toFixed(1);
  document.getElementById("height").value = parseFloat(height).toFixed(1);

  //calc area
  const resultArea = base * height;

  //calc perimeter
  const resultPerimeter = base + height;

  //calc diagonal
  const resultDiagonal = base * base + height * height;

  area.value = resultArea.toFixed(4);
  perimeter.value = (resultPerimeter * 2).toFixed(4);
  diagonal.value = Math.sqrt(resultDiagonal).toFixed(4);
}

function reset() {
  document.getElementById("base").value = "";
  document.getElementById("height").value = "";
  document.getElementById("area").value = "";
  document.getElementById("perimeter").value = "";
  document.getElementById("diagonal").value = "";
}
