const containerSeconds = document.querySelector('#seconds');
const containerMinutes = document.querySelector('#minutes');
const containerHours = document.querySelector('#hours');
const containerDays = document.querySelector('#days');
const containerNextYear = document.querySelector('#year');
const spinnerLoading = document.querySelector('#loading');
const containerCountdown = document.querySelector('#countdown');

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);
containerNextYear.textContent = nextYear;

const getUnit = unit => unit < 10 ? '0' + unit : unit;

const insertCountdownValues = ({days, hours, minutes, seconds}) => {
    containerSeconds.textContent = getUnit(seconds);
    containerMinutes.textContent = getUnit(minutes);
    containerHours.textContent = getUnit(hours);
    containerDays.textContent = getUnit(days);
};

const updateCountdown = () => {
    const currentTime = new Date();
    const diference = newYearTime - currentTime;
    const days = Math.floor(diference/1000/60/60/24);
    const hours = Math.floor(diference/1000/60/60)%24;
    const minutes = Math.floor(diference/1000/60)%60;
    const seconds = Math.floor(diference/1000)%60;

    insertCountdownValues({days, hours, minutes, seconds});
}

const addCountdownDisplay = () =>{
    spinnerLoading.remove();
    containerCountdown.style.display = 'flex';
}

setTimeout(addCountdownDisplay,1000);
setInterval(updateCountdown,1000);