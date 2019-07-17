var UI = {
	update:function(){
		// Update hand
		$("#hand0").css("background-image", "url("+game.players[0].hand[0].pic+")");
		console.log("a");
		$("#hand1").css("background-image", "url("+game.players[0].hand[1].pic+")");
		console.log("a");
		$("#hand2").css("background-image", "url("+game.players[0].hand[2].pic+")");
		console.log("a");
		$("#hand3").css("background-image", "url("+game.players[0].hand[3].pic+")");
		console.log("a");
		$("#hand4").css("background-image", "url("+game.players[0].hand[4].pic+")");
		console.log("a");

		$("#gold1").html("Gold: "+game.players[0].gold);
		$("#gold2").html("Gold: "+game.players[1].gold);
	},


	// handle clicks
	hand0Click:function(){
		game.selectCardInHand(0);
        socket.emit('chat message', $('#m').val());
	},
	hand1Click:function(){
		game.selectCardInHand(1);
	},
	hand2Click:function(){
		game.selectCardInHand(2);
	},
	hand3Click:function(){
		game.selectCardInHand(3);
	},
	hand4Click:function(){
		game.selectCardInHand(4);
	},

	worker1Click:function(){
		game.selectTarget("worker1");
	},
}