let car = document.querySelector("#carId")
let posX, posY, direction, treesPosX, treesPosY, score, divScore, gameOverDiv, playButton, mainMenuButton, coinsPosX, coinPosY, trs
let coins = document.createElement("div")            

initialisation();
function initialisation() {
    direction = 1
    divScore = 0
    posX = Math.floor(Math.random()*window.innerWidth/10)*10
    posY = Math.floor(Math.random()*window.innerHeight/10)*10
    score = document.createElement("div")
    score.setAttribute("id", "scor")
    document.querySelector('body').appendChild(score)
    divScore.innerHTML = score
    carPosition()
    initGame()   
    generateTrees()
    generateCoins()
    takeCoins()
}

function carPosition() {                /* Initialise la position de la voiture */  
    car.style.top = posY + "px"
    car.style.left = posX + "px"
    return posX, posY
}

function initGame() {           
    let drive = setInterval(            /* Définitions des mouvements */
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
            if ((posX >= window.innerWidth) || (posY >= window.innerHeight) || (posX <= 0) || (posY <= 0)) {/* Création et apparition de la enêtre en cas de mort */
                clearInterval(drive);
                gameOverDiv = document.createElement("div")
                gameOverDiv.classList.add("test")
                document.querySelector("body").appendChild(gameOverDiv)
        
                playButton = document.createElement("div")
                playButton.classList.add("button")
                document.querySelector(".test").appendChild(playButton)
        
                mainMenuButton = document.createElement("div")
                mainMenuButton.classList.add("button")
                document.querySelector(".test   ").appendChild(mainMenuButton)
            } 
            carPosition()
            rotateCar()
        }, 30        
    )
    
}
 
window.addEventListener("keypress", function(e) {               /* Actions à faire en fonction des touches appuyées */
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

function rotateCar() {              /* rotation de la voiture en fonction de la valeur de direction */
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
    let tree = setInterval(
        function() {
            if ((posX < window.innerWidth) || (posY < window.innerHeight) || (posX != 0) || (posY != 0)) {
                trs = document.createElement("div")
                trs.classList.add("arbre")
                treesPosX = Math.floor(Math.random()*window.innerWidth/10)*10
                treesPosY = Math.floor(Math.random()*window.innerHeight/10)*10
                document.querySelector("body").appendChild(trs)
                treesPosition(trs)
            } 
        }, 2500
    )
}

function treesPosition(trs) {                   /* Position des arbres alétoire */
    trs.style.left = treesPosX + "px"
    trs.style.top = treesPosY + "px"
}

function generateCoins() {                      /* Génération aléatoire des bonus */
    coins.classList.add("coins")
    coinsPosX = Math.floor(Math.random()*window.innerWidth/10)*10
    coinsPosY = Math.floor(Math.random()*window.innerHeight/10)*10
    document.querySelector("body").appendChild(coins)
    coinsPosition(coins)
}

function takeCoins() {                         /* Cas ou l'on passe sur une pièce */
    if (posX == coinsPosX && posY == coinPosY) {
        divScore += 10
        score.innerHTML = divScore
        document.querySelector("body").removeChild("coins")
        generateCoins()
    }   
}

function coinsPosition(coins) {                 /* Position des bonus aléatoire */
    coins.style.left = coinsPosX + "px"
    coins.style.top = coinsPosY + "px"
}