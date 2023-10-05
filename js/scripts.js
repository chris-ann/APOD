console.log("Hello World!")

document.getElementById("prev").style.background = "#4a4a4a"

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const APODs = document.getElementsByClassName("APOD");
console.log(APODs)
let index = 0;

prev.innerHTML = "&larr; go back";

prev.addEventListener("click", goback);
next.addEventListener("click", goforward);

function goback() {
    console.log("going back")
    APODs[index].style.display = "none";
    index++;
    APODs[index].style.display = "grid";
    updateControls();
}
function goforward() {
    console.log("going forward")
    APODs[index].style.display = "none";
    index--;
    APODs[index].style.display = "grid";
    updateControls();
}

function updateControls() {
    if (index == 0) {
        next.style.visibility = "hidden";
    }
    else {
        next.style.visibility = "visible";
    }
    if (index == APODs.length - 1) {
        prev.style.visibility = "hidden";
    }
    else {
        prev.style.visibility = "visibile";
    }
}