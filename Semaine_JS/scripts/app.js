let car = document.querySelector("#carId")
let posX, posY, direction, treesPosX, treesPosY, score, divScore, gameOverDiv, playButton, mainMenuButton

initialisation()
function initialisation() {
    direction = 1
    score = 0
    posX = Math.floor(Math.random()*window.innerWidth/10)*10
    posY = Math.floor(Math.random()*window.innerHeight/10)*10
    carPosition()
    initGame()   
    generateTrees()
}

function carPosition() {
    car.style.top = posY + "px"
    car.style.left = posX + "px"
}

function initGame() {
    let drive = setInterval(
        function() {
            switch(direction) {
                case 0:
                posY -= 10
                break;
            case 1:
                posX += 10
                break;
            case 2:
                posY += 10
                break;
            case 3:
                posX -= 10
                break;
            }
            if ((posX >= window.innerWidth) || (posY >= window.innerHeight) || (posX <= 0) || (posY <= 0)) {
                gameOverDiv = document.createElement("div")
                gameOverDiv.classList.add("test")
                document.querySelector("body").appendChild(gameOverDiv)
        
                playButton = document.createElement("div")
                playButton.classList.add("button")
                document.querySelector(gameOverDiv).appendChild(playButton)
        
                mainMenuButton = document.createElement("div")
                mainMenuButton.classList.add("button")
                document.querySelector(gameOverDiv).appendChild(mainMenuButton)
            } 
            carPosition()
            rotateCar()
        },30        
    )
    
}
 
window.addEventListener("keypress", function(e) {
    switch(e.keyCode){
      case 122:
        direction = 0
        break;
      case 100:
        direction = 1
        break;
      case 115:
        direction = 2
        break;
      case 113:
        direction = 3
        break;
    }
})

function rotateCar() {
    if (direction == 0) {
        car.style.transform = "rotate(0deg)"
    } else if (direction == 1) {
        car.style.transform = "rotate(90deg)"
    } else if (direction == 2) {
        car.style.transform = "rotate(180deg)"
    } else if (direction== 3) {
        car.style.transform = "rotate(270deg)"
    }
}

function generateTrees() {
    setInterval(
        function() {
            let trs = document.createElement("div")            
            trs.classList.add("trees")
            treesPosX = Math.floor(Math.random()*window.innerWidth/10)*10
            treesPosY = Math.floor(Math.random()*window.innerHeight/10)*10
            document.querySelector("body").appendChild(trs)
            treesPosition(trs)
        },
        2000
    )
}

function treesPosition(trs) {
    trs.style.left = treesPosX + "px"
    trs.style.top = treesPosY + "px"
}
