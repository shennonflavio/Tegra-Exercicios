function convertSeconds() {
  const time = document.getElementById("time").value;
  const timeResult = document.getElementById("timeResult");

  const timeInSeconds = new Date(time * 1000);

  const hours = timeInSeconds.getUTCHours();
  const minutes = timeInSeconds.getUTCMinutes();
  const seconds = timeInSeconds.getUTCSeconds();

  timeResult.innerHTML = `
    <span>${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}</span>
  `;
}

function reset() {
  document.getElementById("time").value = "";
  const time = document.getElementById("timeResult");
  const elementChildren = time.children[0];
  time.removeChild(elementChildren);
}
