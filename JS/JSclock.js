showTheClock = () => {
  var time = document.getElementById("time");
  var hour = document.querySelector(".hr");
  var min = document.querySelector(".mn");
  var sec = document.querySelector(".sc");
  const deg = 6;
  setInterval(() => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    time.innerHTML = h + ":" + m + ":" + s;
    moveClock(h, m, s);
  }, 1000);

  function checkTime(i) {
    if (i < 10) return (i = "0" + i);
    return i;
  }
  function moveClock(h, m, s) {
    h = h * 30;
    m = m * deg;
    s = s * deg;

    hour.style.transform = `rotateZ(${h + m / 12}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s + m * 60}deg)`;
  }
};
