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
        var collision = [];
        var levelSize = {'x':120, 'y':40};
        for(var i = 0; i < levelSize.y; i++) {
            var inside = [];
            for(var j = 0; j < levelSize.x; j++) {
                inside.push(0);
            }
            collision[i] = inside;
        }
        var data = _.clone(collision, true);

        offset = Math.floor((Math.random() * 10000));
        scale = 20;
        for(var x = 0; x < levelSize.x; x++) {
            var value = noise.perlin3((x+offset) / scale, (x+offset) / scale, 0);
            value = (1 + value) * 1.1 * 10;
            var y = Math.ceil(value);
            collision[y][x] = 1;
            data[y][x] = 1;

            for(var c = y+1; c < collision.length; c++) {
                collision[c][x] = 1;
                data[c][x] = 2;
            }

        }

        var offset = 0;
        var scale = 5;
        var floodFill = function(cave, limits, x, y) {
            var key = x + ':' + y;
            var value = noise.perlin2((x+offset) / scale, (y+offset) / scale);
            value = Math.floor(value * 256);

            limits.maximum.x = Math.max(limits.maximum.x, x);
            limits.maximum.y = Math.max(limits.maximum.y, y);
            limits.minimum.x = Math.min(limits.minimum.x, x);
            limits.minimum.y = Math.min(limits.minimum.y, y);

            if(_.contains(cave, key)) {
                //console.log('contains', key);
                return;
            }
            if(value <= 0) {
                //console.log('value <= 0', value);
                return;
            }
            cave.push(key);
            floodFill(cave, limits, x-1, y);
            floodFill(cave, limits, x+1, y);
            floodFill(cave, limits, x, y-1);
            floodFill(cave, limits, x, y+1);
            return;
        }

        var caveList = [];
        var limitList = [];
        var generateCaves = function() {
            var cave = [];
            var limits = {'minimum': {'x':Infinity, 'y':Infinity}, 'maximum': {'x': -Infinity, 'y': -Infinity}};
            floodFill(cave, limits, Math.floor((Math.random() * 100)), Math.floor((Math.random() * 100)));
            if(cave.length > 0) {
                caveList.push(cave);
                limitList.push(limits);
            }
        }
        for(var i = 0; i < 10; i++) {
            generateCaves();
        }
        console.log(caveList);
        console.log(limitList);

        var firstBlock = Number(caveList[0][0].split(':')[1]);
        console.log(firstBlock);
        for(var c = 0; c < caveList[0].length; c++) {
            // Creating caves from the list.
            var key = caveList[0][c].split(':');
            key[0] = Number(key[0]-limitList[0].minimum.x);
            key[1] = Math.min(Math.max(Number(key[1]-limitList[0].minimum.y), 0), levelSize.y-1);
            console.log(key[0], key[1])
            collision[key[1]][key[0]] = 0;
            if(data[key[1]][key[0]]) {
                data[key[1]][key[0]] = 3;
            }
        }

        var level = {
            "entities": [
                {
                    "type": "EntityPlayer",
                    "x": 200,
                    "y": 0
                }
            ],
            "layer": [
                {
                    "name": "main",
                    "width": levelSize.x,
                    "height": levelSize.y,
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
                    "width": levelSize.x,
                    "height": levelSize.y,
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
