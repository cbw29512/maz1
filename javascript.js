const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];


let container = document.getElementById("container")
let string = (map.join().replace(/,/g,""))
function createMap() {
let mapLength = map[0].length;
    let mapHeight = map.length;
    for(let rowIndex = 0; rowIndex <= mapLength; rowIndex++) {
    let row = document.createElement('div')
        row.id = "row"
       
    for(let colIndex = 0; colIndex <= mapHeight; colIndex++) {
    let column = document.createElement('div')
        column.classList.add("cell")
        column.id = "row"
        row.appendChild(column);
        }
        container.appendChild(row);    
    }
}

createMap();
let box = Array.from(document.querySelectorAll(".cell"))
console.log(box)

box.foreach(cell, index => {
    console.log(cell)
    cell.id = string[index]
});

//Moves player around board
let boxTop = 150;
let boxLeft = 150;

document.addEventListener('keydown', logKey);
function logKey(evt) {
    console.log(evt.code);
    let playerBox = document.getElementById("box");
    if (evt.keyCode===38 || evt.keyCode===87) {
        boxTop -= 14
        playerBox.style.top = (boxTop) + "px";}
    if (evt.keyCode===40 || evt.keyCode===83) {
        boxTop += 14
        playerBox.style.top = (boxTop) + "px";}
    if (evt.keyCode===37 || evt.keyCode===65) {
        boxLeft -= 14
        playerBox.style.left = (boxLeft) + "px";}
    if (evt.keyCode===39 || evt.keyCode===68) {
        boxLeft += 14
        playerBox.style.left = (boxLeft) + "px";}   
}

/*const resetButton = document.getElementById("restart");
resetButton.addEventListener("click", resetGame)

/*function resetGame() {
    let cells = document.getElementsByIdName('cell')
  
    for (cellIndex = 0; cellIndex < cells.length; cellIndex++) {
      cells[cellIndex].innerHTML = "";
    }
    createMap();
  }
  
  Function winCondition {
    
  }*/
  
