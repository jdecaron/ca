ig.module( 
	'game.main' 
)
.requires(
	'impact.debug.debug',
	'impact.game',
	'impact.font',

	'plugins.camera',

    'game.entities.player'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
    gravity: 800,
    
    mode: 'add',
	
	init: function() {
		// Initialize your game here; bind keys etc.
        this.loadLevel();
        ig.game.clearColor = '#41c6ff';

		ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
		ig.input.bind( ig.KEY.A, 'left' );
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
		ig.input.bind( ig.KEY.D, 'right' );
        ig.input.bind( ig.KEY.SPACE, 'jump' );

		ig.input.bind( ig.KEY._1, 'add' );
		ig.input.bind( ig.KEY._2, 'remove' );

        ig.input.bind( ig.KEY.MOUSE1, 'action' );
        ig.input.initMouse();
	},

    loadLevel: function() {
        var collision = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
        var data = _.clone(collision, true);
        
        for(var x = 0; x < 30; x++) {
            var t = 100/20;
            var value = noise.perlin3((x+t)/20, (x+t)/20, 0);
            value = (1 + value) * 1.1 * 10;
            collision[Math.ceil(value)-5][x] = 1;
            data[Math.ceil(value)-5][x] = 1;
        }
        var level = {
            "entities": [
                {
                    "type": "EntityPlayer",
                    "x": 384,
                    "y": 288
                }
            ],
            "layer": [
                {
                    "name": "main",
                    "width": 30,
                    "height": 20,
                    "visible": true,
                    "tilesetName": "media/tiles.png",
                    "repeat": false,
                    "preRender": false,
                    "distance": "1",
                    "tilesize": 48,
                    "foreground": false,
                    "data": data
                },
                {
                    "name": "collision",
                    "width": 30,
                    "height": 20,
                    "visible": true,
                    "tilesetName": "",
                    "repeat": false,
                    "preRender": false,
                    "distance": 1,
                    "tilesize": 48,
                    "foreground": false,
                    "data": collision
                }
            ]
        };
        this.currentLevel = level;
        this.parent(level);

		this.setupCamera();
    },

	setupCamera: function() {
		// Set up the camera. The camera's center is at a third of the screen
		// size, i.e. somewhat shift left and up. Damping is set to 3px.		
		this.camera = new ig.Camera( ig.system.width/3, ig.system.height/3, 3 );
		
		// The camera's trap (the deadzone in which the player can move with the
		// camera staying fixed) is set to according to the screen size as well.
    	this.camera.trap.size.x = ig.system.width/10;
    	this.camera.trap.size.y = ig.system.height/3;
		
		// The lookahead always shifts the camera in walking position; you can 
		// set it to 0 to disable.
    	this.camera.lookAhead.x = ig.system.width/6;
		
		// Set camera's screen bounds and reposition the trap on the player
    	this.camera.max.x = this.collisionMap.pxWidth - ig.system.width;
    	this.camera.max.y = this.collisionMap.pxHeight - ig.system.height;
    	this.camera.set( this.player );
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

		this.camera.follow( this.player );

        if( ig.input.pressed('add') ) {
            this.mode = 'add';
        }

        if( ig.input.pressed('remove') ) {
            this.mode = 'remove';
        }

        if( ig.input.pressed('action') ) {
            var tileSize = this.currentLevel.layer[0].tilesize;
            var x = Math.floor((this.camera.pos.x + ig.input.mouse.x)/tileSize);
            var y = Math.floor((this.camera.pos.y + ig.input.mouse.y)/tileSize);
            if(this.mode == 'add') {
                this.currentLevel.layer[0].data[y][x] = 2;
                this.currentLevel.layer[1].data[y][x] = 1;
            } else {
                this.currentLevel.layer[0].data[y][x] = 0;
                this.currentLevel.layer[1].data[y][x] = 0;
            }
        }
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		this.font.draw( this.mode + ' blocks', ig.input.mouse.x+10, ig.input.mouse.y);
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 960, 640, 1 );

});
