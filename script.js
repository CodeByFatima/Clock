const element = document.querySelector(".clock");
const tick = document.querySelector("audio")

setInterval(() => {
  const time = new Date();
  const opt = {
    timeZone: "Asia/Karachi",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  element.textContent = time.toLocaleTimeString('en-US', opt);
  tick.play();
}, 1000);
