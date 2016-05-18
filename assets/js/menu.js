// This is basically the start screen.
var menuState = {
  
    create: function () {
		
		// Here we create some text for the game title
        var nameLabel = game.add.text(80, 80, 'My First Game',
                                    { font: '50px Arial', fill: '#ffffff' });
        
        // As well as some instructions etc.
        var startLabel = game.add.text(80, game.world.height-80,
                                       'press the "W" key to start',
                                       {font: '25px Arial', fill: '#ffffff' });
        
        // Now we add the W key as an input we can use.
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        
        // So when it is pressed, the 'start' function is called.
        wkey.onDown.addOnce(this.start, this);
    },
    
    // Here we define the start function to start our play state.   
    start: function () {
        game.state.start('play');    
    },    
};

