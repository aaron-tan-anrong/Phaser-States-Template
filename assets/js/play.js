// playState is basically where the main bulk of your code goes into.
// This is the actual game which your user will be playing.
var playState = {
    
    create: function() {				
		
		// As usual, this is where you create your game elements eg sprites, background, sounds etc.

    },
    
    update: function() {      
		
		// Usually here you will need an event which would trigger the gameOver function.
		
	},
	
	gameOver: function() {
		// We define the gameOver function to start the win state.
		game.state.start('win');
	}

};

