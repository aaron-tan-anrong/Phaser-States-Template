// We will use the state_name as defined in our game.js previously.
var bootState = {
    
    // Nothing to preload here, so we immediately use our create function.
    create: function () {
		
        // We just start our physics system here.
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // And then start our next state.
        game.state.start('load');
    }   
};

