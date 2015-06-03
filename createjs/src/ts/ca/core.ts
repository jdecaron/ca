'use strict';
import util   = require('util');

// Configuration
// -----------------------------------------------------------------------------

/** Returns whether debugging code is enabled or not.*/
export function isDebug() { return document['frima']['debug']; }

/** Returns the active locale's language code. */
export function getLocale() { return document['frima']['locale']; }

/** Returns the volume of sound effects or 0.0 if disabled. */
export function getSoundVolume() {
    return document['frima']['enablesounds'] ? document['frima']['soundvolume'] : 0;
}

/** Returns the volume of music tracks or 0.0 if disabled. */
export function getMusicVolume() {
    return document['frima']['enablesounds'];
}

// Global Variables
// -----------------------------------------------------------------------------

/** A mapping of global variables accessible from the browser's console. */
var globals;
window['ca'] = globals = {};

/** Registers a variable on the global 'ca' object. */
export function registerGlobal(name: string, command) {
    globals[name] = command;
}

/** Unregisters a variable from the global 'ca' object. */
export function unregisterGlobal(name: string) {
    delete globals[name];
}

/** Registers a collection of variables on the global 'ca' object. */
export function registerGlobals(globals) {
    _.forOwn(globals, (val, key: string) => registerGlobal(key, val));
}

/** Unregisters a collection of variables on the global 'ca' object. */
export function unregisterGlobals(globals) {
    _.forEach(globals, unregisterGlobal);
}

// Stage
// -----------------------------------------------------------------------------

/** The EaselJS stage used to display the game. */
var stage: createjs.Stage;

/** The screen displayed while game screens are loading. */
var loading: LoadingScreen;

/** The currently active game screen. */
var screen: Screen;

/** Initializes the EaselJS stage, called once when the game boots. */
function initStage() {
    stage = new createjs.Stage('ca');

    stage.enableMouseOver();
    stage.mouseMoveOutside = true;
}

/** Returns the EaselJS stage. */
export function getStage() { return stage; }

/** Returns the currently active game screen. */
export function getScreen() { return screen; }

/** Changes the currently active game screen. */

export function showAnim(animName, x = 300, y = 300) {
    screen.removeChild(screen['tempAnim']);
    var anim = getSpriteAnim(animName);
    anim.x = x;
    anim.y = y;
    screen['tempAnim'] = screen.addChild(anim);
}

registerGlobals({getStage:  getStage,
                 getScreen: getScreen,
                 showAnim: showAnim});

export interface AnimationEndEvent {
    target: Object;
    type:   string;
    name:   string;
    next:   string;
}

// TODO: really?
export interface Disposable {
    dispose();
}

// TODO: are we really going to need layers?
export class LayeredContainer extends createjs.Container {
    layers = {};
    
    constructor(layerNames: string[]) {
        super();
        this.setLayers(layerNames);
    }
    
    setLayers(layerNames: string[]) {
        var self = this;
        self.removeAllChildren();
        _.forEach(layerNames || [], (name: string) => {
            var layer = new createjs.Container();
            layer.name = name;
            self.layers[name] = layer;
            self.addChild(layer);
        });
    }

    getLayer(name: string) { return this.layers['name']; }
}

/**
 * A screen contains the logic and visuals of the game.
 * Only one screen may be active on the stage at any time.
 * Before a screen is made active, all its required assets are preloaded.
 * When a new screen is set active, the old one is disposed.
 */
export class Screen extends LayeredContainer implements Disposable {
    private cleanupQueue = [];

    /*must be defined in your extend main game class. full path from assets/... is needed.
      this image is not preload so keep it as small as possible
     */
    public splashPath:string;

    constructor(layerNames?: string[]) { super(layerNames); }
    
    preload(): any {}
    
    init() {
        stage.removeChild(loading);
        stage.addChildAt(this, 0);
        screen = this;
    }
    
    dispose() {
        stage.removeChild(this);
        this.cleanupQueue.forEach((f) => f());
        screen = null;

        // TODO: automatically remove screen assets
    }

    auto(f) {
        this.cleanupQueue.push(!f.dispose ? f : () => f.dispose());
        return f;
    }
    
    interval(time, fn) {
        var x = setInterval(fn, time);
        this.auto(() => clearInterval(x));
        return x;
    }
    
    timeout(time, fn) {
        var x = setTimeout(fn, time);
        this.auto(() => clearTimeout(x));
        return x;
    }
    
    // TODO: should not need to update objects every tick.
    update(evt: createjs.TickerEvent) {}
    
    // TODO: use CSS backgrounds on the canvas?
    setBackgroundBitmap(name: string, x: number = 0, y: number = 0) {
        var b = new createjs.Bitmap(<HTMLImageElement> getAsset(name));
        b.name = 'screen-background';
        b.x = x;
        b.y = y;
        this.addChild(b);
    }
    
    setBackgroundSprite(name: string) {
        var s = getSprite(name);
        s.name = 'screen-background';
        this.addChild(s);
    }
}

/** A special game screen displayed while other screens are loading. */
class LoadingScreen extends createjs.Container {
    // TODO: use this.
    progress: createjs.Shape;
    
    constructor(splashPath:string) {
        super();
        var c = getStage().canvas;

        if(splashPath)
        {
            var bitmap = new createjs.Bitmap(splashPath);
            this.addChild(bitmap);
        }
        else{
            //only if there is no splash jpg
            // TODO: center on canvas utility function.
            var t = new createjs.Text('Loading', '72px Arial', '#FFF');
            var b = t.getBounds();
            t.x = (c.width  / 2) - (b.width  / 2);
            t.y = (c.height / 2) - (b.height / 2);
            this.addChild(t);
        }


        
        var loader = getSprite('loader');
        var b = loader.getBounds();
        loader.regX = b.width / 2;
        loader.regY = b.height / 2;
        loader.x = c.width - loader.regX - 20;
        loader.y = c.height - loader.regY - 20;
        loader.on('tick', () => loader.rotation += 5);
        this.addChild(loader);
        
        var coin = getSprite('loader-splashcoin', true);
        var b = coin.getBounds();
        coin.x = c.width - b.width - 28;
        coin.y = c.height - b.height - 28;
        this.addChild(coin);
        

        
        this.progress = new createjs.Shape();
        this.addChild(this.progress);
    }
    
    setProgress(p: number) {
        
    }
}

// Sound
// -----------------------------------------------------------------------------

var preferedSoundFormat ='m4a';
/** Initializes the SoundJS context, called once when the game boots. */
function initSound() {
    // TODO: use sound plugin override.
    createjs.Sound.registerPlugins([createjs.WebAudioPlugin,
                                    createjs.HTMLAudioPlugin]);

    var caps = <any> createjs.Sound.getCapabilities();
    var formats:any = _.filter(createjs.Sound.SUPPORTED_EXTENSIONS, (k) => caps[k]);

    console.log('Sound Capabilities: ' +
        (caps.panning ? 'Panning ' : '') +
        (caps.volume ? 'Volume ' : '') +
        formats.join(', '));


    if(formats.indexOf('ogg') >= 0)
        preferedSoundFormat = 'ogg';
    else if(formats.indexOf('m4a') >= 0)
        preferedSoundFormat = 'm4a';
    else
        console.log('unsupported sound format');

}

