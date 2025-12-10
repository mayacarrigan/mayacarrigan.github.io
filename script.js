const text = "urban-micro-ecologies";
const speed = 90; // typing speed ms per letter
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-header").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    // make cursor blink forever after typing finishes
    document.getElementById("typing-header").style.borderRight = "3px solid transparent";
    setInterval(() => {
      const header = document.getElementById("typing-header");
      header.style.borderRight = header.style.borderRight === "3px solid black"
        ? "3px solid transparent"
        : "3px solid black";
    }, 500);
  }
}

typeWriter();
