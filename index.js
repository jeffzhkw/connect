var connect = document.getElementsByClassName("connect")[0]
var browser = document.getElementsByClassName("browser")[0]
var username = document.getElementById("username").value;
var pw = document.getElementById("pw").value;
const appLst = document.getElementsByClassName("appLst")[0]
const status = document.getElementById("status")

var internet = false;

const connBut = document.getElementsByClassName("buttons")[0].childNodes[1]
const cancelBut = document.getElementsByClassName("buttons")[0].childNodes[3]


connBut.addEventListener("click", function(){
    
    var temp = auth()
    if (temp){
        connect.style.visibility = "hidden";
        destroyApp()
        showConnected();
    }
    else{
        //not connected
    }
    


})

cancelBut.addEventListener("click", function(){
   
})

iconLst = document.getElementsByClassName("icon")
var trashIcon = iconLst[0]
var compIcon = iconLst[1]
var connectIcon = iconLst[2]
var browserIcon = iconLst[3]
const startIcon = document.getElementById("start")
var connectClose = document.getElementsByClassName("closeButton")[0]
var browserClose = document.getElementsByClassName("closeButton")[1]

document.addEventListener("DOMContentLoaded", function(){
    startTime()
})

trashIcon.addEventListener("click", function(){
    alert("Nothing in trash can")
})

compIcon.addEventListener("click", function(){
    if (internet){
        alert("Nothing particular interesting, I should rather start web browsing")
    }
    else{
        alert("I'd better connect internet first")
    }
   
})


connectIcon.addEventListener("click", function (){
    if (internet){
        alert("I've connected to the internet")
        return
    }
    connect.style.visibility = "visible";
    buildApp("Connect Broadband Connection")
})

connectClose.addEventListener("click", function(){
    connect.style.visibility = "hidden";
    destroyApp()
})

browserIcon.addEventListener("click", function (){
    browser.style.visibility = "visible";
    buildApp("Internet Explorer")
    if (internet){
        loadWeb()
        addMalware()
    }
    else{notFound()}
})

browserClose.addEventListener("click", function(){
    browser.style.visibility = "hidden";
    destroyApp()
})

startIcon.addEventListener("click", function(){
    noImpl()
})

function auth(){
    username = document.getElementById("username").value;
    pw = document.getElementById("pw").value;
    if (username && pw){
        //success
        console.log(username, pw)
        internet = true
        return true
    }
    else{
        if (username){alert("I'd better enter my password")}
        else if (pw){alert("I'd better enter my username")}
        else{alert("I'd better enter my username and passwod")}
        return false    
    }
    
}

function buildApp(name){
    let thumbnail = document.createElement("DIV");
    thumbnail.innerText= name;
    appLst.appendChild(thumbnail)
}

function destroyApp(){
    appLst.removeChild(appLst.childNodes[1])

}
function showConnected(){
    console.log("In show connected")
    let notify = document.createElement("DIV");
    notify.classList.add("notifyConnected");
    notify.innerText = "Internet Connected"
    status.insertBefore(notify, status.childNodes[0])
    myVar = setTimeout(function(){
        notify.style.opacity = 0;
    }, 3000)

}

function loadWeb(){
    

}
function addMalware(){

}
function notFound(){

}
function noImpl(){
    alert("Why I would click that")
    alert("I boot up my computer to connect to the internet")
    alert("not to shut it down")
}

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