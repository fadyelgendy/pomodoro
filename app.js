// Define DOM Vars
const second = document.getElementById("second"),
  minute = document.getElementById("minute"),
  start = document.getElementById("start"),
  stop = document.getElementById("stop"),
  reset = document.getElementById("reset"),
  status = document.getElementById("status");

// Event Listeners
start.addEventListener("click", timerFunc);
let s = 59,
  m = 24;
function timerFunc() {
  // Start Timer
  let timer = setInterval(function() {
    second.innerHTML = s;
    s--;
    if (s == 0) {
      s = 59;
      m--;
      if (m == 0) {
        (s = 59), (m = 5);
        let endSound = new Audio("telephone-ring-03a.mp3");
        endSound.play();
        status.innerHTML = "Break";
        
        if (m == 0) {
          let endSound = new Audio("telephone-ring-03a.mp3");
          m = 24;
          status.innerHTML = "Focus";
        }
      }
    }

    if (s < 10) {
      second.innerHTML = "0" + s;
    } else {
      second.innerHTML = s;
    }
    if (m < 10) {
      minute.innerHTML = "0" + m;
    } else {
      minute.innerHTML = m;
    }
  }, 1000);

  //   Stop Function
  stop.addEventListener("click", function() {
    s = s;
    m = m;
    clearInterval(timer);
  });

  reset.addEventListener("click", () => {
    s = 60;
    m = 24;
    second.innerHTML = s;
    minute.innerHTML = m;
  });
}
