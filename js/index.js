const colors = ["#c8c7f7", "#fed8b1", "#90ee90", "#ff7f7f"];

function setRandomColor() {
    var rand = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[rand];
}