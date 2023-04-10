const coefficientA = document.getElementById("coefficientA");
const coefficientB = document.getElementById("coefficientB");
const coefficientC = document.getElementById("coefficientC");
const sqrRootOne = document.getElementById("sqrRootOne");
const sqrRootTwo = document.getElementById("sqrRootTwo");
const noRoot = document.getElementById("noRoot");

function coefficientCalc() {
  //calculate delta
  let a = coefficientA.value;
  let b = coefficientB.value;
  let c = coefficientC.value;

  const deltaA = b * b;
  const deltaB = 4 * a * -c;
  const delta = deltaA + deltaB;
  const sqrRoot = Math.sqrt(delta);
  const divvy = 2 * a;

  //find roots
  const rootOne = (-b + sqrRoot) / divvy;
  const rootTwo = (-b - sqrRoot) / divvy;

  if (Number.isNaN(rootOne) && Number.isNaN(rootTwo)) {
    sqrRootOne.value = "";
    sqrRootTwo.value = "";
    noRoot.innerHTML = `
        <span>Esta equação não possui raízes reais</span>
    `;
    return;
  } else {
    sqrRootOne.value = rootOne.toFixed(4);
    sqrRootTwo.value = rootTwo.toFixed(4);
  }
}

function reset() {
  coefficientA.value = "";
  coefficientB.value = "";
  coefficientC.value = "";
  sqrRootOne.value = "";
  sqrRootTwo.value = "";
  const noRootResult = noRoot;
  const elementChild = noRootResult.children[0];
  noRootResult.removeChild(elementChild);
}
