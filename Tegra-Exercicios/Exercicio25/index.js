const day = document.getElementById("day");
const month = document.getElementById("month");
const sign = document.getElementById("sign");

function findSign() {
  const getDay = Number(day.value);
  const getMonth = Number(month.value);

  switch (true) {
    case (getMonth === 3 && getDay >= 21) || (getMonth === 4 && getDay <= 20):
      sign.innerText = "Áries";
      break;
    case (getMonth === 4 && getDay >= 21) || (getMonth === 5 && getDay <= 20):
      sign.innerText = "Touro";
      break;
    case (getMonth === 5 && getDay >= 21) || (getMonth === 6 && getDay <= 20):
      sign.innerText = "Gêmeos";
      break;
    case (getMonth === 6 && getDay >= 21) || (getMonth === 7 && getDay <= 22):
      sign.innerText = "Câncer";
      break;
    case (getMonth === 7 && getDay >= 23) || (getMonth === 8 && getDay <= 22):
      sign.innerText = "Leão";
      break;
    case (getMonth === 8 && getDay >= 23) || (getMonth === 9 && getDay <= 22):
      sign.innerText = "Virgem";
      break;
    case (getMonth === 9 && getDay >= 23) || (getMonth === 10 && getDay <= 22):
      sign.innerText = "Libra";
      break;
    case (getMonth === 10 && getDay >= 23) || (getMonth === 11 && getDay <= 21):
      sign.innerText = "Escorpião";
      break;
    case (getMonth === 11 && getDay >= 22) || (getMonth === 12 && getDay <= 21):
      sign.innerText = "Sargitário";
      break;
    case (getMonth === 12 && getDay >= 22) || (getMonth === 1 && getDay <= 20):
      sign.innerText = "Capricórnio";
      break;
    case (getMonth === 1 && getDay >= 21) || (getMonth === 2 && getDay <= 18):
      sign.innerText = "Aquário";
      break;
    case (getMonth === 2 && getDay >= 19) || (getMonth === 3 && getDay <= 20):
      sign.innerText = "Peixes";
      break;

    default:
      break;
  }
}

function reset() {
  day.value = "";
  month.value = "";
  sign.innerText = "";
}
