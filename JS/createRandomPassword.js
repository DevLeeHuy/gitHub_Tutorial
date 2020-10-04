let creBtn = document.getElementById("generate-btn");
let Password = document.getElementById("randomPass");
creBtn.addEventListener("click", (event) => {
  event.preventDefault();
  Password.value = createPassword(12);
});

function createPassword(passLen) {
  var randomElement = [
    (lowerCase = "abcdefghijklmnopqrstuvwxyz"),
    (upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
    (number = "0123456789"),
    (symbol = "@%+!#$^?:.(){}[]~-_`"),
  ];
  var newString = " ";
  for (let i = 0; i < passLen; i++) {
    var ranCase = Math.floor(Math.random() * randomElement.length);
    var ranIndex = Math.floor(Math.random() * randomElement[ranCase].length);
    newString += randomElement[ranCase][ranIndex];
  }

  return newString;
}
