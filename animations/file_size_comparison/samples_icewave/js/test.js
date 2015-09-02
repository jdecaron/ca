'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'core', 'util'], function(require, exports, core, util) {
    function start() {
        core.start();

        var screen = new RunnerScreen();
    }
    exports.start = start;

    var RunnerScreen = (function (_super) {
        __extends(RunnerScreen, _super);
        function RunnerScreen() {
            _super.call(this, []);
            this.mManifest = {
                anims: ['pet_tongue.json', 'lucu.json'],
                baseUrl: './assets'
            };
            this.mContainer = new createjs.Container();
            this.preload();

            var scope = this;
            var loadedRequiredCuts = [];
        }
        RunnerScreen.prototype.preload = function () {
            var scope = this;
            var manifest = core.assetManifest(this.mManifest);
            var loaded = function() {
                scope.init();
            }
            core.preloadAssets(manifest, loaded);
        };

        RunnerScreen.prototype.init = function () {
            _super.prototype.init.call(this);

            console.log('init scene');

            var armatureList = [
                "PET_ANIMATION_tongue",
                "LUCU_V01"
            ];

            for(var i = 0; i < 2; i++) {
                var spriteAnim = core.getSpriteAnim(armatureList[i]);
                spriteAnim.x = 0 + (300 * i);
                spriteAnim.y = 300;
                this.addChild(spriteAnim);
            }
        };

        RunnerScreen.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
        };
        return RunnerScreen;
    })(core.Screen);
    exports.RunnerScreen = RunnerScreen;
});
