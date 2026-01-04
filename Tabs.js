let aboutButtonElement = document.getElementById("aboutButton");
let timeToVisitButtonElement = document.getElementById("timeToVisitButton");
let attractionButtonElement = document.getElementById("attractionsButton");

let aboutContainerElement = document.getElementById("aboutTab");
let timeToVisitContainerElement = document.getElementById("timeToVisitTab");
let attractionsContainerElement = document.getElementById("attractionsTab");
timeToVisitContainerElement.className = "d-none";
attractionsContainerElement.className = "d-none";

aboutButtonElement.onclick = function() {
    aboutContainerElement.className = "d-block";
    timeToVisitContainerElement.className = "d-none";
    attractionsContainerElement.className = "d-none";
    aboutButtonElement.style.backgroundColor = "white";
    timeToVisitButtonElement.style.backgroundColor = "#dae2ec";
    attractionButtonElement.style.backgroundColor = "#dae2ec";

};

timeToVisitButtonElement.onclick = function() {
    aboutContainerElement.className = "d-none";
    attractionsContainerElement.className = "d-none";
    timeToVisitContainerElement.className = "d-block";
    aboutButtonElement.style.backgroundColor = "#dae2ec";
    timeToVisitButtonElement.style.backgroundColor = "white";
    attractionButtonElement.style.backgroundColor = "#dae2ec";
};

attractionButtonElement.onclick = function() {
    aboutContainerElement.className = "d-none";
    timeToVisitContainerElement.className = "d-none";
    attractionsContainerElement.className = "d-block";
    aboutButtonElement.style.backgroundColor = "#dae2ec";
    timeToVisitButtonElement.style.backgroundColor = "#dae2ec";
    attractionButtonElement.style.backgroundColor = "white";
};