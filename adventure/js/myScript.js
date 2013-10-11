$(function(){
//dice
var d2 = function d2 (){
	return Math.floor((Math.random()*2)+1);
}
var d4 = function d4 (){
	return Math.floor((Math.random()*4)+1);
}
var d6 = function d6 (){
	return Math.floor((Math.random()*6)+1);
}
var d8 = function d8 (){
	return Math.floor((Math.random()*8)+1);
}
var d10 = function d10 (){
	return Math.floor((Math.random()*10)+1);
}
var d12 = function d12 (){
	return Math.floor((Math.random()*12)+1);
}
//end dice

var Player = function(name){
	this.name = name
	this.health = 4
	this.tech = 3
}



//@param name          string
//@param description   string
//@param health        number
var Monster = function(name, description, health) {
	this.name = name;
	this.description = description;
	this.health = health;
};

var goblin = new Monster('Goblin', 'test description', 100)


// $('.monsterArea').append(Creatable.create(['.monster.{name}'.supplant(goblin), '{name} \n {description} \n {health}'.supplant(goblin)]))


var newPlayer = new Player(prompt('what is your name?'))
	$('.playerArea').append(Creatable.create(['.playerName', newPlayer.name]))

for (var i=0; i<(newPlayer.tech); i++) {
	$('.playerTech').append(Creatable.create(['.techHex']))
}
for (var i=0; i<(newPlayer.health); i++) {
	$('.playerHealth').append(Creatable.create(['.healthHex']))
}





});