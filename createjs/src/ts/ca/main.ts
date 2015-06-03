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

export class GameScreen extends core.Screen {
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

    public init() {
        super.init();

        console.log('init scene');

        this.addChild(core.getSprite('player'));

        if (util.os() != 'iOS') {
            core.playMusic('music');
        }

        var time: number  = 500;

        var container = new createjs.Container();
        this.addChild(container);
    }

    dispose() {
        super.dispose();
    }
}
