const word = document.getElementById("word");
const result = document.getElementById("result");

function checkWord() {
  const arrWord = [];
  const arrWordReverse = [];

  const getWord = word.value.toLowerCase();
  arrWord.push(getWord.split("").join(""));
  arrWordReverse.push(getWord.split("").reverse().join(""));
  if (arrWord[0] === arrWordReverse[0]) {
    result.innerText = " É palíndroma.";
  } else {
    result.innerText = "  Não é palíndroma.";
  }
}

function reset() {
  word.value = "";
  result.innerText = "";
}
