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

//@param name       string
var Player = function(name){
	this.name = name
	this.health = 30
	this.tech = 20
	this.level = 1
}

Player.prototype.cast = function() {
	this.tech = (this.tech - 10)
	$('.playerTech').children().remove();
	for (var i=0; i<(this.tech); i+=10) {
		$('.playerTech').append(Creatable.create(['.techHex']))
	}
}

//@param name          string
//@param description   string
//@param health        number
var Monster = function(name, description, health) {
	this.name = name;
	this.description = description;
	this.health = health;
};

//@param arr        array
var Battle = function(arr) {
	var fight = randomMonster(arr)
	$('.monsterArea').prepend(Creatable.create(['.monsterName', fight.name]))

		for (var i=0; i<(fight.health); i+=10) {
		$('.monsterHealth').prepend(Creatable.create(['.healthHex']))
	}
}

var goblin = new Monster('Goblin', 'test description', 10)
var kobold = new Monster('Kobold', 'test description', 18)
var ogre = new Monster('Ogre', 'test description', 75)
var lizardMan = new Monster('Lizard Man', 'test description', 27)
var displacerBeast = new Monster('Displacer Beast', 'test description', 48)
var necromancer = new Monster('Necromancer', 'test description', 112)
var necroSkele = new Monster('Skeleton Minion', 'test description', 30)

var monsterLv1Array = [goblin, kobold]
var monsterLv2Array = [goblin, kobold, lizardMan]
var monsterLv3Array = [kobold, lizardMan]
var monsterLv4Array = [lizardMan, displacerBeast]
var bossArray = [ogre, necromancer]

var randomMonster = function(arr) {
	var rand = Math.floor((Math.random()*(arr.length)))
	return arr[rand]
}

//creating a character
var newPlayer;

$(document).on('click', '.newPlayerButton', function() {
	newPlayer = new Player(prompt('what is your name?'))
	$('.playerArea').prepend(Creatable.create([[
		['.playerName', newPlayer.name + ' the Wimpy'],
		['.playerLevel',('Level: ' + newPlayer.level)]
		]]))

	for (var i=0; i<(newPlayer.tech); i+=10) {
	$('.playerTech').append(Creatable.create(['.techHex']))
}
	for (var i=0; i<(newPlayer.health); i+=10) {
	$('.playerHealth').append(Creatable.create(['.healthHex']))
}
	$('.newPlayerButton').fadeOut()

	firstBattle = new Battle(monsterLv1Array)
});



var monsterTurn = function() {
				$('.monsterTurn').fadeIn(800, function() {
				$('.monsterTurn').fadeOut();
			})
		}
//spell cast
$(document).on('click', '.spellButton', function() {
		if(newPlayer.tech >= 10){
		newPlayer.cast()
		monsterTurn()

	}
		else{
			alert("You don't have enough tech to cast that!")
			monsterTurn()
		}
})


































//initial battle

console.log(randomMonster(monsterLv1Array))


















});