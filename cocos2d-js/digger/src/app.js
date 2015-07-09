var DiggerScene = cc.Scene.extend({
    blockList:[],
    gameLayer:null,
    lastTouch:0,
    player: null,
    space:null,
    shapesToRemove:[],

    // init space of chipmunk
    action: function(key) {
        var self = this;
        var isTouchingGround = function() {
            if(self.player.body.arbiterList == null) {
                return false;
            } else if (Math.abs(Math.floor(self.player.body.vy)) <= 20){
                return true;
            } else {
                return false;
            }
        }
        if(key == 65) {
            if(isTouchingGround() && self.player.body.f.x > -1000) {
                self.player.body.applyForce(cp.v(-1000, 0), cp.v(0, 0));
            }
        } else if(key == 68) {
            if(isTouchingGround() && self.player.body.f.x < 1000) {
                self.player.body.applyForce(cp.v(1000, 0), cp.v(0, 0));
            }
        } else if(isTouchingGround() && key == 32) {
            self.player.body.applyImpulse(cp.v(0, 1000), cp.v(0, 0));
        }
    },
    clean: function() {
        var positions = {
            topLeft:this.gameLayer.convertToNodeSpace(cc.p(0,this.height)),
            topRight:this.gameLayer.convertToNodeSpace(cc.p(this.width,this.height)),
            bottomLeft:this.gameLayer.convertToNodeSpace(cc.p(0,0)),
            bottomRight:this.gameLayer.convertToNodeSpace(cc.p(this.width,0))
        };
        var limits = {
            minX:positions.bottomLeft.x,
            minY:positions.bottomLeft.y,
            maxX:positions.topRight.x,
            maxY:positions.topRight.y
        };
        for(var i=0; i<this.blockList.length; i++) {
            var node = this.blockList[i][0];
            var shape = this.blockList[i][1];
            if(node.x < limits.minX || node.x > limits.maxX || node.y < limits.minY || node.y > limits.maxY) {
                node.opacity = 150;
                if(this.blockList[i][2]) {
                    this.space.removeShape(shape);
                    this.blockList[i][2] = 0;
                }
            } else{
                node.opacity = 50;
                if(!this.blockList[i][2]) {
                    this.space.addShape(shape);
                    this.blockList[i][2] = 1;
                }
            }
        }
    },
    release:function() {
        var self = this;
        self.player.body.f = cp.v(0,0);
    },
    initPhysics:function() {
        this.space = new cp.Space();
        // Gravity
        this.space.gravity = cp.v(0, -950);
    },
    onEnter:function () {
        this._super();
        this.initPhysics();

        this.gameLayer = new cc.LayerColor(cc.color(65,198,255));
        this.gameLayer.y = -1200;
        this.gameLayer.setContentSize(cc.size(120*48, 4000));

        // Debug physics.
        /*
        this._debugNode = new cc.PhysicsDebugNode(this.space );
        this._debugNode.visible = true ;
        this.gameLayer.addChild( this._debugNode );
        */

        this.addChild(this.gameLayer);
        this.scheduleUpdate();

        this.loadLevel();

        this.player = this.createDynamicSprite(cc.p(600,2000), res.player_png)
        this.player.body.v_limit = 500;
        this.gameLayer.addChild(this.player);

        var self = this;
        if ('keyboard' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: function (key, event) {
                    self.action(key);
                },
                onKeyReleased: function (key, event) {
                    if(key == 65 || key == 68) {
                        self.release();
                    }
                }
            }, this);
        } else {
            cc.log("KEYBOARD Not supported");
        }
        var handleMouseDown = function(e) {
            cc.log('handleMouseDown', e);
            var position = self.gameLayer.convertTouchToNodeSpace(e);
            cc.log(position);
            var sprite = new cc.Sprite();
            sprite.initWithFile(res.background_cube_png,cc.rect(0,0,48,48));
            sprite.setPosition(cc.p(position.x,position.y));
            self.gameLayer.addChild(sprite);
        };
        cc.eventManager.addListener({ event: cc.EventListener.MOUSE, onMouseDown: handleMouseDown }, this);
        var handleTouch = function(e) {
            e = e[0];
            var location = e.getLocation();
            var previousLocation = e.getPreviousLocation();
            if(location.x != previousLocation.x || location.y != previousLocation.y) {
                var point = self.gameLayer.convertTouchToNodeSpace(e);
                self.player.x = point.x;
                self.player.y = point.y;
                self.lastTouch = new Date().getTime();
            }
        }
        cc.eventManager.addListener({ event: cc.EventListener.TOUCH_ALL_AT_ONCE, onTouchesMoved: handleTouch }, this);
    },
    gamepad:function() {
        var self = this;
        var buttonPressed = function(b) {
            if (typeof(b) == "object") {
                return b.pressed;
            }
            return b == 1.0;
        }

        var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);

        if (!gamepads || gamepads[0] == undefined) {
            return;
        }
        var gamepad = gamepads[0];
        if (buttonPressed(gamepad.buttons[0])) {
            self.action(32);
        } else if (buttonPressed(gamepad.buttons[14])) {
            self.action(65);
        }else if (buttonPressed(gamepad.buttons[15])) {
            self.action(68);
        } else {
            self.release();
        }
    },
    update:function (dt) {
        // chipmunk step
        this.space.step(dt);

        this.gamepad();
        this.clean();
        if(new Date().getTime() > this.lastTouch + 200) {
            var position = cc.p(-this.player.getPositionX()+Math.floor(this.width/2),-this.player.getPositionY()+200);
            var absolute = Math.abs(position.y - this.gameLayer.y);
            var sign = position.y - this.gameLayer.y >= 0 ? 1 : -1;
            if(absolute > 10) {
                position.y = this.gameLayer.y + (10 * sign);
            }
            absolute = Math.abs(position.x - this.gameLayer.x);
            sign = position.x - this.gameLayer.x >= 0 ? 1 : -1;
            if(absolute > 10) {
                position.x = this.gameLayer.x + (10 * sign);
            }
            this.gameLayer.setPosition(position);
        }
    },
    createDynamicSprite : function(pos, file) {
        var body = new cp.Body(1, cp.momentForBox(1, 48, 48) );
        body.setPos( pos );
        this.space.addBody( body );
        var shape = new cp.BoxShape( body, 48, 48);
        shape.setElasticity(0);
        shape.setFriction(0.5);
        this.space.addShape( shape );

        var sprite = new cc.PhysicsSprite(file);
        sprite.setBody( body );
        return sprite;
    },

    createStaticSprite : function(pos, file) {
        var body = new cp.Body(Infinity, cp.momentForBox(1, 48, 48) );
        body.setPos( pos );
        var shape = new cp.BoxShape( body, 48, 48);
        shape.setElasticity(0);
        shape.setFriction(0.9);
        this.space.addShape( shape );
        var sprite = new cc.Sprite(file);
        sprite.opacity = 50;
        this.blockList.push([sprite, shape, 1]);
        sprite.setPosition( pos );
        return sprite;
    },

    loadLevel: function() {
        var collision = [];
        var levelSize = {'x':40, 'y':30};
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
        this.original = _.clone(collision, true);

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
                return;
            }
            if(value <= 0) {
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
        for(var i = 0; i < 20; i++) {
            generateCaves();
        }

        if(caveList.length > 0) {
            var firstBlock = Number(caveList[0][0].split(':')[1]);
            for(var c = 0; c < caveList[0].length; c++) {
                // Creating caves from the list.
                var key = caveList[0][c].split(':');
                key[0] = Number(key[0]-limitList[0].minimum.x);
                key[1] = Math.min(Math.max(Number(key[1]-limitList[0].minimum.y), 0), levelSize.y-1);
                collision[key[1]][key[0]] = 0;
                if(data[key[1]][key[0]]) {
                    data[key[1]][key[0]] = 3;
                }
            }
        }

        for(var i = 0; i < data.length; i++) {
            for(var j = 0; j < data[i].length; j++) {
                if(data[i][j] == 1) {
                    this.gameLayer.addChild(this.createStaticSprite(cc.p(j*48,-(i*48)+2000), res.green_cube_png));
                }
                else if(data[i][j] == 2) {
                    var checkSurrounding = function() {
                        if(i == 0 || j == 0 || i >= data.length-1 || j >= data[i].length-1 || data[i-1][j] == 0 || data[i][j-1] == 0 || data[i+1][j] == 0 || data[i][j+1] == 0
                            || data[i-1][j] == 3 || data[i][j-1] == 3 || data[i+1][j] == 3 || data[i][j+1] == 3
                        ) {
                            return 'empty';
                        } else {
                            return 'block';
                        }
                    };
                    if(checkSurrounding() == 'empty') {
                        this.gameLayer.addChild(this.createStaticSprite(cc.p(j*48,-(i*48)+2000), res.dirt_cube_png));
                    }
                    else {
                        var sprite = new cc.Sprite();
                        sprite.initWithFile(res.dirt_cube_png,cc.rect(0,0,48,48));
                        sprite.setPosition(cc.p(j*48,-(i*48)+2000));
                        this.gameLayer.addChild(sprite);
                    }
                }
                else if(data[i][j] == 3) {
                    var sprite = new cc.Sprite();
                    sprite.initWithFile(res.background_cube_png,cc.rect(0,0,48,48));
                    sprite.setPosition(cc.p(j*48,-(i*48)+2000));
                    this.gameLayer.addChild(sprite);
                }
            }
        }
    }
});

