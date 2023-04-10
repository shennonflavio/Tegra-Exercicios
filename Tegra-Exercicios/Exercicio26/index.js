const word = document.getElementById("word");
const vowel = document.getElementById("vowel");
const consonant = document.getElementById("consonant");

function checkWord() {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "x",
    "y",
    "w",
    "z",
  ];
  const arrWord = [];
  const arrWordVowels = [];
  const arrWordConsonant = [];
  const getWord = word.value.toLowerCase();
  arrWord.push(getWord.split(""));
  arrWordConsonant.push(
    arrWord[0].filter((element) => consonants.includes(element))
  );
  arrWordVowels.push(arrWord[0].filter((element) => vowels.includes(element)));

  const totalVowels = arrWordVowels[0];
  const totalConsonants = arrWordConsonant[0];
  vowel.innerText = totalVowels.length;
  consonant.innerText = totalConsonants.length;
}

function reset() {
  word.value = "";
  vowel.innerText = "";
  consonant.innerText = "";
}
