const temperature = document.getElementById("temperature");
const result = document.getElementById("temp");

function getTemp() {
  const tempStr = temperature.value;
  temperature.value = tempStr.toUpperCase();
  if (temperature.value === "C") {
    result.innerHTML = `
    <div className="result">
        <span>Digite a temperatura em Celsius: </span>
        <input type="number" id="tempC" onchange="calcTempCtoF()"/>
    </div> 
    <span>Temperatura equivalente em Fahrenheit: <span id="fahrenheitTemp"></span></span>
       `;
  } else if (temperature.value === "F") {
    result.innerHTML = `
    <div className="result">
        <span>Digite a temperatura em Fahrenheit: </span>
        <input type="number" id="tempF" onchange="calcTempFtoC()"/>
    </div>    
    <span>Temperatura equivalente em Celsius: <span id="celsiusTemp"></span> </span>
       `;
  }
}

function calcTempFtoC() {
  const tempF = document.getElementById("tempF");
  const calcTempF = (tempF.value - 32) * (5 / 9);
  const celsiusTemp = document.getElementById("celsiusTemp");
  celsiusTemp.innerText = calcTempF.toFixed(2);
}

function calcTempCtoF() {
  const tempC = document.getElementById("tempC");
  const calcTempC = tempC.value * (9 / 5) + 32;
  const celsiusTemp = document.getElementById("fahrenheitTemp");
  celsiusTemp.innerText = calcTempC.toFixed(2);
}

function reset() {
  temperature.value = "";
  const box = result;
  const child1 = box.children[0];
  const child2 = box.children[1];
  box.removeChild(child1);
  box.removeChild(child2);
}
