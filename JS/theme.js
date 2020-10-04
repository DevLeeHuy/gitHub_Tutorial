let darkColor = "rgb(82, 82, 82)";
let lightColor = "rgb(249, 249, 249)";
let darkShadow = " 0 5px 5px 0  rgb(39, 39, 39)";
let lightShadow = " 0 5px 5px 0 rgb(213, 213, 218)";
let theme = document.getElementById("theme-switcher");
let forms = document.querySelectorAll(".form");
theme.addEventListener("click", () => {
  let bg = document.body;
  if (
    bg.style.backgroundColor === "" ||
    bg.style.backgroundColor === lightColor
  ) {
    bg.style.backgroundColor = darkColor;
    forms.forEach((form) => {
      form.style.boxShadow = darkShadow;
    });

    theme.style.color = lightColor;
  } else {
    bg.style.backgroundColor = lightColor;
    forms.forEach((form) => {
      form.style.boxShadow = lightShadow;
    });

    theme.style.color = darkColor;
  }
});
