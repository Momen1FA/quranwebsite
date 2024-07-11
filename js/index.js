// Get a reference to your checkbox element (replace "myCheckbox" with the actual ID)
const myCheckbox = document.getElementById("darks");

// Add an event listener for the "change" event
myCheckbox.addEventListener("change", function () {
  // This function will be executed whenever the checkbox state changes

  // Check the current state of the checkbox
  if (myCheckbox.checked) {
    document.body.style.backgroundColor = "black";
    document.getElementById("main").style.color = "white";
    document.getElementById("aside").style.borderColor = "White";
    document.getElementById("navbar").style.backgroundColor = "#17696c";
    document.getElementById("darkss").textContent = "🌙";
  } else {
    document.body.style.backgroundColor = "#ebdf96";
    document.getElementById("main").style.color = "black";
    document.getElementById("aside").style.borderColor = "black";
    document.getElementById("darkss").textContent = "☀️";
  }
});

