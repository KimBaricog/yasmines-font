const output = document.getElementById("outPut");
const input = document.getElementById("input");
const textinput = document.getElementById("textinput");
const btn = document.getElementById("btn");

input.addEventListener("input", function () {
  if (input.value.trim() !== "") {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});
btn.addEventListener("click", function () {
  speechSynthesis.speak(new SpeechSynthesisUtterance(input.value));
});

input.addEventListener("keydown", function (event) {
  output.classList.add("output");
  const key = event.key;
  if (output.value === "") {
    output.classList.add("output");
  } else if (key.toLowerCase() === "a") {
    const img = document.createElement("img");
    img.src = "static/fonts/A.png";
    img.alt = "Image";
    output.appendChild(img);
    //Backspace
  } else if (key === "Backspace") {
    if (output.lastChild) {
      output.removeChild(output.lastChild);
    }
  } else if (key.toLowerCase() === "b") {
    const img = document.createElement("img");
    img.src = "static/fonts/B.png";
    img.alt = "Image";
    output.appendChild(img);
  } else if (key.toLowerCase() === "c") {
    const img = document.createElement("img");
    img.src = "static/fonts/c.png";
    img.alt = "Image";
    output.appendChild(img);
  } else if (key.toLowerCase() === "d") {
    const img = document.createElement("img");
    img.src = "static/fonts/D.png";
    img.alt = "Image";
    output.appendChild(img);
  }
});
