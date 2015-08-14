var Optimizer = function(exportRoot, visualize) {
    this.exportRoot = exportRoot;
    this.visualize = visualize;

    this.getType = function(object){
        object.getType = function() {
            return (this).constructor.toString().match(/this\.[^_]*/)[0].substring(5);
        };
        return object.getType();
    };

    this.max = function(list) {
        var currentMax = -Infinity;
        for(var k = 0; k < list.length; k++) {
            if(list[k] > currentMax) {
                currentMax = list[k];
            }
        }
        return currentMax;
    };

    this.uncachedList = [];

    this.cache = function(object) {
        if(this.getType(object) == 'DisplayObject' && object.inheritor != undefined) {
            if(object.nominalBounds.width*object.absoluteMaximumScale <= 2048 && object.nominalBounds.height*object.absoluteMaximumScale <= 2048) {
                if(this.visualize && object.addChild) {
                    var shape = new createjs.Shape();
                    shape.graphics.beginFill('#ff0000').drawRect(0, 0, object.nominalBounds.width, object.nominalBounds.height);
                    shape.alpha = .5;
                    object.addChild(shape);
                }
                if(object.absoluteMaximumScale > 1) {
                    console.log('Caching:', 'scale:', object.absoluteMaximumScale, 'width:', object.nominalBounds.width*object.absoluteMaximumScale, 'height:', object.nominalBounds.height*object.absoluteMaximumScale, object);
                    object.cache(object.nominalBounds.x, object.nominalBounds.y, Math.min(2048, object.nominalBounds.width), Math.min(2048, object.nominalBounds.height), object.absoluteMaximumScale);
                } else {
                    console.log('Caching:', 'scale:', 1, 'width:', object.nominalBounds.width*object.absoluteMaximumScale, 'height:', object.nominalBounds.height*object.absoluteMaximumScale, object);
                    object.cache(object.nominalBounds.x, object.nominalBounds.y, Math.min(2048, object.nominalBounds.width), Math.min(2048, object.nominalBounds.height));
                }
            }
            else {
                this.uncachedList.push(object);
            }
        }
    }

    this.findMaximumScale = function(object) {
        var self = this;
        var maximumScale = function(object, scale) {
            if(object.maximumScale === undefined) {
                object.maximumScale = scale;
            } else {
                object.maximumScale = self.max([scale, object.maximumScale]);
            }
        };
        maximumScale(object, this.max([object.scaleX, object.scaleY]));
        if(object.timeline) {
            for(var i = 0; i < object.timeline._tweens.length; i++) {
                var tween = object.timeline._tweens[i];
                for(var j = 0; j < tween._steps.length; j++) {
                    var step = tween._steps[j];
                    if(step.p0.scaleX > 1 || step.p0.scaleY > 1 || step.p1.scaleX > 1 || step.p1.scaleY > 1) {
                        maximumScale(tween.target, this.max([step.p0.scaleX, step.p0.scaleY, step.p1.scaleX, step.p1.scaleY]));
                    }
                    if(step.p0.state || step.p1.state) {
                        var steps = [step.p0.state, step.p1.state];
                        for(var k=0; k<steps.length; k++) {
                            for(var l=0; l<steps[k].length; l++) {
                                if(steps[k][l].p) {
                                    maximumScale(steps[k][l].t, this.max([steps[k][l].p.scaleX, steps[k][l].p.scaleY]));
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    this.findAbsoluteMaximumScale = function(object) {
        var scale = object.maximumScale;
        if(object.inheritor) {
            scale = scale * this.findAbsoluteMaximumScale(object.inheritor);
        }
        return scale;
    };

    this.addParent = function(object, inheritor) {
        object.inheritor = inheritor;
    };

    this.recursiveNodeAnalysis = function(object, action) {
        if(action == 'findMaximumScale') {
            this.findMaximumScale(object);
        } else if(action == 'findAbsoluteMaximumScale') {
            var scale = this.findAbsoluteMaximumScale(object);
            object.absoluteMaximumScale = this.max([scale, object.absoluteMaximumScale]);
        }
        for(item in object) {
            if(item.match(/^instance/)) {
                this.addParent(object[item], object);
                this.recursiveNodeAnalysis(object[item], action);
            }
        }
        if(action == 'cache') {
            this.cache(object);
        }
    };
    this.recursiveNodeAnalysis(this.exportRoot, 'findMaximumScale');
    this.recursiveNodeAnalysis(this.exportRoot, 'findAbsoluteMaximumScale');
    this.recursiveNodeAnalysis(this.exportRoot, 'cache');

    for(var i=0; i<this.uncachedList.length; i++) {
        console.warn('Object with a larger size than 2048:', 'width:', this.uncachedList[i].nominalBounds.width*this.uncachedList[i].absoluteMaximumScale, 'height:', this.uncachedList[i].nominalBounds.height*this.uncachedList[i].absoluteMaximumScale, this.uncachedList[i]);
    }
};
