const xhr = new XMLHttpRequest();

const baseURL = "https://api.nasa.gov/planetary/apod"
const query = "?api_key=APIKEYHERE&count=5"
const url = baseURL + query;
var APOD_array;

xhr.open("GET", url, true);
xhr.send(null);

xhr.onload = function () {
    console.log("it worked!")
    APOD_array = JSON.parse(xhr.responseText);
    console.log(APOD_array);
    createAPOD();
}

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;

function createAPOD() {
    const APOD = document.createElement("div");
    APOD.className = "APOD";
    APOD.innerHTML = "<figure>"
        + "<img src='" + APOD_array[index].url + "'>"
        + "<p>" + APOD_array[index].copyright + "</p>"
        + "</figure>"
        + "<div><p>" + APOD_array[index].date + "</p>"
        + "<h2>" + APOD_array[index].title + "</h2>";
    document.getElementById("APOD__group").innerHTML = "";
    document.getElementById("APOD__group").appendChild(APOD);
}
// createAPOD();

prev.innerHTML = "&larr; go back";

prev.addEventListener("click", goback);
next.addEventListener("click", goforward);

function goback() {
    console.log("going back")
    //APODs[index].style.display = "none";
    index++;
    //APODs[index].style.display = "grid";
    updateControls();
    createAPOD();
}
function goforward() {
    console.log("going forward")
    //APODs[index].style.display = "none";
    index--;
    //APODs[index].style.display = "grid";
    updateControls();
    createAPOD();
}

function updateControls() {
    if (index == 0) {
        next.style.visibility = "hidden";
    }
    else {
        next.style.visibility = "visible";
    }
    if (index == APOD_array.length - 1) {
        prev.style.visibility = "hidden";
    }
    else {
        prev.style.visibility = "visibile";
    }
}