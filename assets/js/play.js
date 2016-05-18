var playState = {
    // playState is where your 'actual' game is.
    // Your main game code comes in this state.
    create: function() {				
		
		// This is where you create your game elements eg sprites, background, sounds etc.

    },
    
    update: function() {      
		
		
	},
	
	Win: function() {
		// We start the win state
		game.state.start('win');
	}

}

