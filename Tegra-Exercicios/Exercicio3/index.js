function getData() {
  const name_1 = document.getElementById("name1");
  const name_2 = document.getElementById("name2");
  const age_1 = document.getElementById("age1");
  const age_2 = document.getElementById("age2");
  const phrase = document.getElementById("phrase");

  const average = (Number(age_1.value) + Number(age_2.value)) / 2;

  if (
    name_1.value !== "" &&
    name_2.value !== "" &&
    age_1.value !== "" &&
    age_2.value !== ""
  ) {
    phrase.innerHTML = `A idade média de ${name_1.value} e ${
      name_2.value
    } é de ${average.toFixed(1)} anos`;
    return;
  }
}
