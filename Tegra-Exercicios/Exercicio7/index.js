function calcConsumption() {
  const distancy = Number(document.getElementById("distancy").value);
  const consumption = Number(document.getElementById("consumption").value);
  const consumptionAverage = document.getElementById("consumptionAverage");

  document.getElementById("consumption").value =
    parseFloat(consumption).toFixed(1);

  const consumptionResult = distancy / consumption;
  if (distancy !== 0 && consumption !== 0) {
    consumptionAverage.value = consumptionResult.toFixed(3);
  }
}

function reset() {
  document.getElementById("distancy").value = "";
  document.getElementById("consumption").value = "";
  document.getElementById("consumptionAverage").value = "";
}
