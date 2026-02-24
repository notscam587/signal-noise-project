// Mark spiral as visited
if (window.location.pathname.includes("log_247")) {
  localStorage.setItem("visitedSpiral", "true");
}

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
let staticSound = document.getElementById("staticSound");

if (staticSound) {
  setTimeout(function(){
    staticSound.volume = 0.2; // subtle
    staticSound.play();
  }, 0); // starts after 8 seconds
}

// Intensify static during spiral
setTimeout(function() {
  let styleSheet = document.styleSheets[0];
  styleSheet.insertRule(
    ".dark::before { opacity: 0.08 !important; animation: staticMove 0.2s steps(2) infinite !important; }",
    styleSheet.cssRules.length
  );
}, 8000); // 8 seconds after page load
