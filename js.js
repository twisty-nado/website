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

function scrollto(w){
    if (w == ".main"){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    } else{
        document.querySelector(w).scrollIntoView();
    }
}