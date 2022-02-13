// Read and write varibles
const readline = require("readline-sync")
const greeting = "Hello, welcome to Colossal Adventure \n What is your name:\n"
var player =  {
  name: "john",
  score: 0,
  inventory: ["potion"],
  attack: 3,
  health: 12,
  last_move: 0
}
var rules = "Press W to walk, but watch for enemies!\n Press L to see inventory."
const pOdds = 3
// Enemies
const enemy_1 = {
  name: "troll",
  attack: 3,
  inventory: ["friut", "meat", "potion"],
  health: 6
}
const enemy_2 = {
  name: "bear",
  attack: 2,
  inventory: ["meat"],
  health: 6
}
const enemy_3 = {
  name: "dragon",
  attack: 2,
  inventory: ["potion"],
  health: 6
}
const enemies = [enemy_1, enemy_2, enemy_3]
// Random function 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// Walk movement function
function walk(p1){
  p1.last_move = getRandomInt(pOdds)
}
// Is there contact boolean
function isEnemy(){
  var rv = false
  if(player.last_move ==2){
    rv= true
  }
  return rv
}

// Main attack function
function attack(p1){
// Check for contact
 if(isEnemy()){
   write("you made contact")
   var enemy = getRandomInt(p1.last_move)
   // Escape decision
   if(!isEscape()){
     // Fight sequece
    while(!isDead(enemies[enemy])){
      hit(p1,enemies[enemy])
      hit(enemies[enemy], p1)
      write("the enemy has "+enemies[enemy].health+ " health. \n")
    }
    write("You defeated the enemy, "+ enemies[enemy].name)
    p1.attack +=1
    // Looting sequence
    button = read("do you want their inventory y or n \n")
    if(button == 'y'){
      getInventory(enemies[enemy])
      write("you now have some "+enemies[enemy].inventory[0])
    }
   }
   // No contact no attack
 }else{
   write("no contact")
 }
}
// Hit function for blows
function hit(p1, p2){
  p1.health -= getRandomInt(p2.attack)
}
// Write to console
function write(stuff){
  console.log(stuff)
}
// Read from console
function read(stuff){
  var rv = readline.question(stuff)
  return rv 
}
// Display information
function display(p1){
  write("score: "+p1.score+ "\n" +p1.name + " health is at "+ p1.health+". \n")
  write(p1.inventory)
}
// Escape function
function isEscape(){
  var opt = read("press r to escape or w to fight \n")
  var rv = false
  if(opt == 'r'){
    rv = getRandomInt(pOdds)
    if(rv == 1||2 ){
      rv = true
      write("you got away")
    }else{
      rv = false
      write("you can't run")
    }
  }
  return rv
}
// Read input function
function getOpt(){
  return read(rules)
}
// Use inventor function
function inventory(){
  write("You can choose to use an item here.")
  var item = read("pick an item by pressing a number from 1-3. \n Your items are: "+player.inventory +"\n")
  player.health += 3
  delete player.inventory[item -1]
}
// Check character pulse
function isDead(p1){
  var rv = false
  if(p1.health <= 0){
    rv = true
  }
  return rv
}
// Loot the enemy function
function getInventory(enemy){
  if (isDead(enemy)){
    player.inventory.push(enemy.inventory[0])
  }
}
/*
/ This is the actual game
/ begins with salutation
/ and name entry. Once information
/ has been entered the game
/ begins and runs in while
/ loop until the q for quit
/ is pressed.
*/
player.name = read(greeting)
var button = getOpt()
while(button != 'q'){
  if(player.score != 0){
    button = getOpt()
  }
  if(button == 'w'){
    walk(player)
    attack(player)
    player.score += 1
  }
  if(button == 'l'){
    inventory()
  }
  if(button == 'print'||'p'){
    display(player)
  }
  if(isDead(player)){
    button = 'q'
    write("You died game over!!")
  } 
}