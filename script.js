/* document.querySelector('#jstest').addEventListener("click", function() {
    alert("asds")
}); */

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const button = document.querySelector('#setTime');
const iDays = document.querySelector('#i1');
const iHours = document.querySelector('#i2');
const iMinutes = document.querySelector('#i3');
const iSeconds = document.querySelector('#i4');

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
  daysElement.innerText = days.toString().padStart(2, '0');
  hoursElement.innerText = hours.toString().padStart(2, '0');
  minutesElement.innerText = minutes.toString().padStart(2, '0');
  secondsElement.innerText = seconds.toString().padStart(2, '0');
};
let a = new Date();
let b = a;
let targetDate;

const updateDate = function() {
  // let cdY = b.getFullYear();
  targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + iDays.valueAsNumber);
  targetDate.setHours(targetDate.getHours() + iHours.valueAsNumber);
  targetDate.getMonth() + 1;
  targetDate.setMinutes(targetDate.getMinutes() + iMinutes.valueAsNumber);
  targetDate.setSeconds(targetDate.getSeconds() + iSeconds.valueAsNumber);
  // targetDate = new Date(`${cdY}-${cdM}-${cdD} ${cdH}:${cdMin}:${cdS}`)
  updateTime(targetDate);
  setInterval(updateTime, 1000, targetDate);
};

button.addEventListener("click", updateDate);

// const cdY = new Date().getFullYear() + 0;
// const cdM = new Date().getMonth() + 1;
// const cdD = new Date().getDate() + 0;
// const cdH = new Date().getHours() + 0;
// const cdMin = new Date().getMinutes() + 0;
// const cdS = new Date().getSeconds() + 10;
// const targetDate = new Date(`${cdY}-${cdM}-${cdD} ${cdH}:${cdMin}:${cdS}`);

