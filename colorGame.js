var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquare();
    reset();
}

function setUpModeButtons(){
    for(var i=0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");    
            //Same as if condition, another way to write if
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;           
            reset();
        });
    }
}

function setUpSquare(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again?"
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

// for(var i=0; i < modeButtons.length; i++){
//     modeButtons[i].addEventListener("click",function(){
//         modeButtons[0].classList.remove("selected");
//         modeButtons[1].classList.remove("selected");
//         this.classList.add("selected"); 

//         //Same as if condition, another way to write if
//         this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
//         if(this.textContent === "Easy"){
//             numSquares = 3;
//         }
//         else{
//             numSquares = 6;
//         }
//         reset();
//         //figure out how many squares to show
//         //pick new colors
//         //pick a new pickedColor
//         //update page to reflect changes
//     });
// }

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor(); 
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none"
        }       
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColor(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){ //loop num times
        //get random color and push into arr
        arr.push(randomColor()) //add array
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" form 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" form 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" form 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