export function initCamera(cameraName: String, scene:any, root:any) {
    var camera = getSpriteAnim(cameraName);
    var container = new createjs.Container();
    container.visible = false;
    container.addChild(camera);
    root.addChild(container);
    var ratio = stage.canvas.width / camera.children[0].getBounds().width;
    var ticker = function() {
        container.scaleX = container.scaleY = ratio / camera.children[0].scaleX;
        scene.scaleX = scene.scaleY = container.scaleX;
        var point = camera.children[0].localToGlobal(0,0)
        scene.x = -point.x;
        scene.y = -point.y;
    }
    createjs.Ticker.on('tick', ticker);
    return camera;
}

export function playBack(shots: any, shot:any, manifest:any, container: any, camera:any) {
    var shot = shot;
    var id = function(name) {
        var split = name.split('_');
        return parseInt(split[split.length-2]);
    }
    var playNextShot = function(e) {
        var scope = this;
        this.stop();
        var nextShot = shots[id(e.name+'_'+document['frima']['definition'])+1];
        if(nextShot == undefined && camera) {
            camera.paused = true;
        }
        else {
            if(id(nextShot.name)+1 < shots.length) {
                preload(id(nextShot.name)+1, true);
            }
            var callback = function(eb) {
                var toAdd = shots[id(e.name+'_'+document['frima']['definition'])+1].name;
                if(eb.parameters.name == toAdd) {
                    document.removeEventListener('spriteanim', callback);
                    var animation = shots[id(e.name + '_') + 1].animation;
                    animation.on('animationend', playNextShot);
                    animation.alpha = 1;
                    animation.paused = false;
                    setTimeout(function() {
                        container.removeChild(scope);
                    }, 500);
                    if(camera) {
                        camera.paused = false;
                        util.event('loading', {show:false});
                    }
                }
            }
            if(shots[id(nextShot.name)].generated) {
                callback({'parameters':{'name':nextShot.name}});
            }else if(camera){
                camera.paused = true;
                document.addEventListener('spriteanim', callback);
                util.event('loading', {show:true});
            }
        }
    }
    var preload = function(toPreload:number, resume:boolean) {
        var loader = new createjs.LoadQueue();
        loader.loadFile(manifest.baseUrl + '/anims/' + shots[toPreload].name + '.json');
        loader.on('fileload', function(e:any) {
            var images = _.clone(e.result.images);
            _.forEach(e.result.images, function(imageURI) {
                var image = document.createElement("img");
                image.src = '../assets/animations/buy/anims/' + imageURI;
                image.onload = function() {
                    setTimeout(function() {
                        var index = _.indexOf(e.result.images, imageURI);
                        e.result.images[_.indexOf(e.result.images, imageURI)] = image;
                        _.pull(images, imageURI);
                        if(images.length == 0) {
                            loadSpriteAnims(e);
                        }
                    }, 500);
                }
            });
        });
    }
    var plan: SpriteAnim = shots[id(shot)].animation;
    plan.paused = false;
    plan.alpha = 1; 
    if(shots.length > 1) {
        preload(id(shot)+1, false);
        plan.on('animationend', playNextShot);
    }
}

/** The currently playing music track. */
var music: createjs.SoundInstance;

/** The currently playing sound effects, indexed by instance ID. */
var sounds = {};

/** The instance ID of the next sound effect. */
var soundInstanceId = -1;

/** The number of generated instance IDs before the next ID resets to 0. */
var maxSoundInstanceId = 10000;

/**
 * Starts playing a music track.
 * It will be crossfaded with the currently playing track.
 */
export function playMusic(name: string, useCrossfade = true) {
    var music  = createjs.Sound.play(name, createjs.Sound.INTERRUPT_NONE,
                                        0, 0, -1, getMusicVolume());
}

/** Stops the currently playing music track, if any. */
export function stopMusic() {
    if(music) {
        music.stop();
        music = null;
    }
}

/** Starts playing a sound effect. Returns the sound instance. */
export function playSound(name: string, delay = 0, offset = 0, loop = 0) {
    var id = name + '-' + ++soundInstanceId;
    var s  = createjs.Sound.play(name, createjs.Sound.INTERRUPT_ANY,
        delay, offset, loop, getSoundVolume());
    
    if(soundInstanceId >= maxSoundInstanceId) soundInstanceId = -1;
    
    sounds[id] = s;
    
    // IE doesn't support the 'on' method on SoundInstance.
    // Need to register and unregister the listener manually.
    var listener = () => {
        delete sounds[id];
        s.removeEventListener('complete', listener);
    };
    s.addEventListener('complete', listener);
    
    return s;
}

export function isSoundPlaying(name: string): boolean {

    var isPlaying: boolean = false;

    var soundsList: Array<string>   = _.keys(sounds);
    var length: number              = soundsList.length;

    for (var i: number = 0; i < length; ++i) {
        if (_.contains(soundsList[i], name)) {
            isPlaying = true;
            break;
        }
    }
    return isPlaying;
}

/** Stops all currently playing sound effects. */
export function stopAllSounds() { createjs.Sound.stop(); }

/** Toggles whether sound playback is enabled or disabled. */
function toggleSounds() {
    document['frima']['enablesounds'] = !document['frima']['enablesounds'];
    setMusicVolume(getMusicVolume(), false);
    setSoundVolume(getSoundVolume(), false);
    return document['frima']['enablesounds'];
}

/** Changes the volume of music tracks, takes effect immediately. */
function setMusicVolume(volume: number, set = true) {
    if(volume !== document['frima']['musicvolume'] || !set) {
        if(set)   document['frima']['musicvolume'] = volume;
        if(music) music.setVolume(volume);
    }
}

/** Changes the volume of sound effects, takes effect immediately. */
function setSoundVolume(volume: number, set = true) {
    if(volume !== document['frima']['soundvolume'] || !set) {
        if(set) document['frima']['soundvolume'] = volume;

        _.values(sounds).forEach((s: createjs.SoundInstance) =>
                                 s.setVolume(volume));
    }
}

registerGlobals({playSound:      playSound,
                 toggleSounds:   toggleSounds,
                 setMusicVolume: setMusicVolume,
                 setSoundVolume: setSoundVolume});

// Assets
// -----------------------------------------------------------------------------

/** The global PreloadJS asset load queue. */
var loadQueue: createjs.LoadQueue;

/** A mapping of known spritesheets indexed by name. */
var spritesheets = {};

/** A lookup table mapping sprite animation names to their spritesheet names. */
var spritesLookup = {};

/** A lookup table mapping IceWave animation names to their frame instances. */
var animsLookup   = {};

/** A lookup table mapping xml loaded file. */
var xmlsLookup   = {};

var defaultBitmapFont;
var bitmapFonts = {};

registerGlobals({
    sheets:  spritesheets,
    sprites: spritesLookup,
    anims:   animsLookup,
    xmls:    xmlsLookup
});

interface PreloadEvent {
    target:    any;
    type:      string;
    item:      any;
    result:    any;
    rawResult: any;
}

export function addSpriteSheet(id, data) {
    _.forEach(data.animations, (v, k) => {
        spritesLookup[k] = id;
        spritesheets[id] = new createjs.SpriteSheet(data);
    });
}

export function colorFilter(rMult?:   number,
                            gMult?:   number,
                            bMult?:   number,
                            aMult?:   number,
                            rOffset?: number,
                            gOffset?: number,
                            bOffset?: number,
                            aOffset?: number)
{
    return new createjs.ColorFilter(rMult,   gMult,   bMult,   aMult,
                                    rOffset, gOffset, bOffset, aOffset);
}

