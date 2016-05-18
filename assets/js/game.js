// Same as usual, we will create our Phaser game in the first line here.
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

// We then add the states we will use, as below. It is also in order, if you're wondering.
// game.state.add('ref_key', 'state_name');
game.state.add('boot', bootState); //bootState is where we will boot up our game. Physics system etc
game.state.add('load', loadState); // Here is where we will preload our assets.
game.state.add('menu', menuState); // This is the menu 'page', or intro screen.
game.state.add('play', playState); // This is the actual game.
game.state.add('win', winState); // This can be said to be the 'game over' screen.

// We then start the first state 'boot' after adding all the states we need.
game.state.start('boot');

