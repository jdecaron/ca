export declare function isDebug(): any;
export declare function getLocale(): any;
export declare function getSoundVolume(): any;
export declare function getMusicVolume(): any;
export declare function registerGlobal(name: string, command: any): void;
export declare function unregisterGlobal(name: string): void;
export declare function registerGlobals(globals: any): void;
export declare function unregisterGlobals(globals: any): void;
export declare function getStage(): createjs.Stage;
export declare function getScreen(): Screen;
export declare function showAnim(animName: any, x?: number, y?: number): void;
export interface AnimationEndEvent {
    target: Object;
    type: string;
    name: string;
    next: string;
}
export interface Disposable {
    dispose(): any;
}
export declare class LayeredContainer extends createjs.Container {
    public layers: {};
    constructor(layerNames: string[]);
    public setLayers(layerNames: string[]): void;
    public getLayer(name: string): any;
}
export declare class Screen extends LayeredContainer implements Disposable {
    private cleanupQueue;
    public splashPath: string;
    constructor(layerNames?: string[]);
    public preload(): any;
    public init(): void;
    public dispose(): void;
    public auto(f: any): any;
    public interval(time: any, fn: any): number;
    public timeout(time: any, fn: any): number;
    public update(evt: createjs.TickerEvent): void;
    public setBackgroundBitmap(name: string, x?: number, y?: number): void;
    public setBackgroundSprite(name: string): void;
}
export declare function initCamera(cameraName: String, scene: any, root: any): SpriteAnim;
export declare function playBack(shots: any, shot: any, manifest: any, container: any, camera: any): void;
export declare function playMusic(name: string, useCrossfade?: boolean): void;
export declare function stopMusic(): void;
export declare function playSound(name: string, delay?: number, offset?: number, loop?: number): createjs.SoundInstance;
export declare function isSoundPlaying(name: string): boolean;
export declare function stopAllSounds(): void;
export declare function addSpriteSheet(id: any, data: any): void;
export declare function colorFilter(rMult?: number, gMult?: number, bMult?: number, aMult?: number, rOffset?: number, gOffset?: number, bOffset?: number, aOffset?: number): createjs.ColorFilter;
export interface AtlasInfo {
    name: string;
    spritesheet: createjs.SpriteSheet;
    framerate: number;
    numFrames: number;
    instances: AtlasInstance[][];
}
export interface AtlasInstance {
    frame: any;
    alpha: number;
    transform: createjs.Matrix2D;
}
export declare class SpriteAnim extends createjs.Container {
    public info: AtlasInfo;
    public paused: boolean;
    private time;
    private period;
    private dirty;
    private frame;
    private mCatchingFrame;
    private mGoToFrame;
    constructor(info: AtlasInfo, paused: boolean, aCatchingFrame: number, aGoToFrame: number);
    private tick();
    private endAnimation();
    public setLayerCount(n?: number): void;
    public anim : AtlasInfo;
    public stopCatchingFrame(): void;
    public catchingFrame : number;
    public goToFrame : number;
    public currentFrame : number;
    public play(): void;
    public gotoAndPlay(aFrame: number): void;
    public stop(): void;
    public gotoAndStop(aFrame: number): void;
}
export declare function getSpriteAnimInfo(id: any): any;
export declare function getSpriteAnim(id: any, paused?: boolean, catchingFrame?: number, goToFrame?: number): SpriteAnim;
export declare function addAnimAtlas(data: any): void;
export declare class TexturePacker {
    public root: any;
    public fit(blocks: any): void;
    public findNode(root: any, w: any, h: any): any;
    public splitNode(node: any, w: any, h: any): any;
    public growNode(w: any, h: any): any;
    public growRight(w: any, h: any): any;
    public growDown(w: any, h: any): any;
}
export declare function getSpriteSheet(animId: string): any;
export declare function getSprite(animId: string, play?: boolean): createjs.Sprite;
export declare var spriteManifest: Function;
export declare var fontManifest: Function;
export declare function fileManifest(ext: string, folder: string, baseUrl: string, prefix: string, ids: string[]): {
    id: string;
    src: string;
}[];
export declare var bitmapManifest: Function;
export declare var animManifest: Function;
export declare var musicManifest: Function;
export declare var soundManifest: Function;
export declare var xmlManifest: Function;
export declare var fontManifest: Function;
export interface ManifestDefinition {
    baseUrl: string;
    bitmaps?: string[];
    sprites?: string[];
    anims?: string[];
    musics?: string[];
    sounds?: string[];
    xmls?: string[];
    fonts?: string[];
}
export declare function assetManifest(assets: ManifestDefinition): {}[];
export declare function preloadAssets(manifest: any, callback: any): void;
export declare function getAsset(name: string): Object;
export declare class CachedText extends createjs.Text {
    private mVisual;
    private mTrueWidth;
    private mTrueHeight;
    constructor(text: string, font: string, color: string);
    public createCache(widthBuffer?: number, heightBuffer?: number, yOffset?: number, xAnchor?: number, yAnchor?: number, debugMode?: boolean): void;
    private debug(bounds, color, alpha);
    public visual : createjs.Container;
    public trueWidth : number;
    public trueHeight : number;
}
export declare function bitmapText(text: string, font?: string): createjs.BitmapText;
export declare class Scale9 extends createjs.Container {
    public scale9: any;
    public cornerBounds: any;
    constructor(border: createjs.DisplayObject, corner: createjs.DisplayObject, height?: number, width?: number, color?: string);
    public scale(properties: any, duration: number, ease: any): void;
}
export declare class Widget extends createjs.Container {
    constructor(parent?: createjs.Container, backgroundId?: string, x?: number, y?: number);
    public addAlignedText(text: string, align: string, y: number, font?: string, color?: string, width?: number, outline?: number): createjs.Text;
    public addText(text: string, x: number, y: number, font?: string, color?: string, dropShadow?: boolean, outline?: number): createjs.Text;
    public addBitmapText(text: string, x: number, y: number, font?: string): createjs.BitmapText;
    public addObject<T extends createjs.DisplayObject>(obj: T, x?: number, y?: number, scaleX?: number, scaleY?: number): T;
}
export declare function getAnimationFrames(animId: string): number[];
export declare function getTrueBounds(animId: string): any;
export declare function getAnimationBitmap(animId: string): HTMLImageElement;
export declare class EnableEvent extends createjs.Event {
    public enabled: boolean;
    constructor(enabled: boolean);
}
export interface ButtonTextOutlineInfo {
    outline: number;
    color: string;
    font: string;
}
export interface ButtonTextInfo {
    positionDown: createjs.Point;
    positionUp: createjs.Point;
    positionOut: createjs.Point;
    positionOver: createjs.Point;
    filters: any[];
    outlineInfo: ButtonTextOutlineInfo;
    textString: string;
    color: string;
    font: string;
}
export declare class Button extends Widget {
    private helper;
    private frames;
    private sprite;
    private mText;
    private mTextOutline;
    private mButtonTextInfo;
    private index;
    private hoverY;
    private downY;
    private isOut;
    private isDown;
    private isEnabled;
    private dispatchImpl;
    private mIgnoreAlpha;
    private mHitzoneOffset;
    constructor(parent: createjs.Container, animId: string, x?: number, y?: number, buttonTextInfo?: ButtonTextInfo, ignoreAlpha?: boolean, hitzoneOffset?: createjs.Point);
    private doTextOffset(aPos);
    private doOffset(offset);
    private drawHitArea();
    public bgIndex : number;
    public hoverOffsetY : number;
    public downOffsetY : number;
    public enabled : boolean;
    public selected(): void;
}
export declare function getVAlignPosition(text: createjs.Text): number;
export declare function isCurrentPopupOpen(): boolean;
export declare function isPopupQueueEmpty(): boolean;
export declare function popup(widget: createjs.Container, animate?: boolean, callback?: (...args: any[]) => any, closeTimer?: number): void;
export declare function l(key: string): string;
export declare function totalNumChildren(object: createjs.Container): number;
export declare function start(): void;