interface AtlasSymbol {
    framerate: number;
    numFrames: number;
    instances: any[][];
}

export interface AtlasInfo {
    name:        string;
    spritesheet: createjs.SpriteSheet;
    framerate:   number;
    numFrames:   number;
    instances:   AtlasInstance[][];
}

export interface AtlasInstance {
    frame:     any;
    alpha:     number;
    transform: createjs.Matrix2D;
}

var playbackFrameRate: number = 1;

export class SpriteAnim extends createjs.Container {
    private time = 0;
    private period = 0;
    private dirty = true;
    private frame: number = 0;
    private mCatchingFrame: number = -1;
    private mGoToFrame: number = -1;

    constructor(public info: AtlasInfo, public paused: boolean, aCatchingFrame: number, aGoToFrame: number) {
        super();
        var self = this;
        self.period = 1000 / self.info.framerate;

        self.mCatchingFrame = aCatchingFrame;
        self.mGoToFrame = aGoToFrame;

        self.setLayerCount();

        self.on('tick', (e) => {

            if (!self.paused)
                self.time += <number> e['delta'] / playbackFrameRate;
            else if(!self.dirty) return;

            self.tick();
        });

        self.tick();

        util.listen("changeFrameRate", function (e) {
            playbackFrameRate = e.parameters.frameRate;
        });
    }

    private tick(): void {
        var self = this;
        self.frame = Math.floor(self.time / self.period);

        if (self.frame >= self.info.numFrames) {
            self.frame = self.endAnimation()
            ? self.info.numFrames - 1
            : self.frame % self.info.numFrames;
        }

        if (self.mCatchingFrame != -1 && self.mGoToFrame != -1) {
            if (self.frame == self.mCatchingFrame) {
                self.frame = self.mGoToFrame;
                self.time = self.period * self.mGoToFrame;
            }
        }

        self.children.forEach((sprite: createjs.Sprite, i) => {
            if (i >= self.info.instances.length) return;

            var inst = self.info.instances[i][self.frame];
            sprite.alpha = 0;

            if (sprite.visible = !!inst && inst.alpha !== 0) {
                // Set all frames to null <No goToAndStop>
                // core.getSpriteAnimInfo("animation_linkage").instances[0].forEach(i => i.frame = null);
                if (inst.frame != null && sprite['gotoAndStop'] != undefined) sprite.gotoAndStop(inst.frame);
                sprite['m'] = inst.transform;
                var matrix = new createjs.Matrix2D(inst.transform.a, inst.transform.b, inst.transform.c, inst.transform.d, inst.transform.tx, inst.transform.ty);
                matrix.decompose(sprite);
                var b = sprite.getBounds();
                sprite.alpha = inst.alpha;
                var hitArea = new createjs.Shape();
            }
        });
        self.dirty = false;
    }
    
    private endAnimation() {
        if(this.hasEventListener('animationend')) {
            var name = this.info.name;
            var time = this.time;
            var evt  = <AnimationEndEvent> new createjs.Event('animationend',
                                                              false, false);
            evt.name = this.info.name;
            this.dispatchEvent(evt);
            
            return this.info.name !== name || this.time !== time || this.paused;
        }
        return false;
    }
    
    setLayerCount(n = this.info.instances.length) {
        var self = this;
        var i    = self.children.length;
        
        if(i < n) _.range(n - i).forEach(() => {
            self.addChild(new createjs.Sprite(self.info.spritesheet));
        });
        else _.range(i - 1, n - 1, -1).forEach((i) => {
            self.children[i].visible = false
        });
    }
    
    set anim(info: AtlasInfo) {
        if(info.framerate !== this.info.framerate) {
            throw new Error('Cannot change an animation\'s framerate');
        }
        
        this.info  = info;
        this.time  = 0;
        this.dirty = true;
        this.setLayerCount();
    }

    stopCatchingFrame(): void {
        this.catchingFrame = -1;
        this.goToFrame = -1;
    }

    set catchingFrame(aCatchingFrame: number) { this.mCatchingFrame = aCatchingFrame; }
    set goToFrame(aGoToFrame: number) { this.mGoToFrame = aGoToFrame; }
    
    set currentFrame(aNewFrame: number) { 
        
        aNewFrame = (aNewFrame % 1 != 0) ? Math.round(aNewFrame) : aNewFrame;
        if(aNewFrame == this.frame) { return; }

        this.gotoAndStop(aNewFrame); 
    }
    get currentFrame() { return this.frame; }

    play() {
        this.paused = false;
    }

    gotoAndPlay(aFrame: number): void {
        this.time = this.period * aFrame;
        this.paused = false;
    }

    stop() {
        this.time   = 0;
        this.paused = true;
    }

    gotoAndStop(aFrame: number): void {
        this.paused = true;
        this.time = this.period * aFrame;
        this.tick();
    }
}

export function getSpriteAnimInfo(id) {
    var info = animsLookup[id];
    if(!info) throw new Error('No such anim: ' + id);
    return info;
}

export function getSpriteAnim(id, paused = false, catchingFrame: number = -1, goToFrame: number = -1): SpriteAnim {
    return new SpriteAnim(getSpriteAnimInfo(id), paused, catchingFrame, goToFrame);
}

