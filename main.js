var numSquares = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

innit();

function innit() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "easy" ? numSquares=3: numSquares=6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i=0; i<square.length;i++){
        square[i].style.backgroundColor = colors[i];
        square[i].addEventListener("click",function () {
            if (this.style.backgroundColor === pickedColor) {
                messageDisplay.innerHTML = "CORRECT!";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.innerHTML = "Try again?!"
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.innerHTML = "TRY AGAIN";
            }
        });
    }
}

function reset() {
    colors = getRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    resetButton.innerHTML = "New colors";
    messageDisplay.innerHTML = "";
    for (var i=0; i<square.length;i++) {
        if (colors[i]){
            square[i].style.display = "block";
            square[i].style.backgroundColor = colors[i];
        }
        else
            square[i].style.display = "none";
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.innerHTML="";
}

resetButton.addEventListener("click",function () {
    reset();
});

function changeColors(color) {
    for (var i=0; i<square.length;i++){
        square[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var result = Math.floor(Math.random()*colors.length);
    return colors[result];
}

function getRandomColors(num) {
    var arr = [];
    for (var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}
