var game = {
	turn:1,
	phase:"Ready", // Ready, Upkeep, Main, Draw
	activePlayer:1,
	base:[,20,20],
	tech1:[,,],
	tech2:[,,],
	tech3:[,,],
	deck:[,[],[]],
	hand:[,[],[]],
	gold:[,4,5],
	workers:[,4,5],
	start:function(){
		// Use tenderfoot as test card
		for (var i = 0;i<10;i++){
			game.deck[1].push(cardInit(cardList["tenderfoot"]));
			game.deck[2].push(cardInit(cardList["tenderfoot"]));
		}

		// TODO: Shuffle


		// draw starting hand
		for(var i =0; i<5;i++) {
			game.hand[1].push(game.deck[1].pop());
			game.hand[2].push(game.deck[2].pop());
		}
		UI.update();

		// start main phase
		game.phase = "Main";
	},


	workersLeft:1,
	status:"Waiting for Selection",
	selection:{type:"",selection:{},availableTargets:{},target:{}},





	selectCardInHand:function(cardpos){
		if(game.status=="Waiting for Selection") {
			game.status="Waiting for Target";
			game.selection.type="Card in Hand";
			game.selection.selection = game.hand[1][cardpos];
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