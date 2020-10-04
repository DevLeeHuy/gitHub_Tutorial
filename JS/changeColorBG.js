let changeBtn = document.getElementById("change-btn");
let changeElement = document.getElementById("form-2");
changeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);

  changeElement.style.backgroundColor = `rgb(${x},${y},${z})`;
});
