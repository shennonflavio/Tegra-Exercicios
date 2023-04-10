const tab = document.getElementById("tab");
const result = document.getElementById("result");

function calcTab() {
  const tabValue = tab.value;
  let calcs = "";
  for (let i = 1; i <= 10; i++) {
    calcs += `${tabValue} x ${i} = ${tabValue * i}<br/>`;
    result.innerHTML = calcs;
  }
}

function reset() {
  tab.value = "";
  result.innerHTML = "";
}
