function calcCircle() {
  const circle = Number(document.getElementById("circle").value);
  const area = document.getElementById("resultArea");

  document.getElementById("circle").value = parseFloat(circle).toFixed(2);

  const calc = circle * circle;

  area.value = calc * Math.PI.toFixed(3);
}
