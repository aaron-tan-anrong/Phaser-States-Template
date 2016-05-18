// winState is essentially your 'game over' screen. Up to you however you want to use it.
var winState = {
        
    create: function() {	
		// Here are some text to display certain information.
	var winLabel = game.add.text(80, 80, 'YOU WON!',
								{font: '50px Arial', fill: '#00FF00' });

		// More text for more information. Delete if needed.
	var startLabel = game.add.text(80, game.world.height-80,
								   'press the "W" key to restart',
								   {font: '25px Arial', fill: '#ffffff' });

        // Same as previously, we enable to w key for input.
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        // We then call the restart function when w is pressed.
        wkey.onDown.addOnce(this.restart, this);
    },
    
    // And as usual, we define this function to start (or rather restart) back to the menu state. 
    restart: function () {
        game.state.start('menu');    
    }, 	
};

