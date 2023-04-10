function calcSalary() {
  const name = document.getElementById("name").value;
  const valueHour = Number(document.getElementById("valueHour").value);
  const hoursWork = Number(document.getElementById("hoursWork").value);
  const resultSalary = document.getElementById("resultSalary");

  document.getElementById("valueHour").value = parseFloat(valueHour).toFixed(2);

  const calcHours = valueHour * hoursWork;

  if (name !== "" && hoursWork !== 0 && valueHour !== 0) {
    resultSalary.innerHTML = `
      <span>O pagamento para ${name} deve ser de R$${calcHours.toFixed(
      2
    )}</span>`;
    return;
  }
}
