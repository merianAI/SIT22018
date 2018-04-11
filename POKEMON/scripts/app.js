//////////////////////////////////////////////
//////////////////////////////////////////////
//CALL WILD POKEMON
function ClaraBoissier (type) {
this.type = type;
}
//POKEMON ARRAY
var BoissierStats = new Array();
BoissierStats[0] = new ClaraBoissier("Clara Boissier");

//POKEMON ATTACK ARRAY
function move (move, basedmg) {
this.move = move;
this.basedmg = basedmg;
}
var moves = new Array();
moves[0] = new move("Frise", 5);
moves[1] = new move("Déhanché", 4);
moves[2] = new move("Léviathan", 3);
moves[3] = new move("Salopette", 4);
moves[4] = new move("Sècher", 5);
moves[5] = new move("PoseCafé", 4);
moves[6] = new move("Révision", 3);
moves[7] = new move("Bavardage", 4);
///////////////////////////////////////////////////
//////////////////////////////////////////////////
//CALL CLARA BOISSIER STATS
//CALL CLARA BOISSIER ID
var ClaraBoissierid;
callClaraBoissierid = function(){
ClaraBoissierid = Math.floor(Math.random() * BoissierStats.length);
};
//CALL CLARA BOISSIER LEVEL
var ClaraBoissierLevel;
callClaraBoissierLevel = function(){
ClaraBoissierLevel = Math.floor(Math.random() * 6 + 1);
};
//CALL CLARA BOISSIER HEALTH
var ClaraBoissierHealth;
callClaraBoissierHealth = function(){
ClaraBoissierHealth = Math.floor(Math.random() + ClaraBoissierLevel + 3);
};
//CALL CLARA BOISSIER ATTACK
var moveid;
callMoveid = function(){
moveid = Math.floor(Math.random() * moves.length);
};
//CALL DAMAGE
var damage;
//CALL CLARA BOISSIER ATTACK DAMAGE
callMoveDamage = function(){
damage = Math.floor(Math.random() * moves[callMoveid].basedmg + 3);
};
//CALL PLAYER ATTACK DAMAGE
callPlayerMoveDamage = function() {
damage = Math.floor(Math.random() * moves[playerMove].basedmg + 3);
};
//CALL PLAYER ATTACK
function selectMove(){
playerMove = prompt("Tu as 4 attaques, " + moves[4].move + ", " + moves[5].move + ", " + moves[6].move + " and " + moves[7].move + ", laquelle veux tu utiliser ?").toUpperCase();
if (playerMove === ""){
selectMove();
}
else
{
switch(playerMove){
case 'SECHER':
playerMove = 4;
callPlayerMoveDamage();
playerAttack();
break;
case 'POSECAFE':
playerMove = 5;
callPlayerMoveDamage();
playerAttack();
break;
case 'REVISION':
playerMove = 6;
callPlayerMoveDamage();
playerAttack();
break;
case 'BAVARDAGE':
playerMove = 7;
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
if (BoissierHealth > 0){
BoissierHealth = BoissierHealth - damage;
alert(BoissierStats[ClaraBoissierid].type + " utilise " + moves[moveid].move + " inflige " + damage + " dégâts!");
attackLoop();}
else
{
alert("Boissier s'évanouie");
}
}
//PLAYER ATTACK
function playerAttack(){
alert ("Player utilise " + moves[playerMove].move + " inflige " + damage + " dégâts!");
if (ClaraBoissierHealth > 0)
{
ClaraBoissierHealth = ClaraBoissierHealth - damage;
alert(BoissierStats[ClaraBoissierid].type + " a " + ClaraBoissierHealth + " PV restants!");
playerTurn = false;
ClaraBoissierFaint()
}
else
{
alert(BoissierStats[ClaraBoissierid].type + " s'évanouie");
}
}
//RANDOMIZE CLARA BOISSIER
function randomBoissier(){
callClaraBoissierid();
callClaraBoissierHealth();
callClaraBoissierLevel();
callMoveid();
}
var BoissierHealth = 50;
//START FIGHT
function startFight(){
randomBoissier();
alert(BoissierStats[ClaraBoissierid].type + " apparaît!");
alert("Niveau : " + ClaraBoissierLevel + " Vie : " + ClaraBoissierHealth);
playerTurn = false;
attackLoop();
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
}
function ClaraBoissierFaint(){
if (ClaraBoissierHealth < 1){
alert(BoissierStats[ClaraBoissierid].type + "  s'est évanouie");}
else
{   attackLoop();}
}
startFight();
