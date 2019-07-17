var game = {
	players:[],
	turn:1,
	phase:"Upkeep", // Ready, Upkeep, Main, Draw
	activePlayer:0,
	start:function(){
		game.players.push(new Player());
		game.players.push(new Player());
		// Use tenderfoot as test card
		game.players[0].drawPile.push(new cardList["tenderfoot"]);
		game.players[0].drawPile.push(new cardList["timelyMessenger"]);
		game.players[0].drawPile.push(new cardList["olderBrother"]);
		game.players[0].drawPile.push(new cardList["brickThief"]);
		game.players[0].drawPile.push(new cardList["helpfulTurtle"]);
		game.players[0].drawPile.push(new cardList["granfalloonFlagbearer"]);
		game.players[0].drawPile.push(new cardList["fruitNinja"]);
		game.players[0].drawPile.push(new cardList["spark"]);
		game.players[0].drawPile.push(new cardList["bloom"]);
		game.players[0].drawPile.push(new cardList["wither"]);

		game.players[1].drawPile.push(new cardList["tenderfoot"]);
		game.players[1].drawPile.push(new cardList["timelyMessenger"]);
		game.players[1].drawPile.push(new cardList["olderBrother"]);
		game.players[1].drawPile.push(new cardList["brickThief"]);
		game.players[1].drawPile.push(new cardList["helpfulTurtle"]);
		game.players[1].drawPile.push(new cardList["granfalloonFlagbearer"]);
		game.players[1].drawPile.push(new cardList["fruitNinja"]);
		game.players[1].drawPile.push(new cardList["spark"]);
		game.players[1].drawPile.push(new cardList["bloom"]);
		game.players[1].drawPile.push(new cardList["wither"]);

		// Shuffle
		game.players[0].shuffle(game.players[0].drawPile);
		game.players[1].shuffle(game.players[1].drawPile);

		// draw starting hand
		for(var i =0; i<5;i++) {
			game.players[0].drawCard();
			game.players[1].drawCard();
		}
		UI.update();

		// start the first phase of the game
		game.upkeepPhase();
	},


	workersLeft:1,
	status:"Waiting for Selection",
	selection:{type:"",selection:{},availableTargets:{},target:{}},

	readyPhase:function(){

	},

	upkeepPhase:function(){
		game.players[game.activePlayer].gold += game.players[game.activePlayer].workers;
		UI.update();
		game.phase = "Main";
	},

	mainPhase:function(){

	},

	discardPhase:function(){

	},

	drawPhase:function(){

	},

	techPhase:function(){

	},





	selectCardInHand:function(cardpos){
		if(game.status=="Waiting for Selection") {
			game.status="Waiting for Target";
			game.selection.type="Card in Hand";
			game.selection.selection = game.players[0].hand[cardpos];
			game.selection.availableTargets = ["worker1","battlefield","emptypatrol"];
		}
	},
	selectTarget:function(target){
		if(target="worker1") {
			if(game.status="Waiting for Target") {
				game.selection.target = "worker1";
			}
		}
	},
}