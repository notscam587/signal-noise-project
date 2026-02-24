// Mark spiral as visited
if (window.location.pathname.includes("log_247")) {
  localStorage.setItem("visitedSpiral", "true");
}

// Word shift effect
let word = document.getElementById("shiftWord");

if (word) {
  let states = ["normal", "normal?", "normal."];
  let i = 0;

  setInterval(function(){
    i = (i + 1) % states.length;
    word.textContent = states[i];
  }, 3000);
}

// Static fade in
let staticSound = document.getElementById("staticSound");

if (staticSound) {
  staticSound.volume = 0;
  staticSound.play();

  let fadeIn = setInterval(function() {
    if (staticSound.volume < 0.2) {
      staticSound.volume += 0.01;
    } else {
      clearInterval(fadeIn);
    }
  }, 200);
}
