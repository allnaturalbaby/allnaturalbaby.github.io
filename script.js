const myTime = document.querySelector("#timeDisplay");

setInterval(function() {
    let targetTime = new Date();
    // timezone is not dynamic. 1 = normal, 2 = daylight saving
    let timeZoneSite = 1;
    let tzDiff = timeZoneSite * 60 + targetTime.getTimezoneOffset();
    let offsetTime = new Date(targetTime.getTime() + tzDiff * 60 * 1000);
    myTime.innerHTML = `${offsetTime.getHours()}:${offsetTime.getMinutes()}:${offsetTime.getSeconds()}`;
}, 500);
