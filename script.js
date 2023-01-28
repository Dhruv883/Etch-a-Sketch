let color = '#333333'
let size = 20;
let paintSwitch = false
let newDiv;

let container = document.getElementById('container')
let input = document.getElementById('inp')
let colorChange = document.getElementById('colorInp')
let clear = document.getElementById('clear')
let eraser = document.getElementById('eraser')
let rainbow = document.getElementById('rainbow')
let rainbowSwitch = false
let random = document.getElementById('random')

container.onclick = () => paintGrid()
colorChange.addEventListener('change', (e) => changeColor(e))
clear.addEventListener('click', () => clearGrid())
random.addEventListener('click', () => {
      rainbowSwitch = false
      RANDOM()
})
eraser.addEventListener('click', () => {
      rainbowSwitch = false
      erase()
})
rainbow.addEventListener('click', () => {
      rainbowSwitch = true
      RAINBOW()
})
input.addEventListener('change', (e) => {
      size = e.target.value
      clearGrid()
      createGrid(size)

})

function createGrid(size) {
      for (let i = 0; i < size * size; i++) {
            let div = document.createElement('div')
            div.classList.add('newDiv')
            div.setAttribute('style', 'background:#F2F2F2')
            container.append(div)
      }

      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
      container.style.gridTemplateRows = `repeat(${size}, 1fr)`

      newDiv = document.querySelectorAll('.newDiv')
}

function paint() {
      newDiv.forEach(e => {
            e.addEventListener('mouseenter', () => {
                  if (paintSwitch == true) {

                        if (rainbowSwitch) {
                              e.style.cssText = `background-color: ${RAINBOW()};`
                        }
                        else {
                              e.style.cssText = `background-color: ${color};`
                        }
                  }
            })
      });
}

function paintGrid() {
      if (paintSwitch == true) {

            paintSwitch = false
      }
      else {
            paintSwitch = true
            paint();

      }
}

function clearGrid() {
      container.innerHTML = ''
      createGrid(size);
}

function changeColor(e) {
      color = e.target.value
}

function erase() {
      color = '#F2F2F2'
}

function RAINBOW() {

      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      return `rgb(${red},${green},${blue})`
}

function RANDOM() {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      color = `rgb(${red},${green},${blue})`
}

createGrid(size)