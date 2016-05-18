var loadState= {
	
	// The preload function is another standard Phaser function that we
	// use to define and load our assets
    preload: function() {
        
        // Add a loading label on the screen
        var loadingLabel = game.add.text(80, 150, 'loading...', 
                                         {font: '30px Courier', fill: '#ffffff'});        
        
        //Load your assets here
        
    },
    
    create: function() {
        // Call the menu state
        game.state.start('menu');
    }    
};

