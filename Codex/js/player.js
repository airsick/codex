function Player() {
	this.base = 20;
	this.tech1 = false;
	this.tech2 = false;
	this.tech3 = false;
	this.workers = 4;
	this.gold = 0;
	this.addon = false;
	this.squadLeader = false;
	this.elite = false;
	this.scavenger = false;
	this.technician = false;
	this.lookout = false;
	this.board = [];
	this.drawPile = [];
	this.discardPile = [];
	this.hand = [];
	this.heroes = [];

	this.drawCard = function(){
		if (this.drawPile.length == 0){
			this.shuffle(this.discardPile);
			this.drawPile = this.discardPile;
			this.discardPile = [];
			if(this.drawPile.length!=0)
				this.hand.push(this.drawPile.pop());
		}
		else {
			this.hand.push(this.drawPile.pop());
		}
	};

	this.discardHand = function(){
		for(var i = 0; i < this.hand.length; i++) {
			this.discardPile.push(this.hand.pop());
		}
	};

	this.drawNewHand = function(){
		var cardsToDraw = Math.min(this.hand.length, 5);
		this.discardHand();
		for (var i = 0; i < cardsToDraw; i++){
			this.drawCard();
		}
	}

	this.shuffle = function(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
	};
}