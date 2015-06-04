'use strict';
document['frima']['framerate'] = 60;
document['frima']['multi'] = true;

import core    = require('core');
import util    = require('util');

declare function l(key: string): string;
declare function resize(): void;
declare var noise:any;

export function start() {
    core.start();

    var screen = new GameScreen();
    resize();
}

export class Player {
    private collideableList:any[] = null;
    private collision:any = null;
    private onGround:boolean = false;
    private game:any = null;

    public sprite:createjs.Sprite = null;
    public velocity:any = {x:0, y:25};

    constructor(game) {
        this.game = game;
        this.sprite = core.getSprite('player');
        this.collideableList = game.collideableList;
        createjs.Ticker.addEventListener("tick", this.tick.bind(this));
    }

    public tick() {
        this.game.layer.x = -this.sprite.x + (core.getStage().canvas.width/2);
        this.game.layer.y = -this.sprite.y + (core.getStage().canvas.height/2);

        this.velocity.y += 1;

        var moveBy = {x:0, y:this.velocity.y},
            collision = null,
            collideables = this.collideableList;

        collision = util.calculateCollision(this.sprite, 'y', collideables, moveBy);
        this.sprite.y += isNaN(moveBy.y) ? 0 : moveBy.y;

        if ( !collision ) {
            if ( this.onGround ) {
                this.onGround = false;
            }
        } else {
            if ( moveBy.y >= 0 ) {
                this.onGround = true;
            }
            this.velocity.y = 0;
        }

        moveBy = {x:this.velocity.x, y:0};
        collision = util.calculateCollision(this.sprite, 'x', collideables, moveBy);

        this.sprite.x += isNaN(moveBy.x) ? 0 : moveBy.x;
    }

    public jump() {
        if ( this.onGround ) {
            this.velocity.y = -20;
            this.onGround = false;
        }
    }
}

export class GameScreen extends core.Screen {
    private action:string = 'add';
    private collideableList:any[] = [];
    private player:any = null;

    public layer: createjs.Container = null;

    constructor() {
        super([]);
        this.preload();

        var scope = this;
    }

    public preload() {

        var scope = this;
        var manifest = core.assetManifest(
            {
                baseUrl: '../assets',
                sprites: ['0']
            }
        );
        core.preloadAssets(manifest, function() {
                scope.init();
            }
        );
    }

    private keyDown(e) {
        if(e.keyCode == 32) {
            this.player.jump();
        } else if(e.keyCode == 49) {
            this.action = 'add';
        } else if(e.keyCode == 50) {
            this.action = 'remove';
        } else if(e.keyCode == 65) {
            this.player.velocity.x = -10;
        } else if(e.keyCode == 68) {
            this.player.velocity.x = 10;
        }
    }

    private keyUp(e) {
        if ((e.keyCode == 65 && this.player.velocity.x == -10) || (e.keyCode == 68 && this.player.velocity.x == 10)) {
            this.player.velocity.x = 0;
        }
    }

    public init() {
        super.init();

        if (util.os() != 'iOS') {
            core.playMusic('music');
        }

        var time: number  = 500;

        document.onkeydown = this.keyDown.bind(this);
        document.onkeyup = this.keyUp.bind(this);

        this.layer = new createjs.Container();
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(-3000, -3000, 6000, 6000);
        this.layer.hitArea = hit;
        this.layer.on('click', function(e:any){
                var local = this.layer.globalToLocal(e.stageX, e.stageY);
                var position = {x:Math.floor(local.x/48) * 48, y:Math.floor(local.y/48) * 48};
                if(this.action == 'add') {
                    var sprite = core.getSprite('dirt_cube');
                    sprite.x = position.x;
                    sprite.y = position.y;
                    this.collideableList.push(sprite);
                    this.layer.addChild(sprite);
                }else {
                    for(var i = this.collideableList.length-1; i > 0; i--) {
                        if(this.collideableList[i].x == position.x && this.collideableList[i].y == position.y) {
                            this.layer.removeChild(this.collideableList[i]);
                            this.collideableList.splice(i, 1);
                        }
                    }
                }
            },
        this);

        this.player = new Player(this);
        this.loadLevel();
        this.layer.addChild(this.player.sprite);
        this.addChild(this.layer);
    }

    private loadLevel() {
        var collision = [];
        var levelSize = {'x':60, 'y':40};
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

        var backgroundCube = function(i, j, scope) {
            var sprite = core.getSprite('background_cube');
            sprite.x = j*48;
            sprite.y = i*48;
            scope.layer.addChild(sprite);
        };

        for(var i = 0; i < data.length; i++) {
            for(var j = 0; j < data[i].length; j++) {
                if(data[i][j] == 1) {
                    backgroundCube(i, j, this);
                    var sprite = core.getSprite('green_cube');
                    sprite.x = j*48;
                    sprite.y = i*48;
                    this.collideableList.push(sprite);
                    this.layer.addChild(sprite);
                }
                else if(data[i][j] == 2) {
                    backgroundCube(i, j, this);
                    var sprite = core.getSprite('dirt_cube');
                    sprite.x = j*48;
                    sprite.y = i*48;
                    this.collideableList.push(sprite);
                    this.layer.addChild(sprite);
                }
                else if(data[i][j] == 3) {
                    backgroundCube(i, j, this);
                }
            }
        }
    }

    dispose() {
        super.dispose();
    }
}
