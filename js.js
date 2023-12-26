var hidden = document.querySelector(".hiddenarea")

function showhidephot() {
    var phot = document.querySelector(".photography")
    if (phot.style.left == "50%") {
        phot.style.left = "150%"
        phot.style.animation = "slide-out 1s ease-in-out"
        setInterval(() => {
        }, 1000);
    } else {
        phot.style.left = "50%"
        phot.style.animation = "slide-in 1s ease-in-out"
    }
}

function showhidemoreinfo() {
    var phot = document.querySelector(".moreinfo")
    if (phot.style.left == "50%") {
        phot.style.left = "150%"
        phot.style.animation = "slide-out 1s ease-in-out"
        setInterval(() => {
        }, 1000);
    } else {
        phot.style.left = "50%"
        phot.style.animation = "slide-in 1s ease-in-out"
    }
}

function showhidemoreinfo() {
    var phot = document.querySelector(".moreinfo")
    if (phot.style.left == "50%") {
        phot.style.left = "150%"
        phot.style.animation = "slide-out 1s ease-in-out"
        setInterval(() => {
        }, 1000);
    } else {
        phot.style.left = "50%"
        phot.style.animation = "slide-in 1s ease-in-out"
    }
}

function scrollto(w) {
    if (w == ".main") {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    } else {
        document.querySelector(w).scrollIntoView();
    }
}

function checkBlur() {
    var check = document.getElementById("blurCh")
    if (check.checked) {
        document.documentElement.style.setProperty("--blur", "12px")
    } else {
        document.documentElement.style.setProperty("--blur", "0px")
    }
}

function checkOpacity() {
    var check = document.getElementById("opacityCh")
    var check2 = document.getElementById("blurCh")
    if (check.checked) {
        document.documentElement.style.setProperty("--opacity", ".6")
        check2.disabled = false
    } else {
        document.documentElement.style.setProperty("--opacity", "1")
        check2.checked = false
        check2.disabled = true
    }
}

function checkZoom() {
    var check = document.getElementById("zoomCh")
    if (check.checked) {
        document.documentElement.style.setProperty("--zoom", "105%")
    } else {
        document.documentElement.style.setProperty("--zoom", "100%")
    }
}

function checkHover() {
    var check = document.getElementById("hoverCh")
    if (check.checked) {
        document.documentElement.style.setProperty("--hover", "#ffffff65")
    } else {
        document.documentElement.style.setProperty("--hover", "#00000065")
    }
}

function downloadFiles(f) {
    if (f == "cbm") {
        location.href = "https://github.com/twisty-nado/website/releases/download/downloads/cbm-1-0-2-b-c.exe"
    } else if (f == "ttt") {
        location.href = "https://github.com/twisty-nado/website/releases/download/downloads/tictactoe.exe"
    }
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.querySelector('.clock').innerHTML = h + ":" + m;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}