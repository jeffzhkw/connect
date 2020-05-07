var connect = document.getElementsByClassName("connect")[0]

var connectIcon = document.getElementsByClassName("icon")[2]
var connectClose = document.getElementsByClassName("closeButton")[0]


document.addEventListener("DOMContentLoaded", function(){
    startTime()
})
connectIcon.addEventListener("click", function (){
    connect.style.visibility = "visible";
})

connectClose.addEventListener("click", function(){
    connect.style.visibility = "hidden";
})
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}