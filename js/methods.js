//colors: https://www.schemecolor.com/beautiful-light-colors.php
const colors = ["#ACDDDE", "#CAF1DE", "#E1F8DC", "#FEF8DD", "#FFE7C7", "#F7D8BA" , "#c6bed8" , "#93acff"];

function setRandomColor() {
    var rand = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[rand];
}