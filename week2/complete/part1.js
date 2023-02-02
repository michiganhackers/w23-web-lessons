const dateSpan = document.getElementById("date-location");
const timeSpan = document.getElementById("time-location");
const dateButton = document.getElementById("update-date");
const timeButton = document.getElementById("update-time");

dateSpan.textContent = new Date().toDateString();
timeSpan.textContent = new Date().toTimeString();


dateButton.onclick = function (event) {
    dateSpan.textContent = new Date().toDateString();
}

timeButton.onclick = function (event) {
    timeSpan.textContent = new Date().toTimeString();
}
