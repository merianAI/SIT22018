//////////////////////////////////////////////
//////////////////////////////////////////////
//CALL WILD POKEMON
function ClaraBoissier (type) {
this.type = type;
}
//POKEMON ARRAY
var ArmandStats = new Array();
ArmandStats[0] = new ClaraBoissier("Clara Boissier");

//POKEMON ATTACK ARRAY
function move (move, basedmg) {
this.move = move;
this.basedmg = basedmg;
return move;
}
var moves = new Array();
moves[0] = new move("Frise", 5);
moves[1] = new move("Déhanché", 4);
moves[2] = new move("Léviathan", 3);
moves[3] = new move("Locke et Hobbes", 4);

var playerMoves = new Array();
playerMoves[0] = new move("Sècher", 5);
playerMoves[1] = new move("PoseCafé", 4);
playerMoves[2] = new move("Révision", 3);
playerMoves[3] = new move("Bavardage", 4);

///////////////////////////////////////////////////
//////////////////////////////////////////////////
//CALL CLARA BOISSIER STATS
//CALL CLARA BOISSIER ID
var ClaraBoissierid;
callClaraBoissierid = function(){
ClaraBoissierid = Math.floor(Math.random() * ArmandStats.length);
};
//CALL CLARA BOISSIER LEVEL
var ClaraBoissierLevel;
callClaraBoissierLevel = function(){
ClaraBoissierLevel = 1;
};
//CALL CLARA BOISSIER HEALTH
var ClaraBoissierHealth;
callClaraBoissierHealth = function(){
ClaraBoissierHealth = 20;
};
//CALL CLARA BOISSIER ATTACK
var moveid;
callMoveid = function(){
  moveid = Math.floor(Math.random() * moves.length);
  return moveid;
};
//CALL DAMAGE
  var damage;
//CALL CLARA BOISSIER ATTACK DAMAGE
callMoveDamage = function(){

  damage = Math.floor(Math.random() * moves[moveid].basedmg + 3);
  return damage;
};
//CALL PLAYER ATTACK DAMAGE
callPlayerMoveDamage = function() {

  damage = Math.floor(Math.random() * playerMoves[playerMove].basedmg + 3);
  return damage;
};
//CALL PLAYER ATTACK
function selectMove(){
  playerMove = prompt("Tu as 4 attaques, " + playerMoves[0].move + ", " + playerMoves[1].move + ", " + playerMoves[2].move + " and " + playerMoves[3].move + ", laquelle veux tu utiliser ?").toUpperCase();
  if (playerMove === ""){
    selectMove();
    return selectMove;
}
  else
{
  switch(playerMove){
  case 'SÈCHER':
  playerMove = 0;
  callPlayerMoveDamage();
  playerAttack();
  break;
  case 'POSECAFÉ':
  playerMove = 1;
  callPlayerMoveDamage();
  playerAttack();
  break;
  case 'RÉVISION':
  playerMove = 2;
  callPlayerMoveDamage();
  playerAttack();
  break;
  case 'BAVARDAGE':
  playerMove = 3;
  callPlayerMoveDamage();
  playerAttack();
  break;
  default :
  alert('Attaque pas trouvées');
  selectMove();
  break;
}
}
}

///////////////////////////////////////////////////
//////////////////////////////////////////////////
//CLARA BOISSIER ATTACK
function ClaraBoissierAttack(){
  callMoveDamage()
  callMoveid()
    alert(ArmandStats[ClaraBoissierid].type + " utilise " + moves[moveid].move + " inflige " + damage + " dégâts!");
    if (ArmandHealth > 0){
    ArmandHealth = ArmandHealth - damage;
    alert("Armand" + " a " + ArmandHealth  + " PV restants!");
    attackLoop();}
    else
    {
    alert("Armand s'évanouie");
    }
    return ClaraBoissierAttack;
}

//PLAYER ATTACK
function playerAttack(){
  callPlayerMoveDamage()
    alert ("Armand utilise " + playerMoves[playerMove].move + " inflige " + damage + " dégâts!");
    if (ClaraBoissierHealth > 0)
    {
    ClaraBoissierHealth = ClaraBoissierHealth - damage;
    alert(ArmandStats[ClaraBoissierid].type + " a " + ClaraBoissierHealth + " PV restants!");
    playerTurn = false;
    ClaraBoissierFaint(

)
  return playerAttack
}
  else
  {
  alert(ArmandStats[ClaraBoissierid].type + " s'évanouie");
  }
  }
  //RANDOMIZE CLARA BOISSIER
function randomArmand(){
  callClaraBoissierid();
  callClaraBoissierHealth();
  callClaraBoissierLevel();
  callMoveid();
}
var ArmandHealth = 50;
//START FIGHT
function startFight(){
  randomArmand();
  alert(ArmandStats[ClaraBoissierid].type + " apparaît!");
  alert("Niveau : " + ClaraBoissierLevel + " Vie : " + ClaraBoissierHealth);
  playerTurn = false;
  attackLoop();
  return startFight
}
function attackLoop(){
  if (playerTurn === false)
  {
  playerTurn = true;
  ClaraBoissierAttack();
  }
  else
  {
  playerTurn = false;
  selectMove();
  }
  return attackLoop;
}

function ClaraBoissierFaint(){
  if (ClaraBoissierHealth < 1){
  alert(ArmandStats[ClaraBoissierid].type + "  s'est évanouie");
  alert("vous avez gagné !");}

  else
  {   attackLoop();}
  return ClaraBoissierFaint;

}
startFight();
