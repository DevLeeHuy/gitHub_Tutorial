var buttons = document.getElementsByClassName("ctrl-btn");
var input = document.getElementById("input");
var operators = document.getElementsByClassName("operator");
var equal = document.querySelector(".equal");
var clear = document.querySelector(".clear");
var num1 = 0;
var temp;
var result = 0;
var operate = {
  divide: function (a, b) {
    return a / b;
  },
  multi: (a, b) => a * b,
  plus: (a, b) => a + b,
  subtract: (a, b) => {
    return a - b;
  },
};

Array.from(buttons).forEach((button) => {
  button.onclick = (e) => {
    e.preventDefault();
    if (
      !Array.from(operators).includes(button) &&
      button !== equal &&
      button !== clear
    )
      // add input value with only number
      input.value += button.innerHTML;
  };
});

Array.from(operators).forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (num1 === 0) {
      num1 = input.value;
      input.placeholder = "";
    } else {
      num1 = operate[temp.getAttribute("rule")](
        parseFloat(num1),
        parseFloat(input.value)
      );
      input.placeholder = num1; // show the result after an operator
    }
    temp = operator;
    result = num1;
    input.value = "";
  });
});

clear.addEventListener("click", () => {
  if (input.value) {
    input.value = input.value.slice(0, input.value.length - 1);
  }
});

equal.addEventListener("click", () => {
  input.placeholder = operate[temp.getAttribute("rule")](
    parseFloat(result),
    parseFloat(input.value)
  ); // show result on placeholder for new input instead of writing after the result
  num1 = 0; //reset the calculator
  input.value = "";
});
