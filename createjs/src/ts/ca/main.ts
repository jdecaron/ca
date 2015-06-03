'use strict';
document['frima']['framerate'] = 60;
document['frima']['multi'] = true;

import core    = require('core');
import util    = require('util');

declare function l(key: string): string;
declare function resize(): void;

export function start() {
    core.start();

    var screen = new GameScreen();
    resize();
}


export class Player {
    private collideableList:any[] = null;
    private collision:any = null;
    private velocity:any = {x:0, y:25};
    private onGround:boolean = false;
    private world:any = null;

    public sprite:createjs.Sprite = null;

    constructor(collideableList) {
        this.sprite = core.getSprite('player');
        this.collideableList = collideableList;
        createjs.Ticker.addEventListener("tick", this.tick.bind(this));
    }

    private calculateIntersection(rect1, rect2, x, y)
    {
        // prevent x|y from being null||undefined
        x = x || 0; y = y || 0;

        // first we have to calculate the
        // center of each rectangle and half of
        // width and height
        var dx, dy, r1={}, r2={};

        r1['cx'] = rect1.x+x+(r1['hw'] = (rect1.width /2));
        r1['cy'] = rect1.y+y+(r1['hh'] = (rect1.height/2));
        r2['cx'] = rect2.x + (r2['hw'] = (rect2.width /2));
        r2['cy'] = rect2.y + (r2['hh'] = (rect2.height/2));

        dx = Math.abs(r1['cx']-r2['cx']) - (r1['hw'] + r2['hw']);
        dy = Math.abs(r1['cy']-r2['cy']) - (r1['hh'] + r2['hh']);

        if (dx < 0 && dy < 0) {
            return {width:-dx,height:-dy};
        } else {
            return null;
        }
    }

    public tick() {
        this.velocity.y += 1;

        var addY = this.velocity.y;
        var bounds = {x:this.sprite.x, y:this.sprite.y, width:48, height:48};
        var counter = 0;

        var collideableBounds

        while ( !this.collision && counter < this.collideableList.length ) {
            var collideable = this.collideableList[counter]
            collideableBounds = {x:collideable.x, y:collideable.y, width:48, height:48};
            if ( this.collideableList[counter].isVisible ) {
                this.collision = this.calculateIntersection(bounds, collideableBounds, 0, addY);
            }

            if ( !this.collision && this.collideableList[counter].isVisible ) {
                if ( ( bounds.y < collideableBounds.y && bounds.y + addY > collideableBounds.y )
                    || ( bounds.y > collideableBounds.y && bounds.y + addY < collideableBounds.y ) ) {
                    addY = collideableBounds.y - bounds.y;
                } else {
                    counter++;
                }
            }
        }

        if ( !this.collision ) {
            this.sprite.y += addY;
            if ( this.onGround ) {
                this.onGround = false;
            }
        } else {
            this.sprite.y += addY - this.collision.height;
            if ( addY > 0 ) {
                this.onGround = true;
            }
            this.velocity.y = 0;
        }
        this.collision = null;
    }

    public jump() {
        if ( this.onGround ) {
            this.velocity.y = -17;
            this.onGround = false;
        }
    }
}

export class GameScreen extends core.Screen {
    private collideableList:any[] = [];
    private player:any = null;

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

    private generateMap() {
        for(var i = 0; i < 10; i++) {
            var sprite = core.getSprite('player');
            this.addChild(sprite)
            sprite.y = 400;
            sprite.x = i * 48;
            this.collideableList.push(sprite);
        }
    }

    private keyDown(e) {
        console.log(e);
        this.player.jump();
    }

    public init() {
        super.init();

        console.log('init scene');

        if (util.os() != 'iOS') {
            core.playMusic('music');
        }

        var time: number  = 500;

        document.onkeydown = this.keyDown.bind(this);

        this.player = new Player(this.collideableList);
        this.generateMap();
        this.addChild(this.player.sprite);
    }

    dispose() {
        super.dispose();
    }
}
