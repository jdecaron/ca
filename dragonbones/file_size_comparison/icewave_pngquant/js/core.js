'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'util'], function(require, exports, util) {
    function isDebug() {
        return document['frima']['debug'];
    }
    exports.isDebug = isDebug;

    function getLocale() {
        return document['frima']['locale'];
    }
    exports.getLocale = getLocale;

    function getSoundVolume() {
        return document['frima']['enablesounds'] ? document['frima']['soundvolume'] : 0;
    }
    exports.getSoundVolume = getSoundVolume;

    function getMusicVolume() {
        return document['frima']['enablesounds'];
    }
    exports.getMusicVolume = getMusicVolume;

    var globals;
    window['test'] = globals = {};

    function registerGlobal(name, command) {
        globals[name] = command;
    }
    exports.registerGlobal = registerGlobal;

    function unregisterGlobal(name) {
        delete globals[name];
    }
    exports.unregisterGlobal = unregisterGlobal;

    function registerGlobals(globals) {
        _.forOwn(globals, function (val, key) {
            return exports.registerGlobal(key, val);
        });
    }
    exports.registerGlobals = registerGlobals;

    function unregisterGlobals(globals) {
        _.forEach(globals, exports.unregisterGlobal);
    }
    exports.unregisterGlobals = unregisterGlobals;

    var stage;

    var loading;

    var screen;

    function initStage() {
        stage = new createjs.Stage('test');

        stage.enableMouseOver();
        stage.mouseMoveOutside = true;
    }

    function getStage() {
        return stage;
    }
    exports.getStage = getStage;

    function getScreen() {
        return screen;
    }
    exports.getScreen = getScreen;

    function showAnim(animName, x, y) {
        if (typeof x === "undefined") { x = 300; }
        if (typeof y === "undefined") { y = 300; }
        screen.removeChild(screen['tempAnim']);
        for (var i = 0; i < 20; i++) {
            var anim = exports.getSpriteAnim(animName);
            anim.x = x + (i * 10);
            anim.y = y;
            screen['tempAnim'] = screen.addChild(anim);
        }
    }
    exports.showAnim = showAnim;

    exports.registerGlobals({
        getStage: exports.getStage,
        getScreen: exports.getScreen,
        showAnim: exports.showAnim });

    

    var LayeredContainer = (function (_super) {
        __extends(LayeredContainer, _super);
        function LayeredContainer(layerNames) {
            _super.call(this);
            this.layers = {};
            this.setLayers(layerNames);
        }
        LayeredContainer.prototype.setLayers = function (layerNames) {
            var self = this;
            self.removeAllChildren();
            _.forEach(layerNames || [], function (name) {
                var layer = new createjs.Container();
                layer.name = name;
                self.layers[name] = layer;
                self.addChild(layer);
            });
        };

        LayeredContainer.prototype.getLayer = function (name) {
            return this.layers['name'];
        };
        return LayeredContainer;
    })(createjs.Container);
    exports.LayeredContainer = LayeredContainer;

    var Screen = (function (_super) {
        __extends(Screen, _super);
        function Screen(layerNames) {
            _super.call(this, layerNames);
            this.cleanupQueue = [];
        }
        Screen.prototype.preload = function () {
        };

        Screen.prototype.init = function () {
            stage.removeChild(loading);
            stage.addChildAt(this, 0);
            screen = this;
        };

        Screen.prototype.dispose = function () {
            stage.removeChild(this);
            this.cleanupQueue.forEach(function (f) {
                return f();
            });
            screen = null;
        };

        Screen.prototype.auto = function (f) {
            this.cleanupQueue.push(!f.dispose ? f : function () {
                return f.dispose();
            });
            return f;
        };

        Screen.prototype.interval = function (time, fn) {
            var x = setInterval(fn, time);
            this.auto(function () {
                return clearInterval(x);
            });
            return x;
        };

        Screen.prototype.timeout = function (time, fn) {
            var x = setTimeout(fn, time);
            this.auto(function () {
                return clearTimeout(x);
            });
            return x;
        };

        Screen.prototype.update = function (evt) {
        };

        Screen.prototype.setBackgroundBitmap = function (name, x, y) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            var b = new createjs.Bitmap(exports.getAsset(name));
            b.name = 'screen-background';
            b.x = x;
            b.y = y;
            this.addChild(b);
        };

        Screen.prototype.setBackgroundSprite = function (name) {
            var s = exports.getSprite(name);
            s.name = 'screen-background';
            this.addChild(s);
        };
        return Screen;
    })(LayeredContainer);
    exports.Screen = Screen;

    var LoadingScreen = (function (_super) {
        __extends(LoadingScreen, _super);
        function LoadingScreen(splashPath) {
            _super.call(this);
            var c = exports.getStage().canvas;

            if (splashPath) {
                var bitmap = new createjs.Bitmap(splashPath);
                this.addChild(bitmap);
            } else {
                var t = new createjs.Text('Loading', '72px Arial', '#FFF');
                var b = t.getBounds();
                t.x = (c.width / 2) - (b.width / 2);
                t.y = (c.height / 2) - (b.height / 2);
                this.addChild(t);
            }

            var loader = exports.getSprite('loader');
            var b = loader.getBounds();
            loader.regX = b.width / 2;
            loader.regY = b.height / 2;
            loader.x = c.width - loader.regX - 20;
            loader.y = c.height - loader.regY - 20;
            loader.on('tick', function () {
                return loader.rotation += 5;
            });
            this.addChild(loader);

            var coin = exports.getSprite('loader-splashcoin', true);
            var b = coin.getBounds();
            coin.x = c.width - b.width - 28;
            coin.y = c.height - b.height - 28;
            this.addChild(coin);

            this.progress = new createjs.Shape();
            this.addChild(this.progress);
        }
        LoadingScreen.prototype.setProgress = function (p) {
        };
        return LoadingScreen;
    })(createjs.Container);

    var preferedSoundFormat = 'm4a';

    function initSound() {
        createjs.Sound.registerPlugins([
            createjs.WebAudioPlugin,
            createjs.HTMLAudioPlugin]);

        var caps = createjs.Sound.getCapabilities();
        var formats = _.filter(createjs.Sound.SUPPORTED_EXTENSIONS, function (k) {
            return caps[k];
        });

        console.log('Sound Capabilities: ' + (caps.panning ? 'Panning ' : '') + (caps.volume ? 'Volume ' : '') + formats.join(', '));

        if (formats.indexOf('ogg') >= 0)
            preferedSoundFormat = 'ogg';
        else if (formats.indexOf('m4a') >= 0)
            preferedSoundFormat = 'm4a';
        else
            console.log('unsupported sound format');
    }

    function initCamera(cameraName, scene, root) {
        var camera = exports.getSpriteAnim(cameraName);
        var container = new createjs.Container();
        container.visible = false;
        container.addChild(camera);
        root.addChild(container);
        var ratio = stage.canvas.width / camera.children[0].getBounds().width;
        var ticker = function () {
            container.scaleX = container.scaleY = ratio / camera.children[0].scaleX;
            scene.scaleX = scene.scaleY = container.scaleX;
            var point = camera.children[0].localToGlobal(0, 0);
            scene.x = -point.x;
            scene.y = -point.y;
        };
        createjs.Ticker.on('tick', ticker);
        return camera;
    }
    exports.initCamera = initCamera;

    function playBack(shots, shot, manifest, container, camera) {
        var shot = shot;
        var id = function (name) {
            var split = name.split('_');
            return parseInt(split[split.length - 2]);
        };
        var playNextShot = function (e) {
            var scope = this;
            this.stop();
            var nextShot = shots[id(e.name + '_' + document['frima']['definition']) + 1];
            if (nextShot == undefined && camera) {
                camera.paused = true;
            } else {
                if (id(nextShot.name) + 1 < shots.length) {
                    preload(id(nextShot.name) + 1, true);
                }
                var callback = function (eb) {
                    var toAdd = shots[id(e.name + '_' + document['frima']['definition']) + 1].name;
                    if (eb.parameters.name == toAdd) {
                        document.removeEventListener('spriteanim', callback);
                        var animation = shots[id(e.name + '_') + 1].animation;
                        animation.on('animationend', playNextShot);
                        animation.alpha = 1;
                        animation.paused = false;
                        setTimeout(function () {
                            container.removeChild(scope);
                        }, 500);
                        if (camera) {
                            camera.paused = false;
                            util.event('loading', { show: false });
                        }
                    }
                };
                if (shots[id(nextShot.name)].generated) {
                    callback({ 'parameters': { 'name': nextShot.name } });
                } else if (camera) {
                    camera.paused = true;
                    document.addEventListener('spriteanim', callback);
                    util.event('loading', { show: true });
                }
            }
        };
        var preload = function (toPreload, resume) {
            var loader = new createjs.LoadQueue();
            loader.loadFile(manifest.baseUrl + '/anims/' + shots[toPreload].name + '.json');
            loader.on('fileload', function (e) {
                var images = _.clone(e.result.images);
                _.forEach(e.result.images, function (imageURI) {
                    var image = document.createElement("img");
                    image.src = '../assets/animations/buy/anims/' + imageURI;
                    image.onload = function () {
                        setTimeout(function () {
                            var index = _.indexOf(e.result.images, imageURI);
                            e.result.images[_.indexOf(e.result.images, imageURI)] = image;
                            _.pull(images, imageURI);
                            if (images.length == 0) {
                                loadSpriteAnims(e);
                            }
                        }, 500);
                    };
                });
            });
        };
        var plan = shots[id(shot)].animation;
        plan.paused = false;
        plan.alpha = 1;
        if (shots.length > 1) {
            preload(id(shot) + 1, false);
            plan.on('animationend', playNextShot);
        }
    }
    exports.playBack = playBack;

    var music;

    var sounds = {};

    var soundInstanceId = -1;

    var maxSoundInstanceId = 10000;

    function playMusic(name, useCrossfade) {
        if (typeof useCrossfade === "undefined") { useCrossfade = true; }
        var music = createjs.Sound.play(name, createjs.Sound.INTERRUPT_NONE, 0, 0, -1, exports.getMusicVolume());
    }
    exports.playMusic = playMusic;

    function stopMusic() {
        if (music) {
            music.stop();
            music = null;
        }
    }
    exports.stopMusic = stopMusic;

    function playSound(name, delay, offset, loop) {
        if (typeof delay === "undefined") { delay = 0; }
        if (typeof offset === "undefined") { offset = 0; }
        if (typeof loop === "undefined") { loop = 0; }
        var id = name + '-' + ++soundInstanceId;
        var s = createjs.Sound.play(name, createjs.Sound.INTERRUPT_ANY, delay, offset, loop, exports.getSoundVolume());

        if (soundInstanceId >= maxSoundInstanceId)
            soundInstanceId = -1;

        sounds[id] = s;

        var listener = function () {
            delete sounds[id];
            s.removeEventListener('complete', listener);
        };
        s.addEventListener('complete', listener);

        return s;
    }
    exports.playSound = playSound;

    function isSoundPlaying(name) {
        var isPlaying = false;

        var soundsList = _.keys(sounds);
        var length = soundsList.length;

        for (var i = 0; i < length; ++i) {
            if (_.contains(soundsList[i], name)) {
                isPlaying = true;
                break;
            }
        }
        return isPlaying;
    }
    exports.isSoundPlaying = isSoundPlaying;

    function stopAllSounds() {
        createjs.Sound.stop();
    }
    exports.stopAllSounds = stopAllSounds;

    function toggleSounds() {
        document['frima']['enablesounds'] = !document['frima']['enablesounds'];
        setMusicVolume(exports.getMusicVolume(), false);
        setSoundVolume(exports.getSoundVolume(), false);
        return document['frima']['enablesounds'];
    }

    function setMusicVolume(volume, set) {
        if (typeof set === "undefined") { set = true; }
        if (volume !== document['frima']['musicvolume'] || !set) {
            if (set)
                document['frima']['musicvolume'] = volume;
            if (music)
                music.setVolume(volume);
        }
    }

    function setSoundVolume(volume, set) {
        if (typeof set === "undefined") { set = true; }
        if (volume !== document['frima']['soundvolume'] || !set) {
            if (set)
                document['frima']['soundvolume'] = volume;

            _.values(sounds).forEach(function (s) {
                return s.setVolume(volume);
            });
        }
    }

    exports.registerGlobals({
        playSound: exports.playSound,
        toggleSounds: toggleSounds,
        setMusicVolume: setMusicVolume,
        setSoundVolume: setSoundVolume });

    var loadQueue;

    var spritesheets = {};

    var spritesLookup = {};

    var animsLookup = {};

    var xmlsLookup = {};

    var defaultBitmapFont;
    var bitmapFonts = {};

    exports.registerGlobals({
        sheets: spritesheets,
        sprites: spritesLookup,
        anims: animsLookup,
        xmls: xmlsLookup
    });

    function addSpriteSheet(id, data) {
        _.forEach(data.animations, function (v, k) {
            spritesLookup[k] = id;
            spritesheets[id] = new createjs.SpriteSheet(data);
        });
    }
    exports.addSpriteSheet = addSpriteSheet;

    function colorFilter(rMult, gMult, bMult, aMult, rOffset, gOffset, bOffset, aOffset) {
        return new createjs.ColorFilter(rMult, gMult, bMult, aMult, rOffset, gOffset, bOffset, aOffset);
    }
    exports.colorFilter = colorFilter;

    var SpriteAnim = (function (_super) {
        __extends(SpriteAnim, _super);
        function SpriteAnim(info, paused, aCatchingFrame, aGoToFrame) {
            _super.call(this);
            this.info = info;
            this.paused = paused;
            this.time = 0;
            this.period = 0;
            this.dirty = true;
            this.frame = 0;
            this.mCatchingFrame = -1;
            this.mGoToFrame = -1;
            var self = this;
            self.period = 1000 / self.info.framerate;

            self.mCatchingFrame = aCatchingFrame;
            self.mGoToFrame = aGoToFrame;

            self.setLayerCount();

            self.on('tick', function (e) {
                if (!self.paused)
                    self.time += e['delta'];
                else if (!self.dirty)
                    return;

                self.tick();
            });

            self.tick();
        }
        SpriteAnim.prototype.tick = function () {
            var self = this;
            self.frame = Math.floor(self.time / self.period);

            if (self.frame >= self.info.numFrames) {
                self.frame = self.endAnimation() ? self.info.numFrames - 1 : self.frame % self.info.numFrames;
            }

            if (self.mCatchingFrame != -1 && self.mGoToFrame != -1) {
                if (self.frame == self.mCatchingFrame) {
                    self.frame = self.mGoToFrame;
                    self.time = self.period * self.mGoToFrame;
                }
            }

            self.children.forEach(function (sprite, i) {
                if (i >= self.info.instances.length)
                    return;

                var inst = self.info.instances[i][self.frame];
                sprite.alpha = 0;

                if (sprite.visible = !!inst && inst.alpha !== 0) {
                    if (inst.frame != null && sprite['gotoAndStop'] != undefined)
                        sprite.gotoAndStop(inst.frame);
                    sprite['m'] = inst.transform;
                    var matrix = new createjs.Matrix2D(inst.transform.a, inst.transform.b, inst.transform.c, inst.transform.d, inst.transform.tx, inst.transform.ty);
                    matrix.decompose(sprite);
                    var b = sprite.getBounds();
                    sprite.alpha = inst.alpha;
                    var hitArea = new createjs.Shape();
                }
            });
            self.dirty = false;
        };

        SpriteAnim.prototype.endAnimation = function () {
            if (this.hasEventListener('animationend')) {
                var name = this.info.name;
                var time = this.time;
                var evt = new createjs.Event('animationend', false, false);
                evt.name = this.info.name;
                this.dispatchEvent(evt);

                return this.info.name !== name || this.time !== time || this.paused;
            }
            return false;
        };

        SpriteAnim.prototype.setLayerCount = function (n) {
            if (typeof n === "undefined") { n = this.info.instances.length; }
            var self = this;
            var i = self.children.length;

            if (i < n)
                _.range(n - i).forEach(function () {
                    self.addChild(new createjs.Sprite(self.info.spritesheet));
                });
            else
                _.range(i - 1, n - 1, -1).forEach(function (i) {
                    self.children[i].visible = false;
                });
        };

        Object.defineProperty(SpriteAnim.prototype, "anim", {
            set: function (info) {
                if (info.framerate !== this.info.framerate) {
                    throw new Error('Cannot change an animation\'s framerate');
                }

                this.info = info;
                this.time = 0;
                this.dirty = true;
                this.setLayerCount();
            },
            enumerable: true,
            configurable: true
        });

        SpriteAnim.prototype.stopCatchingFrame = function () {
            this.catchingFrame = -1;
            this.goToFrame = -1;
        };

        Object.defineProperty(SpriteAnim.prototype, "catchingFrame", {
            set: function (aCatchingFrame) {
                this.mCatchingFrame = aCatchingFrame;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpriteAnim.prototype, "goToFrame", {
            set: function (aGoToFrame) {
                this.mGoToFrame = aGoToFrame;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(SpriteAnim.prototype, "currentFrame", {
            get: function () {
                return this.frame;
            },
            set: function (aNewFrame) {
                aNewFrame = (aNewFrame % 1 != 0) ? Math.round(aNewFrame) : aNewFrame;
                if (aNewFrame == this.frame) {
                    return;
                }

                this.gotoAndStop(aNewFrame);
            },
            enumerable: true,
            configurable: true
        });

        SpriteAnim.prototype.play = function () {
            this.paused = false;
        };

        SpriteAnim.prototype.gotoAndPlay = function (aFrame) {
            this.time = this.period * aFrame;
            this.paused = false;
        };

        SpriteAnim.prototype.stop = function () {
            this.time = 0;
            this.paused = true;
        };

        SpriteAnim.prototype.gotoAndStop = function (aFrame) {
            this.paused = true;
            this.time = this.period * aFrame;
            this.tick();
        };
        return SpriteAnim;
    })(createjs.Container);
    exports.SpriteAnim = SpriteAnim;

    function getSpriteAnimInfo(id) {
        var info = animsLookup[id];
        if (!info)
            throw new Error('No such anim: ' + id);
        return info;
    }
    exports.getSpriteAnimInfo = getSpriteAnimInfo;

    function getSpriteAnim(id, paused, catchingFrame, goToFrame) {
        if (typeof paused === "undefined") { paused = false; }
        if (typeof catchingFrame === "undefined") { catchingFrame = -1; }
        if (typeof goToFrame === "undefined") { goToFrame = -1; }
        return new SpriteAnim(exports.getSpriteAnimInfo(id), paused, catchingFrame, goToFrame);
    }
    exports.getSpriteAnim = getSpriteAnim;

    function addAnimAtlas(data) {
        var startAtlas = Date.now();
        var sheet = new createjs.SpriteSheet(data);
        var filters = {};

        _.forEach(data.symbols, function (v, k) {
            var m = k.match(/\-(en|fr)$/);
            if (m) {
                if (m[1] !== exports.getLocale())
                    return;

                k = k.slice(0, k.length - 3);
            }

            var isVirtual = /container/.test(k);
            var instances = v.instances.map(function (frames) {
                return frames.reduce(function (seq, f) {
                    var value = {
                        frame: f[2],
                        alpha: 1,
                        transform: { a: f[3], b: -f[4], c: f[5], d: -f[6], tx: f[7], ty: -f[8] }
                    };

                    if (_.isNumber(f[9]) && !isVirtual) {
                        var vals = f.slice(9);
                        var key = vals.join(':');

                        if (key === '1:1:1:0:0:0:0:0')
                            value.alpha = 0;
                        else if (vals[0] === 1 && vals[1] === 1 && vals[2] === 1 && vals[4] === 0 && vals[5] === 0 && vals[6] === 0 && vals[7] === 0) {
                            value.alpha = vals[3];
                        } else {
                            var info = filters[key];

                            if (!info) {
                                filters[key] = [
                                    exports.colorFilter.apply(null, vals),
                                    [f[2]]];
                            } else if (!_.contains(info[1], f[2])) {
                                info[1].push(f[2]);
                            }

                            value.frame = key + '-' + f[2];
                        }
                    }

                    _.range(f[0] - seq.length).forEach(function () {
                        return seq.push(null);
                    });
                    _.range(f[1]).forEach(function () {
                        return seq.push(value);
                    });

                    return seq;
                }, []);
            });

            animsLookup[k] = {
                name: k,
                instances: instances,
                framerate: v.framerate,
                numFrames: v.numFrames,
                spritesheet: sheet
            };
        });

        var image = new createjs.Container();
        var sprites = [];

        var generate = function () {
            var start = Date.now();

            _.forEach(filters, function (info, key) {
                var container = new createjs.Container();

                image.addChild(container);

                info[1].forEach(function (frame) {
                    var sprite = new createjs.Sprite(sheet);
                    sprite.gotoAndStop(frame);
                    sprite.filters = [info[0]];

                    var b = sprite.getBounds();
                    sprite.cache(0, 0, b.width, b.height);
                    sprite['w'] = b.width + 1;
                    sprite['h'] = b.height + 1;
                    sprites.push([sprite, key, frame]);

                    container.addChild(sprite);
                });
            });

            if (sprites.length !== 0) {
                var sorted = _.sortBy(sprites, function (x) {
                    return x[0].h;
                }).reverse();
                var packer = new TexturePacker();

                packer.fit(sorted.map(_.first));

                data.animations = {};

                sorted.forEach(function (info) {
                    var f = data.frames[info[2]];
                    data.animations[info[1] + '-' + info[2]] = {
                        frames: [data.frames.length]
                    };

                    if (!f)
                        f = [];

                    data.frames.push([
                        info[0].x, info[0].y, f[2], f[3],
                        data.images.length, f[5], f[6], f[7], f[8]]);
                });

                image.cache(0, 0, packer.root.w, packer.root.h);
                data.images.push(image.cacheCanvas.toDataURL());
                sheet = new createjs.SpriteSheet(data);
            }

            _.forEach(animsLookup, function (x) {
                if (sheet._images[0].src == x.spritesheet._images[0].src) {
                    x.spritesheet = sheet;
                }
            });

            var name = null;
             {
                if (typeof (data.images[0]) == 'string') {
                    name = data.images[0];
                } else {
                    name = data.images[0].src;
                }
                name = name.substring(name.lastIndexOf('/') + 1);
                name = name.substring(0, name.indexOf('.'));
                var split = name.split('_');
                var expression = /^\d+$/;
                if (expression.test(split[split.length - 1])) {
                    split.pop();
                    name = split.join('_');
                }
            }
            util.event('spriteanim', { 'name': name, 'generated': true });
            console.log('Generated atlas in ' + (Date.now() - startAtlas) + 'ms, prefiltered animation spritesheet in ' + (Date.now() - start) + 'ms');
        };

        if (sheet.complete)
            generate();
        else
            sheet.on('complete', generate, null, true);
    }
    exports.addAnimAtlas = addAnimAtlas;

    var TexturePacker = (function () {
        function TexturePacker() {
        }
        TexturePacker.prototype.fit = function (blocks) {
            var n, node, block, pos;
            this.root = { x: 0, y: 0, w: blocks[0].w, h: blocks[0].h };
            for (n = 0; n < blocks.length; n++) {
                block = blocks[n];
                if (node = this.findNode(this.root, block.w, block.h))
                    pos = this.splitNode(node, block.w, block.h);
                else
                    pos = this.growNode(block.w, block.h);
                block.x = pos.x;
                block.y = pos.y;
            }
        };

        TexturePacker.prototype.findNode = function (root, w, h) {
            if (root.used)
                return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
            if (w <= root.w && h <= root.h)
                return root;
        };

        TexturePacker.prototype.splitNode = function (node, w, h) {
            node.used = true;
            node.down = { x: node.x, y: node.y + h, w: node.w, h: node.h - h };
            node.right = { x: node.x + w, y: node.y, w: node.w - w, h: h };
            return node;
        };

        TexturePacker.prototype.growNode = function (w, h) {
            var canGrowDown = w <= this.root.w;
            var canGrowRight = h <= this.root.h;
            var shouldGrowRight = canGrowRight && this.root.h >= (this.root.w + w);
            var shouldGrowDown = canGrowDown && this.root.w >= (this.root.h + h);

            if (shouldGrowRight)
                return this.growRight(w, h);
            if (shouldGrowDown)
                return this.growDown(w, h);
            if (canGrowRight)
                return this.growRight(w, h);
            if (canGrowDown)
                return this.growDown(w, h);
        };

        TexturePacker.prototype.growRight = function (w, h) {
            this.root = {
                used: true,
                x: 0,
                y: 0,
                w: this.root.w + w,
                h: this.root.h,
                down: this.root,
                right: { x: this.root.w, y: 0, w: w, h: this.root.h }
            };
            var node;
            if (node = this.findNode(this.root, w, h))
                return this.splitNode(node, w, h);
        };

        TexturePacker.prototype.growDown = function (w, h) {
            this.root = {
                used: true,
                x: 0,
                y: 0,
                w: this.root.w,
                h: this.root.h + h,
                down: { x: 0, y: this.root.h, w: this.root.w, h: h },
                right: this.root
            };
            var node;
            if (node = this.findNode(this.root, w, h))
                return this.splitNode(node, w, h);
        };
        return TexturePacker;
    })();
    exports.TexturePacker = TexturePacker;

    function loadSpriteAnims(e) {
        var m = e.item.src.match(/^(.+)\/.+?\.json$/);
        e.result.images = e.result.images.map(function (x) {
            if (typeof (x) == 'string') {
                return m[1] + '/' + x;
            } else {
                return x;
            }
        });
        exports.addAnimAtlas(e.result);
    }

    function initLoader() {
        loadQueue = new createjs.LoadQueue();
        loadQueue.installPlugin(createjs.Sound);
        loadQueue.on('fileload', function (e) {
            if (e.item.spritesheet) {
                e.result.images = [e.item.src.replace('json', 'png')];
                exports.addSpriteSheet(e.item.id, e.result);
            } else if (e.item.font) {
                e.result.images = [e.item.src.replace('json', 'png')];
                var s = bitmapFonts[e.item.id] = new createjs.SpriteSheet(e.result);
                s['lineHeight'] = e.result.lineHeight;
            } else if (e.item.id === 'loc') {
                initLoc(e.result);
            } else if (/\.json$/.test(e.item.src) && e.result.images) {
                loadSpriteAnims(e);
            } else if (e.item.type === 'xml') {
                xmlsLookup[e.item.id] = e.result;
            }
        });
    }

    function getSpriteSheet(animId) {
        var id = spritesLookup[animId];
        if (!id)
            throw new Error('No spritesheet for id ' + animId);
        return spritesheets[id];
    }
    exports.getSpriteSheet = getSpriteSheet;

    function getSprite(animId, play) {
        if (typeof play === "undefined") { play = false; }
        var sprite = new createjs.Sprite(exports.getSpriteSheet(animId));
        sprite.name = animId;
        play ? sprite.gotoAndPlay(animId) : sprite.gotoAndStop(animId);
        return sprite;
    }
    exports.getSprite = getSprite;

    function sheetManifest(folder, type, baseUrl, prefix, ids) {
        ids = ids || [];
        return _.reduce(ids, function (manifest, id) {
            ['json', 'png'].forEach(function (ext) {
                var name = prefix + id;
                var src = baseUrl + '/' + folder + '/' + name + '.' + ext;
                if (ext !== 'json')
                    manifest.push(src);
                else {
                    var m = { id: name, src: src };
                    m[type] = true;
                    manifest.push(m);
                }
            });
            return manifest;
        }, []);
    }

    exports.spriteManifest = _.partial(sheetManifest, 'sprites', 'spritesheet');
    exports.fontManifest = _.partial(sheetManifest, 'fonts', 'fonts');

    function fileManifest(ext, folder, baseUrl, prefix, ids) {
        if (ext == 'preferedSoundFormat')
            ext = preferedSoundFormat;

        ids = ids || [];

        return ids.map(function (id) {
            var extension = ext;
            var parts = id.split('.');
            if (parts.length !== 1) {
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
    exports.fileManifest = fileManifest;

    exports.bitmapManifest = _.partial(exports.fileManifest, 'png', 'bitmaps');

    exports.animManifest = _.partial(exports.fileManifest, 'json', 'anims');

    exports.musicManifest = _.partial(exports.fileManifest, 'preferedSoundFormat', 'musics');

    exports.soundManifest = _.partial(exports.fileManifest, 'preferedSoundFormat', 'sounds');

    exports.xmlManifest = _.partial(exports.fileManifest, 'xml', 'xml');

    exports.fontManifest = _.partial(exports.fileManifest, 'json', '');

    

    function assetManifest(assets) {
        var prefix = '';
        var baseUrl = assets.baseUrl;
        return _.flatten([
            exports.bitmapManifest(baseUrl, prefix, assets.bitmaps),
            exports.spriteManifest(baseUrl, prefix, assets.sprites),
            exports.animManifest(baseUrl, prefix, assets.anims),
            exports.soundManifest(baseUrl, prefix, assets.sounds),
            exports.musicManifest(baseUrl, prefix, assets.musics),
            exports.xmlManifest(baseUrl, prefix, assets.xmls),
            exports.fontManifest(baseUrl, prefix, assets.fonts)
        ]);
    }
    exports.assetManifest = assetManifest;

    var isLoading = false;

    function preloadAssets(manifest, callback) {
        if (isLoading)
            throw new Error('Loading already in progress.');

        isLoading = true;

        if (!loc)
            manifest.push({
                id: 'loc',
                src: './assets/common/localization/' + document['frima']['locale'] + '.json' });

        var done = function () {
            isLoading = false;
            callback();
        };

        loadQueue.loadManifest(manifest);
        loadQueue.on('complete', function () {
            done();
        }, null, true);
    }
    exports.preloadAssets = preloadAssets;

    function getAsset(name) {
        return loadQueue.getResult(name);
    }
    exports.getAsset = getAsset;

    var CachedText = (function (_super) {
        __extends(CachedText, _super);
        function CachedText(text, font, color) {
            _super.call(this, text, font, color);

            this.mVisual = new createjs.Container();
            this.mVisual.mouseEnabled = false;
            this.mouseEnabled = false;
        }
        CachedText.prototype.createCache = function (widthBuffer, heightBuffer, yOffset, xAnchor, yAnchor, debugMode) {
            if (typeof widthBuffer === "undefined") { widthBuffer = 4; }
            if (typeof heightBuffer === "undefined") { heightBuffer = 4; }
            if (typeof yOffset === "undefined") { yOffset = -1; }
            if (typeof xAnchor === "undefined") { xAnchor = 0; }
            if (typeof yAnchor === "undefined") { yAnchor = 0; }
            if (typeof debugMode === "undefined") { debugMode = false; }
            if (this.mVisual.cacheID != 0) {
                this.mVisual.uncache();
            }

            var bounds = this.getBounds();
            if (bounds != null) {
                xAnchor = util.clamp(xAnchor, 0, 1);
                yAnchor = util.clamp(yAnchor, 0, 1);
                this.visible = true;
                this.x = 0;
                this.y = 0;
                this.mVisual.addChild(this);

                bounds.width = Math.ceil(bounds.width + widthBuffer);
                bounds.height = Math.ceil(bounds.height + heightBuffer);
                bounds.x = Math.ceil(bounds.x - (widthBuffer * 0.5));
                bounds.y = Math.ceil(bounds.y + yOffset);
                this.mTrueWidth = bounds.width;
                this.mTrueHeight = bounds.height;

                if (debugMode) {
                    this.debug(bounds, "#FF00FF", 0.33);
                }

                this.mVisual.cache(bounds.x, bounds.y, bounds.width, bounds.height);
                this.mVisual.regX = Math.round(bounds.width * xAnchor);
                this.mVisual.regY = Math.round(bounds.height * yAnchor);
                this.mVisual.removeAllChildren();
                this.visible = false;
            }
        };

        CachedText.prototype.debug = function (bounds, color, alpha) {
            var debug = new createjs.Shape(new createjs.Graphics().beginFill(color).drawRect(bounds.x, bounds.y, bounds.width, bounds.height).endFill());
            debug.alpha = alpha;
            this.mVisual.addChild(debug);
        };

        Object.defineProperty(CachedText.prototype, "visual", {
            get: function () {
                return this.mVisual;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CachedText.prototype, "trueWidth", {
            get: function () {
                return this.mTrueWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CachedText.prototype, "trueHeight", {
            get: function () {
                return this.mTrueHeight;
            },
            enumerable: true,
            configurable: true
        });
        return CachedText;
    })(createjs.Text);
    exports.CachedText = CachedText;

    function bitmapText(text, font) {
        if (typeof font === "undefined") { font = defaultBitmapFont; }
        var sheet = bitmapFonts[font];
        if (!sheet)
            throw new Error('No such bitmap font: ' + font);

        var t = new createjs.BitmapText(text, sheet);
        t.lineHeight = sheet['lineHeight'];

        var b = t.getBounds();
        t.cache(b.x, b.y, b.width, b.height);

        return t;
    }
    exports.bitmapText = bitmapText;

    var Scale9 = (function (_super) {
        __extends(Scale9, _super);
        function Scale9(border, corner, height, width, color) {
            if (typeof height === "undefined") { height = 0; }
            if (typeof width === "undefined") { width = 0; }
            if (typeof color === "undefined") { color = "#000000"; }
            _super.call(this);
            this.scale9 = [];

            var borderBounds = border.getBounds();
            this.cornerBounds = corner.getBounds();
            var middle = new createjs.Shape();
            middle.graphics.beginFill(color).drawRect(0, 0, 1, 1);
            var middleBounds = middle.getBounds();

            this.scale9[0] = this.addChild(corner.clone());
            this.scale9[1] = this.addChild(border.clone());
            this.scale9[1].x = this.cornerBounds.width;
            this.scale9[1].scaleX = width;
            this.scale9[2] = this.addChild(corner.clone());
            this.scale9[2].scaleX = -1;
            this.scale9[2].x = (this.cornerBounds.width * 2) + width;

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
            this.scale9[5].x = (2 * this.cornerBounds.width) + width;
            this.scale9[5].y = this.cornerBounds.height;

            this.scale9[6] = this.addChild(corner.clone());
            this.scale9[6].scaleY = -1;
            this.scale9[6].y = (this.cornerBounds.height * 2) + height;
            this.scale9[7] = this.addChild(border.clone());
            this.scale9[7].x = this.cornerBounds.width;
            this.scale9[7].y = (this.cornerBounds.height * 2) + height;
            this.scale9[7].scaleX = width;
            this.scale9[7].scaleY = -1;
            this.scale9[8] = this.addChild(corner.clone());
            this.scale9[8].scaleX = -1;
            this.scale9[8].scaleY = -1;
            this.scale9[8].x = (this.cornerBounds.width * 2) + width;
            this.scale9[8].y = (this.cornerBounds.height * 2) + height;

            return this;
        }
        Scale9.prototype.scale = function (properties, duration, ease) {
            if (_.has(properties, 'x')) {
                createjs.Tween.get(this.scale9[1]).to({ 'scaleX': properties.x }, duration, ease);
                createjs.Tween.get(this.scale9[2]).to({ 'x': properties.x + (this.cornerBounds.width * 2) }, duration, ease);
                createjs.Tween.get(this.scale9[4]).to({ 'scaleX': properties.x }, duration, ease);
                createjs.Tween.get(this.scale9[7]).to({ 'scaleX': properties.x }, duration, ease);
                createjs.Tween.get(this.scale9[8]).to({ 'x': properties.x + (this.cornerBounds.width * 2) }, duration, ease);
            }
            if (_.has(properties, 'y')) {
                createjs.Tween.get(this.scale9[3]).to({ 'scaleX': properties.y }, duration, ease);
                createjs.Tween.get(this.scale9[4]).to({ 'scaleY': properties.y }, duration, ease);
                createjs.Tween.get(this.scale9[5]).to({ 'scaleX': properties.y, 'x': properties.x + (this.cornerBounds.width * 2) }, duration, ease);
                createjs.Tween.get(this.scale9[6]).to({ 'y': properties.y + (this.cornerBounds.height * 2) }, duration, ease);
                createjs.Tween.get(this.scale9[7]).to({ 'y': properties.y + (this.cornerBounds.height * 2) }, duration, ease);
                createjs.Tween.get(this.scale9[8]).to({ 'y': properties.y + (this.cornerBounds.height * 2) }, duration, ease);
            }
        };
        return Scale9;
    })(createjs.Container);
    exports.Scale9 = Scale9;

    var Widget = (function (_super) {
        __extends(Widget, _super);
        function Widget(parent, backgroundId, x, y) {
            if (typeof parent === "undefined") { parent = null; }
            if (typeof backgroundId === "undefined") { backgroundId = null; }
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            _super.call(this);

            this.x = x;
            this.y = y;

            if (backgroundId) {
                this.name = backgroundId;
                this.addChild(exports.getSprite(backgroundId));
            }

            if (parent)
                parent.addChild(this);
        }
        Widget.prototype.addAlignedText = function (text, align, y, font, color, width, outline) {
            if (typeof outline === "undefined") { outline = 0; }
            var t = new createjs.Text(text, font || '18px Arial', color || '#FFF');
            t.textBaseline = "alphabetic";
            t.mouseEnabled = false;
            t.textAlign = align;
            t.outline = outline;

            return this.addObject(t, (width || this.getBounds().width) / 2, y);
        };

        Widget.prototype.addText = function (text, x, y, font, color, dropShadow, outline) {
            if (typeof dropShadow === "undefined") { dropShadow = true; }
            if (typeof outline === "undefined") { outline = 0; }
            var t = new createjs.Text(text, font || '18px Arial', color || '#FFF');
            t.textBaseline = "alphabetic";
            t.outline = outline;
            t.mouseEnabled = false;

            return this.addObject(t, x, y);
        };

        Widget.prototype.addBitmapText = function (text, x, y, font) {
            return this.addObject(exports.bitmapText(text, font), x, y);
        };

        Widget.prototype.addObject = function (obj, x, y, scaleX, scaleY) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            obj.x = x;
            obj.y = y;

            if (scaleX)
                obj.scaleX = scaleX;
            if (scaleY)
                obj.scaleY = scaleY;

            this.addChild(obj);

            return obj;
        };
        return Widget;
    })(createjs.Container);
    exports.Widget = Widget;

    function getAnimationFrames(animId) {
        return exports.getSpriteSheet(animId)['_data'][animId].frames;
    }
    exports.getAnimationFrames = getAnimationFrames;

    function getTrueBounds(animId) {
        var spriteSheet = exports.getSpriteSheet(animId);
        console.dir(spriteSheet);
        console.log(spriteSheet["_frames"][10].rect.width);
        console.log(spriteSheet["_frames"][10].rect.height);

        var rect = spriteSheet["_frames"][spriteSheet['_data'][animId].frames[0]];
        rect.x = 0;
        rect.y = 0;

        return rect;
    }
    exports.getTrueBounds = getTrueBounds;

    function getAnimationBitmap(animId) {
        return createjs.SpriteSheetUtils.extractFrame(exports.getSpriteSheet(animId), animId);
    }
    exports.getAnimationBitmap = getAnimationBitmap;

    var EnableEvent = (function (_super) {
        __extends(EnableEvent, _super);
        function EnableEvent(enabled) {
            _super.call(this, 'enable', false, false);
            this.enabled = enabled;
        }
        return EnableEvent;
    })(createjs.Event);
    exports.EnableEvent = EnableEvent;

    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(parent, animId, x, y, buttonTextInfo, ignoreAlpha, hitzoneOffset) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            if (typeof buttonTextInfo === "undefined") { buttonTextInfo = null; }
            if (typeof ignoreAlpha === "undefined") { ignoreAlpha = true; }
            if (typeof hitzoneOffset === "undefined") { hitzoneOffset = null; }
            _super.call(this, parent, animId, x, y);
            this.mText = null;
            this.mTextOutline = null;
            this.mButtonTextInfo = null;
            this.index = 0;
            this.hoverY = 0;
            this.downY = 0;
            this.isOut = true;
            this.isDown = false;
            this.isEnabled = true;

            var self = this;
            self.frames = exports.getAnimationFrames(animId);
            self.sprite = self.getChildAt(0);
            self.helper = new createjs.ButtonHelper(self.sprite, self.frames[0], self.frames[3] || self.frames[2], self.frames[1]);
            self.dispatchImpl = self['_dispatchEvent'];

            self.mButtonTextInfo = buttonTextInfo;

            self.mIgnoreAlpha = ignoreAlpha;
            if (!self.mIgnoreAlpha) {
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
                if (_.has(buttonTextInfo, "lineWidth")) {
                    self.mText.lineWidth = buttonTextInfo.lineWidth;
                }

                if (buttonTextInfo.outlineInfo != null) {
                    self.mTextOutline = util.baselineText(buttonTextInfo.textString, { "color": buttonTextInfo.outlineInfo.color, "font": buttonTextInfo.outlineInfo.font });
                    self.mTextOutline.mouseEnabled = false;
                    self.mTextOutline.textAlign = "center";
                    self.mTextOutline.outline = buttonTextInfo.outlineInfo.outline;
                    self.mTextOutline.x = self.mText.x;
                    self.mTextOutline.y = self.mText.y;
                    if (_.has(buttonTextInfo, "lineWidth")) {
                        self.mTextOutline.lineWidth = buttonTextInfo.lineWidth;
                    }
                    self.addChild(self.mTextOutline);
                }

                self.addChild(self.mText);
            }

            self.addEventListener('mouseover', function () {
                if (!self.isEnabled || !self.isOut)
                    return;
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
            self.addEventListener('mouseout', function () {
                if (!self.isEnabled || self.isOut)
                    return;
                self.isOut = true;

                if (!self.isDown) {
                    self.doOffset(self.hoverY * -1);

                    if (self.mButtonTextInfo != null) {
                        self.doTextOffset(self.mButtonTextInfo.positionOut);
                    }
                } else {
                    self.doOffset(self.downY * -1);
                    self.doOffset(self.hoverY);

                    if (self.mButtonTextInfo != null) {
                        self.doTextOffset(self.mButtonTextInfo.positionOver);
                    }
                }
            });
            self.addEventListener('mousedown', function () {
                if (!self.isEnabled || self.isDown)
                    return;
                self.isDown = true;

                self.doOffset(self.hoverY * -1);
                self.doOffset(self.downY);

                if (self.mButtonTextInfo != null) {
                    self.doTextOffset(self.mButtonTextInfo.positionDown);
                }
            });
            self.addEventListener('pressup', function () {
                if (!self.isEnabled || !self.isDown)
                    return;
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
        Button.prototype.doTextOffset = function (aPos) {
            var self = this;

            self.mText.x = aPos.x;
            self.mText.y = aPos.y;

            if (self.mTextOutline != null) {
                self.mTextOutline.x = self.mText.x;
                self.mTextOutline.y = self.mText.y;
            }
        };

        Button.prototype.doOffset = function (offset) {
            if (offset === 0)
                return;

            var index = this.index;
            _.forEach(this.children, function (o, i) {
                if (i !== index)
                    o.y += offset;
            });
        };

        Button.prototype.drawHitArea = function () {
            var spriteBounds = this.sprite.getBounds();

            if (this.mHitzoneOffset) {
                spriteBounds.x += this.mHitzoneOffset.x * -0.5;
                spriteBounds.y += this.mHitzoneOffset.y * -0.5;
                spriteBounds.width += this.mHitzoneOffset.x;
                spriteBounds.height += this.mHitzoneOffset.y;
            }

            this.sprite.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#FF00FF").drawRect(spriteBounds.x, spriteBounds.y, spriteBounds.width, spriteBounds.height).endFill());
            this.sprite.hitArea.cache(spriteBounds.x, spriteBounds.y, spriteBounds.width, spriteBounds.height);
        };

        Object.defineProperty(Button.prototype, "bgIndex", {
            set: function (i) {
                this.index = i;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "hoverOffsetY", {
            set: function (y) {
                this.hoverY = y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "downOffsetY", {
            set: function (y) {
                this.downY = y;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Button.prototype, "enabled", {
            get: function () {
                return this.isEnabled;
            },
            set: function (v) {
                var f;
                if (!v) {
                    if (!this.isOut)
                        this.doOffset(this.hoverY * -1);

                    this.isOut = true;
                    this.isDown = false;

                    var self = this;
                    self.cursor = 'default';
                    self['_dispatchEvent'] = function (e, phase) {
                        if (e.type !== 'click')
                            self.dispatchImpl(e, phase);
                    };
                    f = self.frames[3] ? 2 : 1;
                } else {
                    this.cursor = 'pointer';
                    this['_dispatchEvent'] = this.dispatchImpl;
                    f = 0;
                }
                this.helper.setEnabled(this.isEnabled = v);
                this.sprite.gotoAndStop(this.frames[f]);
                this.dispatchEvent(new EnableEvent(v));

                if (!this.mIgnoreAlpha) {
                    this.drawHitArea();
                }
            },
            enumerable: true,
            configurable: true
        });

        Button.prototype.selected = function () {
            this.enabled = false;
            this.sprite.gotoAndStop(this.frames[4]);

            if (!this.mIgnoreAlpha) {
                this.drawHitArea();
            }
        };
        return Button;
    })(Widget);
    exports.Button = Button;

    var POPUP_ANIM_TIME = 333;
    var POPUP_INIT_SCALE = 0.50;
    var POPUP_INIT_ALPHA = 0.25;
    var POPUP_ALPHA = 0.95;
    var POPUP_BLOCKER_ALPHA = 0.75;

    var currentPopup;

    var popupQueue = [];

    function getVAlignPosition(text) {
        return Math.floor(text.getMeasuredHeight() / 2);
    }
    exports.getVAlignPosition = getVAlignPosition;

    function isCurrentPopupOpen() {
        return (currentPopup != null);
    }
    exports.isCurrentPopupOpen = isCurrentPopupOpen;

    function isPopupQueueEmpty() {
        return (popupQueue.length <= 0);
    }
    exports.isPopupQueueEmpty = isPopupQueueEmpty;

    function popup(widget, animate, callback, closeTimer) {
        if (typeof animate === "undefined") { animate = true; }
        if (typeof callback === "undefined") { callback = _.noop; }
        if (typeof closeTimer === "undefined") { closeTimer = 0; }
        if (currentPopup) {
            popupQueue.push({ widget: widget, animate: animate, callback: callback, closeTimer: closeTimer });
            return;
        }

        var bounds = widget.getBounds();
        var blocker = new createjs.Shape();
        blocker.name = 'popup-blocker';

        blocker.graphics.beginFill('#000').drawRect(0, 0, stage.canvas.width, stage.canvas.height);

        createjs.Tween.get(blocker).to({ alpha: POPUP_BLOCKER_ALPHA }, POPUP_ANIM_TIME, createjs.Ease.sineOut);

        var out = function (callback) {
            if (typeof callback === "undefined") { callback = _.noop; }
            createjs.Tween.get(blocker).to({ alpha: 0 }, POPUP_ANIM_TIME, createjs.Ease.sineIn).call(callback);
        };

        var done = function (close) {
            if (typeof close === "undefined") { close = true; }
            stage.removeChild(blocker);
            stage.removeChild(widget);

            currentPopup = null;

            if (popupQueue.length > 0) {
                var popupInfo = popupQueue.shift();
                exports.popup(popupInfo.widget, popupInfo.animate, popupInfo.callback, popupInfo.closeTimer);
            }
        };

        var close;

        if (!animate) {
            close = function () {
                callback();
                out(done);
            };
        } else {
            widget.regX = bounds.width / 2;
            widget.regY = bounds.height / 2;
            widget.x = stage.canvas.width / 2;
            widget.y = stage.canvas.height / 2;

            widget.scaleX = widget.scaleY = POPUP_INIT_SCALE;
            widget.alpha = blocker.alpha = POPUP_INIT_ALPHA;

            exports.playSound('popup-in', 100);

            createjs.Tween.get(widget).to({
                scaleX: 1,
                scaleY: 1,
                alpha: POPUP_ALPHA }, POPUP_ANIM_TIME, createjs.Ease.backOut);

            close = function () {
                callback();
                out();
                exports.playSound('general-click');
                exports.playSound('popup-out');
                createjs.Tween.get(widget).to({
                    scaleX: POPUP_INIT_SCALE,
                    scaleY: POPUP_INIT_SCALE,
                    alpha: POPUP_INIT_ALPHA }, POPUP_ANIM_TIME, createjs.Ease.backIn).call(done);
            };
        }

        widget.on('click', _.noop);
        blocker.on('click', close);

        var closeBtn = widget.getChildByName('close');
        if (closeBtn)
            closeBtn.on('click', close);

        if (closeTimer != 0) {
            setTimeout(close, closeTimer);
        }

        widget.addEventListener("complete", function () {
            close();
        });

        stage.addChild(blocker);
        stage.addChild(widget);

        currentPopup = widget;
    }
    exports.popup = popup;

    var loc;

    function initLoc(data) {
        loc = data;
    }

    function l(key) {
        return loc[key] || '#' + key + '#';
    }
    exports.l = l;

    window['l'] = exports.l;

    var fpsLabel;

    var drawCalls = 0;

    function countChildren(total, object) {
        if (object.hasOwnProperty('children'))
            return total + exports.totalNumChildren(object);
        else
            return total;
    }

    function totalNumChildren(object) {
        return object.getNumChildren() + _.reduce(object.children, countChildren, 0);
    }
    exports.totalNumChildren = totalNumChildren;

    function updateFpsCounter() {
        if (fpsLabel) {
            fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS()) + ' FPS - ' + exports.totalNumChildren(stage) + ' objects - ' + drawCalls + ' draw calls';
        }
    }

    var canvasFunctions = {};

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

    function initDebugCanvas() {
        _.forEach(canvasFunctionNames, function (name) {
            var fn = CanvasRenderingContext2D.prototype[name];
            canvasFunctions[name] = fn;
            CanvasRenderingContext2D.prototype[name] = debugCanvas(fn);
        });
    }

    function destroyDebugCanvas() {
        _.forEach(canvasFunctionNames, function (name) {
            var fn = canvasFunctions[name];
            if (fn) {
                CanvasRenderingContext2D.prototype[name] = fn;
                delete canvasFunctions[name];
            }
        });
    }

    function debugCanvas(fn) {
        return function () {
            ++drawCalls;
            fn.apply(this, arguments);
        };
    }

    function initFpsCounter() {
        if (document['frima']['debug'] && !fpsLabel) {
            initDebugCanvas();
            fpsLabel = new createjs.Text('', 'bold 14px Arial', '#FFF');
            stage.addChild(fpsLabel);
        }
        return true;
    }

    function destroyFpsCounter() {
        if (fpsLabel) {
            stage.removeChild(fpsLabel);
            fpsLabel = null;
            destroyDebugCanvas();
        }
        return false;
    }

    function toggleFpsCounter() {
        return fpsLabel ? destroyFpsCounter() : initFpsCounter();
    }

    var ContainerProto = createjs.Container.prototype;
    var _addChild = ContainerProto.addChild;
    var _addChildAt = ContainerProto.addChildAt;
    var _removeAllChildren = ContainerProto.removeAllChildren;
    var _removeChild = ContainerProto.removeChild;
    var _removeChildAt = ContainerProto.removeChildAt;

    ContainerProto.addChild = function (child) {
        return _addChild.apply(this, arguments);
    };
    ContainerProto.addChildAt = function (child) {
        return _addChildAt.apply(this, arguments);
    };
    ContainerProto.removeAllChildren = function () {
        return _removeAllChildren.apply(this, arguments);
    };
    ContainerProto.removeChild = function (child) {
        return _removeChild.apply(this, arguments);
    };
    ContainerProto.removeChildAt = function (index) {
        return _removeChildAt.apply(this, arguments);
    };

    exports.registerGlobals({
        totalNumChildren: exports.totalNumChildren,
        toggleFpsCounter: toggleFpsCounter,
        initFpsCounter: initFpsCounter,
        destroyFpsCounter: destroyFpsCounter });

    function initTick() {
        createjs.Ticker.setFPS(document['frima']['framerate']);
        createjs.Ticker.on('tick', tick);
    }

    function tick(evt) {
        updateFpsCounter();

        if (screen) {
            screen.update(evt);
        }

        drawCalls = 0;
        stage.update(evt);
    }

    function toggleRender() {
        document['frima']['enablerender'] = !document['frima']['enablerender'];

        return document['frima']['enablerender'];
    }

    exports.registerGlobal('toggleRender', toggleRender);

    function start() {
        initLoader();
        initStage();
        initSound();

        if (document['frima']['enablefps'])
            initFpsCounter();
        if (document['frima']['enablerender'])
            initTick();
    }
    exports.start = start;
});
