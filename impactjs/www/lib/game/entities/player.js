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

    size: {x: 48, y: 48},
    health: 50,
    
    // Load an animation sheet
    animSheet: new ig.AnimationSheet( 'media/player.png', 48, 48 ),
    
    init: function( x, y, settings ) {
        // Add animations for the animation sheet
        this.addAnim( 'idle', 0.1, [0] );
        
        // Call the parent constructor
        this.parent( x, y, settings );
    }
    
/*
    update: function() {
        // This method is called for every frame on each entity.
        // React to input, or compute the entity's AI here.
        
        if( ig.input.pressed('jump') ) {
            this.vel.y = -100;
        }
        
        // Call the parent update() method to move the entity
        // according to its physics
        this.parent(); 
    }
*/
});

});
