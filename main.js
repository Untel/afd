import './style.css'

var countDownDate = new Date("Nov 17, 2023 22:00:00").getTime();

var format = function (n) {
  return n < 10 ? '0' + n : n;
}

var inter = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = format(days);
  document.getElementById("hours").innerHTML = format(hours);
  document.getElementById("mins").innerHTML = format(minutes);
  document.getElementById("secs").innerHTML = format(seconds);
}, 1000);
