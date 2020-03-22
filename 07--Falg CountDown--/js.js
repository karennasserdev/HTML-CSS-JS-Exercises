let days = document.querySelector('.clock-text-days');
let hours = document.querySelector('.clock-text-hours');
let minutes = document.querySelector('.clock-text-minutes');
let seconds = document.querySelector('.clock-text-seconds');

let currentDate = new Date().getFullYear();
let finalDate = new Date(++currentDate, 0);

const countDown = setInterval(function () {

  const now = new Date();

  let diff = finalDate.getTime() - now.getTime();

  let d = Math.floor(diff / 1000 / 60 / 60 / 24);
  let h = Math.floor(diff / 1000 / 60 / 60) % 24;
  let m = Math.floor(diff / 1000 / 60 / 60) % 60;
  let s = Math.floor(diff / 1000) % 60;
  
  days.innerHTML = `${d}`;
  hours.innerHTML = `${h}`;
  minutes.innerHTML = `${m}`;
  seconds.innerHTML = `${s}`;

}, 1000);