const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const cashReceived = document.getElementById("cashReceived");
const cashChange = document.getElementById("cashChange");
const notEnoughtCash = document.getElementById("notEnoughtCash");

function calcChange() {
  price.value = parseFloat(price.value).toFixed(2);
  cashReceived.value = parseFloat(cashReceived.value).toFixed(2);

  const calc = cashReceived.value - price.value * quantity.value;

  if (calc < 0 && cashReceived.value !== "") {
    notEnoughtCash.innerHTML = `
        <span>DINHEIRO INSUFICIENTE. FALTAM ${parseFloat(-calc).toFixed(
          2
        )} REAIS</span>
    `;
    return;
  }

  if (
    price.value !== "" &&
    quantity.value !== "" &&
    cashReceived.value !== ""
  ) {
    const result = cashReceived.value - price.value * quantity.value;
    cashChange.value = result.toFixed(2);
    return;
  }
}

function reset() {
  price.value = "";
  quantity.value = "";
  cashReceived.value = "";
  cashChange.value = "";

  if (notEnoughtCash.childNodes.length > 0) {
    const message = notEnoughtCash;
    const elementChildren = message.children[0];
    message.removeChild(elementChildren);
    return;
  }
}
