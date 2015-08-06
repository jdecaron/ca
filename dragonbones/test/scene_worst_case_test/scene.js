(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.turquoise_circle = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AiwCwQhIhJgBhnQABhmBIhKQBKhIBmgBQBnABBJBIQBJBKABBmQgBBnhJBJQhJBJhnABQhmgBhKhJg");
	this.shape.setTransform(25,25);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.red_circle = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgzA0QgVgWAAgeQAAgdAVgWQAWgVAdAAQAeAAAVAVQAWAWAAAdQAAAegWAWQgVAVgeAAQgdAAgWgVg");
	this.shape.setTransform(7.4,7.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.8,14.8);


(lib.green_circle = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AlgFhQiTiSAAjPQAAjOCTiSQCSiTDOAAQDPAACSCTQCSCSAADOQAADPiSCSQiSCSjPAAQjOAAiSiSg");
	this.shape.setTransform(50,50);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.blue_circle = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AiwCwQhIhJgBhnQABhmBIhKQBKhIBmgBQBnABBJBIQBKBKAABmQAABnhKBJQhJBKhnAAQhmAAhKhKg");
	this.shape.setTransform(25,25);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.two_circles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// red_circle
	this.instance = new lib.red_circle();
	this.instance.setTransform(85.1,67.7,1,1,0,0,0,7.4,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:3,scaleY:3,x:85.2,y:67.8},49).wait(1));

	// blue_circle
	this.instance_1 = new lib.blue_circle();
	this.instance_1.setTransform(25,84.3,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// turquoise_circle
	this.instance_2 = new lib.turquoise_circle();
	this.instance_2.setTransform(118.8,25,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.8,109.3);


(lib.scene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// two_circles
	this.instance = new lib.two_circles();
	this.instance.setTransform(258.9,269.3,1,1,0,0,0,71.9,54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:4,scaleY:4,y:269.2},49).wait(1));

	// green_circle
	this.instance_1 = new lib.green_circle();
	this.instance_1.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:4,scaleY:4},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,330.7,324);


// stage content:



(lib.scene = function() {
	this.initialize();

	// scene
	this.instance = new lib.scene_1();
	this.instance.setTransform(115.3,137.3,1,1,0,0,0,44.3,44.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(321,343,330.7,324);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;