var DiggerScene = cc.Scene.extend({
    gameLayer:null,
    player: null,
    space:null,
    shapesToRemove:[],

    // init space of chipmunk
    initPhysics:function() {
        this.space = new cp.Space();
        // Gravity
        this.space.gravity = cp.v(0, -350);
        // set up Walls
        var wallBottom = new cp.SegmentShape(this.space.staticBody,
            cp.v(0, 0),// start point
            cp.v(4294967295, 0),// MAX INT:4294967295
            0);// thickness of wall
        this.space.addStaticShape(wallBottom);
    },
    onEnter:function () {
        this._super();
        this.initPhysics();

        this.gameLayer = new cc.Layer();

        this.player = this.createPhysicsSprite(cc.p(200,200))
        this.player.body.v_limit = 500;
        this.gameLayer.addChild(this.player);
        cc.log('onEnter');

        //add three layer in the right order
        this.addChild(this.gameLayer);
        this.scheduleUpdate();

        var self = this;
        if ('keyboard' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: function (key, event) {
                    var isTouchingGround = function() {
                        if(self.player.body.arbiterList == null) { return false; }
                        return true;
                    }
                    if(isTouchingGround() && key == 65) {
                        self.player.body.applyImpulse(cp.v(-500, 0), cp.v(0, 0));
                    } else if(isTouchingGround() && key == 68) {
                        self.player.body.applyImpulse(cp.v(500, 0), cp.v(0, 0));
                    } else if(isTouchingGround() && key == 32) {
                        self.player.body.applyImpulse(cp.v(0, 500), cp.v(0, 0));
                    }
                    cc.log(self.player.body);
                }
            }, this);
        } else {
            cc.log("KEYBOARD Not supported");
        }
    },
    update:function (dt) {
        // chipmunk step
        this.space.step(dt);

        /*
        var animationLayer = this.gameLayer.getChildByTag(TagOfLayer.Animation);
        var eyeX = animationLayer.getEyeX();

        this.gameLayer.setPosition(cc.p(-eyeX,0));
        */
    },
    createPhysicsSprite : function( pos ) {
        var body = new cp.Body(1, cp.momentForBox(1, 48, 108) );
        body.setPos( pos );
        this.space.addBody( body );
        var shape = new cp.BoxShape( body, 48, 108);
        shape.setElasticity( 0.5 );
        shape.setFriction( 0.5 );
        this.space.addShape( shape );

        var sprite = new cc.PhysicsSprite(res.player_png);
        sprite.setBody( body );
        return sprite;
    },
});

