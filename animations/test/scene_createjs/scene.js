(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1250,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/ComEdge2_Fantasy_Q218ElfLandHauserwav.mp3", id:"ComEdge2_Fantasy_Q218ElfLandHauserwav"},
		{src:"sounds/Dwarf_Laugh1wav.mp3", id:"Dwarf_Laugh1wav"},
		{src:"sounds/Dwarf_Laugh2wav.mp3", id:"Dwarf_Laugh2wav"},
		{src:"sounds/monstertalk.mp3", id:"monstertalk"}
	]
};



// symbols:



(lib.Bluedudebluebodyblur = function() {
	this.spriteSheet = ss["scene_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BluedudeBlue_character_armBlur_IMG = function() {
	this.spriteSheet = ss["scene_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.OrangedudeOrangearmblur = function() {
	this.spriteSheet = ss["scene_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Orangedudeorangebodyblur = function() {
	this.spriteSheet = ss["scene_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.orange_mouth_talk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ear piece
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#818181").s().p("AgeB4QArg7AAhGQAAg2gWg5IAOgJQAaA9AAA6QABBMgvBAg");
	this.shape.setTransform(-33.9,5.7,1.112,1.112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#818181").s().p("AglCdQBGhogOhiQgJhAgjgwIATgFQAkA4AHBCQALBkhDBmg");
	this.shape_1.setTransform(-24.3,6.3,1.112,1.112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#676767").s().p("Ag7AHQAAgjAdgkQAageAogaQAYA5AAA2QAABHgtA7QhKg3AAg7g");
	this.shape_2.setTransform(-39.2,5.7,1.112,1.112);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#676767").s().p("Ag9B+QAxhAgBhNQAAg6gag9QAcgOAZgIQAlAwAJA/QAOBjhIBnQgegKghgVg");
	this.shape_3.setTransform(-28.8,6.2,1.112,1.112);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#676767").s().p("AhEChQBEhmgKhlQgHhCgmg3QALgCAIAAQArAAAfAxQAeAwAABEQAABFgeAxQggAwgqAAQgMAAgUgFg");
	this.shape_4.setTransform(-18.8,6.4,1.112,1.112);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#818181").s().p("AgfAgQgNgNAAgTQAAgRANgNQAOgOARAAQASAAANAOQAOANAAARQAAATgOANQgNANgSAAQgSAAgNgNg");
	this.shape_5.setTransform(-53.2,-68.3,1.112,1.112);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#818181").s().p("AAAFXQhBgdAAhdIAAo+IAUAAIAAI+QAABPA1AZIAAAAQAcALAcgDIACAUIgQABQgZAAgZgLg");
	this.shape_6.setTransform(-47.5,-29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(18));

	// mouth
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CA621E").s().p("AkpgJQgDgBABgEQABAAAAgBQAAAAABgBQABAAAAAAQABAAABAAQCXAzCTgEQCQgFCUhNQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQiFBWiiAKQgUACgWAAQiLAAh4g9g");
	this.shape_7.setTransform(96.3,8.3,0.233,0.545,0,180,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#D18B25").ss(2,1,1).p("ABJAAQAAAqgWAfQgVAegeAAQgdAAgWgeQgVgfAAgqQAAgqAVgeQAWgfAdAAQAeAAAVAfQAWAeAAAqg");
	this.shape_8.setTransform(96.7,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7F7F7").s().p("AgohGQAoADApgBIg4CLg");
	this.shape_9.setTransform(96.9,11.9,0.545,0.545);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424242").s().p("AgzBJQgVgfAAgqQAAgpAVgfQAXgfAcAAQAeAAAWAfQAVAfAAApQAAAqgVAfQgWAfgeAAQgcAAgXgfg");
	this.shape_10.setTransform(96.7,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CA621E").s().p("AkpgJQgDgBABgEQABAAAAgBQAAAAABgBQABAAAAAAQABAAABAAQCXAzCTgEQCQgFCUhNQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQiFBWiiAKQgUACgWAAQiLAAh4g9g");
	this.shape_11.setTransform(96.3,31.7,0.233,0.545);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},15).wait(3));

	// mouth
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#D18B25").ss(2,1,1).p("ABpiVQAtA/AABWQAABYgtA+QgrA+g+AAQg9AAgsg+Qgsg+AAhYQAAhWAsg/QAsg+A9AAQA+AAArA+g");
	this.shape_12.setTransform(67.2,31.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7F7F7").s().p("AgohGQAoADApgBIg4CLg");
	this.shape_13.setTransform(67.8,17.7,1.112,1.112);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#424242").s().p("AhoCWQgsg+AAhYQAAhXAsg+QArg+A9AAQA9AAAsA+QAtA+gBBXQABBYgtA+QgsA+g9AAQg9AAgrg+g");
	this.shape_14.setTransform(67.2,31.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CA621E").s().p("AkpgJQgDgBABgEQABAAAAgBQAAAAABgBQABAAAAAAQABAAABAAQCXAzCTgEQCQgFCUhNQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQiFBWiiAKQgUACgWAAQiLAAh4g9g");
	this.shape_15.setTransform(66.5,58.1,0.476,1.112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},12).to({state:[]},3).wait(3));

	// mouth
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D18B25").ss(2,1,1).p("AHGkXQA2gYAwgjQgBBZgHBYQgGBEgPBAQgVBZgrBQQggA5guAtQg0AyhFAVQhWAYhaACQiQACiHg6Qhegog/hPQgbgigVglQgphcgohZQgthmgbhsQgDgNgDgOQBnAqBtAfQBYAbBaAMQB9ARB9gIQBngDBkgTQBWgRBQgkg");
	this.shape_16.setTransform(55.7,34);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7F7F7").s().p("AAAhCIAcBJQgYAegfAdg");
	this.shape_17.setTransform(96.6,51.5,1.112,1.112);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7F7F7").s().p("AAPhOIAZCBQgpAWgmAGQAzh3ADgmg");
	this.shape_18.setTransform(78.7,58.9,1.112,1.112);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7F7F7").s().p("AgwA4IAnhwIA6BvIgxACQgYAAgYgBg");
	this.shape_19.setTransform(58.2,61.4,1.112,1.112);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7F7F7").s().p("AgdAUIAyg8IAJBRQgggJgbgMg");
	this.shape_20.setTransform(35.7,58.6,1.112,1.112);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7F7F7").s().p("AgQAGIAhgnIgGBDg");
	this.shape_21.setTransform(17.3,42.1,1.112,1.112);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7F7F7").s().p("Agbg/IA3ASIgyBtg");
	this.shape_22.setTransform(16.8,13.4,1.112,1.112);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7F7F7").s().p("Agtg+QAvAKAsAGIg6Btg");
	this.shape_23.setTransform(39.3,18.7,1.112,1.112);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7F7F7").s().p("AgohGQAoADApgBIg4CLg");
	this.shape_24.setTransform(60.7,21.6,1.112,1.112);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7F7F7").s().p("AglgqQAlgDAhgHIAFBpg");
	this.shape_25.setTransform(78.7,17.5,1.112,1.112);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7F7F7").s().p("AAgBPQAAgDhFh9QAlgMAmgRQgDCdgCAAIgBAAg");
	this.shape_26.setTransform(95.3,15.2,1.112,1.112);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CA621E").s().p("AkpgJQgDgBABgEQABAAAAgBQAAAAABgBQABAAAAAAQABAAABAAQCXAzCTgEQCQgFCUhNQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQiFBWiiAKQgUACgWAAQiLAAh4g9g");
	this.shape_27.setTransform(59,75,1.112,1.112);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#424242").s().p("Ai/EbQhegog+hPQgcgigVglIhRi1QgthmgbhsIgGgbQBoAqBsAfQBYAbBaAMQB9ARB9gIQBmgDBlgTQBVgRBRgkQA2gYAwgjQgBBZgIBYQgFBEgPBAQgVBZgrBQQggA5guAtQg0AyhFAVQhXAYhZACIgMAAQiKAAiBg4g");
	this.shape_28.setTransform(55.7,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},9).to({state:[]},3).wait(6));

	// mouth
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7F7F7").s().p("AklAGIAHA8Ig7ADgAhNgVIApBMIhFADgACkg6IAUBlIg0ADQAehKACgegAFChEIAYBpIguABg");
	this.shape_29.setTransform(58.7,26.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F7F7F7").s().p("Agbg/IA3ASIgyBtg");
	this.shape_30.setTransform(16.8,13.4,1.112,1.112);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F7F7F7").s().p("Agtg+QAvAKAsAGIg6Btg");
	this.shape_31.setTransform(39.3,18.9,1.112,1.112);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7F7F7").s().p("AgohGQAoADApgBIg4CLg");
	this.shape_32.setTransform(60.5,22.8,1.112,1.112);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7F7F7").s().p("AglgqQAlgDAhgHIAFBpg");
	this.shape_33.setTransform(78.1,19.3,1.112,1.112);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F7F7F7").s().p("AAgBPQAAgDhFh9QAlgMAmgRQgDCdgCAAIgBAAg");
	this.shape_34.setTransform(94.5,16.8,1.112,1.112);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#424242").s().p("ApHAEQAVipAlAKQDRBWDeAjQDOAiDNgqQBmgVBeg0QApgVAgggQgFAIguBuQgvBsBHBMQg5gJlpATQlnAUjBAFIgLAAQi2AAAVilg");
	this.shape_35.setTransform(52.6,17);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CA621E").s().p("AkpgJQgDgBABgEQABAAAAgBQAAAAABgBQABAAAAAAQABAAABAAQCXAzCTgEQCQgFCUhNQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQiFBWiiAKQgUACgWAAQiLAAh4g9g");
	this.shape_36.setTransform(58.7,58.1,1.112,1.112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},6).to({state:[]},3).wait(9));

	// mouth
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F7F7F7").s().p("AAAhCIAcBJQgYAegfAdg");
	this.shape_37.setTransform(95.6,35.1,1.112,1.112);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7F7F7").s().p("AAPhOIAZCBQgpAWgmAGQAzh3ADgmg");
	this.shape_38.setTransform(77.9,43.3,1.112,1.112);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F7F7F7").s().p("AgwA4IAnhwIA6BvIgxACQgYAAgYgBg");
	this.shape_39.setTransform(58.2,47.6,1.112,1.112);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F7F7F7").s().p("AgdAUIAyg8IAJBRQgggJgbgMg");
	this.shape_40.setTransform(35.7,46.8,1.112,1.112);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7F7F7").s().p("AgQAGIAhgnIgGBDg");
	this.shape_41.setTransform(17.3,36.3,1.112,1.112);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7F7F7").s().p("Agbg/IA3ASIgyBtg");
	this.shape_42.setTransform(16.8,13.4,1.112,1.112);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F7F7F7").s().p("Agtg+QAvAKAsAGIg6Btg");
	this.shape_43.setTransform(39.3,18.9,1.112,1.112);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F7F7F7").s().p("AgohGQAoADApgBIg4CLg");
	this.shape_44.setTransform(60.5,22.8,1.112,1.112);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F7F7F7").s().p("AglgqQAlgDAhgHIAFBpg");
	this.shape_45.setTransform(78.1,19.3,1.112,1.112);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F7F7F7").s().p("AAgBPQAAgDhFh9QAlgMAmgRQgDCdgCAAIgBAAg");
	this.shape_46.setTransform(94.5,16.8,1.112,1.112);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CA621E").s().p("AkpgJQgDgBABgEQABAAAAgBQAAAAABgBQABAAAAAAQABAAABAAQCXAzCTgEQCQgFCUhNQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQiFBWiiAKQgUACgWAAQiLAAh4g9g");
	this.shape_47.setTransform(58.7,58.1,1.112,1.112);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#424242").s().p("AikDyQhzghhbhOQiGiHgni6QgHgggFghQDQBWDfAjQDOAkDNgsQBmgVBdg0QApgVAhggQgFCPhBB+Qg1BpheBKQguAkg5ATQhpAihqAAQhdAAhggbg");
	this.shape_48.setTransform(55.7,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},3).to({state:[]},3).wait(12));

	// mouth
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgHBSQg4gCg5gLQg5gJg3gMQg3gLg1gRIhpgfQg1gQgygXIgRgVIAuAUQArATAzAPIBnAcQA0AQA4AKQA5AKA/AIQA/AIAzAFQA0AEA4gEQA4gDA/gIQA4gGBCgXQBCgYAsgXQAtgZAqgpIgGAZIgjAaQgqAegtATQg2AYg3APQg4AOg8AHQg4AJg5ABIgkABQglAAgigEg");
	this.shape_49.setTransform(55.2,16.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7F7F7").s().p("Agbg/IA3ASIgyBtg");
	this.shape_50.setTransform(16.8,22.4,1.112,1.112);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F7F7F7").s().p("Agtg+QAvAKAsAGIg6Btg");
	this.shape_51.setTransform(39.3,27.9,1.112,1.112);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7F7F7").s().p("AgohGQAoADApgBIg4CLg");
	this.shape_52.setTransform(60.5,31.8,1.112,1.112);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F7F7F7").s().p("AglgqQAlgDAhgHIAFBpg");
	this.shape_53.setTransform(78.1,28.3,1.112,1.112);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F7F7F7").s().p("AAgBPQAAgDhFh9QAlgMAmgRQgDCdgCAAIgBAAg");
	this.shape_54.setTransform(94.5,25.8,1.112,1.112);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CA621E").s().p("AkpgJQgDgBABgEQABAAAAgBQAAAAABgBQABAAAAAAQABAAABAAQCXAzCTgEQCQgFCUhNQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQiFBWiiAKQgUACgWAAQiLAAh4g9g");
	this.shape_55.setTransform(58.7,43.1,1.112,1.112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).to({state:[]},3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.2,-73.3,170.1,122.4);


(lib.orange_mouth_happy = function() {
	this.initialize();

	// ear piece
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#818181").s().p("AgeB4QArg7AAhGQAAg2gWg5IAOgJQAaA9AAA6QABBMgvBAg");
	this.shape.setTransform(-33.9,5.7,1.112,1.112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#818181").s().p("AglCdQBGhogOhiQgJhAgjgwIATgFQAkA4AHBCQALBkhDBmg");
	this.shape_1.setTransform(-24.3,6.3,1.112,1.112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#676767").s().p("Ag7AHQAAgjAdgkQAageAogaQAYA5AAA2QAABHgtA7QhKg3AAg7g");
	this.shape_2.setTransform(-39.2,5.7,1.112,1.112);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#676767").s().p("Ag9B+QAxhAgBhNQAAg6gag9QAcgOAZgIQAlAwAJA/QAOBjhIBnQgegKghgVg");
	this.shape_3.setTransform(-28.8,6.2,1.112,1.112);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#676767").s().p("AhEChQBEhmgKhlQgHhCgmg3QALgCAIAAQArAAAfAxQAeAwAABEQAABFgeAxQggAwgqAAQgMAAgUgFg");
	this.shape_4.setTransform(-18.8,6.4,1.112,1.112);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#818181").s().p("AgfAgQgNgNAAgTQAAgRANgNQAOgOARAAQASAAANAOQAOANAAARQAAATgOANQgNANgSAAQgSAAgNgNg");
	this.shape_5.setTransform(-53.2,-68.3,1.112,1.112);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#818181").s().p("AAAFXQhBgdAAhdIAAo+IAUAAIAAI+QAABPA1AZIAAAAQAcALAcgDIACAUIgQABQgZAAgZgLg");
	this.shape_6.setTransform(-47.5,-29.2);

	// mouth
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7F7F7").s().p("AAAhCIAcBJQgYAegfAdg");
	this.shape_7.setTransform(95.6,35.1,1.112,1.112);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7F7F7").s().p("AAPhOIAZCBQgpAWgmAGQAzh3ADgmg");
	this.shape_8.setTransform(77.9,43.3,1.112,1.112);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7F7F7").s().p("AgwA4IAnhwIA6BvIgxACQgYAAgYgBg");
	this.shape_9.setTransform(58.2,47.6,1.112,1.112);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7F7F7").s().p("AgdAUIAyg8IAJBRQgggJgbgMg");
	this.shape_10.setTransform(35.7,46.8,1.112,1.112);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7F7F7").s().p("AgQAGIAhgnIgGBDg");
	this.shape_11.setTransform(17.3,36.3,1.112,1.112);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7F7F7").s().p("Agbg/IA3ASIgyBtg");
	this.shape_12.setTransform(16.8,13.4,1.112,1.112);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7F7F7").s().p("Agtg+QAvAKAsAGIg6Btg");
	this.shape_13.setTransform(39.3,18.9,1.112,1.112);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7F7F7").s().p("AgohGQAoADApgBIg4CLg");
	this.shape_14.setTransform(60.5,22.8,1.112,1.112);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7F7F7").s().p("AglgqQAlgDAhgHIAFBpg");
	this.shape_15.setTransform(78.1,19.3,1.112,1.112);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7F7F7").s().p("AAgBPQAAgDhFh9QAlgMAmgRQgDCdgCAAIgBAAg");
	this.shape_16.setTransform(94.5,16.8,1.112,1.112);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CA621E").s().p("AkpgJQgDgBABgEQABAAAAgBQAAAAABgBQABAAAAAAQABAAABAAQCXAzCTgEQCQgFCUhNQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQiFBWiiAKQgUACgWAAQiLAAh4g9g");
	this.shape_17.setTransform(58.7,58.1,1.112,1.112);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#424242").s().p("AikDyQhzghhbhOQiGiHgni6QgHgggFghQDQBWDfAjQDOAkDNgsQBmgVBdg0QApgVAhggQgFCPhBB+Qg1BpheBKQguAkg5ATQhpAihqAAQhdAAhggbg");
	this.shape_18.setTransform(55.7,27);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.2,-73.3,169.6,137.4);


(lib.orange_mouth = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#818181").s().p("AgeB4QArg7AAhGQAAg2gWg5IAOgJQAaA9AAA6QABBMgvBAg");
	this.shape.setTransform(-33.9,5.7,1.112,1.112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#818181").s().p("AglCdQBGhogOhiQgJhAgjgwIATgFQAkA4AHBCQALBkhDBmg");
	this.shape_1.setTransform(-24.3,6.3,1.112,1.112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#676767").s().p("Ag7AHQAAgjAdgkQAageAogaQAYA5AAA2QAABHgtA7QhKg3AAg7g");
	this.shape_2.setTransform(-39.2,5.7,1.112,1.112);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#676767").s().p("Ag9B+QAxhAgBhNQAAg6gag9QAcgOAZgIQAlAwAJA/QAOBjhIBnQgegKghgVg");
	this.shape_3.setTransform(-28.8,6.2,1.112,1.112);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#676767").s().p("AhEChQBEhmgKhlQgHhCgmg3QALgCAIAAQArAAAfAxQAeAwAABEQAABFgeAxQggAwgqAAQgMAAgUgFg");
	this.shape_4.setTransform(-18.8,6.4,1.112,1.112);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#818181").s().p("AgfAgQgNgNAAgTQAAgRANgNQAOgOARAAQASAAANAOQAOANAAARQAAATgOANQgNANgSAAQgSAAgNgNg");
	this.shape_5.setTransform(-53.2,-68.3,1.112,1.112);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7F7F7").s().p("AAAhCIAcBJQgYAegfAdg");
	this.shape_6.setTransform(95.6,35.1,1.112,1.112);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7F7F7").s().p("AAPhOIAZCBIhPAcQAzh3ADgmg");
	this.shape_7.setTransform(77.9,43.3,1.112,1.112);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7F7F7").s().p("AgwA4IAnhwIA6BvIgxACQgYAAgYgBg");
	this.shape_8.setTransform(58.2,47.6,1.112,1.112);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7F7F7").s().p("AgdAUIAyg8IAJBRQgggJgbgMg");
	this.shape_9.setTransform(35.7,46.8,1.112,1.112);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7F7F7").s().p("AgQAGIAhgnIgGBDg");
	this.shape_10.setTransform(17.3,36.3,1.112,1.112);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7F7F7").s().p("Agbg/IA3ASIgyBtg");
	this.shape_11.setTransform(16.8,13.4,1.112,1.112);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7F7F7").s().p("Agtg+QAvAKAsAGIg6Btg");
	this.shape_12.setTransform(39.3,18.9,1.112,1.112);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F7F7F7").s().p("AgohGQAoADApgBIg4CLg");
	this.shape_13.setTransform(60.5,22.8,1.112,1.112);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7F7F7").s().p("AglgqQAlgDAhgHIAFBpg");
	this.shape_14.setTransform(78.1,19.3,1.112,1.112);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7F7F7").s().p("AAgBPQAAgDhFh9QAlgMAmgRQgDCdgCAAIgBAAg");
	this.shape_15.setTransform(94.5,16.8,1.112,1.112);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#424242").s().p("AiTDcIgJhTIg0A+QhFgeg3gyIAGhGIgjApQhPhWglh8QgMgngGgnIgEgeQA5AWBCAWIAFCBIA0hvQA/ATBAANIAhB/IA8huQA2AIAuACIAaCNIA6iLQAsgBAhgEIBNBhIgFhrQAsgJAggKQBHB/ABACQACAJADinQAwgWAlgcIAcgWIgCAeQgEAngJAnQgdB+hFBWIgehKIgbCGQgpAjgxAXIgZiDQgDAmg1B6QgrAKgsAEIg8hxIglBxQg/gEg7gRg");
	this.shape_16.setTransform(55.7,26.9,1.112,1.112);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CA621E").s().p("AkpgJQgDgBABgEQABAAAAgBQAAAAABgBQABAAAAAAQABAAABAAQCXAzCTgEQCQgFCUhNQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQiFBWiiAKQgUACgWAAQiLAAh4g9g");
	this.shape_17.setTransform(58.7,58.1,1.112,1.112);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#818181").s().p("AAAFXQhBgdAAhdIAAo+IAUAAIAAI+QAABPA1AZIAAAAQAcALAcgDIACAUIgQABQgZAAgZgLg");
	this.shape_18.setTransform(-47.5,-29.2);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.2,-73.3,169.6,137.4);


(lib.orange_legs = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040404").s().p("AkDAhQCMhyDLA1QBmAaBKAwg");
	this.shape.setTransform(145.8,231.4,1.112,1.112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#959595").s().p("AguAVIAQgyIBNAXIgMAkg");
	this.shape_1.setTransform(131.3,217.3,1.112,1.112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#959595").s().p("AguASIAJgwIBTAMIgKAxg");
	this.shape_2.setTransform(135.6,201.4,1.112,1.112);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#959595").s().p("AgugLIBegPIgEA0IhbABg");
	this.shape_3.setTransform(137.9,181.4,1.112,1.112);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#959595").s().p("Ag0AAIBpgkIAAAtIhlAcg");
	this.shape_4.setTransform(137.9,165.9,1.112,1.112);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#959595").s().p("AgvAZQgFgigFgeIBzAXIAAA4g");
	this.shape_5.setTransform(74.5,169.8,1.112,1.112);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#959595").s().p("AgvAbIABg6IBeAPIgFAwg");
	this.shape_6.setTransform(75.1,190.1,1.112,1.112);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#959595").s().p("AguAaQAHgiADgfIBSAcIgKAzg");
	this.shape_7.setTransform(73,208.2,1.112,1.112);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#959595").s().p("Ag0AaIATg4IBVgDQgKAjgMAfg");
	this.shape_8.setTransform(68.5,227.3,1.112,1.112);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#676767").s().p("AgygcIBlgdQgBA3gDAtIheAPQAAgygDgkg");
	this.shape_9.setTransform(138.1,173.5,1.112,1.112);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#676767").s().p("AgzA2QAKg7ACg7IBagCQgGBEgMBBg");
	this.shape_10.setTransform(137.1,191.8,1.112,1.112);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#676767").s().p("Ag9A1QAZgpAZhIIBSAJQgOAogTAoIhsAgg");
	this.shape_11.setTransform(127.4,226.6,1.112,1.112);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#676767").s().p("Ag0AjQAOgvAJgtIBSANQgMAzgPAzg");
	this.shape_12.setTransform(133.8,210,1.112,1.112);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#676767").s().p("AhLh2ICLAWIAFAxQAGA9ABBEIhoAlQgMh3gjh2g");
	this.shape_13.setTransform(135.3,152.5,1.112,1.112);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#676767").s().p("Ag6AsQAVgiAXg9IBSAHQgOAngNAZIhsAgg");
	this.shape_14.setTransform(64.3,236.1,1.112,1.112);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#676767").s().p("AgxAhQAGgoACg1IBaAFQgEA3gMA9g");
	this.shape_15.setTransform(74.4,200,1.112,1.112);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#676767").s().p("AgtA2QgBhBgGg5IBpAPQAAA4gEBCg");
	this.shape_16.setTransform(75,180.4,1.112,1.112);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#676767").s().p("Agbg3IBSAOQgLAygNAtIhVACQAQg1ALg6g");
	this.shape_17.setTransform(70.9,217.5,1.112,1.112);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#676767").s().p("AgnBDQgNhOgWhOICKAXIAFArQAFA1ACA8g");
	this.shape_18.setTransform(72.5,157.8,1.112,1.112);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#040404").s().p("Aj1hGQCohECyBwQBZA2A4BFg");
	this.shape_19.setTransform(85.1,249.1,1.112,1.112);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(56.7,139.2,118.2,120.8);


(lib.orange_leg_R_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040404").s().p("Aj1hGQCohECyBwQBZA2A4BFg");
	this.shape.setTransform(28.2,83.6,1.112,1.112,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#676767").s().p("AjIFaQAEgFAGgBQAdgbA5gjQAzAgAyABIg/A2IiGgTgAg3DwQAtglAlg0QA1AGAzALQglAxgmAmQg3gCg4gNgAA9BbQATgnAGgwIByAFQgGAyggA8QgxgQg0gMgABUgzQgNhCgeg1ICFAKQAWA6AGBBIh2gOgAAAjoQg3hJhRg7ICrAPQASAPASARQAqArAhA5QhJgJhJgGg");
	this.shape_1.setTransform(23.7,36.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#959595").s().p("AiYDvIAxgmQA6ANA0ABIg7A5QgxgCgzgfgAgTBwQAUggAMgdQA0ANAxAPIggAyQgygMgzgFgAAlghQADgTgEgnIB1APQAAAYgCAYIhygFgAgGjRQgTgkgWgaQBHAGBKAJQAOAaANAfIiDgKg");
	this.shape_2.setTransform(28.5,40.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,0,50.7,99.2);


(lib.orange_leg_R = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040404").s().p("AkDAhQCMhyDLA1QBmAaBKAwg");
	this.shape.setTransform(29,92.2,1.112,1.112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#959595").s().p("AguAVIAQgyIBNAXIgMAkg");
	this.shape_1.setTransform(14.5,78.1,1.112,1.112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#959595").s().p("AguASIAJgwIBTAMIgKAxg");
	this.shape_2.setTransform(18.7,62.2,1.112,1.112);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#959595").s().p("AgugLIBegPIgEA0IhbABg");
	this.shape_3.setTransform(21.1,42.2,1.112,1.112);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#959595").s().p("Ag0AAIBpgkIAAAtIhlAcg");
	this.shape_4.setTransform(21,26.7,1.112,1.112);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#676767").s().p("AgygcIBlgdQgBA3gDAtIheAPQAAgygDgkg");
	this.shape_5.setTransform(21.2,34.3,1.112,1.112);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#676767").s().p("AgzA2QAKg7ACg7IBagCQgGBEgMBBg");
	this.shape_6.setTransform(20.2,52.6,1.112,1.112);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#676767").s().p("Ag9A1QAZgpAZhIIBSAJQgOAogTAoIhsAgg");
	this.shape_7.setTransform(10.5,87.4,1.112,1.112);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#676767").s().p("Ag0AjQAOgvAJgtIBSANQgMAzgPAzg");
	this.shape_8.setTransform(16.9,70.8,1.112,1.112);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#676767").s().p("AhLh2ICLAWIAFAxQAGA9ABBEIhoAlQgMh3gjh2g");
	this.shape_9.setTransform(18.4,13.3,1.112,1.112);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58,97.3);


(lib.orange_leg_L_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040404").s().p("Aj1hGQCohECyBwQBZA2A4BFg");
	this.shape.setTransform(25.6,83.8,1.112,1.112,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#959595").s().p("AiYDvIAxgnQA6AOA0ABIg7A5QgxgBgzgggAgTBwQAUghAMgbQA0AMAxAPIggAyQgygMgzgFgAAlgiQADgRgEgnIB1ANQAAAZgCAYIhygGgAgGjRQgTgkgWgaQBHAGBKAIQAOAbANAfIiDgKg");
	this.shape_1.setTransform(25.9,40.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#676767").s().p("AjJFaQAFgFAGgBQAdgbA5gjQAzAgAyABIg/A2IiHgTgAg3DwQAuglAkg0QA1AGAzALQglAxgmAmQg2gCg5gNgAA9BbQATgnAFgwIBzAFQgGAyggA8QgxgQg0gMgABUgzQgNhCgfg1ICGAKQAWA6AGBBIh2gOgAAAjoQg3hJhRg7ICrAPQATAPARARQAqArAhA5QhKgJhIgGg");
	this.shape_2.setTransform(21.1,36.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,50.7,99.2);


(lib.orange_leg_L = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#959595").s().p("AgvAZQgFgigFgeIBzAXIAAA4g");
	this.shape.setTransform(17.8,22,1.112,1.112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#959595").s().p("AgvAbIABg6IBeAPIgFAwg");
	this.shape_1.setTransform(18.4,42.3,1.112,1.112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#959595").s().p("AguAaQAHgiADgfIBSAcIgKAzg");
	this.shape_2.setTransform(16.3,60.4,1.112,1.112);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#959595").s().p("Ag0AaIATg4IBVgDQgKAjgMAfg");
	this.shape_3.setTransform(11.8,79.5,1.112,1.112);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#676767").s().p("Ag6AsQAVgiAXg9IBSAHQgOAngNAZIhsAgg");
	this.shape_4.setTransform(7.6,88.3,1.112,1.112);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#676767").s().p("AgxAhQAGgoACg1IBaAFQgEA3gMA9g");
	this.shape_5.setTransform(17.7,52.2,1.112,1.112);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#676767").s().p("AgtA2QgBhBgGg5IBpAPQAAA4gEBCg");
	this.shape_6.setTransform(18.3,32.6,1.112,1.112);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#676767").s().p("Agbg3IBSAOQgLAygNAtIhVACQAQg1ALg6g");
	this.shape_7.setTransform(14.2,69.7,1.112,1.112);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#676767").s().p("AgnBDQgNhOgWhOICKAXIAFArQAFA1ACA8g");
	this.shape_8.setTransform(15.8,10,1.112,1.112);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#040404").s().p("Aj1hGQCohECyBwQBZA2A4BFg");
	this.shape_9.setTransform(3.7,92.2,1.112,1.112,-18.7,0,0,-20.9,-8);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58,94.8);


(lib.orange_hand01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D18B25").s().p("AAQgUIAAABQAAAFAHAGQgXAQgWANQAXgVAPgUg");
	this.shape.setTransform(26.9,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D18B25").s().p("AAKgbIAdgBQgnAkgmAVQAjgeANgag");
	this.shape_1.setTransform(36.5,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D18B25").s().p("AATgPIADABQAHAFAGADQgjAPgiAIQAigRATgPg");
	this.shape_2.setTransform(22.5,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D18B25").s().p("AARgUIAdAHQguAYgtAKQArgVATgUg");
	this.shape_3.setTransform(29.6,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D18B25").s().p("AA5ghIAVAaQhQAkhLAFQBTgbAzgog");
	this.shape_4.setTransform(7.9,21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D18B25").s().p("AA4ghIAWAZQhRAlhKAFQBTgbAygog");
	this.shape_5.setTransform(14.7,27.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D18B25").s().p("Aikg0ICzhSQAYB+B+AXIgYAfQhSgXgxhOIgnAdQAoBSBfAZIgnAWQhUgdgnhKIgYAXQAkA3BAAfIgXAaQh8g+glh9g");
	this.shape_6.setTransform(22.7,13.6);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,31.1);


(lib.orange_fingers_wave01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEgCIgQgVIAOAMQAHAIAGAGIAOATIgJACQgJgQgHgKg");
	this.shape.setTransform(19.9,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEgCIgQgVIAOAMQAHAIAGAGIAOASIgJADQgJgQgHgKg");
	this.shape_1.setTransform(24.2,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEgBIgQgWIAOAMQAHAIAGAHIAOASIgJACQgJgQgHgJg");
	this.shape_2.setTransform(28.7,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEgCIgVgQIAQAIQAJAFAIAFIASAOIgIAFQgMgOgKgHg");
	this.shape_3.setTransform(20.7,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEgCIgVgQIAQAIQAJAGAIAEIASAOIgIAFQgMgNgKgIg");
	this.shape_4.setTransform(24.5,8.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEgCIgVgQIAQAIQAJAGAIAEIASAOIgIAFQgMgNgKgIg");
	this.shape_5.setTransform(8.6,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEgCIgVgQIAQAIQAJAFAIAFIASAOIgIAFQgMgOgKgHg");
	this.shape_6.setTransform(14.4,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEgCIgVgPIAQAHQAJAGAIAEIASAOIgIAFQgMgNgKgIg");
	this.shape_7.setTransform(18.5,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag8AzQAxgbAxgDQBnAEAMAeQAKAKg0gCIgJgBQgYgCgYAEQgWAEgUAGQgUAGgjAPQgCgYgPgUgAhfAGQAxgaAwgQQBkgNAOAcQAPAOhgAMQgwALgyAeIgggogAiagPQAzgqAwgTQBjggANAZQAPAOheAhQgyAUgwAiQgRgSgRgPg");
	this.shape_8.setTransform(15.5,12);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,21.6);


(lib.orange_finger_waves02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADAEIgegIIAAgJIAVAJQAJADAJAFIAQAKIgZgKg");
	this.shape.setTransform(6.2,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADAEQgMgEgSgEIABgJIAVAIQAIAEAJAEIAQAKIgZgJg");
	this.shape_1.setTransform(5.4,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AADAEQgLgEgSgDIgBgKIAWAIQAIAEAKAEIAPALIgZgKg");
	this.shape_2.setTransform(3.1,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AADAFQgKgHgQgIIACgJIATANIAOANIAMANIgVgPg");
	this.shape_3.setTransform(11.9,7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AADAFQgKgHgQgIIACgJIATANQAGAGAIAHIAMANIgVgPg");
	this.shape_4.setTransform(11.5,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AADAFQgKgHgQgIIACgJIATANQAGAGAIAHIAMANIgVgPg");
	this.shape_5.setTransform(19.8,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AADAFQgKgHgQgJIACgIIASANQAHAGAIAHIAMANIgVgPg");
	this.shape_6.setTransform(20.2,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AADAFQgKgHgQgJIACgIIASANQAHAGAIAHIAMANIgVgPg");
	this.shape_7.setTransform(19.1,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAVBzQAVg4AFg2QAFhjARALQAdAFgDBpQgFAzgaA8QgUgMgXgLgAgUBEQAOg4gCgxQgNhhARALQAdAGAPBjQgBAygOA4QgZgKgUgKgAhIA/QAEgmAAgXQAAgTgCgWQgDgZgIgVIgEgJQgRgxAOAGQAfAEAhBiQALAvgNA2QgXgIgXAFg");
	this.shape_8.setTransform(9.6,13.9);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.7,27.8);


(lib.orange_eyesClosed = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADSgRQjjgnjABmQC/iMDkBNg");
	this.shape.setTransform(26.9,64.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADSgRQjjgnjABmQC/iMDkBNg");
	this.shape_1.setTransform(82.8,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AizBKQgGgFAEgGQA6hSBngiQBcggBsAPQAEABAAAFQgBAFgEAAQhsgMhWAlQhLAfhOBMQgDADgDAAQgCAAgDgCg");
	this.shape_2.setTransform(78.9,33.6,1.112,1.112);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ACuBJQhSh0hYgGQgugEgxAYQggAQg1AlQgEADgCgEQgDgEADgDQAngsAxgZQA4gcAzAIQBeAOBNB+QACAFgEADIgDABQgDAAgCgDg");
	this.shape_3.setTransform(24.2,35.8,1.112,1.112);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB7C22").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBNAAA4A3QA3A4AABMQAABOg3A3Qg4A2hNAAQhNAAg3g2g");
	this.shape_4.setTransform(82.4,54.6,1.112,1.112);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB7C22").s().p("AiECFQg4g3AAhOQAAhNA4g4QA3g3BNAAQBOAAA3A3QA4A4AABNQAABOg4A3Qg3A4hOAAQhNAAg3g4g");
	this.shape_5.setTransform(26.8,64.2,1.112,1.112);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9A6218").s().p("AiICJQg5g5ABhQQgBhPA5g5QA5g5BPAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAQhPAAg5g5g");
	this.shape_6.setTransform(80.9,56.2,1.112,1.112);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9A6218").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA7g7BRABQBTgBA6A7QA7A6AABSQAABTg7A6Qg6A7hTgBQhRABg7g7g");
	this.shape_7.setTransform(25.7,65.4,1.112,1.112);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.4,25.2,100.4,62.5);


(lib.orange_eyes = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AizBKQgGgFAEgGQA6hSBngiQBcggBsAPQAEABAAAFQgBAFgEAAQhsgMhWAlQhLAfhOBMQgDADgDAAQgCAAgDgCg");
	this.shape.setTransform(78.9,33.6,1.112,1.112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACuBJQhSh0hYgGQgugEgxAYQggAQg1AlQgEADgCgEQgDgEADgDQAngsAxgZQA4gcAzAIQBeAOBNB+QACAFgEADIgDABQgDAAgCgDg");
	this.shape_1.setTransform(20.6,8.5,1.112,1.112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnAoQgQgRAAgXQAAgWAQgRQARgQAWgBQAXABARAQQAQARAAAWQAAAXgQARQgRAQgXAAQgWAAgRgQg");
	this.shape_2.setTransform(95.5,48.8,1.112,1.112);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBEBEB").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBNAAA4A3QA3A4AABMQAABOg3A3Qg4A2hNAAQhNAAg3g2g");
	this.shape_3.setTransform(82.4,54.6,1.112,1.112);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgqArQgRgSAAgZQAAgXARgTQATgRAXAAQAYAAATARQARATAAAXQAAAZgRASQgTARgYAAQgXAAgTgRg");
	this.shape_4.setTransform(40.2,59.7,1.112,1.112);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBEBEB").s().p("AiECFQg4g3AAhOQAAhNA4g4QA3g3BNAAQBOAAA3A3QA4A4AABNQAABOg4A3Qg3A4hOAAQhNAAg3g4g");
	this.shape_5.setTransform(26.8,64.2,1.112,1.112);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9A6218").s().p("AiICJQg5g5ABhQQgBhPA5g5QA5g5BPAAQBQAAA5A5QA5A5AABPQAABQg5A5Qg5A5hQAAQhPAAg5g5g");
	this.shape_6.setTransform(80.9,56.2,1.112,1.112);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9A6218").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA7g7BRABQBTgBA6A7QA7A6AABSQAABTg7A6Qg6A7hTgBQhRABg7g7g");
	this.shape_7.setTransform(25.7,65.4,1.112,1.112);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103.3,87.7);


(lib.orange_body_legs = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA621E").s().p("AAbAeQgGgEgIgLQgJgNgEgCQgPgOgWgFQgFgBABgFQABgGAFABQAbAAAUAOQAeAVAAARQAAAFgFADIgFABIgFgBg");
	this.shape.setTransform(174.8,104.8,1.112,1.112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CA621E").s().p("AAUA6QgGgJgEgSIgHgcQgKgcgVgbQgDgDADgDQADgDADADQAWAVARAgQATAigGAcQgBADgEABQgDAAgCgDg");
	this.shape_1.setTransform(176,101.1,1.112,1.112);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA621E").s().p("AACAdQgPgFgIgKQgDgEAEgEQADgEAFABQAEABAIAEIAGAEQgCgKgEgFIgGgTQgBgDADgDQADgCABADQALAPAFAKQAHANAAAGQgBANgMAAIgIgBg");
	this.shape_2.setTransform(178.1,82.2,1.112,1.112);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CA621E").s().p("AgPBBQgbgpAGhAQAAgEAEAAQAEAAAAAEQACAfAGASQADAOAGAMQAKgpAZg7QADgGAGADQAGADgBAGQgDAVgQAmQgQAngDAWQAAAHgFACIgCAAQgFAAgDgFg");
	this.shape_3.setTransform(46.5,116.1,1.112,1.112);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CA621E").s().p("AgCAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_4.setTransform(42.8,77.9,1.112,1.112);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CA621E").s().p("AgSBEQgqg+AShKQABgFAFABQAFABAAAFIACAiQAAAWACAKQAEAVANAXIATgfIAdgrQADgEAEACQAFADgDAEIgwBdQgDAFgGAAQgFAAgDgFg");
	this.shape_5.setTransform(30.7,108.1,1.112,1.112);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D18B25").s().p("Ak/CpQAegvAqgnIAkgdIi8CRQA9mLF2i1QB1g4CHgcQBEgOAsgCIm5KGQhmAmhyCMQg5BGgkA9QhBiiBgiTg");
	this.shape_6.setTransform(53.6,82,1.112,1.112);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D18B25").s().p("AoXGsQhphTg5htQg8hxAAh7QAAh6A8hxQA5htBphTQDeiyE5AAQE6AADeCyQBpBTA5BtQA8BxAAB6QAAB7g8BxQg5BthpBTQjeCyk6AAQk5AAjeiyg");
	this.shape_7.setTransform(101.5,96.2,1.112,1.112);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D18B25").s().p("ADiEwQhkh6hZgiImDo3IBiAOQB2AYBnAyQFJCfA1FbIilh/IAgAaQAlAhAaApQBUCBg5CPQggg2gyg+g");
	this.shape_8.setTransform(156.9,78,1.112,1.112);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.1,28.7,187,135);


(lib.orange_arm_R_bend02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D18B25").s().p("AihCbIAAk1IFCAAIgaA/IjKADIAHBHIBUgeIAABNIhGAAIAOAtIAvAAIgiBQg");
	this.shape.setTransform(88.4,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CA621E").ss(9.1,1).p("AjQi7QATCsBUCVQBXCbDikj");
	this.shape_1.setTransform(56.2,18.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(30.8,-4.5,73.9,46.7);


(lib.orange_arm_R_bend01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D18B25").s().p("AiZhzIAkAAIApCxIA9gUIggi5IAsgMIAbCxIAkgVIgUiUIA5gIIA5D+IkPA5g");
	this.shape.setTransform(72.5,64.3,1.112,1.112,176.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CA621E").ss(9.1,1).p("AiykSQATCsBUCVQBVCbCpBJ");
	this.shape_1.setTransform(53.2,27.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(30.8,-4.5,59.6,86.8);


(lib.orange_arm_R = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CA621E").ss(9.1,1).p("AAakSIAKA5QAKBHAABHQACDehdCB");
	this.shape.setTransform(32.3,30.7,1.112,1.112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D18B25").s().p("AiZhzIAkAAIApCxIA9gUIggi5IAsgMIAbCxIAkgVIgUiUIA5gIIA5D+IkPA5g");
	this.shape_1.setTransform(17.2,55.8,1.112,1.112);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-4.5,42.3,77.8);


(lib.orange_arm_L = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CA621E").ss(9.1,1).p("AgzkSIAZA0QAbBCATBEQA+DWg5CV");
	this.shape.setTransform(14.2,30.7,1.112,1.112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D18B25").s().p("AhthaIAaAAIAdCLIAsgQIgXiRIAggKIASCLIAagQIgOh0IAogHIApDIIjBAtg");
	this.shape_1.setTransform(12.3,60,1.112,1.112);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-4.5,33.2,78.2);


(lib.tint = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.302)").s().p("EhhpA6lMAAAh1KMDDTAAAMAAAB1Kg");
	this.shape.setTransform(625,375);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1250,750);


(lib.shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA9CsQmbgCkRgxQkSgygChHQgChJD8gyQD9gxFkAAQFjAAD8AxQD8AyBCBXQBCBYjuAkQjkAjmGAAIgigBg");
	this.shape.setTransform(90,17.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180.1,34.6);


(lib.mc_screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AE3OMIuegFIgGxsIABjlIACnEITPAFIAJcYIk3gDg");
	mask.setTransform(62.2,91.2);

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQDaB2D1gmQCtgeCThhQAlgZAngTQC1hZCuBYQAnAUAjAcQBrBTCBAiQArALAugMQA1gNAvgb");
	this.shape.setTransform(67.8,142.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAbQDUBPD1gYQAfgDAegFQCKgXB6hCQAmgVAogQQBIgeBHgHQBtgLBnAtQAnARAkAYQBvBABmAdQANAEANAEQArAKAtgJQA1gJAvgU");
	this.shape_1.setTransform(67.8,142);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQDOAoD2gJQAegBAegDQCLgKB5g2QAngQApgOQBIgZBIgGQBvgKBlAlQAoAOAjATQByAyBnAcQANADANAEQAqAKAugGQA0gFAvgO");
	this.shape_2.setTransform(67.8,142.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAVQDIABD2AGQAeAAAeAAQCLABB6goQAogNApgKQBJgTBHgGQBxgKBjAdQAqALAjAPQB1AjBnAaQAMAEAOADQAqAKAtgCQAzgCAwgH");
	this.shape_3.setTransform(67.8,143);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYARQDCgkD3ATQAeACAeADQCLANB6gcQAogIAqgIQBKgNBHgGQBzgKBhAWQAqAHAkALQB3AVBnAZQANADANADQArAKAtABQAyACAwgB");
	this.shape_4.setTransform(67.8,143.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAKQC8hMD4AlQAdADAeAGQCMAXB5gPQAqgEAqgFQBKgIBIgFQB0gKBgAOQArAEAkAGQB5AJBoAVQANADANADQArAKAsAFQAyAFAwAG");
	this.shape_5.setTransform(67.8,144.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQC2hzD4A0QAdAFAeAIQCMAjB6gEQArAAAqgBQBLgDBHgDQB2gJBeAGQAsABAlABQB7gFBoAUQAOACAMADQAsAKAsAIQAxAJAwAM");
	this.shape_6.setTransform(67.8,143.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAmQCwiZD5BCQAdAHAeALQCMAuB6AJQArAEArACQBMADBHgFQB4gJBcgBQAtgDAlgCQB+gSBoASQANACANADQArAKAsALQAwANAxAS");
	this.shape_7.setTransform(67.8,141.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYA0QCqjAD5BRQAdAJAeANQCMA7B6AVQAtAJAqAEQBNAIBHgEQB6gIBbgKQAugFAkgHQCBggBoAQQAOACANADQArAKAsAOQAvARAxAY");
	this.shape_8.setTransform(67.8,140.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYBCQC2kCEiCWQEiCTDSgNQDTgNBsgoQBsgnBpAPQBoAQBpBD");
	this.shape_9.setTransform(67.8,139.4);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 2 copy 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQDaB2D1gmQCtgeCThhQAlgZAngTQC1hZCuBYQAnAUAjAcQBrBTCBAiQArALAugMQA1gNAvgb");
	this.shape_10.setTransform(67.8,124.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAbQDUBOD1gXQAfgEAegFQCKgWB6hCQAmgVAogRQBIgeBHgGQBtgLBnAtQAnARAkAXQBvBBBmAdQANAEANADQArALAtgJQA1gJAvgU");
	this.shape_11.setTransform(67.8,124.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQDOAoD2gJQAegCAegCQCLgLB5g1QAngRApgNQBIgZBIgGQBvgLBlAmQAoANAjAUQByAyBnAbQANAEANADQAqALAugGQA0gFAvgO");
	this.shape_12.setTransform(67.8,124.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAVQDIABD2AGQAeAAAeABQCLABB6gpQAogMApgLQBJgTBHgGQBxgKBjAdQAqALAjAPQB1AkBnAaQAMADAOADQAqALAtgDQAzgBAwgI");
	this.shape_13.setTransform(67.8,124.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYARQDCgkD3ATQAeACAeADQCLANB6gcQAogIAqgIQBKgNBHgGQBzgKBhAWQAqAHAkALQB3AVBnAZQANADANADQArAKAtABQAyACAwgB");
	this.shape_14.setTransform(67.8,124.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAKQC8hMD4AlQAdAEAeAFQCMAXB5gPQAqgEAqgFQBKgIBIgFQB0gKBgAOQArAEAkAGQB5AJBoAVQANADANAEQArAJAsAFQAyAFAwAG");
	this.shape_15.setTransform(67.8,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQC2hyD4AzQAdAGAeAHQCMAjB6gEQArAAAqgBQBLgDBHgDQB2gJBeAGQAsABAlACQB7gGBoAUQAOACAMAEQAsAJAsAIQAxAJAwAM");
	this.shape_16.setTransform(67.8,123.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAmQCwiaD5BDQAdAHAeALQCMAuB6AJQArAEArACQBMACBHgEQB4gJBcgCQAtgCAlgDQB+gRBoASQANACANADQArAKAsALQAwANAxAS");
	this.shape_17.setTransform(67.8,121.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYA0QCqjAD5BRQAdAJAeANQCMA7B6AVQAtAJAqAEQBNAIBHgEQB6gIBbgKQAugFAkgHQCBggBoAQQAOACANADQArAJAsAPQAvAQAxAZ");
	this.shape_18.setTransform(67.8,120.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYBCQC2kCEiCWQEiCTDSgNQDTgNBsgoQBsgnBpAPQBoAQBpBD");
	this.shape_19.setTransform(67.8,118.4);

	this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	// Layer 2 copy 3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQDaB2D1gmQCtgeCThhQAlgZAngTQC1hZCuBYQAnAUAjAcQBrBTCBAiQArALAugMQA1gNAvgb");
	this.shape_20.setTransform(67.8,104.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAbQDUBPD1gYQAfgDAegFQCKgXB6hCQAmgVAogRQBIgeBHgGQBtgLBnAtQAnARAkAYQBvBABmAdQANAEANAEQArAKAtgJQA1gJAvgU");
	this.shape_21.setTransform(67.8,104.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQDOAoD2gJQAegCAegCQCLgLB5g1QAngRApgNQBIgZBIgGQBvgLBlAlQAoAOAjAUQByAyBnAbQANAEANADQAqALAugGQA0gFAvgO");
	this.shape_22.setTransform(67.8,104.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAVQDIABD2AGQAeAAAeAAQCLABB6goQAogNApgKQBJgTBHgGQBxgKBjAdQAqALAjAPQB1AjBnAaQAMAEAOADQAqAKAtgCQAzgCAwgH");
	this.shape_23.setTransform(67.8,105);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYARQDCgkD3ATQAeACAeADQCLANB6gcQAogIAqgIQBKgOBHgFQBzgKBhAWQAqAHAkALQB3AVBnAYQANAEANADQArAKAtABQAyACAwgB");
	this.shape_24.setTransform(67.8,105.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAKQC8hMD4AlQAdAEAeAFQCMAXB5gPQAqgEAqgFQBKgIBIgFQB0gKBgAOQArAEAkAGQB5AKBoAVQANACANAEQArAKAsAEQAyAGAwAF");
	this.shape_25.setTransform(67.8,106.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQC2hzD4A0QAdAFAeAIQCMAjB6gEQArAAAqgBQBLgDBHgDQB2gJBeAGQAsABAlABQB7gFBoAUQAOACAMADQAsAKAsAIQAxAJAwAM");
	this.shape_26.setTransform(67.8,104.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAmQCwiaD5BDQAdAHAeALQCMAuB6AJQArAEArACQBMACBHgEQB4gJBcgBQAtgDAlgDQB+gRBoASQANACANADQArAKAsALQAwANAxAS");
	this.shape_27.setTransform(67.8,103.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYA0QCqjAD5BRQAdAJAeANQCMA7B6AVQAtAJAqAFQBNAIBHgFQB6gIBbgJQAugGAkgHQCBggBoAQQAOACANADQArAKAsAOQAvARAxAY");
	this.shape_28.setTransform(67.8,101.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYBCQC2kCEiCWQEiCTDSgNQDTgNBsgoQBsgnBpAPQBoAQBpBD");
	this.shape_29.setTransform(67.8,100.4);

	this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	// Layer 2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQDaB2D1gmQCtgeCThhQAlgZAngTQC1hZCuBYQAnAUAjAcQBrBTCBAiQArALAugMQA1gNAvgb");
	this.shape_30.setTransform(67.8,65.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAbQDUBPD1gYQAfgDAegFQCKgXB6hCQAmgVAogQQBIgeBHgHQBtgLBnAtQAnARAkAYQBvBABmAdQANAEANAEQArAKAtgJQA1gJAvgU");
	this.shape_31.setTransform(67.8,65.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQDOAoD2gJQAegBAegDQCLgKB5g2QAngQApgOQBIgZBIgGQBvgKBlAlQAoAOAjATQByAyBnAcQANADANAEQAqAKAugGQA0gFAvgO");
	this.shape_32.setTransform(67.8,66.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAVQDIABD2AGQAeAAAeAAQCLABB6goQAogNApgKQBJgTBHgGQBxgKBjAdQAqALAjAPQB1AjBnAaQAMAEAOADQAqAKAtgCQAzgCAwgH");
	this.shape_33.setTransform(67.8,66.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYARQDCgkD3ATQAeACAeADQCLANB6gcQAogIAqgIQBKgNBHgGQBzgKBhAWQAqAHAkALQB3AVBnAZQANADANADQArAKAtABQAyACAwgB");
	this.shape_34.setTransform(67.8,67.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAKQC8hMD4AlQAdADAeAGQCMAXB5gPQAqgEAqgFQBKgIBIgFQB0gKBgAOQArAEAkAGQB5AJBoAVQANADANADQArAKAsAFQAyAFAwAG");
	this.shape_35.setTransform(67.8,68.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQC2hzD4A0QAdAFAeAIQCMAjB6gEQArAAAqgBQBLgDBHgDQB2gJBeAGQAsABAlABQB7gFBoAUQAOACAMADQAsAKAsAIQAxAJAwAM");
	this.shape_36.setTransform(67.8,66.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAmQCwiZD5BCQAdAHAeALQCMAuB6AJQArAEArACQBMADBHgFQB4gJBcgBQAtgDAlgCQB+gSBoASQANACANADQArAKAsALQAwANAxAS");
	this.shape_37.setTransform(67.8,65.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYA0QCqjAD5BRQAdAJAeANQCMA7B6AVQAtAJAqAEQBNAIBHgEQB6gIBbgKQAugFAkgHQCBggBoAQQAOACANADQArAKAsAOQAvARAxAY");
	this.shape_38.setTransform(67.8,64.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYBCQC2kCEiCWQEiCTDSgNQDTgNBsgoQBsgnBpAPQBoAQBpBD");
	this.shape_39.setTransform(67.8,63.2);

	this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQDaB2D1gmQCtgeCThhQAlgZAngTQC1hZCuBYQAnAUAjAcQBrBTCBAiQArALAugMQA1gNAvgb");
	this.shape_40.setTransform(67.8,48.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAbQDUBOD1gXQAfgEAegFQCKgWB6hCQAmgVAogRQBIgeBHgGQBtgLBnAtQAnARAkAXQBvBBBmAdQANAEANADQArALAtgJQA1gJAvgU");
	this.shape_41.setTransform(67.8,47.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQDOAoD2gJQAegCAegCQCLgLB5g1QAngRApgNQBIgZBIgGQBvgLBlAmQAoANAjAUQByAyBnAbQANAEANADQAqALAugGQA0gFAvgO");
	this.shape_42.setTransform(67.8,48);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAVQDIABD2AGQAeAAAeABQCLABB6gpQAogMApgLQBJgTBHgGQBxgKBjAdQAqALAjAPQB1AkBnAaQAMADAOADQAqALAtgDQAzgBAwgI");
	this.shape_43.setTransform(67.8,48);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYARQDCgkD3ATQAeACAeADQCLANB6gcQAogIAqgIQBKgNBHgGQBzgKBhAWQAqAHAkALQB3AVBnAZQANADANADQArAKAtABQAyACAwgB");
	this.shape_44.setTransform(67.8,48.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAKQC8hMD4AlQAdAEAeAFQCMAXB5gPQAqgEAqgFQBKgIBIgFQB0gKBgAOQArAEAkAGQB5AJBoAVQANADANAEQArAJAsAFQAyAFAwAG");
	this.shape_45.setTransform(67.8,48.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQC2hyD4AzQAdAGAeAHQCMAjB6gEQArAAAqgBQBLgDBHgDQB2gJBeAGQAsABAlACQB7gGBoAUQAOACAMAEQAsAJAsAIQAxAJAwAM");
	this.shape_46.setTransform(67.8,47.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAmQCwiaD5BDQAdAHAeALQCMAuB6AJQArAEArACQBMACBHgEQB4gJBcgCQAtgCAlgDQB+gRBoASQANACANADQArAKAsALQAwANAxAS");
	this.shape_47.setTransform(67.8,45.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYA0QCqjAD5BRQAdAJAeANQCMA7B6AVQAtAJAqAEQBNAIBHgEQB6gIBbgKQAugFAkgHQCBggBoAQQAOACANADQArAJAsAPQAvAQAxAZ");
	this.shape_48.setTransform(67.8,43.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYBCQC2kCEiCWQEiCTDSgNQDTgNBsgoQBsgnBpAPQBoAQBpBD");
	this.shape_49.setTransform(67.8,42.2);

	this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).wait(1));

	// Layer 2
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQDaB2D1gmQCtgeCThhQAlgZAngTQC1hZCuBYQAnAUAjAcQBrBTCBAiQArALAugMQA1gNAvgb");
	this.shape_50.setTransform(67.8,28.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAbQDUBPD1gYQAfgDAegFQCKgXB6hCQAmgVAogRQBIgeBHgGQBtgLBnAtQAnARAkAYQBvBABmAdQANAEANAEQArAKAtgJQA1gJAvgU");
	this.shape_51.setTransform(67.8,28.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQDOAoD2gJQAegCAegCQCLgLB5g1QAngRApgNQBIgZBIgGQBvgLBlAlQAoAOAjAUQByAyBnAbQANAEANADQAqALAugGQA0gFAvgO");
	this.shape_52.setTransform(67.8,28.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAVQDIABD2AGQAeAAAeAAQCLABB6goQAogNApgKQBJgTBHgGQBxgKBjAdQAqALAjAPQB1AjBnAaQAMAEAOADQAqAKAtgCQAzgCAwgH");
	this.shape_53.setTransform(67.8,28.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYARQDCgkD3ATQAeACAeADQCLANB6gcQAogIAqgIQBKgOBHgFQBzgKBhAWQAqAHAkALQB3AVBnAYQANAEANADQArAKAtABQAyACAwgB");
	this.shape_54.setTransform(67.8,29.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAKQC8hMD4AlQAdAEAeAFQCMAXB5gPQAqgEAqgFQBKgIBIgFQB0gKBgAOQArAEAkAGQB5AKBoAVQANACANAEQArAKAsAEQAyAGAwAF");
	this.shape_55.setTransform(67.8,29.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAYQC2hzD4A0QAdAFAeAIQCMAjB6gEQArAAAqgBQBLgDBHgDQB2gJBeAGQAsABAlABQB7gFBoAUQAOACAMADQAsAKAsAIQAxAJAwAM");
	this.shape_56.setTransform(67.8,28.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYAmQCwiaD5BDQAdAHAeALQCMAuB6AJQArAEArACQBMACBHgEQB4gJBcgBQAtgDAlgDQB+gRBoASQANACANADQArAKAsALQAwANAxAS");
	this.shape_57.setTransform(67.8,27);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYA0QCqjAD5BRQAdAJAeANQCMA7B6AVQAtAJAqAFQBNAIBHgFQB6gIBbgJQAugGAkgHQCBggBoAQQAOACANADQArAKAsAOQAvARAxAY");
	this.shape_58.setTransform(67.8,25.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(4,1,0,3).p("AtYBCQC2kCEiCWQEiCTDSgNQDTgNBsgoQBsgnBpAPQBoAQBpBD");
	this.shape_59.setTransform(67.8,24.2);

	this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50}]}).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// base
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5ECED2").s().p("AE3OMIuegFIgGxsIABjlIACnEITPAFIAJcYIk3gDg");
	this.shape_60.setTransform(62.2,91.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.5,182.4);


(lib.mc_blinkinglights = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#772A65").s().p("AgxBNIAAiZIBjAAIAACZg");
	this.shape.setTransform(40.3,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AFCC").s().p("AgxBMIAAiYIBjAAIAACYg");
	this.shape_1.setTransform(22.3,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3BCC00").s().p("AgxBNIAAiZIBjAAIAACZg");
	this.shape_2.setTransform(5.1,29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgxBNIAAiZIBjAAIAACZg");
	this.shape_3.setTransform(22.3,29.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCC00").s().p("AgxBMIAAiYIBjAAIAACYg");
	this.shape_4.setTransform(5.1,7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808080").s().p("AgxBMIAAiYIBjAAIAACYg");
	this.shape_5.setTransform(40.3,7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#772A65").s().p("AgxBMIAAiYIBjAAIAACYg");
	this.shape_6.setTransform(5.1,7.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#808080").s().p("AgxBNIAAiZIBjAAIAACZg");
	this.shape_7.setTransform(5.1,29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("AgxBMIAAiYIBjAAIAACYg");
	this.shape_8.setTransform(5.1,7.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AFCC").s().p("AgxBNIAAiZIBjAAIAACZg");
	this.shape_9.setTransform(5.1,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4,p:{x:5.1}},{t:this.shape_3,p:{x:22.3}},{t:this.shape_2,p:{x:5.1}},{t:this.shape_1,p:{x:22.3}},{t:this.shape}]}).to({state:[{t:this.shape_7,p:{x:5.1}},{t:this.shape_4,p:{x:22.3}},{t:this.shape_1,p:{x:40.3}},{t:this.shape_3,p:{x:40.3}},{t:this.shape_6,p:{x:5.1}},{t:this.shape_2,p:{x:22.3}}]},3).to({state:[{t:this.shape_7,p:{x:22.3}},{t:this.shape_4,p:{x:40.3}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_6,p:{x:22.3}},{t:this.shape_2,p:{x:40.3}}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.4,37.6);


(lib.bubble = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D8D8").s().p("Ag0AFQgEgBACgEIABAAIACgBIACAAIACgBIBLgDIAOAAQAHABAGADQgFACgIABIgFAAIgIABIhQADg");
	this.shape.setTransform(62.6,100.6,0.121,0.121);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D8D8").s().p("AgyAFIgBAAQgFgBACgEIABAAIABgBIABAAIABAAIAAgBIADAAIADAAIBIgDIAOABQAIAAAFADQgIABgNACIgFABIhPADg");
	this.shape_1.setTransform(64.3,101.3,0.121,0.121);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AgzAFQgFgBACgEIABAAIABgBIABAAIABAAIABgBIAagBIAYgBIAbgBIAOAAQAIABAFADQgJACgMABIgFABIhQADg");
	this.shape_2.setTransform(66.1,101.9,0.121,0.121);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D8D8D8").s().p("AgxAQQgEgBAAgEIABgCIABgBIABAAIABgBIABAAIBKgTQAUgFAIACQgFAFgHADIgHACIgGACIhGASIgDABIgCAAIgBAAg");
	this.shape_3.setTransform(67.8,102.1,0.121,0.121);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D8D8D8").s().p("AgvAZIAAgDIACgCIABAAIBDgnIAMgGQAHgDAGAAQgDAGgGAFIgIAFIgDACIg5AgIgJAFIgBABIgBAAIgBAAIgBABIgBAAQgDAAgBgEgAgoAcIABgBIgBAAg");
	this.shape_4.setTransform(69.7,102.4,0.121,0.121);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D8D8D8").s().p("AgqAgIAAgDIABgBIAAgBIAAAAIABgBIABgBIA7guIALgIQAGgEAGgBQgEAIgKAKIgDACIgVAQQgJAKgKAGIgQANIgEADIgCAAIAAAAIgBABIgCAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBgAgjAhIAAABIABgBg");
	this.shape_5.setTransform(71.6,102.1,0.121,0.121);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgCIABgBIAAAAIABgBIAAABIAAgBIAAAAIABgBIADgCIA3gsQAQgMAJgBQgFAHgJAJIgEAEIg7AvIgCABIAAAAIgBAAIAAABIgBAAIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBg");
	this.shape_6.setTransform(73.6,101.7,0.121,0.121);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgCIACgCIABgBIADgCIAkgcIAUgQQAPgMAJgBQgDAGgFAGIgKAIIg7AvIgBABIgBAAIgBAAIAAABIgBAAIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBgAgoAbIAAAAIAAAAg");
	this.shape_7.setTransform(75.8,101.1,0.121,0.121);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgCIACgCIABgBIADgCIA3gsQAQgMAJgBQgDAGgFAFIgGAFIgEAEIg4AtIgFADIAAAAIgBAAIAAABIgBAAIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBg");
	this.shape_8.setTransform(77.6,100.7,0.121,0.121);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8D8D8").s().p("AAXAkIgGgHIgCgCIAAgBIgQgVIgfgoIAAgBIAAgBIgBAAIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIACAAIACABIABABIACACIACACIArA5IAIALQAEAHAAAGQgFgCgGgGgAgfgjIAAgBIgBAAg");
	this.shape_9.setTransform(144.9,147.7,0.121,0.121);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D8D8D8").s().p("AAWAiIgIgIIgug9IAAgBIgBAAIAAgBIAAAAIAAgBQAAABgBAAQAAAAAAAAQAAAAAAgBQABgBAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIACAAIABAAIABABIAAAAIABABIABAAIABACIAtA7IAIALQAEAHABAGQgGgCgHgIg");
	this.shape_10.setTransform(143.5,146,0.121,0.121);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D8D8D8").s().p("AAXAkIgCgDIgHgHIgug9IgBgBIAAgBIAAAAIgBAAIAAgBIAAgCQABgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIADAAIACABIAAAAIAAABIABAAIAvA9IAIALQAEAHABAGQgHgCgFgGg");
	this.shape_11.setTransform(142.2,144.2,0.121,0.121);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D8D8D8").s().p("AAXAkIgCgDIgHgHIgrg5IgCgDIgBgBIAAgBIgBgBIAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIACAAIACABIAAAAIADADIAtA7IAIALQAEAHABAGQgHgCgFgGg");
	this.shape_12.setTransform(140.7,142.3,0.121,0.121);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D8D8D8").s().p("AAXAkIgGgHIgCgCIgBgBIgPgVIgQgTIgPgVIAAgBIAAAAIgBgBIAAgBQAAABAAAAQAAAAAAAAQAAAAAAgBQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIACAAIACABIABABIABACIADACIArA5IAIALQAEAGAAAHQgFgCgGgGg");
	this.shape_13.setTransform(139.1,140.4,0.121,0.121);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D8D8D8").s().p("AAWAiIgIgIIgrg5IgDgEIgBgBIAAAAIAAgBIAAAAIAAgCQAAgDACgBIADAAIABAAIABABIAAAAIABABIABAAIAuA9IAIALQAEAHABAGQgGgCgHgIg");
	this.shape_14.setTransform(137.8,138.4,0.121,0.121);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D8D8D8").s().p("AAXAkIgFgGIgDgEIgvg9IgBgBIAAAAIAAgBIAAAAIgBgBIAAgCQABAAAAgBQAAgBABAAQAAgBABAAQAAAAAAAAIADAAIACABIABABIABACIADACIArA5IAIALQAEAHABAGQgGgCgGgGg");
	this.shape_15.setTransform(136.3,136.6,0.121,0.121);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D8D8D8").s().p("AAUAgIgGgGIgug9IAAgBIgBgBIAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIADAAIACABIAAACIACABIAtA7IAIALQAEAHABAGQgHgEgIgIg");
	this.shape_16.setTransform(135,134.8,0.121,0.121);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D8D8D8").s().p("AAXAkIgDgEIgGgGIgrg4IgCgEIgBgBIAAgBIgBgBIAAgBQgBABAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIADAAIACACIAAABIACABIAtA7IAIALQAEAGABAHQgHgCgFgGg");
	this.shape_17.setTransform(133.7,133.2,0.121,0.121);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D8D8D8").s().p("AAXAkIgEgFIgFgFIgPgVIgfgoIAAgBIgBAAIAAgBIAAAAIAAgDQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAEAAIABABIABAAIAAAAIABABIAAABIACAEIAsA4IAIALQAEAHABAGQgHgDgFgFg");
	this.shape_18.setTransform(132.4,131.5,0.121,0.121);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D8D8D8").s().p("AAXAkIgCgDIgHgHIgrg5IgCgDIgBgBIAAgBIgBgBIAAgBQgBABAAAAQAAAAAAAAQAAAAAAgBQAAgBABgBQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAIACAAIACABIAAAAIADADIAtA7IAIALQAEAHABAGQgHgCgFgGg");
	this.shape_19.setTransform(131.1,130,0.121,0.121);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D8D8D8").s().p("AAXAkIgEgGIgFgEIgPgVIgfgoIgBgBIAAgBIAAAAIAAgBQAAAAgBAAQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIACAAIABAAIABABIAAAAIABAAIAAABIABACIADACIArA5IAIALQAEAHABAGQgHgCgFgGgAgZgoIAAAAIAAgBg");
	this.shape_20.setTransform(129.9,128.3,0.121,0.121);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8D8D8").s().p("AAXAkIgCgDIgGgHIgug8IgCgCIAAgBIgBAAIAAgBIAAgCQABAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAIADAAIACABIAAAAIAAABIABAAIABACIAuA7IAIALQAEAHABAGQgHgCgFgGg");
	this.shape_21.setTransform(128.7,126.6,0.121,0.121);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D8D8D8").s().p("AATAgIgFgGIgug9IgBgBIAAAAIAAgBIAAgBQgBABAAAAQAAAAAAAAQAAAAAAgBQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAIACAAIABAAIABABIADADIAtA7IAIALQAEAHABAGQgHgEgJgIg");
	this.shape_22.setTransform(127.2,125,0.121,0.121);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D8D8D8").s().p("AAXAkIgCgCIgHgIIgug9IgBgBIAAgBIAAAAIAAgBQAAABgBAAQAAAAAAAAQAAAAAAgBQABgBAAgBQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAIACAAIACABIAAAAIABABIABAAIABACIAtA7IAIALQAEAHABAGQgGgCgGgGg");
	this.shape_23.setTransform(126.1,123.4,0.121,0.121);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D8D8D8").s().p("AASAfIgEgFIgug9IgBgBIAAAAIAAgBIAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIACAAIACABIAAAAIABABIAAABIAAAAIAAAAIAAAAIABABIAuA7IAIALQAEAHABAGQgHgEgKgJg");
	this.shape_24.setTransform(124.7,121.7,0.121,0.121);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D8D8D8").s().p("AAXAcIgFgEIg2g0IgBgCIgBAAIAAgBIgBgBIAAgCQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIACgBIABAAIACABIABABIABAAIA2A1IAKAKQAFAFACAHQgJgEgJgHg");
	this.shape_25.setTransform(123.5,120.1,0.121,0.121);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D8D8D8").s().p("AAYAXIgDgCIg9grIgDgDIgBAAIAAgBIAAgBQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAAAIACgBIABAAIABAAIAAABIABAAIABAAIgBAAIABABIAAgBIABABIAEACIA5ApIAKAJQAHAGACAFQgKgCgLgIg");
	this.shape_26.setTransform(122.2,118.7,0.121,0.121);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D8D8D8").s().p("AAeAYIgHgEIhCgoIgCgBIAAAAQAAAAgBAAQAAABAAgBQAAAAAAgBQAAAAAAgBQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIADgBIABAAIABABIABAAIABAAIABABIBBAmIALAIQAGAFADAGQgJgCgJgEg");
	this.shape_27.setTransform(120.9,117.5,0.121,0.121);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D8D8D8").s().p("AAkAXIgGgDIgGgCIhEggIgCgBIgBgBIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIACgBIABAAIACAAIABAAIAAABIABAAIABABIADABIBBAeIAMAGQAGAFAEAFIgCAAQgGAAgGgCg");
	this.shape_28.setTransform(119.6,116.3,0.121,0.121);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D8D8D8").s().p("AAmATIgGgBIgHgDIg9gVIgKgFIgBAAIgBgBIgBAAIgBgBIgBgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBIACgBIADAAIABAAIAFACIBDAYIANAGQAHADAEAFIgFABIgJgCg");
	this.shape_29.setTransform(118.2,115.1,0.121,0.121);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D8D8D8").s().p("AApAKIgIgBIhSgJIgBAAIgBAAIAAgBQgEgCACgEIACgBIAAgBIACAAIABAAIAAAAIAAAAIABAAIAAABIACAAIBKAIQAQADAKAFQgFACgGAAIgDAAg");
	this.shape_30.setTransform(116.2,114.2,0.121,0.121);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D8D8D8").s().p("AgyAJQgFgBABgEIACgCIAAgBIABAAIABAAIABgBIAAAAIACAAIAYgBIAYgDIAbgDIAOgBQAHAAAGADQgFAEgHABIgHAAIgHAAIgaADIgwAGIgCAAIgBAAg");
	this.shape_31.setTransform(114.5,113.6,0.121,0.121);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D8D8D8").s().p("AgxAQQgEgBAAgEIABgCIABgBIABAAIAAgBIABAAIABAAQgBgBABABIBKgTIAOgCQAHgCAHACQgFAFgHADIgEABIgJADIhJASIgCAAIgBAAg");
	this.shape_32.setTransform(112.6,113.3,0.121,0.121);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D8D8D8").s().p("AgxAWIABgCIABgBIABgBIABAAIAAgBIACgBIBDghIAMgGQAHgCAHAAQgEAGgHAEIgFADIgGAEIhAAgIgDABIgCABIgBAAIgBAAIAAAAIgBAAQgEAAgBgEg");
	this.shape_33.setTransform(110.6,113.3,0.121,0.121);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D8D8D8").s().p("AgsAaQgEAAgBgEIABgCIABgBIABgBIABgBIABgBIADgCIBBggIAMgFQAHgDAGABQgHAIgOAIIhDAiIgCAAIgBABIgBAAIAAAAg");
	this.shape_34.setTransform(108.6,113.6,0.121,0.121);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D8D8D8").s().p("AgsAaQgEAAgBgEIABgCIAAgBIABgBIACgBIABgBIADgCIBNglQAHgDAHABQgIAIgOAIIhDAiIgCAAIgBABIgBAAIAAAAg");
	this.shape_35.setTransform(106.7,114.1,0.121,0.121);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D8D8D8").s().p("AgrAaQgFAAgBgEIABgCIAAgBIABgBIACgBIACgBIACgCIBAgfIANgGQAHgDAGABQgDAFgHAFIgLAGIhDAiIgCAAIgBABIAAAAIgBAAg");
	this.shape_36.setTransform(104.8,114.5,0.121,0.121);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D8D8D8").s().p("AgxAWIABgCIAAgBIABgBIABAAIAAgBIABAAIAAAAIACgBIBCgiIANgFQAHgDAHABQgEAFgHAEIgFAEIgGADIhAAgIgDABIgCABIgBAAIAAABIgBAAIgBAAQgEAAgBgEg");
	this.shape_37.setTransform(103,115.2,0.121,0.121);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D8D8D8").s().p("AgxAWIABgCIAAgBIABgBIAAAAIABAAIABgBIACgBIBDghIAMgGQAHgCAGAAQgDAGgHAEIgFADIgGAEIhAAgIgEABIgBABIgBAAIgBAAIAAAAIgBAAQgEAAgBgEg");
	this.shape_38.setTransform(101.1,115.7,0.121,0.121);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D8D8D8").s().p("AgsAaQgFAAAAgEIAAgCIACgCIABAAIABgBIAAABIAAAAIAAgBIACgBIBCghIANgGQAHgDAGABQgDAGgHAEIgJAFIgCABIhEAiIgBAAIgBABIAAAAIgBAAg");
	this.shape_39.setTransform(99.1,116.5,0.121,0.121);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D8D8D8").s().p("AgsAaQgEAAgBgEIABgCIACgCIAAAAIABAAIAAgBIACgBIBCghIANgGQAHgDAHABQgEAFgHAFIgGAEIgFADIg6AdIgGACIgDACIgCAAIgBABIAAAAg");
	this.shape_40.setTransform(97.4,117.1,0.121,0.121);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D8D8D8").s().p("AgMA1IgCgCIAAgBIAAgCIAAAAIAAgBIABgCIAAgDIAQhGIAEgNQADgHAEgFQACAHgBAHIgCAHIAAAGIgRBKIgBABIAAABIAAABIgBAAIAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAIgDgBg");
	this.shape_41.setTransform(83,141.9,0.121,0.121);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D8D8D8").s().p("AgNA1IgBgCIAAgEIABgFIAQhGQAFgUAGgFQACAGgBAIIgCAGIgBAHIgRBLIgBABIAAABIAAAAIAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBg");
	this.shape_42.setTransform(83.4,140.4,0.121,0.121);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D8D8D8").s().p("AgMA1IgCgCIAAgBIAAgBIAAgBIAAgBIAAgCIARhJIAEgNQADgHAEgFQACAHgBAHIgCAJIgBAEIgQBKIgBABIAAABIgBABIAAAAIAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgCgBg");
	this.shape_43.setTransform(83.6,138.7,0.121,0.121);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D8D8D8").s().p("AgMA1IgCgCIAAgBIAAgBIAAgCIARhLQAFgTAGgGQABAEAAAGQAAAJgDAIIgRBJIAAACIAAABIgBAAIAAABIAAAAIAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgBgAgGAxIAAAAIABAAg");
	this.shape_44.setTransform(84.2,136.9,0.121,0.121);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D8D8D8").s().p("AgMA1IgCgCIAAgBIAAgCIAAgBIAAgCIARhJIAEgNQACgHAFgFQACAGgBAIIgCAJIAAABIgBADIgQBGIgBADIAAABIAAACIgBABIAAAAIAAAAIAAABQgBAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAIgCgBg");
	this.shape_45.setTransform(84.9,135.1,0.121,0.121);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D8D8D8").s().p("AgMA1IgCgCIAAgDIAAgBIAAgCIARhJIAEgNQADgHAEgFQACAHgBAHIgCAJIgQBKIgCAFIAAABIgBABIAAAAIAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgCgBg");
	this.shape_46.setTransform(85.5,133.2,0.121,0.121);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D8D8D8").s().p("AgNA1IgBgCIAAgEIABgFIAQhGQAFgUAGgFQACAGgBAIIgCAGIgBAHIgRBJIAAACIgBABIAAABIAAAAIAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBg");
	this.shape_47.setTransform(86.1,131.3,0.121,0.121);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D8D8D8").s().p("AgVAxIgBgBIAAgDIAAgCIAAAAIABgCIAdhFIAGgMQAEgGAFgEQABAHgDAHIgDAIIgBAFIgdBFIgBABIgBABIAAAAIAAABIgBAAIgDACIgDgCgAgWAsIABAAIAAgBg");
	this.shape_48.setTransform(86.5,129.5,0.121,0.121);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D8D8D8").s().p("AgVAxIgBgCIAAgCIAAgBIAAgBIABgCIAJgVIALgXIAJgZQAJgRAGgFQABAGgDAIIgCAGIgCAHIgdBFIgBABIgBABIAAAAIAAABIgBAAIAAAAIgDACIgDgCg");
	this.shape_49.setTransform(87.4,127.7,0.121,0.121);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D8D8D8").s().p("AgVAyIgBgCIAAgBIAAgCIAAgBIABgBIAAgBIAdhGIAGgLQAEgHAFgEQABAHgCAHIgDAHIgCAGIgbBBIgCADIgBACIAAABIgBABIAAAAIAAABIgEABIgDgBg");
	this.shape_50.setTransform(88.1,125.9,0.121,0.121);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D8D8D8").s().p("AgVAyIgBgDIAAgDIAAgBIAKgXIALgXIAJgYIAGgMQAEgHAFgEQgBAKgDAKIgCAGIgdBGIgBABIgBABIAAABIgBAAIAAABIgDABIgDgBg");
	this.shape_51.setTransform(88.9,124.2,0.121,0.121);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D8D8D8").s().p("AggAqIgBgCIAAgBIAAgBIABgBIABgBIAtg9IAJgLQAFgFAGgDQAAAHgEAGIgEAFIgEAHIgtA7IgDADIAAAAIAAABIgDABQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBgAgZApIAAABIABgBg");
	this.shape_52.setTransform(89.7,122.7,0.121,0.121);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D8D8D8").s().p("AghAqIAAgCIAAgBIAAgBIABgBIAAAAIAAgBIABgBIAtg8QAMgPAIgEQAAAHgEAHIgGAHIgCAEIgrA5IgCACIgBACIgCABIAAAAIAAABIgDABQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBgBg");
	this.shape_53.setTransform(90.8,121,0.121,0.121);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D8D8D8").s().p("AgxAWIABgCIAAgBIACgBIABAAIAAgBIACgBIBCghIANgGQAHgCAGAAQgDAGgHAEIgFADIgGAEIhAAgIgDABIgCABIgBAAIAAAAIgBAAIgBAAQgEAAgBgEg");
	this.shape_54.setTransform(92.3,119.8,0.121,0.121);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D8D8D8").s().p("AgxAXIAAgDIABgBIABgBIAAAAIABAAIABgBIAAAAIABgBIBDghIANgGQAHgCAGAAQgDAGgHAEIgFADIgGAEIhBAgIgDABIgBABIgBAAIAAAAIgCAAIgBAAQgDAAgBgDg");
	this.shape_55.setTransform(93.9,118.9,0.121,0.121);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D8D8D8").s().p("AgxAXIABgDIAAgBIABgBIAAAAIABAAIABgBIACgBIBCghIANgGQAHgCAGAAQgDAGgHAEIgFADIgGAEIhAAgIgEABIgBABIgBAAIAAAAIgBAAIgBAAQgEAAgBgDg");
	this.shape_56.setTransform(95.6,117.9,0.121,0.121);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgCIABAAIACgDIA7guIAKgIQAHgEAHgBQgEAHgJAIIgGAFQgIAIgNAHIgnAhIgBABIAAAAIgBAAIAAAAIgCAAQgDAAgBgDg");
	this.shape_57.setTransform(79.5,100.1,0.121,0.121);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D8D8D8").s().p("AgrAgIAAgDIABgBIAAgBIABAAIABgBIABgBIA6guQAQgMAJgBQgDAGgFAFIgGAFIgEAEIg9AwIAAAAIgBAAIgBABIAAAAIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBg");
	this.shape_58.setTransform(81.4,99.6,0.121,0.121);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgCIABgBIAAAAIABgBIABgBIA6guIALgIQAHgEAHgBQgDAGgFAGIgHAGIgDACIgVAQQgJAKgKAGIgVAQIAAAAIgBAAIAAABIgBAAIAAAAIgCAAQgDAAgBgDg");
	this.shape_59.setTransform(83.4,98.8,0.121,0.121);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgCIABgBIAAAAIABgBIABAAIABgBIA6guQAOgJAKgEQgFAHgJAJIgEAEIg4AtIgFADIAAAAIgBAAIAAABIgBAAIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBg");
	this.shape_60.setTransform(85,98.3,0.121,0.121);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgCIABgBIAAAAIABgBIA7gvIALgIQAHgEAHgBQgDAGgFAGIgHAGIgEACIg4AsIgFAFIAAAAIgBAAIAAAAIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBg");
	this.shape_61.setTransform(86.9,97.5,0.121,0.121);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgBIAAgBIABgBIAAAAIABgBIABgBIATgPIAUgPIAUgQIALgIQAGgEAHgBQgCAGgGAGIgKAIIg8AwIgBAAIgBABIgBAAIAAAAIgBAAQgEAAgBgDg");
	this.shape_62.setTransform(88.9,96.7,0.121,0.121);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgCIACgCIAAAAIABgBIADgCIAkgcIAUgQQAPgMAJgBQgFAHgJAJIgEAEIg4AtIgDACIgBABIgBAAIgBAAIAAABIgBAAIgCAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBgBg");
	this.shape_63.setTransform(90.7,96,0.121,0.121);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgBIAAgBIACgCIABgBIADgCIA4gsIALgIQAGgFAHAAQgCAGgGAFIgKAJIg8AwIgBAAIgBAAIAAABIgBAAIgCAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBgBg");
	this.shape_64.setTransform(92.2,95.4,0.121,0.121);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgBIAAgBIABgBIAAAAIABgBIABgBIADgCIAQgNIAUgPIAUgQIALgIQAGgEAHgBQgCAGgGAGIgKAIIg7AvIgBABIgBAAIgBABIgBAAIAAAAIgBAAQgEAAgBgDg");
	this.shape_65.setTransform(94.1,94.6,0.121,0.121);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D8D8D8").s().p("AgrAgIAAgDIABgBIAAgBIABAAIABgBIAAABIABgBIgBAAIABgBIA6guIALgIQAHgEAHgBQgCAGgHAFIgGAHIgDACIg4AtIgFADIgBAAIAAAAIAAABIgBAAIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBg");
	this.shape_66.setTransform(95.9,94,0.121,0.121);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgCIACgCIABgBIADgCIA3gsQAQgMAJgBQgDAGgFAFIgGAFIgEAEIg7AvIgCABIAAAAIgBAAIAAABIgBAAIgCAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBg");
	this.shape_67.setTransform(97.7,93.2,0.121,0.121);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D8D8D8").s().p("AgrAgIAAgDIABgBIAAgBIABAAIACgCIA7guIALgIQAGgEAGgBQgBAGgHAGIgGAGIgDACIgVAQIgTAQIgVAQIgBAAIAAABIgBAAIAAAAIgCAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBgBgAgjAhIAAABIAAgBg");
	this.shape_68.setTransform(99.7,92.3,0.121,0.121);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D8D8D8").s().p("AgrAgIAAgDIABAAIAAgBIADgDIA6gvIALgHQAHgFAHAAQgDAGgFAFIgFAEIgGAFIgVAPIglAfIgDADIgBAAIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBg");
	this.shape_69.setTransform(101.4,91.6,0.121,0.121);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D8D8D8").s().p("AgrAgIAAgDIABAAIAAgCIABAAIAAAAIABgBIABgBIA6gvIALgHQAHgFAHAAQgDAGgFAFIgFAEIgFAFIg4AsIgFADIgBABIAAAAIgBABIAAAAIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBg");
	this.shape_70.setTransform(103,90.9,0.121,0.121);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D8D8D8").s().p("AgrAgIAAgDIABgBIAAgBIABAAIABgBIABgBIADgCIA3gtIALgHQAHgFAHAAQgDAFgIAIIgHAHIg9AvIAAABIgBAAIAAABIgBAAIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBg");
	this.shape_71.setTransform(104.7,90.1,0.121,0.121);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D8D8D8").s().p("AgrAgIAAgCIABgBIAAgBIABAAIAAgBIABgBIA8gvIALgIQAGgEAHgBQgDAGgFAGIgFAEIgFAFIg8AvIgBAAIgBABIAAAAIgBAAIgBAAQgEAAgBgDg");
	this.shape_72.setTransform(106.3,89.1,0.121,0.121);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D8D8D8").s().p("AglAmIgBgCIABgCIAAgBIADgCIACgDIAxg0IAJgJQAGgFAHgCQgCAHgFAGIgEAFIgEAFIgsAvIgIAHIgBACIgBAAIAAABIgBAAIAAAAIAAAAIgCABQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_73.setTransform(108,88,0.121,0.121);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D8D8D8").s().p("AgOATIARghIAEgFQADgDAEgBQACAEgBAEIgDAGIgSAhg");
	this.shape_74.setTransform(109.3,87.1,0.121,0.121);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D8D8D8").s().p("AzLMDQRUnPAvgXQAXgMANARQAFAHAKghQAMglBSiAQBrigAQgcQAnhECvizQCZieCfiQQB2hrA4huQARgjAJgfIAGgYQA4gFAwA1QAJAJAbAjQAVAbANALQAOALAggGIAygLQAzgEgjB3Qh4FvkIEXQhTBVh5BmQiKB1gTASQhkBhiuAxQg3AQg3AJIgtAGIzCH8g");
	this.shape_75.setTransform(110.4,102.8,0.121,0.121);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D8D8D8").s().p("AjpK6QAKgVACgJQAEgOgTgCQgegCgDgdQgCgNgEgDQgGgGgUAFQgkAJgYgWIgRgXQgHgSAdhEQA6iIC4j7QEylzhQkFQgahSg9g8Ig2gtQCUAVBgBGQCsB+gIEIQANF5jREyQhSB4hhBPQhXBIhDAKQgaAEgTAAQgvAAAJgbg");
	this.shape_76.setTransform(149.6,131.4,0.121,0.121);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D8D8D8").s().p("AlaEiQglgRgzg4QgIgHgFgLQgKgXAMgUQAbgwg/giQg4gSgUgLQgkgVAxglQAggaBwg0QB+g5CMgxQF8iEDHAjIAXASQAbAZAWAfQBFBigPB5QAGAGgxAZQhiAzkNBWQlKB2hPAOQgUADgSAAQgiAAgagMg");
	this.shape_77.setTransform(144.1,127,0.121,0.121);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#733A3A").s().p("Ak9EXQgcgRg2g7QACgNASghQAJgQgSgFQgcgIgJgWQgGgOgfgOIg7gWQgigNgIgMQgKgQAbgTQAigbBug0QB/g8CLgxQF+iGDRArIAUARQAYAYATAdQA8BegOB3QAFAIgxAZQhhAykOBXIj4BUQhjAignAFIgWACQgjAAgbgQg");
	this.shape_78.setTransform(144,126.9,0.121,0.121);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D8D8D8").s().p("AgSHOQgypqgOjjQgIiOhDhuQgVgigZgcIgUgUQg8gzAAgIIALACQCBASCDCiQBsCGAlB7QAeBiA7E3QA8E6ACBHQACA8gvCIQgXBEgYA4g");
	this.shape_79.setTransform(146.9,123.6,0.121,0.121);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D8D8D8").s().p("AkdEDQhdgJgqghQgigagnANQgUAHgGAAQgNAAgKgNQgQgWACgqQADgwgHgRQgFgNgVgUIgmghQgrgnAhgYQBMg3C3gpQCmglClgeQEJgwArANQAbAJBZALQBVASAqAwQAQASALAWQAGANAGASIBnCYIgIASQgPASgmACQhAACidAdQi2AhgoAbIkzBMQgbAGglAAQgbAAgggDg");
	this.shape_80.setTransform(137.5,116.5,0.121,0.121);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#733A3A").s().p("AkVEBQhSgEgqggQgdgXgzgXQgogRgPgVQgQgVAJgKQAKgNgIgUQgFgNgVgUIgmghQgrgnAigYQBLg3C3gpQCZgjCyggQEIgxAsAOQAMAEAsAHQAmAHAXAJQBIAeAgBjQAsBBAtAoQAXAWAOAIIgIASQgPASgmACQg6ACigAjQiyAmgoAcIkrBHQgmAJgwAAIgZgBg");
	this.shape_81.setTransform(137.7,116.7,0.121,0.121);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D8D8D8").s().p("Ag4DjQAtlrhjjxQgfhLgqg2IgkgnICSgMIAZAQQAeAWAeAgQBjBmBECgQBECggtFHQgXCkgkCEg");
	this.shape_82.setTransform(140.8,115.7,0.121,0.121);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#733A3A").s().p("AgpDgQAjlfhfj2QgehMgng5IgigpICLgIIATAOQAZAUAZAdQBUBfBECgQBECfgaFMQgNCngbCHg");
	this.shape_83.setTransform(140.6,115.8,0.121,0.121);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D8D8D8").s().p("AA5DSQnfgUiMhLQgOgGgNgSQgZgiAHg0QAGgmglhHQgPgdgCgNQgDgTARgLIFegTQF/gOCzAdQDTAhA6ACQA2ACAQgZQAFgig7gEIg8ACIAYgHQAcgHAXAEQBKAKgDBpQgEB8ACAxQACAxAKAeQALAegPAMQgQAMg7AEQhVAFh7AAQiEAAiwgGg");
	this.shape_84.setTransform(131.7,106.8,0.121,0.121);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D8D8D8").s().p("AjtA3IgIipQB/gMCIh0QArgkAmgrIAfgjQByA/ACB3QABA8gWAuQhLCxipCOQhWBHhGAjQgthugRjAg");
	this.shape_85.setTransform(134.6,99.8,0.121,0.121);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D8D8D8").s().p("ACmEdQgKiDiihCIkJhbIBjmPIBQAeQBcAqBKA6QDvC5gyESIgRA5QggBJhHBWQAcg0gFhCg");
	this.shape_86.setTransform(135.7,93.8,0.121,0.121);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#733A3A").s().p("Agsg5Igng8Qglg9AFgHQAGgGAfAEQAQACAOAEIClBrIg0EHg");
	this.shape_87.setTransform(150.5,124.9,0.121,0.121);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#733A3A").s().p("AgbHDQABg4gSi8QgWjegHjjQgHjHAHglQADgMADAGQACADABAFIAmA1QArBOAhCAQAvC1ghDyQgZDCgrBXQgRgegGgGg");
	this.shape_88.setTransform(146.8,123.4,0.121,0.121);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#733A3A").s().p("ABgCfQgLgmgTgYIgRgQQgFgSgQgeQgcg5gzg+Qgyg9AAgSQAAgFAGgBIAFABIAXAMQAeATAjAnQA8BGAgB7QAKAqABAZQABAMgBAAQgCAAgDgNg");
	this.shape_89.setTransform(144.6,116.3,0.121,0.121);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#733A3A").s().p("AgEAjIgogLIgNg2IBBgEQBBAEgSAhQgQAgglAAIgGAAg");
	this.shape_90.setTransform(138.5,104.7,0.121,0.121);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#733A3A").s().p("ACmEdQgKiDiihCIkJhbIBjmPIBQAfQBcAqBLA6QDuC5gyERIgRA5QggBKhHBVQAcg0gFhCg");
	this.shape_91.setTransform(135.6,94.1,0.121,0.121);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#312544").s().p("AhbDEQhRgmgfhVQgehSAmhSQAnhRBUgfQBSgeBSAmQBRAmAfBVQAeBSgmBSQgmBRhVAfQglANgkAAQgtAAgugVg");
	this.shape_92.setTransform(123.6,93.1,0.121,0.121);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C1BDBD").s().p("Ah8EMQhwg0gqh0QgphyA0hvQA0hvB0gqQBxgpBvA0QBwA0AqB0QApBxg0BvQg0Bwh0ApQgzATgxAAQg/AAg9gdg");
	this.shape_93.setTransform(123.7,93.1,0.121,0.121);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#312544").s().p("AhbDEQhRgmgfhVQgehSAmhSQAnhRBUgfQBSgeBSAmQBRAnAfBUQAeBSgmBSQgmBRhVAfQgmANgjAAQguAAgtgVg");
	this.shape_94.setTransform(146.4,139,0.121,0.121);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C1BDBD").s().p("Ah8EMQhwg0gph0QgqhxA0hwQA0hvB0gpQBygqBvA0QBvA0AqB0QApBxg0BwQg0Bvh0AqQgzASgxAAQg/AAg9gdg");
	this.shape_95.setTransform(146.4,139,0.121,0.121);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#312544").s().p("AhbDEQhSgmgehVQgehTAmhRQAmhSBVgeQBSgeBSAmQBRAmAfBVQAeBSgmBSQgmBRhVAfQglANgkAAQguAAgtgVg");
	this.shape_96.setTransform(138.8,128.5,0.121,0.121);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C1BDBD").s().p("Ah9EMQhvg0gqh0QgphxA0hvQA0hwB0gpQBxgqBvA0QBwA0ApB0QAqBxg0BwQg0Bvh0AqQgzASgxAAQg/AAg+gdg");
	this.shape_97.setTransform(138.9,128.5,0.121,0.121);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#312544").s().p("AhbDEQhRgmgfhVQgehSAmhSQAmhRBVgfQBSgeBSAmQBRAmAfBVQAeBSgmBSQgmBRhVAfQglANgkAAQgtAAgugVg");
	this.shape_98.setTransform(130.2,117.2,0.121,0.121);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C1BDBD").s().p("Ah8EMQhwg0gph0QgqhxA0hwQA0hvB0gqQBxgpBwA0QBvA0AqB0QApBxg0BvQg0Bwh0ApQgzATgxAAQg/AAg9gdg");
	this.shape_99.setTransform(130.3,117.2,0.121,0.121);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#312544").s().p("AhbDEQhRgmgfhVQgehTAmhRQAmhSBVgeQBSgeBSAmQBRAmAfBUQAeBTgmBRQgmBShVAeQglAOgkAAQguAAgtgVg");
	this.shape_100.setTransform(124.6,106.6,0.121,0.121);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C1BDBD").s().p("Ah9EMQhvg0gph0QgqhxA0hwQA0hvB0gqQBxgpBwA0QBvA0AqB0QApBxg0BwQg0Bvh0AqQgzASgxAAQg/AAg+gdg");
	this.shape_101.setTransform(124.7,106.6,0.121,0.121);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#BBBBBC").s().p("EBaIAwiQjmgIkpgfQkBgbkKgoQkFgnkEgwQj5gtkLhDQnTh1ofi9QnailoAjSQuMl1vvn2QmwjXn5kMIuknoMgzJgabQjShqj+iUQjliFjaiTQjsifi9ibQhjhRhjhfQhohlhLheQhdhyg2hqQhDiGgBh4QAHB0BJCEQA4BlBhBuQCXCrDqC3QDBCWDrCYQDGCAD7CPQDcB9DyB7IHVDwQJJEsFfC3QLBFuSJJgIOkHrQHEDxHkDwQP0H1OFFvQIPDVHJCeQIMC1HgB7QEPBFDxAsQEMAyD6AmQJYBbG7AYQEYAOD0gMQEsgPDXg/QCJgoBkg+QB8hMA8hlQBChugIiKQgHiEg+h3QAfA3AWBCQAWBDAFA+QAGBEgNBBQgNBEggA6Qg+Bvh8BQQhmBCiMAtQjYBEkyAXQiMALilAAQhrAAh1gFg");
	this.shape_102.setTransform(121,150.3,0.121,0.121);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#DDE8DD").s().p("EBUNA8OQtygP1VmHQoGiVnpiwQmpiYjthvUgHlgDkgp0gVKUgrTgV3gFPgDDQiWhXlHipIpnk7QsvmnlBjnQkUjGhsloQgihxgNhzIgGhdQAtpbDoncQBIiVBTh2IBEhYQh1ETDqE8QBLBmB8B4ICeCYQBTBYRnJ+INbHjQHIEACDBNUAEaACnAmwATaQTVJtSgJNQT/JHTBEqQHOByHkBQQEtAyHKA6QJ/BRG6hsQGUhiCYjmQByitjpkgQjLjGB1BdQDPCjB3DEQCVD1gDEVQgCEShtEnQhYDyhsCJQhDBVhHA6Qh1BhiqBGQm3C2sJAAIh6gBg");
	this.shape_103.setTransform(119.9,154.2,0.121,0.121);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("EBU8A78QtwgX1SmNQoFiWnoixQmpiZjshvUgHigDigp5gVKUgrTgV0gFQgDEQiWhWlGioQmTjNjWhvQsvmllBjmQkVjFhvliQgjhugOhxIgGhbQAmpPDWnRQBDiSBNhzIA/hXQhyEND4E4QBPBkCDB5ICiCWQBUBYRnJ8IWnMtUAEbACnAmwATYQTWJtSgJLQT/JHS/ExQHNBzHiBTQEtA0HIA9QJ8BVG4hlQGRhdCVjgQBwiojjkXQg2hDhDg/IgKgJIA1ApQC7CSBjDKQBtDfAAEcQAAEOhjEUQhRDjhqCEQhPBjgvArQhtBkidBFQmRCzreAAQhSAAhVgCg");
	this.shape_104.setTransform(119.9,153.9,0.121,0.121);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#CADBCA").s().p("EAN0AsPQrRl8sen1Qshn3iDmRQgph9AfhkQAJgfAQgZIAOgTQAogaCUk3QC9mNBRiJQAfg1CdkcQCZkWBzjDQF7qBE2lbQE3laFOnHQBpiPBdiIIBJhrQAYAdA4ANQAcAHAXAAQgRCwjsG7QjZGZlHHuQkPGZBFFFQAbB9BRCGQAiA5B4CmQBnCPFyHiQFsHtDUF2QDWF4g7KaQgeFLhIECIgfE3QjJhZlpi/g");
	this.shape_105.setTransform(53.3,99.4,0.121,0.121);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#7F6400").s().p("AWdH5QhziYhRhbQiSikibhgQnAkSpzDUQlyB7jdBjQjiBliEBnQh+BhhNB+Qg/Bng9CyQhJDYi9IgQiXHIgCBrIAGCGIyXp6QAhhkAaiwQA1lhghl8QgvoTjUn8QkKp9n/o2IBUBKQBuBXCDA/QGmDMHjhoQEag9GpiRQGViKGwizQG2i1FRipQFpi1Cch9QAxgnAtg1QDUAbD2g6QBagVCAgoIDbhGQERhVDMgSQEdgbEoBNQBhAeAeBJQAZA+gVBoQgNBEgwCJQg2CcgRBBQhJEZgWCnQgaDFAaCqQAaCuBZDQQBSC/CqErQEQHeKMPTQFGHpEPGJIhHBeQhaBzhYBqQkdFTixB7Q47/gjSkBg");
	this.shape_106.setTransform(106.2,116.2,0.121,0.121);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1D1427").s().p("AW1HtQh0iXhQhcQiTikibheQnAkUpyDUQlzB7jdBjQjiBliEBnQh9BhhOB+Qg+Bng9CzQhKDYi8IfQiXHIgCBsIAFCFIyWp6QAhhkAaiwQA1lhghl8QgvoTjUn8QkKp8n/o2IBUBKQBtBWCEBAQGmDLHihoQEag8GqiSQGUiKGxiyQG1i1FSiqQFoi1Cch9QBRg/BKhsQKaBIKNiJIAeAPQBnAwByANQBvAMBtgXIADACQBnAxB1AMQgsDShJEfQhGEKgPCyQgOC+AnCrQAlCjBnDVQBOChC5FGQEQHfJRO2QEnHcDyF7IhDBZQhTBthUBlQkNFEiyB7Q4q94jRkBg");
	this.shape_107.setTransform(106.1,117.4,0.121,0.121);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#7F6400").s().p("AE9auQkZgslqiCQlgh+knifQk1imh9iLQh/iMgThwQgShrBNh4QA+hhCsirQDojeCTiVQOBtyBQmXQAZh/g9hBQgSgUgZgLIgUgIQAQgsA0AKQAxAJBAA4QCWCCBWDnQBwEIEzF0QBzCMBwB0QBlBpArAeQDGByBMBKQAmAlgBAOQA/CggeD4QgXC+gvBjQhlDXicD6QkKGojSCDQhIAuiPAAQhcAAh5gTg");
	this.shape_108.setTransform(155.1,152.2,0.121,0.121);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#594505").s().p("AE9bRQkZgrlqiDQlgh+knieQk1imh9iLQh/iNgThvQgShrBNh5QA+hgCsirQDnjgCTiTQMjseConeQA3ibgThoQgKg5gbgbIABgDQA8gdBaCNQBSCCBdD7QBwEIEzF0QBzCMBwB0QBlBpArAeQDGBzBMBJQAmAlgBANQA/ChgeD4QgXC+gvBjQhjDUieD9QkKGojSCEQhIAtiPAAQhcAAh5gTg");
	this.shape_109.setTransform(154,153,0.121,0.121);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7F6400").s().p("AKeUqQxzjA47qyQnyjXnkjuImBjEQEEhrKypJQDYi3DojQIC+isId9STIgWBSQgpCSheE5Qg4C2AVB8QAUByBSA1QBMAzB4gLQB2gKCHhDQDehtGwA/QB4ARDPArQC9AoA9AHQArAFC5AeQCmAcBsAJQFYAcC7hyQDPh/hMiwQhBiYkEilQjEh7snoLIqOmpQD/CbL/HLQQYJwAoAaQC3B2CFCWQDYD0hMC6QirFNpRBdQjqAlktAAQpQAAtTiPg");
	this.shape_110.setTransform(167.3,167.9,0.121,0.121);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1D1427").s().p("AKeUqQxyjA47qyQnzjXnkjuImAjEQEDhrKypJQDYi3DpjQIC+isId8STIgVBSQgpCShfE5Qg3C2AVB8QATByBTA1QBLAzB4gLQB2gKCIhDQDehtGvA/QB5ARDOArQC+AoA9AHQAqAFC6AeQClAcBsAJQFZAcC6hyQBeg6AkhEIJcEcQADA8gWA1QirFNpRBdQjqAlktAAQpRAAtSiPg");
	this.shape_111.setTransform(167.6,167.4,0.121,0.121);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1D1427").s().p("EgpOgC8IBUBKQBuBXCDA9QGmDLHihoQEag8GqiPQGViKGuizQG1i0FSiqQFpi1Ceh9QATgPAZgXQI1BSI1hHIAlDYMhCRAWlIjnHsQkKqlobpSg");
	this.shape_112.setTransform(89.9,98.7,0.121,0.121);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#253303").s().p("A+RtxIBphNIB7AIQCdANCuAXQIsBKICCUQLNDOIUFFQKZGUFMI5IiwCSg");
	this.shape_113.setTransform(106.5,155,0.121,0.121);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#2A3F00").s().p("EgYtAymMhNgg0+MAEcgp6MAW0gj4IBBADQBLgED9DBQB2BZG7FuQGcFUD8C6QF7EXEEB6QI7EMJ1BZQJxBYJuhiQB2GQB4HHQA8DjAkCTIE8NRIJ+kVMAWUAhYIUkYTID7C8QCQBrAXAQQAXAQLLG8ILIG4ICTBZQCtBtCBBmQGdFIi3CMQi3CMxVF7QlbB2mMCAIlIBog");
	this.shape_114.setTransform(124.3,124.5,0.121,0.121);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#312544").s().p("AklHqQhQquAzpOQAVAZBAgpQAngaBehRQBhhUAogdQBHgwAfAOQBDAfAQCgQARCphCCdQAGBXgCBGQgJFvA0FVQAxFBBFBnQA2BRkjB7QhbAmhxAmIhgAeQgyjigolYg");
	this.shape_115.setTransform(134.8,98.2,0.121,0.121);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#6E726E").s().p("ADqDzQu9pQgwgYQhCgdg3gbQhqg1hDgyQjPibCdiBQB4h5RNNpQInGzIPHNIu2pNg");
	this.shape_116.setTransform(79.6,71.8,0.121,0.121);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#9BA59B").s().p("ADqD2QuzpXgwgYQhCgdg3gcQhqg0hDgyQjOibCciBQDwiUQSN8QIKG7HaHcQnQkonbktg");
	this.shape_117.setTransform(79.2,71,0.121,0.121);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D8D8D8").s().p("AgxAVIAAgDIACgBIAAAAIABgBIABAAIABgBIBEgfQASgIAJABQgEAFgHAEIgHAEIgFADIg6AbIgHACIgDACIgCAAIgBABIgCAAIAAAAQgEAAAAgEg");
	this.shape_118.setTransform(93,130.5,0.121,0.121);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D8D8D8").s().p("AgyAUIABgCIABgCIABAAIAAAAIACgBIABAAIADgCIBBgeIANgFQAHgCAGAAQgEAGgGAEIgHADIgFADIhEAeIgCABIAAAAIAAABIAAAAIAAAAIgCAAIAAABQgFAAgBgFg");
	this.shape_119.setTransform(94.8,130.4,0.121,0.121);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D8D8D8").s().p("AgtAZQgEAAAAgEIAAgDIACgBIAAAAIABgBIACgBIBEgfIAMgGQAIgCAGABQgEAFgGAEIgGADIgGADIhGAgIgBAAIAAABgAguAQIABAAIAAAAg");
	this.shape_120.setTransform(96.7,130.3,0.121,0.121);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D8D8D8").s().p("AgrAgIAAgEIABgBIABAAIAAAAIABgBIABgBIAngeIAUgQIALgIQAGgEAHgBQgDAGgFAGIgHAFIgDADIg4AsIgFADIAAABIgBAAIgBABIAAAAIgCAAQgDAAgBgDg");
	this.shape_121.setTransform(98.4,129.8,0.121,0.121);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#D8D8D8").s().p("AggArIgBgDIAAAAIAAgCIABAAIAAgBIABAAIAegpIAPgVIAJgKQAEgGAHgDQgBAHgEAHIgFAIIgCADIgqA5IgDADIgBABIgCACIgDABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_122.setTransform(100.2,129.3,0.121,0.121);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgDIAAAAIABgBIAAgCIAjhCIAHgMQAFgGAFgDQAAAGgDAIIgDAHIgCAFIgiA/IgBADIgBABIgBABIgBACIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAgZApIAAAAIAAAAg");
	this.shape_123.setTransform(101.9,128.2,0.121,0.121);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgCIAAgBIAAAAIABgBIAAgCIACgDIAhg/IAHgMQAEgGAGgDQgBAKgFALIgCAFIgeA5IgGAKIgBABIAAABIAAAAIgBAAIAAABIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAgZApIAAAAIAAAAg");
	this.shape_124.setTransform(103.6,127.2,0.121,0.121);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAgBIABAAIAAgBIABgCIAihCIAHgMQAFgGAFgDQABAGgDAIIgEAIIgCAEIgeA5IgFAJIgBABIgBABIAAABIAAAAIgBAAIAAABIgDABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAgZApIAAAAIAAAAg");
	this.shape_125.setTransform(105.3,125.7,0.121,0.121);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAgBIABAAIAAgBIAAgCIAjhCIAIgMQAEgGAFgDQgBAIgGAPIgBADIgeA5IgEAGIgBADIgBABIAAABIgCACIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_126.setTransform(106.8,124.7,0.121,0.121);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D8D8D8").s().p("AAjAZIgDgCIgJgEIhBgkIgCgBIAAAAIgBgBIgBAAIAAAAIAAgBIgBAAIgBgCQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIACgBIABAAIABAAIABAAIAAABIABAAIACABIBCAjIALAIQAGAEAEAGIgCAAQgGAAgGgDg");
	this.shape_127.setTransform(187.2,141.6,0.121,0.121);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D8D8D8").s().p("AAjAZIgFgDIgHgDIg/giIgEgDIgBgBIAAAAIgBAAIAAgBIgBgCQgBAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIADgBIABAAIABAAIABAAIABABIABABIBCAjIALAIQAHAEADAGIgCAAQgGAAgGgDgAgrgSIgBgBIAAAAgAgngZIAAAAIAAgBIgBAAg");
	this.shape_128.setTransform(185.3,140.5,0.121,0.121);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D8D8D8").s().p("AAjAZIgGgDIgGgDIhBgkIgBgBIgBAAIgBgBIAAAAIgBgBIgBgCQgBAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIACgBIABAAIACAAIABAAIAAABIBEAkIALAIQAHAEADAGIgCAAQgGAAgGgDg");
	this.shape_129.setTransform(183.3,139.4,0.121,0.121);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D8D8D8").s().p("AAjAZIgFgDIgHgDIhDglIgCgCIAAAAQAAABgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgCQgBAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIADgBIACAAIAAAAIABAAIABABIABABIBCAkIALAHQAHAFADAFQgHAAgHgDgAgogZIABAAIgBgBg");
	this.shape_130.setTransform(181.2,138.2,0.121,0.121);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#D8D8D8").s().p("AAjAZIgFgDIgHgDIhDglIgBAAIgBgCQAAABgBAAQAAABAAgBQAAAAAAAAQAAgBAAgBQgBgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIADgBIABAAIABAAIAAAAIABABIABAAIgBAAIABABIAAgBIABABIArAYQALAEAMAIQARAJAEAIQgHAAgHgDg");
	this.shape_131.setTransform(179,137.1,0.121,0.121);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D8D8D8").s().p("AAjAZIhLgoIgEgDIgBgBIAAAAIgBAAIAAgBIgBgCQgBAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIADgBIABAAIABABIABAAIABAAIABABIBCAkIALAHQAHAEADAGQgHAAgHgDg");
	this.shape_132.setTransform(177,135.8,0.121,0.121);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D8D8D8").s().p("AAjAZIgFgDIgHgDIgXgNQgIgEgOgHIgSgKIgEgDIgBAAIgBgCIAAAAQAAABgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgCQgBAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIADgBIACAAIABABIABAAIABABIADABIAoAXQALADAMAIQAQAKAFAIQgHAAgHgDgAgogZIABAAIgBgBg");
	this.shape_133.setTransform(175,134.7,0.121,0.121);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D8D8D8").s().p("AAjAZIgGgDIgGgDIg/giIgEgDIgBAAIgCgCQAAABAAAAQAAAAAAAAQAAAAAAgBQAAAAgBgCQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIACgBIACAAIABABIAAAAIABAAIACABIBCAjIALAIQAGAFAEAFQgHAAgHgDgAgogZIAAAAIAAgBg");
	this.shape_134.setTransform(173,133.6,0.121,0.121);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D8D8D8").s().p("AAjAZIgEgCIgIgEIgXgMIgWgMIgSgLIgDgBIgBgBIgCgCQAAABgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgCQgBAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIADgBIACAAIABABIABAAIABAAIADACIAoAXIAXALIALAHQAHAFADAGQgHAAgHgDg");
	this.shape_135.setTransform(171.2,132.6,0.121,0.121);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#D8D8D8").s().p("AAjAZIgGgDIgGgDIg/giIgDgCIgBgBIgBAAIgBgBIAAgBIgBAAQAAABAAAAQAAABAAgBQAAAAAAAAQAAgBgBgBQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIACgBIABAAIABAAIABAAIAAABIABAAIACABIAqAYIAYAMIALAHQAGAEAEAGQgHAAgHgDg");
	this.shape_136.setTransform(169.3,131.6,0.121,0.121);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D8D8D8").s().p("AAjAZIgCgBIAAAAIgKgFIg/giIgDgCIgBgBIgBAAIgBgBIAAgBIgBAAIAAgCQgBAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIACgBIABAAIABAAIABAAIAAABIABAAIAAAAIAAABIAAgBIACABIBCAjIALAIQAGAEAEAGIgCAAQgGAAgGgDg");
	this.shape_137.setTransform(167.6,130.6,0.121,0.121);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D8D8D8").s().p("AAdAWIgGgDIhBgkIgCgBIAAAAIgBgBIgBAAIAAAAIAAgBIgBAAIAAgBQgBgBAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIACgBIABAAIABAAIABAAIAAABIABAAIACABIBCAkIALAHQAHAEADAGQgJgBgLgFg");
	this.shape_138.setTransform(165.8,129.6,0.121,0.121);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#D8D8D8").s().p("AAjAZIgGgDIgGgDIhCglIgBgBIAAABIgBgBIAAAAIgBgBIgBgCQgBAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIADgBIAAAAIACAAIAAAAIABABIABAAIABABIBCAjIALAIQAHAEADAGIgCAAQgGAAgGgDg");
	this.shape_139.setTransform(164,128.5,0.121,0.121);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#D8D8D8").s().p("AAjAZIgEgCIgIgEIg/giIgEgDIgCgBIAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgCQgBAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIACgBIADAAIAAABIABAAIAAAAIBEAkIALAIQAHAEADAGQgHAAgHgDg");
	this.shape_140.setTransform(162,127.6,0.121,0.121);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#D8D8D8").s().p("AAeAXIgHgEIhBgkIgCgBIAAAAIgBAAIgBAAIAAgBIAAAAIgBAAIgBgCQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIACgBIABAAIABAAIABAAIAAABIABAAIACABIBCAjIALAIQAGAEAEAGQgIgBgLgEgAgngZIgBgBIAAAAg");
	this.shape_141.setTransform(160.3,126.5,0.121,0.121);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#D8D8D8").s().p("AAdAWIgGgDIhDglIgBAAIgCgCIAAgCQgBAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIACgBIACAAIABAAIAAAAIABABIACAAIADACIA/AiIALAIQAGAEAEAGQgJgCgLgEg");
	this.shape_142.setTransform(158.5,125.5,0.121,0.121);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#D8D8D8").s().p("AAmATIgEgBIgJgCIhIgbIgBAAIgBgBIAAAAQgDgEACgDIADgBIACAAIABAAIABAAIBIAaQASAIAFAGIgFABIgJgCg");
	this.shape_143.setTransform(156.7,124.5,0.121,0.121);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#D8D8D8").s().p("AAoAOIgFgBIgIgBIhKgQIgBAAIgBgBIgBAAIAAAAIgBAAIAAgBQgDgCACgEIACgBIABgBIACAAIABABIACAAIADABIAHABIA/ANIANAEQAHACAFAFIgIACIgGgBg");
	this.shape_144.setTransform(155,123.8,0.121,0.121);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D8D8D8").s().p("AApAKIgEAAIgJgBIgbgDIgsgGIgGgBIgBAAIgBAAIAAAAQgEgDACgDIACgCIABgBIADAAIACABIADAAIBHAJIAOACQAHACAFAEQgFADgGAAIgDgBg");
	this.shape_145.setTransform(153.3,123.2,0.121,0.121);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#D8D8D8").s().p("AgsADIgDgBIgCAAIgBAAIgCAAQgEgCACgCIACgCIACgBIA0ACQAOAAANABIANACQAIAAAGACQgIADgJABIgKAAg");
	this.shape_146.setTransform(151.6,122.6,0.121,0.121);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D8D8D8").s().p("AgzAFIAAAAQgFgCACgDIABAAIABgBIABAAIABAAIABgBIBNgDIAOAAQAHABAGADQgFACgIABIgFAAIgIABIhPADg");
	this.shape_147.setTransform(149.9,122.1,0.121,0.121);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D8D8D8").s().p("AgwARQgFgBABgEIABgCIABgBIACgBIAAAAIAAAAIABAAIgBAAIBLgUIANgDQAHgBAHACQgFAEgHADIgGACIgHADIhFARIgFACgAguAQIABAAIAAAAg");
	this.shape_148.setTransform(147.7,122,0.121,0.121);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#D8D8D8").s().p("AgwAZIABgDIAAgBIACgBIABgBIACgBIBAgkQASgJAIAAQgDAFgGAFIgIAFIgCACIgBAAIhCAlIgCAAIAAABIgBAAIgBAAIgBAAQgEAAgBgDgAgsAUIAAAAIAAgBg");
	this.shape_149.setTransform(145.9,122.1,0.121,0.121);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#D8D8D8").s().p("AgrAfIAAgCIABgCIABgCIACgBIACgCIA5gsIALgHQAHgEAGgBQgCAGgGAGIgKAIIgVAPIgTARIgVAPIgBABIgBAAIgBAAIgBABQgDAAgBgEg");
	this.shape_150.setTransform(144,122.5,0.121,0.121);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D8D8D8").s().p("AgjApIAAgDIABgCIAAAAIABgBIADgFIAtg3IAJgKQAGgFAGgCQgBAHgEAGIgEAFIgEAGIgwA5IgBACIgCABIAAAAIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAgAgbAoIAAABIABgBg");
	this.shape_151.setTransform(142.2,123.4,0.121,0.121);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#D8D8D8").s().p("AgjApIAAgDIABgCIAAAAIABgBIADgFIAtg3IAJgKQAGgFAGgCQgBAHgEAGIgEAFIgEAGIgwA5IgBACIgBABIgBAAIAAAAIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAgAgbAoIAAABIABgBg");
	this.shape_152.setTransform(140.5,124.4,0.121,0.121);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#D8D8D8").s().p("AgjApIAAgDIAAgBIAAgBIABAAIAAgBIACgCIACgDIAtg3IAJgKQAGgFAGgCQgDAKgHAKIgDAEIgzA8IgBAAIgCABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_153.setTransform(138.9,125.6,0.121,0.121);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D8D8D8").s().p("AgjApIAAgDIAAgBIAAgBIABAAIAAgBIAAgBIACgBIACgDIAtg3IAJgKQAGgFAGgCQgBAGgEAHIgHAIIgBADIgxA6IgCACIAAAAIAAAAIgBAAIgCABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_154.setTransform(137.3,126.7,0.121,0.121);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D8D8D8").s().p("AgjAoIAAgCIAAgBIAAgBIABAAIAAgBIABgBIABgBIAPgTIARgSIAPgVIAJgKQAGgFAGgCQgBAGgEAHIgEAFIgEAGIguA3IgDADIgBABIgBAAIAAABIAAAAIgBAAIgCABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBg");
	this.shape_155.setTransform(135.9,128.1,0.121,0.121);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D8D8D8").s().p("AgjApIAAgDIAAgBIAAgBIABAAIAAgBIABAAIADgFIAtg3IAJgKQAGgFAGgCQgBAHgEAGIgGAHIgCAEIguA3IgCACIgBACIgBAAIgBABIAAAAIAAAAIgBAAIgCABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_156.setTransform(134.3,129.3,0.121,0.121);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D8D8D8").s().p("AgjApIAAgDIAAAAIAAgCIABAAIAAgBIABAAIAHgKIApgxIAJgKQAGgFAGgDQgDAJgFAHIgFAIIgwA5IgBACIgBAAIgCACIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_157.setTransform(132.8,130.7,0.121,0.121);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#D8D8D8").s().p("AgjApIAAgDIAAgBIAAgBIAAAAIABgBIABgCIAwg5IAJgKQAFgFAHgDQgBAHgEAGIgGAHIgBACIgBACQgHAKgKAJIgfAmIgDADIAAAAIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_158.setTransform(131.5,132,0.121,0.121);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#D8D8D8").s().p("AAGA3IgCgBIgBgBIAAgBIgBgBIAAgBIAAgCIgCgXIgFgZIgEgaIgBgOQgBgHADgHQAEAGACAHIACAHIAAACIAAAEIALBLIAAAEQgBAEgDAAIgBAAg");
	this.shape_159.setTransform(128,160.4,0.121,0.121);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#D8D8D8").s().p("AAGA3IgDgBIgBgCIAAgBIAAgBIgBgCIgKhLIgBgNQgBgIADgGQAEAHADAMIABAHIALBLIAAABIAAABIAAACIAAAAQgBAEgDAAIgBAAg");
	this.shape_160.setTransform(127.7,158.9,0.121,0.121);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#D8D8D8").s().p("AAGA3IgDgBIgBgCIAAgBIAAAAIAAgBIgBgCIgBgKIgJhAQgCgUACgIQAFAFACAIIABAGIABAHIAKBAIABALIAAAEQgBAEgDAAIgBAAg");
	this.shape_161.setTransform(127.3,157.3,0.121,0.121);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D8D8D8").s().p("AAGA3IgCgBIgBgCIgBgBIAAgBIAAgCIgCgXIgFgZIgEgaIgBgOQgBgIADgGQAEAFACAIIACAFIAAAIIALBLIAAAEQgBAEgDAAIgBAAg");
	this.shape_162.setTransform(127.1,155.4,0.121,0.121);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#D8D8D8").s().p("AAFA3IgCgBIAAgBIgBgBIAAgBIAAgBIgBgCIgKhKQgCgUACgIQAFAIADALIABAHIAJBHIABAEIAAACIABAAIAAACQgBAEgDAAIgCAAg");
	this.shape_163.setTransform(127.1,153.5,0.121,0.121);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#D8D8D8").s().p("AAGA3IgCgCIgBAAIgBgBIAAgBIAAgBIAAgCIgBgEIgKhHIgBgNQgBgIADgGQAEAFACAIIABAGIABAHIAEAaIAHAtIAAADIAAACIAAADQgBAEgDAAIgBAAg");
	this.shape_164.setTransform(126.9,151.4,0.121,0.121);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#D8D8D8").s().p("AAGA3IgCgBIgBgCIAAgBIgBAAIAAgBIAAgCIgLhKIgBgOQAAgIACgGQAEAFACAIIABAGIABAHIAKBAIABALIAAAEQgBAEgDAAIgBAAg");
	this.shape_165.setTransform(126.7,149.5,0.121,0.121);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D8D8D8").s().p("AgBA3IgCgBIgBgCIAAgCQgBAAABgBIAAgBIAAgDIAAhIIABgOQABgIACgFQADAFABAOIAAAIIABAaIgBAuIgBADIAAAEIAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape_166.setTransform(126.4,147.6,0.121,0.121);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#D8D8D8").s().p("AgBA3IgCgCIAAAAIgBgBIAAgCQgBAAABgBIAAgBIAAhMIABgNQABgIACgGQADAGABANIAAAIIABAbIgBAtIgBAEIAAADIAAABIAAAAQgCAEgBAAIgBgBg");
	this.shape_167.setTransform(126.5,145.7,0.121,0.121);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D8D8D8").s().p("AgBA3IgCgBIAAgBIAAgCIgBgBIABhOQABgTACgHQADAFABAIIAAAGIABAIIgBBIIAAADIAAADIgBABIAAABQAAAAgBABQAAAAAAABQgBAAgBAAQAAAAAAAAIgBAAg");
	this.shape_168.setTransform(126.4,143.7,0.121,0.121);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#D8D8D8").s().p("AgBA3IgCgBIAAgBIAAgCIgBAAIABhOQABgUACgHQADAFABAIIAAAGIABAIIgBBIIAAADIAAADIgBABIAAABQAAAAgBABQAAAAAAABQgBAAgBAAQAAAAAAAAIgBAAg");
	this.shape_169.setTransform(126.5,141.9,0.121,0.121);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#D8D8D8").s().p("AgNA1IgBgCIAAgEIAAgCIABgDIAQhGIAEgNQADgHAEgFQACAHgBAHIgCAHIAAAGIgRBGIgBAFIAAABIgBABIAAAAIAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_170.setTransform(126.6,140.1,0.121,0.121);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#D8D8D8").s().p("AgMA1IgCgCIAAgBIAAgBIAAgCIABgBIAAAAIgBAAIABgBIAAgEIAQhFQAGgTAGgGQABAGgBAIIgBADIgBAKIgRBJIgBACIAAABIAAAAIgBABIAAAAIAAABQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_171.setTransform(127,138.2,0.121,0.121);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#D8D8D8").s().p("AgiApIgBgDIABgCIAAAAIABgBIABgCIAvg5IAJgKQAGgGAGgCQgBAHgEAGIgGAHIgBACIgBACQgHAKgKAJIgfAmIgDADIAAAAIAAABIgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_172.setTransform(127.9,136.5,0.121,0.121);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#D8D8D8").s().p("AgjApIAAgDIAAgBIAAgBIAAAAIABgBIAAgBIABgBIADgDIAtg3IAJgKQAFgFAHgCQgDAKgHAJIgCADIgBABIAAABQgKAOgHAFIgfAmIgCADIgBAAIAAAAIgDABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBgBAAg");
	this.shape_173.setTransform(129,135,0.121,0.121);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D8D8D8").s().p("AgjApIAAgDIAAgBIAAgBIABAAIAAgBIABgBIAHgJIApgyIAJgKQAGgFAGgCQgBAGgEAHIgFAFIgDAGIgyA7IgBAAIAAABIAAAAIgBAAIgCABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_174.setTransform(130.2,133.4,0.121,0.121);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgCIAAgBIAAAAIABgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgCIACgDIAWgnIALgYQAKgRAHgEQABAGgEAIIgDAGIgCAGIghA/IgCADIgBABIgBABIAAABIAAAAIgBABIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_175.setTransform(108.4,123.4,0.121,0.121);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAgBIABAAIAAgBIAAAAIABgCIAihCIAIgMQAEgGAGgDQAAAGgEAIIgDAHIgCAFIgjBCIgBABIAAABIgCACIgDABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_176.setTransform(109.9,122.1,0.121,0.121);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIABgBIAAgBIAjhEIAHgLQAFgHAFgDQABAHgDAHIgDAGIgDAGIgjBCIgBACIgCACIgDABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_177.setTransform(111.4,120.6,0.121,0.121);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAAAIABgBIAAgBIABgBIAihDIAHgLQAFgHAFgDQgBAIgEAMIgDAGIgjBCIgBACIgCACIgDABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_178.setTransform(112.7,119.5,0.121,0.121);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAAAIAAgBIABgBQgCAAACAAIAAgCIAjhCIAHgLQAFgHAFgDQAAAGgDAHIgDAGIgCAHIgjBCIgBABIgBABIAAABIgBAAIAAAAIAAAAIgEACIgCgCg");
	this.shape_179.setTransform(114.2,118.1,0.121,0.121);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAAAIABgBIAAgBIABgBIAihDIAHgLQAFgHAFgDQABAHgDAHIgDAGIgDAGIghA/IgCADIgBACIgCACIgDABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_180.setTransform(115.7,116.6,0.121,0.121);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAAAIAAgBIABgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBIACgEIAhg/IAHgLQAFgHAFgDQAAAHgDAHIgCAEIgDAIIgjBCIgBACIgCABIAAABIAAAAIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_181.setTransform(117.1,115.3,0.121,0.121);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgDIAAAAIABgBQgCAAACgBIAAgBIAjhCIAHgMQAFgGAFgDQAAAGgDAIIgBACIgEAKIgjBCIgBACIgBABIAAAAIgBAAIAAAAIAAAAIgDACIgDgCgAgZApIAAAAIAAAAg");
	this.shape_182.setTransform(118.3,114.1,0.121,0.121);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgCIAAgBIAAAAIABgBQgCAAACAAIAjhEIAHgLQAFgHAFgDQABAGgEAIIgDAGIgCAGIgjBCIgBACIgBABIAAAAIgBABIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgAgSAtIAAABIABgBg");
	this.shape_183.setTransform(119.6,112.6,0.121,0.121);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAgBIABgBIAjhEIAHgLQAFgHAFgDQABAGgDAIIgFAJIgBADQgHAPgFAHIgXAsIgBACIgBAAIAAABIgBABIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_184.setTransform(121,111.3,0.121,0.121);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAAAIAAgBIABgBQgCAAACAAIAAgBIACgDIAhhAIAHgLQAEgHAGgDQABAHgEAHIgCAEIgDAIIgMAWIgVApIgDAFIgBABIAAAAIgBABIgDABQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_185.setTransform(122.4,109.9,0.121,0.121);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAAAIAAgBIABgBIAAAAIAAAAIAAgBIACgEIAWgnIALgYIAHgLQAFgHAFgDQgBAKgFAKIgCAGIghA/IgDAFIgBABIAAAAIgBABIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_186.setTransform(123.9,108.3,0.121,0.121);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgCIAAgBIAAAAIAAgBIABAAIABgCIAihCQAKgRAHgEQABAGgEAIIgDAGIgCAGIghA/IgDAEIgBABIAAABIAAAAIgBABIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_187.setTransform(125.2,107,0.121,0.121);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAgBIABgBIABgCIAihCIAHgMQAEgGAGgDQABAGgDAHIgEAJIgCAEIgjBCIgBABIgBABIAAABIAAAAIgBAAIAAABIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_188.setTransform(126.4,105.7,0.121,0.121);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAgBIABgBIABgCIAihCIAHgMQAEgGAGgDQABAGgDAIIgGAMIghA/IgDAEIgBABIAAABIAAAAIgBAAIAAABIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_189.setTransform(127.6,104.3,0.121,0.121);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D8D8D8").s().p("AgZAvIgBgCIAAgBIAAgBIAAgBIABgBIABgBIABgEIAhg/IAHgLQAFgHAFgDQABAGgDAIIgFAJIgBADQgHAPgFAHIgXAsIgBACIgBAAIAAABIgBABIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_190.setTransform(128.7,102.7,0.121,0.121);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#D8D8D8").s().p("AgSAzIgBgCIgBgBIAAgBIABgBIAAAAIAAgBIAAAAIAAAAIAAAAIACgFIAXhEIAGgMQADgHAFgEQACAHgCAHIgDAHIgBAGIgaBGIAAACIgBABIAAABIgBAAIAAABIgDABIgDgBg");
	this.shape_191.setTransform(129.9,101.1,0.121,0.121);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#D8D8D8").s().p("AgFAZIAEgmIABgGQAAgEADgCQADAGAAAHIgFAng");
	this.shape_192.setTransform(130.7,99.7,0.121,0.121);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#D8D8D8").s().p("AtER8IGnmzQGqm5AWgZQARgTARAKQAFADABgEQABgEgDgYQgEgnAciXQAji/ADgeQAKhOBajpQBQjQBajAQBCiRAIh7QADgngEggIgEgYQAxgbBBAeQAMAFAnAWQAdAQARAFQARAFAbgSQAcgXANgHQAugYAOB8QAhGAiFFoQgqByhHCMQhTCjgJAVQg3CAiNByQhGA5g8AfIuZOyg");
	this.shape_193.setTransform(138,114.3,0.121,0.121);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#D8D8D8").s().p("AAfK6QABgXgBgJQgDgPgSAGQgaAKgPgaQgGgLgFgCQgIgCgQAMQgeAWgegLIgZgPQgOgNAAhKQABiUBHkvQCHnOiujQQg3hChQgfIhFgTQCRgoB1AcQDNAwBgD2QCgFYhIFpQgcCPg7BuQg2Blg5AjQgvAdgVAAQgRAAgBgRg");
	this.shape_194.setTransform(185.4,125.2,0.121,0.121);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#D8D8D8").s().p("AjPGpQgpgChFgfQgJgEgJgIQgTgSADgXQAHg2hIgHQg6AGgYgDQgpgFAeg3QAUglBThbQBdhkBthkQEqkPDFguIAdAIQAiANAgAUQBmA/AiB0QAIAGgjAqQhGBVjWC3IjLC0QhTBMgmAZQgxAggsAAIgBAAg");
	this.shape_195.setTransform(178.4,122.6,0.121,0.121);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#733A3A").s().p("Ai5GaQgggEhJghQgFgNAFgmQACgSgTACQgdAEgQgQQgLgLgjAAIg/ACQhKACAbgyQAUglBRhcQBehoBshhQErkSDSgrIAZAIQAfAMAdAUQBdA/AhB0QAIAGgjAqQhFBVjXC3IjFCvQhMBGgiAVQgjAUgiAAIgNgBg");
	this.shape_196.setTransform(178.3,122.4,0.121,0.121);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#D8D8D8").s().p("ADOGkQkgolhljLQg/iAhphLQghgXghgQIgbgKQhLgYgDgHIALgCQB9giC5BhQCaBRBPBiQBCBOCxEKQCxEGAfBCQAaA2AJCQQAFBHAAA9g");
	this.shape_197.setTransform(179.1,118.8,0.121,0.121);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#D8D8D8").s().p("AmnF+QgXgNgOgoQgRgtgNgNQgJgKgcgKIgvgQQg4gVAVgjQAwhPCZhsQCJhiCOheQDgiVAtgEQAcgDBWgYQBVgRA6AcQAUAJAUARQAPANAJALICaBlIAAAUQgGAXgiAQQg6AbiGBYQiaBkgbAoIj8C/QgmAbhKAYQhZAcg0gOQgpgKggAbQgPAOgGACQgEADgFAAQgIAAgJgGg");
	this.shape_198.setTransform(168.2,116,0.121,0.121);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#733A3A").s().p("AkaFpQgjgJg5gBQgrgBgWgNQgWgNADgNQAEgQgPgPQgJgKgcgKIgvgQQg4gVAVgjQAwhPCZhtQCJhhCOheQDgiVAtgEQANgBArgKQAlgKAZAAQBOgBBEBPQBCArA6AVQAdAKAQACIAAAUQgGAXgiAQQg0AZiHBfQiUBmgbAqIj2C3QgoAeg8AVQg0AUgoAAQgTAAgRgFg");
	this.shape_199.setTransform(168.4,115.9,0.121,0.121);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D8D8D8").s().p("ABED1Qhjlfi6i3Qg6g5g7ghIgwgWICBhFIAdAFQAlAJApARQCEA2B7B5QB9B5BXE+QArCgATCIg");
	this.shape_200.setTransform(170.5,113.6,0.121,0.121);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#733A3A").s().p("ABEDxQholRi4i8Qg5g7g7glIgugZIB8g9IAXAFQAfAIAlARQByA2B7B4QB+B5BqE7QA1CfAcCGg");
	this.shape_201.setTransform(170.5,113.6,0.121,0.121);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#D8D8D8").s().p("AncF3QgQAAgSgLQglgWgOgzQgLgng9gzQgZgUgHgLQgKgRALgQIE6iZQFdijCugsQDQg0A2gVQAygUAFgdQgJghg4ATIg2AaQAHgIAMgIQAXgRAXgGQBIgUAmBiQAuB1AVAtQAVAtAWAXQAVAYgJAQQgKASg1AYQijBSk5B3QmcCeinAAIgagCg");
	this.shape_202.setTransform(159.1,108.5,0.121,0.121);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#D8D8D8").s().p("AiXCHIhKiYQBwg9BSihQAZgyARg3IAOgrQCCANAwBsQAZA3gCA0QABC/hmDFQgzBjg0A8QhShThbiqg");
	this.shape_203.setTransform(158.4,101.7,0.121,0.121);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#D8D8D8").s().p("AEGDBQg9h1iwADIkXATIhBmUIBWgDQBmACBcAXQEiBNA+EPIAGA7QAABRggBqQAFg7geg6g");
	this.shape_204.setTransform(157.7,95.6,0.121,0.121);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#733A3A").s().p("AgpgiQgegTgdgWQg6gpACgIQADgIAegIQAPgFAPgDIDBAjIA5EFg");
	this.shape_205.setTransform(183.1,118.4,0.121,0.121);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#733A3A").s().p("AC5GcQgWg1haimQhpjEhgjNQhUi1gIglQgCgLAFAEQADACADAEIA4AiQBIA2BQBpQBwCVBCDqQA0C8gGBiQgcgUgIgDg");
	this.shape_206.setTransform(179,118.7,0.121,0.121);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#733A3A").s().p("ACWBuQgZgegagPIgWgIQgMgOgagWQgygphGglQhHgkgGgRQgCgFAEgCIAFgCIAaACQAkAGAwAWQBSApBOBkQAaAiALAXQAFALgBAAQgCAAgIgKg");
	this.shape_207.setTransform(174.6,112.7,0.121,0.121);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#733A3A").s().p("Ag6gEIA7gdQA9gWgDAnQgCAmgqAOIgnAGg");
	this.shape_208.setTransform(164.3,104.5,0.121,0.121);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#733A3A").s().p("AEGDBQg9h1iwADIkXATIhBmUIBVgDQBoABBbAYQEiBNA+EPIAGA7QAABRghBqQAGg7geg6g");
	this.shape_209.setTransform(157.6,95.9,0.121,0.121);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#312544").s().p("AgGDYQhbgDg9hCQg9hCAEhYQADhZBBg+QBCg9BZADQBZAEA9BCQA+BCgDBXQgEBahCA9Qg+A7hUAAIgHgBg");
	this.shape_210.setTransform(146.2,99.7,0.121,0.121);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#C1BDBD").s().p("AgJEoQh7gFhUhZQhUhbAFh5QAFh6BahUQBahUB4AFQB7AEBUBbQBUBagFB4QgEB7haBUQhWBPhzAAIgKAAg");
	this.shape_211.setTransform(146.3,99.7,0.121,0.121);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#312544").s().p("AgGDYQhagDg9hCQg+hCAEhYQADhZBCg+QBCg9BYADQBZAEA+BCQA9BCgDBXQgEBahCA9Qg+A7hUAAIgHgBg");
	this.shape_212.setTransform(185.1,132.9,0.121,0.121);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C1BDBD").s().p("AgJEoQh7gFhUhZQhUhbAFh5QAEh6BbhUQBahUB4AFQB7AEBUBbQBUBZgFB6QgFB6hZBUQhWBPhzAAIgKAAg");
	this.shape_213.setTransform(185.2,133,0.121,0.121);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#312544").s().p("AgGDZQhagEg9hBQg+hDAEhXQADhaBCg9QBCg+BYADQBZAEA+BBQA9BDgDBXQgEBbhCA8Qg+A7hUAAIgHAAg");
	this.shape_214.setTransform(174.1,126.3,0.121,0.121);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#C1BDBD").s().p("AgKEoQh6gEhUhbQhThaAEh4QAEh8BahTQBbhUB5AFQB7AFBTBZQBTBbgEB4QgFB7hZBUQhWBPhzAAIgLAAg");
	this.shape_215.setTransform(174.1,126.3,0.121,0.121);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#312544").s().p("AgGDYQhbgDg8hBQg+hCADhZQAEhaBBg8QBDg+BXADQBbAEA8BCQA+BCgDBXQgEBahCA9Qg+A7hUAAIgHgBg");
	this.shape_216.setTransform(161.8,119.2,0.121,0.121);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#C1BDBD").s().p("AgKEoQh7gFhThZQhThbAEh4QAEh7BahUQBbhTB4AEQB7AEBUBbQBTBagEB5QgFB7hZBTQhWBPhzAAIgLAAg");
	this.shape_217.setTransform(161.8,119.2,0.121,0.121);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#312544").s().p("AgGDZQhagEg9hBQg+hDADhXQAEhaBBg9QBDg+BXADQBbAEA8BBQA+BDgDBXQgEBbhBA8Qg/A7hUAAIgHAAg");
	this.shape_218.setTransform(152.4,111.7,0.121,0.121);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#C1BDBD").s().p("AgKEoQh6gFhUhaQhUhaAFh4QAEh7BbhUQBZhUB5AFQB7AEBUBbQBTBZgEB5QgFB7hZBUQhWBPhzAAIgLAAg");
	this.shape_219.setTransform(152.5,111.7,0.121,0.121);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#BBBBBC").s().p("AF5PgQm5gapgg0IwahUMg5agEUQjngPknglQkGghkDgxQkOg0j0hHQiEgnh3guQiHg0hrg4QiChGhahKQhzhggvhuQAzBnB3BdQBcBGCDA/QDOBiEfBMQDtA/ETAwQDoAoEgAiQDuAbEcAUIIOAkQMCA4EYAXQO7BJR4BeIQaBXQIFAtISAeQRfBAPYgPQI3gKHjgiQIognHrhKQEPgqD1g2QEFg7D6g/QJQiZGciXQEPhjDUhnQEPiDCsiNQBvhcBEhfQBTh0AQh2QAJg/gMhCQgLg/gdg8Qg7h2hnhVQAwAkAwA2QAvA2AcA3QAgA7AOBBQAPBEgHBCQgNB+hTB6QhDBkhxBhQheBSh4BKQhkA/iCBEQjMBpkZBrQjaBUkaBXQjvBKkMBFQjwA+kRA+Qj7A5kMAqQnVBLpFAnQnvAiouAHQibACifAAQtRAAuwg4g");
	this.shape_220.setTransform(165,156.3,0.121,0.121);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#DDE8DD").s().p("EAnFAahUgIUgATgu1gDGUgwYgDLgGCgAxQisgWlvgbQnBgfjxgSQuThFmChYQlLhKjxkhQhLhag5hlIgqhTQjDo6AboRQAJimAdiNIAchsQABErFSDHQBtBACiA/IDMBNQBvAxUHCSIZyC5UAFFAArArRACrQVmBWUnBOQV+AkTVjKQHVhMHdhyQEnhIG9h+QJsiwFtkQQFNj5AxkOQAmjMlIiuQhQgrhZghIgOgFIA/ARQD/BGC6CFQDpCoBqD/QBpD+AQE5QANECguCoQgdBmgqBSQhGCHiACDQlnFtshFFQsyFM2CCuQoWBCoHAeQlKATjlAAQhTAAhGgCg");
	this.shape_221.setTransform(166.4,161.6,0.121,0.121);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#111111").s().p("EAnrAZ0UgIXgAUguygDDUgwagDKgGBgAvQisgVlvgbIqygxQuThEmChWQlLhJjxkaQhLhYg5hiIgqhRQjEotAPoAQAEigAaiJIAYhoQABEjFeC/QBwA9CnA8IDQBLQBvAwUHCPIPUBqQIHA4CXAUUAFFAAqArRACqQVmBWUnBNQV+AjTUjDQHVhKHehvQEohGG8h7QJrirFtkJQFNjzAxkHQAljHk+ioQhNgohWggIgMgFIBAARQDmA+CqCTQC8CiBvEGQBpD4ARElQAPDxguCiQghB3gcA8Qg8CFh1B+QlNFlsdE7QsxFD2BCpQoWBAoHAdQlHASjjAAQhWAAhIgCg");
	this.shape_222.setTransform(166.3,161.3,0.121,0.121);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#CADBCA").s().p("EAS/AqxQsthDujiUQuliVkWk9QhXhkgLhoQgDggAEgeIAGgWQAbgoAOlXQATm6AUifQAzoTAzmGQBiriCXm5QCXm5CBolQAoisAhiiIAZiAQAiASA4gKQAdgFAVgJQA1CpgrH0QgpHOhqJFQhZHjC/EQQBJBoB/BcQA2AoCvBnQCXBbIQEtQIQE3FVEFQFYEHDOJ7QBnE9AiEJIBeErQjcgEmWgig");
	this.shape_223.setTransform(92.6,127.2,0.121,0.121);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#7F6400").s().p("EgiDAukQgJhpgsitQhalZizlQQj7nXmLmBQnuniq0lBIBqAkQCHAkCSAHQHTAWGTkdQDsimFPkqQE/keFIlOQFLlRD0kgQEFk0BhixQAfg6ATg/QDOg7DMiVQBLg3BkhWICviXQDZi5CzhhQD9iIEugtQBlgKA4A3QAvAvAWBoQAOBDAKCRQALClAKBDQArEfAtCiQA2DABaCSQBcCVCjCdQCWCQESDRQG3FPPWKFQHsFBGTEAIgdByQgkCMgpCFQiAGnh0C3UgjRgTPgElgCaQimhfhug0QjHhci1gcQoHhOnuG3QkkEEikCyQioC2hSCSQhNCKgWCSQgRB4ANC8QARDkAoI+QAoHeAnBkIA6B4g");
	this.shape_224.setTransform(140.3,124.7,0.121,0.121);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#1D1427").s().p("EghfAteQgJhpgsitQhalYizlRQj7nXmLmBQnuniq0lBIBqAjQCGAmCTAGQHTAWGTkcQDsilFPksQE+keFIlOQFMlRD0kgQEFk0BhixQAyhdAZh9QKAjCIjl+IAhACQByAEBtghQBqggBchAIAEAAQBzAFBvgiQArDRArElQApEQA4CqQA8C0BoCPQBiCICyCbQCHB1EqDkQG3FQOVJ6QHLE6FyD6IgZBuQghCJglCCQh3Gch0C3UgidgR2gElgCaQimhdhug0QjHhei1gbQoHhPnuG3QkkEEikCyQioC2hSCSQhNCKgWCTQgRB3ANC8IA5MhQAnHeAoBlIA6B5g");
	this.shape_225.setTransform(140.4,126.4,0.121,0.121);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#7F6400").s().p("ApnYfQleggiqhPQishQg8hfQg7hbAYiNQAThxBbjhQB+koBNjDQHiyLhWmVQgbh/hRgkQgZgLgcgBIgWACQgBgwAzgLQAxgLBRAaQC9A9CpCzQDODHGrDeQCgBUCVA/QCGA5A0ALQDiAcBjAlQAyATAEAOQB6B9BFDvQA1C4gEBsQgIDrgvElQhOHuiODMQhQBzkvBNQkUBGmCAWQiZAJiVAAQjQAAjCgRg");
	this.shape_226.setTransform(200.9,141.3,0.121,0.121);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#594505").s().p("ApnZKQleggiqhPQishQg8hfQg7hbAYiNQAThxBbjhQB+koBNjDQGqwWgfn7QgKijg6hZQgggxgjgPIAAgCQAsgzCJBfQB+BXC4DDQDODHGrDeQChBTCUBAQCHA5AzALQDjAcBjAlQAxATAEAOQB6B8BFDwQA1C4gEBsQgIDsgvEkQhOHuiODMQhQBzkvBNQkUBGmCAWQiZAJiVAAQjQAAjCgRg");
	this.shape_227.setTransform(200.3,142.4,0.121,0.121);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#7F6400").s().p("A9RS+QoegDocgeImugeQDEjJGWsoQCAj6CEkcIBrjpMAiwAFHIAMBUQAUCWAiFGQAUC9BEBqQA9BhBhARQBbAQBrg5QBog3BihzQCii7GlhvQB2gfDPgqQC+gmA7gRQAogMC4grQCjgnBmgiQFJhtB+izQCNjGiKiEQh3hxkxgzQjmgmuzilIr9iHQEoArNyB5QS5CmAwAIQDWAlC1BWQEmCMAEDJQgcF1n9E9QpVF1zwEvQw8EF57AAIh2gBg");
	this.shape_228.setTransform(217.4,151.4,0.121,0.121);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#1D1427").s().p("A9ROYQoegEocgeImugeQDEjIGWsnQCAj8CEkcIBsjoMAivAFGIAMBVQAUCWAiFIQAUC7BEBpQA+BhBgASQBbAQBrg5QBog4BihyQCii6GlhvQB2gfDPgpQC+gmA7gSQApgMC2gsQCkgoBmgiQFJhtB/iyQA/hbAGhLIKcAYQAZA2ACA6QgbF1n+E+QpVF0zwEvQw8EE57AAIh2AAg");
	this.shape_229.setTransform(217.5,154.3,0.121,0.121);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#1D1427").s().p("Egj4APsIBpAkQCHAlCSAGQHUAWGTkdQDrilFPktQE/keFGlMQFMlRD0kgQEEk0BhixQANgXAMgeQIniRHukfIB3C6Mg0IAuuIgUIeQn/oGrXlRg");
	this.shape_230.setTransform(114.9,116.3,0.121,0.121);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#253303").s().p("EghCACEIBDhwIB0gmQCWgyCogvQIdiWIThBQLkhcJpBbQMDBxIQGHIhoDMg");
	this.shape_231.setTransform(154.5,161.1,0.121,0.121);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#2A3F00").s().p("EhlJAgfMgMVgoRMAG9gp8IA9gXQBCghE1BOQCQAlInCjQIBCXEwBJQHKBsEfALQJ2AXJmilQJhilIWlNQELFBEhF0QCQC5BaB6IJvKRIHdn5MAhnAWAIcdORIEwBLQCuArAbAFQAbAGNBCAIM7B/ICqAXQDKAhCfAsQH9CMhyDIQhyDJtoMOQm0GHmdFfMhdlAHtg");
	this.shape_232.setTransform(163.9,132.4,0.121,0.121);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#312544").s().p("AhWInQlWpYi6ozQAeAPAqg/QAbgnA2hvQA5h0AbgqQAuhJAjABQBJADBOCMQBSCWABCqQAnBNAYBCQCHFVC2ElQCqEUBoBEQBSA2jcDjQhuBxh+BnQiGi9iqktg");
	this.shape_233.setTransform(158.6,100.2,0.121,0.121);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#6E726E").s().p("AEhChQxZiog1gDQhIgBg+gEQh2gHhRgUQj7g9Bei0QA/ifVKF0QKmC4KaDZIxRiqg");
	this.shape_234.setTransform(97.6,96.9,0.121,0.121);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#9BA59B").s().p("AEhCzQxSi0g2gDQhIgBg+gEQh2gHhRgUQj7g9Bei0QCjjmUcGcQKPDLJuD8IxKi1g");
	this.shape_235.setTransform(96.9,96.2,0.121,0.121);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AhDA/QgcgagBglQABgkAcgaQAdgbAmAAQAoAAAcAbQAdAaAAAkQAAAlgdAaQgcAbgoAAQgmAAgdgbg");
	this.shape_236.setTransform(176.3,296.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AiqCfQhHhCAAhdQAAhcBHhCQBHhCBjAAQBkAABHBCQBHBCAABcQAABdhHBCQhHBChkAAQhjAAhHhCg");
	this.shape_237.setTransform(147.7,264.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("Aj0DjQhlheAAiFQAAiEBlhfQBmheCOABQCPgBBmBeQBlBfAACEQAACFhlBeQhmBeiPAAQiOAAhmheg");
	this.shape_238.setTransform(241.5,194.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AlcFEQiSiGAAi+QAAi9CSiHQCQiGDMgBQDNABCQCGQCRCHAAC9QAAC+iRCGQiQCHjNAAQjMAAiQiHg");
	this.shape_239.setTransform(89.5,74.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AldFEQiRiGAAi+QAAi9CRiHQCSiHDLAAQDMAACSCHQCRCHgBC9QABC+iRCGQiSCHjMAAQjLAAiSiHg");
	this.shape_240.setTransform(194.5,64);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AlcFEQiRiGAAi+QAAi9CRiHQCQiHDMAAQDNAACRCHQCQCHABC9QgBC+iQCGQiRCHjNAAQjMAAiQiHg");
	this.shape_241.setTransform(136.5,46);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AlcFFQiSiHAAi+QAAi9CSiHQCQiGDMAAQDNAACQCGQCRCHAAC9QAAC+iRCHQiQCHjNAAQjMAAiQiHg");
	this.shape_242.setTransform(206.5,196);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AldFEQiRiGAAi+QAAi9CRiHQCSiHDLABQDMgBCSCHQCRCHAAC9QAAC+iRCGQiSCHjMAAQjLAAiSiHg");
	this.shape_243.setTransform(49.5,99);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AlcFEQiRiGAAi+QAAi9CRiHQCQiGDMgBQDNABCQCGQCSCHAAC9QAAC+iSCGQiQCHjNAAQjMAAiQiHg");
	this.shape_244.setTransform(81.5,191);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AldFEQiQiGgBi+QABi9CQiHQCSiGDLgBQDMABCRCGQCSCHgBC9QABC+iSCGQiRCHjMAAQjLAAiSiHg");
	this.shape_245.setTransform(249.5,84);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AvDL/IgpgdQi6iJhniiQh/jJAAjuQAAjtB/jIQBnijC6iJIApgdQGUkVIvAAQJNAAGgEyQGgEyAAGvQAAGxmgExQmgEypNAAQovAAmUkVg");
	this.shape_246.setTransform(148.9,132.6);

	this.addChild(this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,299,305.1);


(lib.lab_mainbkgd = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F8A85").s().p("ArWIZIAGoYIgBiCIgDmSILTgGIFkgBIF0ABIgBANIgCEHIgKMXIi0ADIizADIlkADgALIIPIgMwOIlZABIlkgBIrEgGIgDIGIAEIHILDgCIFkADICzADICyADg");
	this.shape.setTransform(792.9,139.9,1,1,0,0,0,0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#57CFD3").s().p("Egq2AcuMAAAg5bMBVtAAAMAAAA5bg");
	this.shape_1.setTransform(624.3,183.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8DF7F1").s().p("Ehj9A6TMAAAh0lMDH7AAAMAAAB0lg");
	this.shape_2.setTransform(639.9,417.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1279.8,791);


(lib.lab_machinebubble = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5).p("AcVPZQAAmMiPlpQiJlcj7kNQj8kOlEiTQlSiZlwAAQlwAAlRCZQlFCTj7EOQj7ENiJFcQiPFpAAGM");
	this.shape.setTransform(183.8,98.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3B3B3").s().p("A8TPNQAAmMCOlqQCJlbD8kOQD6kNFGiUQFRiZFvAAQFxAAFRCZQFECUD8ENQD6EOCKFbQCPFqAAGMg");
	this.shape_1.setTransform(183.8,99.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,367.6,199.7);


(lib.lab_floorlines = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4).p("ECOPgSVITKAAECqcADYIAzAnECvGADSIkqAGECOPgSVIcNVtEBdAg4QMAgLAYyMhEYgAFIHZNOINJXgMBdHgBzEArBg4QINyYtMg4MgAFIAANTIAAY/Mg56ABHMgZLA4eECmjgfaMgpYgAEIRENJEBAMgSVMBODAAAEBNVAFLMAg+A7EEAAng4TIAAYrMgoTgADIl9NWMAuQAAAMA/lAAAEgbag7OIsSbjMg1AgAFIscNbI5gbhMBJVgBbEgtpgSVIrqaGEiu8gZTIMFmiIrAgBEimCAvaMAjagmOMgnQAAwEinzgSVMA+rAAAMA7fAAAEhcsgfwMhGLgAFEhnMhAHMg7rAgSEAAnBAJMAAAg5fMBMugBfEhDPg7OI5dbe");
	this.shape.setTransform(1120.7,412.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-0.2,2244.4,825.6);


(lib.lab_comp03 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A5DCDE").ss(10).p("AAAxiMAAAAjF");
	this.shape.setTransform(312.6,200.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D888A").s().p("AhCD+QgagzAHj8IAMj1IA6ADIBHACQAbAVgGAWQgDALgWAZQgVAYgBAQQgCAYAjAaQAZAUgEASQgDAMgVATQgVAUgEAKQgHASAXARQAYAUgCAVQgBANgQAVQgUAYgDAJQgJATAOASQAJAMANAJIATAMQAQANgNAhQgWA4g2AAIgDABQgvAAgWgpg");
	this.shape_1.setTransform(314.2,342.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#246264").ss(3).p("ApBw6IAAEUIW3AAIAAdhALTQ7IAA6VI5RgiIgGAA");
	this.shape_2.setTransform(90.2,321.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#44A7AA").ss(40).p("AAAPDIAA+F");
	this.shape_3.setTransform(268.3,96.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#44A7AA").ss(30).p("AO/NjIAA4vMggTAAA");
	this.shape_4.setTransform(120.9,99.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgUC0QgIgIAAgMQAAgMAIgKQAJgIALAAQAMAAAJAIQAIAKAAAMQAAAMgIAIQgJAJgMAAQgKAAgKgJgAgUAUQgIgIAAgMQAAgLAIgIQAJgJALAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgKAAgKgJgAgUiKQgIgIAAgNQAAgMAIgJQAJgIALAAQAMAAAJAIQAIAJAAAMQAAANgIAIQgJAJgMAAQgKAAgKgJg");
	this.shape_5.setTransform(195.3,261.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4DBCBF").s().p("A9PRAIAA68IZTAiIAAaVIAA6VI5TgiIAAnDIeqAAIFvAAIBoAAIAAABIHmAAIAAgBIM3AAMAAAAh/gAhZQ7IAA9hI25AAIAAkUIAAEUIW5AAgAA0nQQgIAKAAAMQAAAMAIAIQAKAJALAAQANAAAJgJQAIgIAAgMQAAgMgIgKQgJgIgNAAQgMAAgJAIgAA0pvQgIAIAAAMQAAANAIAIQAKAJALAAQANAAAJgJQAIgIAAgNQAAgMgIgIQgJgJgNAAQgMAAgJAJgAA0sQQgIAJAAAMQAAANAIAIQAKAJALAAQANAAAJgJQAIgIAAgNQAAgMgIgJQgJgIgNAAQgMAAgJAIgA9Pp8g");
	this.shape_6.setTransform(187.9,321.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#246264").s().p("AgGCFIAAgBIAAiFIBNAAIAAhGICjAAIClAAIAABGIBPAAIAACFIAAABgAndCEIAZkIICuAAICdAAIALEIg");
	this.shape_7.setTransform(244.8,199.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.1,-20,380.2,451.7);


(lib.blue_teeth = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghgUIAogqIAbB9g");
	this.shape.setTransform(45.2,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyghIBlgVIgcBsg");
	this.shape_1.setTransform(27.3,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Agng5IBPAZIhABag");
	this.shape_2.setTransform(4,13.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48.7,19.8);


(lib.blue_mouth = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("AiBCUQg3g9AAhXQAAhWA3g9QA2g+BLAAQBMAAA3A+QA2A9AABWQAABXg2A9Qg3A+hMAAQhLAAg2g+gAhihvQgpAuAABBQAABCApAuQApAvA5AAQA6AAApgvQApguAAhCQAAhBgpguQgpgvg6AAQg5AAgpAvg");
	this.shape.setTransform(47.7,64.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBQQjBgChfh8QAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAuA4BXAdQBLAZBTgBQBYgCBIgdQAxgUAYgSQAMgLAYgZQAXgYANgLQABAAAAAAQABgBABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgsBOhdAqQhQAkhfAAIgFgBg");
	this.shape_1.setTransform(30.4,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghgUIAogqIAbB9g");
	this.shape_2.setTransform(56.4,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyghIBlgVIgcBsg");
	this.shape_3.setTransform(38.5,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Agng5IBPAZIhABag");
	this.shape_4.setTransform(15.3,17.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.2,85.4);


(lib.blue_legs = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A3C4B").s().p("AkhFFQATifgOkEIgSjmICVAfIg5IfQCigQC/AsQBgAWBAAZg");
	this.shape.setTransform(123.6,203.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A3C4B").s().p("AlKFzQAWi2gQkoIgUkHICqAjIhCJsQC6gSDZAyQBuAZBIAdg");
	this.shape_1.setTransform(64,212.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(29.4,170.6,124.5,79.2);


(lib.blue_leg_R_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A3C4B").s().p("Ajzh2QAVgbAfgkIAzApIAAAAIAEADQCKBECGCDQBEBDAoA1g");
	this.shape.setTransform(7,54.2,1,1,0,0,0,-19.8,-13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A3C4B").s().p("AiXFTQG0nhnKitQBKgtBfAqQGDCvnDHig");
	this.shape_1.setTransform(14.8,26.9,0.85,0.85);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,51.3,88.1);


(lib.blue_leg_R = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A3C4B").s().p("AlKFyQAWi1gQkpIgUkGICpAkIhBJrQC5gSDaAyQBtAZBJAcg");
	this.shape.setTransform(34.6,37.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69.1,74.2);


(lib.blue_leg_L_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A3C4B").s().p("AkYg3IAthKIA3AZIgCADIAfAHQCRAmCWBbQBVA0A0Asg");
	this.shape.setTransform(3.6,57.6,1,1,0,0,0,-24.6,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A3C4B").s().p("AhUEfQDAktjTkQICTAfQCQEJjHEVg");
	this.shape_1.setTransform(10.5,28.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.4,79.4);


(lib.blue_leg_L = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A3C4B").s().p("AkbGNQASiYgMj1IgBgWIgelWIC7ggIhTLOQCigQC+AsQBhAWBAAZg");
	this.shape.setTransform(29.8,25.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,-14.4,61.8,79.6);


(lib.blue_eyesClosed = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhqAjQBvhfBhARQABABAEAKIgEAAIgBAAQhbgghuBrIAAAAIgEADg");
	this.shape.setTransform(18.1,53.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#19A5BB").s().p("AhQBRIgHgHIAAgBQBuhrBbAgIABABIAAABQAAAvgiAiQgiAigvAAQguAAgigigAhyAAQAAguAigiQAigiAuAAQAvAAAiAiQAdAdAEAnQhhgShuBgQgVgdAAglg");
	this.shape_1.setTransform(16.9,50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AidA1QCkiPCQAbQABAAAGAQIgGgBIgBAAQiHgwijCgIgBAAIgFAFg");
	this.shape_2.setTransform(66,36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgzCBQgHgDACgGQARg5AhhFQALgbAxhfQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgeA9gbBKIgUA7QgMAkgJAWQgCAEgEAAIgEgBg");
	this.shape_3.setTransform(5.8,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA+A+Qg+hEhIg3QgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAtAUAnAkQAZASAIAIQATARAIARQADAFgFAEQAAABgBAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgDAAgCgCg");
	this.shape_4.setTransform(61.3,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#19A5BB").s().p("AhzB1QgxgxAAhEQAAhDAxgwQAwgxBDAAQBEAAAxAxQAwAwAABDQAABEgwAxQgxAwhEAAQhDAAgwgwg");
	this.shape_5.setTransform(65.5,35.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#168ECC").s().p("AhpBqQgsgsAAg+QAAg8AsgtQAtgsA8AAQA+AAAsAsQAsAtAAA8QAAA+gsAsQgsAsg+AAQg8AAgtgsg");
	this.shape_6.setTransform(60,40.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#168ECC").s().p("AhfBfQgngoAAg3QAAg2AngoQAogoA3AAQA3AAAoAoQAoAoAAA2QAAA3goAoQgoAog3AAQg3AAgogog");
	this.shape_7.setTransform(14.9,52.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82.1,66.4);


(lib.blue_eyes = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgzCBQgHgDACgGQARg5AhhFQALgbAxhfQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgeA9gbBKIgUA7QgMAkgJAWQgCAEgEAAIgEgBg");
	this.shape.setTransform(5.8,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA+A+Qg+hEhIg3QgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAtAUAnAkQAZASAIAIQATARAIARQADAFgFAEQAAABgBAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgDAAgCgCg");
	this.shape_1.setTransform(61.3,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAjQgOgPAAgUQAAgTAOgPQAPgOATAAQAUAAAPAOQAPAPAAATQAAAUgPAPQgPAPgUAAQgTAAgPgPg");
	this.shape_2.setTransform(68,40.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiAjQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgTAAgPgPg");
	this.shape_3.setTransform(20.9,51.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBEBEB").s().p("AhzB1QgxgxAAhEQAAhDAxgwQAwgxBDAAQBEAAAxAxQAwAwAABDQAABEgwAxQgxAwhEAAQhDAAgwgwg");
	this.shape_4.setTransform(65.5,35.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBEBEB").s().p("AhQBRQgigiAAgvQAAguAigiQAigiAuAAQAvAAAiAiQAiAiAAAuQAAAvgiAiQgiAigvAAQguAAgigig");
	this.shape_5.setTransform(16.9,50.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#168ECC").s().p("AhpBqQgsgsAAg+QAAg8AsgtQAtgsA8AAQA+AAAsAsQAsAtAAA8QAAA+gsAsQgsAsg+AAQg8AAgtgsg");
	this.shape_6.setTransform(60,40.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#168ECC").s().p("AhfBfQgngoAAg3QAAg2AngoQAogoA3AAQA3AAAoAoQAoAoAAA2QAAA3goAoQgoAog3AAQg3AAgogog");
	this.shape_7.setTransform(14.9,52.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82.1,66.4);


(lib.blue_ear_R = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B8C8C").s().p("AgKg3IBKgqIgBByIh+BRQAdhYAYhBg");
	this.shape.setTransform(18.4,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFD2D3").s().p("AAmhZIgBCJIhLAqQArh2Ahg9g");
	this.shape_1.setTransform(21.2,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFD2D3").s().p("Ah6DaQA2jDBBjCIB+hRIgBB5Ih0GAg");
	this.shape_2.setTransform(12.4,50.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.1,76.2);


(lib.blue_ear_L = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B8C8C").s().p("Ag6AAIA2gqIA/AZIgYA8g");
	this.shape.setTransform(27.7,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B8C8C").s().p("AhZgOIA1gqIB+AxIgZBAg");
	this.shape_1.setTransform(20.8,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFD2D3").s().p("AhGgFIAvgkIBeArIgPAog");
	this.shape_2.setTransform(24.2,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFD2D3").s().p("AgzAbIBnhPIgoBpg");
	this.shape_3.setTransform(32.4,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFD2D3").s().p("AiHgVIB1haICaBJIg5CXg");
	this.shape_4.setTransform(13.7,31.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.7,42.7);


(lib.blue_body_legs = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#168ECC").s().p("AgmA2QgFgCABgEIAAgxQAAgeAEgVQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABAAAAQgCAUADAfIADAhQApgoAWgWQADgDAEADQAEACgDADQgNATgWAUIglAlQgDACgCABIgDgBg");
	this.shape.setTransform(61.1,119.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#168ECC").s().p("AADAbQgLgFgLgRQgDgEgMgYQgBAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAPAXQAKALAHAFQAJAEAHgOIAIgUQABgDAEABQAFABgBAEQgBAOgHAOQgIAOgLAAIgGgBg");
	this.shape_1.setTransform(60.2,157.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#168ECC").s().p("AgcA4QgOgYgDgfQgCgRABgnQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAlADASQAEAYAKASQAJgQARgSQAcgWAMgOQAAAAABgBQAAAAABAAQAAAAABAAQABABAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAgBABQgIAPgaAXQgYAYgIARQgCACgDAAQgDAAgBgCg");
	this.shape_2.setTransform(27.3,72.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#168ECC").s().p("AANBFQgFgCAAgEQgDgUgMgWIgZgjQgBAAAAgBQAAgBAAAAQAAgBAAAAQABAAABgBQADgBACACIAbAjQAIAMAFANQAQgzgJg5QgBAAABgBQAAgBAAAAQAAAAABgBQAAAAABAAQABgBAAAAQABAAAAABQABAAAAAAQAAABABABQASBHgaA9QgBAEgDAAIgCgBg");
	this.shape_3.setTransform(123.2,98.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#168ECC").s().p("AgRAxQgWgtgFg2QAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQALAuASAkIAVghQAUgcAJgTQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAgBAAQgHAXgQAaIgaAvQgCAEgEAAQgEAAgCgEg");
	this.shape_4.setTransform(16,134);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#168ECC").s().p("AgnBCQgFgCABgFQAUhAA+g8QAAAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgWAZgVAkIggBAQgBABAAAAQAAABgBAAQAAAAgBAAQgBABAAAAIgDgBg");
	this.shape_5.setTransform(12.1,100.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#168ECC").s().p("AAABJQgeg/AihUQABgBAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAgBABQgKAjACAlQAAAdANAoQACAGgGACIgDABQgEAAgCgEg");
	this.shape_6.setTransform(7.6,99.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1DB5CD").s().p("AqBHTQg0i2ARjxQAOjJA8jVQBhlcDliLQBzhFBfAAQDLAABfA2QBOAsAiBmQAUA+AfCdQAnCXBQB1QBmCVAqDAQAtDPgqCxQgvDHiUBxQioCBkYAAQoRAAiCnMg");
	this.shape_7.setTransform(68.1,92.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,136.3,185.6);


(lib.blue_arm_R_pointing = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRBQQgcgBAVhkIAIghQAgg1ASA5QgZCCgZAAIgBAAg");
	this.shape.setTransform(22.7,71,1,1,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRBQQgcgBAVhkIAIghQAgg1ASA5QgZCCgZAAIgBAAg");
	this.shape_1.setTransform(17,71.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#168ECC").s().p("AibFGQAbgtAZhaQAyiygOjYQgGg/AIgyQAQhjBHBDIAfAzQAlBBAYBNQBPDyhDEFQgnATg3AGQgUADgRAAQhVAAhBgyg");
	this.shape_2.setTransform(20.7,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag8BfQgVgDAuhcIAwheIA2AOIg0BYQg1BXgVAAIgBAAg");
	this.shape_3.setTransform(6.8,81.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.5,90.6);


(lib.blue_arm_R = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#168ECC").s().p("AibFGQAbgtAZhaQAyiygOjYQgGg/AIgyQAQhjBHBDIAfAzQAlBBAYBNQBPDyhDEFQgnATg3AGQgUADgRAAQhVAAhBgyg");
	this.shape.setTransform(20.7,37.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghABIAZhlIA2AAIgdBkQgeBjgVACIgBAAQgUAAAWhkg");
	this.shape_1.setTransform(24.6,82.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiABIAahlIA1AAIgcBkQgeBjgWACIAAAAQgUAAAVhkg");
	this.shape_2.setTransform(14.9,83.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag8BfQgVgDAuhcIAwheIA2AOIg0BYQg1BXgVAAIgBAAg");
	this.shape_3.setTransform(6.8,81.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.5,94.1);


(lib.blue_arm_L = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#168ECC").s().p("AknDSQAegoAygnQCoiJBeifQAwhPAOg0QBjARBCBZQAhAsANApQiQDijmBuQh0A4hXAJQhjgHA9hPg");
	this.shape.setTransform(32,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhBA8IA6hXQA5hWANAQQANARgzBbIg0BZg");
	this.shape_1.setTransform(63.5,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBA8IA6hXQA5hWANAQQANARgzBbIg0BZg");
	this.shape_2.setTransform(58.2,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgtBOQAPgzATgvQAjhiAQANQAQANgaBkQgNAzgRAxg");
	this.shape_3.setTransform(50.7,10.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.2,76.7);


(lib.orange_arm_Lwave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// efx
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.302)").s().p("AjIASQgOgGgPgJQBdAeBfgGQBbgHBXggQAwgSAtgWQhuBTiDASQgYAEgXAAQhLAAhDgjg");
	this.shape.setTransform(17.9,73.9,1,1,0,0,0,0.4,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.302)").s().p("AiaAOIgVgMQBGAYBKgGQBFgFBDgYQAlgOAigQQhTA+hmAPQgSACgSAAQg5AAg0gag");
	this.shape_1.setTransform(20.4,82.2,1,1,0,0,0,-0.3,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.302)").s().p("Ah2ALIgQgJQA2ASA5gEQA0gEA0gTQAdgKAZgNQhAAxhNAKQgPACgOAAQgsAAgngUg");
	this.shape_2.setTransform(22.7,91.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// arm
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CA621E").ss(9.1,1).p("AgxlaIBjK1");
	this.shape_3.setTransform(13.4,34.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

	// fingers
	this.instance = new lib.orange_hand01();
	this.instance.setTransform(25,80.8,1,1,0,0,0,20.2,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({skewX:-21,skewY:159,x:17.6,y:82.6},0).wait(2));

	// Layer 6
	this.instance_1 = new lib.orange_hand01();
	this.instance_1.setTransform(17.6,82.6,1,1,0,-21,159,20.2,15.6);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({skewX:0,skewY:0,x:25,y:80.8},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-4.5,51,104.7);


(lib.shadow02 = function() {
	this.initialize();

	// hidden
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AuxFOQgLAAAAgTIAAp1QAAgTALAAIdjAAQALAAAAATIAAJ1QAAATgLAAg");
	this.shape.setTransform(88.5,21);

	// blur
	this.instance = new lib.shadow();
	this.instance.setTransform(90,17.3,1,1,0,0,0,90,17.3);
	this.instance.alpha = 0.398;
	this.instance.filters = [new cjs.BlurFilter(12, 12, 3)];
	this.instance.cache(-2,-2,184,39);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-16,216,70.5);


(lib.lab_machine01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AglAmQgPgQAAgWQAAgVAPgPQAQgRAVAAQAWAAAQARQAPAPAAAVQAAAWgPAQQgQAPgWAAQgVAAgQgPg");
	this.shape.setTransform(230.3,81.8,0.651,0.651);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("ALJGoIgvg7IgYgfIh7iNIgWgXIgvgwIgzgwIgbgZQgOgPgNgKQgfgZgagXIgegZIh+hfIgigWIhFgpIghgTIhrgzQgvgVgXgJIhHgZQgogNgcgHIhBgTIhpgWIjigYQgEgBAAgDQABgEADAAICiADIA1ADIB7AQIBEAOQAcAFArAMIBJAVIBLAaIBuAvQAYAKAOAIIBKAnIAkAUICLBaQAXAPAKAJIA9AzIAdAaIA1A0IAYAbIAtA2QAKAMAKAPIA0BLIAyBZQAHAMAKAYIAeBGQABAEgDABIgCABQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_1.setTransform(178.3,43.5,0.651,0.651);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#127E7B").s().p("EghiAB/IAAj9MBDFAAAIAAD9g");
	this.shape_2.setTransform(139.8,124.9,0.651,0.651);

	this.instance = new lib.lab_machinebubble();
	this.instance.setTransform(138.6,63.3,0.651,0.651,0,0,0,183.9,99.7);
	this.instance.alpha = 0.5;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(2).p("AmpLhINTgNAmpIBINDA6AmpFEINDhSAmpBPINTAmAmpiqINTBTAmpmPINDglAmpp5INTAAAmpstINDAwAmpweINTBwAmpPZINTBG");
	this.shape_3.setTransform(97.1,294.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#696754").s().p("AgxBNIAAiZIBjAAIAACZg");
	this.shape_4.setTransform(218.6,214.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#431313").s().p("AgxBNIAAiZIBjAAIAACZg");
	this.shape_5.setTransform(200.6,192.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#99FFFC").s().p("AgxBNIAAiZIBjAAIAACZg");
	this.shape_6.setTransform(200.6,214.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#99DAFF").s().p("AgxBNIAAiZIBjAAIAACZg");
	this.shape_7.setTransform(183.4,192.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF99").s().p("AjhC7IAAiaIBlAAIAACagAB+ggIAAiaIBkAAIAACag");
	this.shape_8.setTransform(201,203.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#127E7B").s().p("AmpSWIAAjzIAAj4IAAjgIAAi9IAAj1IAAj5IAAjlIAAjrIAAi0IAAjxIAAhuINTAtIAACyItThxINTBxIAAE0ItTAAINTAAIAAIjItThTINTBTIAADMItTgmINTAmIAAJfItTANINTgNIAAFLItThGINTBGIAADbgAGaIFItDg6gAmpEOINDhSgAmpnFINDglgAGas0ItDgwgAGqPpgAGqKegAGqvkg");
	this.shape_9.setTransform(97.1,300.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#189E9A").s().p("Ap+a4QhjgWhYgdQixg7hghSQhnhZAAhsMAAAgwnMAljAAAMAAAAwnQAABshoBZQhfBSixA7QhYAdhjAWQkWA9lpAAQlnAAkXg9gAtEyUIAADxIAAC0IAADrIAADkIAAD8IAADyIAAC9IAADhIAAD4IAADzINTAuIAAjbIAAlLIAApfIAAjMIAAojIAAk1IAAixItTgtgALytJIBkAAIAAiaIhkAAgAI9tJIBlAAIAAiaIhlAAgAGRtJIBlAAIAAiaIhlAAgALywmIBkAAIAAiaIhkAAgAI9wmIBlAAIAAiaIhlAAgAGRwmIBlAAIAAiaIhlAAg");
	this.shape_10.setTransform(138.2,306.6);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.instance,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.6,279.6,486.5);


(lib.lab_floor = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lab_floorlines();
	this.instance.setTransform(650.3,234.7,0.651,0.651,0,0,0,1121.1,412.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#77E8DB").s().p("EhkYAnNMAAAhOaMDIxAAAMAAABOag");
	this.shape.setTransform(642.5,251);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.1,-34,1460.8,537.4);


(lib.lab_computer02 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mc_screen();
	this.instance.setTransform(110.6,120.4,1,1,0,0,0,62.3,91.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#65D1D4").ss(2).p("ANxgwIjRAAIAqAsIBpBsAJDiSIBdBiAMtiSIBEBiACjABIELgCIgagvIj2AAIAFAxIAPCTAFfiSIA1BiIEMAAACTiSIALBiIkDAAIABA0IADCQAGugBIEcgDIDDgDIgcgpIDPAAAGugBIBRCVAONgHIExgEAONgHIBrCbAtegwIgwA/IhkCFAsUiSIhKBiIkfAAAy9ASIEvgDID4gEIAUg7IjcAAAhoiSIADBiAqWALIE+gEIACg3IksAAAlSiSIgEBiIDxAAAphiSIghBiAlYAHIgGCNAqWALIguCJAhkAEIj0ADAhkAEIEHgD");
	this.shape.setTransform(154.8,528.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#307B7E").s().p("AtelRIa0gKIAJUGI61ALgAtaooIAAmNIa1AAIAAGNg");
	this.shape_1.setTransform(153.6,400.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A696B").s().p("EgS9AniICtiqIfjAAIDrCqgAwv5EIgBuYITvgFIgDSCIgGKvIgBAAIk2AEIk5ACIk5ABIlAABgEgQnggNIgBDlIAHRuIOgAFIE0ADIgJ8aIzPgFg");
	this.shape_2.setTransform(154.8,280.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#45ACAF").s().p("EgRUArRIlAknIFAj7MgAMgoVIm8kdMAAAghNMAw5AAAMAAAAhIIoFFSMAAMAnlIFND7IkQEngEgTPAmLMAl7AAAIjripI/jAAgAt7MKIAIUJIa0gLIgI0JgAt3IyIa1AAIAAmNI61AAgEgRCgoyIABOYIgEOcIFAgBIE5gCIE5gCIE2gDIABAAIAGqvIADyCg");
	this.shape_3.setTransform(156.6,289.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0F4A46").ss(4).p("EAOvggOMAAAA0QIgjAOIg2AWIhkAoIhUAhIhAAaIiRA7IgBAAIhXAjI0wIW");
	this.shape_4.setTransform(352.8,207.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0F4A46").p("AGrmpIAiFmAIthzIAQlwAKGigIgIldANrpdIAHFGALRofIApFFAMyj2IAElRApmgBIAAHMAtwJeIgBnzArMILIgmnUAFUmGIAAGAIAAAFAmAFlIACnDAoUGvIAVnYADnAvIAFmIAisD6IgsmbAAqCOIgtmFAB1BoIAGmTAj7EiIghmoAhRjYIAAGf");
	this.shape_5.setTransform(356.1,397.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0D3734").p("ACNlqIhbAhIAGDqIBVgKIAAkBIAAhsIheARIADB8AAvnFIhrAUIhNAPIAACdIBSgeIAHDRIBogNIAEC9IhkAtIAFCKIBjgmIBNgdIAAiXIAAikAgwhSIAIDdIhhAqIAACHIBmgnAiJhHIBZgLAA8BeIBRgjAiJkFIAAC+IAAD8IgGADAg8mxIAFCOIBpgmABDF7IBKghIAAiIABADvIADCMAiJE8IAACZIBrgvIgFiRAgeGmIBhgrABADvIgEiRAiPE+IAGgCAiPhGIAGgBAiJkFIgGAC");
	this.shape_6.setTransform(419,280.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D3835").s().p("Al8CFIAAANIgHEJIgEEIIMOkzIgUwYIliBXICygvIC4gzIAaQrIsoE8g");
	this.shape_7.setTransform(320.5,306.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#27C2B6").s().p("AryG/IAHkIIAAgOIAAgEIAAgEIAUptIF0hfIACgBIAEgBIFhhWIAUQXIsPEzgAHgBcIAAiEIBhgrIAFCIIgFiIIBmgsIADCOIhkAmIBkgmIgDiOIBRgkIAACYIhOAaIBOgaIAACGIhKAgIgEiMIAECMIhkArIgEiRIAECRIhqAwgAHgBcIBmgngAHgknIAAi+IBSgdIAHDQIBpgMIBWgKIhWAKIgFjrIhrAnIgFiOIAFCOIhSAdIAAidIBNgOIBtgUIADB7IgDh7IBegSIAABsIhbAhIBbghIAAECIAAClIhRAkIgFi/IAFC/IhmAsIgIjfIAIDfIhhArgAHgknIBZgLgAKnh/gAL4ijgAIyoCIBrgnIAFDrIhpAMgACXk7QgHgGAAgLQAAgJAHgHQAHgIAJABQAKgBAHAIQAHAHAAAJQAAALgHAGQgHAIgKgBQgJABgHgIgAKik+gACXnxQgHgIAAgJQAAgKAHgIQAHgGAJgBQAKABAHAGQAHAIAAAKQAAAJgHAIQgHAGgKABQgJgBgHgGgAIyoCgAIyoCgAIyoCgACXqdQgHgHAAgKQAAgKAHgIQAHgHAJAAQAKAAAHAHQAHAIAAAKQAAAKgHAHQgHAGgKABQgJgBgHgGg");
	this.shape_8.setTransform(357.2,302.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#43938D").s().p("ArIfCIFRiLIFRiJIKakPIACyfIGohpMgAWghFIilAAIAUfjI7LFGIgBgCIaylZIgQ/XIAAgMIDPAAIAAAMIAHW6IAIKeImjBtIACSgIqqEOQjiBZhxAsIlUCDgAwq+0IAAgDIAagDIAAADIBlUPg");
	this.shape_9.setTransform(326.1,198.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#166963").s().p("A3YdOMAGJg/5IE3hQIB+UMIhl0PIddAAIAQfZI6yFXIABACIbLlEIgU/lIClAAMAAWAhHImoBpIgCSdIqcEPIlPCJIlRCLIABACIFUiDQBvgsDihZIKskOIgCyeIGjhtIgIqgIgH26ICfAAIANAAMAAAA5QIgpAUIgHlGIAHFGIhBAhIAElRIgEFRIg4AcIgplFIApFFIh0A6IgIldIAIFdIhYAtIAQlxIgQFxIhgAwIgilmIAiFmIh5A9IAAmAIAAGAIhuA3IAFmKIgFGKIhxA5IAGmVIgGGVIhMAmIgumHIAuGHIjXBsIgsmdIAsGdIhPAoIghmqIAhGqIiGBDIADnFIgDHFIiTBKIAUnaIgUHaIi3BcIglnUIAlHUIijBTIgCnzIACHzIhFAigEgApAhKIAAnOgAHrdGIAAmhgAXMQSIgjAOIg2AWIhlAoIhTAiIhAAZIiRA7IgBAAIhXAjI0wIWIUwoWIBXgjIABAAICRg7IBAgZIBTgiIBlgoIA2gWIAjgOMAAAg0QgAGcBpIizAwIgEABIgCAAIlyBfIgUJwIAAADIAAAEIgYIvIMok7IgZwtgAQoO9IBqgvIBkgsIBKggIAAiIIAAiXIAAimIAAkCIAAhrIheARIhtAUIhNAOIAACeIgHACIAHgCIAAC+IgHAAIAHAAIAAD+IgHADIAHgDIAACGIgHADIAHgDgALfFpQgHAHAAAKQAAAKAHAHQAHAHAJAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgHgKAAQgJAAgHAHgALfCyQgHAHAAAKQAAAKAHAHQAHAHAJAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgHgKAAQgJAAgHAHgALfAGQgHAHAAAKQAAAKAHAHQAHAHAJAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgGgKAAQgJAAgHAGgAWwVmgAQoMjgAQoKdgAQoDhg");
	this.shape_10.setTransform(298.8,231.6);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.8,457.7,567);


(lib.lab_bigmachine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#53958D").ss(6).p("AgzlKQAWgzAdAAQAfAAAVAzQAWAxAABHQAABHgWAyQgVAygfAAQgdAAgWgyQgWgyAAhHQAAhGAWgygAA0BbQAWAxAABHQAABHgWAyQgVAygfAAQgdAAgWgyQgWgyAAhHQAAhGAWgyQAWgyAdAAQAfAAAVAyg");
	this.shape.setTransform(40.5,485.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#53958D").s().p("AjMD8QgGgRAAgYQAAgYAGgRQAFgRAIAAQAIAAAGARQAFARAAAYQAAAYgFARQgGARgIAAQgIAAgFgRgAhkDvIAAg7IE3AAIAAA7gAjMipQgGgRAAgYQAAgYAGgRQAFgRAIAAQAIAAAGARQAFARAAAYQAAAYgFARQgGARgIAAQgIAAgFgRgAhki2IAAg7IE3AAIAAA7g");
	this.shape_1.setTransform(59.4,485.6);

	this.instance = new lib.mc_blinkinglights();
	this.instance.setTransform(243.9,572.4,1,1,0,0,0,22.7,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#34B4A4").s().p("AhXZzIgzgBIgzgBQgbgBhJgFIhigJIi3gdQhbgThHgUQhNgWg4gXQg4gVgrgVQgggPgegQIgVgNIAVALQAaAMAmAQQAmAPA/AVQAyAQBUAWIBOARIDaAjIBfAKICUAHIAyACIAzAAIDJgHIAzgDID1gcQAzgHCDgXIBTgRIBPgRIDAguQARgEAegJIBbgYIhZAeIgvAQIi+A3IhOAVIhTATIhZASQg0AKgpAGIj3AfIiaAJIgyACgAiGW+QhYgChegGQgygEgqgEIhbgLIgNgCIHdtGIgTgDIgXgFQgXgGgVgMQgUgMgRgRIgQgSIgJgOIAKAOIAQARQAQAOAWANQAWALAVAGIAXAFIAXACIAEAAInJM8IBNAJQAyAFApACQBeAHBYADQC6AFCwgPQDCgPCmgpQAzgMAkgLQAygPAlgNQBYgfBQgpQgpAXgpATQgnASgtARQhUAhhaAXQinArjCATQiNANiUAAIhLgBgAgLIMIgQgEIgPgEQgdgJgXgOQgRgLgPgOIgKgLIANAGQARAHAUAFQAYAIAbAFIAcAEIAcACIAegBIA4gKIAYgHIAUgIIAQgGIAOgFIgLALQgDADgKAIIgSAOIgYANIgOAGIgeAJIgQADIgiADgAlL2aIhRgCIhRgDIhQgFIhOgFQhwgIgogEIiSgQQiUgRh1gVIg8gLIg5gKIhpgXQhcgVhOgWQg8gRgvgQIglgNIAmALQAmAMBGARQBMATBeASQBdASCCAUQBlAPCkARICRANIBLAGIBNAFIAnACIEYAKQB6ABAqAAIBSgBIBTgCID1gIIBSgEIE+gXQBBgFBWgJICRgQICKgQIBBgJIF8g3IBPgNICVgZIgmAIIhuAXIhPAQIhdARIhpAUIj1AnIkbAlImFAlIhSAFIlIAOIilABIggABIiFgCg");
	this.shape_2.setTransform(175.7,246.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C6B61").s().p("EgZBBT+MAABhKYIV63fIAAuhMgm7gkbIAAzJMBUDAAAIAAUFMglgAjaIAAN/IVrYFMgAUBKZg");
	this.shape_3.setTransform(175.1,349.8,0.651,0.651);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4D4D4D").ss(40).p("AKKMqIAA2LI3bAA");
	this.shape_4.setTransform(314.4,646.9,0.651,0.651);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,376.7,719.7);


(lib.blue_mouth_talk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBQQjBgChfh8QAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAuA4BXAdQBLAZBTgBQBYgCBIgdQAxgUAYgSQAMgLAYgZQAXgYANgLQABAAAAAAQABgBABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgsBOhdAqQhQAkhfAAIgFgBg");
	this.shape.setTransform(30.4,8.1);

	this.instance = new lib.blue_teeth();
	this.instance.setTransform(35.6,14,1,1,0,0,0,24.3,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[]},12).wait(6));

	// jaw
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.251)").s().p("AhCAHQBnATAeg7QgKBDgwAAQgdAAgugbg");
	this.shape_1.setTransform(53.3,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYgMIAAgBIAAgBQAGgHAGgEQAHgFAIAAIAEABQAIABAHAFIACAAIABACIgNA0g");
	this.shape_2.setTransform(50.9,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("AgZBDQgLgKgIgNQgHgKgCgLIgBgIIABgOQACgSADgGQADgWAIgQIAFgGIAkAtIAOg2QAGAGAJAPIADADQAIAOAFAYQAFAVABAOIAAACQgDAPgIALQgJAMgLAHQgLAJgNAAQgMgBgNgJg");
	this.shape_3.setTransform(51.7,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAxATQgEgVgJgOIgCgEQgKgPgGgGIgBgBIgCAAQgHgGgIgBIgDAAQgJAAgHAFQgGAEgHAHIAAABIAAAAIgEAHQgJAQgDATQgDAHgCATIAAAPIgBgFQgBgSACgUQABgTAKgRQACgFAEgDIAAAAQAGgJAHgFIAAABQAJgGAKAAIAEABIAAAAQAKABAIAGIABABQAJAHAIALQANAVAEAaIABANQADANgCALQgBgOgFgXg");
	this.shape_4.setTransform(51.7,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},15).wait(3));

	// jaw
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABUAgQgGglgNgXQgTghgNgKIgBgBQgMgIgNgCIgHgBQgOAAgNAIQgLAGgJANIAAAAIgBABQgFAFgEAHQgQAagGAhQgFAMgFAhQgCANAAALIgBgIQgBgfAFghQAFggASgdQAEgIAGgGQAKgPANgHIAAABQAPgKARAAIAIABIAAAAQAQACAOAKQAOALANAVQAVAjAEAtIACAWQACAUgDAUQAAgXgHgng");
	this.shape_5.setTransform(39.7,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgogVIAAAAIAAgBQAKgMALgGQANgIANAAIAHAAQANACAMAJIACABIgWBVg");
	this.shape_6.setTransform(39,19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424242").s().p("AguBwQgSgQgMgVQgLgRgDgSIgBgNQAAgLADgNQAEgfAGgMQAGgjAQgaQAEgHAFgFIA7BHIAWhXQAMAKAUAhQANAXAFAnQAIAlAAAXIgBAEQgFAYgQATQgPAUgSANQgTANgUABQgYgCgUgQg");
	this.shape_7.setTransform(39.7,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},12).to({state:[]},3).wait(3));

	// jaw
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424242").s().p("AkgjPQB4CMD4gcQCAgPBRhfQhXBsA3DRQiWBghsAAQjlAAg6mfg");
	this.shape_8.setTransform(28.8,24.2);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(9).to({_off:false},0).to({_off:true},3).wait(6));

	// jaw
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424242").s().p("AkdhzQB3CKD4gaQCAgPBRhfQhWBsBdAwQj1BJiOAAQkBAAA9jng");
	this.shape_9.setTransform(28.5,15);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(6).to({_off:false},0).to({_off:true},3).wait(9));

	// jaw
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#424242").s().p("AkgiYQB4CND4gcQCAgQBRhfQhXBsBJB1QiFBOhrgBQjTAAhwkwg");
	this.shape_10.setTransform(28.8,18.7);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(3).to({_off:false},0).to({_off:true},3).wait(12));

	// image
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EBEBEB").s().p("AiBCUQg3g9AAhXQAAhWA3g9QA2g+BLAAQBMAAA3A+QA2A9AABWQAABXg2A9Qg3A+hMAAQhLAAg2g+gAhihvQgpAuAABBQAABCApAuQApAvA5AAQA6AAApgvQApguAAhCQAAhBgpguQgpgvg6AAQg5AAgpAvg");
	this.shape_11.setTransform(47.7,64.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.2,85.4);


(lib.blue_mouth_shut = function() {
	this.initialize();

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBQQjBgChfh8QAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAuA4BXAdQBLAZBTgBQBYgCBIgdQAxgUAYgSQAMgLAYgZQAXgYANgLQABAAAAAAQABgBABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgsBOhdAqQhQAkhfAAIgFgBg");
	this.shape.setTransform(30.4,8.1);

	this.instance = new lib.blue_teeth();
	this.instance.setTransform(35.6,14,1,1,0,0,0,24.3,9.8);

	// image
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEBEB").s().p("AiBCUQg3g9AAhXQAAhWA3g9QA2g+BLAAQBMAAA3A+QA2A9AABWQAABXg2A9Qg3A+hMAAQhLAAg2g+gAhihvQgpAuAABBQAABCApAuQApAvA5AAQA6AAApgvQApguAAhCQAAhBgpguQgpgvg6AAQg5AAgpAvg");
	this.shape_1.setTransform(47.7,64.3);

	this.addChild(this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.2,85.4);


(lib.blue_mouth_happy = function() {
	this.initialize();

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBQQjBgChfh8QAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAuA4BXAdQBLAZBTgBQBYgCBIgdQAxgUAYgSQAMgLAYgZQAXgYANgLQABAAAAAAQABgBABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgsBOhdAqQhQAkhfAAIgFgBg");
	this.shape.setTransform(30.4,8.1);

	this.instance = new lib.blue_teeth();
	this.instance.setTransform(35.6,14,1,1,0,0,0,24.3,9.8);

	// jaw
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AkgiYQB4CND4gcQCAgQBRhfQhXBsBJB1QiFBOhrgBQjTAAhwkwg");
	this.shape_1.setTransform(28.8,18.7);

	// image
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBEBEB").s().p("AiBCUQg3g9AAhXQAAhWA3g9QA2g+BLAAQBMAAA3A+QA2A9AABWQAABXg2A9Qg3A+hMAAQhLAAg2g+gAhihvQgpAuAABBQAABCApAuQApAvA5AAQA6AAApgvQApguAAhCQAAhBgpguQgpgvg6AAQg5AAgpAvg");
	this.shape_2.setTransform(47.7,64.3);

	this.addChild(this.shape_2,this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,66.4,85.4);


(lib.blue_fingers_wave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fx
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.302)").s().p("ABCAAQhBhChRgrQgtgagtgTQCHAbBjBaQBNBCAXBgIAHAeQglhZhEhCg");
	this.shape.setTransform(8.4,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.302)").s().p("AAzAAQgygyg+giQgjgTgjgPQBpAUBLBGQA8AyARBKIAFAXQgchFg0gyg");
	this.shape_1.setTransform(12.4,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.302)").s().p("AAnAAQgngmgugaQgbgPgbgMQBQAQA6A2QAtAmAOA4IAEATQgWg1gogng");
	this.shape_2.setTransform(17.1,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// fingers01
	this.instance = new lib.orange_finger_waves02();
	this.instance.setTransform(6.5,14.6,1,1,0,0,0,11.4,13.9);

	this.instance_1 = new lib.orange_fingers_wave01();
	this.instance_1.setTransform(20.2,25.5,1,1,0,0,0,15.5,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

	// fingers02
	this.instance_2 = new lib.orange_fingers_wave01();
	this.instance_2.setTransform(20.2,25.5,1,1,0,0,0,15.5,10.8);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.orange_finger_waves02();
	this.instance_3.setTransform(6.5,14.6,1,1,0,0,0,11.4,13.9);
	this.instance_3.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,0.7,44.5,40.6);


(lib.Blue_character_walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"walk blue":0});

	// blue_eyes
	this.instance = new lib.blue_eyes();
	this.instance.setTransform(282.4,198.3,3.064,3.064,0,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:33.2,rotation:-2.2,x:265.2,y:185.7},5).to({regY:33.1,rotation:0,x:302.6,y:198.3},4).to({regY:33.2,rotation:-2.2,x:265.2,y:185.7},4).to({regY:33.1,rotation:0,x:282.4,y:198.3},5).wait(1));

	// blue_arm_R
	this.instance_1 = new lib.blue_arm_R();
	this.instance_1.setTransform(123.7,381.7,3.064,3.064,-9.5,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.3,x:113.6,y:374.9},5).to({rotation:19,x:161,y:381.9},4).to({rotation:4.3,x:113.6,y:374.9},4).to({rotation:-9.5,x:123.7,y:381.7},5).wait(1));

	// blue_mouth
	this.instance_2 = new lib.blue_mouth();
	this.instance_2.setTransform(268.6,332.7,3.064,3.064,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-2.2,x:256.5,y:320.3},5).to({rotation:0,x:288.7,y:332.7},4).to({rotation:-2.2,x:256.5,y:320.3},4).to({rotation:0,x:268.6,y:332.7},5).wait(1));

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(257.7,458.4,3.064,3.064,0,0,0,77,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:124.8,rotation:-2.2,x:250.6,y:446.1},5).to({regY:124.9,rotation:0,x:257.7,y:458.4},4).to({regY:124.8,rotation:-2.2,x:250.6,y:446.1},4).to({regY:124.9,rotation:0,x:257.7,y:458.4},5).wait(1));

	// blue_ear_R
	this.instance_4 = new lib.blue_ear_R();
	this.instance_4.setTransform(96.4,120.2,3.064,3.064,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:12.5,rotation:-2.2,x:75.9,y:114.6},5).to({regX:12.6,rotation:6.2,x:103.3,y:120.2},4).to({regX:12.5,rotation:-2.2,x:75.9,y:114.6},4).to({regX:12.6,rotation:0,x:96.4,y:120.2},5).wait(1));

	// blue_ear_L
	this.instance_5 = new lib.blue_ear_L();
	this.instance_5.setTransform(264.1,81.7,3.064,3.064,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-2.2,x:242.4,y:67.5},5).to({regX:15.3,rotation:4.5,x:264.4,y:87.7},4).to({regX:15.2,rotation:-2.2,x:242.4,y:67.5},4).to({rotation:0,x:264.1,y:81.7},5).wait(1));

	// blue_leg_L
	this.instance_6 = new lib.blue_leg_L();
	this.instance_6.setTransform(321.9,614.9,3.044,3.044,0,0,0,5.2,5);

	this.instance_7 = new lib.blue_leg_L_01();
	this.instance_7.setTransform(159.6,577.4,3.044,3.044,0,0,0,5.2,5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:159.6},8).to({_off:true},1).wait(4).to({_off:false,x:321.9},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({regX:5.1,x:240.4,y:558.7},4).to({_off:true,regX:5.2,x:321.9,y:614.9},4).wait(1));

	// blue_leg_R
	this.instance_8 = new lib.blue_leg_R();
	this.instance_8.setTransform(138.3,625.8,3.044,3.044,0,0,0,8.8,3.6);

	this.instance_9 = new lib.blue_leg_R_01();
	this.instance_9.setTransform(138.3,594.7,3.044,3.044,0,0,0,8.8,3.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(4).to({_off:false,x:213.2},4).wait(1).to({x:138.3},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({x:168.2,y:575.9},4).to({_off:true,x:213.2,y:625.8},4).wait(10));

	// blue_arm_L
	this.instance_10 = new lib.blue_arm_L();
	this.instance_10.setTransform(364.9,368.3,3.064,3.064,0,-127.2,52.8,0.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({skewX:-142.6,skewY:37.4,x:354.1,y:352},5).to({skewX:-164.9,skewY:15.1,x:327.4,y:368.1},4).to({skewX:-142.4,skewY:37.6,x:354.2,y:352.2},4).to({skewX:-127.2,skewY:52.8,x:364.9,y:368.3},5).wait(1));

	// shadow
	this.instance_11 = new lib.shadow02();
	this.instance_11.setTransform(268.2,807.9,2.5,2.5,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.8,-13,491.4,913.8);


(lib.Blue_character_talkpointstill = function() {
	this.initialize();

	// arm
	this.instance = new lib.blue_arm_R_pointing();
	this.instance.setTransform(-132.5,121.7,6.618,6.618,138.1,0,0,18.2,4.5);

	// blue_eyes
	this.instance_1 = new lib.blue_eyes();
	this.instance_1.setTransform(189.4,-291.9,6.618,6.618,-3,0,0,41,33.1);

	// blue_mouth_talk
	this.instance_2 = new lib.blue_mouth_talk();
	this.instance_2.setTransform(174.5,-0.3,6.618,6.618,-3,0,0,30.4,12);

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(164.6,272,6.618,6.618,-3,0,0,76.9,124.9);

	// blue_legs
	this.instance_4 = new lib.blue_legs();
	this.instance_4.setTransform(281.5,575.6,6.618,6.618,0,0,0,91.7,170.7);

	// blue_arm_L
	this.instance_5 = new lib.blue_arm_L();
	this.instance_5.setTransform(386.1,65.6,6.618,6.618,0,-141.9,38.1,0.1,76.6);

	// blue_ear_R
	this.instance_6 = new lib.blue_ear_R();
	this.instance_6.setTransform(-220.4,-439.5,6.618,6.618,-3,0,0,12.6,38.1);

	// blue_ear_L
	this.instance_7 = new lib.blue_ear_L();
	this.instance_7.setTransform(136.7,-545.1,6.618,6.618,-3,0,0,15.2,31);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-535.2,-757.7,1254.4,1856.4);


(lib.Blue_character_talkpoint_armDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arm
	this.instance = new lib.blue_arm_R_pointing();
	this.instance.setTransform(-7.7,130,3.064,3.064,138.1,0,0,18.2,4.5);

	this.instance_1 = new lib.blue_arm_R();
	this.instance_1.setTransform(4.9,123.1,3.064,3.064,110,0,0,18.2,4.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},5).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({rotation:0},5).wait(74));

	// blue_eyes
	this.instance_2 = new lib.blue_eyes();
	this.instance_2.setTransform(141.3,-61.5,3.064,3.064,-3,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:0,x:163.6,y:-60.4},5).wait(74));

	// blue_mouth_talk
	this.instance_3 = new lib.blue_mouth();
	this.instance_3.setTransform(134.4,73.5,3.064,3.064,-3,0,0,30.4,12);

	this.instance_4 = new lib.blue_mouth_shut();
	this.instance_4.setTransform(134.4,73.5,3.064,3.064,-3,0,0,30.4,12);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},5).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({rotation:0,x:149.8,y:74.1},5).wait(74));

	// blue_body_legs
	this.instance_5 = new lib.blue_body_legs();
	this.instance_5.setTransform(129.8,199.6,3.064,3.064,-3,0,0,76.9,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:77,rotation:0,x:138.9,y:199.8},5).wait(74));

	// blue_legs
	this.instance_6 = new lib.blue_legs();
	this.instance_6.setTransform(183.9,340.1,3.064,3.064,0,0,0,91.7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// blue_arm_L
	this.instance_7 = new lib.blue_arm_L();
	this.instance_7.setTransform(232.4,104,3.064,3.064,0,-141.9,38.1,0.1,76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regY:76.7,skewX:-127.2,skewY:52.8,x:246.1,y:109.6},5).wait(74));

	// blue_ear_R
	this.instance_8 = new lib.blue_ear_R();
	this.instance_8.setTransform(-48.4,-129.8,3.064,3.064,-3,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({rotation:0,x:-22.4,y:-138.4},5).wait(74));

	// blue_ear_L
	this.instance_9 = new lib.blue_ear_L();
	this.instance_9.setTransform(116.9,-178.7,3.064,3.064,-3,0,0,15.2,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:30.9,rotation:0,x:145.3,y:-179},5).wait(74));

	// shadow
	this.instance_10 = new lib.shadow02();
	this.instance_10.setTransform(149.4,549.2,2.5,2.5,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.2,-277.2,587.6,919.3);


(lib.Blue_character_talkpoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// efx
	this.instance = new lib.BluedudeBlue_character_armBlur_IMG();
	this.instance.setTransform(-173.6,-50.2,2.5,2.5,30.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},2).wait(66));

	// arm
	this.instance_1 = new lib.blue_arm_R();
	this.instance_1.setTransform(35.4,138.1,3.064,3.064,0,0,0,18.2,4.5);

	this.instance_2 = new lib.blue_arm_R_pointing();
	this.instance_2.setTransform(22.8,144.9,3.064,3.064,138.1,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},62).to({state:[{t:this.instance_1}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:4.4,scaleX:3.06,scaleY:3,skewX:-12.5,skewY:-12,x:47.3,y:160.2},3).to({_off:true},2).wait(62).to({_off:false,regY:4.5,scaleX:3.06,scaleY:3.06,rotation:110,skewX:0,skewY:0,x:35.4,y:138.1},0).to({rotation:0},5).wait(1));

	// blue_eyes
	this.instance_3 = new lib.blue_eyes();
	this.instance_3.setTransform(194.1,-45.4,3.064,3.064,0,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:3,skewX:2.8,skewY:2.7,x:214.7,y:-11.7},3).wait(2).to({scaleY:3.06,rotation:-3,skewX:0,skewY:0,x:171.8,y:-46.5},0).wait(62).to({rotation:0,x:194.1,y:-45.4},5).wait(1));

	// blue_mouth_talk
	this.instance_4 = new lib.blue_mouth_talk();
	this.instance_4.setTransform(180.3,89,3.064,3.064,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:12.1,scaleY:3,skewX:2.8,skewY:2.7,x:194.4,y:119.4},3).wait(2).to({regY:12,scaleY:3.06,rotation:-3,skewX:0,skewY:0,x:164.9,y:88.4},0).wait(62).to({rotation:0,x:180.3,y:89},5).wait(1));

	// blue_body_legs
	this.instance_5 = new lib.blue_body_legs();
	this.instance_5.setTransform(169.4,214.7,3.064,3.064,0,0,0,77,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:3,skewX:2.8,skewY:2.7,x:177.6,y:241.5},3).wait(2).to({regX:76.9,scaleY:3.06,rotation:-3,skewX:0,skewY:0,x:160.3,y:214.5},0).wait(62).to({regX:77,rotation:0,x:169.4,y:214.7},5).wait(1));

	// blue_legs
	this.instance_6 = new lib.blue_legs();
	this.instance_6.setTransform(214.4,355.1,3.064,3.064,0,0,0,91.7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:170.6,scaleY:3,y:359.8},3).wait(2).to({regY:170.7,scaleY:3.06,y:355.1},0).wait(68));

	// blue_arm_L
	this.instance_7 = new lib.blue_arm_L();
	this.instance_7.setTransform(276.6,124.6,3.064,3.064,0,-127.2,52.8,0.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0,scaleX:3.03,scaleY:3.04,skewX:-130.6,skewY:48.2,x:288.8,y:158.2},3).wait(2).to({regX:0.1,regY:76.6,scaleX:3.06,scaleY:3.06,skewX:-141.9,skewY:38.1,x:262.9,y:119},0).wait(62).to({regY:76.7,skewX:-127.2,skewY:52.8,x:276.6,y:124.6},5).wait(1));

	// blue_ear_R
	this.instance_8 = new lib.blue_ear_R();
	this.instance_8.setTransform(8.1,-123.5,3.064,3.064,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:12.5,scaleY:3,skewX:2.8,skewY:2.7,x:32.3,y:-96.6},3).wait(2).to({regX:12.6,scaleY:3.06,rotation:-3,skewX:0,skewY:0,x:-17.9,y:-114.9},0).wait(62).to({rotation:0,x:8.1,y:-123.5},5).wait(1));

	// blue_ear_L
	this.instance_9 = new lib.blue_ear_L();
	this.instance_9.setTransform(175.8,-164,3.064,3.064,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:15.3,regY:31,scaleY:3,skewX:2.8,skewY:2.7,x:202.3,y:-128.2},3).wait(2).to({regX:15.2,scaleY:3.06,rotation:-3,skewX:0,skewY:0,x:147.4,y:-163.8},0).wait(62).to({regY:30.9,rotation:0,x:175.8,y:-164},5).wait(1));

	// shadow
	this.instance_10 = new lib.shadow();
	this.instance_10.setTransform(179.9,564.2,2.5,2.5,0,0,0,90,17.3);
	this.instance_10.alpha = 0.398;
	this.instance_10.filters = [new cjs.BlurFilter(12, 12, 3)];
	this.instance_10.cache(-2,-2,184,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-258.7,491.4,886.7);


(lib.Blue_character_talk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_arm_R
	this.instance = new lib.blue_arm_R();
	this.instance.setTransform(-42.6,122.1,3.064,3.064,0,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115));

	// blue_eyes
	this.instance_1 = new lib.blue_eyes();
	this.instance_1.setTransform(116.1,-61.4,3.064,3.064,0,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115));

	// blue_mouth_talk
	this.instance_2 = new lib.blue_mouth_talk();
	this.instance_2.setTransform(102.3,73,3.064,3.064,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115));

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(91.4,198.7,3.064,3.064,0,0,0,77,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(115));

	// blue_legs
	this.instance_4 = new lib.blue_legs();
	this.instance_4.setTransform(136.4,339.1,3.064,3.064,0,0,0,91.7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(115));

	// shadow
	this.instance_5 = new lib.shadow02();
	this.instance_5.setTransform(101.9,548.2,2.5,2.5,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(115));

	// blue_arm_L
	this.instance_6 = new lib.blue_arm_L();
	this.instance_6.setTransform(198.6,108.6,3.064,3.064,0,-127.2,52.8,0.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(115));

	// blue_ear_R
	this.instance_7 = new lib.blue_ear_R();
	this.instance_7.setTransform(-69.9,-139.5,3.064,3.064,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(115));

	// blue_ear_L
	this.instance_8 = new lib.blue_ear_L();
	this.instance_8.setTransform(97.8,-180,3.064,3.064,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.5,-274.7,491.4,915.8);


(lib.Blue_character_still = function() {
	this.initialize();

	// blue_arm_R
	this.instance = new lib.blue_arm_R();
	this.instance.setTransform(-42.6,122.1,3.064,3.064,0,0,0,18.2,4.5);

	// blue_eyes
	this.instance_1 = new lib.blue_eyes();
	this.instance_1.setTransform(116.1,-61.4,3.064,3.064,0,0,0,41,33.1);

	// blue_mouth_talk
	this.instance_2 = new lib.blue_mouth_shut();
	this.instance_2.setTransform(102.3,73,3.064,3.064,0,0,0,30.4,12);

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(91.4,198.7,3.064,3.064,0,0,0,77,124.9);

	// blue_legs
	this.instance_4 = new lib.blue_legs();
	this.instance_4.setTransform(136.4,339.1,3.064,3.064,0,0,0,91.7,170.7);

	// blue_arm_L
	this.instance_5 = new lib.blue_arm_L();
	this.instance_5.setTransform(198.6,108.6,3.064,3.064,0,-127.2,52.8,0.1,76.7);

	// blue_ear_R
	this.instance_6 = new lib.blue_ear_R();
	this.instance_6.setTransform(-69.9,-139.5,3.064,3.064,0,0,0,12.6,38.1);

	// blue_ear_L
	this.instance_7 = new lib.blue_ear_L();
	this.instance_7.setTransform(97.8,-180,3.064,3.064,0,0,0,15.2,30.9);

	// shadow
	this.instance_8 = new lib.shadow02();
	this.instance_8.setTransform(101.9,548.2,2.5,2.5,0,0,0,90,17.3);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-144.5,-274.7,491.4,915.8);


(lib.Blue_character_laugh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_arm_R
	this.instance = new lib.blue_arm_R();
	this.instance.setTransform(-29.9,148.5,3.064,3.064,0,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.3,scaleY:2.93,rotation:5.2,x:-6.3,y:148.3},3).wait(2).to({scaleX:3.07,scaleY:3.37,rotation:0,skewX:1.8,skewY:4.6,x:-50.6,y:122},2).to({regX:18.2,scaleX:3.06,scaleY:3.11,rotation:4.2,skewX:0,skewY:0,x:-39.1,y:147.5},3).wait(2).to({regX:18.3,scaleY:2.93,rotation:5.2,x:-6.3,y:148.3},0).to({scaleX:3.07,scaleY:3.37,rotation:0,skewX:1.8,skewY:4.6,x:-50.6,y:122},2).to({regX:18.2,scaleX:3.06,scaleY:3.11,rotation:4.2,skewX:0,skewY:0,x:-39.1,y:147.5},3).wait(2).to({regX:18.3,scaleY:2.93,rotation:5.2,x:-6.3,y:148.3},0).to({scaleX:3.07,scaleY:3.37,rotation:0,skewX:1.8,skewY:4.6,x:-50.6,y:122},2).to({regX:18.2,scaleX:3.06,scaleY:3.11,rotation:4.2,skewX:0,skewY:0,x:-39.1,y:147.5},3).wait(2).to({regX:18.3,scaleY:2.93,rotation:5.2,x:-6.3,y:148.3},0).to({scaleX:3.07,scaleY:3.37,rotation:0,skewX:1.8,skewY:4.6,x:-50.6,y:122},2).to({regX:18.2,scaleX:3.06,scaleY:3.11,rotation:4.2,skewX:0,skewY:0,x:-39.1,y:147.5},3).wait(2).to({regX:18.3,scaleY:2.93,rotation:5.2,x:-6.3,y:148.3},0).to({scaleX:3.07,scaleY:3.37,rotation:0,skewX:1.8,skewY:4.6,x:-50.6,y:122},2).to({regX:18.2,scaleX:3.06,scaleY:3.11,rotation:4.2,skewX:0,skewY:0,x:-39.1,y:147.5},3).wait(2).to({regX:18.3,scaleY:2.93,rotation:5.2,x:-6.3,y:148.3},0).to({scaleX:3.07,scaleY:3.37,rotation:0,skewX:1.8,skewY:4.6,x:-50.6,y:122},2).to({regX:18.2,scaleX:3.06,scaleY:3.11,rotation:4.2,skewX:0,skewY:0,x:-39.1,y:147.5},3).wait(2).to({regX:18.3,scaleY:2.93,rotation:5.2,x:-6.3,y:148.3},0).to({scaleX:3.07,scaleY:3.37,rotation:0,skewX:1.8,skewY:4.6,x:-50.6,y:122},2).to({regX:18.2,scaleX:3.06,scaleY:3.11,rotation:4.2,skewX:0,skewY:0,x:-39.1,y:147.5},3).wait(3).to({scaleY:3.06,rotation:0,x:-29.9,y:148.5},4).wait(1));

	// blue_eyes
	this.instance_1 = new lib.blue_eyes();
	this.instance_1.setTransform(128.8,-35,3.064,3.064,0,0,0,41,33.1);

	this.instance_2 = new lib.blue_eyesClosed();
	this.instance_2.setTransform(94.7,-85.1,3.061,3.378,0,-3.7,-1.9,41,33.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:2.93,rotation:5.2,x:167.5,y:2.3},3).wait(2).to({_off:true,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:94.7,y:-85.1},2).wait(48).to({_off:false,scaleX:3.06,scaleY:3.06,skewX:0,skewY:0,x:128.8,y:-35},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:114,y:-43.2},3).wait(2).to({scaleY:2.93,rotation:5.2,x:167.5,y:2.3},0).to({scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:94.7,y:-85.1},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:114,y:-43.2},3).wait(2).to({scaleY:2.93,rotation:5.2,x:167.5,y:2.3},0).to({scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:94.7,y:-85.1},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:114,y:-43.2},3).wait(2).to({scaleY:2.93,rotation:5.2,x:167.5,y:2.3},0).to({scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:94.7,y:-85.1},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:114,y:-43.2},3).wait(2).to({scaleY:2.93,rotation:5.2,x:167.5,y:2.3},0).to({scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:94.7,y:-85.1},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:114,y:-43.2},3).wait(2).to({scaleY:2.93,rotation:5.2,x:167.5,y:2.3},0).to({scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:94.7,y:-85.1},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:114,y:-43.2},3).wait(2).to({scaleY:2.93,rotation:5.2,x:167.5,y:2.3},0).to({scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:94.7,y:-85.1},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:114,y:-43.2},3).wait(3).to({_off:true,scaleY:3.06,rotation:0,x:128.8,y:-35},4).wait(1));

	// blue_mouth_talk
	this.instance_3 = new lib.blue_mouth_happy();
	this.instance_3.setTransform(115,99.4,3.064,3.064,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:2.93,rotation:5.2,x:141.9,y:129.3},3).wait(2).to({regY:11.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:90.2,y:63},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:104.1,y:93.2},3).wait(2).to({regY:12,scaleY:2.93,rotation:5.2,x:141.9,y:129.3},0).to({regY:11.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:90.2,y:63},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:104.1,y:93.2},3).wait(2).to({regY:12,scaleY:2.93,rotation:5.2,x:141.9,y:129.3},0).to({regY:11.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:90.2,y:63},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:104.1,y:93.2},3).wait(2).to({regY:12,scaleY:2.93,rotation:5.2,x:141.9,y:129.3},0).to({regY:11.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:90.2,y:63},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:104.1,y:93.2},3).wait(2).to({regY:12,scaleY:2.93,rotation:5.2,x:141.9,y:129.3},0).to({regY:11.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:90.2,y:63},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:104.1,y:93.2},3).wait(2).to({regY:12,scaleY:2.93,rotation:5.2,x:141.9,y:129.3},0).to({regY:11.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:90.2,y:63},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:104.1,y:93.2},3).wait(2).to({regY:12,scaleY:2.93,rotation:5.2,x:141.9,y:129.3},0).to({regY:11.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:90.2,y:63},2).to({scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:104.1,y:93.2},3).wait(3).to({regY:12,scaleY:3.06,rotation:0,x:115,y:99.4},4).wait(1));

	// blue_body_legs
	this.instance_4 = new lib.blue_body_legs();
	this.instance_4.setTransform(104.1,225.1,3.064,3.064,0,0,0,77,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:124.8,scaleY:2.93,rotation:5.2,x:120.3,y:247.9},3).wait(2).to({regX:76.9,regY:124.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:88.1,y:201.9},2).to({regX:77,scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:97.2,y:221.1},3).wait(2).to({regY:124.8,scaleY:2.93,rotation:5.2,x:120.3,y:247.9},0).to({regX:76.9,regY:124.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:88.1,y:201.9},2).to({regX:77,scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:97.2,y:221.1},3).wait(2).to({regY:124.8,scaleY:2.93,rotation:5.2,x:120.3,y:247.9},0).to({regX:76.9,regY:124.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:88.1,y:201.9},2).to({regX:77,scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:97.2,y:221.1},3).wait(2).to({regY:124.8,scaleY:2.93,rotation:5.2,x:120.3,y:247.9},0).to({regX:76.9,regY:124.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:88.1,y:201.9},2).to({regX:77,scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:97.2,y:221.1},3).wait(2).to({regY:124.8,scaleY:2.93,rotation:5.2,x:120.3,y:247.9},0).to({regX:76.9,regY:124.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:88.1,y:201.9},2).to({regX:77,scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:97.2,y:221.1},3).wait(2).to({regY:124.8,scaleY:2.93,rotation:5.2,x:120.3,y:247.9},0).to({regX:76.9,regY:124.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:88.1,y:201.9},2).to({regX:77,scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:97.2,y:221.1},3).wait(2).to({regY:124.8,scaleY:2.93,rotation:5.2,x:120.3,y:247.9},0).to({regX:76.9,regY:124.9,scaleX:3.06,scaleY:3.38,rotation:0,skewX:-3.7,skewY:-1.9,x:88.1,y:201.9},2).to({regX:77,scaleX:3.06,scaleY:3.11,rotation:-1.7,skewX:0,skewY:0,x:97.2,y:221.1},3).wait(3).to({scaleY:3.06,rotation:0,x:104.1,y:225.1},4).wait(1));

	// blue_legs
	this.instance_5 = new lib.blue_legs();
	this.instance_5.setTransform(149.1,365.5,3.064,3.064,0,0,0,91.7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({regY:170.6,scaleY:3.08,y:363.6},2).wait(5).to({regY:170.7,scaleY:3.06,y:365.5},0).to({regY:170.6,scaleY:3.08,y:363.6},2).wait(5).to({regY:170.7,scaleY:3.06,y:365.5},0).to({regY:170.6,scaleY:3.08,y:363.6},2).wait(5).to({regY:170.7,scaleY:3.06,y:365.5},0).to({regY:170.6,scaleY:3.08,y:363.6},2).wait(5).to({regY:170.7,scaleY:3.06,y:365.5},0).to({regY:170.6,scaleY:3.08,y:363.6},2).wait(5).to({regY:170.7,scaleY:3.06,y:365.5},0).to({regY:170.6,scaleY:3.08,y:363.6},2).wait(5).to({regY:170.7,scaleY:3.06,y:365.5},0).to({regY:170.6,scaleY:3.08,y:363.6},2).wait(6).to({regY:170.7,scaleY:3.06,y:365.5},4).wait(1));

	// blue_arm_L
	this.instance_6 = new lib.blue_arm_L();
	this.instance_6.setTransform(211.3,135,3.064,3.064,0,-127.2,52.8,0.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0,scaleX:2.98,scaleY:3.02,skewX:-120.8,skewY:56.8,x:234.7,y:157.1},3).wait(2).to({regX:0.1,scaleX:3.33,scaleY:3.12,skewX:-128.4,skewY:56.1,x:188.9,y:99.2},2).to({scaleX:3.09,scaleY:3.08,skewX:-125.4,skewY:55.4,x:201.5,y:126.5},3).wait(2).to({regX:0,scaleX:2.98,scaleY:3.02,skewX:-120.8,skewY:56.8,x:234.7,y:157.1},0).to({regX:0.1,scaleX:3.33,scaleY:3.12,skewX:-128.4,skewY:56.1,x:188.9,y:99.2},2).to({scaleX:3.09,scaleY:3.08,skewX:-125.4,skewY:55.4,x:201.5,y:126.5},3).wait(2).to({regX:0,scaleX:2.98,scaleY:3.02,skewX:-120.8,skewY:56.8,x:234.7,y:157.1},0).to({regX:0.1,scaleX:3.33,scaleY:3.12,skewX:-128.4,skewY:56.1,x:188.9,y:99.2},2).to({scaleX:3.09,scaleY:3.08,skewX:-125.4,skewY:55.4,x:201.5,y:126.5},3).wait(2).to({regX:0,scaleX:2.98,scaleY:3.02,skewX:-120.8,skewY:56.8,x:234.7,y:157.1},0).to({regX:0.1,scaleX:3.33,scaleY:3.12,skewX:-128.4,skewY:56.1,x:188.9,y:99.2},2).to({scaleX:3.09,scaleY:3.08,skewX:-125.4,skewY:55.4,x:201.5,y:126.5},3).wait(2).to({regX:0,scaleX:2.98,scaleY:3.02,skewX:-120.8,skewY:56.8,x:234.7,y:157.1},0).to({regX:0.1,scaleX:3.33,scaleY:3.12,skewX:-128.4,skewY:56.1,x:188.9,y:99.2},2).to({scaleX:3.09,scaleY:3.08,skewX:-125.4,skewY:55.4,x:201.5,y:126.5},3).wait(2).to({regX:0,scaleX:2.98,scaleY:3.02,skewX:-120.8,skewY:56.8,x:234.7,y:157.1},0).to({regX:0.1,scaleX:3.33,scaleY:3.12,skewX:-128.4,skewY:56.1,x:188.9,y:99.2},2).to({scaleX:3.09,scaleY:3.08,skewX:-125.4,skewY:55.4,x:201.5,y:126.5},3).wait(2).to({regX:0,scaleX:2.98,scaleY:3.02,skewX:-120.8,skewY:56.8,x:234.7,y:157.1},0).to({regX:0.1,scaleX:3.33,scaleY:3.12,skewX:-128.4,skewY:56.1,x:188.9,y:99.2},2).to({scaleX:3.09,scaleY:3.08,skewX:-125.4,skewY:55.4,x:201.5,y:126.5},3).wait(3).to({scaleX:3.06,scaleY:3.06,skewX:-127.2,skewY:52.8,x:211.3,y:135},4).wait(1));

	// blue_ear_R
	this.instance_7 = new lib.blue_ear_R();
	this.instance_7.setTransform(-57.2,-113.1,3.064,3.064,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:2.93,rotation:5.2,x:-10.9,y:-89.1},3).wait(2).to({regY:38.2,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-10,skewY:-9.5,x:-103.2,y:-164.5},2).to({regY:38.1,scaleX:3.06,scaleY:3.11,rotation:-8.7,skewX:0,skewY:0,x:-81.2,y:-116.6},3).wait(2).to({scaleY:2.93,rotation:5.2,x:-10.9,y:-89.1},0).to({regY:38.2,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-10,skewY:-9.5,x:-103.2,y:-164.5},2).to({regY:38.1,scaleX:3.06,scaleY:3.11,rotation:-8.7,skewX:0,skewY:0,x:-81.2,y:-116.6},3).wait(2).to({scaleY:2.93,rotation:5.2,x:-10.9,y:-89.1},0).to({regY:38.2,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-10,skewY:-9.5,x:-103.2,y:-164.5},2).to({regY:38.1,scaleX:3.06,scaleY:3.11,rotation:-8.7,skewX:0,skewY:0,x:-81.2,y:-116.6},3).wait(2).to({scaleY:2.93,rotation:5.2,x:-10.9,y:-89.1},0).to({regY:38.2,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-10,skewY:-9.5,x:-103.2,y:-164.5},2).to({regY:38.1,scaleX:3.06,scaleY:3.11,rotation:-8.7,skewX:0,skewY:0,x:-81.2,y:-116.6},3).wait(2).to({scaleY:2.93,rotation:5.2,x:-10.9,y:-89.1},0).to({regY:38.2,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-10,skewY:-9.5,x:-103.2,y:-164.5},2).to({regY:38.1,scaleX:3.06,scaleY:3.11,rotation:-8.7,skewX:0,skewY:0,x:-81.2,y:-116.6},3).wait(2).to({scaleY:2.93,rotation:5.2,x:-10.9,y:-89.1},0).to({regY:38.2,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-10,skewY:-9.5,x:-103.2,y:-164.5},2).to({regY:38.1,scaleX:3.06,scaleY:3.11,rotation:-8.7,skewX:0,skewY:0,x:-81.2,y:-116.6},3).wait(2).to({scaleY:2.93,rotation:5.2,x:-10.9,y:-89.1},0).to({regY:38.2,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-10,skewY:-9.5,x:-103.2,y:-164.5},2).to({regY:38.1,scaleX:3.06,scaleY:3.11,rotation:-8.7,skewX:0,skewY:0,x:-81.2,y:-116.6},3).wait(3).to({scaleY:3.06,rotation:0,x:-57.2,y:-113.1},4).wait(1));

	// blue_ear_L
	this.instance_8 = new lib.blue_ear_L();
	this.instance_8.setTransform(110.5,-153.6,3.064,3.064,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:31,scaleY:2.93,rotation:5.2,x:159.6,y:-112.3},3).wait(2).to({regX:15.3,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-17.4,skewY:-18.3,x:68.3,y:-214.7},2).to({scaleX:3.06,scaleY:3.11,rotation:-16.7,skewX:0,skewY:0,x:92.2,y:-162.6},3).wait(2).to({regX:15.2,scaleY:2.93,rotation:5.2,x:159.6,y:-112.3},0).to({regX:15.3,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-17.4,skewY:-18.3,x:68.3,y:-214.7},2).to({scaleX:3.06,scaleY:3.11,rotation:-16.7,skewX:0,skewY:0,x:92.2,y:-162.6},3).wait(2).to({regX:15.2,scaleY:2.93,rotation:5.2,x:159.6,y:-112.3},0).to({regX:15.3,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-17.4,skewY:-18.3,x:68.3,y:-214.7},2).to({scaleX:3.06,scaleY:3.11,rotation:-16.7,skewX:0,skewY:0,x:92.2,y:-162.6},3).wait(2).to({regX:15.2,scaleY:2.93,rotation:5.2,x:159.6,y:-112.3},0).to({regX:15.3,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-17.4,skewY:-18.3,x:68.3,y:-214.7},2).to({scaleX:3.06,scaleY:3.11,rotation:-16.7,skewX:0,skewY:0,x:92.2,y:-162.6},3).wait(2).to({regX:15.2,scaleY:2.93,rotation:5.2,x:159.6,y:-112.3},0).to({regX:15.3,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-17.4,skewY:-18.3,x:68.3,y:-214.7},2).to({scaleX:3.06,scaleY:3.11,rotation:-16.7,skewX:0,skewY:0,x:92.2,y:-162.6},3).wait(2).to({regX:15.2,scaleY:2.93,rotation:5.2,x:159.6,y:-112.3},0).to({regX:15.3,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-17.4,skewY:-18.3,x:68.3,y:-214.7},2).to({scaleX:3.06,scaleY:3.11,rotation:-16.7,skewX:0,skewY:0,x:92.2,y:-162.6},3).wait(2).to({regX:15.2,scaleY:2.93,rotation:5.2,x:159.6,y:-112.3},0).to({regX:15.3,scaleX:3.05,scaleY:3.39,rotation:0,skewX:-17.4,skewY:-18.3,x:68.3,y:-214.7},2).to({scaleX:3.06,scaleY:3.11,rotation:-16.7,skewX:0,skewY:0,x:92.2,y:-162.6},3).wait(3).to({regX:15.2,regY:30.9,scaleY:3.06,rotation:0,x:110.5,y:-153.6},4).wait(1));

	// shadow
	this.instance_9 = new lib.shadow02();
	this.instance_9.setTransform(114.6,574.6,2.5,2.5,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.8,-248.3,490.4,915.8);


(lib.Blue_character_excitedstill = function() {
	this.initialize();

	// blue_arm_R
	this.instance = new lib.blue_arm_R();
	this.instance.setTransform(-46.3,129,3.064,3.107,4.2,0,0,18.2,4.5);

	// blue_eyes
	this.instance_1 = new lib.blue_eyes();
	this.instance_1.setTransform(106.8,-61.7,3.064,3.106,-1.7,0,0,41,33.1);

	// blue_mouth_talk
	this.instance_2 = new lib.blue_mouth_happy();
	this.instance_2.setTransform(97,74.7,3.064,3.106,-1.7,0,0,30.4,11.9);

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(90.1,202.6,3.064,3.106,-1.7,0,0,77,124.9);

	// blue_legs
	this.instance_4 = new lib.blue_legs();
	this.instance_4.setTransform(142,345.1,3.064,3.083,0,0,0,91.7,170.6);

	// blue_arm_L
	this.instance_5 = new lib.blue_arm_L();
	this.instance_5.setTransform(194.3,108,3.091,3.08,0,-125.4,55.4,0.1,76.7);

	// blue_ear_R
	this.instance_6 = new lib.blue_ear_R();
	this.instance_6.setTransform(-88.3,-135.1,3.064,3.107,-8.7,0,0,12.6,38.1);

	// blue_ear_L
	this.instance_7 = new lib.blue_ear_L();
	this.instance_7.setTransform(85,-181.1,3.064,3.107,-16.7,0,0,15.3,31);

	// shadow
	this.instance_8 = new lib.shadow02();
	this.instance_8.setTransform(107.4,556.1,2.5,2.5,0,0,0,90,17.3);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.5,-293,508.9,942);


(lib.Blue_character_excited = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_arm_R
	this.instance = new lib.blue_arm_R();
	this.instance.setTransform(-147.2,171,6.128,6.128,0,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.3,scaleY:5.87,rotation:5.2,x:-99.9,y:170.7},3).wait(2).to({scaleX:6.15,scaleY:6.73,rotation:0,skewX:1.8,skewY:4.6,x:-188.5,y:118},2).to({regX:18.2,scaleX:6.13,scaleY:6.21,rotation:4.2,skewX:0,skewY:0,x:-165.5,y:169.1},3).wait(70));

	// blue_eyes
	this.instance_1 = new lib.blue_eyes();
	this.instance_1.setTransform(170.3,-196,6.128,6.128,0,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:5.87,rotation:5.2,x:247.6,y:-121.4},3).wait(2).to({scaleX:6.12,scaleY:6.76,rotation:0,skewX:-3.7,skewY:-1.9,x:102.2,y:-296.1},2).to({scaleX:6.13,scaleY:6.21,rotation:-1.7,skewX:0,skewY:0,x:140.6,y:-212.4},3).wait(70));

	// blue_mouth_talk
	this.instance_2 = new lib.blue_mouth_shut();
	this.instance_2.setTransform(142.6,73,6.128,6.128,0,0,0,30.4,12);

	this.instance_3 = new lib.blue_mouth_happy();
	this.instance_3.setTransform(93.2,0.1,6.121,6.757,0,-3.7,-1.9,30.4,11.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:5.87,rotation:5.2,x:196.4,y:132.7},3).wait(2).to({_off:true,regY:11.9,scaleX:6.12,scaleY:6.76,rotation:0,skewX:-3.7,skewY:-1.9,x:93.2,y:0.1},2).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},2).to({scaleX:6.13,scaleY:6.21,rotation:-1.7,skewX:0,skewY:0,x:121,y:60.4},3).wait(70));

	// blue_body_legs
	this.instance_4 = new lib.blue_body_legs();
	this.instance_4.setTransform(120.9,324.3,6.128,6.128,0,0,0,77,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:124.8,scaleY:5.87,rotation:5.2,x:153.2,y:369.8},3).wait(2).to({regX:76.9,regY:124.9,scaleX:6.12,scaleY:6.76,rotation:0,skewX:-3.7,skewY:-1.9,x:88.9,y:277.9},2).to({regX:77,scaleX:6.13,scaleY:6.21,rotation:-1.7,skewX:0,skewY:0,x:107.1,y:316.3},3).wait(70));

	// blue_legs
	this.instance_5 = new lib.blue_legs();
	this.instance_5.setTransform(211,605,6.128,6.128,0,0,0,91.7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({regY:170.6,scaleY:6.17,y:601.3},2).wait(73));

	// blue_arm_L
	this.instance_6 = new lib.blue_arm_L();
	this.instance_6.setTransform(335.2,144,6.128,6.128,0,-127.2,52.8,0.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0,scaleX:5.96,scaleY:6.03,skewX:-120.8,skewY:56.8,x:382,y:188.2},3).wait(2).to({regX:0.1,scaleX:6.66,scaleY:6.23,skewX:-128.4,skewY:56.1,x:290.4,y:72.4},2).to({scaleX:6.18,scaleY:6.16,skewX:-125.4,skewY:55.4,x:315.6,y:127},3).wait(70));

	// blue_ear_R
	this.instance_7 = new lib.blue_ear_R();
	this.instance_7.setTransform(-201.8,-352.1,6.128,6.128,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:5.87,rotation:5.2,x:-109.1,y:-304.2},3).wait(2).to({regY:38.2,scaleX:6.11,scaleY:6.77,rotation:0,skewX:-10,skewY:-9.5,x:-293.9,y:-455},2).to({regY:38.1,scaleX:6.13,scaleY:6.21,rotation:-8.7,skewX:0,skewY:0,x:-249.7,y:-359.2},3).wait(70));

	// blue_ear_L
	this.instance_8 = new lib.blue_ear_L();
	this.instance_8.setTransform(133.7,-433.2,6.128,6.128,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:31,scaleY:5.87,rotation:5.2,x:231.8,y:-350.5},3).wait(2).to({regX:15.3,scaleX:6.11,scaleY:6.77,rotation:0,skewX:-17.4,skewY:-18.3,x:49.2,y:-555.3},2).to({scaleX:6.13,scaleY:6.21,rotation:-16.7,skewX:0,skewY:0,x:97,y:-451.1},3).wait(70));

	// shadow
	this.instance_9 = new lib.shadow();
	this.instance_9.setTransform(141.8,1023.2,5,5,0,0,0,90,17.3);
	this.instance_9.alpha = 0.398;
	this.instance_9.filters = [new cjs.BlurFilter(12, 12, 3)];
	this.instance_9.cache(-2,-2,184,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351,-622.6,962.8,1752.3);


(lib.blue_arm_L_wave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arm
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#168ECC").s().p("AknDSQAegoAygnQCoiJBeifQAwhPAOg0QBjARBCBZQAhAsANApQiQDijmBuQh0A4hXAJQhjgHA9hPg");
	this.shape.setTransform(32,47);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// fingers
	this.instance = new lib.blue_fingers_wave();
	this.instance.setTransform(54.1,26.3,1,1,0,0,0,8,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.7,81.8,76.1);


(lib.Orange_charactertalkpoint02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orange_eyes
	this.instance = new lib.orange_eyes();
	this.instance.setTransform(135.1,-91.5,2.5,2.5,5.5,0,0,51.6,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({rotation:0,x:105.6,y:-97},5).wait(54));

	// orange_mouth
	this.instance_1 = new lib.orange_mouth_talk();
	this.instance_1.setTransform(104.1,72.5,2.5,2.5,5.5,0,0,55.6,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({rotation:0,x:90.4,y:69.1},5).wait(54));

	// orange_arm_R
	this.instance_2 = new lib.orange_arm_R();
	this.instance_2.setTransform(-59.3,121.7,2.5,2.5,11.4,0,0,37.7,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({regX:37.8,rotation:0,x:-67.5,y:133.9},5).wait(54));

	// orange_body_legs
	this.instance_3 = new lib.orange_body_legs();
	this.instance_3.setTransform(58.6,130.1,2.5,2.5,5.5,0,0,98,129.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({regY:130,rotation:0,x:50.6,y:131},5).wait(54));

	// orange_leg_L
	this.instance_4 = new lib.orange_leg_L();
	this.instance_4.setTransform(-15.1,180.2,2.5,2.5,0,0,0,15,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70));

	// orange_leg_R
	this.instance_5 = new lib.orange_leg_R();
	this.instance_5.setTransform(144.5,171.5,2.5,2.5,0,0,0,18.7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70));

	// orange_arm_L
	this.instance_6 = new lib.orange_arm_R_bend02();
	this.instance_6.setTransform(204.9,101.6,2.5,2.5,-9.5,0,0,9.3,4.3);

	this.instance_7 = new lib.orange_arm_L();
	this.instance_7.setTransform(193.4,88.6,2.5,2.5,0,0,0,9.3,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},11).to({state:[{t:this.instance_7}]},5).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:true,rotation:0,x:193.4,y:88.6},5).wait(54));

	// shadow
	this.instance_8 = new lib.shadow02();
	this.instance_8.setTransform(52,399.4,2.5,2.5,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.2,-216.8,643.1,709.1);


(lib.Orange_charactertalkpoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orange_eyes
	this.instance = new lib.orange_eyes();
	this.instance.setTransform(120,43.8,1,1,0,0,0,51.6,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.5,x:131.8,y:46},4).wait(56).to({rotation:0,x:120,y:43.8},5).wait(1));

	// orange_mouth
	this.instance_1 = new lib.orange_mouth_talk();
	this.instance_1.setTransform(113.9,110.3,1,1,0,0,0,55.6,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5.5,x:119.4,y:111.6},4).wait(56).to({rotation:0,x:113.9,y:110.3},5).wait(1));

	// orange_arm_R
	this.instance_2 = new lib.orange_arm_R();
	this.instance_2.setTransform(50.8,136.2,1,1,0,0,0,37.8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:37.7,rotation:11.4,x:54,y:131.3},4).wait(56).to({regX:37.8,rotation:0,x:50.8,y:136.2},5).wait(1));

	// orange_body_legs
	this.instance_3 = new lib.orange_body_legs();
	this.instance_3.setTransform(98,135,1,1,0,0,0,98,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:129.9,rotation:5.5,x:101.2,y:134.6},4).wait(56).to({regY:130,rotation:0,x:98,y:135},5).wait(1));

	// xtra
	this.instance_4 = new lib.OrangedudeOrangearmblur();
	this.instance_4.setTransform(142.8,106.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({_off:true},2).wait(60));

	// orange_leg_L
	this.instance_5 = new lib.orange_leg_L();
	this.instance_5.setTransform(71.7,154.7,1,1,0,0,0,15,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66));

	// orange_leg_R
	this.instance_6 = new lib.orange_leg_R();
	this.instance_6.setTransform(135.6,151.2,1,1,0,0,0,18.7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66));

	// orange_arm_L
	this.instance_7 = new lib.orange_arm_L();
	this.instance_7.setTransform(155.1,118.1,1,1,0,0,0,9.3,4.3);

	this.instance_8 = new lib.orange_arm_R_bend02();
	this.instance_8.setTransform(159.7,123.3,1,1,-9.5,0,0,9.3,4.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,rotation:-9.5,x:159.7,y:123.3},4).wait(56).to({_off:false,rotation:0,x:155.1,y:118.1},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},4).wait(56).to({_off:true,rotation:0,x:155.1,y:118.1},5).wait(1));

	// shadow
	this.instance_9 = new lib.shadow02();
	this.instance_9.setTransform(98.6,242.4,1,1,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,0,216,279.5);


(lib.Orange_character_wave01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orange_eyes
	this.instance = new lib.orange_eyes();
	this.instance.setTransform(114.5,-88.1,2.5,2.5,0,0,0,51.6,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:2.46,skewX:3.8,skewY:3.6,x:133.6,y:-76.2},3).to({regX:51.7,scaleY:2.5,rotation:-4.5,skewX:0,skewY:0,x:91.9,y:-90.5},3).wait(12).to({regX:51.6,scaleY:2.46,rotation:0,skewX:3.8,skewY:3.6,x:133.6,y:-76.2},3).to({scaleY:2.5,skewX:0,skewY:0,x:114.5,y:-88.1},3).wait(12));

	// orange_mouth
	this.instance_1 = new lib.orange_mouth();
	this.instance_1.setTransform(99.2,78,2.5,2.5,0,0,0,55.6,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:55.5,scaleY:2.46,skewX:3.8,skewY:3.6,x:107.4,y:85.7},3).to({regX:55.6,regY:31.9,scaleY:2.5,rotation:-4.5,skewX:0,skewY:0,x:89.4,y:76.1},3).wait(12).to({regX:55.5,regY:32,scaleY:2.46,rotation:0,skewX:3.8,skewY:3.6,x:107.4,y:85.7},3).to({regX:55.6,scaleY:2.5,skewX:0,skewY:0,x:99.2,y:78},3).wait(12));

	// orange_arm_R
	this.instance_2 = new lib.orange_arm_R();
	this.instance_2.setTransform(-58.6,142.8,2.5,2.5,0,0,0,37.8,8);

	this.instance_3 = new lib.orange_arm_R_bend01();
	this.instance_3.setTransform(-54.1,138.8,2.498,2.456,0,-11.5,-11.1,37.8,7.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-24.7,x:-46.6,y:138.2},2).to({_off:true},1).wait(19).to({_off:false},0).to({rotation:0,x:-58.6,y:142.8},2).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({scaleX:2.5,scaleY:2.5,rotation:30.7,skewX:0,skewY:0,x:-62.9,y:153.3},3).wait(12).to({scaleX:2.5,scaleY:2.46,rotation:0,skewX:-11.5,skewY:-11.1,x:-54.1,y:138.8},3).to({_off:true},1).wait(14));

	// orange_body_legs_0
	this.instance_4 = new lib.orange_body_legs();
	this.instance_4.setTransform(59.5,139.9,2.5,2.5,0,0,0,98,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:129.9,scaleY:2.46,skewX:3.8,skewY:3.6,x:64.1,y:143.6},3).to({regY:130,scaleY:2.5,rotation:-4.5,skewX:0,skewY:0,x:54.7,y:141.2},3).wait(12).to({regY:129.9,scaleY:2.46,rotation:0,skewX:3.8,skewY:3.6,x:64.1,y:143.6},3).to({regY:130,scaleY:2.5,skewX:0,skewY:0,x:59.5,y:139.9},3).wait(12));

	// orange_body_legs
	this.instance_5 = new lib.orange_legs();
	this.instance_5.setTransform(104,464.9,2.5,2.5,0,0,0,115.8,260);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:2.46,y:464.8},3).to({scaleY:2.5,y:464.9},3).wait(12).to({scaleY:2.46,y:464.8},3).to({scaleY:2.5,y:464.9},3).wait(12));

	// orange_arm_L
	this.instance_6 = new lib.orange_arm_L();
	this.instance_6.setTransform(202.2,97.5,2.5,2.5,0,0,0,9.3,4.3);

	this.instance_7 = new lib.orange_arm_Lwave();
	this.instance_7.setTransform(209.2,111.1,2.455,2.499,0,-96.9,-97.2,9.2,4.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:9.2,rotation:-100.8,x:232.2,y:97.3},2).to({_off:true},1).wait(19).to({_off:false},0).to({regX:9.3,rotation:0,x:202.2,y:97.5},2).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({regX:9.1,regY:4.2,scaleX:2.5,scaleY:2.5,rotation:-140.7,skewX:0,skewY:0,x:222,y:13.3},3).wait(12).to({regX:9.2,x:221.8,y:13.2},0).to({regY:4.3,scaleX:2.46,scaleY:2.5,rotation:0,skewX:-96.9,skewY:-97.2,x:209.2,y:111.1},3).to({_off:true},1).wait(14));

	// shadow
	this.instance_8 = new lib.shadow02();
	this.instance_8.setTransform(60.9,408.3,2.5,2.5,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.4,-197.6,491.3,698.8);


(lib.Orange_character_walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orange_eyes
	this.instance = new lib.orange_eyes();
	this.instance.setTransform(323.1,128.8,2.5,2.5,0,0,0,51.6,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.2,x:311.5,y:106.4},5).to({rotation:0,x:328.1,y:128.8},4).to({rotation:-3.2,x:304.9,y:117.9},4).to({rotation:0,x:323.1,y:128.8},6).wait(1));

	// orange_mouth
	this.instance_1 = new lib.orange_mouth();
	this.instance_1.setTransform(307.9,295,2.5,2.5,0,0,0,55.6,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-2.2,x:302.6,y:273},5).to({rotation:0,x:312.9,y:295},4).to({rotation:-3.2,x:298.9,y:284.6},4).to({rotation:0,x:307.9,y:295},6).wait(1));

	// orange_arm_R
	this.instance_2 = new lib.orange_arm_R();
	this.instance_2.setTransform(150,359.7,2.5,2.5,0,0,0,37.8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:37.7,rotation:5.7,x:147.3,y:355.1},5).to({regX:37.8,rotation:0,x:150,y:359.7},4).to({rotation:-17.2,x:147,y:367.9},4).to({rotation:0,x:150,y:359.7},6).wait(1));

	// orange_body_legs
	this.instance_3 = new lib.orange_body_legs();
	this.instance_3.setTransform(268.1,356.8,2.5,2.5,0,0,0,98,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:129.9,rotation:-2.2,x:265.4,y:347.4},5).to({regY:130,rotation:0,x:268.1,y:356.8},4).to({rotation:-3.2,x:264.7,y:358.6},4).to({rotation:0,x:268.1,y:356.8},6).wait(1));

	// orange_leg_L
	this.instance_4 = new lib.orange_leg_L();
	this.instance_4.setTransform(202.4,404.8,2.5,2.5,0,0,0,15,1.9);

	this.instance_5 = new lib.orange_leg_L_01();
	this.instance_5.setTransform(202.4,391.1,2.5,2.5,0,0,0,15,1.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).to({_off:false,x:281.1},8).wait(1).to({x:202.4},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({_off:true,x:281.1,y:404.8},8).wait(11));

	// orange_leg_R
	this.instance_6 = new lib.orange_leg_R();
	this.instance_6.setTransform(362,396.1,2.5,2.5,0,0,0,18.7,7);

	this.instance_7 = new lib.orange_leg_R_01();
	this.instance_7.setTransform(249.5,396.1,2.5,2.5,0,0,0,18.7,7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:249.5},8).to({_off:true},1).to({_off:false,x:362},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({_off:true,x:362},9).wait(1));

	// orange_arm_L
	this.instance_8 = new lib.orange_arm_L();
	this.instance_8.setTransform(410.9,314.5,2.5,2.5,0,0,0,9.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:7.5,x:406.4,y:299.7},5).to({rotation:0,x:410.9,y:314.5},4).to({rotation:-16.9,x:404.8,y:308.1},4).to({rotation:0,x:410.9,y:314.5},6).wait(1));

	// shadow
	this.instance_9 = new lib.shadow02();
	this.instance_9.setTransform(269.5,617.2,2.5,2.5,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.3,19.3,491.3,690.8);


(lib.Orange_character_still = function() {
	this.initialize();

	// orange_eyes
	this.instance = new lib.orange_eyes();
	this.instance.setTransform(152.9,-97.7,2.5,2.5,0,0,0,51.6,43.8);

	// orange_mouth
	this.instance_1 = new lib.orange_mouth();
	this.instance_1.setTransform(137.7,68.4,2.5,2.5,0,0,0,55.6,32);

	// orange_arm_R
	this.instance_2 = new lib.orange_arm_R();
	this.instance_2.setTransform(-20.2,133.2,2.5,2.5,0,0,0,37.8,8);

	// orange_body_legs
	this.instance_3 = new lib.orange_body_legs();
	this.instance_3.setTransform(97.9,130.3,2.5,2.5,0,0,0,98,130);

	// orange_leg_L
	this.instance_4 = new lib.orange_leg_L();
	this.instance_4.setTransform(32.2,179.5,2.5,2.5,0,0,0,15,1.9);

	// orange_leg_R
	this.instance_5 = new lib.orange_leg_R();
	this.instance_5.setTransform(191.8,170.8,2.5,2.5,0,0,0,18.7,7);

	// orange_arm_L
	this.instance_6 = new lib.orange_arm_L();
	this.instance_6.setTransform(240.7,87.9,2.5,2.5,0,0,0,9.3,4.3);

	// shadow
	this.instance_7 = new lib.shadow02();
	this.instance_7.setTransform(99.3,390.7,2.5,2.5,0,0,0,90,17.3);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-146.9,-207.2,490.3,690.8);


(lib.Orange_character_laugh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orange_eyes
	this.instance = new lib.orange_eyes();
	this.instance.setTransform(151,-95.6,2.5,2.5,0,0,0,51.6,43.8);

	this.instance_1 = new lib.orange_eyesClosed();
	this.instance_1.setTransform(128.7,-112.4,2.5,2.622,0,-3.9,-2.7,51.6,43.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:184.5,y:-63.6},3).wait(2).to({_off:true,scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:128.7,y:-112.4},2).wait(48).to({_off:false,scaleY:2.5,skewX:0,skewY:0,x:151,y:-95.6},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},2).to({scaleY:2.5,skewX:0,skewY:0,x:151,y:-95.6},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:184.5,y:-63.6},0).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:128.7,y:-112.4},2).to({scaleY:2.5,skewX:0,skewY:0,x:151,y:-95.6},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:184.5,y:-63.6},0).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:128.7,y:-112.4},2).to({scaleY:2.5,skewX:0,skewY:0,x:151,y:-95.6},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:184.5,y:-63.6},0).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:128.7,y:-112.4},2).to({scaleY:2.5,skewX:0,skewY:0,x:151,y:-95.6},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:184.5,y:-63.6},0).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:128.7,y:-112.4},2).to({scaleY:2.5,skewX:0,skewY:0,x:151,y:-95.6},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:184.5,y:-63.6},0).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:128.7,y:-112.4},2).to({scaleY:2.5,skewX:0,skewY:0,x:151,y:-95.6},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:184.5,y:-63.6},0).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:128.7,y:-112.4},2).to({scaleY:2.5,skewX:0,skewY:0,x:151,y:-95.6},3).wait(3).to({_off:true},4).wait(1));

	// orange_mouth
	this.instance_2 = new lib.orange_mouth_happy();
	this.instance_2.setTransform(135.7,70.5,2.5,2.5,0,0,0,55.6,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:151.4,y:89.5},3).wait(2).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:125.5,y:62.2},2).to({scaleY:2.5,skewX:0,skewY:0,x:135.7,y:70.5},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:151.4,y:89.5},0).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:125.5,y:62.2},2).to({scaleY:2.5,skewX:0,skewY:0,x:135.7,y:70.5},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:151.4,y:89.5},0).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:125.5,y:62.2},2).to({scaleY:2.5,skewX:0,skewY:0,x:135.7,y:70.5},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:151.4,y:89.5},0).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:125.5,y:62.2},2).to({scaleY:2.5,skewX:0,skewY:0,x:135.7,y:70.5},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:151.4,y:89.5},0).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:125.5,y:62.2},2).to({scaleY:2.5,skewX:0,skewY:0,x:135.7,y:70.5},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:151.4,y:89.5},0).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:125.5,y:62.2},2).to({scaleY:2.5,skewX:0,skewY:0,x:135.7,y:70.5},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:151.4,y:89.5},0).to({scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:125.5,y:62.2},2).to({scaleY:2.5,skewX:0,skewY:0,x:135.7,y:70.5},3).wait(8));

	// orange_arm_R
	this.instance_3 = new lib.orange_arm_R();
	this.instance_3.setTransform(-22.1,135.3,2.5,2.5,0,0,0,37.8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:2.5,scaleY:2.34,skewX:-5.6,skewY:-4.9,x:-1.9,y:134.7},3).wait(2).to({regY:7.9,scaleX:2.5,scaleY:2.62,skewX:3.1,skewY:4.2,x:-27.9,y:137.2},2).to({regY:8,scaleY:2.5,skewX:0,skewY:0,x:-22.1,y:135.3},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:-5.6,skewY:-4.9,x:-1.9,y:134.7},0).to({regY:7.9,scaleX:2.5,scaleY:2.62,skewX:3.1,skewY:4.2,x:-27.9,y:137.2},2).to({regY:8,scaleY:2.5,skewX:0,skewY:0,x:-22.1,y:135.3},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:-5.6,skewY:-4.9,x:-1.9,y:134.7},0).to({regY:7.9,scaleX:2.5,scaleY:2.62,skewX:3.1,skewY:4.2,x:-27.9,y:137.2},2).to({regY:8,scaleY:2.5,skewX:0,skewY:0,x:-22.1,y:135.3},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:-5.6,skewY:-4.9,x:-1.9,y:134.7},0).to({regY:7.9,scaleX:2.5,scaleY:2.62,skewX:3.1,skewY:4.2,x:-27.9,y:137.2},2).to({regY:8,scaleY:2.5,skewX:0,skewY:0,x:-22.1,y:135.3},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:-5.6,skewY:-4.9,x:-1.9,y:134.7},0).to({regY:7.9,scaleX:2.5,scaleY:2.62,skewX:3.1,skewY:4.2,x:-27.9,y:137.2},2).to({regY:8,scaleY:2.5,skewX:0,skewY:0,x:-22.1,y:135.3},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:-5.6,skewY:-4.9,x:-1.9,y:134.7},0).to({regY:7.9,scaleX:2.5,scaleY:2.62,skewX:3.1,skewY:4.2,x:-27.9,y:137.2},2).to({regY:8,scaleY:2.5,skewX:0,skewY:0,x:-22.1,y:135.3},3).wait(2).to({scaleX:2.5,scaleY:2.34,skewX:-5.6,skewY:-4.9,x:-1.9,y:134.7},0).to({regY:7.9,scaleX:2.5,scaleY:2.62,skewX:3.1,skewY:4.2,x:-27.9,y:137.2},2).to({regY:8,scaleY:2.5,skewX:0,skewY:0,x:-22.1,y:135.3},3).wait(8));

	// orange_body_legs
	this.instance_4 = new lib.orange_body_legs();
	this.instance_4.setTransform(96,132.4,2.5,2.5,0,0,0,98,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:130.1,scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:105.1,y:143.1},3).wait(2).to({regY:129.9,scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:90.1,y:128.7},2).to({regY:130,scaleY:2.5,skewX:0,skewY:0,x:96,y:132.4},3).wait(2).to({regY:130.1,scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:105.1,y:143.1},0).to({regY:129.9,scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:90.1,y:128.7},2).to({regY:130,scaleY:2.5,skewX:0,skewY:0,x:96,y:132.4},3).wait(2).to({regY:130.1,scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:105.1,y:143.1},0).to({regY:129.9,scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:90.1,y:128.7},2).to({regY:130,scaleY:2.5,skewX:0,skewY:0,x:96,y:132.4},3).wait(2).to({regY:130.1,scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:105.1,y:143.1},0).to({regY:129.9,scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:90.1,y:128.7},2).to({regY:130,scaleY:2.5,skewX:0,skewY:0,x:96,y:132.4},3).wait(2).to({regY:130.1,scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:105.1,y:143.1},0).to({regY:129.9,scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:90.1,y:128.7},2).to({regY:130,scaleY:2.5,skewX:0,skewY:0,x:96,y:132.4},3).wait(2).to({regY:130.1,scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:105.1,y:143.1},0).to({regY:129.9,scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:90.1,y:128.7},2).to({regY:130,scaleY:2.5,skewX:0,skewY:0,x:96,y:132.4},3).wait(2).to({regY:130.1,scaleX:2.5,scaleY:2.34,skewX:6.6,skewY:5.8,x:105.1,y:143.1},0).to({regY:129.9,scaleX:2.5,scaleY:2.62,skewX:-3.9,skewY:-2.7,x:90.1,y:128.7},2).to({regY:130,scaleY:2.5,skewX:0,skewY:0,x:96,y:132.4},3).wait(8));

	// orange_leg_L
	this.instance_5 = new lib.orange_leg_L();
	this.instance_5.setTransform(30.2,181.6,2.5,2.5,0,0,0,15,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	// orange_leg_R
	this.instance_6 = new lib.orange_leg_R();
	this.instance_6.setTransform(189.9,172.9,2.5,2.5,0,0,0,18.7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

	// orange_arm_L
	this.instance_7 = new lib.orange_arm_L();
	this.instance_7.setTransform(238.7,90,2.5,2.5,0,0,0,9.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:4.1,scaleX:2.5,scaleY:2.34,skewX:-5.9,skewY:-5.1,x:255.8,y:117.8},3).wait(2).to({regY:4.3,scaleX:2.5,scaleY:2.62,skewX:0.6,skewY:1.8,x:229.6,y:77.6},2).to({scaleY:2.5,skewX:0,skewY:0,x:238.7,y:90},3).wait(2).to({regY:4.1,scaleX:2.5,scaleY:2.34,skewX:-5.9,skewY:-5.1,x:255.8,y:117.8},0).to({regY:4.3,scaleX:2.5,scaleY:2.62,skewX:0.6,skewY:1.8,x:229.6,y:77.6},2).to({scaleY:2.5,skewX:0,skewY:0,x:238.7,y:90},3).wait(2).to({regY:4.1,scaleX:2.5,scaleY:2.34,skewX:-5.9,skewY:-5.1,x:255.8,y:117.8},0).to({regY:4.3,scaleX:2.5,scaleY:2.62,skewX:0.6,skewY:1.8,x:229.6,y:77.6},2).to({scaleY:2.5,skewX:0,skewY:0,x:238.7,y:90},3).wait(2).to({regY:4.1,scaleX:2.5,scaleY:2.34,skewX:-5.9,skewY:-5.1,x:255.8,y:117.8},0).to({regY:4.3,scaleX:2.5,scaleY:2.62,skewX:0.6,skewY:1.8,x:229.6,y:77.6},2).to({scaleY:2.5,skewX:0,skewY:0,x:238.7,y:90},3).wait(2).to({regY:4.1,scaleX:2.5,scaleY:2.34,skewX:-5.9,skewY:-5.1,x:255.8,y:117.8},0).to({regY:4.3,scaleX:2.5,scaleY:2.62,skewX:0.6,skewY:1.8,x:229.6,y:77.6},2).to({scaleY:2.5,skewX:0,skewY:0,x:238.7,y:90},3).wait(2).to({regY:4.1,scaleX:2.5,scaleY:2.34,skewX:-5.9,skewY:-5.1,x:255.8,y:117.8},0).to({regY:4.3,scaleX:2.5,scaleY:2.62,skewX:0.6,skewY:1.8,x:229.6,y:77.6},2).to({scaleY:2.5,skewX:0,skewY:0,x:238.7,y:90},3).wait(2).to({regY:4.1,scaleX:2.5,scaleY:2.34,skewX:-5.9,skewY:-5.1,x:255.8,y:117.8},0).to({regY:4.3,scaleX:2.5,scaleY:2.62,skewX:0.6,skewY:1.8,x:229.6,y:77.6},2).to({scaleY:2.5,skewX:0,skewY:0,x:238.7,y:90},3).wait(8));

	// shadow
	this.instance_8 = new lib.shadow02();
	this.instance_8.setTransform(97.4,400.8,2.5,2.5,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.9,-205.1,490.3,698.8);


(lib.Orange_character = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orange_eyes
	this.instance = new lib.orange_eyes();
	this.instance.setTransform(152.9,-97.7,2.5,2.5,0,0,0,51.6,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

	// orange_mouth
	this.instance_1 = new lib.orange_mouth_talk();
	this.instance_1.setTransform(137.7,68.4,2.5,2.5,0,0,0,55.6,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// orange_arm_R
	this.instance_2 = new lib.orange_arm_R();
	this.instance_2.setTransform(-20.2,133.2,2.5,2.5,0,0,0,37.8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// orange_body_legs
	this.instance_3 = new lib.orange_body_legs();
	this.instance_3.setTransform(97.9,130.3,2.5,2.5,0,0,0,98,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// orange_leg_L
	this.instance_4 = new lib.orange_leg_L();
	this.instance_4.setTransform(32.2,179.5,2.5,2.5,0,0,0,15,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// orange_leg_R
	this.instance_5 = new lib.orange_leg_R();
	this.instance_5.setTransform(191.8,170.8,2.5,2.5,0,0,0,18.7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// orange_arm_L
	this.instance_6 = new lib.orange_arm_L();
	this.instance_6.setTransform(240.7,87.9,2.5,2.5,0,0,0,9.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// shadow
	this.instance_7 = new lib.shadow02();
	this.instance_7.setTransform(99.3,390.7,2.5,2.5,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.9,-207.2,490.3,690.8);


(lib.lab_new = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.lab_machine01();
	this.instance.setTransform(1278.8,584.3,1,1,0,0,0,139.8,241.6);

	this.instance_1 = new lib.lab_comp03();
	this.instance_1.setTransform(989,515,1,1,0,0,0,185,205.8);
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-7,-22,384,456);

	this.instance_2 = new lib.lab_bigmachine();
	this.instance_2.setTransform(657.2,359.8,1,1,0,0,0,188.3,359.8);
	this.instance_2.filters = [new cjs.BlurFilter(5, 5, 3)];
	this.instance_2.cache(-2,-2,381,724);

	this.instance_3 = new lib.lab_computer02();
	this.instance_3.setTransform(254.1,612.8,1,1,0,0,0,224.6,282.7);

	this.instance_4 = new lib.lab_floor();
	this.instance_4.setTransform(729.2,894.8,1,1,0,0,0,650.3,234.6);

	this.instance_5 = new lib.lab_mainbkgd();
	this.instance_5.setTransform(724.1,700.6,1,1,0,0,0,639.9,395.5);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.3,-7,1460.8,1170.5);


(lib.Blue_character_wave01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_arm_R
	this.instance = new lib.blue_arm_R();
	this.instance.setTransform(134.2,383.7,3.064,3.064,0,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.1,rotation:-10,y:394.2},2).wait(1).to({regX:18.2,scaleX:3.05,scaleY:3.1,rotation:0,skewX:15.8,skewY:15.2,x:129.1,y:380.7},3).wait(13).to({regX:18.1,scaleX:3.06,scaleY:3.06,rotation:-10,skewX:0,skewY:0,x:134.2,y:394.2},3).wait(1).to({regX:18.2,rotation:0,y:383.7},2).wait(50));

	// blue_eyes
	this.instance_1 = new lib.blue_eyes();
	this.instance_1.setTransform(293,200.5,3.064,3.064,0,0,0,41,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:211},2).wait(1).to({regY:33.1,scaleY:3.09,skewX:0.9,x:303.7,y:195.9},3).wait(13).to({regY:33.2,scaleY:3.06,skewX:0,x:293,y:211},3).wait(1).to({y:200.5},2).wait(50));

	// blue_mouth
	this.instance_2 = new lib.blue_mouth();
	this.instance_2.setTransform(279.1,334.7,3.064,3.064,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:11.9,y:345},2).wait(1).to({regY:12,scaleY:3.09,skewX:0.9,x:287.8,y:331.3},3).wait(13).to({regY:11.9,scaleY:3.06,skewX:0,x:279.1,y:345},3).wait(1).to({regY:12,y:334.7},2).wait(50));

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(268.3,460.4,3.064,3.064,0,0,0,77,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:470.9},2).wait(1).to({scaleY:3.09,skewX:0.9,x:274.7,y:457.7},3).wait(13).to({scaleY:3.06,skewX:0,x:268.3,y:470.9},3).wait(1).to({y:460.4},2).wait(50));

	// blue_legs
	this.instance_4 = new lib.blue_legs();
	this.instance_4.setTransform(313.3,600.4,3.064,3.064,0,0,0,91.7,170.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({scaleY:3.09,skewX:0.9,x:317.4,y:598.7},3).wait(13).to({regX:91.6,regY:170.5,x:317.1,y:598.4},0).to({regX:91.7,regY:170.6,scaleY:3.06,skewX:0,x:313.3,y:600.4},3).wait(53));

	// blue_arm_L
	this.instance_5 = new lib.blue_arm_L();
	this.instance_5.setTransform(375.5,370.2,3.064,3.064,0,-127.2,52.8,0.1,76.7);

	this.instance_6 = new lib.blue_arm_L_wave();
	this.instance_6.setTransform(361.6,394.4,3.064,3.085,0,0.9,0,0.1,76.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_5}]},13).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},2).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:76.6,skewX:-187.2,skewY:-7.2,x:375.6,y:380.9},2).wait(1).to({regX:0,rotation:59.2,skewX:-360,skewY:0,x:375.4,y:381.2},0).to({_off:true,regX:0.1,regY:76.8,scaleY:3.09,rotation:0,skewX:-359.1,x:361.6,y:394.4},3).wait(13).to({_off:false,regY:76.7,y:394.1},0).to({regX:0,regY:76.6,scaleY:3.06,rotation:59.2,skewX:-360,x:375.4,y:381.2},3).wait(1).to({regX:0.1,rotation:0,skewX:-187.2,skewY:-7.2,x:375.6,y:380.9},0).to({skewX:-127.2,skewY:52.8,x:375.3,y:370.4},2).wait(50));

	// blue_ear_R
	this.instance_7 = new lib.blue_ear_R();
	this.instance_7.setTransform(107,122.2,3.064,3.064,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:132.8},2).wait(1).to({regX:12.5,scaleY:3.09,skewX:-5.5,skewY:-6.4,x:115.8,y:117.5},3).wait(13).to({regX:12.6,scaleY:3.06,skewX:0,skewY:0,x:107,y:132.8},3).wait(1).to({y:122.2},2).wait(50));

	// blue_ear_L
	this.instance_8 = new lib.blue_ear_L();
	this.instance_8.setTransform(274.7,83.9,3.064,3.064,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:92.2},2).wait(1).to({regX:15.3,scaleY:3.09,skewX:-12.8,skewY:-13.7,x:284.8,y:76.6},3).wait(13).to({regX:15.2,scaleY:3.06,skewX:0,skewY:0,x:274.7,y:92.2},3).wait(1).to({y:83.9},2).wait(50));

	// shadow
	this.instance_9 = new lib.shadow02();
	this.instance_9.setTransform(272.9,808.9,2.5,2.5,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.6,-10.8,489.3,912.7);


(lib.anime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{anime:0});

	// timeline functions:
	this.frame_1 = function() {
		playSound("ComEdge2_Fantasy_Q218ElfLandHauserwav");
	}
	this.frame_89 = function() {
		playSound("monstertalk");
	}
	this.frame_130 = function() {
		playSound("monstertalk");
	}
	this.frame_189 = function() {
		playSound("monstertalk");
	}
	this.frame_206 = function() {
		playSound("monstertalk");
	}
	this.frame_228 = function() {
		playSound("monstertalk");
	}
	this.frame_299 = function() {
		playSound("monstertalk");
	}
	this.frame_386 = function() {
		playSound("Dwarf_Laugh1wav");
	}
	this.frame_391 = function() {
		playSound("Dwarf_Laugh2wav");
	}
	this.frame_407 = function() {
		playSound("Dwarf_Laugh2wav");
	}
	this.frame_409 = function() {
		playSound("Dwarf_Laugh1wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(88).call(this.frame_89).wait(41).call(this.frame_130).wait(59).call(this.frame_189).wait(17).call(this.frame_206).wait(22).call(this.frame_228).wait(71).call(this.frame_299).wait(87).call(this.frame_386).wait(5).call(this.frame_391).wait(16).call(this.frame_407).wait(2).call(this.frame_409).wait(131));

	// efx
	this.instance = new lib.bubble();
	this.instance.setTransform(144.9,128.4,0.7,0.7,0,0,0,149.5,152.6);

	this.instance_1 = new lib.Orangedudeorangebodyblur();
	this.instance_1.setTransform(690.2,421.3);

	this.instance_2 = new lib.Bluedudebluebodyblur();
	this.instance_2.setTransform(414.5,345);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{scaleX:0.7,scaleY:0.7,x:144.9,y:128.4}}]},234).to({state:[{t:this.instance,p:{scaleX:1.5,scaleY:1.5,x:355.1,y:239.8}}]},23).to({state:[]},39).to({state:[{t:this.instance_1}]},173).to({state:[]},2).to({state:[{t:this.instance_2}]},22).to({state:[]},2).wait(45));

	// dude2
	this.instance_3 = new lib.Orange_character_walk();
	this.instance_3.setTransform(1439.2,429.1,0.4,0.4,0,0,180,98,132.4);

	this.instance_4 = new lib.Orange_character_still();
	this.instance_4.setTransform(916.4,566.6,0.8,0.8,0,0,180,98,132.3);

	this.instance_5 = new lib.Orange_character();
	this.instance_5.setTransform(916.4,566.7,0.8,0.8,0,0,180,98,132.4);

	this.instance_6 = new lib.Orange_charactertalkpoint();
	this.instance_6.setTransform(933.8,579.7,1.897,1.897,0,0,180,98,132.4);

	this.instance_7 = new lib.Orange_charactertalkpoint02();
	this.instance_7.setTransform(899.2,475.2,0.8,0.8,0,0,180,98,132.4);

	this.instance_8 = new lib.Orange_character_laugh();
	this.instance_8.setTransform(935.4,474.1,0.8,0.8,0,0,180,98,132.4);

	this.instance_9 = new lib.Orange_character_wave01();
	this.instance_9.setTransform(817.3,570.1,0.45,0.45,0,0,180,98,132.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},31).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},38).to({state:[{t:this.instance_4,p:{regY:132.3,y:566.6}}]},1).to({state:[{t:this.instance_5}]},18).to({state:[{t:this.instance_4,p:{regY:132.4,y:566.7}}]},40).to({state:[{t:this.instance_5}]},60).to({state:[{t:this.instance_4,p:{regY:132.4,y:566.7}}]},13).to({state:[]},55).to({state:[{t:this.instance_6}]},39).to({state:[]},35).to({state:[{t:this.instance_7}]},34).to({state:[{t:this.instance_8}]},17).to({state:[{t:this.instance_9}]},61).to({state:[{t:this.instance_3}]},26).to({state:[{t:this.instance_3}]},62).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:1117.2},31).wait(1).to({scaleX:0.8,scaleY:0.8,x:1468.9,y:385.5},0).to({x:1052.6},38).to({_off:true},1).wait(398).to({_off:false,regY:132.6,scaleX:0.45,scaleY:0.45,skewY:0,x:758,y:476},0).to({x:1344.5},62).wait(9));

	// dude1
	this.instance_10 = new lib.Blue_character_walk();
	this.instance_10.setTransform(-215.6,307,0.4,0.4,0,0,0,21.8,-13);

	this.instance_11 = new lib.Blue_character_wave01();
	this.instance_11.setTransform(243.8,276.7,0.8,0.8,0,0,0,94.5,171.3);

	this.instance_12 = new lib.Blue_character_talk();
	this.instance_12.setTransform(385.2,486.4,0.8,0.8,0,0,0,94.5,171.3);

	this.instance_13 = new lib.Blue_character_still();
	this.instance_13.setTransform(385.2,486.3,0.8,0.8,0,0,0,94.5,171.2);
	this.instance_13._off = true;

	this.instance_14 = new lib.Blue_character_talkpoint();
	this.instance_14.setTransform(322.8,473.6,0.8,0.8,0,0,0,94.5,171.3);

	this.instance_15 = new lib.Blue_character_talkpointstill();
	this.instance_15.setTransform(926.5,1062.3,1,1,0,0,0,94.5,171.3);

	this.instance_16 = new lib.Blue_character_talkpoint_armDown();
	this.instance_16.setTransform(386.6,523.8,0.75,0.75,0,0,0,94.5,171.3);

	this.instance_17 = new lib.Blue_character_excited();
	this.instance_17.setTransform(620.8,704.4,1,1,0,0,0,94.5,171.3);

	this.instance_18 = new lib.Blue_character_excitedstill();
	this.instance_18.setTransform(372,401.1,0.8,0.8,0,0,0,94.5,171.3);

	this.instance_19 = new lib.Blue_character_laugh();
	this.instance_19.setTransform(365.3,386.3,0.8,0.8,0,0,0,94.5,171.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_10}]},31).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},38).to({state:[{t:this.instance_11,p:{scaleX:0.8,scaleY:0.8,x:243.8,y:276.7}}]},1).to({state:[{t:this.instance_12}]},59).to({state:[{t:this.instance_13}]},52).to({state:[{t:this.instance_13}]},24).to({state:[{t:this.instance_13}]},11).to({state:[{t:this.instance_14}]},11).to({state:[{t:this.instance_15}]},29).to({state:[{t:this.instance_16}]},39).to({state:[{t:this.instance_17}]},35).to({state:[{t:this.instance_18}]},34).to({state:[{t:this.instance_19}]},17).to({state:[{t:this.instance_13}]},61).to({state:[{t:this.instance_11,p:{scaleX:0.45,scaleY:0.45,x:450.5,y:412.2}}]},7).to({state:[{t:this.instance_10}]},43).to({state:[{t:this.instance_10}]},46).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:175.4},31).wait(1).to({scaleX:0.8,scaleY:0.8,x:-166.8,y:130.1},0).to({x:192},38).to({_off:true},1).wait(422).to({_off:false,regX:94.5,regY:171.3,scaleX:0.45,scaleY:0.45,skewY:180,x:605.4,y:412.7},0).to({x:-48.9},46).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(182).to({_off:false},0).wait(35).to({_off:true},11).wait(215).to({_off:false,regX:94.7,regY:171.3,scaleX:0.45,scaleY:0.45,x:530.2,y:529.6},0).to({_off:true},7).wait(90));

	// bkgd tint
	this.instance_20 = new lib.tint();
	this.instance_20.setTransform(625,375,1,1,0,0,0,625,375);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(540));

	// bkgd
	this.instance_21 = new lib.lab_new();
	this.instance_21.setTransform(752.2,23.2,0.985,1,0,0,0,849.7,385.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(32).to({regX:849.6,scaleX:1.87,scaleY:1.9,x:719.1,y:-426.7},0).wait(225).to({scaleX:5.75,scaleY:5.84,x:2221.2,y:-1701},0).wait(39).to({scaleX:1.87,scaleY:1.9,x:758.3,y:-421.8},0).wait(35).to({scaleX:5.15,scaleY:5.23,x:1435.9,y:-1893.4},0).wait(34).to({scaleX:1.92,scaleY:1.95,x:714.5,y:-560.9},0).wait(78).to({regX:729.1,regY:581.8,scaleX:1,scaleY:1,x:635,y:230.7},0).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223,-369.6,1703.6,1170.5);


// stage content:



(lib.scene = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.anime();
	this.instance.setTransform(625,375,1,1,0,0,0,625,375);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(402,5.4,1703.6,1170.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;