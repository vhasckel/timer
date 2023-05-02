const btnStart = document.getElementById("btn_start");
const btnCancel = document.getElementById("btn_cancel");
const getHour = document.getElementById("hour");
const getMinute = document.getElementById("minute");
const getSecond = document.getElementById("second");

const outHours = document.getElementById("hours");
const outMinutes = document.getElementById("minutes");
const outSeconds = document.getElementById("seconds");

btnStart.addEventListener("click", () => {
  let duration =
    parseInt(getHour.value) * 60 * 60 +
    parseInt(getMinute.value) * 60 +
    parseInt(getSecond.value);

  updateCountDown(duration);
});

const updateCountDown = (duration) => {
  let timer = duration;
  let hours = "";
  let minutes = "";
  let seconds = "";

  let interval = setInterval(() => {
    hours = Math.floor(timer / 60 / 60);
    minutes = Math.floor(timer / 60 - hours * 60);
    seconds = Math.floor(timer % 60);

    console.log(timer);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    outHours.textContent = `${hours}:`;
    outMinutes.textContent = `${minutes}:`;
    outSeconds.textContent = `${seconds}`;

    timer -= 1;

    if (timer < 0) {
      clearInterval(interval);
    }
  }, 1000);
};
