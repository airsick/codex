function Card(){
	this.hp = 0;
	this.atk = 0;
	this.armor = 0;
	this.cost = 0;
	this.type = "";
	this.pic = "";
	this.arrives = function(){};
}

var cardList = {
	tenderfoot: function(){
		Card.call(this);
		this.atk = 1;
		this.hp = 2;
		this.cost = 1;
		this.type = "unit";
		this.pic = "images/cards/neutral/0004_tenderfoot.jpg";
	},
	timelyMessenger:function(){
		Card.call(this);
		this.atk = 1;
		this.hp=1;
		this.cost=1;
		this.type = "unit";
		this.pic = "images/cards/neutral/0003_timely_messenger.jpg";
	},
	olderBrother:function(){
		Card.call(this);
		this.atk=2;
		this.hp=2;
		this.cost=2;
		this.type = "unit";
		this.pic="images/cards/neutral/0005_older_brother.jpg";
	},
	brickThief:function(){
		Card.call(this);
		this.atk=2;
		this.hp=1;
		this.cost=2;
		this.type = "unit";
		this.pic="images/cards/neutral/0006_brick_thief.jpg";
	},
	helpfulTurtle:function(){
		Card.call(this);
		this.atk=1;
		this.hp=2;
		this.cost=2;
		this.type = "unit";
		this.pic="images/cards/neutral/0007_helpful_turtle.jpg";
	},
	granfalloonFlagbearer:function(){
		Card.call(this);
		this.atk=2;
		this.hp=2;
		this.cost=3;
		this.type = "unit";
		this.pic="images/cards/neutral/0008_granfalloon_flagbearer.jpg";
	},
	fruitNinja:function(){
		Card.call(this);
		this.atk=2;
		this.hp=2;
		this.cost=3;
		this.type = "unit";
		this.pic="images/cards/neutral/0009_fruit_ninja.jpg";
	},
	spark:function(){
		Card.call(this);
		this.atk=0;
		this.hp=0;
		this.cost=1;
		this.type = "magic";
		this.pic="images/cards/neutral/0010_spark.jpg";
	},
	bloom:function(){
		Card.call(this);
		this.atk=0;
		this.hp=0;
		this.cost=2;
		this.type = "magic";
		this.pic="images/cards/neutral/0011_bloom.jpg";
	},
	wither:function(){
		Card.call(this);
		this.atk=0;
		this.hp=0;
		this.cost=2;
		this.type = "magic";
		this.pic="images/cards/neutral/0012_wither.jpg";
	}
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
