const salary = document.getElementById("salary");
const newSalary = document.getElementById("newSalary");
const increase = document.getElementById("increase");
const percent = document.getElementById("percent");

function calcSalary() {
  salary.value = parseFloat(salary.value).toFixed(2);
  switch (true) {
    case salary.value <= 999:
      //new salary
      const newSal1 = (salary.value / 100) * 20;
      const salaryNew1 = +salary.value + +newSal1;
      newSalary.innerText = `R$ ${salaryNew1.toFixed(2)}`;
      //increase
      const inc1 = +salaryNew1 - +salary.value;
      increase.innerText = `R$ ${inc1.toFixed(2)}`;
      //percent
      percent.innerText = "20%";
      break;

    case salary.value >= 1000 && salary.value <= 2999:
      //new salary
      const newSal2 = (salary.value / 100) * 20;
      const salaryNew2 = +salary.value + +newSal2;
      newSalary.innerText = `R$ ${salaryNew2.toFixed(2)}`;
      //increase
      const inc2 = +salaryNew2 - +salary.value;
      increase.innerText = `R$ ${inc2.toFixed(2)}`;
      //percent
      percent.innerText = "15%";
      break;

    case salary.value >= 3000 && salary.value <= 7999:
      //new salary
      const newSal3 = (salary.value / 100) * 20;
      const salaryNew3 = +salary.value + +newSal3;
      newSalary.innerText = `R$ ${salaryNew3.toFixed(2)}`;
      //increase
      const inc3 = +salaryNew3 - +salary.value;
      increase.innerText = `R$ ${inc3.toFixed(2)}`;
      //percent
      percent.innerText = "10%";
      break;

    case salary.value >= 8000:
      //new salary
      const newSal4 = (salary.value / 100) * 20;
      const salaryNew4 = +salary.value + +newSal4;
      newSalary.innerText = `R$ ${salaryNew4.toFixed(2)}`;
      //increase
      const inc4 = +salaryNew4 - +salary.value;
      increase.innerText = `R$ ${inc4.toFixed(2)}`;
      //percent
      percent.innerText = "05%";
      break;

    default:
      break;
  }
}

function reset() {
  salary.value = "";
  newSalary.innerText = "";
  increase.innerText = "";
  percent.innerText = "";
}
