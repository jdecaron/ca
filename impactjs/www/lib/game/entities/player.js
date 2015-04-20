ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPlayer = ig.Entity.extend({

    // Set some of the properties
    collides: ig.Entity.COLLIDES.ACTIVE,
    type: ig.Entity.TYPE.A,
    checkAgainst: ig.Entity.TYPE.B,

	accelAir: 600,
	accelGround: 1200,

    size: {x: 48, y: 48},
    health: 50,

    jump: 500,

    maxVel: {x: 400, y: 800},
	friction: {x: 800, y: 0},
    
    // Load an animation sheet
    animSheet: new ig.AnimationSheet( 'media/player.png', 48, 48 ),
    
    init: function( x, y, settings ) {
        // Add animations for the animation sheet
        this.addAnim( 'idle', 0.1, [0] );
        
        // Call the parent constructor
        this.parent( x, y, settings );
    },
    
    update: function() {
        // This method is called for every frame on each entity.
        // React to input, or compute the entity's AI here.

		var accel = this.standing ? this.accelGround : this.accelAir;
		if( ig.input.state('left') ) {
            console.log('left');
			this.accel.x = -accel;
			this.flip = true;
		}
		else if( ig.input.state('right') ) {
            console.log('right');
			this.accel.x = accel;
			this.flip = false;
		}
		else {
            console.log('right');
			this.accel.x = 0;
		}
        
		if( this.standing && ig.input.pressed('jump') ) {
            this.vel.y = -this.jump;
            console.log('jump');
        }
        
        // Call the parent update() method to move the entity
        // according to its physics
        this.parent(); 
    }
});

});
