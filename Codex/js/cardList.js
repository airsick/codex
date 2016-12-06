var cardList = {
	tenderfoot:{
		atk:1,
		hp:2,
		cost:1,
		pic:"images/cards/neutral/0004_tenderfoot.jpg"
	},
}

var cardInit = function(card){
	var output = {};
	output.baseCard = card;
	output.maxHP = card.hp;
	output.currentHP = card.hp;
	output.atk = card.atk;
	output.cost = card.cost;
	if(card.armor) output.armor = card.armor;
	else output.armor = 0;
	return output;
}