export function addAnimAtlas(data) {
    var startAtlas = Date.now();
    var sheet   = new createjs.SpriteSheet(data);
    var filters = {};

    // Unpack the atlas symbols.
    _.forEach(data.symbols, (v: AtlasSymbol, k) => {
        var m = k.match(/\-(en|fr)$/);
        if(m) {
            if(m[1] !== getLocale()) return;

            k = k.slice(0, k.length - 3);
        }

        var isVirtual = /container/.test(k);
        var instances = <AtlasInstance[][]> v.instances.map((frames) => {
            return frames.reduce((seq, f) => {
                var value = {
                    frame:     f[2],
                    alpha:     1,
                    transform: {a:f[3], b:-f[4], c:f[5], d:-f[6], tx:f[7], ty:-f[8]}
                };

                if(_.isNumber(f[9]) && !isVirtual) {
                    var vals = f.slice(9);
                    var key  = vals.join(':');

                    if(key === '1:1:1:0:0:0:0:0') value.alpha = 0;
                    else if(vals[0] === 1 &&
                            vals[1] === 1 &&
                            vals[2] === 1 &&
                            vals[4] === 0 &&
                            vals[5] === 0 &&
                            vals[6] === 0 &&
                            vals[7] === 0)
                    {
                        value.alpha = vals[3];
                    }
                    else {
                        var info = filters[key];

                        if(!info) {
                            filters[key] = [colorFilter.apply(null, vals),
                                            [f[2]]];
                        }
                        else if(!_.contains(info[1], f[2])) {
                            info[1].push(f[2]);
                        }

                        value.frame = key + '-' + f[2];
                    }
                }

                _.range(f[0] - seq.length).forEach(() => seq.push(null));
                _.range(f[1])             .forEach(() => seq.push(value));

                return seq;
            }, []);
        });

        animsLookup[k] = {
            name:        k,
            instances:   instances,
            framerate:   v.framerate,
            numFrames:   v.numFrames,
            spritesheet: sheet
        };
    });
    
    // Apply color filters and add the generated spritesheet to the atlas.
    var image   = new createjs.Container();
    var sprites = [];

    var generate = () => {
        var start = Date.now();

        _.forEach(<any> filters, (info, key) => {
            var container = new createjs.Container();

            image.addChild(container);

            info[1].forEach((frame: number) => {
                var sprite = new createjs.Sprite(sheet);
                sprite.gotoAndStop(frame);
                sprite.filters = [info[0]];

                var b = sprite.getBounds();
                sprite.cache(0, 0, b.width, b.height);
                sprite['w'] = b.width  + 1;
                sprite['h'] = b.height + 1;
                sprites.push([sprite, key, frame]);

                container.addChild(sprite);
            });
        });

        if(sprites.length !== 0) {
            var sorted = _.sortBy(sprites, (x) => x[0].h).reverse();
            var packer = new TexturePacker();

            packer.fit(sorted.map(_.first));

            data.animations = {};

            sorted.forEach((info) => {
                var f = data.frames[info[2]];
                data.animations[info[1] + '-' + info[2]] = {
                    frames: [data.frames.length]
                };

                if (!f) f = [];

                data.frames.push([info[0].x, info[0].y, f[2], f[3],
                    data.images.length, f[5], f[6], f[7], f[8]]);
            });

            image.cache(0, 0, packer.root.w, packer.root.h);
            data.images.push(image.cacheCanvas.toDataURL());
            sheet = new createjs.SpriteSheet(data);
        }

        _.forEach(<any> animsLookup, (x:AtlasInfo) => {
            if((<any> sheet)._images[0].src == (<any> x.spritesheet)._images[0].src) {
                x.spritesheet = sheet;
            }
        });

        var name = null;
        {
            if(typeof(data.images[0]) == 'string') {
                name = data.images[0];
            }
            else {
                name = data.images[0].src;
            }
            name = name.substring(name.lastIndexOf('/')+1);
            name = name.substring(0,name.indexOf('.'));
            var split = name.split('_');
            var expression = /^\d+$/;
            if(expression.test(split[split.length-1])) {
                split.pop();
                name = split.join('_');
            }
        }
        util.event('spriteanim', {'name':name, 'generated':true});
        console.log('Generated atlas in ' + (Date.now() - startAtlas) + 'ms, prefiltered animation spritesheet in ' +
            (Date.now() - start) + 'ms');
    };

    if(sheet.complete) generate();
    else sheet.on('complete', generate, null, true);
}

export class TexturePacker {
    root;

    fit(blocks) {
        var n, node, block, pos;
        this.root = {x: 0, y: 0, w: blocks[0].w, h: blocks[0].h};
        for(n = 0; n < blocks.length; n++) {
            block = blocks[n];
            if (node = this.findNode(this.root, block.w, block.h))
                pos = this.splitNode(node, block.w, block.h);
            else
                pos = this.growNode(block.w, block.h);
            block.x = pos.x;
            block.y = pos.y;
        }
    }
    
    findNode(root, w, h) {
        if(root.used)
            return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
        if(w <= root.w && h <= root.h)
            return root;
    }
    
    splitNode(node, w, h) {
        node.used  = true;
        node.down  = {x: node.x,     y: node.y + h, w: node.w,     h: node.h - h};
        node.right = {x: node.x + w, y: node.y,     w: node.w - w, h: h         };
        return node;
    }
    
    growNode(w, h) {
        var canGrowDown     = w <= this.root.w;
        var canGrowRight    = h <= this.root.h;
        var shouldGrowRight = canGrowRight && this.root.h >= (this.root.w + w);
        var shouldGrowDown  = canGrowDown  && this.root.w >= (this.root.h + h);
        
        if(shouldGrowRight) return this.growRight(w, h);
        if(shouldGrowDown)  return this.growDown(w, h);
        if(canGrowRight)    return this.growRight(w, h);
        if(canGrowDown)     return this.growDown(w, h);
    }
    
    growRight(w, h) {
        this.root = {
            used:  true,
            x:     0,
            y:     0,
            w:     this.root.w + w,
            h:     this.root.h,
            down:  this.root,
            right: {x: this.root.w, y: 0, w: w, h: this.root.h}
        };
        var node;
        if (node = this.findNode(this.root, w, h))
            return this.splitNode(node, w, h);
    }
    
    growDown(w, h) {
        this.root = {
            used:  true,
            x:     0,
            y:     0,
            w:     this.root.w,
            h:     this.root.h + h,
            down:  {x: 0, y: this.root.h, w: this.root.w, h: h},
            right: this.root
        };
        var node;
        if(node = this.findNode(this.root, w, h))
            return this.splitNode(node, w, h);
    }
}

function loadSpriteAnims(e) {
    var m = e.item.src.match(/^(.+)\/.+?\.json$/);
    e.result.images = e.result.images.map((x) => {
        if(typeof(x) == 'string') {
            return m[1] + '/' + x;
        }else {
            return x;
        }
    });
    addAnimAtlas(e.result);
}

/** Initializes the PreloadJS context. Called once when the game boots. */
function initLoader() {
    loadQueue = new createjs.LoadQueue();
    loadQueue.installPlugin(createjs.Sound);
    loadQueue.on('fileload', (e: PreloadEvent) => {
        if(e.item.spritesheet) {
            e.result.images = [e.item.src.replace('json', 'png')];
            addSpriteSheet(e.item.id, e.result);
        }
        else if(e.item.font) {
            e.result.images = [e.item.src.replace('json', 'png')];
            var s = bitmapFonts[e.item.id] = new createjs.SpriteSheet(e.result);
            s['lineHeight'] = e.result.lineHeight;
        }
        else if(e.item.id === 'loc') {
            initLoc(e.result);
        }
        else if(/\.json$/.test(e.item.src) && e.result.images) {
            loadSpriteAnims(e);
        }
        else if(e.item.type === 'xml') {
            xmlsLookup[e.item.id] = e.result;
        }
    });
}

/** Returns the spritesheet corresponding to the animation name. */
export function getSpriteSheet(animId: string) {
    var id = spritesLookup[animId];
    if(!id) throw new Error('No spritesheet for id ' + animId);
    return spritesheets[id];
}

/** Returns a new Sprite instance at the requested animation frame. */
export function getSprite(animId: string, play = false) {
    var sprite = new createjs.Sprite(getSpriteSheet(animId));
    sprite.name = animId;
    play ? sprite.gotoAndPlay(animId) : sprite.gotoAndStop(animId);
    return sprite;
}

/** Generates a PreloadJS manifest for the given asset identifiers. */
function sheetManifest(folder: string, type: string, baseUrl: string,
                       prefix: string, ids: any[])
{
    ids = ids || [];
    return _.reduce(ids, (manifest: any[], id) => {
        ['json', 'png'].forEach((ext) => {
            var name = prefix + id;
            var src  = baseUrl + '/' + folder +  '/' + name + '.' + ext;
            if(ext !== 'json') manifest.push(src);
            else {
                var m = {id: name, src: src};
                m[type] = true;
                manifest.push(m);
            }
        });
        return manifest;
    }, []);
}

export var spriteManifest = _.partial(sheetManifest, 'sprites', 'spritesheet');
export var fontManifest   = _.partial(sheetManifest, 'fonts',   'fonts');

