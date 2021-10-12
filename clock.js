function btn_one()
{clearInterval(x);
document.getElementById("timer").innerHTML = "STOPPED"; }

var countDown = new Date("Oct 22, 2021 20:17:15").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDown - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  } 
 
}, 1000);
