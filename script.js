/* document.querySelector('#jstest').addEventListener("click", function() {
    alert("asds")
}); */

const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

const buttonElement = document.querySelector("#setTime");
let inputDays = document.querySelector("#i1");
let inputHours = document.querySelector("#i2");
let inputMinutes = document.querySelector("#i3");
let inputSeconds = document.querySelector("#i4");

/* setDate, setHours, setMinutes. setSeconds */

const getTimeDifference = (targetDate) => {
    let diff = targetDate.getTime() - Date.now();
  
    if (diff < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
  
    return { days, hours, minutes, seconds };
};
  
const updateTime = (targetDate) => {
    const { days, hours, minutes, seconds } = getTimeDifference(targetDate);
    daysElement.innerText = days;
    hoursElement.innerText = hours.toString().padStart(2, "0");
    minutesElement.innerText = minutes.toString().padStart(2, "0");
    secondsElement.innerText = seconds.toString().padStart(2, "0");
};
const targetDate = new Date();

const startCountdown = function() {
    targetDate.setDate(targetDate.getDate() + inputDays.value);
    targetDate.setHours(targetDate.getHours() + inputHours.value);
    targetDate.setMinutes(targetDate.getMinutes() + inputMinutes.value);
    targetDate.setSeconds(targetDate.getSeconds() + inputSeconds.value);
    updateTime(targetDate);
    setInterval(updateTime, 1000, targetDate);
}
buttonElement.addEventListener("click", startCountdown);