/** Generates a PreloadJS manifest for the given asset type and identifiers. */
export function fileManifest(ext: string, folder: string, baseUrl: string,
                             prefix: string, ids: string[])
{
    if(ext == 'preferedSoundFormat')
        ext = preferedSoundFormat;

    ids = ids || [];

    return ids.map((id) => {
        var extension = ext;
        var parts = id.split('.');
        if(parts.length !== 1) {
            id = parts[0];
            extension = parts[1];
        }
        var name = prefix + id;
        return {
            id: name,
            src: baseUrl + '/' + folder + '/' + name + '.' + extension
        };
    });
}

/** Generates a PreloadJS manifest for the given bitmap image identifiers. */
export var bitmapManifest = _.partial(fileManifest, 'png',  'bitmaps');

export var animManifest   = _.partial(fileManifest, 'json', 'anims');

/** Generates a PreloadJS manifest for the given music track identifiers. */
export var musicManifest  = _.partial(fileManifest, 'preferedSoundFormat',  'musics');

/** Generates a PreloadJS manifest for the given sound effect identifiers. */
export var soundManifest  = _.partial(fileManifest, 'preferedSoundFormat',  'sounds');

/** Generates a PreloadJS manifest for the given xml file identifiers. */
export var xmlManifest    = _.partial(fileManifest, 'xml',  'xml');

/** Generates a PreloadJS manifest for the given font file identifiers. */
export var fontManifest   = _.partial(fileManifest, 'json',  '');

/** Contains information used to generate an asset manifest. */
export interface ManifestDefinition {
    baseUrl:  string;
    //prefix:   string;
    bitmaps?: string[];
    sprites?: string[];
    anims?:   string[];
    musics?:  string[];
    sounds?:  string[];
    xmls?:    string[];
    fonts?:   string[];
}

/** Generates a PreloadJS manifest from the given definition. */
export function assetManifest(assets: ManifestDefinition) {
    var prefix  = '';/*assets.prefix disabled for now*/
    var baseUrl = assets.baseUrl;
    return _.flatten([
        bitmapManifest(baseUrl, prefix, assets.bitmaps),
        spriteManifest(baseUrl, prefix, assets.sprites),
        animManifest  (baseUrl, prefix, assets.anims),
        soundManifest (baseUrl, prefix, assets.sounds),
        musicManifest (baseUrl, prefix, assets.musics),
        xmlManifest   (baseUrl, prefix, assets.xmls),
        fontManifest  (baseUrl, prefix, assets.fonts)
    ]);
}

var isLoading = false;

/** Preloads all assets in the manifest and notifies the callback when done. */
export function preloadAssets(manifest, callback) {
    if(isLoading) throw new Error('Loading already in progress.');
    
    isLoading = true;
    
    if(!loc)
        manifest.push({id:  'loc',
                       //src: '/common/localization/' + document['frima']['locale'] + '.json'});
                       src: '../assets/common/localization/' + document['frima']['locale'] + '.json'});
    
    var done = () => {
        isLoading = false;
        callback();
    };

    loadQueue.loadManifest(manifest);
    loadQueue.on('complete', () => {
        done();
    }, null, true);
}

/** Returns the data for a preloaded asset. */
export function getAsset(name: string) {
    return loadQueue.getResult(name);
}

// UI
// -----------------------------------------------------------------------------
export class CachedText extends createjs.Text {
    private mVisual:        createjs.Container;
    private mTrueWidth:     number;
    private mTrueHeight:    number;
    
    constructor(text: string, font: string, color: string) {
        super(text, font, color);

        this.mVisual                = new createjs.Container();
        this.mVisual.mouseEnabled   = false;
        this.mouseEnabled           = false;
    }

    public createCache(widthBuffer: number = 4, heightBuffer: number = 4, yOffset:number = -1, xAnchor: number = 0, yAnchor: number = 0, debugMode: boolean = false) {
        
        if(this.mVisual.cacheID != 0) {
            this.mVisual.uncache();
        }

        var bounds: createjs.Rectangle = this.getBounds();
        if(bounds != null) {

            xAnchor         = util.clamp(xAnchor, 0, 1);
            yAnchor         = util.clamp(yAnchor, 0, 1);
            this.visible    = true;
            this.x          = 0;
            this.y          = 0;
            this.mVisual.addChild(this);

            bounds.width        = Math.ceil(bounds.width    + widthBuffer);
            bounds.height       = Math.ceil(bounds.height   + heightBuffer);
            bounds.x            = Math.ceil(bounds.x        - (widthBuffer * 0.5));
            bounds.y            = Math.ceil(bounds.y        + yOffset);
            this.mTrueWidth     = bounds.width;
            this.mTrueHeight    = bounds.height;

            if(debugMode) { this.debug(bounds, "#FF00FF", 0.33); }

            this.mVisual.cache(bounds.x, bounds.y, bounds.width, bounds.height);
            this.mVisual.regX = Math.round(bounds.width  * xAnchor);
            this.mVisual.regY = Math.round(bounds.height * yAnchor);
            this.mVisual.removeAllChildren();
            this.visible = false;
        }
    }

    private debug(bounds: createjs.Rectangle, color: string, alpha: number) {
        var debug: createjs.Shape = new createjs.Shape(new createjs.Graphics().
            beginFill(color).drawRect(bounds.x, bounds.y, bounds.width, bounds.height).endFill());
        debug.alpha = alpha;
        this.mVisual.addChild(debug);
    }

    public get visual():createjs.Container  { return this.mVisual; }
    public get trueWidth():number           { return this.mTrueWidth; }
    public get trueHeight():number          { return this.mTrueHeight; }
}

export function bitmapText(text: string, font: string = defaultBitmapFont) {
    var sheet = bitmapFonts[font];
    if(!sheet) throw new Error('No such bitmap font: ' + font);
    
    var t = new createjs.BitmapText(text, sheet);
    t.lineHeight = sheet['lineHeight'];
    
    var b = t.getBounds();
    t.cache(b.x, b.y, b.width, b.height);
    
    return t;
}

/** A widget is an EaselJS container used to compose display objects. */
export class Scale9 extends createjs.Container {
    scale9: any = [];
    cornerBounds: any;

    constructor(border: createjs.DisplayObject, corner: createjs.DisplayObject,
                height = 0, width = 0, color = "#000000")
    {
        super();

        var borderBounds = border.getBounds();
        this.cornerBounds = corner.getBounds();
        var middle = new createjs.Shape();
        middle.graphics.beginFill(color).drawRect(0, 0, 1, 1);
        var middleBounds = middle.getBounds();

        // Top row.
        this.scale9[0] = this.addChild(corner.clone());
        this.scale9[1] = this.addChild(border.clone());
        this.scale9[1].x = this.cornerBounds.width;
        this.scale9[1].scaleX = width;
        this.scale9[2] = this.addChild(corner.clone());
        this.scale9[2].scaleX = -1;
        this.scale9[2].x = (this.cornerBounds.width*2) + width;

        // Middle row.
        this.scale9[3] = this.addChild(border.clone());
        this.scale9[3].rotation = 90;
        this.scale9[3].scaleX = height;
        this.scale9[3].scaleY = -1;
        this.scale9[3].y = this.cornerBounds.height;
        this.scale9[4] = this.addChild(middle);
        this.scale9[4].scaleX = width;
        this.scale9[4].scaleY = height;
        this.scale9[4].x = this.cornerBounds.width;
        this.scale9[4].y = this.cornerBounds.height;
        this.scale9[5] = this.addChild(border.clone());
        this.scale9[5].rotation = 90;
        this.scale9[5].scaleX = height;
        this.scale9[5].x = (2*this.cornerBounds.width) + width;
        this.scale9[5].y = this.cornerBounds.height;

        // Bottom row.
        this.scale9[6] = this.addChild(corner.clone());
        this.scale9[6].scaleY = -1;
        this.scale9[6].y = (this.cornerBounds.height*2) + height;
        this.scale9[7] = this.addChild(border.clone());
        this.scale9[7].x = this.cornerBounds.width;
        this.scale9[7].y = (this.cornerBounds.height*2) + height;
        this.scale9[7].scaleX = width;
        this.scale9[7].scaleY = -1;
        this.scale9[8] = this.addChild(corner.clone());
        this.scale9[8].scaleX = -1;
        this.scale9[8].scaleY = -1;
        this.scale9[8].x = (this.cornerBounds.width*2) + width;
        this.scale9[8].y = (this.cornerBounds.height*2) + height;

        return this;
    }

