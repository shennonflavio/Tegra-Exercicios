function calcChange() {
  const price = Number(document.getElementById("price").value);
  const quantity = Number(document.getElementById("quantity").value);
  const cashReceived = Number(document.getElementById("cashReceived").value);
  const cashChange = document.getElementById("cashChange");

  document.getElementById("price").value = parseFloat(price).toFixed(2);
  document.getElementById("cashReceived").value =
    parseFloat(cashReceived).toFixed(2);

  if (price !== "" && quantity !== "" && cashReceived !== "") {
    const result = cashReceived - price * quantity;
    cashChange.value = result.toFixed(2);
  } else {
    return;
  }
}
