"use strict"
const mainHolder = document.getElementById("main");
const h1 = document.createElement("h1");
h1.innerText = "COLOR BOX";
mainHolder.appendChild(h1);
const countSteps = document.createElement("span");
countSteps.innerText = "Steps ";
main.appendChild(countSteps);
const gameBlock = document.createElement("div");
gameBlock.id= "game";
main.appendChild(gameBlock);
const holderButton = document.createElement('div')
holderButton.id = "holderButton";
main.appendChild(holderButton);
const buttonStart = document.createElement("button");
buttonStart.innerText = "START";
const buttonReset = document.createElement("button");
buttonReset.innerText = "RESET";
holderButton.append(buttonStart);
holderButton.append(buttonReset);
let firstColor;
let selectedColors = [];
let steps = 0;
let colorArr = [
    "red",
    "yellow",
    "green",
    "blue",
    "aqua",
    "lime",
    "orange",
    "magenta",
    "indigo",
    "brown",
    "red",
    "yellow",
    "green",
    "blue",
    "aqua",
    "lime",
    "orange",
    "magenta",
    "indigo",
    "brown"
];
const boxTemplate = (color,index) =>
`<div style='width:100px;height:100px;background:${color}' id=${index}></div>`;

gameBlock.innerHTML=colorArr.map((item,index)=>boxTemplate(item,index)).join("");

buttonStart.addEventListener("click", function(e){startGame()});
buttonReset.addEventListener("click", function(e){location.reload()});

const startGame = () => {

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(colorArr);

    gameBlock.innerHTML=colorArr.map((item,index)=>boxTemplate(item,index)).join("");
    setTimeout(
    () => {
gameBlock.innerHTML=colorArr.map((item,index)=>boxTemplate("black",index)).join("");
    },4000);

gameBlock.addEventListener("click", function(e){
    addColor(colorArr[e.target.id],e.target);
    }
)

const addColor = (color,box) => {
    setSteps();
    box.style.background = color;

    if (!firstColor){
        firstColor = color;
        return;
    }
    if(compareColors(firstColor,color)){
        selectedColors.push(color);
        stopGame();
    }
}

const compareColors = (firstColor,secondColor) => {
    clearFirstColor();
    return firstColor === secondColor;
}

const clearFirstColor = () => {
    firstColor=undefined;
}

const setSteps = () => {
    steps++;
    countSteps.innerText = 'Steps '+steps;
}

const stopGame = () => {
    if (selectedColors.length===10){
        alert("Игра окончена!!!")
        }
    }
}

