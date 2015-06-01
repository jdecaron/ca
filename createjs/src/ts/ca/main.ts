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
}
