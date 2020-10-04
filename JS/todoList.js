var addBtn = document.querySelector(".add-btn");
var list = document.querySelector(".list");
var inputList = document.querySelector(".inputList");

var calendar = document.getElementById("calendar");

document.getElementById("form-6").addEventListener("submit", (e) => {
  e.preventDefault();
});

//Click refresh Button
calendar.parentElement.querySelector("i").addEventListener("click", () => {
  list.querySelectorAll("div").forEach((element) => element.remove());
});

showCalendarInToList = () => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var now = new Date();
  var date = now.getDate().toString().padStart(2, "0");
  var month = (now.getMonth() + 1).toString().padStart(2, "0");
  var year = now.getFullYear().toString().padStart(2, "0");
  var day = now.getDay();
  calendar.innerHTML = highlight`Today is ${days[day]} <br> Calendar ${date}__${month}__${year} `;
};

//Add todo element
addBtn.addEventListener("click", () => {
  if (inputList.value) {
    var work = document.createElement("div");
    list.appendChild(work);
    work.classList.add("work");

    var tick = document.createElement("i");
    work.appendChild(tick);
    tick.classList.add("fa");
    tick.classList.add("fa-check-circle");
    tick.classList.add("todoCheck");
    tick.addEventListener("click", () => {
      handleTick(tick);
    });

    var describe = document.createElement("span");
    describe.innerHTML = inputList.value;
    work.appendChild(describe);
    describe.classList.add("desWork");

    var del = document.createElement("i");
    work.appendChild(del);
    del.classList.add("fas");
    del.classList.add("fa-trash-alt");
    del.classList.add("removeWork");
    del.addEventListener("click", () => {
      del.parentElement.remove();
    });

    inputList.value = "";
  }
});

inputList.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addBtn.click();
  }
});

//Checked or unchecked todo
function handleTick(tick) {
  let thisWork = tick.parentElement;
  let describe = thisWork.querySelector("span");
  if (tick.style.color === "" || tick.style.color === "gray") {
    tick.style.color = "#1dbfaf";
    describe.style.opacity = "0.5";
    describe.style.textDecoration = "line-through";
  } else {
    tick.style.color = "gray";
    describe.style.opacity = "1";
    describe.style.textDecoration = "none";
  }
}

// Highlight TEXT
function highlight([first, ...strings], ...values) {
  return values
    .reduce(
      (acc, cur) => {
        return [...acc, `<span>${cur}</span>`, strings.shift()];
      },
      [first]
    )
    .join("");
}
