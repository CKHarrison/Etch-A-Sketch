
const resetBtn = document.querySelector('.reset');
const newGrid = document.querySelector('.create-grid');
let boxes;

function makeGrid(rows, columns) {
  const container = document.querySelector('.container');
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-columns', columns);
  for(let i = 0; i < (rows * columns); i++) {
    let cell = document.createElement('div');
    // cell.innerText = (i + 1);
    container.appendChild(cell).className = 'item';
  }
  hoverEffect()
}

makeGrid(16,16);

function hoverEffect() {
   boxes = document.querySelectorAll('.item');
  boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
      box.classList.toggle('bg');
    });
  });
}

// reset grid
resetBtn.addEventListener('click', () =>{
  boxes.forEach(box => box.classList.remove('bg'));
});

// create new grid
newGrid.addEventListener('click', () => {
  rows = userInput('rows')
  cols = userInput('columns');
  makeGrid(rows, cols);
  // hoverEffect()
});

function userInput(property) {
  let num = parseInt(prompt(`Please enter number of desired ${property}: `))
  if(num > 100) {
    num = parseInt(prompt("Number must be no more than 100"))
  }
  return num;
}