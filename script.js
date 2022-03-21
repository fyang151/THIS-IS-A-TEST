
function changeColour () {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  document.documentElement.style.setProperty('--acolor', rgb);
}

function checkPswd() {
  var passwordCorrect = "admin";
  var password = document.getElementById("passwordID").value;
  if (password == passwordCorrect) {
    window.location="thing.html";
  }
  else if (password == ""){
    alert("Please Enter a Password")
  }
  else{
    alert("Passwords Dont Match");
  }
}

var input = document.getElementById("passwordID");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("plagiarismButton").click();
  }
});