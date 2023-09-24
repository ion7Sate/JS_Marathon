const board = document.querySelector('#board')
const SQUARE_NUMBER = 500
const colors = ['#00ff40','#00ff80','#00ffff','#00bfff','#0040ff','#8000ff','#ff00ff','#ff0080','#ff0000']

for(let i=0; i<SQUARE_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>setColor(square))
    square.addEventListener('mouseleave',()=>removeColor(square))
    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor='#7585c4'
}
function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}