    scale(properties: any, duration: number, ease: any) {
        if(_.has(properties, 'x')) {
            createjs.Tween.get(this.scale9[1]).to({'scaleX': properties.x}, duration, ease);
            createjs.Tween.get(this.scale9[2]).to({'x': properties.x + (this.cornerBounds.width*2)}, duration, ease);
            createjs.Tween.get(this.scale9[4]).to({'scaleX': properties.x}, duration, ease);
            createjs.Tween.get(this.scale9[7]).to({'scaleX': properties.x}, duration, ease);
            createjs.Tween.get(this.scale9[8]).to({'x': properties.x + (this.cornerBounds.width*2)}, duration, ease);
        }
        if(_.has(properties, 'y')) {
            createjs.Tween.get(this.scale9[3]).to({'scaleX': properties.y}, duration, ease);
            createjs.Tween.get(this.scale9[4]).to({'scaleY': properties.y}, duration, ease);
            createjs.Tween.get(this.scale9[5]).to({'scaleX': properties.y, 'x': properties.x + (this.cornerBounds.width*2)}, duration, ease);
            createjs.Tween.get(this.scale9[6]).to({'y': properties.y + (this.cornerBounds.height*2)}, duration, ease);
            createjs.Tween.get(this.scale9[7]).to({'y': properties.y + (this.cornerBounds.height*2)}, duration, ease);
            createjs.Tween.get(this.scale9[8]).to({'y': properties.y + (this.cornerBounds.height*2)}, duration, ease);
        }
    }
}

/** A widget is an EaselJS container used to compose display objects. */
export class Widget extends createjs.Container {
    constructor(parent: createjs.Container = null,
                backgroundId: string = null,
                x = 0, y = 0)
    {
        super();
        
        this.x = x;
        this.y = y;
        
        if(backgroundId) {
            this.name = backgroundId;
            this.addChild(getSprite(backgroundId));
        }
        
        if(parent) parent.addChild(this);
    }
    
    addAlignedText(text: string, align: string, y: number, font?: string,
                   color?: string, width?: number, outline: number = 0)
    {
        var t = new createjs.Text(text, font || '18px Arial', color || '#FFF');
        t.textBaseline = "alphabetic";
        t.mouseEnabled = false;
        t.textAlign = align;
        t.outline = outline;

        return this.addObject(t, (width || this.getBounds().width) / 2, y);
    }
    
    addText(text: string, x: number, y: number, font?: string, color?: string, dropShadow = true, outline = 0)
    {
        var t = new createjs.Text(text, font || '18px Arial', color || '#FFF');
        t.textBaseline = "alphabetic";
        t.outline = outline;
        t.mouseEnabled = false;
        
        return this.addObject(t, x, y);
    }
    
    addBitmapText(text: string, x: number, y: number, font?: string) {
        return this.addObject(bitmapText(text, font), x, y);
    }
    
    addObject<T extends createjs.DisplayObject>(obj: T, x = 0, y = 0,
                                                scaleX?: number, scaleY?: number)
    {
        obj.x = x;
        obj.y = y;
        
        if(scaleX) obj.scaleX = scaleX;
        if(scaleY) obj.scaleY = scaleY;
        
        this.addChild(obj);
        
        return obj;
    }
}

/** Returns the array of frame numbers for the given animation name. */
export function getAnimationFrames(animId: string): number[] {
    return getSpriteSheet(animId)['_data'][animId].frames;
}

export function getTrueBounds(animId:string): any {
    
    var spriteSheet: any            = getSpriteSheet(animId);
    console.dir(spriteSheet);
    console.log(spriteSheet["_frames"][10].rect.width);
    console.log(spriteSheet["_frames"][10].rect.height);

    var rect: createjs.Rectangle    = spriteSheet["_frames"][spriteSheet['_data'][animId].frames[0]];
    rect.x = 0;
    rect.y = 0;

    return rect;
}

/** Extracts a sprite from a spritesheet to a bitmap. */
export function getAnimationBitmap(animId: string) {
    return createjs.SpriteSheetUtils.extractFrame(getSpriteSheet(animId), animId);
}

export class EnableEvent extends createjs.Event {
    constructor(public enabled: boolean) {
        super('enable', false, false);
    }
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

/** A button is a specialized widget handling mouse events. */
export class Button extends Widget {
    private helper: createjs.ButtonHelper;
    private frames: any[];
    private sprite: createjs.Sprite;

    private mText: createjs.Text = null;
    private mTextOutline: createjs.Text = null;
    private mButtonTextInfo: ButtonTextInfo = null;

    private index     = 0;
    private hoverY    = 0;
    private downY     = 0;
    private isOut     = true;
    private isDown    = false;
    private isEnabled = true;
    
    private dispatchImpl: any;

    private mIgnoreAlpha    : boolean;
    private mHitzoneOffset  : createjs.Point;

