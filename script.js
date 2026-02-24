// Subtle shifting word effect
let word = document.getElementById("shiftWord");

if (word) {
  let states = ["normal", "normal?", "normal."];
  let i = 0;

  setInterval(function(){
    i = (i + 1) % states.length;
    word.textContent = states[i];
  }, 3000);
}
