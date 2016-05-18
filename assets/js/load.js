// This is the loading page
var loadState= {
	
	// We use the function preload to load up our game assets here.
    preload: function() {
        
        // For some loading text on the screen;
        var loadingLabel = game.add.text(80, 150, 'loading...', 
                                         {font: '30px Courier', fill: '#ffffff'});        
        
        // Load your assets below
        
    },
    
    create: function() {
        // Done? Now we start our menu state.
        game.state.start('menu');
    }    
};

