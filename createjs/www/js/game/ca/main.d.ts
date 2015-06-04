import core = require('core');
export declare function start(): void;
export declare class Player {
    private collideableList;
    private collision;
    private onGround;
    private game;
    public sprite: createjs.Sprite;
    public velocity: any;
    constructor(game: any);
    public tick(): void;
    public jump(): void;
}
export declare class GameScreen extends core.Screen {
    private action;
    private collideableList;
    private mouseText;
    private player;
    public layer: createjs.Container;
    constructor();
    public preload(): void;
    private keyDown(e);
    private keyUp(e);
    private initMouseListener();
    public init(): void;
    private loadLevel();
    public dispose(): void;
}
