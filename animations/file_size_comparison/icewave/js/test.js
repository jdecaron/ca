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
                anims: ['reels.json'],
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
                "bsl03_reels_cannon-sd",
                "bsl03_reels_grog-sd",
                "bsl03_reels_hook-sd",
                "bsl03_reels_parrot-sd",
                "bsl03_reels_pistol-sd",
                "bsl03_reels_shark-sd",
                "bsl03_reels_buccaneer-sd",
                "bsl03_reels_captain-sd",
                "bsl03_reels_hookpirate-sd",
                "bsl03_reels_skeleton-sd"
            ];

            for(var i = 0; i < 4; i++) {
                var spriteAnim = core.getSpriteAnim(armatureList[i]);
                spriteAnim.x = 0 + (150 * i);
                spriteAnim.y = 0;
                this.addChild(spriteAnim);
            }
            for(var i = 4; i < 8; i++) {
                var spriteAnim = core.getSpriteAnim(armatureList[i]);
                spriteAnim.x = -600 + (150 * i);
                spriteAnim.y = 150;
                this.addChild(spriteAnim);
            }
            for(var i = 8; i < 10; i++) {
                var spriteAnim = core.getSpriteAnim(armatureList[i]);
                spriteAnim.x = -1200 + (150 * i);
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
