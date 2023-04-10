const firstNote = document.getElementById("firstNote");
const secondNote = document.getElementById("secondNote");
const finalNote = document.getElementById("finalNote");
const noteResult = document.getElementById("noteResult");

function calcNotes() {
  firstNote.value = parseFloat(Number(firstNote.value)).toFixed(1);
  secondNote.value = parseFloat(Number(secondNote.value)).toFixed(1);
  const note = +firstNote.value + +secondNote.value;
  if (+secondNote.value === 0) {
    secondNote.value = "";
    finalNote.value = "";
  }

  if (+firstNote.value !== 0 && +secondNote.value !== 0) {
    finalNote.value = note.toFixed(1);
  }
  if (finalNote.value !== "" && note < 60.0) {
    noteResult.innerHTML = `
  <span>Reprovado</span>
  `;
  } else if (finalNote.value !== "" && note > 60.0) {
    noteResult.innerHTML = `
    <span>Aprovado</span>
    `;
  }
}

function reset() {
  firstNote.value = "";
  secondNote.value = "";
  finalNote.value = "";
  const result = noteResult;
  const elementChildren = result.children[0];
  result.removeChild(elementChildren);
}
