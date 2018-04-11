let perso, persoX, persoY, dir = 2, n = 0, village, fight, fightYN = 0
door = document.querySelector(".door")
village = document.querySelector("#village")
let obstacles = [
    {ymin:505,ymax:690,xmin:36,xmax:253}, //4 trees
    {ymin:460,ymax:652,xmin:304,xmax:471},  //3 trees & boat
    {ymin:393,ymax:465,xmin:125,xmax:377}, //2 boat
    {ymin:294,ymax:357,xmin:17,xmax:140},  //1 boat
    {ymin:55,ymax:288,xmin:71,xmax:461},  //lake
    {ymin:357,ymax:541,xmin:471,xmax:482},  //barrière
    {ymin:20,ymax:159,xmin:443,xmax:593}, //2 trees top
    {ymin:0,ymax:221,xmin:649,xmax:1017}, //field
    {ymin:416,ymax:465,xmin:479,xmax:589}, //hole
    {ymin:449,ymax:633,xmin:565,xmax:576}, //barrière
    {ymin:638,ymax:800,xmin:553,xmax:664}, //meal bags
    {ymin:708,ymax:746,xmin:486,xmax:514},
    {ymin:231,ymax:386,xmin:707,xmax:893}, //
    {ymin:410,ymax:441,xmin:706,xmax:734}, //anvil
    {ymin:393,ymax:557,xmin:741,xmax:813}, //piee of tree
    {ymin:676,ymax:800,xmin:688,xmax:889}, //weat fieds
    {ymin:482,ymax:800,xmin:946,xmax:1280},
    {ymin:418,ymax:497,xmin:932,xmax:1033},
    {ymin:0,ymax:185,xmin:1022,xmax:1280},
    {ymin:0,ymax:238,xmin:1187,xmax:1219}, 
    {ymin:0,ymax:185,xmin:1022,xmax:1280}, 
    {ymin:790,ymax:810,xmin:1280,xmax:1300}, 
    {ymin:0,ymax:185,xmin:1022,xmax:1280}
]

let bosses = [
    {ymin:556,ymax:567,xmin:253,xmax:304},
    {ymin:465,ymax:497,xmin:140,xmax:151},
    {ymin:357,ymax:386,xmin:71,xmax:82},
    {ymin:288,ymax:357,xmin:425,xmax:436},
    {ymin:410,ymax:421,xmin:589,xmax:704},
    {ymin:557,ymax:676,xmin:761,xmax:772},
    {ymin:441,ymax:452,xmin:813,xmax:932},
    {ymin:185,ymax:238,xmin:1095,xmax:1219}
]

init()
function init(){
    // Création du personnage et placement du personnage
    perso = document.createElement("img")
    let srcImgPerso = "../images/spriteBas.png"
    perso.setAttribute('src', srcImgPerso)
    perso.setAttribute('id', 'perso')
    persoX = 71
    persoY = 696
    document.querySelector('body').appendChild(perso)
    persoPos()
}
// Déplacement du personnage
window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        // Vers le haut
        case 90 :
            dir = 0
            persoY -= 10
            console.log(persoY)
            srcImgPerso = "../images/spriteBas.png"
            if (persoY < 0 || persoY > window.innerHeight) {
                persoY += 10
            }
            else{
            }
            break;
            // À droite
        case 68 :
            dir = 1
            persoX += 10
            console.log(persoX)
            srcImgPerso = "../images/spriteBas.png"
            if (persoX < 0 || persoX > window.innerWidth - 1) {
                persoX -= 10
            }
            else{
            }
            break;
            // Vers le bas
        case 83 :
            dir = 2
            persoY += 10
            console.log(persoY)
            srcImgPerso = "../images/spriteBas.png"
            if (persoY < 0 || persoY > window.innerHeight) {
                persoY -= 10
            }
            else{
            }
            break;
            // À gauche
        case 81 :
            dir = 3
            persoX -= 10
            console.log(persoX)
            srcImgPerso = "../images/spriteBas.png"
            if (persoX < 0 || persoX > window.innerWidth - 1) {
                persoX += 10
            }
            else{
            }
            break;
        default:
    }
    for (let i = 0; i < obstacles.length; i++) {
        if ((persoY > obstacles[i].ymin && persoY < obstacles[i].ymax) && (persoX > obstacles[i].xmin && persoX < obstacles[i].xmax)){
            if (dir == 0){
                persoY += 10
            }
            else if (dir == 1){
                persoX -= 10
            }
            else if (dir == 2){
                persoY -= 10
            }
            else if (dir == 3){
                persoX += 10
            }
        }
        else{
            persoPos()
        }
    }

    for (let j = 0; j < bosses.length; j++) {
        if ((persoY > bosses[j].ymin && persoY < bosses[j].ymax) && (persoX > bosses[j].xmin && persoX < bosses[j].xmax)) {
            console.log("yo")
            fight = document.createElement("div")
            fight.classList.add("fightDiv")
            document.querySelector("body").appendChild(fight)
            setTimeout(
                function() {
                    document.querySelector("body").removeChild("div")
                }, 2000
            )
        } 
    }

    n++
    if (n == 4) {
        n = 0
    }
})
function persoPos(){
    perso.style.top = persoY + 'px'
    perso.style.left = persoX + 'px'
}
