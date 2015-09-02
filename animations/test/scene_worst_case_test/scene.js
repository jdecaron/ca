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



(lib.yellow_circle = function() {
	this.initialize();

	this.identify = true;
	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiwCwQhIhJgBhnQABhmBIhKQBKhIBmgBQBnABBJBIQBKBKAABmQAABnhKBJQhJBKhnAAQhmAAhKhKg");
	this.shape.setTransform(25,25);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.turquoise_circle = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AiwCwQhIhJgBhnQABhmBIhKQBKhIBmgBQBnABBJBIQBJBKABBmQgBBnhJBJQhJBJhnABQhmgBhKhJg");
	this.shape.setTransform(25,25);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


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

	// blue_circle
	this.instance = new lib.blue_circle();
	this.instance.setTransform(25,84.3,1,1,0,0,0,25,25);

	this.instance_1 = new lib.yellow_circle();
	this.instance_1.setTransform(25,84.3,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}}]},24).to({state:[]},6).to({state:[{t:this.instance_1,p:{scaleX:2,scaleY:2}}]},9).wait(11));

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
	this.instance.setTransform(258.9,269.3,1.857,1.857,0,0,0,71.9,54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:4,scaleY:4,y:269.2},49).wait(1));

	// green_circle
	this.instance_1 = new lib.green_circle();
	this.instance_1.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:4,scaleY:4},49).wait(1));

	// turquoise_circle
	this.instance_2 = new lib.turquoise_circle();
	this.instance_2.setTransform(362,366,1,1,0,0,0,25,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:9.04,scaleY:9.04},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,392.3,391);


// stage content:



(lib.scene = function() {
	this.initialize();

	// scene
	this.instance = new lib.scene_1();
	this.instance.setTransform(115.3,137.3,1,1,0,0,0,44.3,44.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(321,343,392.3,391);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;