    constructor(parent: createjs.Container, animId: string, x = 0, y = 0, buttonTextInfo: ButtonTextInfo = null, 
                ignoreAlpha: boolean = true, hitzoneOffset: createjs.Point = null) {
        super(parent, animId, x, y);
        
        var self = this;
        self.frames = <any[]> getAnimationFrames(animId);
        self.sprite = <createjs.Sprite> self.getChildAt(0);
        self.helper = new createjs.ButtonHelper(self.sprite,
                                                self.frames[0],
                                                self.frames[3] || self.frames[2],
                                                self.frames[1]);
        self.dispatchImpl = self['_dispatchEvent'];
        
        self.mButtonTextInfo = buttonTextInfo;

        self.mIgnoreAlpha = ignoreAlpha;
        if(!self.mIgnoreAlpha){
            this.mHitzoneOffset = hitzoneOffset;
            self.drawHitArea(); 
        }

        if (self.mButtonTextInfo != null) {

            self.mText = util.baselineText(buttonTextInfo.textString, { "color": buttonTextInfo.color, "font": buttonTextInfo.font });
            self.mText.mouseEnabled = false;
            self.mText.textAlign = "center";
            self.mText.filters = buttonTextInfo.filters;
            self.mText.x = buttonTextInfo.positionUp.x;
            self.mText.y = buttonTextInfo.positionUp.y;
            if(_.has(buttonTextInfo, "lineWidth")) {
                self.mText.lineWidth = (<any>buttonTextInfo).lineWidth;
            }
            
            if (buttonTextInfo.outlineInfo != null) {
                self.mTextOutline = util.baselineText(buttonTextInfo.textString, { "color": buttonTextInfo.outlineInfo.color, "font": buttonTextInfo.outlineInfo.font });
                self.mTextOutline.mouseEnabled = false;
                self.mTextOutline.textAlign = "center";
                self.mTextOutline.outline = buttonTextInfo.outlineInfo.outline;
                self.mTextOutline.x = self.mText.x;
                self.mTextOutline.y = self.mText.y;
                if(_.has(buttonTextInfo, "lineWidth")) {
                    self.mTextOutline.lineWidth = (<any>buttonTextInfo).lineWidth;
                }
                self.addChild(self.mTextOutline);
            }

            self.addChild(self.mText);
        }
        
        self.addEventListener('mouseover', () => {
            if(!self.isEnabled || !self.isOut) return;
            self.isOut = false;
            
            if (!self.isDown) {
                self.doOffset(self.hoverY);

                if (self.mButtonTextInfo != null) {
                    self.doTextOffset(self.mButtonTextInfo.positionOver);
                }
            } else {
                self.doOffset(self.hoverY * -1);
                self.doOffset(self.downY);

                if (self.mButtonTextInfo != null) {
                    self.doTextOffset(self.mButtonTextInfo.positionDown);
                }
            }            
        });
        self.addEventListener('mouseout', () => {
            if(!self.isEnabled || self.isOut) return;
            self.isOut = true;
            
            if (!self.isDown) {
                self.doOffset(self.hoverY * -1);

                if (self.mButtonTextInfo != null) {
                    self.doTextOffset(self.mButtonTextInfo.positionOut);
                }
            } else {
                self.doOffset(self.downY * -1);
                self.doOffset(self.hoverY);
                //self.isDown = false;
                
                if (self.mButtonTextInfo != null) {
                    self.doTextOffset(self.mButtonTextInfo.positionOver);
                }
            }
        });
        self.addEventListener('mousedown', () => {
            if(!self.isEnabled || self.isDown) return;
            self.isDown = true;
            
            self.doOffset(self.hoverY * -1);
            self.doOffset(self.downY);
            
            if (self.mButtonTextInfo != null) {
                self.doTextOffset(self.mButtonTextInfo.positionDown);
            }
        });
        self.addEventListener('pressup', () => {
            if(!self.isEnabled || !self.isDown) return;
            self.isDown = false;
            
            if (self.isOut) {
                self.doOffset(self.hoverY * -1);
                
                if (self.mButtonTextInfo != null) {
                    self.doTextOffset(self.mButtonTextInfo.positionOut);
                }
            } else {
                self.doOffset(self.hoverY);
                
                if (self.mButtonTextInfo != null) {
                    self.doTextOffset(self.mButtonTextInfo.positionOut);
                }
            }
            self.doOffset(self.downY * -1);
        });
    }

    private doTextOffset(aPos: createjs.Point): void {
        var self = this;

        self.mText.x = aPos.x;
        self.mText.y = aPos.y;

        if (self.mTextOutline != null) {
            self.mTextOutline.x = self.mText.x;
            self.mTextOutline.y = self.mText.y;
        }
    }
    
    private doOffset(offset) {

        if(offset === 0) return;
        
        var index = this.index;
        _.forEach(this.children, (o: createjs.DisplayObject, i) => {
            if(i !== index) o.y += offset;
        });
    }

    private drawHitArea() {
        var spriteBounds: createjs.Rectangle = this.sprite.getBounds();
        
        if(this.mHitzoneOffset) {
            spriteBounds.x      += this.mHitzoneOffset.x * -0.5;
            spriteBounds.y      += this.mHitzoneOffset.y * -0.5;
            spriteBounds.width  += this.mHitzoneOffset.x;
            spriteBounds.height += this.mHitzoneOffset.y;
        }

        this.sprite.hitArea = new createjs.Shape(new createjs.Graphics().
            beginFill("#FF00FF").drawRect(spriteBounds.x, spriteBounds.y, spriteBounds.width, spriteBounds.height).endFill());
        this.sprite.hitArea.cache(spriteBounds.x, spriteBounds.y, spriteBounds.width, spriteBounds.height);
    }
    
    set bgIndex(i: number)      { this.index  = i; }
    set hoverOffsetY(y: number) { this.hoverY = y; }
    set downOffsetY(y: number)  { this.downY  = y; }
    
    get enabled() { return this.isEnabled; }
    set enabled(v: boolean) {
        var f;
        if(!v) {
            if(!this.isOut) this.doOffset(this.hoverY * -1);

            this.isOut  = true;
            this.isDown = false;
            
            var self = this;
            self.cursor = 'default';
            self['_dispatchEvent'] = <any> (e: Event, phase) => {
                if(e.type !== 'click') self.dispatchImpl(e, phase);
            };
            f = self.frames[3] ? 2 : 1;
        }
        else {
            this.cursor = 'pointer';
            this['_dispatchEvent'] = this.dispatchImpl;
            f = 0;
        }
        this.helper.setEnabled(this.isEnabled = v);
        this.sprite.gotoAndStop(this.frames[f]);
        this.dispatchEvent(new EnableEvent(v));

        if(!this.mIgnoreAlpha){ this.drawHitArea(); }
    }

