const btnStart = document.getElementById("btn_start");
const btnCancel = document.getElementById("btn_cancel");
const btnPause = document.getElementById("btn_pause");
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

const getTimeUnit = (unit) => (unit < 10 ? "0" + unit : unit);

const insertCountdownValues = ({ hours, minutes, seconds }) => {
  outHours.textContent = getTimeUnit(hours);
  outMinutes.textContent = getTimeUnit(minutes);
  outSeconds.textContent = getTimeUnit(seconds);
};

const updateCountDown = (duration) => {
  let timer = duration;

  let interval = setInterval(() => {
    hours = Math.floor(timer / 60 / 60);
    minutes = Math.floor(timer / 60 - hours * 60);
    seconds = Math.floor(timer % 60);
    console.log(timer);

    timer -= 1;
    insertCountdownValues({ hours, minutes, seconds });

    if (timer < 0) {
      clearInterval(interval);
    }
  }, 1000);
};
