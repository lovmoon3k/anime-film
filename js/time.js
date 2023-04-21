function updateTime() {
    var now = new Date();
    var timeString = now.toLocaleTimeString();
    var dateString = now.toLocaleDateString();
    document.getElementById("current-time").innerHTML = timeString + " " + dateString;
}

setInterval(updateTime, 1000);
