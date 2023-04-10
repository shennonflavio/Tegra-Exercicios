const plan = document.getElementById("plan");
const planValue = document.getElementById("planValue");

function calcPlan() {
  const basicPlan = 50;
  if (plan.value <= 100) {
    planValue.value = parseFloat(basicPlan).toFixed(2);
    return;
  } else if (plan.value > 100) {
    const value = plan.value - 100;
    const result = 50 + value * 2;
    planValue.value = parseFloat(result).toFixed(2);
  }
}

function reset() {
  plan.value = "";
  planValue.value = "";
}
