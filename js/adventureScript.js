var charName = prompt("What would you like your character's name to be?", "Enter name here:")
if(charName.length > 0) {
	alert("Welcome to Mythrindia " + charName + "!")
}
else {
	charName = prompt("You didn't enter a name! Try again!")
	if(charName.length > 0) {
		alert("Welcome to Mythrindia " + charName + "!")
	}
}

