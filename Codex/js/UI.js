var UI = {
	update:function(){
		// Update hand
		$("#hand0").css("background-image", "url("+game.hand[1][0].baseCard.pic+")");
		$("#hand1").css("background-image", "url("+game.hand[1][1].baseCard.pic+")");
		$("#hand2").css("background-image", "url("+game.hand[1][2].baseCard.pic+")");
		$("#hand3").css("background-image", "url("+game.hand[1][3].baseCard.pic+")");
		$("#hand4").css("background-image", "url("+game.hand[1][4].baseCard.pic+")");

		$("#gold1").html("Gold: "+game.gold[1]);
		$("#gold2").html("Gold: "+game.gold[2]);
	},


	// handle clicks
	hand0Click:function(){
		game.selectCardInHand(0);
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