    //5th state where the button become disabled and set itself in a highlighted state
    selected() {
        this.enabled = false;
        this.sprite.gotoAndStop(this.frames[4]);
        
        if(!this.mIgnoreAlpha){ this.drawHitArea(); }
    }
}

var POPUP_ANIM_TIME     = 333;
var POPUP_INIT_SCALE    = 0.50;
var POPUP_INIT_ALPHA    = 0.25;
var POPUP_ALPHA         = 0.95;
var POPUP_BLOCKER_ALPHA = 0.75;

/** The currently displayed popup. */
var currentPopup: createjs.DisplayObject;

interface PopupInfo {
    widget: createjs.Container;
    animate: boolean;
    callback: any;
    closeTimer: number;
}
var popupQueue: Array<PopupInfo> = [];

export function getVAlignPosition(text:createjs.Text): number {
    return Math.floor(text.getMeasuredHeight() / 2);
}

export function isCurrentPopupOpen(): boolean {
    return (currentPopup != null);
}

export function isPopupQueueEmpty(): boolean {
    return (popupQueue.length <= 0);
}

/** Displays a popup over the current display objects. */
export function popup(widget: createjs.Container, animate = true, callback = _.noop, closeTimer = 0)
{
    if (currentPopup) {
        popupQueue.push({ widget: widget, animate: animate, callback: callback, closeTimer: closeTimer });
        return;
    }
    
    var bounds   = widget.getBounds();
    var blocker  = new createjs.Shape();
    blocker.name = 'popup-blocker';
    
    blocker.graphics
        .beginFill('#000')
        .drawRect(0, 0, stage.canvas.width, stage.canvas.height);
    
    createjs.Tween.get(blocker)
        .to({alpha: POPUP_BLOCKER_ALPHA},
            POPUP_ANIM_TIME, createjs.Ease.sineOut);
    
    var out = (callback = _.noop) => {
        createjs.Tween.get(blocker)
            .to({alpha: 0},
                POPUP_ANIM_TIME, createjs.Ease.sineIn)
            .call(callback);
    };
    
    var done = (close = true) => {
        stage.removeChild(blocker);
        stage.removeChild(widget);
        
        currentPopup = null;

        if (popupQueue.length > 0) {
            var popupInfo: PopupInfo = popupQueue.shift();
            popup(popupInfo.widget, popupInfo.animate, popupInfo.callback, popupInfo.closeTimer);
        }
    };
    
    var close;
    
    if(!animate) {
        close = () => {
            callback();
            out(done);
        }
    }
    else {
        widget.regX = bounds.width  / 2;
        widget.regY = bounds.height / 2;
        widget.x    = stage.canvas.width  / 2;
        widget.y    = stage.canvas.height / 2;
        
        widget.scaleX = widget.scaleY = POPUP_INIT_SCALE;
        widget.alpha  = blocker.alpha = POPUP_INIT_ALPHA;

        //need a small delay
        playSound('popup-in', 100);


        createjs.Tween.get(widget)
            .to({scaleX: 1,
                 scaleY: 1,
                 alpha:  POPUP_ALPHA},
                POPUP_ANIM_TIME, createjs.Ease.backOut);



        close = () => {
            callback();
            out();
            playSound('general-click');
            playSound('popup-out');
            createjs.Tween.get(widget)
                .to({scaleX: POPUP_INIT_SCALE,
                     scaleY: POPUP_INIT_SCALE,
                     alpha:  POPUP_INIT_ALPHA},
                    POPUP_ANIM_TIME, createjs.Ease.backIn)
                .call(done);
        };


    }
    
    widget.on('click', _.noop);
    blocker.on('click', close);
    
    var closeBtn = widget.getChildByName('close');
    if (closeBtn) closeBtn.on('click', close);

    if (closeTimer != 0) {
        setTimeout(close, closeTimer);
    }

    widget.addEventListener("complete", () => {
        close();
    });


    
    stage.addChild(blocker);
    stage.addChild(widget);
    
    currentPopup = widget;
}

// Localization
// -----------------------------------------------------------------------------

/** A mapping from localization keys to localized strings. */
var loc: Object;

/** Initializes the localization data. Called once when the data is received. */
function initLoc(data: Object) {
    loc = data;
}

/** Returns the localized string corresponding to the given key. */
export function l(key: string): string {
    return loc[key] || '#' + key + '#';
}

window['l'] = l;


// Debug
// -----------------------------------------------------------------------------

/** The display object containing the debugging text. */
var fpsLabel:  createjs.Text;

/** The number of draw calls on the canvas since the last frame. */
var drawCalls: number = 0;

/** Reduce function for totalNumChildren. */
function countChildren(total: number, object: createjs.DisplayObject) {
    if(object.hasOwnProperty('children'))
        return total + totalNumChildren(<createjs.Container> object);
    else
        return total;
}

/** Recursively counts the children of an EaselJS container. */
export function totalNumChildren(object: createjs.Container) {
    return object.getNumChildren() +
        _.reduce(object.children, countChildren, 0);
}

/** Generates the debugging text for the current frame. */
function updateFpsCounter() {
    if(fpsLabel) {
        fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS()) + ' FPS - '
                      + totalNumChildren(stage) + ' objects - '
                      + drawCalls + ' draw calls';
    }
}

/** A mapping of original canvas context drawing functions. */
var canvasFunctions = {};

/** An array of canvas context drawing function names. */
var canvasFunctionNames = [
    'drawImage',
    'drawImageFromRect',
    'fill',
    'fillRect',
    'fillText',
    'stroke',
    'strokeRect',
    'strokeText'
];

/** Monkey-patches the canvas context to count all draw calls. */
function initDebugCanvas() {
    _.forEach(canvasFunctionNames, function(name) {
        var fn = CanvasRenderingContext2D.prototype[name];
        canvasFunctions[name] = fn;
        CanvasRenderingContext2D.prototype[name] = debugCanvas(fn);
    });
}

/** Reverts the monkey-patch on the canvas context. */
function destroyDebugCanvas() {
    _.forEach(canvasFunctionNames, function(name) {
        var fn = canvasFunctions[name];
        if(fn) {
            CanvasRenderingContext2D.prototype[name] = fn;
            delete canvasFunctions[name];
        }
    });
}

/** Counts draw calls for the current frame. */
function debugCanvas(fn) {
    return function() {
        ++drawCalls;
        fn.apply(this, arguments);
    };
}

/** Creates the debugging display. Takes effect immediately. */
function initFpsCounter() {
    if(document['frima']['debug'] && !fpsLabel) {
        initDebugCanvas();
        fpsLabel = new createjs.Text('', 'bold 14px Arial', '#FFF');
        stage.addChild(fpsLabel);
    }
    return true;
}

/** Removes the debugging display. Takes effect immediately. */
function destroyFpsCounter() {
    if(fpsLabel) {
        stage.removeChild(fpsLabel);
        fpsLabel = null;
        destroyDebugCanvas();
    }
    return false;
}

/** Toggles whether the debugging display is enabled or not. */
function toggleFpsCounter() {
    return fpsLabel ? destroyFpsCounter() : initFpsCounter();
}

/** The original EaselJS container functions. */
var ContainerProto = createjs.Container.prototype;
var _addChild = ContainerProto.addChild;
var _addChildAt = ContainerProto.addChildAt;
var _removeAllChildren = ContainerProto.removeAllChildren;
var _removeChild = ContainerProto.removeChild;
var _removeChildAt = ContainerProto.removeChildAt;

/** Monkey-patch the EaselJS container functions to intercept changes. */
ContainerProto.addChild = <any> function(child) {
    return _addChild.apply(this, arguments);
};
ContainerProto.addChildAt = <any> function(child) {
    return _addChildAt.apply(this, arguments);
};
ContainerProto.removeAllChildren = <any> function() {
    return _removeAllChildren.apply(this, arguments);
};
ContainerProto.removeChild = <any> function(child) {
    return _removeChild.apply(this, arguments);
};
ContainerProto.removeChildAt = <any> function(index) {
    return _removeChildAt.apply(this, arguments);
};

registerGlobals({totalNumChildren:  totalNumChildren,
                 toggleFpsCounter:  toggleFpsCounter,
                 initFpsCounter:    initFpsCounter,
                 destroyFpsCounter: destroyFpsCounter});


// Game Update
// -----------------------------------------------------------------------------

/** Initializes the EaselJS ticker. Called once when the game boots. */
function initTick() {
    createjs.Ticker.setFPS(document['frima']['framerate']);
    createjs.Ticker.on('tick', tick);
}
//function destroyTick() { createjs.Ticker.off('tick', tick); }

/** Updates the canvas for the current frame. */
function tick(evt: createjs.TickerEvent) {
    updateFpsCounter();
    
    if(screen){ screen.update(evt); }

    drawCalls = 0;
    stage.update(evt);
}

/** Toggles whether canvas rendering is enabled or disabled. */
function toggleRender() {
    document['frima']['enablerender'] = !document['frima']['enablerender'];
    // TODO
    return document['frima']['enablerender'];
}

registerGlobal('toggleRender', toggleRender);

// Game Bootstrap
// -----------------------------------------------------------------------------

/** Starts the core game functionality. Called from the main bootstrap. */
export function start() {
    initLoader();
    initStage();
    initSound();
    
    if(document['frima']['enablefps'])    initFpsCounter();
    if(document['frima']['enablerender']) initTick();
}
