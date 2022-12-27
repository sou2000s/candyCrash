document.addEventListener('DOMContentLoaded' , ()=>{
    const grid = document.querySelector('.grid')
    const width = 8 ;
    const squares = [];

const candyColors = [
    'red',
    'yellow',
    'orange',
    'purple',
    'green',
    "blue"

]


// create board
function createBoard(){
    for(let i = 0 ; i < width * width ; i++){
        const square = document.createElement('div')
        square.setAttribute('draggable' , true)
        square.setAttribute('id' , i)
        let randomColor  = Math.floor(Math.random() * candyColors.length)
        square.style.backgroundColor = candyColors[randomColor]
        grid.appendChild(square)
        squares.push(square)
    }
}
createBoard()

// Drag the candies
let colorBeingDragged;
let colorBeingReplaced;
let squareIdBeignDragged;
let squareIdBeignReplaced;

squares.forEach(square => square.addEventListener('dragstart' , dragStart))
squares.forEach(square => square.addEventListener('dragend' , dragEnd))
squares.forEach(square => square.addEventListener('dragover' , dragOver))
squares.forEach(square => square.addEventListener('dragenter' , dragEnter))
squares.forEach(square => square.addEventListener('dragLeave' , dragLeave))
squares.forEach(square => square.addEventListener('drop' , dragDrop))

function dragStart(){
    colorBeingDragged = this.style.backgroundColor;
    console.log(colorBeingDragged);
    squareIdBeignDragged = parseInt(this.id)
    console.log(this.id , 'dragstart');
}
function dragOver(e){
    e.preventDefault()
    console.log(this.id , 'dragover');
}
function dragEnter(e){
    e.preventDefault()
    console.log(this.id , 'dragEnter');
}
function dragLeave(){
    console.log(this.id , 'dragLeave');
}
function dragDrop(){
    console.log(this.id , 'dragDrop');
}

function dragEnd (){
    console.log(this.id , 'dragEnd');
    colorBeingReplaced = this.style.backgroundColor;
    console.log(colorBeingReplaced); 
    squareIdBeignReplaced = parseInt(this.id)
    squares[squareIdBeignDragged].style.backgroundColor = colorBeingReplaced 
}



})