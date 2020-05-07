var connect = document.getElementsByClassName("connect")[0]
var browser = document.getElementsByClassName("browser")[0]
var username = document.getElementById("username").value;
var pw = document.getElementById("pw").value;
const appLst = document.getElementsByClassName("appLst")[0]
const status = document.getElementById("status")
var browserContentWrapper = document.getElementsByClassName("browserContentWrapper")[0]

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
var clickedTime = 0
cancelBut.addEventListener("click", function(){

    if(clickedTime == 0){
        cancelBut.style.transform += "translateY("+ 50 +"px)"
        clickedTime+=1
    }
    else if (clickedTime == 1){
        cancelBut.style.transform += "translateX("+ 10 +"vw)"
        clickedTime+=1
    }
    else if (clickedTime == 5){
        alert("Why would I hit cancel button if I want to connect to internet")
        document.getElementsByClassName("buttons")[0].removeChild(this)
    }
    else{
        cancelBut.style.transform += "translateX("+ 10 +"vw)"
        clickedTime+=1
    }


    
    
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
    clearBrowser("notConnected")
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
function notification(){
    let notify = document.createElement("DIV");
    notify.classList.add("notifyConnected");
    notify.innerText = "Internet Connected"
    status.insertBefore(notify, status.childNodes[0])
    setTimeout(function(){
        notify.style.opacity = 0;
        
    }, 3000)
}

function removeNotification(){
    setTimeout(function(){
        status.removeChild(status.childNodes[0])
    },5000)
}
function showConnected(){
    console.log("In show connected")
    notification()
    removeNotification()
    setTimeout(function(){
        let square = document.createElement("DIV");
        square.classList.add("symbol");
        status.insertBefore(square, status.childNodes[0])
        square.addEventListener("mouseover", function(){
            notification()
            removeNotification()
        })
    },5000)


}

function loadWeb(){
    let outerWrapper = document.createElement("DIV");
    outerWrapper.setAttribute("id", "contentRoot");

    let wrapper = document.createElement("DIV");
    wrapper.classList.add("inConnect");

    setInterval(function(){
            newPair = addaPair()
        
        toNewPos(newPair[0])
        toNewPos(newPair[1])
    }, 500)

    outerWrapper.appendChild(wrapper)
    browserContentWrapper.appendChild(outerWrapper)

    
    function toNewPos(elem){
        // Get viewport dimensions (remove the dimension of the div)
        var h = browserContentWrapper.offsetHeight
        var w = browserContentWrapper.offsetWidth
        console.log(h,w)
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
        
        elem.style.transform = "translate("+nh+"px,"+ nw+"px)"
        
    }
    function addaPair(){
        let floatUser = document.createElement("DIV");
        floatUser.classList.add("floatUser");
        floatUser.appendChild(document.createTextNode("Your Username: "+username));

        let floatPw = document.createElement("DIV");
        floatPw.classList.add("floatPw");
        floatPw.appendChild(document.createTextNode("Your Password: "+pw));
        
        wrapper.appendChild(floatUser)
        wrapper.appendChild(floatPw) 
        return [floatUser, floatPw]
    }
    
    
}
function addMalware(){
    var counter = 0
    iconWrapper = document.getElementsByClassName("iconsWrapper")[0]

    function newIcon(num){
        let iconElem = document.createElement("DIV");
        iconElem.classList.add("icon");

        let oof = document.createElement("DIV");

        let hSix = document.createElement("H6");
        hSix.classList.add("title");
        hSix.appendChild(document.createTextNode("Malware #" + num));

        iconElem.appendChild(oof)
        iconElem.appendChild(hSix)

        iconWrapper.appendChild(iconElem)
    }

    setInterval(function(){
        newIcon(counter)
        counter+=1
    }, 1000)

}
function notFound(){
    let outerWrapper = document.createElement("DIV");
    outerWrapper.setAttribute("id", "contentRoot");
    
    let wrapper = document.createElement("DIV");
    wrapper.classList.add("notConnected");

    let p = document.createElement("P");
    p.appendChild(document.createTextNode("Internet Explorer cannot display the webpage"));

    let hRuler = document.createElement("hr");

    let innerWrapper = document.createElement("DIV");

    let hTwo = document.createElement("H2");
    hTwo.appendChild(document.createTextNode("What you can try:"));

    let diaBut = document.createElement("button");
    diaBut.innerHTML = "Diagnose Connection Problems"
    diaBut.setAttribute("id", "diagnose");
    diaBut.addEventListener("click", function (){
        alert("The difference between stupidity and genius is that genius has its limits.")
        alert("open Connect Broadband Connection")     
    })

    let hThree = document.createElement("H3");
    hThree.appendChild(document.createTextNode("More information"));
    hThree.addEventListener("click", function(){
        setInterval(function(){ wrapper.appendChild(document.createTextNode("Useless Information.......")) }, 300);
        
    })
    innerWrapper.appendChild(hTwo)
    innerWrapper.appendChild(diaBut)
    innerWrapper.appendChild(hThree)

    wrapper.appendChild(p)
    wrapper.appendChild(hRuler)
    wrapper.appendChild(innerWrapper)

    outerWrapper.appendChild(wrapper)
    browserContentWrapper.appendChild(outerWrapper)
    
}

function clearBrowser(){
    el = document.getElementById("contentRoot")
    console.log(el)
    browserContentWrapper.removeChild(el)
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