'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'core', 'util'], function(require, exports, core, util) {
    document['frima']['framerate'] = 60;
    document['frima']['multi'] = true;

    function start() {
        core.start();

        var screen = new GameScreen();
        resize();
    }
    exports.start = start;

    var Player = (function () {
        function Player(game) {
            this.collideableList = null;
            this.collision = null;
            this.onGround = false;
            this.game = null;
            this.sprite = null;
            this.velocity = { x: 0, y: 25 };
            this.game = game;
            this.sprite = core.getSprite('player');
            this.collideableList = game.collideableList;
            createjs.Ticker.addEventListener('tick', this.tick.bind(this));
        }
        Player.prototype.tick = function () {
            this.game.layer.x = -this.sprite.x + (core.getStage().canvas.width / 2);
            this.game.layer.y = -this.sprite.y + (core.getStage().canvas.height / 2);

            this.velocity.y += 1;

            var moveBy = { x: 0, y: this.velocity.y }, collision = null, collideables = this.collideableList;

            collision = util.calculateCollision(this.sprite, 'y', collideables, moveBy);
            this.sprite.y += isNaN(moveBy.y) ? 0 : moveBy.y;

            if (!collision) {
                if (this.onGround) {
                    this.onGround = false;
                }
            } else {
                if (moveBy.y >= 0) {
                    this.onGround = true;
                }
                this.velocity.y = 0;
            }

            moveBy = { x: this.velocity.x, y: 0 };
            collision = util.calculateCollision(this.sprite, 'x', collideables, moveBy);

            this.sprite.x += isNaN(moveBy.x) ? 0 : moveBy.x;
        };

        Player.prototype.jump = function () {
            if (this.onGround) {
                this.velocity.y = -20;
                this.onGround = false;
            }
        };
        return Player;
    })();
    exports.Player = Player;

    var GameScreen = (function (_super) {
        __extends(GameScreen, _super);
        function GameScreen() {
            _super.call(this, []);
            this.action = 'add';
            this.collideableList = [];
            this.mouseText = null;
            this.player = null;
            this.layer = null;
            this.preload();

            var scope = this;
        }
        GameScreen.prototype.preload = function () {
            var scope = this;
            var manifest = core.assetManifest({
                baseUrl: '../assets',
                sprites: ['0']
            });
            core.preloadAssets(manifest, function () {
                scope.init();
            });
        };

        GameScreen.prototype.keyDown = function (e) {
            if (e.keyCode == 32) {
                this.player.jump();
            } else if (e.keyCode == 49) {
                this.action = 'add';
                this.mouseText.text = this.action;
            } else if (e.keyCode == 50) {
                this.action = 'remove';
                this.mouseText.text = this.action;
            } else if (e.keyCode == 65) {
                this.player.velocity.x = -10;
            } else if (e.keyCode == 68) {
                this.player.velocity.x = 10;
            }
        };

        GameScreen.prototype.keyUp = function (e) {
            if ((e.keyCode == 65 && this.player.velocity.x == -10) || (e.keyCode == 68 && this.player.velocity.x == 10)) {
                this.player.velocity.x = 0;
            }
        };

        GameScreen.prototype.initMouseListener = function () {
            core.getStage().on('stagemousemove', function (e) {
                this.mouseText.x = e.stageX;
                this.mouseText.y = e.stageY;
            }, this);

            this.layer.on('click', function (e) {
                var local = this.layer.globalToLocal(e.stageX, e.stageY);
                var position = { x: Math.floor(local.x / 48) * 48, y: Math.floor(local.y / 48) * 48 };
                if (this.action == 'add') {
                    var sprite = core.getSprite('dirt_cube');
                    sprite.x = position.x;
                    sprite.y = position.y;
                    this.collideableList.push(sprite);
                    this.layer.addChild(sprite);
                } else {
                    for (var i = this.collideableList.length - 1; i > 0; i--) {
                        if (this.collideableList[i].x == position.x && this.collideableList[i].y == position.y) {
                            this.layer.removeChild(this.collideableList[i]);
                            this.collideableList.splice(i, 1);
                        }
                    }
                }
            }, this);
        };

        GameScreen.prototype.init = function () {
            _super.prototype.init.call(this);

            if (util.os() != 'iOS') {
                core.playMusic('music');
            }

            this.layer = new createjs.Container();
            var hit = new createjs.Shape();
            hit.graphics.beginFill('#000').drawRect(-3000, -3000, 6000, 6000);
            this.layer.hitArea = hit;

            document.onkeydown = this.keyDown.bind(this);
            document.onkeyup = this.keyUp.bind(this);
            this.initMouseListener();

            this.player = new Player(this);
            this.loadLevel();
            this.layer.addChild(this.player.sprite);
            this.addChild(this.layer);

            this.addChild(new createjs.Text('Move with WASD, 1 & 2 (add / remove mode), click to interract, jump with space!', '30px Arial', '#ffffff'));

            this.mouseText = new createjs.Text(this.action, '30px Arial', '#ffffff');
            this.addChild(this.mouseText);
        };

        GameScreen.prototype.loadLevel = function () {
            var collision = [];
            var levelSize = { 'x': 60, 'y': 40 };
            for (var i = 0; i < levelSize.y; i++) {
                var inside = [];
                for (var j = 0; j < levelSize.x; j++) {
                    inside.push(0);
                }
                collision[i] = inside;
            }
            var data = _.clone(collision, true);

            offset = Math.floor((Math.random() * 10000));
            scale = 20;
            for (var x = 0; x < levelSize.x; x++) {
                var value = noise.perlin3((x + offset) / scale, (x + offset) / scale, 0);
                value = (1 + value) * 1.1 * 10;
                var y = Math.ceil(value);
                collision[y][x] = 1;
                data[y][x] = 1;

                for (var c = y + 1; c < collision.length; c++) {
                    collision[c][x] = 1;
                    data[c][x] = 2;
                }
            }

            var offset = 0;
            var scale = 5;
            var floodFill = function (cave, limits, x, y) {
                var key = x + ':' + y;
                var value = noise.perlin2((x + offset) / scale, (y + offset) / scale);
                value = Math.floor(value * 256);

                limits.maximum.x = Math.max(limits.maximum.x, x);
                limits.maximum.y = Math.max(limits.maximum.y, y);
                limits.minimum.x = Math.min(limits.minimum.x, x);
                limits.minimum.y = Math.min(limits.minimum.y, y);

                if (_.contains(cave, key)) {
                    return;
                }
                if (value <= 0) {
                    return;
                }
                cave.push(key);
                floodFill(cave, limits, x - 1, y);
                floodFill(cave, limits, x + 1, y);
                floodFill(cave, limits, x, y - 1);
                floodFill(cave, limits, x, y + 1);
                return;
            };

            var caveList = [];
            var limitList = [];
            var generateCaves = function () {
                var cave = [];
                var limits = { 'minimum': { 'x': Infinity, 'y': Infinity }, 'maximum': { 'x': -Infinity, 'y': -Infinity } };
                floodFill(cave, limits, Math.floor((Math.random() * 100)), Math.floor((Math.random() * 100)));
                if (cave.length > 0) {
                    caveList.push(cave);
                    limitList.push(limits);
                }
            };
            for (var i = 0; i < 20; i++) {
                generateCaves();
            }

            if (caveList.length > 0) {
                var firstBlock = Number(caveList[0][0].split(':')[1]);
                for (var c = 0; c < caveList[0].length; c++) {
                    var key = caveList[0][c].split(':');
                    key[0] = Number(key[0] - limitList[0].minimum.x);
                    key[1] = Math.min(Math.max(Number(key[1] - limitList[0].minimum.y), 0), levelSize.y - 1);
                    collision[key[1]][key[0]] = 0;
                    if (data[key[1]][key[0]]) {
                        data[key[1]][key[0]] = 3;
                    }
                }
            }

            var backgroundCube = function (i, j, scope) {
                var sprite = core.getSprite('background_cube');
                sprite.x = j * 48;
                sprite.y = i * 48;
                scope.layer.addChild(sprite);
            };

            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].length; j++) {
                    if (data[i][j] == 1) {
                        backgroundCube(i, j, this);
                        var sprite = core.getSprite('green_cube');
                        sprite.x = j * 48;
                        sprite.y = i * 48;
                        this.collideableList.push(sprite);
                        this.layer.addChild(sprite);
                    } else if (data[i][j] == 2) {
                        backgroundCube(i, j, this);
                        var sprite = core.getSprite('dirt_cube');
                        sprite.x = j * 48;
                        sprite.y = i * 48;
                        this.collideableList.push(sprite);
                        this.layer.addChild(sprite);
                    } else if (data[i][j] == 3) {
                        backgroundCube(i, j, this);
                    }
                }
            }
        };

        GameScreen.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return GameScreen;
    })(core.Screen);
    exports.GameScreen = GameScreen;
});
//# sourceMappingURL=main.js.map
