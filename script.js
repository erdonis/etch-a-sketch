//function that creates a new grid based on its parameter
const grid = document.querySelector(".grid");
let cell = [];

function createGrid(num){
    grid.style.gridTemplateColumns = (`repeat(${num}, 1fr`);
    grid.style.gridTemplateRows = (`repeat(${num}, 1fr`);
    for(let i = 0; i < num**2; i++) {
        cell[i] = document.createElement('div');
        cell[i].classList.add('square');
        grid.appendChild(cell[i]);
    }
}

//create the default grid 16x16
createGrid(16);

//hover over the squares based on the color input by the user
let square = document.querySelectorAll(".square");
const colorInput = document.querySelector("#color");

function hover(){
square.forEach(div => mouseOver(div, colorInput.value));

function mouseOver(div, color){
    div.addEventListener("mouseover", () => {
     div.style.backgroundColor = color;})
    }
}

hover();
colorInput.addEventListener("input", hover);

//function that clears the hover effect on the grids
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearGrid);

function clearGrid() {
    square.forEach(div => div.style.backgroundColor = "");
}

//function that creates a new grid based on the number
//that we get from the Slider Range input
function changeGrid(){
    for (let i = 0; i < square.length; i++){
        grid.removeChild(square[i]);
    }
        
    let userSelection =  slider.value;
    sliderOutput.textContent = slider.value + " x " + slider.value;
    createGrid(userSelection); 
    square = document.querySelectorAll(".square");
   hover();
}

let slider = document.querySelector("#slider");
slider.addEventListener("input", changeGrid);

//show the number of the cells on the new grid 
let sliderOutput = document.querySelector("#sliderOutput");

//add two buttons which when clicked one is going to
//act as an eraser, changing the cell background to white
//when hovering, and the other will use the original hover effect
let pen = document.querySelector("#pen");
let eraser = document.querySelector("#eraser");

pen.addEventListener("click", hover);
eraser.addEventListener("click", erase);

function erase(){
square.forEach(div => mouseOver(div, "white"));

function mouseOver(div, color){
    div.addEventListener("mouseover", () => {
     div.style.backgroundColor = color;})
    }
}
