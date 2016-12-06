$(window).load(function() {
	menu.init();
});

var menu = {
	// Show menu screen
	init: function() {
		$('.gamelayer').hide();
		$('#mainmenu').hide();
		$('#menuscreen').show();
	},

	titleClick: function() {
		$('#title').hide();
		$('#mainmenu').show();
	},

	singleplayerClick: function() {
		$('#menuscreen').hide();
		$('#gamescreen').show();
		game.start();
	}
}