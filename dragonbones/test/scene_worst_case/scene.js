(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/shadowbase.png", id:"shadowbase"},
		{src:"sounds/cartoonCrash01wav.mp3", id:"cartoonCrash01wav"},
		{src:"sounds/cartoonDoinkwav.mp3", id:"cartoonDoinkwav"},
		{src:"sounds/cartoonSlideUpwav.mp3", id:"cartoonSlideUpwav"},
		{src:"sounds/cartoonSwish.mp3", id:"cartoonSwish"},
		{src:"sounds/Dwarf_Laugh1wav.mp3", id:"Dwarf_Laugh1wav"},
		{src:"sounds/Dwarf_Laugh2wav.mp3", id:"Dwarf_Laugh2wav"},
		{src:"sounds/monstertalk.mp3", id:"monstertalk"}
	]
};



// symbols:



(lib.shadowbase = function() {
	this.initialize(img.shadowbase);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,44);


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
	this.shape_8.graphics.f().s("#D18B25").ss(2,1,1).p("AhIAAQAAgqAVgeQAWgfAdAAQAeAAAVAfQAWAeAAAqQAAAqgWAfQgVAegeAAQgdAAgWgeQgVgfAAgqg");
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
	this.shape_16.graphics.f().s("#D18B25").ss(2,1,1).p("AIkihQgGBEgPBAQgVBZgrBQQggA5guAtQg0AyhFAVQhWAYhaACQiQACiHg6Qhegog/hPQgbgigVglQgphcgohZQgthmgbhsQgDgNgDgOQBnAqBtAfQBYAbBaAMQB9ARB9gIQBngDBkgTQBWgRBQgkQA2gYAwgjQgBBZgHBYg");
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


(lib.text_CRASH = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F30000").s().p("A2/JSIiElGIiTABIgEDtIjsgNIADujQBAgJBTgHQBTgIBYgEQBYgFBNACQBeAAA/AaQBAAaAjBEQAlBDAMB9QALB8gXBMQgXBNgvAsQguAsg/AVIBLENIBTAGIAGBfgA68hOIADDgQBEgCAvgNQAvgNAageQAZgeAAg2QgCgqgfgSQghgTgxgCQgdgCgfAAIgpABgEAq8AIEQgkgJgQgfQgOgfgDgoQgCglAOgXQAOgXAcgDQAYgCAngBIBRgBIBIACQAsADARAPQAQAQAGAgQAHAggKAaQgKAZgfASQgPAJggAHQgfAHgmAFQglAFgiABIgRABQgVAAgPgDgEAiDAIEQgkgJgPgfQgPgfgDgoQgCglAOgXQAOgXAdgDQAXgCAogBIBRgBIBIACQAsADAQAPQARAQAFAgQAIAggKAaQgKAZggASQgPAJgfAHQggAHglAFQgmAFghABIgRABQgWAAgPgDgAEKIAQhcgChRgEIgDhyQCEAGBJgBIBKAAQAwABAngHQApgHAYgRQAZgQAAgaQAAgmgWgPQgWgQglgEIhjgPQg0gHgzgNQhegYgthLQgthNgEiGQgFi7A+hYQA9haBwgIQBKgHBcgBQBcgBBeABIC0AFIAFGmQg7AAgwADIhMAGQgcADgBABQgvADgfAbQgfAagCAtQAAAYALAWQALAWAgATQAfASA7APQBdAYAtAnQAtAoAAA8QABApgSAiQgSAjgwAWQgxAWhbAFQhSAFhbABIgaAAQhPAAhPgDgAZODoIjVgCIgJDTIk5AQIgJuNIFdgRIADHUIC9gFIAOmjIDigQIBAOCIkYACgEgl2AHAQhpgChdgFQhegFg/gGQg+gGgxgNQgygOgjgmQgjglgQhMQgLg8ABhPQAAhQAJhTQAIhWAOhLQANhMARgzQAjhiBNguQBNgvBlgBQBigCBoAFQBpAFCFAZIgTHTQhMgGgrAPQgqAOgSAYQgRAagBAeQgBAfAFAaQAHAjAYAkQAZAkAwAbQAwAbBPAIIAECVQhUAGhaAAIgcAAgAvOF8IDbtNIHTgvICdONIjMAOIgOhKIjPgCIgiBmgAoSEHICmgIIg9kYgEAqJAB/IAArNIENgIIAiLbgEAhRAB/IAArNIENgIIAiLbg");
	this.shape.setTransform(311.1,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("A5uFYIgiAAIgPDgIldgIIgUwXQBwgMCQgMQCRgMCtAGQB+AHBJAmQBJAnAiA5QAjA6ALA/QAMA/ADA1QAEA0gGA9QgGA5gUA5QgTA5gnArQgnArg+ATIA4DiIBjAAIgGC2IlgADgA27JeID1AFIgGhfIhTgFIhLkOQA/gVAugrQAvgtAXhNQAXhMgLh8QgMh8glhEQgjhDhAgbQg/gaheAAQhNgChYAFQhYAEhTAJQhTAGhAAKIgDOiIDsAOIAEjuICTgBgEAqSAJSQgzgZgRgyQgJgjgFgrQgGgrAGglQAHghAZgXQAZgWA0gHQAkgFAzgCQAzgDAyABQAyAAAjAEQAyAGAZAgQAZAfAABCQAAA9gOAiQgPAhgfARQghAXg9AOQg9APhDAIQgPACgPAAQgwAAgogTgEArwAFJQgnAAgYACQgcADgOAYQgOAWACAlQADAoAOAfQAQAgAkAIQAUAEAhgBQAigBAlgGQAmgEAfgIQAggHAPgJQAfgRAKgaQAKgagHggQgGgfgQgQQgRgQgsgCIhIgDIhRACgEAhaAJSQgzgZgRgyQgKgjgFgrQgFgrAGglQAGghAZgXQAagWAzgHQAlgFAygCQA0gDAxABQAzAAAiAEQAyAGAZAgQAaAfAABCQAAA9gPAiQgPAhgeARQghAXg9AOQg+APhCAIQgPACgPAAQgwAAgogTgEAi4AFJQgoAAgXACQgdADgOAYQgOAWACAlQADAoAPAfQAPAgAkAIQAVAEAhgBQAhgBAmgGQAlgEAggIQAfgHAPgJQAggRAKgaQAKgagIggQgFgfgRgQQgQgQgsgCIhIgDIhRACgAEmJBQiSgFhzgHIAAjJIDtAGQBhADA0gHQA0gIABgaQAAgUgjgHQgjgFg5gGIhAgJQgogIgsgPQgtgPgngeQgngcgWgwQgbhBgMhLQgNhJAEhOQAEhNAThIQAchsBLgyQBLgyBxgMQBMgHBogCQBpgBBwACIDQAEIgTIsIhrgBQg3gCguAEQguADgcALQgdAMgBAZQACAeAgARQAhARAtAMQAuALApAMQA/AUAjAzQAkAzgFBNQgDA0gaAtQgaAuhFAcQhFAciCABQidAAiSgGgABhIHQBRADBcACQBcAEBcgBQBbgBBSgFQBbgEAxgXQAwgWASgiQASgjgBgpQAAg8gtgoQgtgnhdgYQg7gPgfgRQgggTgLgXQgLgWAAgXQACgtAfgcQAfgaAvgDQABgBAcgCIBMgHQAwgDA7AAIgFmmIi0gEQhegChcABQhcABhKAHQhwAJg9BZQg+BYAFC8QAECFAtBNQAtBLBeAZQAzAMA0AHIBjAPQAlAEAWARQAWAOAAAmQAAAbgZAPQgYARgpAHQgnAIgwgCIhKABQhJAAiEgFgAYYElIhrgCIAADfImuAHIgYwCIHcAAIAUHCIBJgFIAImkIFfgSIApQKImGAPgAZSD0IAVDjIEYgCIhAuCIjiAQIgOGhIi9AFIgDnSIldARIAJONIE5gQIAJjTgEgoLAIFQhngFh3gLQh4gLhDguQhFgsgbhHQgchIgBhWQgEiFARiIQAQiIA4iZQAnhfA9gsQA9gsBGgMQBGgLBCADQBgAABxAMQByAKCMAkIgHJJIgxgFQgXgCggAAQg6ACgWAgQgWAhAPArQAKAcAWAXQAXAYAyAQQAxARBbAGIAED2Qh5AHhoAAQhoAAhngGgEgp3gILQhlABhNAuQhNAugjBiQgRAzgNBMQgOBLgIBWQgJBTAABQQgBBQALA7QAQBMAjAlQAjAmAyAOQAxAOA+AFQA/AHBeAEQBdAGBpABQBpABBhgGIgEiWQhPgIgwgbQgwgagZglQgYgkgHgjQgFgaABgeQABgfARgZQASgZAqgOQArgOBMAFIATnTQiFgYhpgGQhFgDhDAAIhCABgAmQGXIhugEIgaBfIn9gnIDuvWIJOgSICRQBIk8AOgArvnEIjbNNIGAA4IAihlIDPABIAOBKIDMgOIiduNgAmlgNIA9EYIimAJgAnJDmIAiADIgKhTgEApEgKJIGRgLIAmNgImoANgEAqNgJCIAALOIEvAFIgiragEAgLgKJIGRgLIAnNgImpANgEAhVgJCIAALOIEvAFIgiragA64hCQA0gCAxADQAxACAhATQAfATACAqQAAA2gZAdQgaAfgvAMQgvANhEADgA50AAIgEBlQAgABAYgOQAZgQADgjQAAgRgNgJQgOgJgSgCQgNgBgLAAIgLABg");
	this.shape_1.setTransform(310.7,66.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.502)").s().p("A5+FcIgjAAIgPDhIlhgHIgTwiQBxgMCRgMQCSgMCvAFQCAAIBJAmQBKAnAiA6QAjA6ALBBQANA+ADA3QAEA0gGA9QgGA6gUA6QgUA6gnAsQgnAqg/AUIA5DjIBkAAIgGC4IlkAEgA6EAAIgEBmQAgABAYgPQAagPADgjQAAgSgOgJQgOgIgSgDQgNgBgLABIgLAAgEAqtAJYQgzgZgRgzQgKgjgFgsQgGgrAHgmQAGggAZgXQAagXA0gIQAlgEAzgCQA0gEAyACQAzAAAjADQAyAGAaAhQAZAgAABCQAAA+gOAiQgPAhgfASQgiAXg9APQg+AOhDAIQgQACgOAAQgyAAgogTgEAhvAJYQgzgZgSgzQgJgjgFgsQgGgrAGgmQAHggAZgXQAagXA0gIQAlgEAzgCQA0gEAyACQAzAAAjADQAyAGAZAhQAaAgAABCQAAA+gOAiQgQAhgeASQgiAXg9APQg+AOhEAIQgPACgPAAQgxAAgogTgAEpJHQiUgGh0gGIAAjMIDwAGQBiAEA1gIQA0gHABgaQAAgVgkgGQgjgGg6gGQgYgDgogHQgogHgtgPQgtgQgogeQgngcgWgxQgchBgMhLQgNhLAEhOQAEhPAThIQAdhsBMg0QBLgyBygMQBNgIBpgBQBqgBBxACIDTAEIgUIwIhsgBQg3gBgvAEQguADgdAMQgdALgBAZQACAfAgARQAhARAuAMQAvALApAMQA/AVAkAzQAkA0gEBOQgEA0gaAuQgbAuhFAdQhGAciDAAQifAAiTgFgAYoEnIhsgBIAADhImzAHIgYwMIHhAAIAUHGIBJgEIAJmpIFjgSIAoQUImJAQgEgokAIKQhogFh5gLQh5gLhEguQhFgtgchJQgchIgBhWQgEiGARiKQAQiKA5iaQAnhgA+gtQA+gsBGgMQBHgLBCADQBhABBzAKQBzALCNAkIgHJQIgxgFQgYgCggAAQg6ACgXAgQgWAiAPAqQAKAcAXAZQAXAXAyAQQAxASBcAFIAFD5Qh7AHhpAAQhoAAhogGgAmUGbIhvgEIgbBgIoCgnIDxvgIJUgTICSQLIk/APgAmrDrIgLhUIgYBQIAjAEgEApegKQIGVgLIAnNpImtANgEAgggKQIGVgLIAnNpImtANg");
	this.shape_2.setTransform(311.3,-112.5,1,1,0,0,0,0.6,-187.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.1,0,627.6,142);


(lib.shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA9CsQmbgCkRgxQkSgygChHQgChJD8gyQD9gxFkAAQFjAAD8AxQD8AyBCBXQBCBYjuAkQjkAjmGAAIgigBg");
	this.shape.setTransform(90,17.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180.1,34.6);


(lib.moon = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DFCF97").ss(2,1,1).p("AKyC7QAXhZAAhiQAAkmjRjRQjRjRknAAQkmAAjRDRQgMALgKAMQi7DKAAEWQAAEnDRDRQDRDREmAAQAtAAArgEQAkgFAjgHQBNgRBGghQAogTAlgZQASgMASgNQAsghApgpQCHiHAwiq");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFA6").s().p("AgYAeQgDgHAAgIQAAgPAOgNQANgNATAAIAFgDIACAEQACAGAAAJQAAAPgOAMQgOANgSAAIgGAAg");
	this.shape_1.setTransform(62.3,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFE8").s().p("AmJGmQjRjSAAklQAAkYC7jKQCLhCCoAAQElgBDRDSIACABQgTAAgNAFQgOAFAAAHQAAAHAOAFIAIACQAMADAPAAIABAAQAOAAALgCIAQARIAKAMQCYC+AAD6QAADYhwCrIgJgFQgOgFgUAAQgUAAgOAFQgOAFAAAHQAAAHAOAFIAJACQALADAOAAIABAAQAPAAANgDIgPATIgFAIQgUAXgVAYQhGAhhNARQgjAHgkAFQgrAEguABQklgBjRjQgACaJEQgOAEAAAFQAAAFAOADIAOACIASABQATAAANgDIAIgCQAFgDABgDQAAgFgOgEQgNgCgTAAQgTAAgNACgAADIMQgHAEAAAFQAAAFAHADQAHACAJABIAGAAQANAAAJgDIAGgDQADgCAAgDQAAgFgJgEQgJgDgNAAQgNAAgJADgAD9IBQgLADAAAFQAAAFALADIAPADIALABQAPgBALgDIAHgDQAEgCAAgDQAAgFgLgDQgLgEgPAAQgPAAgLAEgAjYHWQgIAGAAAJQAAAIAIAFQAHAFAHABIAGABQAIgBAGgCIAFgEIAGgDQADgFAAgFIAAgEQgBgGgIgFQgIgGgLAAQgMAAgIAGgAFxDhQgUAOABAUQgBAUAUAOIALAHIAMAFQAKACANAAQAbAAASgOQATgOAAgUQAAgKgDgHIgFgHIgLgKQgSgOgbAAQgcAAgSAOgAl7giQg7AuAABCQAABDA7AuIAQAMIANAIQAyAcBAAAQBUAAA8gwQA7guAAhDQABg9gygqIgEgEIgGgFQg8gvhUAAQhUAAg7AvgAFhhUQgaATAAAbQAAAbAaARIALAGIAMAGQATAHAWAAQAmAAAagTQAbgRAAgbQAAgQgKgOIgFgGQgFgGgHgEQgagTgmAAQglAAgbATgABsleQgYAGAAAJQAAAJAWAHIACAAIATAFQASACAVAAQAiAAAYgHQANgDAHgFQADgDABgEIAAgBQAAgJgYgGQgYgHgiAAQgiAAgYAHgAmYmqQgIAHAAAIQAAAIAIAGQAGAEAJABIAGABQAHAAAGgCIAHgEIAEgEQAEgEAAgGIAAgDQgCgGgGgGQgJgFgLAAQgNAAgIAFgABonvQgIAJgBANQABANAIAJQAIAHAJABIAGABIAHgBQAJgCAFgGQAJgJAAgNIAAgCQAAgHgDgFIgGgIQgIgJgNAAQgNAAgKAJgAi7oHQgUAGAAAKQAAAJAUAGIABABIAUAEQAOACAPAAQAeAAAUgHQAOgDAEgGQADgDAAgDIAAAAQABgKgWgGQgUgHgeAAQgdAAgVAHg");
	this.shape_2.setTransform(-11,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCE").s().p("AgCKCIAFgCQAOgDATAAIASABIgIACQgNADgTAAIgQgBgAiXJLIAGgDQAJgDANgBIAGABIgGADQgJADgNAAIgGAAgABgI/IAGgDQAMgDAPAAIALAAIgHADQgLADgPABIgLgBgAl2IjIAAgDQAAgGAEgEIAEgEIAGgEQAGgCAIAAIAGAAIAAAEQAAAFgDAFIgGADIgFAEQgGACgIABIgGgBgAEUIYIAEgCQAOgEAUAAIgEABIgFACQgNADgPAAIgBAAgADcFcQgEgJAAgJQAAgVATgNQATgOAbgBQAMAAALAEQADAHAAAKQAAAUgTAOQgSAOgbAAQgNAAgKgCgAoKD+QgygtAAg9QAAhCA8gvQA7guBUABQA5AAAvAUIABgDIAGAFIAEAEQAyAsgBA9QAABDg7AuQg8AwhUAAQhAAAgygcgADMA9QgLgOAAgRQAAgaAbgSQAagSAmgBQAXABATAHQAKAOAAAOQAAAbgbATQgaATgmAAQgWAAgTgHgAH5h7QgCgEABgFQAAgPAPgLQAQgLAXAAQAHABAHABIABAIQAAAQgQAKQgPALgXAAIgOgBgAgrkPQAGgGANgDQAYgGAhAAQAVgBASADQgHAFgNADQgYAHggAAQgVAAgSgCgAG9kkQADgDAIgDQAOgGATAAIAGAAQgDADgHAEQgOAFgUAAIgGAAgADjlWQgPAAgMgDQACgEAIgEIAFgCQANgEARAAIAGAAIABAAQAPAAAMACQgCAFgIADIgFACIgLADQgLACgOAAIgBAAgAo1ldIgBgCQAAgGADgEQACgDADgCIAHgDQAGgCAHgBIAHABIAAADQAAAGgEAEIgEAEIgHAEQgGACgHAAIgGgBgAgxmQQgJgBgIgHQgIgJgBgNQABgNAIgJQAKgJANAAQANAAAIAJIAHAIQACAFAAAHIAAACQAAANgJAJQgFAGgJACIgHABIgGgBgAlSm4QAFgFAMgEQAWgGAdgBQAQAAANACQgEAGgOADQgUAHgeAAQgPAAgOgCgAFXnpQAHgEAHgBQgCAGgGAEQgGAFgIABQADgGAFgFgAA9oxQgDgHAAgGQAAgUAWgNQAVgNAfAAQARAAAOAEQADAHAAAHQAAATgVANQgWAOgeAAQgSgBgOgEgAjvp9QALgFAPgBQgCAEgHADQgLAFgPABQADgEAGgDg");
	this.shape_3.setTransform(6.2,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAD681").s().p("AgDKOQgNgDAAgFQAAgFANgDQALgDATAAQATAAANADQAOADAAAFQAAAEgGACIgSgBQgTAAgNADIgIADIgMgDgAiaJWQgJgDAAgFQAAgFAJgEQAJgDANAAQANAAAJADQAJAEAAAFQAAADgDACIgGAAQgNAAgJADIgGADQgJgBgHgCgABeJKQgLgDAAgFQAAgFALgDQALgDAPAAQAQAAAKADQALADAAAFQAAADgEADIgLgBQgPAAgLADIgHADIgPgDgAl3IsQgIgGAAgIQAAgJAIgGQAJgFALAAQAMAAAIAFQAHAFABAHIgGgBQgIAAgGADIgGADIgEAEQgEAFAAAFIABADQgIgBgHgEgAEIIkIgJgDQgOgFAAgHQAAgHAOgFQAOgFAUAAQAUAAAOAFIAJAFQAFADAAAEIAAACQgCAFgIAEQgUAAgNAFIgFABQgOAAgLgCgADeFlIgMgHQgTgOAAgUQAAgUATgOQATgOAbAAQAbAAATAOIAKAKIAFAHQgLgDgMAAQgbAAgTAOQgTAOAAAUQAAAJAFAJIgMgFgAoJEFIgRgMQg7gvAAhDQAAhCA7gwQA8gtBUAAQBUAAA7AtIgBADQgugWg6AAQhUAAg7AvQg8AvAABDQAAA9AyAsIgMgHgAIYCpQgIgDgHgGQgOgNAAgRQAAgSAOgMQAOgNAUAAQAUAAAOANIAGAHIADAEIgFAEQgUAAgOAMQgOANAAARQAAAIADAHIgMgDgADNBGIgKgHQgbgTAAgbQAAgZAbgTQAagTAmAAQAlAAAbATQAGAFAFAFIAFAGQgTgHgXAAQglAAgbASQgaASAAAbQAAAQAKAOIgMgFgAH5hxQgGgCgFgEQgQgKAAgQQAAgPAQgLQAQgLAWAAQAXAAAPALQAHAFAEAGIAEAHQgHgBgHAAQgXAAgQAKQgPALAAAQQAAAEABAEIgNgEgAgxkFIgCgBQgWgGAAgJQAAgKAYgGQAYgHAgAAQAiAAAYAHQAYAGAAAKIAAABQAAADgEADQgSgCgVAAQgiAAgWAGQgOAEgGAFIgTgEgAG2kYIgIgDQgOgGAAgIQAAgJAOgGQAOgFAUAAQAUAAAOAFQAOAGAAAIIAAABQAAAEgDAEIgGgBQgUAAgOAGQgHADgEAEQgLgBgJgCgADOlNQgPgFAAgHQAAgHAPgFQANgEASgBIAFAAQAVAAAPAFQAPAFAAAHIgBADQgMgDgPAAIgBAAIgFAAQgSAAgNAFIgEABQgJAEgCAEIgHgCgAo3lUQgIgFAAgJQAAgIAIgGQAJgGAMAAQAMAAAIAGQAHAFABAGIgGAAQgIAAgGACIgHADQgDACgBADQgEAEAAAGIABADQgJgBgGgFgAlYmuIgCAAQgUgHAAgJQAAgKAUgGQAVgHAeAAQAdAAAVAHQAVAGAAAKIAAAAQAAAEgDADQgOgCgQAAQgdAAgVAGQgNAEgFAFIgTgEgAFMnQQgIgBgGgFQgJgGAAgKQAAgJAJgHQAJgGANAAQANAAAJAGQAHAFACAGIAAAFIgBAGQgHABgGAFQgGAEgCAGIgJABIgIgBgAA+ooIgIgEQgVgNAAgTQAAgTAVgNQAWgNAeAAQAfAAAVANQAJAFAGAHIAEAHQgPgFgRAAQgfAAgVANQgWAOAAATQAAAHADAGIgMgFgAjspoQgKAAgIgCIgKgEQgMgFAAgJQAAgIAMgGQALgGARAAQAQAAAMAGQAKAFABAIIAAABQAAAEgCAEQgQAAgLAFQgGADgDAEIgBAAg");
	this.shape_4.setTransform(4.9,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFCC").s().p("AD9J5IAGgIIAOgTIAGgCIADgCQAJgDABgFIAAgCQAAgEgEgEQBviqAAjYQAAj7iYi9IgKgMIgPgRIALgDIAEgCQAIgDACgFIABgCQAAgHgPgFQgPgFgVAAIgFAAIgCgCQjPjRknAAQinAAiMBDIAWgXQDSjREnAAQElAADSDRQDQDRABEmQAABigYBZIgCAMQgxCqiGCHQgqApgsAhIgkAZQglAZgnATQAVgYATgXgAHcCeQgOANAAARQAAASAOAMQAHAGAJAEIAMADIAGAAQAUAAAOgNQAOgMAAgSQAAgIgCgGIgDgEIgDgFIgGgHQgOgMgUAAQgUAAgOAMgAHBhxQgQALAAAQQAAAPAQALQAFADAGADIAOAEIANABQAXAAAPgLQARgLgBgPIAAgIIgEgIQgFgGgHgFQgPgKgXAAQgWAAgQAKgAGCj9QgOAGgBAIQABAJAOAFIAIADQAIADAMAAIAGAAQATAAAOgGQAIgDADgDQADgEABgEIAAAAQgBgIgOgGQgOgGgTAAQgVAAgNAGgAERm7QgIAGgBAKQABAJAIAHQAGAEAJACIAIAAIAIAAQAIgCAFgEQAHgFABgFIABgGIAAgFQgCgHgHgEQgIgHgNAAQgNAAgKAHgAAJoyQgTAOAAATQAAATATANIAIAEIAMAFQAPAEASAAQAeAAAWgNQAVgNAAgTQAAgIgDgGIgEgGQgGgHgIgGQgWgNgeAAQgfAAgWANgAk1pQQgMAGAAAJQAAAIAMAGIALAEQAHACAKAAIACAAQAPgBALgFQAGgDADgEQACgDABgEIAAgCQgBgHgLgGQgMgFgQAAQgQAAgMAFg");
	this.shape_5.setTransform(9.4,-3.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,-72.3,144.7,144.7);


(lib.mini_stars = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAJQgFgDgBgGQABgEAFgEQAFgEAGAAQAHAAAFAEQAFAEAAAEQAAAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape.setTransform(196.7,391.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAJQgGgDAAgGQAAgEAGgFQAFgDAGAAQAHAAAFADQAGAFgBAEQABAGgGADQgFAEgHABQgGgBgFgEg");
	this.shape_1.setTransform(505.2,522.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAKQgGgFABgFQgBgEAGgEQAFgFAGAAQAHAAAFAFQAGAEAAAEQAAAFgGAFQgFADgHAAQgGAAgFgDg");
	this.shape_2.setTransform(1169.3,359);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAKQgGgFAAgFQAAgEAGgEQAFgFAGAAQAHAAAFAFQAGAEgBAEQABAFgGAFQgFADgHAAQgGAAgFgDg");
	this.shape_3.setTransform(863,546.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAJQgGgDABgGQgBgEAGgFQAFgDAGAAQAHAAAFADQAFAFABAEQgBAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape_4.setTransform(1159.8,802.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAJQgFgDAAgGQAAgEAFgFQAFgDAGAAQAHAAAFADQAFAFABAEQgBAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape_5.setTransform(868.9,707.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAJQgFgEgBgFQABgEAFgEQAFgEAGgBQAHABAFAEQAFAEAAAEQAAAFgFAEQgFAEgHABQgGgBgFgEg");
	this.shape_6.setTransform(1055.4,592.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAJQgFgDAAgGQAAgEAFgFQAFgDAGAAQAHAAAFADQAFAFABAEQgBAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape_7.setTransform(847.7,369.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAJQgFgDAAgGQAAgEAFgFQAFgDAGAAQAHAAAFADQAFAFABAEQgBAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape_8.setTransform(546.2,602.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAKQgFgEAAgGQAAgEAFgEQAFgFAGAAQAHAAAFAFQAFAEAAAEQAAAGgFAEQgFADgHAAQgGAAgFgDg");
	this.shape_9.setTransform(685.8,494.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLAKQgGgFABgFQgBgEAGgFQAFgDAGAAQAHAAAFADQAGAFAAAEQAAAFgGAFQgFADgHAAQgGAAgFgDg");
	this.shape_10.setTransform(336.2,738.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAKQgFgEgBgGQABgEAFgEQAFgFAGAAQAHAAAFAFQAFAEAAAEQAAAGgFAEQgFADgHAAQgGAAgFgDg");
	this.shape_11.setTransform(1.8,494.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLAJQgGgEABgFQgBgEAGgEQAFgEAGgBQAHABAFAEQAFAEABAEQgBAFgFAEQgFAEgHABQgGgBgFgEg");
	this.shape_12.setTransform(385.5,421.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLAJQgGgEABgFQgBgEAGgEQAFgEAGgBQAHABAFAEQAGAEAAAEQAAAFgGAEQgFAEgHABQgGgBgFgEg");
	this.shape_13.setTransform(120.3,618.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_14.setTransform(1167.5,653.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANAAQAPAAAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_15.setTransform(1018.5,726.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANAAQAPAAAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_16.setTransform(1118.2,490.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_17.setTransform(937.5,360.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_18.setTransform(569.2,715.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_19.setTransform(727.5,581);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPAAQgNAAgLgJg");
	this.shape_20.setTransform(354.5,342.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_21.setTransform(595,402.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANAAQAPAAAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_22.setTransform(125.7,506.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgIANAAQAPAAAKAIQAKAIAAAKQAAALgKAIQgKAJgPAAQgNAAgLgJg");
	this.shape_23.setTransform(266.5,685.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgIANAAQAPAAAKAIQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_24.setTransform(89.3,762.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPAAAKAIQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_25.setTransform(26,669.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgIQALgIANAAQAPAAAKAIQAKAIAAAKQAAALgKAJQgKAIgPAAQgNAAgLgIg");
	this.shape_26.setTransform(322.7,526.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_27.setTransform(18.8,348.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgLAJQgGgDABgGQgBgEAGgEQAFgEAGAAQAHAAAFAEQAGAEAAAEQAAAGgGADQgFAFgHAAQgGAAgFgFg");
	this.shape_28.setTransform(1414,391.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgLAJQgFgDAAgGQAAgEAFgFQAFgDAGAAQAHAAAFADQAFAFABAEQgBAGgFADQgFAEgHABQgGgBgFgEg");
	this.shape_29.setTransform(1722.5,522.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLAKQgGgFAAgFQAAgEAGgEQAFgFAGAAQAHAAAFAFQAGAEgBAEQABAFgGAFQgFADgHAAQgGAAgFgDg");
	this.shape_30.setTransform(2386.6,359);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLAKQgFgFgBgFQABgEAFgEQAFgFAGAAQAHAAAFAFQAFAEABAEQgBAFgFAFQgFADgHAAQgGAAgFgDg");
	this.shape_31.setTransform(2080.3,546.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLAJQgFgDgBgGQABgEAFgFQAFgDAGAAQAHAAAFADQAGAFgBAEQAAAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape_32.setTransform(2377.1,802.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLAJQgGgDAAgGQAAgEAGgFQAFgDAGAAQAHAAAFADQAFAFAAAEQAAAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape_33.setTransform(2086.2,707.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLAJQgGgEABgFQgBgEAGgEQAFgEAGgBQAHABAFAEQAGAEAAAEQAAAFgGAEQgFAEgHABQgGgBgFgEg");
	this.shape_34.setTransform(2272.7,592.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgLAJQgGgDAAgGQAAgEAGgFQAFgDAGAAQAHAAAFADQAGAFgBAEQABAGgGADQgFAFgHAAQgGAAgFgFg");
	this.shape_35.setTransform(2065,369.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgLAJQgGgDAAgGQAAgEAGgFQAFgDAGAAQAHAAAFADQAFAFAAAEQAAAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape_36.setTransform(1763.5,602.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgLAKQgGgEABgGQgBgEAGgEQAFgFAGAAQAHAAAFAFQAGAEAAAEQAAAGgGAEQgFADgHAAQgGAAgFgDg");
	this.shape_37.setTransform(1903.1,494.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgLAKQgFgFgBgFQABgEAFgFQAFgDAGAAQAHAAAFADQAFAFAAAEQAAAFgFAFQgFADgHAAQgGAAgFgDg");
	this.shape_38.setTransform(1553.5,738.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgLAKQgGgEABgGQgBgEAGgEQAFgFAGAAQAHAAAFAFQAGAEAAAEQAAAGgGAEQgFADgHAAQgGAAgFgDg");
	this.shape_39.setTransform(1219.1,494.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgLAJQgGgEAAgFQAAgEAGgEQAFgEAGgBQAHABAFAEQAGAEgBAEQABAFgGAEQgFAEgHABQgGgBgFgEg");
	this.shape_40.setTransform(1602.8,421.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgLAJQgFgEgBgFQABgEAFgEQAFgEAGgBQAHABAFAEQAFAEAAAEQAAAFgFAEQgFAEgHABQgGgBgFgEg");
	this.shape_41.setTransform(1337.6,618.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_42.setTransform(2384.8,653.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANAAQAPAAAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_43.setTransform(2235.8,726.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANAAQAPAAAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_44.setTransform(2335.5,490.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_45.setTransform(2154.8,360.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_46.setTransform(1786.5,715.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_47.setTransform(1944.8,581);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPAAQgNAAgLgJg");
	this.shape_48.setTransform(1571.8,342.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_49.setTransform(1812.3,402.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANAAQAPAAAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_50.setTransform(1343,506.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgIANAAQAPAAAKAIQAKAIAAAKQAAALgKAIQgKAJgPAAQgNAAgLgJg");
	this.shape_51.setTransform(1483.8,685.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgIANAAQAPAAAKAIQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_52.setTransform(1306.6,762.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPAAAKAIQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_53.setTransform(1243.3,669.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgIQALgIANAAQAPAAAKAIQAKAIAAAKQAAALgKAJQgKAIgPAAQgNAAgLgIg");
	this.shape_54.setTransform(1540,526.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_55.setTransform(1236.1,348.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgLAJQgFgDgBgGQABgEAFgFQAFgDAGAAQAHAAAFADQAFAFAAAEQAAAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape_56.setTransform(196.7,51.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgLAJQgGgDAAgGQAAgEAGgFQAFgDAGAAQAHAAAFADQAGAFgBAEQABAGgGADQgFAFgHAAQgGAAgFgFg");
	this.shape_57.setTransform(505.2,182.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgLAJQgGgDABgGQgBgEAGgFQAFgDAGAAQAHAAAFADQAGAFAAAEQAAAGgGADQgFAFgHAAQgGAAgFgFg");
	this.shape_58.setTransform(1169.3,19);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgLAJQgGgEAAgFQAAgEAGgEQAFgFAGAAQAHAAAFAFQAGAEgBAEQABAFgGAEQgFAEgHAAQgGAAgFgEg");
	this.shape_59.setTransform(863,206.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgLAKQgGgFABgFQgBgEAGgFQAFgEAGAAQAHAAAFAEQAFAFABAEQgBAFgFAFQgFADgHAAQgGAAgFgDg");
	this.shape_60.setTransform(1159.8,462.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgLAKQgFgFAAgFQAAgEAFgFQAFgDAGAAQAHAAAFADQAFAFABAEQgBAFgFAFQgFADgHAAQgGAAgFgDg");
	this.shape_61.setTransform(868.9,367.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgLAJQgFgDgBgGQABgEAFgFQAFgDAGAAQAHAAAFADQAFAFAAAEQAAAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape_62.setTransform(1055.4,252.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgLAKQgFgFAAgFQAAgEAFgFQAFgEAGAAQAHAAAFAEQAFAFABAEQgBAFgFAFQgFADgHAAQgGAAgFgDg");
	this.shape_63.setTransform(847.7,29.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgLAKQgFgFAAgFQAAgEAFgFQAFgDAGAAQAHAAAFADQAFAFABAEQgBAFgFAFQgFADgHAAQgGAAgFgDg");
	this.shape_64.setTransform(546.2,262.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgLAJQgFgEAAgFQAAgEAFgEQAFgEAGgBQAHABAFAEQAFAEAAAEQAAAFgFAEQgFAEgHABQgGgBgFgEg");
	this.shape_65.setTransform(685.8,154.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgLAKQgGgFABgFQgBgEAGgEQAFgFAGAAQAHAAAFAFQAGAEAAAEQAAAFgGAFQgFADgHAAQgGAAgFgDg");
	this.shape_66.setTransform(336.2,398.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgLAJQgFgEgBgFQABgEAFgEQAFgEAGgBQAHABAFAEQAFAEAAAEQAAAFgFAEQgFAEgHABQgGgBgFgEg");
	this.shape_67.setTransform(1.8,154.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgLAJQgGgDABgGQgBgEAGgFQAFgDAGAAQAHAAAFADQAFAFABAEQgBAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape_68.setTransform(385.5,81.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgLAJQgGgDABgGQgBgEAGgFQAFgDAGAAQAHAAAFADQAGAFAAAEQAAAGgGADQgFAFgHAAQgGAAgFgFg");
	this.shape_69.setTransform(120.3,278.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_70.setTransform(1167.5,313.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPAAQgNAAgLgJg");
	this.shape_71.setTransform(1018.5,386.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_72.setTransform(1118.2,150.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANAAQAPAAAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_73.setTransform(937.5,20.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANAAQAPAAAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_74.setTransform(569.2,375.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgJQALgIANAAQAPAAAKAIQAKAJAAAKQAAALgKAIQgKAIgPAAQgNAAgLgIg");
	this.shape_75.setTransform(727.5,241);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANAAQAPAAAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_76.setTransform(354.5,2.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_77.setTransform(595,62.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_78.setTransform(125.7,166.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_79.setTransform(266.5,345.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_80.setTransform(89.3,422.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_81.setTransform(26,329.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_82.setTransform(322.7,186.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_83.setTransform(18.8,8.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgLAJQgGgDABgGQgBgEAGgFQAFgDAGAAQAHAAAFADQAGAFAAAEQAAAGgGADQgFAFgHAAQgGAAgFgFg");
	this.shape_84.setTransform(1414,51.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgLAJQgFgDAAgGQAAgEAFgFQAFgDAGAAQAHAAAFADQAFAFABAEQgBAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape_85.setTransform(1722.5,182.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgLAJQgGgDAAgGQAAgEAGgFQAFgDAGAAQAHAAAFADQAGAFgBAEQABAGgGADQgFAFgHAAQgGAAgFgFg");
	this.shape_86.setTransform(2386.6,19);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgLAJQgFgEgBgFQABgEAFgEQAFgFAGAAQAHAAAFAFQAFAEABAEQgBAFgFAEQgFAEgHAAQgGAAgFgEg");
	this.shape_87.setTransform(2080.3,206.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgLAKQgFgFgBgFQABgEAFgFQAFgEAGAAQAHAAAFAEQAGAFgBAEQAAAFgFAFQgFADgHAAQgGAAgFgDg");
	this.shape_88.setTransform(2377.1,462.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgLAKQgGgFAAgFQAAgEAGgFQAFgDAGAAQAHAAAFADQAFAFAAAEQAAAFgFAFQgFADgHAAQgGAAgFgDg");
	this.shape_89.setTransform(2086.2,367.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgLAJQgGgDABgGQgBgEAGgFQAFgDAGAAQAHAAAFADQAGAFAAAEQAAAGgGADQgFAFgHAAQgGAAgFgFg");
	this.shape_90.setTransform(2272.7,252.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgLAKQgGgFAAgFQAAgEAGgFQAFgEAGAAQAHAAAFAEQAGAFgBAEQABAFgGAFQgFADgHAAQgGAAgFgDg");
	this.shape_91.setTransform(2065,29.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgLAKQgGgFAAgFQAAgEAGgFQAFgDAGAAQAHAAAFADQAFAFAAAEQAAAFgFAFQgFADgHAAQgGAAgFgDg");
	this.shape_92.setTransform(1763.5,262.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgLAJQgGgEABgFQgBgEAGgEQAFgEAGgBQAHABAFAEQAGAEAAAEQAAAFgGAEQgFAEgHABQgGgBgFgEg");
	this.shape_93.setTransform(1903.1,154.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgLAKQgFgFgBgFQABgEAFgEQAFgFAGAAQAHAAAFAFQAFAEAAAEQAAAFgFAFQgFADgHAAQgGAAgFgDg");
	this.shape_94.setTransform(1553.5,398.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgLAJQgGgEABgFQgBgEAGgEQAFgEAGgBQAHABAFAEQAGAEAAAEQAAAFgGAEQgFAEgHABQgGgBgFgEg");
	this.shape_95.setTransform(1219.1,154.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgLAJQgGgDAAgGQAAgEAGgFQAFgDAGAAQAHAAAFADQAGAFgBAEQABAGgGADQgFAFgHAAQgGAAgFgFg");
	this.shape_96.setTransform(1602.8,81.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgLAJQgFgDgBgGQABgEAFgFQAFgDAGAAQAHAAAFADQAFAFAAAEQAAAGgFADQgFAFgHAAQgGAAgFgFg");
	this.shape_97.setTransform(1337.6,278.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_98.setTransform(2384.8,313.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPAAQgNAAgLgJg");
	this.shape_99.setTransform(2235.8,386.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_100.setTransform(2335.5,150.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANAAQAPAAAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_101.setTransform(2154.8,20.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANAAQAPAAAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_102.setTransform(1786.5,375.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgJQALgIANAAQAPAAAKAIQAKAJAAAKQAAALgKAIQgKAIgPAAQgNAAgLgIg");
	this.shape_103.setTransform(1944.8,241);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANAAQAPAAAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_104.setTransform(1571.8,2.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_105.setTransform(1812.3,62.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_106.setTransform(1343,166.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_107.setTransform(1483.8,345.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_108.setTransform(1306.6,422.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPABQgNgBgLgHg");
	this.shape_109.setTransform(1243.3,329.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgYATQgKgIAAgLQAAgKAKgIQALgJANABQAPgBAKAJQAKAIAAAKQAAALgKAIQgKAJgPgBQgNABgLgJg");
	this.shape_110.setTransform(1540,186.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgYAUQgKgJAAgLQAAgKAKgJQALgHANgBQAPABAKAHQAKAJAAAKQAAALgKAJQgKAHgPAAQgNAAgLgHg");
	this.shape_111.setTransform(1236.1,8.4);

	this.addChild(this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2388.4,803.6);


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


(lib.main_shadow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shadowbase();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,227,44);


(lib.image_black = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("to be continued...", "80px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 82;
	this.text.setTransform(353.3,334.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhjvA8sMAAAh5XMDHfAAAMAAAB5Xg");
	this.shape.setTransform(638.5,388.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1276.9,777);


(lib.efx_splash = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFBF").s().p("A0hXTMAAAgoRIMNqZIhrIWIHDkoIj6H8ITxnuIrqNYIH+hiIlJEXIQbh7Is6JuIM6BKIq+DJIHpE0IoFgQIGpEeIpGCdILmHpIvtgEIC9BzIs1hZIB+DCg");
	this.shape.setTransform(131.4,276.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("EgdUAhSMAAAg5iIRbu3IiZL7IKGmmIlmLWIcQrCIwpTHILXiNInVGQIXeixIydN6ISdBqIvrEfIK6G4IrkgYIJhGaItADgIQkK6I2bgGIEOClIyXh/IC0EVg");
	this.shape_1.setTransform(187.7,250.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,375.5,500.8);


(lib.ballShadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkqA0Qh8gWAAgeQAAgdB8gWQB8gVCuAAQCvAAB7AVQB8AWAAAdQAAAeh8AWQh7AVivAAQiuAAh8gVg");
	this.shape.setTransform(42.3,7.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84.6,14.8);


(lib.ball = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676F5C").s().p("AAAAUIAAgnQABARgBAUIAAACIAAAAg");
	this.shape.setTransform(57.7,56.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEC09E").s().p("AgqBgQgygXgvgYIAAgCIAAgIQAMgnAHgpIAAgDQAQADAWgHQA6gUAtgcQApANAsALQASAFAMgGIACAhIAAACIABAoIABAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQhABKh1ASIAAgBg");
	this.shape_1.setTransform(43.7,58.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C7C7C7").s().p("AASAFQgSgFgTgCIAAgCIAnAGIAAABIAAACIgCAAg");
	this.shape_2.setTransform(36.4,30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#92A182").s().p("AAAAAQgggCgXACIAAAAIgEgGQA8ADA5AEIACAAIAAACIgCACIAAACIg6gHg");
	this.shape_3.setTransform(16.5,41.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D7D7C").s().p("AACAPIgDgeIABAAIAAgCIAAAAQADAUgBAOIAAgCg");
	this.shape_4.setTransform(1.5,40.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#989897").s().p("AAAAWIAAgCQgBgUABgVQABATAAAUIAAACIAAACg");
	this.shape_5.setTransform(1.3,36.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#727272").s().p("AAAAcIAAg3IAAAAIAAA1IAAACg");
	this.shape_6.setTransform(0.1,34.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1A19").s().p("AASBIQg3gMg4gNIAAgCIAAgmQADgHAAgLIAAgCQA3gtBUgNIAAABQAaAWATAeIAAACQgnAlgfAwIAAABIgCABIgCABIgCAAg");
	this.shape_7.setTransform(23.7,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#010101").s().p("AgWB1Qg2gxgng/IAAgCIABgCIABgBIAAgBQAghAAqg1IACAAQAVABARAFIABAAQAWADASAGIACAAQAZAHAXAIIACABQADACAEABIACABIAAABQAKBHADBJIgBABQg8AlhMATIgBgCg");
	this.shape_8.setTransform(34,41.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1D1CF").s().p("AAYAIIgCAAQgWgIgYgGIAAgCQAcAFAVALg");
	this.shape_9.setTransform(41,32);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9DA493").s().p("AAzBIQgFgBgCgCIABAAQgWgNgcgFIAAgBIgpgIIAAACIgCAAQgTgFgVgBIAAgBIgrhqIACgCIABAAQAXA0AVAzIABABQBKAHA4AXIACABQApgnAogmIAAgBQADABgBAFIAAACIAAABIhPBMIAAACIgCgBg");
	this.shape_10.setTransform(39.1,25.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CDDCB9").s().p("Ai4DXQhUguguhVQAKAFAIgQIAKgTQAQgdAKgjQAXgDAhAEIA7AHQAoA9A2AxIAAACQBMgTA8glIABgBQgDhJgJhHIAAgBIAAgCIBPhOIAAgBQA5AJA1ALIACABQAJgMgBgYIABAAQABAVABgYQABgRAIgHQAWAsAGA7QAIBCgRAxIgBAAIgjgQIgBABQgVA5grAmIAAABQgMAFgSgEQgsgLgpgOQgvAdg4ATQgWAIgQgDIAAACQgHArgMAnIAAAIIAAACIgCAAQg4AHg0ACIgCgBg");
	this.shape_11.setTransform(37,42.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1A1A1A").s().p("ABBBVQg1gLg3gJIAAgCQABgFgDgBIAAgBIgghyQAhgMAegPIACAAQA3AvAiBEIABACQAAAJgCAHIAAACIgBAAQABAYgJAMIgCgBg");
	this.shape_12.setTransform(56.8,18.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111211").s().p("AAkFdIgfAAIgBAAIgZAAIgCAAQgpgGglgIIAAgCQgGAAgDgCIgCAAQg6gWgwggIAAgCIgZgUIgBgCIgBAAIAAgBIgXgXIgBgBQhEhJgLiBIAAgCIAAg2IAAgCIAAgDQASiQBWhMQBAg4BegYQAhgIAjgFIAvAAIACAAQCNAVBPBSQBJBKAVB/QACALAAAQIABAAIAAACQABA8gNAvIAAAEIAAACIgCAAQAAAMgGAGIAAACIAAABIAAACIgDAGIAAABIAAACIgBABQgFARgJAMIAAABIAAACIAAABIgDAFIAAABIAAACIgBAAQgBAHgGACIAAABIAAACIgBAAIAAADIAAABIgBABQgNAVgRASIAAABIAAACQgaAfgiAYIgBAAQgCAEgGABIAAACIgBAAQgTANgXAKIgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAIAAACIgCAAQgKACgIAFIgCAAQgFADgIABIAAACIgBAAQgbAHgdAFIgCAAQgHACgLAAIAAACIgCAAgAg2EcQAvAZAwAXIABABQB3gSA/hKQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgCQABgWgDgRIAAgDIgCggIAAgBQAqgmAWg7IABgBIAiASIACAAQAQgzgHhAQgHg7gWgsQgJgYgNgVQhAhhh4goQhBgWhMAMQhpAOhCA2QhZBJgdCEQAPgBATgIIACAAQARBFAjA2IAAABIADAGIABABQgKAlgRAdIgKATQgIAQgKgFQAuBVBVAuIABABQA0gCA4gHIACAAgAlRAjIAAACIAFAgIAAACQABgPgDgVIgBAAIAAgCQAAgXgEgQQgBAVADAUg");
	this.shape_13.setTransform(35.1,34.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F5F8F0").s().p("AhvDKQg5gHg+gCIAAgCQgig2gShHIgCABQgSAHgQABQAdiCBZhJQBDg2BogOQBNgMBAAWQB5AoBABiQANAUAJAYQgIAFgBARQgBAZgBgWIAAgCQACgHAAgJIgBgCQgihEg5gvIgCAAQgeAPghAMIAgByIAAABIAAACQgoAogpAmIgCgBQg6gXhIgHIgBgBQgVg1gXgyIABgCQAegwAognIgBgBQgSgegagXIAAgBQhWANg3AuIAAABQgBAMgDAJIAAAlIAAACQA4AOA6AMIACAAIArBqIAAACIgBAAQgrA1ggBAIAAACIgCAAg");
	this.shape_14.setTransform(33.6,21.5);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,69.8);


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
	this.shape.graphics.f("rgba(179,179,179,0.502)").s().p("A8TPNQAAmMCOlqQCJlbD8kOQD6kNFGiUQFRiZFvAAQFxAAFRCZQFECUD8ENQD6EOCKFbQCPFqAAGMg");
	this.shape.setTransform(183.8,99.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.5,2.5,362.6,194.7);


(lib.lab_floor = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4).p("EBu+ACOIAgAZEBx/ACKIjBAEMg8nABLMAVdAmcEBRggUdILGIkIMfAAEA8jgklIU9QIEAcBgklII/QFIE0InMAyyAAAISYOHAAb0jIAAIqMApZAAAEAlAgUgMgklgADI6OgCIj4IsInlQ+MgQZAkwAAbr5IAAQPMAx8gA9IojvSEAlAgUgMAsgAADEAAbApxMAAAglbMglrAAvEg8SgUoIoGIvIwnR5MAvvgA7A5z0lMgifgADMgtrgAEEhEYgL5MAmtAAAIeGAAEBsbgUaI67gDEgrugmhIwkR5EgRzgmhIoAR8EAAbgknIAAQEEhx1gQcIH4kQInLgBEhtLgL5MAozAAAEhDIgpsMgm1AVAEhsCAe4IXD44I5jAf");
	this.shape.setTransform(649.8,234.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#77E8DB").s().p("EhkYAnOMAAAhObMDIxAAAMAAABObg");
	this.shape_1.setTransform(642.5,251);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.8,-34.7,1462.2,538.8);


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


(lib.flame = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFCC00","rgba(255,168,0,0.451)"],[0.243,1],24,-0.5,0,24,-0.5,63).s().p("ABxFIQjVgMkNh0QkNh1AOhwQANhyEDhcQEDhdDRAAQDTAACVBiQCWBiAACJQAAAOgCANIAAgCQAAhYhhg/QhhhAiJAAQiJAAhhBAQhfA/AABYQAABaBfBAQBhBACJAAQCJAABhhAQAugeAYgkQglBEhUA3QiFBYi6AAIgsgBg");
	this.shape.setTransform(62.6,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEFAF").s().p("AjpCZQhhhAAAhZQAAhZBhg/QBhhACIAAQCJAABhBAQBhA/AABZIAAABQgFAtgWApQgYAkguAeQhhBAiJAAQiIAAhhhAg");
	this.shape_1.setTransform(92,36);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,125.3,65.9);


(lib.bluePlanet = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D4B82").s().p("AgzAnQASgGAMgJQAUgOARgOIARgQIAJgIQAFgEgEgHIAAAAQAGAKACAMIAAAAQgaAYgbAVIAAABIgBAAQgWAIgaADIAAgBg");
	this.shape.setTransform(47.9,68.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#486796").s().p("AgLAVIgPgHQAWgPARgTIABgBIABABQAGADAFAEIAAABQgSARgSARIgBgBg");
	this.shape_1.setTransform(45.2,61.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#195A8E").s().p("AgFgBIAAgBQAHgJAEAMQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAABQgEACgCAAQgDAAgCgIg");
	this.shape_2.setTransform(57,57.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C5684").s().p("AgHARQgHgEgFgGIAagVIADgDQAEAHAGAFIAAABIgBAAQgMAKgNALIgBAAg");
	this.shape_3.setTransform(51.5,60.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#21487A").s().p("Ag1A6QAegVAXgaIABAAQgBgLgFgJIgBAAIgBAAIgPgYIABAAIAAgBQAPgLAKgNIABAAQAIAHALADIAAABIAJAAIABAAQAJAHAKAGIABAAIAAABQgXAagdATQAEAMgCAKIABABIAAAAIAAABQgbANgfAKIAAgBg");
	this.shape_4.setTransform(53,65.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D447B").s().p("AAYAeIABAAQABgCgKgCQgKgBgHgDQgHgCgGABIgBgBIAAgCQgGgBgDgIIAAgBQgFgDABgDIAAgBIgIgGIAAAAQAAgEgDgFIAAAAIAAgKIAAgBQAJgIAPAEIAFAAQALABAKAHQAEADAEgBQAEALAIADIABABQABAIAGAKIABABQABAKgCAFIAAABIgFAAIgKgBgAgCgFIAAABQACAMAJgGQAAgBAAAAQAAAAAAgBQABAAgBAAQAAAAAAAAQgCgJgFAAQgCAAgCAEg");
	this.shape_5.setTransform(56.7,57.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D5785").s().p("AgWAAQAHgFAIAAIAAAAIgFgCQACABADgBIAeAHIAAAAIgBAAQgCAAABAAQABAAABAAQAAAAAAAAQABAAgBAAQAAAAAAAAQgHAAgCAGIAAABIAAABIAAAAQgPgGgVgCg");
	this.shape_6.setTransform(57,53.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#34618D").s().p("AgcAIIAAgBIAAgBIAMgMIAAgBQANgCALAAIABAAQAHAIAMABIAAAAQgDABgCgBIAFACIAAABQgIAAgHAGIgBAAIgPABQgNAAgMgCg");
	this.shape_7.setTransform(53.3,52.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D517F").s().p("AA6ApQgKgLgTgCQgbgCgLgRQgNgPgKgUQgXgEgNgNIgBAAQATgEAWAEIAmAGQAfAFANAZQAJAQAGAWQACAHgDAHIgCABIgBAAQgDAAgEgFgAA4AZIABgBQACgFgCgKIAAgBQgGgIgCgKIgBgBQgIgDgEgLQgDABgEgDQgKgHgOgBIgEAAQgNgEgKAIIAAABIAAAKIABAAQADAFgBAEIABAAIAHAIIAAABQgBACAFACIABABQADAIADABIABACIAAABQAHgBAHACQAJADAKABQAKACgCACIAAAAQAIACAGgBg");
	this.shape_8.setTransform(54.9,58.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0284A9").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_9.setTransform(64.7,60.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#165A90").s().p("AA8A2IgFgKIAAAAIgGgEIgBAAQgFgCgHAAIAAABIgBAAQgLgFgIgIIgBAAIgJAAIgBAAQgJgEgIgHIAAAAQgGgFgEgHIAAgBQgEgNgIgMIgEAAIgXgLIAAAAQgNgEgGgKQAOgIAXAEIAAAAQAUADAWgCIABAAQATACARAHIAAgBQASAGAFATIABAAIAAABQAOARAEAbIAAABIAEAHIgBABQgJAKgLAIgAhEguIABABQAOANAWADQAKAVANAOQAMARAaADQAUACAJALQAFAGADgCIACAAQADgHgCgHQgGgWgJgQQgNgagfgEIgmgHQgLgBgKAAQgKAAgKABg");
	this.shape_10.setTransform(54.8,58.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#174274").s().p("Ag7BJIgBgBQACgKgEgMQAdgVAXgaIAAgBIAAgBQAIAAADACIABAAIAFAEIABAAIAEAKIABAAQALgIAJgJIABAAIgEgIIAAAAQgDgdgPgRIAAgBIAAgBIgCgHQAEAEABgFQACgFADgDQAIAUAQALIABAAIAGAWIAAABIAAAAIALgMIABAAQgJAPgMANQgqAsg7Afg");
	this.shape_11.setTransform(59.6,62.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#224D7D").s().p("AAHARQgFgSgQgFIAAgBIAAgBQACgGAHAAQAAAAAAAAQABAAgBAAQAAAAAAAAQgBgBgBAAQgBgBACABIABAAQAHACAHAEIABABIAFAIIAAAAQgCACgCAGQgCAFgEgEIADAHIAAABg");
	this.shape_12.setTransform(60,54.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#567FA8").s().p("AALAhQgZgegUgkQAaAOAcALQAJADADgDIABgEQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAABQABAHgCADIAAABQgLAEgJAIIAAABIgCAHIAAAPIAAABIAAgBg");
	this.shape_13.setTransform(8.6,57.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F4779").s().p("AgbANQgFgBgCgFIAIACIAAAAQAJgCAJAAIAAgBQgBgDAJgCIAIgBQAFAAAAgFQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABABQAEADgBgEQALACADgIQAAgBABAAQAAAAAAAAQAAAAAAABQAAABAAACIAAABQgXAVgpADQgEgCAGAAg");
	this.shape_14.setTransform(42.2,71.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#214B7B").s().p("AADADIgBAAIgRgBIAAgBIgBgBQAEAAAGAAIABAAQgBAAAHgCQAMgBADADQgLAAAMAAIAAAAIgPABIACABQABAAAAAAQABABAAAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_15.setTransform(33.7,72.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#355C8B").s().p("AhTBWIAAgBQAJgCAIADIABABIATABIABAAQAXACAagDIAAAAQArgDAXgYIAAAAQANgTgMgVQgEgIgEACIgBgDQgCgJgBAHIgBgBQgEgCgIAFQg3AihRAHQgXACgSgCIAAgBQgHgLABgRQAPgdAmgIQAegGAiACQAgACAaAJIAOAGIABABQAUgRATgTIAAAAQgFgFgHgDIgBAAIAAgBQgLgGgNgDIAAgBQAagOASgWIAAAAIAWAKIAEABQAIALAFAQIAAABIgDACIgcAYQAFAFAHAEIABABIAAAAIgBABIAPAVIABABQAEAGgEAEIgJAJIgSAQQgSAPgUAPQgNAJgRAGIAAABIgBAAQgdAEgaAAQgiAAghgGg");
	this.shape_16.setTransform(38.6,64.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#27517F").s().p("AgRAoQAEAAgEgCIgBAAIAPgBIAAgBQgMgCALABQgDgEgNACQgJABACADIgBAAQgHgBgDABIAAABIABABIgBAAQgJgEgIACIAAABIgBAAQgQgDgNgFIABAAQgHgJgIgJIgBgBQgCgDgBgEQARACAYgCQBOgFA6giQAHgEAFABIABABQABgGACAIIABADQAEgCAEAIQAMAVgNARQAAgCAAgBQAAgBAAAAQgBgBAAABQAAAAAAABQgDAHgLgBQABAEgEgDQgBgBgBAAQgBAAAAAAQgBAAAAAAQAAABAAABQgBAEgFACIgJACQgKACACADIAAAAQgJAAgJADIAAgBIgIgBQACAFAEAAQgGABAFACIAAAAIgeACIgTgBg");
	this.shape_17.setTransform(35.9,68.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#476795").s().p("AAKAJIgBgBIgRgGIAAAAIgDgDIAAgCQAKADgBgHIAAAAQAHAHAHAJg");
	this.shape_18.setTransform(26.1,71);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6B90C8").s().p("AAJAaIgJgFIgBAAQgIgNABgXIAGgKIABAAQgEAFADAHQABABAAAAQABABAAAAQAAAAAAAAQAAAAABgBQAEgFAAADIAAABQgFANAHAQIADALIgBgBg");
	this.shape_19.setTransform(23.1,68.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6288C2").s().p("AARAkIgKgDIgDgLQgEgSACgLIAAgBQAAgDgCAFQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgDgHADgFIgBAAIgGAKQgBAXAJANIAAAAIgBAAIgGgCIAAAAQgIgNABgUQAFgSAMgJIABAAQAAAIgBAKIAAAAQADAEADgHQADgHAIAAQgHAKgCARQgBANAFALIADAHIADAFIAAAAIgBAAg");
	this.shape_20.setTransform(23.3,67.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#366490").s().p("AAaA8QgxgdgmgoQABgGAAgIIABAAQAHgEAKgDIABAAQgDgTAKgKIABAAQAmAbA6AKIAAAAIgBAAQgcAVgMAjQgBAQAFAJIABABIgBAAg");
	this.shape_21.setTransform(16.8,62.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#698FC5").s().p("AgjAMIAAgEQAZgUAoAAIAGABQgCACgJAAQgVADgOAGIgYANIAAAAIgBgBg");
	this.shape_22.setTransform(28,61.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5275A2").s().p("AhOBBIAAABIgDgGQgFgLABgOQACgTAHgJQgIAAgDAGQgDAIgFgEIAAAAQADgKAAgHIgBAAQgOAHgFATQgBAWAIAMIAAABIgBAAIgagOIAAgBQgFgJABgQQAMgjAbgUIABgBQA3gkBaAGQAlACAbAJQANAEALAGIAAAAIAAABQgUATgVARQgagJgigBQgigCgcAGQgmAIgPAcQgBASAHALIAAAAQABAFADADIAAAAIAAABQAAAGgEAAIgFgCgAhUgMIAAAEQAAABAAAAQABABAAAAQAAAAAAAAQAAAAAAAAIAYgNQAQgJAVgCQAJgBACgCIgGgBQgqAAgZAWg");
	this.shape_23.setTransform(32.8,64);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#467BA3").s().p("AggARQgWgBgNgDIAAgBIAAgBIAPgIIAAgBQAjgCAYgIQAOgGAPAEQAFACACgGQACgCAGABIAAAAQAHAFAJADIABAAQgHACgFADQgfATgwAAIgJAAg");
	this.shape_24.setTransform(29.7,50.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8CA9CD").s().p("AgWANQAFgIAHgFIAAAAQAKgNAVgDIABAAQgPAJgMAKIAAABQgGAEgDAFQgEAEgBAAQgCAAgBgEg");
	this.shape_25.setTransform(8.7,40.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A2C2E7").s().p("AgCAJIgDgBIgBAAQAGgIgHgDIgBAAQAFgGAFgCIAAABQAAAGAHAAIgBABQAAAFgDAGIAAABQgEADgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_26.setTransform(7.2,37.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#82ACD5").s().p("AgJAZQgEgNAIgKIgFAEQgHAFgEgEIALgOIABgBQAIgKALgGIABgBQgCAKAKADIABABQAAAFACAGIAAAAQgIAIgLAHIAAABIgBAAQgEAIgGACIgBgBgAgBgIIAAABQAGAEgFAGIAAABIACABQADAFAHgFIAAgCQADgDAAgIIAAAAQgHAAABgHIAAAAQgIACgCAFg");
	this.shape_27.setTransform(6.6,37.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#245687").s().p("AgRAPIAagNIAAAAQgJAKgRAEIAAgBgAAOgOIAAgBQAAAAABABQAAAAABAAQAAAAAAAAQAAAAABABQACAEgCAEIgDAEQADgGgDgHg");
	this.shape_28.setTransform(22.1,31.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5072AB").s().p("AgfABQAGAFAKgEIgBAAIAAgBIAMgBIABAAQAPgFASgGQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIgBABIgGAHIgBABQgFACADgFIAAAAQgSAFgOAIIgBABIgIABQgLAAgBgLg");
	this.shape_29.setTransform(14,34.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#255788").s().p("AgIAUIAAAAQgGgDgFgEIAAgBQgDgLABgKIAAAAIAAgBQADgEACgGIAAAAIAAABQAAADgCACIABADIAAABIAAABQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgBAHACAHIAAABQAOANAYgEIABAAIAAABIgTABIgLgBg");
	this.shape_30.setTransform(12.2,33.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#95A6CC").s().p("AgGAOIAAgBIgCgKIAFgHIAAAAIAIgLIAAAAIAAABQgEAHgDAHQADABgBAKIABABQACACAEABIACgBQgFACgEAAQgCAAgEgCg");
	this.shape_31.setTransform(11.4,32.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#270F65").s().p("AgHAHQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAFgFIAAAAQAFgGAIACIABAAQAAAOgLAAIgGgBg");
	this.shape_32.setTransform(15,31.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#345F92").s().p("AgOAUIAAgBIAAgEQAJgXATgMIABAAIAAABQgPAKgHAOIAAABIAAABIgBAAQgCAGgDAEIAAABIAAAAIAAABIgBACIAAgBg");
	this.shape_33.setTransform(11.4,31);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#281E6C").s().p("AgIAJQgEgBABgHIAAgBQAIgLAOABIAAABQADAMgOAHIgCABQgDAAgDgCgAgFgDIAAAAIgFAFQAAABAAAAQAAABABABQAAAAAAABQABAAAAAAQARAEAAgRIgBAAIgDgBQgFAAgFAFg");
	this.shape_34.setTransform(15.1,31.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2C2F74").s().p("AgMANIgBAAIgCgHIAAgBIADgFIAAAAQALgLAMgBIAAABQAFAAgBAHIAAABQgFAQgSAAIgEAAgAgLABIAAABQgBAHAEABQAEADAEgCQAOgHgDgMIAAgBIgCAAQgMAAgIAKg");
	this.shape_35.setTransform(15.1,31.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#225586").s().p("Ag/AYIgBgEQACgBAAgEIAAgBIAAgBIAAgBQAJgOAQgKIAAgBIASgIIAAgBQAygHAiAaIAAAAIgBAAQgVgNgdgFIAAABIgBAAQgLgDgKACIAAAAQgqAJgNAkIAAAAg");
	this.shape_36.setTransform(16.9,30.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#296294").s().p("AgLADQgFgBgFABQAHgDAKgDIABAAQAKgCALADIABAAQAFAAgEABIgdAEIAAABIABAAIAAABIgEAAQABAAAAgBQABAAAAAAQAAgBAAAAQAAAAgBAAg");
	this.shape_37.setTransform(16.3,28.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#124C7B").s().p("AhAAdIAAgBQgCgGABgKQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgBQANgkAqgJIAAAAIgBABQgKACgHAFQAEgBAGABQAAAAAAAAQABABAAAAQAAAAgBAAQAAABgBAAIgBABQgaAIgNATIAAABIAAABIAAABIgFAIIACAKIAAABQACAPASgFIABgBQAQgIASgHIAAAAQgDAHAFgEIABgBIAEgHIABgBQARgIAUgFQAGgCADgHIgMgCIAAgBQABgEgFAAIgCAAQgDgEgHADIgBAAQgKgDgHgGIgBAAIgPAAIgBAAIAAgBIAdgGQAEgBgFAAIAAgBQAdAFAVANIABAAIABAAIAAABQADAHgDAFIgEAFIgBABIAAAAIgcAKIAAABIAAABQgSAGgMALIAAABIAAABIgNAGIgBAAIgLACIgBAAIgMABQgSAAgKgKg");
	this.shape_38.setTransform(17,32);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#243F7B").s().p("AgvAWIgBgBQABgKgFgDQAFgGAEgGIAAgBQAPgRAdgCIABAAQAGAFAJADIAAABQAGABAEgCIABAAQACAEAKgBIABAAIAAAAIAMADQgDAGgGADQgTAEgSAJQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgQAFgRAIIgBAAIgMABIAAABQgEAAgCgDgAgZgBIAAABIgDAEIAAABIACAHIABAAQAXACAEgSIAAgBQABgGgDgBIAAgBQgPABgKALg");
	this.shape_39.setTransform(16.5,31.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5071AA").s().p("AgvAPIAAgBQAOgTAZgJIABAAIAEAAIAAgBIAPAAIABAAQAIAGAJADIABAAQAIgEACAFIACAAQAFgBgBAFIgBAAQgKABgCgEIgBAAQgEACgGgBIAAgBQgIgDgHgFIgBAAQgcACgQAPIAAAAIgKALIAAgBg");
	this.shape_40.setTransform(15.8,30.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3E669A").s().p("AgnAoQgHgIAAgLQACgDAAgFIAAgBQASgzBAgBQAFAAAEADIgBAAQgVgEgTAGIAAABIAAAAIgQAJIgBAAQgVAMgJAXIAAAEIAAABIgBAAQgBARAEAIIAAABIAAgBg");
	this.shape_41.setTransform(14.1,31.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#376195").s().p("AhFAlIAAgBQgFgIABgRIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBABAAIAAgBQgBALADAMIAAABQAFAEAGACIAAABQAOABASgCIAAAAIALgCIABAAIAAAAIgIAFIgBAAQgKACgIAAQgRAAgMgHgAACAeIgCAAIAAgBQAMgMASgGIAAAAQARgEALgIIABAAIAEgFIADgEQADgDgDgFQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBAAIAAgBQgigZgyAHIAAgBQASgGATAEIABAAIABAAQAfAHAXAPIAAAAIADAGQAAAHgFADIhCAgIAAABIgBAAg");
	this.shape_42.setTransform(17.1,32);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4B6EA5").s().p("AhJAoIAAgBQgHgJABgQQAIgiAegQQATgLAeACQATACAPAGIAMAEQAOAHAMAKQABARgRAFQgfAJgXAOIgBAAIgFABIAAgBIBBggQAFgCABgIIgDgFIAAgBQgXgPgfgHIgBAAQgDgCgGAAQhAABgSAyIAAABQABAFgCADQAAAMAGAIIABAAQATALAcgGIABAAIAAABIgGACIgBAAIgOABQgRAAgPgGg");
	this.shape_43.setTransform(17.1,31.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5475AF").s().p("AhEA4QgGgFgIgDIAAgBQgBgIgIABIgBgBQgDgGABgNQADgFAAgJIAAgBQAFgOALgLIABgBQAeghA4gCIABAAIAJAGIABABIAHAAIABAAQAFAGAIADIABABQARgBAMAFIABAAIAAABQAFACgHADQANAFAJAKIABABQgDAKgKADIAAAAIgBAAQgdALgbANIAAABIgBABQgKADgLABQAXgPAfgJQARgFgBgQQgMgKgPgHIgLgFQgPgGgTgBQgegDgTALQgeAQgIAiQgBAQAGAKIABABQAVAIAZgDIABAAIgBAAQgHADgFAHIgBAAIgVABIgBgBg");
	this.shape_44.setTransform(17.7,31.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ABC5E7").s().p("AgsAdQANgUASgNQAHgFAHgCQAPgPAdgCIAAAAIgZAOQgOAGgGAIIAAABQAIABgDACIAAABIgZAPIAAABQgOADgKAFg");
	this.shape_45.setTransform(10.8,21.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A4C3E7").s().p("AhABMIACgBQgDgGgMACIAAgBQATgDAKgKIgBAAQgFgDAEgCIAAgBQAFgEAHgCIABgBQAQgCAUABIAAAAIgQAKIAAAAQgGAOgOAGQgJADgKAAIgIAAgAAQgyIAHgEQAAgBABAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQgMABgCgHIACgBIAAgBQADgCADgBIABgBIAAAAQAagLAeAGIAAAAIgLAJIAAABQAKAAAFAEQgaAEgYAGIgHABQgEAAgBgCg");
	this.shape_46.setTransform(20.7,30.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#88AED7").s().p("AhEBfIAEgDIAAgBQAFgGAIgDIAAgBIAGgCIAAgBIAIgEIAAgBIAPgGIAAgBIACAAIABAAIAFgBIABAAQAMAAAHgDIABgBIABAAQAKAAADgDIAAABQAIABAEAEQgFAGgHAEQgHADgGAFQgMANgSAJIAAABIgUAFIgIABQgQAAgCgQgAgzBlIgCABQAOACANgFQAOgGAGgOIABAAIANgKIAAAAQgRgBgRACIAAABQgHACgFAEIAAABQgFACAGADIAAAAQgKAKgSADIAAABIAFAAQAHAAACAEgAAQgOQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBABAAIACgBQgJgCgCgHQAFgGAHgEIABgBIAAABIgCABQACAHALgBQABAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIgHAEQACAEALgDQAXgGAagEQgFgEgJAAIAAgBIAKgIIABgBQgfgGgZALIgBAAIAAgBQAZgQAqAAIAAgBQAKgBAFAEIAAAAQABAJAKABQAFAAgCACQgFACgEACIABAAQAQAEAMAJIAAAAQgEADgKgBIgSgCIgBAAQgmAEgeAKIgBABQgHAEgHAAQgHAAgGgFgAiDgdIgIAAIgBAAQgEAAAAgEQAhg5BJgRQAIgCAKgBQgDAJgHADQgWAKgQAPIABAAQALgHAMADQgDAFgJAEIgJAEQgiAQgfATIgBAAgAhUhOQgJACgHAGQgSAOgOAUIAAABQALgFANgEIAAAAIAbgQIAAAAQADgDgHgBIAAAAQAFgKAOgHIAagOIgBAAQgcACgPAPg");
	this.shape_47.setTransform(19.6,28.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6CA4CA").s().p("AgHBNIAAgBQAPgJAPgNQAGgFAHgEQAHgDAFgGQgEgFgIAAIAAgBQgDADgKAAIgBAAIAAgBQAbgOAdgMIABAAIAAAAQADAOgEANIgBAAQgHAOgHAFIAAAAQgIALgKAJIgBAAQgFABgDACIgBAAQgDACgDgCIgBABIgEAEIgBAAIgIAAQgNAAgJgDgAhPgNQADgDgDgDQAHABgDgDQgBgDACgFIABgDIAGgJQAEgJABAEQAHABgDgKIABAAQAEADgBgGIABAAQAVgYAtADIABAAQAEAAACACIABABQAEgCAHADIABAAQAFAGAFgCIABAAIAAABIgBABQgDABgCACIgBAAQgHAFgFAGQACAHAIACIgBAAQgBABgBAAQgBABAAAAQgBABAAAAQAAABABAAQAMAJAPgJIABAAIgBABIgBABIAPgBIAAAAQAGAJgHAFIAAAAIgBAAQgMgFgRAAIgBAAQgIgDgFgHIgBAAIgHAAIgBAAIgJgGIgBAAQg4ACgeAhg");
	this.shape_48.setTransform(18.1,31.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#679CC3").s().p("AguCBQgegLgYgXIAAAAQAOgMAQgKIgBAAQgWAEgLANIgBgBQgCgEgEgDIAAAAQAKgHAJgJIAAAAQgDgHABgGIgBAAQgKgDACgKIgBABQgNAGgIAKIgBgBQgKgbgBgjIAFgbIAHgWIAAgCIAIAAIABAAQAfgTAhgQIAKgEQAJgEADgFQgNgDgLAHIAAAAQAQgPAWgKQAHgDADgJIAfAFQATAEAOAEQAMAHANALIAYATIADAAIAAABQgqAAgZAQIgBABQgFABgFgGIgBAAQgHgDgEACIgBgBQgCgCgEAAIgBAAQgtgCgVAXIgBAAQABAGgEgDIgBAAQADAKgHgBQgBgEgEAJIgGAJIgBAEQgCAFABACQADAEgHgCQADADgDADIABAAIgBABQgLALgFAOIAAABQAAAJgDAEQgBAOADAGIABAAQAIAAABAHIAAABQAIAEAGAFIABAAIAVgBIABAAIgBABIgDADQACATAYgEIAUgFQANAFARgCIABAAIAEgEIABgBQADACADgBIABgBQADgCAFgBIABAAQAKgJAIgLIAAAAQAHgFAHgNIABgBQAEgNgDgOIAAAAIAAAAQAKgDADgJIgBAAQgJgKgNgFQAHgDgFgCIAAgBIAAAAQAHgEgGgKIAAAAIgPABIABgBIABgBQAegKAmgEIABAAIAIAfQAHAZgIAdQgNA0gkAeQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgGAGgLAFIgXAJQgWAIgVAAQgXAAgXgKg");
	this.shape_49.setTransform(18.2,31.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#447EA4").s().p("AhXAZQAFgEABgDIAAAAQAQgOAUgMIABAAQAHgCAKgEQAZgLAlABIgBAAQgHADgFAGQAiACAggFIABAAIgBAAIgGACQAAAAAAABQAAABAAAAQABABAAAAQABAAAAABIABAAQABAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgBAAQglAAgiAFQg4AHgqAZIAAgBg");
	this.shape_50.setTransform(22.4,11.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7B9ED1").s().p("AgVACIAAAAIANgEIAAAAQAPAAAPACIABAAQgOADgRAAIgNgBg");
	this.shape_51.setTransform(28.3,8.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#518EBB").s().p("AgkAHQAEgGAIgBIAAAAQAYgLAeAJQAEABADABQgCADgGABIgBAAIgBAAQgVADgVAAIgVAAgAgJgDIAAAAIgOAEIAAAAQAaADASgFIgBAAQgNgCgNAAIgDAAg");
	this.shape_52.setTransform(28.5,8.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#407FB1").s().p("AgJgJIgBAAQgBgDgEgCQgJgEgEgKQAJADAJAHIAAAAQAYAQAOAaQABADgCACQgQgXgUgPg");
	this.shape_53.setTransform(68.9,39.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#204078").s().p("AgUBuIgEgFQgHgSgQgHIgBgCIgEgHIAAgCIAAgBQAhg5AOhJQADgSACgLIAAABQAWAQARAYQABgDgBgDQgOgbgZgRIAAAAIAAgDIACgKIABAAQAZAYAWAdIABABIABACIAAAAQgDAegHAZQgVBDgnAxIgCgEg");
	this.shape_54.setTransform(67.8,47.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2E4C83").s().p("AgVBlQgFgHgHgGIAAgBIAAgBQAGgBACgIIAGgOQgBgHAFgHIAAAAQgEgFAHACQAAAAAAAAQABAAAAgBQAAAAABgBQAAgBAAgBQgBgEACgEIAAgBIgFgJIAAAAQAEACABAAIAAACQABACAEgHIABgCQADgNAAgJQAFgGgBgKIAAgBQAEACgCgJIAAgBQAGgGAAgLQgBgIABgJIAAACQgBAKACgBIABAAIABgWIAAAAQgCAEABAJIAAABIgFgPQgCgJACgDIAAACQACAKABgJIAAAAIgFgTIABAAQANAHANAKIAAABIgBAAIgCAKIABADIgBAAIgBAAQgJgHgIgDQADALAKAEQADACACACQgDALgEASQgOBJgeA5IAAABIAAACIgBgBg");
	this.shape_55.setTransform(64.7,44.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#375386").s().p("AgMBjQgIgHgMgCIAAgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAhg6ALhLQAFgagBgbQAJADAIAFIAAABIAAAAIAEATIAAAAQgBAJgCgKIAAgCQgCADACAJIAFAPIAAgBQgBgJACgEIABAAIgCAWIgBAAQgBABAAgKIAAgCQgBAJABAIQABALgHAGIAAABQACAJgEgCIAAABQACAIgGAGQAAALgFANIgBACQgEAHgBgCIAAgCQgBAAgEgCIABAAIAEAJIAAABQgBAEAAAEQAAABAAABQAAABgBAAQAAABAAAAQgBAAAAAAQgGgCADAFIAAAAQgEAHAAAHIgDAOQgDAIgGABIAAABIAAABIAAAAg");
	this.shape_56.setTransform(62.5,43.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4180B2").s().p("AAsApQgVgdgYgXIAAgBQgNgJgNgIIAAgBQgIgFgJgDIAAgBIAAgBIADAAIABAAQAPADAJAHIABAAIALAJIABAAQAfAWARAnIAAABIgBAAg");
	this.shape_57.setTransform(68.4,37.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6A90C7").s().p("AgDAGIgBAAQgFgDgDgEIgBAAQgDABgFgFIAAgBQAKgGALAKIAAAAQAKgEAMAEIAAAAQgBAGgEAEIgBAAIgIABQgHAAgEgDg");
	this.shape_58.setTransform(44.4,47.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3E719B").s().p("AhcA5Qg6gKgogaIAAgBQATgLAOgNIAEgEQARgLAYACQALgEAGgIIABgBQAMADAXABQA5ACAfgXQAEgDAHgBQAMABAJgGIAAgBQARACASgCIABAAQASAMAWgFQAGgCgCAGQAIADAMgDIABAAQAMAJAQAFIABAAIAAABIgMAPIAAABIAAABIgBAAQgWgFgPAIQAHAKAMACIABABIAAAAQgSAWgaAOIAAABQgbgKglgCQhagGg3Akg");
	this.shape_59.setTransform(32.5,54.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#366B92").s().p("AkRBIIgGgIIAAgBIAAgPIACgGIAAgBQAIgIAMgGIAAgBQACgEgBgGIAAgBIAAgBIAAgBQAbgZAjgSQAKgFAMgDQAMgCAIgJQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAgABAZgPQAJgFALACQAaAEASgGQAUABANgDIABAAQAagBATAGIABAAQALAKAVgBIABAAQAFgDAHgCIABAAQAMADALAFIABAAQANADAJAGIAAABQAQAAAJAIIABAAQAPANAaACIABAAQAMADAHAHIABAAQAHAGAFAFIABAAIAEAIIAAABQARAHAHATIADAEIADAFIgBAAIgLAMIAAgBIgGgWIgBAAQgQgLgIgUIAAgBIgGgHIgBAAQgGgEgJgDIAAAAIgggIIAAAAQgMgDgHgIIgBAAQgNAAgNACIgBAAQgQgFgMgJIgBAAQgMADgIgDQACgGgGABQgWAFgSgLIgBAAQgSACgRgCIAAABQgHAGgMgCIAAAAQgKgEgHgEIAAAAQgGgCgCADQgCAFgEgBQgPgEgPAGQgZAKgjACIAAABIgPAIIAAABIAAABIgBAAQgGAJgLADQgYgBgRALIgEADQgOAOgTAKIAAABIgBAAQgKAKADATIgBAAQgJADgIAEIgBAAQABAIgCAGIgBAAg");
	this.shape_60.setTransform(37.9,54.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#709AC5").s().p("AARAFIgBAAQgFgDgHAAQgWgBgYgDQgJgCgLAAQgJABgBgEIALgEIAAAAQApACAggCIABAAQAlAGAXAQIAAABIgKAAQgZAAgVgHg");
	this.shape_61.setTransform(43.1,30.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5F8EB6").s().p("Ah3DpQgegKgagOQgLgSgIgVQgahAAChcQAIhQAfg8IANgXIAigZQAPgKAUgGIAGgBQArgZA3gJQAigFAlAAIACAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAMAAAJgCIABAAQAdAPAUAaIANAQQAPAWANAZQALAZAIAdIABABIAAAAQgPAEgTAAIAAAAQgRAEgOAGQAGABAJAAQAegBAXAIIgBAAIgBAAIACAQIAAABIgBAAQgjACgogCIAAAAIgMAEQABAEAJgBQALgBAJACQAZAFAYACQAHAAAEADQgEABABAGQACAOgCANQgKA3gYAoQgEAHgDAHQgEALgNACIAAABIgBAAQgPADgUgBQgSAFgagDQgLgCgIAFQgaAOggAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABQgHAIgNADQgMADgKAFQgjASgbAbIAAABIAAABQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABIgBADQgCABgDAAIgHgBgAhcBtQAsARAwgQIAVgIQALgFAFgGQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAlgfANg0QAHgagGgcIgJgeIASABQAKABAEgCIAAgBQgMgJgQgDIAAAAQADgDAFgBQACgDgFAAQgKAAgBgJIAAgBQgFgEgKACIgCgBIgYgTQgOgLgMgGQgMgFgSgEIgigEQgKAAgIACQhJASghA5QAAAEAEAAIABAAIAAABIgGAXIgGAbQABAjALAbIAAABIAAAAIgMAQQAEAEAIgFIAEgDQgIAJAFANIAAABQAHgCAFgIIABAAQAFACACAFIAAABIAAAAQgHAGgFAIQABAJAGgJQAEgFAFgEQAYAWAeAMg");
	this.shape_62.setTransform(22.7,33.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5175A2").s().p("AgIBeQgLgFgMgDQAFgDAAgBIAAAAQADABADgGIABAAIAAgCQABgIAGgGIABAAIAKgdQABgCgDgHQABADACAAIAAgBIABgEQgDgLAEAGIABAAQAEgOAAgLIABAAQAFgFAAgKIABgGQgDgIABgKIgBAAQADgLgCgOQgCgMAFgGIACgCQAJADAGAFIAAABIAAABIgBAAQACAPgCASQgKBPgdA3IAAACQACADgFAAQADACABACIAAABIgBAAg");
	this.shape_63.setTransform(51.1,39.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#557BA7").s().p("AgXBeIgBAAQgUgFgZAAIAAgBQAMgBAEgLQADgIAFgHQAYgnAJg1QACgNgCgQQgBgGAFgCIABABQAXAIAfgCIAAAAQgXgTgjgGIAAgBIgCgQIABAAIABAAQArAIAmAOIABAAIgCADQgFAFABAMQADAOgDALIAAAAQAAAKACAIIgBAGQAAALgEACIgBAAQAAAOgFANIAAAAQgGgFAFAKIgCAFIAAAAQgDAAgCgDQADAHgBADIgKAcIAAABQgGAFgCAIIAAACIgBABQgCAGgDgCIAAAAQgBACgFACIAAAAQgHACgFADIgBAAIgDABQgRAAgKgKgAgaBXQADAFAGADIABABQAJADAJgCIABAAQAFgEABgIIgBAAQgJgEgMAEIAAAAQgMgJgJAFIAAABQAEAHAEgDIAAABg");
	this.shape_64.setTransform(45.7,38.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#94B1DA").s().p("AAhAKIAAAAIgggFIgBAAQgcgGgbgKIAAAAQAegKAXAPIAGAEIAIADQAcgDAPAPQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABIgGAAQgIAAgJgGg");
	this.shape_65.setTransform(48.9,27.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#719AC5").s().p("ABIAbIgBAAIAAgBQgGgGgJgCIAAgBQgngOgqgFQgXgIgeABQgJAAgGgBQAOgGARgEIAAAAQATAAAPgEIAAAAQAVgFANAIIAdAQQATgFAOAJIABABQAPADAKALIAAABQgCACgCAHIgBABQgFACgGAAIgGAAgAgmgPIAAAAQAbAKAcAGIABAAIAgAFIAAAAQALAIAMgCQAAgBAAAAQABAAAAgBQAAAAgBgBQAAAAAAAAQgQgPgcAFIgIgFIgIgEQgNgJgPAAQgLAAgMAEg");
	this.shape_66.setTransform(47.2,28.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6A8FC6").s().p("AAFAEIgBAAIAAAAQgQgHgPgMQADAAAGADIAAAAQAMgDAGAFIABAAQANAEAIAIIABAAQABAIAEAFIAAABQgMgFgLgHg");
	this.shape_67.setTransform(59.7,32.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#547AA6").s().p("ABnBdQgOgJgTAEIgdgPQgPgIgVAEIgBAAQgGgegMgYQgMgYgQgVIgMgRQgUgZgdgQIAAgBQA+gHA9AJIABAAIAWAJIABAAQAjA3ASBEQAFAVACAbIgBAAg");
	this.shape_68.setTransform(43.7,18.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#46709B").s().p("ADaDyQgJgIgQAAIAAgBQgJgHgNgCIAAgBQgBgDgDgBQAFAAgCgDIAAgCQAfg3AKhRQACgSgCgPIABgBIAAAAIABAAQALABAGgDIABAAQACgIACgCIAAgBQgKgLgPgFQgCgagFgUQgShGgjg3IgBAAIgWgJIgBAAQg/gJg+AHIAAABIgBAAQgIACgLAAIgBAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgBIAHgCIAAAAIABAAQAGAAACgEQgDgDgEgBQgegJgaALQgmgBgaALQgKAEgHACIAAABQgVAOgQANIAAAAQAAADgGAEIAAABIgGABQgUAGgPALIgiAYIAAgBQAjg3AygoQAigbAqgTQBKgSBVABIA4ABQAHAIAKgBIABAAQgDAEAFgDQAGgCAFADQgDgEAIADIABAAQAKAHAEAJQAAAAAAAAQAAABAAgBQAAAAABAAQAAAAAAAAQgBAIAFgBIAAAAIAFAEIAAABQgBAHADAFIAAgBIABgBQgCgIAEAEIAAABQAJAJACAMIAAABQADAAACAHIAAABQACgEADAHQADAGgDAFQAGAEAEAHIAAABIATAFIABAAQAfA6AKBPQACAVAAAXIgBAAQgIgFgMADIAAgBQgGgDgDABQAPALASAJIAAABIgBAAIgBAAIgGAuQgMBOgfA4IAAABIgBAAg");
	this.shape_69.setTransform(33.1,26.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0E507C").s().p("ACQASIgBgBQgjgQgvgCIg4gBQhVgBhKAQIAAgBQA9gbBXgCQA2gCArANQAjAJAdAPIgBAAIgFAAIgFAAg");
	this.shape_70.setTransform(37.7,2.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3D5D8F").s().p("AAzD5QgbgCgPgNIAAgBQAgg4AMhOIAGgtIABAAIABgBIAAAAQALAHAMAFIAAgBQgDgFgBgIIgBAAQgIgKgOgEQABgXgDgTQgJhRgfg6IgBAAIgSgFIAAgBQgDgGgHgFQAEgFgDgGQgEgHgBAEIAAgBQgCgHgEAAIAAgBQgCgLgJgKIAAgBQgEgEADAIIgBABIAAABQgDgEAAgIIAAgBIgEgEIAAABQgGAAABgIQAAAAAAAAQAAABAAAAQAAAAgBAAQAAgBAAAAQgEgJgJgHIgBAAQgIgDACAEQgFgDgFACQgGADAEgEIgBAAQgLABgGgIQAuAFAkAQIABAAIgBAAIgCABQAGAEgCAAQgBgBgBABQAAAAAAAAQAAAAABABQAAABABAAIADAFQAGgDgDAGQAAAAAAABQAAAAAAAAQAAABAAAAQAAABABAAIAFAFIgBABQAEAJACACIABgBIAAgBQAEAIgFgCIAAAAQAEAJAEADIABgBIABAAQACAGgDAAIAAAAQAFAJADAMQACAGAGABQAJgBgDADQgBAAgBABQAAAAAAAAQAAAAABAAQAAgBACAAQALgFgGAFIgBABIAPAJQAIAFAKAEQAYA+ADBVQABARACAOIABAAIAAABIgBAAIgCAAIAAABIAAABQAAAbgFAaQgNBOghA5QABAAAAABQAAAAABAAQAAAAABAAQABABABgBIAAABIgBAAg");
	this.shape_71.setTransform(54,27.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2D4C82").s().p("AAOBbIgLgJIAAgUQABhSgUhGQAKAFAGAJIAAAAQAUBHgEBZIgBAHIgBAAg");
	this.shape_72.setTransform(66.3,25.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#204279").s().p("AAxCXIgBgDIgBgBQgQgngfgYIAAgHQADhZgShHIgBAAQgHgJgKgFIgBgBIgFgEIAAgBQgGgagGgVQAtAsAbA+QAdA7ACBXQABAbgDAWg");
	this.shape_73.setTransform(68.1,26.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#335586").s().p("ABJCTQgJgHgPgCIAAgBIgBgBQgDgOAAgRQgDhWgZg8QgKgEgHgGIgNgIIAAgBQAHgFgMAEQgBABgBAAQAAAAAAAAQAAAAAAAAQAAAAABgBQAEgCgKAAQgGAAgBgGQgEgNgEgJIAAAAQACAAgBgGIgBABIgBABQgEgDgEgKIAAAAQAFADgEgIIgBABIAAABQgFgCgDgJIABgCIgGgEQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQADgFgFACIgDgEQgBgBgBAAQAAgBAAAAQAAgBAAAAQAAAAABAAQADAAgHgEIADAAIAAAAQAEABAGgBIABAAQAfAPAbAUIAAABIAAAAIgBAAQAQAgAHAmIgBAAQALAFAPAFIABABIAGAEIAAAAQAVBFAABUIAAAUIgBgBg");
	this.shape_74.setTransform(59.3,19.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#231F1D").s().p("AgTFwQhTgFg7gfQg8gfgsguQgrgugcg+Qgdg+gDhVQAEhVAbg+QAcg/AtgtQAsguA8geQA5gdBNgIIA7AAIABAAQAWACAUAFQBKAQA1AkQA2AkAnA0QAnAzAVBFQAKAjACApQAFBOgVA9QgWBDgpAyQgoAyg3AjQg3AjhLANQgbAFgfAAIgZgBgAAAlpQhWACg9AdIAAABQgrATghAbQgyAogjA3IAAABIgOAYQgeA7gIBSQgDBaAaBAQAJAVALASQATAlAbAfIABAAIAGAIIABAAQAmAqAzAdIABAAIAaAOIABAAIAGACIABAAIALAFIABAAIAKAEIABAAIATAGIABAAQANAFAQADIABAAQA8AMA+gKIABAAQAZgEAWgHIABAAQAfgKAcgOIABAAQA7gfAsguQALgNAKgPQAogxAVhGQAIgZADgdQADgWgBgZQgChXgdg9Qgdg+gtgsIgBgBQgSgRgTgPIgBgBQgagUgfgPQgegPgigKQgngMgzAAIgIAAg");
	this.shape_75.setTransform(37,37);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#234E7D").s().p("AAYAoQgPgGgJgFIAAAAQgGgjgSggIABAAIAAgBQATAPARARIAAABQAGATAGAaIAAABIgBAAg");
	this.shape_76.setTransform(61.5,12.1);

	this.addChild(this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74,74);


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


(lib.blue_leg_R_bend01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A3C4B").s().p("Ak8DnQASgkATgqQBykWiKlTICpAjQBKE9iKEnQCyAvC5B6QBeA9A6A0g");
	this.shape.setTransform(30.5,46.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.3,0,63.6,93.1);


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


(lib.blue_leg_L_bend01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A3C4B").s().p("AjpEtIAAAAIAAgBIAAgBIAAAAQA/iiABh+QABigiDjWIC7ghQBxGHizErQCFhTC1gwQBggZBEgHIpIEJg");
	this.shape.setTransform(28.9,25.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,-14.4,60.1,79.4);


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


(lib.ship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ship
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#06070C").p("AAOjPQAOgIAAgKQAAgKgOgHQgOgIgSAAQgTAAgOAIQgOAHAAAKQAAAKAOAIQAOAHATAAQASAAAOgHgABXjwIAWgEIgBAXIgXAAIAAAAIACgTgABRivIARAEQAVAHARALQAqAbAHAuABVjdIgEAuAhLi2IgZhsIDBgPIgGBBAhLi2IAgALQAuAJBOgNAi5g8QAAgGABgJQACgTAIgSQAag3BJgPAi5g8IAeAIQAlAIAqADQCFAKCAgxQACAOgBAQIgUEQIgBAVIgCAXIgBABACiELQgQAKgbAJQg5AUg+AAQhAAAg2gOIgNgEIgdgKIgBgRIgCgXIgWkq");
	this.shape.setTransform(268.9,287.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#231F20").ss(1.2).p("AA3ELQgsgLgfgRQg0gcgcguQgqhEAKhvQAKhsBEhLQBEhLBXAIQATgDAVACABlkIQg/AKgzA5QhFBLgJBsQgKBvApBEQAuBLBtAb");
	this.shape_1.setTransform(98.5,348);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#231F20").ss(2.3).p("AjPiJQALgZAQgWQAGgKAIgKQBEhTBfgCQACAAABAAQBiAABFBVQAxA7AOBMQAGAbABAeQAAAGAAAGQAAB4hGBVQhFBVhiAAQgnAAgjgOQgzgVgpgyQhFhVAAh4QAAhLAcg+g");
	this.shape_2.setTransform(143.2,354.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.6).p("ABJhGQAAAAABABQAhAZAQAXQATAYgFAYQgKAvhAAaQgDABgDACQgvARgwAAQgpAAgdgjQgdgjAAgyQAAgxAdgjQABgBABgBQAcghAoAAQAGAAAGABIAiAKQAdAMAkAag");
	this.shape_3.setTransform(151.2,354.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2.3).p("AB4BnQgGAKgIAKQgqAzg6AAQg5AAgqgzQgqgzAAhIQAAg7AdgtQAGgJAHgIQANgPANgLQAhgZAoAAQA6AAAqAzQALANAJAQQAFALAFAM");
	this.shape_4.setTransform(144.9,354.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#231F20").ss(2).p("AGGj1Qg8gMhggOQgQgDgPgCQi5gbi0gPQhUgGhCBDQhCBDgJBnQgKBqAoA/QAsBFBrAbICGAqIA1AQQCzAzCgAg");
	this.shape_5.setTransform(103.7,349.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#231F20").ss(1.3).p("AlBkhQBmgKBSBMQBQBMALB0QALBzhBBaQhCBZhnAJQhnAKhQhMQhRhMgLh0QgLhzBChZQBBhZBngKgAHGjNQBQBMALB1QALByhBBaQhBBZhnAKQhnAJhRhMQhRhLgLh1QgLhzBBhZQBBhZBogKQBngKBRBMg");
	this.shape_6.setTransform(257.2,213.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#231F20").p("AE0mTQAjALAjgDQBPgIAzhFQAyhFgIhaQgIhXg7g6Qg7g6hNADQA5ASAnA0QAoA1AHBEQAIBbgyBFQgzBFhPAHgAFbs/IgKAAQhPAIgzBFQgyBFAJBaQAGBEAoA1QAnA0A5ATAOFmBQAjALAjgDQBQgIAyhFQAyhFgIhaQgIhXg7g6Qg7g6hNADIgKABQhPAHgzBFQgyBFAJBaQAGBEAoA1QAnA0A5ATgAyqBJICWAMIBQAGAv5FIIAABDIFCgsAyqBJIAfEkICSAeAyqBJICVgOAOsstQA5ASAnA0QAoA1AHBFQAIBagyBFQgzBFhPAHIgKABASKGBQgCABgDACQgcAOgZAcQgUAWgPAaARhGEQgbAPgZAbQgSAUgNAXAPxK4QAHAaANAWQAXAmAtAZQAdAQAmAJAQWK/QAGAWAMATQAnBABgAYAnNFcIFPAr");
	this.shape_7.setTransform(191.6,273.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").p("ADHgDQDBgwhkAeQgkAKg5AIgAlKAMICzACIAIAAQDcgDB6gOQg9AOhbAX");
	this.shape_8.setTransform(154.3,172.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#231F20").ss(1.1).p("AgUDtIALgCQBUgVAshTQAshUgXhfQgShKg0g0Qgzgyg/gMIgLADQhWAUgsBUQgsBTAXBgQASBKA0AzQAyAyBCAMQAmAHAmgJQBWgVAshTQAshUgXhfQgXhehJg3QhKg2hRAP");
	this.shape_9.setTransform(255.1,64.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#231F20").ss(1.7).p("AQAGdQg0gKhTgNQhTgMhTgKAuDGUIhUgOIgBgxIglwQQgFgmAIgpQARhRBDgJQB+gTB5gMIAlUDIACA3IAAACIAAABIg3gJAsBMQIALADIGRlDIgfgKAFwHgQAQgsAhgiQAEgEAFgFAFgIrQgCAfACAaAPEOFQiKgbidgtIhggdIhAgUQhegYglg7QgJgPgGgS");
	this.shape_10.setTransform(244,274.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#231F20").ss(1.4).p("AQDT6IAABBQAFAThFAVIgKACIg9APQipAUjGgUQgDgBgDAAQhxgMh8gZQhqgWhlgeIhOgZIA/gFQAAgCABgCQAFgbgFgDAGi3xQBkBGAeB+QAeB+g5BsQg5BthwAaQhvAbhkhGQhlhGgeh/Qgch+A3hsQA5hsBwgbQBvgbBlBHgAtcTMIirBZAMHP/QgMgMAAgRQAAgRAMgNQANgMARAAQARAAAMAMQAMANAAARQAAARgMAMQgMAMgRAAQgRAAgNgMgAi1PGQAYAAARARQARARAAAYQAAAXgRARQgRARgYAAQgYAAgQgRQgRgRAAgXQAAgYARgRQAQgRAYAAgAD+TNIjCAMQAAAAABABAQDT6QgfAihqAOIhLAFIgZACQiBAAh3gIQgEgBgDAAQiWgLiIgYQg1gJgugLQgWgFgUgFQgSgFgRgFQgBAAgCgBIgJgCAh/UGIifAKQADgoADgnQAHhQAFACQAEABBggHQAwgDAvgEIAKBfIE7gPApgYgIARAFIFZkVAMVTEQAGABAGAAQBQAIA7ANQBFAQASAQAMVTEIgYACIirAMIgPABIgBAAAJHSmIB1gGIAAhnICvgKIAACLIAAAEIhFAFIgRABAJFS7QB1ABBbAIAEbToIiCAJ");
	this.shape_11.setTransform(227.2,190.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1.4).p("AAxBZQgoAPgpAAQgjAAgagfQgZgfAAgqQAAgqAZgeQAZgfAkAAQAmAAA5ArQAAAAABAAQA+AugIAlQgIApg3AWQgDABgDACg");
	this.shape_12.setTransform(353.7,340.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#231F20").ss(2).p("ATTUxQACAAACAAQBVAAA8BJQA8BJAABoQAABng8BKQg8BJhVAAQgiAAgegMQgsgSgkgrQg8hKAAhnQAAhoA8hJQA6hHBSgCgAqW8gIAAgCIEBAlQFTAtGcAnQF4AkCdDDQBPBhADBbIAASbIAAAEIAAC/IAASqIgbACIgQABAqW8gQC9ALBoCDQAyA+AXBTQAMAqACAdIACJPA14ipIgqxdQgFhgBDhxQCFjhFohRQB8gcBlAFAmMVQIgu1mQiRAOiXASQhQALgUBcQgLAtAGAsIAvRPIBsAPIAgAFArFCLQgbAbAAA2QAABXAUKeICCgKQAKAEAKgHQAUgOAAg5IAAsSIiIAQQgOADgNANgA1mEoIAZKgIABAaIAJDzIARAAIBHABIARjTIC6AIIAxDhIAEASIC6AZIChAWAq0CjIBdgUIARMJIhkAKgADEU9IgCAAAkQVhIBFgFIAagCIBdgIIC8gPAmMVQIB8ARApPU2IBjAPIA3AIIApAGIAAgDApPU2ICaAVIApAFAkWjcIAGY9ApPU2IhBgJ");
	this.shape_13.setTransform(222.9,182.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2).p("AYPmJQAvBOAvgIQAvgIAVhKIAEgZQANgDANgDQAOAeARAZQA+BfA/gLQBAgKAPhoQAFgggBgmIgCgfIsRgVAWDlvQAQgCAPgDQA3gKA2gLAWDlvQAHAAAHgBQAJgBAIgDASroRILxAiQhlAghoAbAa1muQhSAUhUARAZFRDQgJgYgQgUQgkgsgzAAQgzAAgjAsQgkAsAAA+QAAA+AkAsQAjAsAzAAQAzAAAkgsQAGgIAGgJAg60WIAMABITKCQIAAJOIzIhPIgOgBAg60WIAAKPA7dlvQgGAOgFAMQguBohAAAQhBAAgghkQgJgggGglIgDgfIM7ieICFgaIgDAeQgEAjgLAeQghBihNAJQgqAGgxgyIgogyIgjBAQgtBBgyAAQgyAAgggtIgWgtIgYBVQgOAigPAUQgYAfgdAAQgpAAgdgzQgFgJgFgKIgXhGIgIAgQgHAYgHAVQAbAGAcAGAg60WIoDBkIgFBOQgJBhgPBYQgwEbhiBjIhwAQQAjALAkAJQAEABADABQC7AtDAgXQB5gPB8gqQjMBekdBBQgCARABAQIAADNIn0AdIgKABIgIjAQDQgLDfguQAtgJArgKAtcodQg5gTg0gZIhAgkApboFQAwhHBhgOQDIgeDIgPA4rlPQDGAbDXgLASrlQQBtgNBrgS");
	this.shape_14.setTransform(199.5,225.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgwBqIglgHIh6gZIgBAAQgKgRAAgjQAAgWAGghQDGAVCngUIA9gPQAQA1glBBQgYArghAdgAjEhsIAKgiICCAUIAgAFIBkAQIgaABQh+AAh4gIg");
	this.shape_15.setTransform(301.2,333.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BFBEBE").s().p("Ah2EkIgNgEIgdgKIgBgRIgCgXIgWkqIAeAIQAlAIAqADIACAAIACABIAoABIAAAAIABAAQBrAABpgnIAEgCIgEACQhpAnhrAAIgBAAIAAAAIgogBIgCgBIgCAAQgqgDglgIIgegIIABgPQACgTAIgSQAag3BJgPIgZhsIDBgPIgGBBIAAAAIgCATIAAAAIgEAuQguAIgjAAIAAAAIAAAAQgXAAgTgEIgBAAIgggLIAgALIABAAQATAEAXAAIAAAAIAAAAQAjAAAugIIARAEQAVAHARALQAqAbAHAuQACAOgBAQIgUEQIgBAVIgCAXIgBABIAAAAQgQAKgbAJQg5AUg+AAQhAAAg2gOgAgzjyQgOAHAAAKQAAAKAOAIQAOAHATAAQASAAAOgHQAOgIAAgKQAAgKgOgHQgOgIgSAAQgTAAgOAIgABVjdIAAAAIACgTIAAAAIAWgEIgBAXgABXjwg");
	this.shape_16.setTransform(268.9,287.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#575959").s().p("AjZCJIgfkhICWALIAJDxIARAAIBHABIAPjRIC7AIIAwDfIlBAtIAAhEIAABEgAj4iYICVgPIABAag");
	this.shape_17.setTransform(97.1,296.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4E59A6").s().p("AooGLQDPgLDfguIBYgSQgCAQABAQIAADNIn0AeIgKAAgAioDDIgIgCQgkgJgigLIBvgQQBjhjAukZQAPhYAIhgIAFhPIIDhkIAAKNQjIAPjIAeQhgAPgxBGg");
	this.shape_18.setTransform(138.1,153.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#314184").s().p("ApcEgIgPgBIAAqNIAMABITLCQIAAJMg");
	this.shape_19.setTransform(255.5,131.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AFC0E3").s().p("AC0OGQgng1gHhEQgIhbAyhFQAyhFBQgGIAKgBQA5ASAnA0QAoA1AGBFQAJBZgzBGQgyBEhQAHIgKABQg5gSgng0gAmbN0Qgng1gHhEQgIhbAyhFQAyhEBQgIIAKAAQA5ASAnA0QAoA1AGBEQAJBagzBGQgyBEhQAHIgKABQg5gSgng0gAh+ouQg0g0gShKQgXhiAshTQAshUBWgUIALgCQA/ALAzAzQA0AzASBKQAXBhgsBUQgsBUhVAUIgKADQhCgNgygxg");
	this.shape_20.setTransform(254.1,137.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4F5154").s().p("ACuPKIAKgBQBQgHAyhFQAzhFgJhaQgGhFgog1Qgng0g5gSQBMgDA7A6QA7A6AIBXQAJBagzBFQgyBFhQAIIgPAAQgbAAgcgIgAmhO4IAKgBQBQgHAyhFQAzhFgJhbQgGhEgog1Qgng0g5gSQBMgDA7A6QA7A6AIBXQAJBagzBFQgyBFhQAIIgPAAQgbAAgcgIgAhwnzIALgDQBWgUAqhUQAshTgXhiQgShKgygzQgzgzhBgLQBTgPBIA2QBJA2AXBeQAXBigsBTQgsBUhUAUQgWAGgXAAQgQAAgRgDg");
	this.shape_21.setTransform(264.3,138);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6A6C71").s().p("ApeYgQgPhMgwg7QhGhVhiAAIgEAAQg8gLhggPIgggEICrhaIChAWIBAAJIBjAPIA3AJIAAgBIAqAGIAAgDIB7ARIBGgFIlZEUgAIPV0IgGAAQhxgMh8gaQhqgWhlgdIhOgZIA/gFIABgFQADgOAAgIQAAgGgDgCQADACAAAGQAAAIgDAOIi8APIifAKIAGhQQAHhPAFABQAEACBggHIBfgHIAKBfIE7gQIACAYIjCAMIABAAIAJADIADABIAjAJIAqALQAuAKA1AKQCIAYCWALIAHAAQB3AICBAAIAZgBIBLgGQBqgNAfgjIAABBQAFAThFAVIgKADIg9APQhTAJhbAAQhcAAhlgKgAm1UIIgqgGIAAgCIAqAFIAAADgAoWT6IA3AIIAAABgAoWT6IhjgPICaAVIAAACgAnfUAgAoWT6gACYTyIgqgLIgjgJIgDgBIgJgDIgBAAIDCgMIABARIAcAJIiCAKgAp5TrgAJFTTIACgXIACgWIB1gGIAAhmICvgKIAACKIAAAEIhFAFIgRACQhbgJh1AAQB1AABbAJIgYABIirAMIgPABgAEATOgAMXTFIAAAAgAjbQpQgRgRAAgYQAAgYARgQQAQgRAYAAQAYAAARARQARAQAAAYQAAAYgRARQgRARgYAAQgYAAgQgRgAMJP/QgMgMAAgRQAAgRAMgMQANgMARAAQARAAAMAMQAMAMAAARQAAARgMAMQgMAMgRAAQgRAAgNgMgAG4HFQhQhMgLh1QgLh0BBhaQBBhXBngKQBngJBRBKQBRBLALB1QALB1hCBZQhBBahnAJIgWABQhaAAhIhDgAJKATIgKABQhPAHgzBFQgyBFAJBaQAGBEAoA1QAnA0A5ATQAjALAjgDQBQgIAyhFQAyhFgIhaQgIhXg7g6Qg5g3hIAAIgHAAgAiXGzQhQhMgLh1QgLh0BBhaQBBhXBngKQBlgJBRBJQBRBMALB1QALB1hCBZQhBBZhnAKIgYABQhWAAhIhDgAgFABIgKAAQhPAIgzBFQgyBFAJBaQAGBEAoA1QAnA0A5ATQAjALAhgDQBPgIAzhFQAyhFgIhaQgIhXg7g6Qg5g3hIAAIgFAAgACPvnQhlhGgeh+Qgch/A3hsQA5hsBwgbQBvgaBlBGQBkBGAeB/QAeB+g5BsQg5BshwAbQgfAHgeAAQhOAAhIgzgADq3ZIgLACQhWAVgsBTQgsBUAXBhQASBKA0A0QAzAyBBAMQAoAHAmgKQBWgUAthUQAshTgYhiQgWhehKg2Qg5grhAAAQgRAAgTAEg");
	this.shape_22.setTransform(227,190.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9B9C9F").s().p("AwOENIg0gQQg0gcgcguQghg2gBhUQAAgUACgVQAKhsBEhKIACgCIABgBQA9hBBLAAIABAAIAAAAIAQAAIABAAIACAAQAMgBAMgBIAAAAIABAAIALABIACAAIgCAAIgLgBIgBAAIAAAAQgMABgMABIgCAAIgBAAIgQAAIAAAAIgBAAQhLAAg9BBIgBABIgCACQhEBKgKBsQgCAVAAAUQABBUAhA2QAcAuA0AcIiGgpQhsgbgrhFQgohAAJhpQAJhoBChDQBChDBVAGQC2APC4AcIAgAEQBgAOA8AMQhfAChEBTQgIAJgHALQgQAWgLAYQgcA9AABMQAAB5BGBUQApAzAzAUQifgfi2g0gAxqCzQAuBLBvAbQhvgbguhLQghg2AAhUQAAgUACgVQAJhsBFhKQA1g6A/gKQg/AKg1A6QhFBKgJBsQgCAVAAAUQAABUAhA2gAQeBsIhggdQgtgZgXgmQgNgUgHgbQAHAbANAUQAXAmAtAZIhBgUQhdgYglg6QgKgOgGgSIB7AYIAlAIIC6AjQAhgbAYgrQAkhBgQg4IAKgCQBFgVgFgTIAAhBQgSgQhFgPQg7gOhQgIIAFgCIgFACIgMgBIARgBIBFgFIAAgEIAQgBQBSAKBUAMQBSANA0AKQhRACg7BHQg8BJAABoQAABlA8BJQAkAsAtASQiLgbicgtgAOdAQQAnBABgAYQhggYgnhAQgMgRgGgWQAGAWAMARgAmBA+QgBgdgFgbIARAFIFZkSIAZgDIAeALImQFAgALgikIAGAAQgFAhAAAYQgDgbACgegAOij5QAPgZAUgWQAZgcAcgPQBQAIA7AOQBFAPASAQQgfAihqAOIhLAGgALwjwQAQgrAhgiIAKgJICrgMIAYgCIAMABQgcAPgZAcQgUAWgPAZIgfgEQANgXASgUQAZgbAbgPQgbAPgZAbQgSAUgNAXIiCgVIgKAjIgHgBgAP6lTIAAAAg");
	this.shape_23.setTransform(205.5,346.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CDCDCD").s().p("AtmdtQg0gUgpgzQhFhUAAh5QAAhNAcg+QALgYAQgWQAGgLAIgJQBEhTBfgCIAFAAQBiAABFBVQAxA7AOBMQAGAbABAdIAAAOQAAB5hGBUQhFBWhiAAQgogBgjgOgAtOXEQgOALgMAPIgNASQgdAtAAA8QAABIAqAzQApAzA7AAQA7AAAqgzIAOgTIAGgDQBAgaAJgvQAFgYgSgbQgQgWgigZIgBgBIgKgXQgIgQgLgNQgqgzg7AAQgpAAghAZgASXbBQgsgSgkgsQg8hJAAhnQAAhoA8hJQA6hHBSgCIAEAAQBVAAA8BJQA8BJAABoQAABng8BJQg8BKhVgBQgiAAgegLgASVVpQgkArAAA/QAAA+AkArQAjAtAzgBQAzABAkgtIAMgQIAFgDQA3gWAJgpQAIgng/gtIgBgBQgJgZgQgTQgkgtgzABQgzgBgjAtgAkQUIIgG49IAGY9Ih8gQIgu1nQiRAOiXAVQhQALgUBaQgHAdAAAcQAAAQACAQIAvROIBsAQIAgAEIihgVIi6gZIgEgTIgxjhIi6gIIgRDUIhHgBIgRAAIgJjzIBPAFIhPgFIgBgaIgZqgIH0gdIAAjLQgBgQACgRQEdhBDMheQBkgfjBAxQh6AQjeADIgIAAQAwhHBhgPQDIgeDIgPIAOABITIBPIAApNIzKiQIgCpQQgCgcgMgqQgXhTgyg/QhoiCi9gLIAAgDIEBAmQFTAtGcAnQF4AkCdDCQBPBiADBaIAAScIAAAEIAAC/IAASqIgbACIgQABIAAiKIivAKIAABmIh1AGIAUkSQABgQgCgNQgHgvgqgbQgRgLgVgGIgRgFIAEguIAXAAIABgWIgWADIAGhAIjDAPIAZBrQhJAPgaA3QgIASgCATIgBAPIAWEsIk7APIgKheIheAGQhgAIgFgCQgEgCgHBQIgGBQICegLIhdAIIgaADIhFAEgAiyPLQgRAQAAAYQAAAXARASQARARAYAAQAXAAARgRQARgSAAgXQAAgYgRgQQgRgRgXAAQgYAAgRARgAMzO4QgMAMAAARQAAARAMAMQAMAMARAAQARAAAMgMQAMgMAAgRQAAgRgMgMQgMgNgRAAQgRAAgMANgAJlg4QhnAKhBBXQhCBaALB0QALB1BRBMQBRBLBngJQBngKBBhZQBBhagLh0QgLh1hQhLQhIhChaAAIgWABgAAUhKQhlAKhBBXQhCBaALB0QALB1BRBMQBQBLBlgKQBngJBChZQBBhZgLh2QgLh0hQhKQhIhDhaAAIgWABgAD54qQhvAbg5BsQg6BsAeB+QAfB/BkBGQBkBGBwgbQBvgaA5htQA6hsgeh+Qgfh+hkhGQhJgzhPAAQgdAAgfAHgAm1TzIgCg3Igl0DQh5AMh+ASQhDAKgRBPQgFAZAAAZQAAAPACAOIAlQSIABAxIBUAOIhsgQIgvxOQgCgQAAgQQAAgcAHgdQAUhaBQgLQCXgVCRgOIAuVngApPTeIhBgKIgggEIhUgOIgBgxIFOArIlOgrIglwSQgCgOAAgPQAAgZAFgZQARhPBDgKQB+gSB5gMIAlUDIACA3gArMN5ICCgKIAHABIAAAAIABAAQAGAAAGgEIAAgBQAUgOAAg4IAAsSIiIAQQgOADgNANQANgNAOgDICIgQIAAMSQAAA4gUAOIAAABQgGAEgGAAIgBAAIAAAAIgHgBIiCAKQgUqfAAhWQAAg2AbgbQgbAbAAA2QAABWAUKfIAAAAgAqqNJIBkgKIgRsIIhdAUgAsFSRgA1MOKgAq0BLIBdgUIARMIIhkAKgAGXLqQgOgHAAgKQAAgLAOgHQAOgHATgBQAUABAOAHQAOAHAAALQAAAKgOAHQgOAIgUAAQgTAAgOgIgAq0BLgAnljGQA5gIAkgKQh8Aqh5APICYgngAyzj4IhAgjIiFAZIgqxdQgFhfBDhxQCFjhFohRQB8gdBlAGQC9ALBoCCQAyA/AXBTQAMAqACAcIACJQIgMgBIoDBkIgFBOQgJBhgPBYQgwEbhiBiIhwAQQg5gSg0gag");
	this.shape_24.setTransform(222.9,191.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5A595B").s().p("ArdPfQgqg0AAhIQAAg7AdguIANgSQAMgOAOgLQAhgZApAAQA7AAAqAyQALAOAIAQIAKAWQgjgagegMIgkgKIgMgBQgnAAgcAhIgCADQgdAiAAAyQAAAzAdAjQAcAkApgBQAzAAAvgRQgvARgzAAQgpABgcgkQgdgjAAgzQAAgyAdgiIACgDQAcghAnAAIAMABIAkAKQAeAMAjAaIABABQAiAZAQAXQASAagFAYQgJAwhAAZIgGADIgOAUQgqAyg7AAQg7AAgpgygAUgNHQgkgsAAg+QAAg+AkgsQAjgsAzAAQAzAAAkAsQAQAUAJAYQg5gqgoAAQgjAAgZAfQgZAeAAArQAAArAZAfQAZAfAjAAQAsAAAogQIgMARQgkAsgzAAQgzAAgjgsgAWFNGQgjAAgZgfQgZgfAAgrQAAgrAZgeQAZgfAjAAQAoAAA5AqIABABQA/AugIAnQgJApg3AWIgFACQgoAQgsAAIAAAAgAXmKfIAAAAgA6KryQAPgVAOghIAYhWIAWAtQAgAtAyAAQAyAAAthAIAjhBIAoAyQAxAyAqgGQBNgJAhhiQALgeAEgjIADgdIBAAjQA0AZA5ATQAjALAkAJIAHACIADABQB6AdB8AAIAAAAIAAAAQA9AAA9gHIAFgBIADAAQB5gPB8gqQjMBekdBCIhYASQjfAujQALQg/ADg9AAQiVAAiMgSgARMu1ILxAiQhlAghoAbIgaAGQhSAUhUARQg2ALg3AKIgfAGQhrARhtANgA88sSQAHgWAHgXIAIghIAXBGIAKATIg3gLgAp0uNQh8AAh6gdIgDgBICzACIAIAAQDegDB6gQQDBgwhkAeQgkAKg5AIIiYAnIgDAAIgFABQg9AHg9AAIAAAAIAAAAg");
	this.shape_25.setTransform(209,267.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D3BBDA").s().p("A+xBbQgJgfgGglIgDgeIM7ieICFgZIgDAdQgEAkgLAeQghBfhNAKQgqAFgxgvIgogzIgjBBQgtA+gyAAQgyAAgggsIgWgrIgYBTQgOAhgPAVQgYAegdAAQgpAAgdgzIgKgTIgXhEIgIAfQgHAXgHAWIgLAaQguBnhAAAQhBAAgghkgAb0AvQgRgZgOgcQBogbBlggIrxghIAAgEIMRAUIACAgQABAlgFAfQgPBnhAALIgMABQg5AAg4hWgAYVAkQBUgRBSgTIgEAYQgVBKgvAIIgIAAQgrAAgrhGgAWoA4QgIADgJACIgOABIAfgGg");
	this.shape_26.setTransform(198.9,182.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// efx
	this.instance = new lib.flame();
	this.instance.setTransform(260,329.9,1,1,0,0,0,62.6,32.9);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,204,1)",0,0,5);
	this.instance.filters = [new cjs.BlurFilter(8, 8, 3)];
	this.instance.cache(-2,-2,129,70);

	this.instance_1 = new lib.flame();
	this.instance_1.setTransform(38,337.7,1,1,0,0,0,62.6,32.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,204,1)",0,0,5);
	this.instance_1.filters = [new cjs.BlurFilter(8, 8, 3)];
	this.instance_1.cache(-2,-2,129,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}},{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_1,p:{scaleX:0.95,scaleY:0.95}},{t:this.instance,p:{scaleX:0.95,scaleY:0.95}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-1.1,438.7,390);


(lib.stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mini_stars();
	this.instance.setTransform(1116.9,231.8,1,1,0,0,0,1194.2,231.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:34.4},435).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.3,0,2388.4,803.6);


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


(lib.planet1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bluePlanet();
	this.instance.setTransform(37,37,1,1,0,0,0,37,37);
	this.instance.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 0, 0, 0), new cjs.BlurFilter(5, 5, 1)];
	this.instance.cache(-2,-2,78,78);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-3,84,83);


(lib.bkgd_space = function() {
	this.initialize();

	// mc_stars
	this.instance = new lib.stars();
	this.instance.setTransform(640.5,258.6,1,1,0,0,0,585.5,231.8);

	// stars
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape.setTransform(349.1,533.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_1.setTransform(277.5,629.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_2.setTransform(33.4,640);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_3.setTransform(73.3,603.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_4.setTransform(52.2,521.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_5.setTransform(122.6,453.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_6.setTransform(80.4,324.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_7.setTransform(164.8,208.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_8.setTransform(297.4,394.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_9.setTransform(494.5,394.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_10.setTransform(644.7,238.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_11.setTransform(1197.3,327.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_12.setTransform(1221.9,513.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_13.setTransform(1150.4,625.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_14.setTransform(1030.7,493.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_15.setTransform(812.5,650.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_16.setTransform(738.6,513.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_17.setTransform(648.2,569.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_18.setTransform(837.1,547.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_19.setTransform(1057.7,547.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_20.setTransform(1003.7,340.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_21.setTransform(1116.4,391.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_22.setTransform(1135.1,243.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_23.setTransform(861.8,364.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_24.setTransform(769.1,259.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_25.setTransform(129.7,327.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_26.setTransform(277.5,439.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_27.setTransform(367.8,290.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_28.setTransform(719.8,453.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_29.setTransform(543.8,620);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_30.setTransform(464,536.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_31.setTransform(168.4,609.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_32.setTransform(349.1,323.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_33.setTransform(277.5,419.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_34.setTransform(33.4,430);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_35.setTransform(73.3,393.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_36.setTransform(52.2,311.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_37.setTransform(122.6,243.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_38.setTransform(80.4,114.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_39.setTransform(164.8,-1.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_40.setTransform(297.4,184.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_41.setTransform(494.5,184.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_42.setTransform(644.7,28.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_43.setTransform(1197.3,117.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_44.setTransform(1221.9,303.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_45.setTransform(1150.4,415.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_46.setTransform(1030.7,283.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_47.setTransform(812.5,440.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_48.setTransform(738.6,303.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_49.setTransform(648.2,359.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_50.setTransform(837.1,337.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_51.setTransform(1057.7,337.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_52.setTransform(1003.7,130.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_53.setTransform(1116.4,181.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_54.setTransform(1135.1,33.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_55.setTransform(861.8,154.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_56.setTransform(769.1,49.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_57.setTransform(129.7,117.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_58.setTransform(277.5,229.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_59.setTransform(367.8,80.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_60.setTransform(719.8,243.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_61.setTransform(543.8,410);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_62.setTransform(464,326.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.4)").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_63.setTransform(168.4,399.5);

	// blk
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0B112C").s().p("EhhpA6zMAAAh1lMDDTAAAMAAAB1lg");
	this.shape_64.setTransform(625,376.4);

	this.addChild(this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.3,-3.5,2388.4,834);


(lib.ballshadow = function() {
	this.initialize();

	// hidden
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0)").s().p("AofD1IAAnpIQ/AAIAAHpg");
	this.shape.setTransform(44.6,7);

	// blur
	this.instance = new lib.ballShadow();
	this.instance.setTransform(42.3,7.4,1,1,0,0,0,42.3,7.4);
	this.instance.alpha = 0.398;
	this.instance.filters = [new cjs.BlurFilter(8, 8, 3)];
	this.instance.cache(-2,-2,89,19);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11,-17.5,110,49.2);


(lib.lab_machine01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AgXAZQgKgLAAgOQAAgNAKgLQAKgKANAAQAOAAALAKQAJALABANQgBAOgJALQgLAJgOABQgNgBgKgJg");
	this.shape.setTransform(230.3,81.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#127E7B").s().p("A10BTIAAilMArpAAAIAAClg");
	this.shape_1.setTransform(139.8,124.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E6E6").s().p("AHQEUIgfgmIgQgUIhQhcIgOgPIgegfIgiggIgRgQQgJgKgJgGIglgfIgTgQIhSg+IgWgOIgtgbIgVgMIhGghIgtgUIgugQQgagJgTgEIhugbIiTgPQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAABAAIBpACIAjACIB8AUQASADAcAIIAwANIAwARIBHAfIAZALIAwAaIAXANIBbA7IAVAPIAoAhIATASIAjAgIAPASIAeAjIAMASIAiAxIAhA5QAFAJAGAPIAUAtQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgBAAIgCgBg");
	this.shape_2.setTransform(178.3,43.5);

	this.instance = new lib.lab_machinebubble();
	this.instance.setTransform(138.6,63.3,0.651,0.651,0,0,0,183.9,99.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(2).p("AmpstINDAwAmpp5INTAAAmpmPINDglAmpiqINTBTAmpBPINTAmAmpFEINDhSAmpIBINDA6AmpLhINTgNAmpweINTBwAmpPZINTBG");
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
p.nominalBounds = new cjs.Rectangle(0,0,279.6,484.8);


(lib.lab_computer02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mc_screen();
	this.instance.setTransform(110.6,120.4,1,1,0,0,0,62.3,91.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#65D1D4").ss(2).p("AKggwIAqAsIBpBsANxgwIjRAAAJDiSIBdBiAMtiSIBEBiACegwIAFAxIELgCIgagvIj2AAIkDAAIABA0IADCQAFfiSIA1BiIEMAAACTiSIALBiACjABIAPCTAGugBIEcgDIDDgDIgcgpIDPAAAGugBIBRCVAONgHIExgEAONgHIBrCbAtegwIgwA/IhkCFAsUiSIhKBiIkfAAAy9ASIEvgDID4gEIAUg7IjcAAAhoiSIADBiAqWALIE+gEIACg3IksAAAlSiSIgEBiIDxAAAphiSIghBiAlYAHIgGCNAqWALIguCJAhkAEIj0ADAhkAEIEHgD");
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
	this.shape_5.graphics.f().s("#0F4A46").p("AGrmpIAiFmAIthzIAQlwAKGigIgIldANrpdIAHFGAM2pHIgEFRALRofIApFFApmgBIAAHMAtwJeIgBnzArMILIgmnUAFUmGIAAGAIAAAFAmAFlIACnDAoUGvIAVnYADnAvIAFmIAisD6IgsmbAAqCOIgtmFAB1BoIAGmTAj7EiIghmoAhRjYIAAGf");
	this.shape_5.setTransform(356.1,397.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0D3734").p("ACNlqIhbAhIAGDqIBVgKIAAkBIAAhsIheARIADB8AAvnFIhrAUIhNAPIAACdIBSgeIAHDRIBogNIAEC9IhkAtIAFCKIBjgmIBNgdIAAiXIAAikAiJkFIAAC+IBZgLIAIDdIhhAqIAACHIBmgnAA8BeIBRgjAg8mxIAFCOIBpgmABDF7IBKghIAAiIABADvIADCMAiJE8IAACZIBrgvIgFiRAgeGmIBhgrABADvIgEiRAiPE+IAGgCAiJC1IgGADAiJhHIAAD8AiPhGIAGgBAiJkFIgGAC");
	this.shape_6.setTransform(419,280.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D3835").s().p("Al8CFIAAANIgHEJIgEEIIMOkzIgUwYIliBXICygvIC4gzIAaQrIsoE8g");
	this.shape_7.setTransform(320.5,306.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#27C2B6").s().p("AryG/IAHkIIAAgOIAAgEIAAgEIAUptIF0hfIACgBIAEgBIFhhWIAUQXIsPEzgAHgBcIAAiEIBhgrIAFCIIgFiIIgIjfIhZALIBZgLIAIDfIhhArIAAj/IAAi+IBSgdIAHDQIBpgMIBWgKIAAClIhRAkIgFi/IAFC/IhmAsIBmgsIBRgkIAACYIhOAaIAECMIhkArIgEiRIAECRIhqAwgAHgBcIBmgngAJGA1IBkgmIgDiOIADCOgAKqAPIBOgaIAACGIhKAggAL4gLgAKnh/gAIyoCIBrgnIhrAnIgFiOIAFCOIhSAdIAAidIBNgOIBtgUIADB7IBbghIAAECIhWAKIgFjrIAFDrIhpAMgACXk7QgHgGAAgLQAAgJAHgHQAHgIAJABQAKgBAHAIQAHAHAAAJQAAALgHAGQgHAIgKgBQgJABgHgIgAKik+gAL4lIgACXnxQgHgIAAgJQAAgKAHgIQAHgGAJgBQAKABAHAGQAHAIAAAKQAAAJgHAIQgHAGgKABQgJgBgHgGgAIyoCgAIyoCgAIyoCgAKaqkIBegSIAABsIhbAhgACXqdQgHgHAAgKQAAgKAHgIQAHgHAJAAQAKAAAHAHQAHAIAAAKQAAAKgHAHQgHAGgKABQgJgBgHgGg");
	this.shape_8.setTransform(357.2,302.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#43938D").s().p("ArIfCIFRiLIFRiJIKakPIACyfIGohpMgAWghFIilAAIAUfjI7LFGIgBgCIaylZIgQ/XIAAgMIDPAAIAAAMIAGUSIAJNGImjBtIACSgIqqEOQjiBZhxAsIlUCDgAwq+0IAAgDIAagDIAAADIBlUPg");
	this.shape_9.setTransform(326.1,198.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#166963").s().p("A3YdOMAGJg/5IE3hQIB+UMIhl0PIddAAIAQfZI6yFXIABACIbLlEIgU/lIClAAMAAWAhHImoBpIgCSdIqcEPIlPCJIlRCLIABACIFUiDQBvgsDihZIKskOIgCyeIGjhtIgJtIIgG0SICfAAIANAAMAAAA5QIgpAUIgHlGIAHFGIhBAhIAElRIgEFRIg4AcIgplFIApFFIh0A6IgIldIAIFdIhYAtIAQlxIgQFxIhgAwIgilmIAiFmIh5A9IAAmAIAAGAIhuA3IAFmKIgFGKIhxA5IAGmVIgGGVIhMAmIgumHIAuGHIjXBsIgsmdIAsGdIhPAoIghmqIAhGqIiGBDIADnFIgDHFIiTBKIAUnaIgUHaIi3BcIglnUIAlHUIijBTIgCnzIACHzIhFAigEgApAhKIAAnOgAHrdGIAAmhgAXMQSIgjAOIg2AWIhlAoIhTAiIhAAZIiRA7IgBAAIhXAjI0wIWIUwoWIBXgjIABAAICRg7IBAgZIBTgiIBlgoIA2gWIAjgOMAAAg0QgAGcBpIizAwIgEABIgCAAIlyBfIgUJwIAAADIAAAEIgYIvIMok7IgZwtgAQoO9IBqgvIBkgsIBKggIAAiIIAAiXIAAimIAAkCIAAhrIheARIhtAUIhNAOIAACeIgHACIAHgCIAAC+IgHAAIAHAAIAAD+IgHADIAHgDIAACGIgHADIAHgDgALfFpQgHAHAAAKQAAAKAHAHQAHAHAJAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgHgKAAQgJAAgHAHgALfCyQgHAHAAAKQAAAKAHAHQAHAHAJAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgHgKAAQgJAAgHAHgALfAGQgHAHAAAKQAAAKAHAHQAHAHAJAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgGgKAAQgJAAgHAGgAWwVmgAQoMjgAQoKdgAQoGfgAQoDhg");
	this.shape_10.setTransform(298.8,231.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.8,457.7,567);


(lib.lab_bigmachine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#53958D").ss(6).p("AhJjSQAAhGAWgyQAWgzAdAAQAfAAAVAzQAWAxAABHQAABHgWAyQgVAygfAAQgdAAgWgyQgWgyAAhHgAA0BbQAWAxAABHQAABHgWAyQgVAygfAAQgdAAgWgyQgWgyAAhHQAAhGAWgyQAWgyAdAAQAfAAAVAyg");
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
	this.shape_3.graphics.f("#1C6B61").s().p("EgQRA2qMAABgwaIOPvSIAApdI5V3tIAAsdMA2sAAAIAANEI4ZXDIAAJGIOGPqMgANAwcg");
	this.shape_3.setTransform(175.1,349.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#4D4D4D").ss(40).p("AGEIxIAAuaIvPAA");
	this.shape_4.setTransform(317.9,643.5);

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


(lib.Blue_character_walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_eyes
	this.instance = new lib.blue_eyes();
	this.instance.setTransform(92.2,74.5,1,1,0,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:41.1,regY:33.2,rotation:-2.2,x:86.7,y:70.4},5).to({regX:41,regY:33.1,rotation:0,x:98.8,y:74.5},4).to({regX:41.1,regY:33.2,rotation:-2.2,x:86.7,y:70.4},4).to({regX:41,regY:33.1,rotation:0,x:92.2,y:74.5},5).wait(1).to({regX:41.1,regY:33.2,rotation:-2.2,x:86.7,y:70.4},5).to({regX:41,regY:33.1,rotation:0,x:98.8,y:74.5},4).to({regX:41.1,regY:33.2,rotation:-2.2,x:86.7,y:70.4},4).to({regX:41,regY:33.1,rotation:0,x:92.2,y:74.5},5).wait(1).to({regX:41.1,regY:33.2,rotation:-2.2,x:86.7,y:70.4},5).to({regX:41,regY:33.1,rotation:0,x:98.8,y:74.5},4).to({regX:41.1,regY:33.2,rotation:-2.2,x:86.7,y:70.4},4).to({regX:41,regY:33.1,rotation:0,x:92.2,y:74.5},5).wait(1).to({regX:41.1,regY:33.2,rotation:-2.2,x:86.7,y:70.4},5).to({regX:41,regY:33.1,rotation:0,x:98.8,y:74.5},4).to({regX:41.1,regY:33.2,rotation:-2.2,x:86.7,y:70.4},4).to({regX:41,regY:33.1,rotation:0,x:92.2,y:74.5},5).wait(1));

	// blue_arm_R
	this.instance_1 = new lib.blue_arm_R();
	this.instance_1.setTransform(40.4,134.4,1,1,-9.5,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.3,x:37.1,y:132.1},5).to({rotation:19,x:52.6,y:134.4},4).to({rotation:4.3,x:37.1,y:132.1},4).to({rotation:-9.5,x:40.4,y:134.4},5).wait(1).to({rotation:4.3,x:37.1,y:132.1},5).to({rotation:19,x:52.6,y:134.4},4).to({rotation:4.3,x:37.1,y:132.1},4).to({rotation:-9.5,x:40.4,y:134.4},5).wait(1).to({rotation:4.3,x:37.1,y:132.1},5).to({rotation:19,x:52.6,y:134.4},4).to({rotation:4.3,x:37.1,y:132.1},4).to({rotation:-9.5,x:40.4,y:134.4},5).wait(1).to({rotation:4.3,x:37.1,y:132.1},5).to({rotation:19,x:52.6,y:134.4},4).to({rotation:4.3,x:37.1,y:132.1},4).to({rotation:-9.5,x:40.4,y:134.4},5).wait(1));

	// blue_mouth
	this.instance_2 = new lib.blue_mouth();
	this.instance_2.setTransform(87.7,118.4,1,1,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-2.2,x:83.8,y:114.4},5).to({rotation:0,x:94.3,y:118.4},4).to({rotation:-2.2,x:83.8,y:114.4},4).to({rotation:0,x:87.7,y:118.4},5).wait(1).to({rotation:-2.2,x:83.8,y:114.4},5).to({rotation:0,x:94.3,y:118.4},4).to({rotation:-2.2,x:83.8,y:114.4},4).to({rotation:0,x:87.7,y:118.4},5).wait(1).to({rotation:-2.2,x:83.8,y:114.4},5).to({rotation:0,x:94.3,y:118.4},4).to({rotation:-2.2,x:83.8,y:114.4},4).to({rotation:0,x:87.7,y:118.4},5).wait(1).to({rotation:-2.2,x:83.8,y:114.4},5).to({rotation:0,x:94.3,y:118.4},4).to({rotation:-2.2,x:83.8,y:114.4},4).to({rotation:0,x:87.7,y:118.4},5).wait(1));

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(84.1,159.3,1,1,0,0,0,76.9,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:77,rotation:-2.2,x:81.8,y:155.4},5).to({regX:76.9,rotation:0,x:84.1,y:159.3},4).to({regX:77,rotation:-2.2,x:81.8,y:155.4},4).to({regX:76.9,rotation:0,x:84.1,y:159.3},5).wait(1).to({regX:77,rotation:-2.2,x:81.8,y:155.4},5).to({regX:76.9,rotation:0,x:84.1,y:159.3},4).to({regX:77,rotation:-2.2,x:81.8,y:155.4},4).to({regX:76.9,rotation:0,x:84.1,y:159.3},5).wait(1).to({regX:77,rotation:-2.2,x:81.8,y:155.4},5).to({regX:76.9,rotation:0,x:84.1,y:159.3},4).to({regX:77,rotation:-2.2,x:81.8,y:155.4},4).to({regX:76.9,rotation:0,x:84.1,y:159.3},5).wait(1).to({regX:77,rotation:-2.2,x:81.8,y:155.4},5).to({regX:76.9,rotation:0,x:84.1,y:159.3},4).to({regX:77,rotation:-2.2,x:81.8,y:155.4},4).to({regX:76.9,rotation:0,x:84.1,y:159.3},5).wait(1));

	// blue_ear_R
	this.instance_4 = new lib.blue_ear_R();
	this.instance_4.setTransform(31.5,49,1,1,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-2.2,x:24.9,y:47.2},5).to({regX:12.7,rotation:6.2,x:33.9,y:49},4).to({regX:12.6,rotation:-2.2,x:24.9,y:47.2},4).to({rotation:0,x:31.5,y:49},5).wait(1).to({rotation:-2.2,x:24.9,y:47.2},5).to({regX:12.7,rotation:6.2,x:33.9,y:49},4).to({regX:12.6,rotation:-2.2,x:24.9,y:47.2},4).to({rotation:0,x:31.5,y:49},5).wait(1).to({rotation:-2.2,x:24.9,y:47.2},5).to({regX:12.7,rotation:6.2,x:33.9,y:49},4).to({regX:12.6,rotation:-2.2,x:24.9,y:47.2},4).to({rotation:0,x:31.5,y:49},5).wait(1).to({rotation:-2.2,x:24.9,y:47.2},5).to({regX:12.7,rotation:6.2,x:33.9,y:49},4).to({regX:12.6,rotation:-2.2,x:24.9,y:47.2},4).to({rotation:0,x:31.5,y:49},5).wait(1));

	// blue_ear_L
	this.instance_5 = new lib.blue_ear_L();
	this.instance_5.setTransform(86.3,36.4,1,1,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-2.2,x:79.2,y:31.8},5).to({regX:15.3,rotation:4.5,x:86.4,y:38.4},4).to({regX:15.2,rotation:-2.2,x:79.2,y:31.8},4).to({rotation:0,x:86.3,y:36.4},5).wait(1).to({rotation:-2.2,x:79.2,y:31.8},5).to({regX:15.3,rotation:4.5,x:86.4,y:38.4},4).to({regX:15.2,rotation:-2.2,x:79.2,y:31.8},4).to({rotation:0,x:86.3,y:36.4},5).wait(1).to({rotation:-2.2,x:79.2,y:31.8},5).to({regX:15.3,rotation:4.5,x:86.4,y:38.4},4).to({regX:15.2,rotation:-2.2,x:79.2,y:31.8},4).to({rotation:0,x:86.3,y:36.4},5).wait(1).to({rotation:-2.2,x:79.2,y:31.8},5).to({regX:15.3,rotation:4.5,x:86.4,y:38.4},4).to({regX:15.2,rotation:-2.2,x:79.2,y:31.8},4).to({rotation:0,x:86.3,y:36.4},5).wait(1));

	// blue_leg_L
	this.instance_6 = new lib.blue_leg_L();
	this.instance_6.setTransform(105.1,210.5,0.994,0.994,0,0,0,5.2,5);

	this.instance_7 = new lib.blue_leg_L_01();
	this.instance_7.setTransform(52.1,198.2,0.994,0.994,0,0,0,5.2,5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:52.1},8).to({_off:true},1).wait(4).to({_off:false,x:105.1},4).wait(2).to({x:52.1},8).to({_off:true},1).wait(4).to({_off:false,x:105.1},4).wait(2).to({x:52.1},8).to({_off:true},1).wait(4).to({_off:false,x:105.1},4).wait(2).to({x:52.1},8).to({_off:true},1).wait(4).to({_off:false,x:105.1},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({regX:5.1,x:78.5,y:192.2},4).to({_off:true,regX:5.2,x:105.1,y:210.5},4).wait(11).to({_off:false,x:52.1,y:198.2},0).to({regX:5.1,x:78.5,y:192.2},4).to({_off:true,regX:5.2,x:105.1,y:210.5},4).wait(11).to({_off:false,x:52.1,y:198.2},0).to({regX:5.1,x:78.5,y:192.2},4).to({_off:true,regX:5.2,x:105.1,y:210.5},4).wait(11).to({_off:false,x:52.1,y:198.2},0).to({regX:5.1,x:78.5,y:192.2},4).to({_off:true,regX:5.2,x:105.1,y:210.5},4).wait(1));

	// blue_leg_R
	this.instance_8 = new lib.blue_leg_R();
	this.instance_8.setTransform(45.2,214.1,0.994,0.994,0,0,0,8.8,3.6);

	this.instance_9 = new lib.blue_leg_R_01();
	this.instance_9.setTransform(45.2,203.9,0.994,0.994,0,0,0,8.8,3.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(4).to({_off:false,x:69.6},4).wait(1).to({x:45.2},8).wait(1).to({_off:true},1).wait(4).to({_off:false,x:69.6},4).wait(1).to({x:45.2},8).wait(1).to({_off:true},1).wait(4).to({_off:false,x:69.6},4).wait(1).to({x:45.2},8).wait(1).to({_off:true},1).wait(4).to({_off:false,x:69.6},4).wait(1).to({x:45.2},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({x:54.9,y:197.8},4).to({_off:true,x:69.6,y:214.1},4).wait(11).to({_off:false,x:45.2,y:203.9},0).to({x:54.9,y:197.8},4).to({_off:true,x:69.6,y:214.1},4).wait(11).to({_off:false,x:45.2,y:203.9},0).to({x:54.9,y:197.8},4).to({_off:true,x:69.6,y:214.1},4).wait(11).to({_off:false,x:45.2,y:203.9},0).to({x:54.9,y:197.8},4).to({_off:true,x:69.6,y:214.1},4).wait(10));

	// blue_arm_L
	this.instance_10 = new lib.blue_arm_L();
	this.instance_10.setTransform(119.2,130,1,1,0,-127.2,52.8,0.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:0,skewX:-142.6,skewY:37.4,x:115.6,y:124.6},5).to({regX:0.1,skewX:-164.9,skewY:15.1,x:106.9,y:130},4).to({regX:0,skewX:-142.4,skewY:37.6,x:115.6,y:124.7},4).to({regX:0.1,skewX:-127.2,skewY:52.8,x:119.2,y:130},5).wait(1).to({regX:0,skewX:-142.6,skewY:37.4,x:115.6,y:124.6},5).to({regX:0.1,skewX:-164.9,skewY:15.1,x:106.9,y:130},4).to({regX:0,skewX:-142.4,skewY:37.6,x:115.6,y:124.7},4).to({regX:0.1,skewX:-127.2,skewY:52.8,x:119.2,y:130},5).wait(1).to({regX:0,skewX:-142.6,skewY:37.4,x:115.6,y:124.6},5).to({regX:0.1,skewX:-164.9,skewY:15.1,x:106.9,y:130},4).to({regX:0,skewX:-142.4,skewY:37.6,x:115.6,y:124.7},4).to({regX:0.1,skewX:-127.2,skewY:52.8,x:119.2,y:130},5).wait(1).to({regX:0,skewX:-142.6,skewY:37.4,x:115.6,y:124.6},5).to({regX:0.1,skewX:-164.9,skewY:15.1,x:106.9,y:130},4).to({regX:0,skewX:-142.4,skewY:37.6,x:115.6,y:124.7},4).to({regX:0.1,skewX:-127.2,skewY:52.8,x:119.2,y:130},5).wait(1));

	// shadow
	this.instance_11 = new lib.shadow02();
	this.instance_11.setTransform(87.6,273.6,0.816,0.816,0,0,0,90,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,5.5,183,301.9);


(lib.Blue_character_talkNEW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_eyes
	this.instance = new lib.blue_eyes();
	this.instance.setTransform(92.2,74.5,1,1,0,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

	// blue_arm_R
	this.instance_1 = new lib.blue_arm_R();
	this.instance_1.setTransform(40.4,134.4,1,1,-9.5,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135));

	// blue_mouth
	this.instance_2 = new lib.blue_mouth_talk();
	this.instance_2.setTransform(87.7,118.4,1,1,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135));

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(84.1,159.3,1,1,0,0,0,76.9,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(135));

	// blue_ear_R
	this.instance_4 = new lib.blue_ear_R();
	this.instance_4.setTransform(31.5,49,1,1,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(135));

	// blue_ear_L
	this.instance_5 = new lib.blue_ear_L();
	this.instance_5.setTransform(86.3,36.4,1,1,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(135));

	// blue_leg_L
	this.instance_6 = new lib.blue_leg_L();
	this.instance_6.setTransform(105.1,210.5,0.994,0.994,0,0,0,5.2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(135));

	// blue_leg_R
	this.instance_7 = new lib.blue_leg_R();
	this.instance_7.setTransform(45.2,214.1,0.994,0.994,0,0,0,8.8,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(135));

	// blue_arm_L
	this.instance_8 = new lib.blue_arm_L();
	this.instance_8.setTransform(119.2,130,1,1,0,-127.2,52.8,0.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(135));

	// shadow
	this.instance_9 = new lib.shadow02();
	this.instance_9.setTransform(87.6,273.6,0.816,0.816,0,0,0,90,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,5.5,183,301.9);


(lib.Blue_character_stillNEW = function() {
	this.initialize();

	// blue_eyes
	this.instance = new lib.blue_eyes();
	this.instance.setTransform(92.2,74.5,1,1,0,0,0,41,33.1);

	// blue_arm_R
	this.instance_1 = new lib.blue_arm_R();
	this.instance_1.setTransform(40.4,134.4,1,1,-9.5,0,0,18.2,4.5);

	// blue_mouth
	this.instance_2 = new lib.blue_mouth();
	this.instance_2.setTransform(87.7,118.4,1,1,0,0,0,30.4,12);

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(84.1,159.3,1,1,0,0,0,76.9,124.8);

	// blue_ear_R
	this.instance_4 = new lib.blue_ear_R();
	this.instance_4.setTransform(31.5,49,1,1,0,0,0,12.6,38.1);

	// blue_ear_L
	this.instance_5 = new lib.blue_ear_L();
	this.instance_5.setTransform(86.3,36.4,1,1,0,0,0,15.2,30.9);

	// blue_leg_L
	this.instance_6 = new lib.blue_leg_L();
	this.instance_6.setTransform(105.1,210.5,0.994,0.994,0,0,0,5.2,5);

	// blue_leg_R
	this.instance_7 = new lib.blue_leg_R();
	this.instance_7.setTransform(45.2,214.1,0.994,0.994,0,0,0,8.8,3.6);

	// blue_arm_L
	this.instance_8 = new lib.blue_arm_L();
	this.instance_8.setTransform(119.2,130,1,1,0,-127.2,52.8,0.1,76.7);

	// shadow
	this.instance_9 = new lib.shadow02();
	this.instance_9.setTransform(87.6,273.6,0.816,0.816,0,0,0,90,17.4);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,5.5,183,301.9);


(lib.Blue_character_runhandNEW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_eyes
	this.instance = new lib.blue_eyes();
	this.instance.setTransform(129.5,74.5,1,1,0,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1));

	// blue_arm_R
	this.instance_1 = new lib.blue_arm_R();
	this.instance_1.setTransform(77.7,134.3,1,1,-9.5,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1));

	// blue_mouth
	this.instance_2 = new lib.blue_mouth();
	this.instance_2.setTransform(125,118.3,1,1,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1));

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(121.5,159.3,1,1,0,0,0,77,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1));

	// blue_ear_R
	this.instance_4 = new lib.blue_ear_R();
	this.instance_4.setTransform(68.8,49,1,1,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1));

	// blue_ear_L
	this.instance_5 = new lib.blue_ear_L();
	this.instance_5.setTransform(123.6,36.5,1,1,0,0,0,15.2,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1));

	// blue_leg_L
	this.instance_6 = new lib.blue_leg_L();
	this.instance_6.setTransform(138.8,211.1,0.971,0.971,-60,0,0,5.2,5);

	this.instance_7 = new lib.blue_leg_L_bend01();
	this.instance_7.setTransform(112.9,211.2,0.969,0.969,-29.9,0,0,5.1,5.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.blue_leg_L_01();
	this.instance_8.setTransform(87.1,200.1,0.971,0.971,0,0,0,5.2,5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(4));

	// blue_leg_R
	this.instance_9 = new lib.blue_leg_R_01();
	this.instance_9.setTransform(80.2,204.6,0.971,0.971,90,0,0,8.8,3.6);

	this.instance_10 = new lib.blue_leg_R();
	this.instance_10.setTransform(104.2,214.6,0.971,0.971,0,0,0,8.8,3.6);
	this.instance_10._off = true;

	this.instance_11 = new lib.blue_leg_R_bend01();
	this.instance_11.setTransform(104.3,210.3,0.971,0.971,-24.2,0,0,8.8,3.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(4));

	// blue_arm_L
	this.instance_12 = new lib.blue_arm_L();
	this.instance_12.setTransform(138.3,130,1,1,73.7,0,0,0.1,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(96));

	// Layer 1
	this.instance_13 = new lib.main_shadow();
	this.instance_13.setTransform(110.6,279.6,0.975,1.241,0,0,0,113.5,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5.5,227.2,301.6);


(lib.Blue_character_run = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_eyes
	this.instance = new lib.blue_eyes();
	this.instance.setTransform(129.5,74.5,1,1,0,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:136.1,y:74.5},3).wait(1).to({regX:41.1,rotation:-2.2,x:124,y:70.3},2).to({regX:41,rotation:0,x:129.5,y:74.5},3).wait(1));

	// blue_arm_R
	this.instance_1 = new lib.blue_arm_R();
	this.instance_1.setTransform(77.7,134.3,1,1,-9.5,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:19,x:89.9,y:134.4},3).wait(1).to({rotation:4.3,x:74.4,y:132.1},2).to({rotation:-9.5,x:77.7,y:134.3},3).wait(1));

	// blue_mouth
	this.instance_2 = new lib.blue_mouth();
	this.instance_2.setTransform(125,118.3,1,1,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1).to({regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regX:30.3,regY:12,rotation:0,x:131.5,y:118.3},3).wait(1).to({regX:30.4,regY:12.1,rotation:-2.2,x:121.1,y:114.4},2).to({regY:12,rotation:0,x:125,y:118.3},3).wait(1));

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(121.5,159.3,1,1,0,0,0,77,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1).to({rotation:-2.2,x:119.1,y:155.4},2).to({rotation:0,x:121.5,y:159.3},3).wait(1));

	// blue_ear_R
	this.instance_4 = new lib.blue_ear_R();
	this.instance_4.setTransform(68.8,49,1,1,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.7,rotation:6.2,x:71.2,y:49},3).wait(1).to({regX:12.5,rotation:-2.2,x:62.1,y:47.2},2).to({regX:12.6,rotation:0,x:68.8,y:49},3).wait(1));

	// blue_ear_L
	this.instance_5 = new lib.blue_ear_L();
	this.instance_5.setTransform(123.6,36.5,1,1,0,0,0,15.2,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1).to({regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regX:15.3,regY:30.9,rotation:4.5,x:123.6,y:38.4},3).wait(1).to({regX:15.2,regY:31.1,rotation:-2.2,x:116.4,y:32},2).to({regY:31,rotation:0,x:123.6,y:36.5},3).wait(1));

	// blue_leg_L
	this.instance_6 = new lib.blue_leg_L();
	this.instance_6.setTransform(138.8,211.1,0.971,0.971,-60,0,0,5.2,5);

	this.instance_7 = new lib.blue_leg_L_bend01();
	this.instance_7.setTransform(112.9,211.2,0.969,0.969,-29.9,0,0,5.1,5.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.blue_leg_L_01();
	this.instance_8.setTransform(87.1,200.1,0.971,0.971,0,0,0,5.2,5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2).to({_off:true},1).wait(1).to({_off:false,regY:5.1,rotation:0,x:87.1},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,regY:5,rotation:-60,x:138.8},0).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:-29.9},0).to({_off:true},1).wait(3).to({_off:false,regX:5.2,regY:5,scaleX:0.97,scaleY:0.97,rotation:99.8,x:80.1,y:204.6},0).to({_off:true},1).wait(3).to({_off:false,regX:5.1,regY:5.1,scaleX:0.97,scaleY:0.97,rotation:-29.9,x:112.9,y:211.2},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({regX:5.3,rotation:65.5,x:96,y:201.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({regX:5.2,rotation:0,x:87.1,y:200.1},0).to({_off:true},1).wait(4));

	// blue_leg_R
	this.instance_9 = new lib.blue_leg_R_01();
	this.instance_9.setTransform(80.2,204.6,0.971,0.971,90,0,0,8.8,3.6);

	this.instance_10 = new lib.blue_leg_R();
	this.instance_10.setTransform(104.2,214.6,0.971,0.971,0,0,0,8.8,3.6);
	this.instance_10._off = true;

	this.instance_11 = new lib.blue_leg_R_bend01();
	this.instance_11.setTransform(104.3,210.3,0.971,0.971,-24.2,0,0,8.8,3.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(3).to({rotation:0,x:89.8,y:198.6},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({rotation:90,x:80.2,y:204.6},0).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,rotation:-75.7,x:136.3,y:209.1},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,x:104.2,y:214.6},0).to({_off:true},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(7).to({_off:false,rotation:-24.2},0).wait(1).to({rotation:-62.7,x:115.8,y:209.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({rotation:-24.2,x:104.3,y:210.3},0).to({_off:true},1).wait(4));

	// blue_arm_L
	this.instance_12 = new lib.blue_arm_L();
	this.instance_12.setTransform(156.4,130,1,1,0,-127.2,52.8,0.1,76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:0,regY:76.7,skewX:-142.6,skewY:37.4,x:152.9,y:124.6},2).to({skewX:-164.9,skewY:15.1,x:144.1,y:129.9},3).wait(1).to({skewY:15.1},0).to({skewX:-142.4,skewY:37.6,x:152.9,y:124.7},2).to({regX:0.1,regY:76.6,skewX:-127.2,skewY:52.8,x:156.4,y:130},3).wait(1).to({regX:0,regY:76.7,skewX:-142.6,skewY:37.4,x:152.9,y:124.6},2).to({skewX:-164.9,skewY:15.1,x:144.1,y:129.9},3).wait(1).to({skewY:15.1},0).to({skewX:-142.4,skewY:37.6,x:152.9,y:124.7},2).to({regX:0.1,regY:76.6,skewX:-127.2,skewY:52.8,x:156.4,y:130},3).wait(1).to({regX:0,regY:76.7,skewX:-142.6,skewY:37.4,x:152.9,y:124.6},2).to({skewX:-164.9,skewY:15.1,x:144.1,y:129.9},3).wait(1).to({skewY:15.1},0).to({skewX:-142.4,skewY:37.6,x:152.9,y:124.7},2).to({regX:0.1,regY:76.6,skewX:-127.2,skewY:52.8,x:156.4,y:130},3).wait(1).to({regX:0,regY:76.7,skewX:-142.6,skewY:37.4,x:152.9,y:124.6},2).to({skewX:-164.9,skewY:15.1,x:144.1,y:129.9},3).wait(1).to({skewY:15.1},0).to({skewX:-142.4,skewY:37.6,x:152.9,y:124.7},2).to({regX:0.1,regY:76.6,skewX:-127.2,skewY:52.8,x:156.4,y:130},3).wait(1).to({regX:0,regY:76.7,skewX:-142.6,skewY:37.4,x:152.9,y:124.6},2).to({skewX:-164.9,skewY:15.1,x:144.1,y:129.9},3).wait(1).to({skewY:15.1},0).to({skewX:-142.4,skewY:37.6,x:152.9,y:124.7},2).to({regX:0.1,regY:76.6,skewX:-127.2,skewY:52.8,x:156.4,y:130},3).wait(1).to({regX:0,regY:76.7,skewX:-142.6,skewY:37.4,x:152.9,y:124.6},2).to({skewX:-164.9,skewY:15.1,x:144.1,y:129.9},3).wait(1).to({skewY:15.1},0).to({skewX:-142.4,skewY:37.6,x:152.9,y:124.7},2).to({regX:0.1,regY:76.6,skewX:-127.2,skewY:52.8,x:156.4,y:130},3).wait(1).to({regX:0,regY:76.7,skewX:-142.6,skewY:37.4,x:152.9,y:124.6},2).to({skewX:-164.9,skewY:15.1,x:144.1,y:129.9},3).wait(1).to({skewY:15.1},0).to({skewX:-142.4,skewY:37.6,x:152.9,y:124.7},2).to({regX:0.1,regY:76.6,skewX:-127.2,skewY:52.8,x:156.4,y:130},3).wait(1).to({regX:0,regY:76.7,skewX:-142.6,skewY:37.4,x:152.9,y:124.6},2).to({skewX:-164.9,skewY:15.1,x:144.1,y:129.9},3).wait(1).to({skewY:15.1},0).to({skewX:-142.4,skewY:37.6,x:152.9,y:124.7},2).to({regX:0.1,regY:76.6,skewX:-127.2,skewY:52.8,x:156.4,y:130},3).wait(1));

	// Layer 1
	this.instance_13 = new lib.main_shadow();
	this.instance_13.setTransform(110.6,279.6,0.975,1.241,0,0,0,113.5,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1).to({regX:113.4,scaleX:0.6},2).to({regX:113.5,scaleX:0.98},3).to({regX:113.4,scaleX:0.6},3).to({regX:113.5,scaleX:0.98},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5.5,221.2,301.6);


(lib.Blue_character_laugh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_arm_R
	this.instance = new lib.blue_arm_R();
	this.instance.setTransform(47.2,158.2,0.996,0.996,0,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.3,scaleY:0.95,rotation:5.2,x:54.9,y:158.1},3).wait(2).to({scaleX:1,scaleY:1.09,rotation:0,skewX:1.8,skewY:4.6,x:40.5,y:149.6},2).to({regX:18.2,scaleX:1,scaleY:1.01,rotation:4.2,skewX:0,skewY:0,x:44.2,y:157.9},3).wait(2).to({regX:18.3,scaleY:0.95,rotation:5.2,x:54.9,y:158.1},0).to({scaleX:1,scaleY:1.09,rotation:0,skewX:1.8,skewY:4.6,x:40.5,y:149.6},2).to({regX:18.2,scaleX:1,scaleY:1.01,rotation:4.2,skewX:0,skewY:0,x:44.2,y:157.9},3).wait(2).to({regX:18.3,scaleY:0.95,rotation:5.2,x:54.9,y:158.1},0).to({scaleX:1,scaleY:1.09,rotation:0,skewX:1.8,skewY:4.6,x:40.5,y:149.6},2).to({regX:18.2,scaleX:1,scaleY:1.01,rotation:4.2,skewX:0,skewY:0,x:44.2,y:157.9},3).wait(2).to({regX:18.3,scaleY:0.95,rotation:5.2,x:54.9,y:158.1},0).to({scaleX:1,scaleY:1.09,rotation:0,skewX:1.8,skewY:4.6,x:40.5,y:149.6},2).to({regX:18.2,scaleX:1,scaleY:1.01,rotation:4.2,skewX:0,skewY:0,x:44.2,y:157.9},3).wait(2).to({regX:18.3,scaleY:0.95,rotation:5.2,x:54.9,y:158.1},0).to({scaleX:1,scaleY:1.09,rotation:0,skewX:1.8,skewY:4.6,x:40.5,y:149.6},2).to({regX:18.2,scaleX:1,scaleY:1.01,rotation:4.2,skewX:0,skewY:0,x:44.2,y:157.9},3).wait(2).to({regX:18.3,scaleY:0.95,rotation:5.2,x:54.9,y:158.1},0).to({scaleX:1,scaleY:1.09,rotation:0,skewX:1.8,skewY:4.6,x:40.5,y:149.6},2).to({regX:18.2,scaleX:1,scaleY:1.01,rotation:4.2,skewX:0,skewY:0,x:44.2,y:157.9},3).wait(2).to({regX:18.3,scaleY:0.95,rotation:5.2,x:54.9,y:158.1},0).to({scaleX:1,scaleY:1.09,rotation:0,skewX:1.8,skewY:4.6,x:40.5,y:149.6},2).to({regX:18.2,scaleX:1,scaleY:1.01,rotation:4.2,skewX:0,skewY:0,x:44.2,y:157.9},3).wait(3).to({scaleY:1,rotation:0,x:47.2,y:158.2},4).wait(1));

	// blue_eyes
	this.instance_1 = new lib.blue_eyes();
	this.instance_1.setTransform(98.9,98.3,1,1,0,0,0,41.1,33.1);

	this.instance_2 = new lib.blue_eyesClosed();
	this.instance_2.setTransform(87.7,81.9,0.999,1.102,0,-3.7,-1.9,41,33.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:41,regY:33,scaleY:0.96,rotation:5.2,x:111.5,y:110.4},3).wait(2).to({_off:true,regY:33.1,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:87.7,y:81.9},2).wait(48).to({_off:false,regX:41.1,scaleX:1,scaleY:1,skewX:0,skewY:0,x:98.9,y:98.3},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:94,y:95.6},3).wait(2).to({regY:33,scaleY:0.96,rotation:5.2,x:111.5,y:110.4},0).to({regY:33.1,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:87.7,y:81.9},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:94,y:95.6},3).wait(2).to({regY:33,scaleY:0.96,rotation:5.2,x:111.5,y:110.4},0).to({regY:33.1,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:87.7,y:81.9},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:94,y:95.6},3).wait(2).to({regY:33,scaleY:0.96,rotation:5.2,x:111.5,y:110.4},0).to({regY:33.1,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:87.7,y:81.9},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:94,y:95.6},3).wait(2).to({regY:33,scaleY:0.96,rotation:5.2,x:111.5,y:110.4},0).to({regY:33.1,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:87.7,y:81.9},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:94,y:95.6},3).wait(2).to({regY:33,scaleY:0.96,rotation:5.2,x:111.5,y:110.4},0).to({regY:33.1,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:87.7,y:81.9},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:94,y:95.6},3).wait(2).to({regY:33,scaleY:0.96,rotation:5.2,x:111.5,y:110.4},0).to({regY:33.1,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:87.7,y:81.9},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:94,y:95.6},3).wait(3).to({_off:true,regX:41.1,scaleY:1,rotation:0,x:98.9,y:98.3},4).wait(1));

	// blue_mouth_talk
	this.instance_3 = new lib.blue_mouth_happy();
	this.instance_3.setTransform(94.3,142.2,1,1,0,0,0,30.3,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:30.4,scaleY:0.96,rotation:5.2,x:103.1,y:151.9},3).wait(2).to({regY:11.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:86.3,y:130.3},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:90.8,y:140.2},3).wait(2).to({regY:12,scaleY:0.96,rotation:5.2,x:103.1,y:151.9},0).to({regY:11.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:86.3,y:130.3},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:90.8,y:140.2},3).wait(2).to({regY:12,scaleY:0.96,rotation:5.2,x:103.1,y:151.9},0).to({regY:11.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:86.3,y:130.3},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:90.8,y:140.2},3).wait(2).to({regY:12,scaleY:0.96,rotation:5.2,x:103.1,y:151.9},0).to({regY:11.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:86.3,y:130.3},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:90.8,y:140.2},3).wait(2).to({regY:12,scaleY:0.96,rotation:5.2,x:103.1,y:151.9},0).to({regY:11.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:86.3,y:130.3},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:90.8,y:140.2},3).wait(2).to({regY:12,scaleY:0.96,rotation:5.2,x:103.1,y:151.9},0).to({regY:11.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:86.3,y:130.3},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:90.8,y:140.2},3).wait(2).to({regY:12,scaleY:0.96,rotation:5.2,x:103.1,y:151.9},0).to({regY:11.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:86.3,y:130.3},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:90.8,y:140.2},3).wait(3).to({regX:30.3,regY:12,scaleY:1,rotation:0,x:94.3,y:142.2},4).wait(1));

	// blue_body_legs
	this.instance_4 = new lib.blue_body_legs();
	this.instance_4.setTransform(90.7,183.1,1,1,0,0,0,76.9,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:77,regY:124.8,scaleY:0.96,rotation:5.2,x:96.1,y:190.6},3).wait(2).to({regY:124.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:85.7,y:175.6},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:88.6,y:181.8},3).wait(2).to({regY:124.8,scaleY:0.96,rotation:5.2,x:96.1,y:190.6},0).to({regY:124.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:85.7,y:175.6},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:88.6,y:181.8},3).wait(2).to({regY:124.8,scaleY:0.96,rotation:5.2,x:96.1,y:190.6},0).to({regY:124.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:85.7,y:175.6},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:88.6,y:181.8},3).wait(2).to({regY:124.8,scaleY:0.96,rotation:5.2,x:96.1,y:190.6},0).to({regY:124.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:85.7,y:175.6},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:88.6,y:181.8},3).wait(2).to({regY:124.8,scaleY:0.96,rotation:5.2,x:96.1,y:190.6},0).to({regY:124.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:85.7,y:175.6},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:88.6,y:181.8},3).wait(2).to({regY:124.8,scaleY:0.96,rotation:5.2,x:96.1,y:190.6},0).to({regY:124.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:85.7,y:175.6},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:88.6,y:181.8},3).wait(2).to({regY:124.8,scaleY:0.96,rotation:5.2,x:96.1,y:190.6},0).to({regY:124.9,scaleX:1,scaleY:1.1,rotation:0,skewX:-3.7,skewY:-1.9,x:85.7,y:175.6},2).to({scaleX:1,scaleY:1.01,rotation:-1.7,skewX:0,skewY:0,x:88.6,y:181.8},3).wait(3).to({regX:76.9,scaleY:1,rotation:0,x:90.7,y:183.1},4).wait(1));

	// blue_legs
	this.instance_5 = new lib.blue_legs();
	this.instance_5.setTransform(105.5,228.9,1,1,0,0,0,91.7,170.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({regY:170.6,scaleY:1.01,y:228.4},2).wait(5).to({regY:170.7,scaleY:1,y:228.9},0).to({regY:170.6,scaleY:1.01,y:228.4},2).wait(5).to({regY:170.7,scaleY:1,y:228.9},0).to({regY:170.6,scaleY:1.01,y:228.4},2).wait(5).to({regY:170.7,scaleY:1,y:228.9},0).to({regY:170.6,scaleY:1.01,y:228.4},2).wait(5).to({regY:170.7,scaleY:1,y:228.9},0).to({regY:170.6,scaleY:1.01,y:228.4},2).wait(5).to({regY:170.7,scaleY:1,y:228.9},0).to({regY:170.6,scaleY:1.01,y:228.4},2).wait(5).to({regY:170.7,scaleY:1,y:228.9},0).to({regY:170.6,scaleY:1.01,y:228.4},2).wait(6).to({regY:170.7,scaleY:1,y:228.9},4).wait(1));

	// blue_arm_L
	this.instance_6 = new lib.blue_arm_L();
	this.instance_6.setTransform(125.8,153.8,1,1,0,-127.2,52.8,0.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-0.1,scaleX:0.97,scaleY:0.98,skewX:-120.8,skewY:56.8,x:133.3,y:160.9},3).wait(2).to({regX:0.1,regY:76.8,scaleX:1.09,scaleY:1.02,skewX:-128.4,skewY:56.1,x:118.5,y:142},2).to({regY:76.7,scaleX:1.01,scaleY:1,skewX:-125.4,skewY:55.4,x:122.5,y:151},3).wait(2).to({regX:-0.1,scaleX:0.97,scaleY:0.98,skewX:-120.8,skewY:56.8,x:133.3,y:160.9},0).to({regX:0.1,regY:76.8,scaleX:1.09,scaleY:1.02,skewX:-128.4,skewY:56.1,x:118.5,y:142},2).to({regY:76.7,scaleX:1.01,scaleY:1,skewX:-125.4,skewY:55.4,x:122.5,y:151},3).wait(2).to({regX:-0.1,scaleX:0.97,scaleY:0.98,skewX:-120.8,skewY:56.8,x:133.3,y:160.9},0).to({regX:0.1,regY:76.8,scaleX:1.09,scaleY:1.02,skewX:-128.4,skewY:56.1,x:118.5,y:142},2).to({regY:76.7,scaleX:1.01,scaleY:1,skewX:-125.4,skewY:55.4,x:122.5,y:151},3).wait(2).to({regX:-0.1,scaleX:0.97,scaleY:0.98,skewX:-120.8,skewY:56.8,x:133.3,y:160.9},0).to({regX:0.1,regY:76.8,scaleX:1.09,scaleY:1.02,skewX:-128.4,skewY:56.1,x:118.5,y:142},2).to({regY:76.7,scaleX:1.01,scaleY:1,skewX:-125.4,skewY:55.4,x:122.5,y:151},3).wait(2).to({regX:-0.1,scaleX:0.97,scaleY:0.98,skewX:-120.8,skewY:56.8,x:133.3,y:160.9},0).to({regX:0.1,regY:76.8,scaleX:1.09,scaleY:1.02,skewX:-128.4,skewY:56.1,x:118.5,y:142},2).to({regY:76.7,scaleX:1.01,scaleY:1,skewX:-125.4,skewY:55.4,x:122.5,y:151},3).wait(2).to({regX:-0.1,scaleX:0.97,scaleY:0.98,skewX:-120.8,skewY:56.8,x:133.3,y:160.9},0).to({regX:0.1,regY:76.8,scaleX:1.09,scaleY:1.02,skewX:-128.4,skewY:56.1,x:118.5,y:142},2).to({regY:76.7,scaleX:1.01,scaleY:1,skewX:-125.4,skewY:55.4,x:122.5,y:151},3).wait(2).to({regX:-0.1,scaleX:0.97,scaleY:0.98,skewX:-120.8,skewY:56.8,x:133.3,y:160.9},0).to({regX:0.1,regY:76.8,scaleX:1.09,scaleY:1.02,skewX:-128.4,skewY:56.1,x:118.5,y:142},2).to({regY:76.7,scaleX:1.01,scaleY:1,skewX:-125.4,skewY:55.4,x:122.5,y:151},3).wait(3).to({scaleX:1,scaleY:1,skewX:-127.2,skewY:52.8,x:125.8,y:153.8},4).wait(1));

	// blue_ear_R
	this.instance_7 = new lib.blue_ear_R();
	this.instance_7.setTransform(38.2,72.8,1,1,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:38.2,scaleY:0.96,rotation:5.2,x:53.3,y:80.7},3).wait(2).to({regX:12.7,scaleX:1,scaleY:1.11,rotation:0,skewX:-10,skewY:-9.5,x:23.3,y:56},2).to({regX:12.6,regY:38.1,scaleX:1,scaleY:1.01,rotation:-8.7,skewX:0,skewY:0,x:30.3,y:71.7},3).wait(2).to({regY:38.2,scaleY:0.96,rotation:5.2,x:53.3,y:80.7},0).to({regX:12.7,scaleX:1,scaleY:1.11,rotation:0,skewX:-10,skewY:-9.5,x:23.3,y:56},2).to({regX:12.6,regY:38.1,scaleX:1,scaleY:1.01,rotation:-8.7,skewX:0,skewY:0,x:30.3,y:71.7},3).wait(2).to({regY:38.2,scaleY:0.96,rotation:5.2,x:53.3,y:80.7},0).to({regX:12.7,scaleX:1,scaleY:1.11,rotation:0,skewX:-10,skewY:-9.5,x:23.3,y:56},2).to({regX:12.6,regY:38.1,scaleX:1,scaleY:1.01,rotation:-8.7,skewX:0,skewY:0,x:30.3,y:71.7},3).wait(2).to({regY:38.2,scaleY:0.96,rotation:5.2,x:53.3,y:80.7},0).to({regX:12.7,scaleX:1,scaleY:1.11,rotation:0,skewX:-10,skewY:-9.5,x:23.3,y:56},2).to({regX:12.6,regY:38.1,scaleX:1,scaleY:1.01,rotation:-8.7,skewX:0,skewY:0,x:30.3,y:71.7},3).wait(2).to({regY:38.2,scaleY:0.96,rotation:5.2,x:53.3,y:80.7},0).to({regX:12.7,scaleX:1,scaleY:1.11,rotation:0,skewX:-10,skewY:-9.5,x:23.3,y:56},2).to({regX:12.6,regY:38.1,scaleX:1,scaleY:1.01,rotation:-8.7,skewX:0,skewY:0,x:30.3,y:71.7},3).wait(2).to({regY:38.2,scaleY:0.96,rotation:5.2,x:53.3,y:80.7},0).to({regX:12.7,scaleX:1,scaleY:1.11,rotation:0,skewX:-10,skewY:-9.5,x:23.3,y:56},2).to({regX:12.6,regY:38.1,scaleX:1,scaleY:1.01,rotation:-8.7,skewX:0,skewY:0,x:30.3,y:71.7},3).wait(2).to({regY:38.2,scaleY:0.96,rotation:5.2,x:53.3,y:80.7},0).to({regX:12.7,scaleX:1,scaleY:1.11,rotation:0,skewX:-10,skewY:-9.5,x:23.3,y:56},2).to({regX:12.6,regY:38.1,scaleX:1,scaleY:1.01,rotation:-8.7,skewX:0,skewY:0,x:30.3,y:71.7},3).wait(3).to({scaleY:1,rotation:0,x:38.2,y:72.8},4).wait(1));

	// blue_ear_L
	this.instance_8 = new lib.blue_ear_L();
	this.instance_8.setTransform(92.9,59.6,1,1,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.96,rotation:5.2,x:108.9,y:73},3).wait(2).to({regX:15.3,regY:31,scaleX:1,scaleY:1.1,rotation:0,skewX:-17.4,skewY:-18.3,x:79.2,y:39.6},2).to({regY:30.9,scaleX:1,scaleY:1.01,rotation:-16.7,skewX:0,skewY:0,x:86.9,y:56.6},3).wait(2).to({regX:15.2,scaleY:0.96,rotation:5.2,x:108.9,y:73},0).to({regX:15.3,regY:31,scaleX:1,scaleY:1.1,rotation:0,skewX:-17.4,skewY:-18.3,x:79.2,y:39.6},2).to({regY:30.9,scaleX:1,scaleY:1.01,rotation:-16.7,skewX:0,skewY:0,x:86.9,y:56.6},3).wait(2).to({regX:15.2,scaleY:0.96,rotation:5.2,x:108.9,y:73},0).to({regX:15.3,regY:31,scaleX:1,scaleY:1.1,rotation:0,skewX:-17.4,skewY:-18.3,x:79.2,y:39.6},2).to({regY:30.9,scaleX:1,scaleY:1.01,rotation:-16.7,skewX:0,skewY:0,x:86.9,y:56.6},3).wait(2).to({regX:15.2,scaleY:0.96,rotation:5.2,x:108.9,y:73},0).to({regX:15.3,regY:31,scaleX:1,scaleY:1.1,rotation:0,skewX:-17.4,skewY:-18.3,x:79.2,y:39.6},2).to({regY:30.9,scaleX:1,scaleY:1.01,rotation:-16.7,skewX:0,skewY:0,x:86.9,y:56.6},3).wait(2).to({regX:15.2,scaleY:0.96,rotation:5.2,x:108.9,y:73},0).to({regX:15.3,regY:31,scaleX:1,scaleY:1.1,rotation:0,skewX:-17.4,skewY:-18.3,x:79.2,y:39.6},2).to({regY:30.9,scaleX:1,scaleY:1.01,rotation:-16.7,skewX:0,skewY:0,x:86.9,y:56.6},3).wait(2).to({regX:15.2,scaleY:0.96,rotation:5.2,x:108.9,y:73},0).to({regX:15.3,regY:31,scaleX:1,scaleY:1.1,rotation:0,skewX:-17.4,skewY:-18.3,x:79.2,y:39.6},2).to({regY:30.9,scaleX:1,scaleY:1.01,rotation:-16.7,skewX:0,skewY:0,x:86.9,y:56.6},3).wait(2).to({regX:15.2,scaleY:0.96,rotation:5.2,x:108.9,y:73},0).to({regX:15.3,regY:31,scaleX:1,scaleY:1.1,rotation:0,skewX:-17.4,skewY:-18.3,x:79.2,y:39.6},2).to({regY:30.9,scaleX:1,scaleY:1.01,rotation:-16.7,skewX:0,skewY:0,x:86.9,y:56.6},3).wait(3).to({regX:15.2,scaleY:1,rotation:0,x:92.9,y:59.6},4).wait(1));

	// shadow
	this.instance_9 = new lib.shadow02();
	this.instance_9.setTransform(94.2,297.2,0.816,0.816,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.8,28.7,183,302.4);


(lib.Blue_character_handthrowlNEW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_eyes
	this.instance = new lib.blue_eyes();
	this.instance.setTransform(92.2,74.5,1,1,0,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({rotation:2.9,x:94.3,y:79.6},2).to({rotation:-3.2,x:84.4,y:71.8},3).wait(15).to({rotation:-3.2},0).to({rotation:0,x:92.2,y:74.5},7).wait(3));

	// blue_arm_R
	this.instance_1 = new lib.blue_arm_R();
	this.instance_1.setTransform(40.4,134.4,1,1,-9.5,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({rotation:-0.3,x:39.5,y:136.7},2).to({regX:18.3,rotation:0.8,x:36.1,y:134.4},3).wait(15).to({regX:18.2,rotation:-9.5,x:40.4},7).wait(3));

	// blue_mouth
	this.instance_2 = new lib.blue_mouth_talk();
	this.instance_2.setTransform(87.7,118.4,1,1,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({rotation:2.9,x:87.5,y:123.3},2).to({regX:30.3,regY:11.9,rotation:-3.2,x:82.2,y:115.8},3).wait(15).to({rotation:-3.2},0).to({regX:30.4,regY:12,rotation:0,x:87.7,y:118.4},7).wait(3));

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(84.1,159.3,1,1,0,0,0,76.9,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({rotation:2.9,x:81.9,y:163.9},2).to({regX:77,rotation:-3.2,x:81.1,y:156.9},3).wait(15).to({rotation:-3.2},0).to({regX:76.9,rotation:0,x:84.1,y:159.3},7).wait(3));

	// blue_ear_R
	this.instance_4 = new lib.blue_ear_R();
	this.instance_4.setTransform(31.5,49,1,1,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({regX:12.5,rotation:2.9,x:34.9,y:51},2).to({regX:12.6,rotation:-3.2,x:22.3,y:49.7},3).wait(15).to({rotation:-3.2},0).to({rotation:0,x:31.5,y:49},7).wait(3));

	// blue_ear_L
	this.instance_5 = new lib.blue_ear_L();
	this.instance_5.setTransform(86.3,36.4,1,1,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({regX:15.3,rotation:2.9,x:90.4,y:41.3},2).to({regX:15.2,rotation:-3.2,x:76.3,y:34.1},3).wait(15).to({rotation:-3.2},0).to({rotation:0,x:86.3,y:36.4},7).wait(3));

	// blue_leg_L
	this.instance_6 = new lib.blue_leg_L();
	this.instance_6.setTransform(105.1,210.5,0.994,0.994,0,0,0,5.2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46));

	// blue_leg_R
	this.instance_7 = new lib.blue_leg_R();
	this.instance_7.setTransform(45.2,214.1,0.994,0.994,0,0,0,8.8,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46));

	// blue_arm_L
	this.instance_8 = new lib.blue_arm_L();
	this.instance_8.setTransform(119.1,130,1,1,75.5,0,0,0.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({regY:76.6,rotation:82.7},11).wait(3).to({regY:76.7,rotation:-36.3,y:130.1},3).wait(11).to({rotation:125.5},11).wait(1).to({rotation:0,skewX:-127.2,skewY:52.8,x:119.2,y:130},0).wait(2));

	// shadow
	this.instance_9 = new lib.shadow02();
	this.instance_9.setTransform(87.6,273.6,0.816,0.816,0,0,0,90,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,5.5,209.1,301.9);


(lib.Blue_character_handGrabNEW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_eyes
	this.instance = new lib.blue_eyes();
	this.instance.setTransform(92.2,74.5,1,1,0,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140));

	// blue_arm_R
	this.instance_1 = new lib.blue_arm_R();
	this.instance_1.setTransform(40.4,134.4,1,1,-9.5,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140));

	// blue_mouth
	this.instance_2 = new lib.blue_mouth();
	this.instance_2.setTransform(87.7,118.4,1,1,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140));

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(84.1,159.3,1,1,0,0,0,76.9,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140));

	// blue_ear_R
	this.instance_4 = new lib.blue_ear_R();
	this.instance_4.setTransform(31.5,49,1,1,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140));

	// blue_ear_L
	this.instance_5 = new lib.blue_ear_L();
	this.instance_5.setTransform(86.3,36.4,1,1,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140));

	// blue_leg_L
	this.instance_6 = new lib.blue_leg_L();
	this.instance_6.setTransform(105.1,210.5,0.994,0.994,0,0,0,5.2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(140));

	// blue_leg_R
	this.instance_7 = new lib.blue_leg_R();
	this.instance_7.setTransform(45.2,214.1,0.994,0.994,0,0,0,8.8,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(140));

	// blue_arm_L
	this.instance_8 = new lib.blue_arm_L();
	this.instance_8.setTransform(119.2,130,1,1,0,-127.2,52.8,0.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({rotation:127.2,skewX:0,skewY:0,x:119.1},0).to({regY:76.6,rotation:87.3,y:130.1},2).to({rotation:89.5},2).to({regY:76.7,rotation:75.5,y:130},2).wait(133));

	// shadow
	this.instance_9 = new lib.shadow02();
	this.instance_9.setTransform(87.6,273.6,0.816,0.816,0,0,0,90,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,5.5,183,301.9);


(lib.Blue_character_handGrab_talkNEW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_eyes
	this.instance = new lib.blue_eyes();
	this.instance.setTransform(92.2,74.5,1,1,0,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// blue_arm_R
	this.instance_1 = new lib.blue_arm_R();
	this.instance_1.setTransform(40.4,134.4,1,1,-9.5,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// blue_mouth
	this.instance_2 = new lib.blue_mouth_talk();
	this.instance_2.setTransform(87.7,118.4,1,1,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(84.1,159.3,1,1,0,0,0,76.9,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// blue_ear_R
	this.instance_4 = new lib.blue_ear_R();
	this.instance_4.setTransform(31.5,49,1,1,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// blue_ear_L
	this.instance_5 = new lib.blue_ear_L();
	this.instance_5.setTransform(86.3,36.4,1,1,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// blue_leg_L
	this.instance_6 = new lib.blue_leg_L();
	this.instance_6.setTransform(105.1,210.5,0.994,0.994,0,0,0,5.2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// blue_leg_R
	this.instance_7 = new lib.blue_leg_R();
	this.instance_7.setTransform(45.2,214.1,0.994,0.994,0,0,0,8.8,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// blue_arm_L
	this.instance_8 = new lib.blue_arm_L();
	this.instance_8.setTransform(119.1,130,1,1,75.5,0,0,0.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// shadow
	this.instance_9 = new lib.shadow02();
	this.instance_9.setTransform(87.6,273.6,0.816,0.816,0,0,0,90,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,5.5,209.1,301.9);


(lib.Blue_character_handGrab_stillNEW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// blue_eyes
	this.instance = new lib.blue_eyes();
	this.instance.setTransform(92.2,74.5,1,1,0,0,0,41,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// blue_arm_R
	this.instance_1 = new lib.blue_arm_R();
	this.instance_1.setTransform(40.4,134.4,1,1,-9.5,0,0,18.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// blue_mouth
	this.instance_2 = new lib.blue_mouth();
	this.instance_2.setTransform(87.7,118.4,1,1,0,0,0,30.4,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// blue_body_legs
	this.instance_3 = new lib.blue_body_legs();
	this.instance_3.setTransform(84.1,159.3,1,1,0,0,0,76.9,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// blue_ear_R
	this.instance_4 = new lib.blue_ear_R();
	this.instance_4.setTransform(31.5,49,1,1,0,0,0,12.6,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// blue_ear_L
	this.instance_5 = new lib.blue_ear_L();
	this.instance_5.setTransform(86.3,36.4,1,1,0,0,0,15.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// blue_leg_L
	this.instance_6 = new lib.blue_leg_L();
	this.instance_6.setTransform(105.1,210.5,0.994,0.994,0,0,0,5.2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// blue_leg_R
	this.instance_7 = new lib.blue_leg_R();
	this.instance_7.setTransform(45.2,214.1,0.994,0.994,0,0,0,8.8,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// blue_arm_L
	this.instance_8 = new lib.blue_arm_L();
	this.instance_8.setTransform(119.1,130,1,1,75.5,0,0,0.1,76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// shadow
	this.instance_9 = new lib.shadow02();
	this.instance_9.setTransform(87.6,273.6,0.816,0.816,0,0,0,90,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,5.5,209.1,301.9);


(lib.shuttle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ship
	this.instance = new lib.ship();
	this.instance.setTransform(199.5,191.6,1,1,0,0,0,199.5,191.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:171.6},15).to({y:191.6},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-1.1,438.7,390);


(lib.Orange_character_walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orange_eyes
	this.instance = new lib.orange_eyes();
	this.instance.setTransform(129.2,54.8,1,1,0,0,0,51.6,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:43.7,rotation:-2.2,x:124.6,y:45.7},5).to({regY:43.8,rotation:0,x:131.2,y:54.8},4).to({rotation:-3.2,x:122,y:50.3},4).to({rotation:0,x:129.2,y:54.8},6).wait(1));

	// orange_mouth
	this.instance_1 = new lib.orange_mouth();
	this.instance_1.setTransform(123.1,121.2,1,1,0,0,0,55.6,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-2.2,x:121.1,y:112.4},5).to({rotation:0,x:125.1,y:121.2},4).to({regY:31.9,rotation:-3.2,x:119.6,y:117},4).to({regY:32,rotation:0,x:123.1,y:121.2},6).wait(1));

	// orange_arm_R
	this.instance_2 = new lib.orange_arm_R();
	this.instance_2.setTransform(60,147.1,1,1,0,0,0,37.8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:37.7,rotation:5.7,x:58.9,y:145.2},5).to({regX:37.8,rotation:0,x:60,y:147.1},4).to({rotation:-17.2,x:58.8,y:150.4},4).to({rotation:0,x:60,y:147.1},6).wait(1));

	// orange_body_legs
	this.instance_3 = new lib.orange_body_legs();
	this.instance_3.setTransform(107.2,145.9,1,1,0,0,0,98,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-2.2,x:106.1,y:142.3},5).to({rotation:0,x:107.2,y:145.9},4).to({rotation:-3.2,x:105.9,y:146.6},4).to({rotation:0,x:107.2,y:145.9},6).wait(1));

	// orange_leg_L
	this.instance_4 = new lib.orange_leg_L();
	this.instance_4.setTransform(80.9,165.2,1,1,0,0,0,15,2);

	this.instance_5 = new lib.orange_leg_L_01();
	this.instance_5.setTransform(80.9,159.6,1,1,0,0,0,15,1.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).to({_off:false,x:112.5},8).wait(1).to({x:80.9},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({_off:true,regY:2,x:112.5,y:165.2},8).wait(11));

	// orange_leg_R
	this.instance_6 = new lib.orange_leg_R();
	this.instance_6.setTransform(144.8,161.6,1,1,0,0,0,18.7,7);

	this.instance_7 = new lib.orange_leg_R_01();
	this.instance_7.setTransform(99.8,161.6,1,1,0,0,0,18.7,7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:99.8},8).to({_off:true},1).to({_off:false,x:144.8},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({_off:true,x:144.8},9).wait(1));

	// orange_arm_L
	this.instance_8 = new lib.orange_arm_L();
	this.instance_8.setTransform(164.3,129,1,1,0,0,0,9.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:7.5,x:162.5,y:123.1},5).to({rotation:0,x:164.3,y:129},4).to({rotation:-16.9,x:161.9,y:126.4},4).to({rotation:0,x:164.3,y:129},6).wait(1));

	// shadow
	this.instance_9 = new lib.shadow02();
	this.instance_9.setTransform(107.8,250,1,1,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,11,216,276.8);


(lib.Orange_character_talkNEW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orange_eyes
	this.instance = new lib.orange_eyes();
	this.instance.setTransform(129.2,54.8,1,1,0,0,0,51.6,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// orange_mouth
	this.instance_1 = new lib.orange_mouth_talk();
	this.instance_1.setTransform(123.1,121.2,1,1,0,0,0,55.6,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// orange_arm_R
	this.instance_2 = new lib.orange_arm_R();
	this.instance_2.setTransform(60,147.1,1,1,0,0,0,37.8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// orange_body_legs
	this.instance_3 = new lib.orange_body_legs();
	this.instance_3.setTransform(107.2,145.9,1,1,0,0,0,98,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// orange_leg_L
	this.instance_4 = new lib.orange_leg_L();
	this.instance_4.setTransform(80.9,165.2,1,1,0,0,0,15,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// orange_leg_R
	this.instance_5 = new lib.orange_leg_R();
	this.instance_5.setTransform(144.8,161.6,1,1,0,0,0,18.7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// orange_arm_L
	this.instance_6 = new lib.orange_arm_L();
	this.instance_6.setTransform(164.3,129,1,1,0,0,0,9.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// shadow
	this.instance_7 = new lib.shadow02();
	this.instance_7.setTransform(107.8,250,1,1,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,11,216,276.8);


(lib.Orange_character_stillNEW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orange_eyes
	this.instance = new lib.orange_eyes();
	this.instance.setTransform(129.2,54.8,1,1,0,0,0,51.6,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// orange_mouth
	this.instance_1 = new lib.orange_mouth();
	this.instance_1.setTransform(123.1,121.2,1,1,0,0,0,55.6,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// orange_arm_R
	this.instance_2 = new lib.orange_arm_R();
	this.instance_2.setTransform(60,147.1,1,1,0,0,0,37.8,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// orange_body_legs
	this.instance_3 = new lib.orange_body_legs();
	this.instance_3.setTransform(107.2,145.9,1,1,0,0,0,98,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// orange_leg_L
	this.instance_4 = new lib.orange_leg_L();
	this.instance_4.setTransform(80.9,165.2,1,1,0,0,0,15,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// orange_leg_R
	this.instance_5 = new lib.orange_leg_R();
	this.instance_5.setTransform(144.8,161.6,1,1,0,0,0,18.7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// orange_arm_L
	this.instance_6 = new lib.orange_arm_L();
	this.instance_6.setTransform(164.3,129,1,1,0,0,0,9.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// shadow
	this.instance_7 = new lib.shadow02();
	this.instance_7.setTransform(107.8,250,1,1,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,11,216,276.8);


(lib.Orange_character_laugh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orange_eyes
	this.instance = new lib.orange_eyes();
	this.instance.setTransform(131.4,45.5,1,1,0,0,0,51.6,43.8);

	this.instance_1 = new lib.orange_eyesClosed();
	this.instance_1.setTransform(122.6,38.8,1,1.048,0,-3.9,-2.7,51.7,43.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:144.9,y:58.3},3).wait(2).to({_off:true,regX:51.7,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:122.6,y:38.8},2).wait(48).to({_off:false,regX:51.6,scaleY:1,skewX:0,skewY:0,x:131.4,y:45.5},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},2).to({regX:51.6,scaleY:1,skewX:0,skewY:0,x:131.4,y:45.5},3).wait(2).to({scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:144.9,y:58.3},0).to({regX:51.7,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:122.6,y:38.8},2).to({regX:51.6,scaleY:1,skewX:0,skewY:0,x:131.4,y:45.5},3).wait(2).to({scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:144.9,y:58.3},0).to({regX:51.7,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:122.6,y:38.8},2).to({regX:51.6,scaleY:1,skewX:0,skewY:0,x:131.4,y:45.5},3).wait(2).to({scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:144.9,y:58.3},0).to({regX:51.7,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:122.6,y:38.8},2).to({regX:51.6,scaleY:1,skewX:0,skewY:0,x:131.4,y:45.5},3).wait(2).to({scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:144.9,y:58.3},0).to({regX:51.7,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:122.6,y:38.8},2).to({regX:51.6,scaleY:1,skewX:0,skewY:0,x:131.4,y:45.5},3).wait(2).to({scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:144.9,y:58.3},0).to({regX:51.7,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:122.6,y:38.8},2).to({regX:51.6,scaleY:1,skewX:0,skewY:0,x:131.4,y:45.5},3).wait(2).to({scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:144.9,y:58.3},0).to({regX:51.7,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:122.6,y:38.8},2).to({regX:51.6,scaleY:1,skewX:0,skewY:0,x:131.4,y:45.5},3).wait(3).to({_off:true},4).wait(1));

	// orange_mouth
	this.instance_2 = new lib.orange_mouth_happy();
	this.instance_2.setTransform(125.3,112,1,1,0,0,0,55.6,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:31.9,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:131.6,y:119.5},3).wait(2).to({regY:32.1,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:121.1,y:108.8},2).to({regY:32,scaleY:1,skewX:0,skewY:0,x:125.3,y:112},3).wait(2).to({regY:31.9,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:131.6,y:119.5},0).to({regY:32.1,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:121.1,y:108.8},2).to({regY:32,scaleY:1,skewX:0,skewY:0,x:125.3,y:112},3).wait(2).to({regY:31.9,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:131.6,y:119.5},0).to({regY:32.1,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:121.1,y:108.8},2).to({regY:32,scaleY:1,skewX:0,skewY:0,x:125.3,y:112},3).wait(2).to({regY:31.9,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:131.6,y:119.5},0).to({regY:32.1,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:121.1,y:108.8},2).to({regY:32,scaleY:1,skewX:0,skewY:0,x:125.3,y:112},3).wait(2).to({regY:31.9,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:131.6,y:119.5},0).to({regY:32.1,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:121.1,y:108.8},2).to({regY:32,scaleY:1,skewX:0,skewY:0,x:125.3,y:112},3).wait(2).to({regY:31.9,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:131.6,y:119.5},0).to({regY:32.1,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:121.1,y:108.8},2).to({regY:32,scaleY:1,skewX:0,skewY:0,x:125.3,y:112},3).wait(2).to({regY:31.9,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:131.6,y:119.5},0).to({regY:32.1,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:121.1,y:108.8},2).to({regY:32,scaleY:1,skewX:0,skewY:0,x:125.3,y:112},3).wait(8));

	// orange_arm_R
	this.instance_3 = new lib.orange_arm_R();
	this.instance_3.setTransform(62.2,137.8,1,1,0,0,0,37.8,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:0.94,skewX:-5.6,skewY:-4.9,x:70.2,y:137.5},3).wait(2).to({regY:7.8,scaleX:1,scaleY:1.05,skewX:3.1,skewY:4.2,x:59.9,y:138.5},2).to({regY:7.9,scaleY:1,skewX:0,skewY:0,x:62.2,y:137.8},3).wait(2).to({scaleX:1,scaleY:0.94,skewX:-5.6,skewY:-4.9,x:70.2,y:137.5},0).to({regY:7.8,scaleX:1,scaleY:1.05,skewX:3.1,skewY:4.2,x:59.9,y:138.5},2).to({regY:7.9,scaleY:1,skewX:0,skewY:0,x:62.2,y:137.8},3).wait(2).to({scaleX:1,scaleY:0.94,skewX:-5.6,skewY:-4.9,x:70.2,y:137.5},0).to({regY:7.8,scaleX:1,scaleY:1.05,skewX:3.1,skewY:4.2,x:59.9,y:138.5},2).to({regY:7.9,scaleY:1,skewX:0,skewY:0,x:62.2,y:137.8},3).wait(2).to({scaleX:1,scaleY:0.94,skewX:-5.6,skewY:-4.9,x:70.2,y:137.5},0).to({regY:7.8,scaleX:1,scaleY:1.05,skewX:3.1,skewY:4.2,x:59.9,y:138.5},2).to({regY:7.9,scaleY:1,skewX:0,skewY:0,x:62.2,y:137.8},3).wait(2).to({scaleX:1,scaleY:0.94,skewX:-5.6,skewY:-4.9,x:70.2,y:137.5},0).to({regY:7.8,scaleX:1,scaleY:1.05,skewX:3.1,skewY:4.2,x:59.9,y:138.5},2).to({regY:7.9,scaleY:1,skewX:0,skewY:0,x:62.2,y:137.8},3).wait(2).to({scaleX:1,scaleY:0.94,skewX:-5.6,skewY:-4.9,x:70.2,y:137.5},0).to({regY:7.8,scaleX:1,scaleY:1.05,skewX:3.1,skewY:4.2,x:59.9,y:138.5},2).to({regY:7.9,scaleY:1,skewX:0,skewY:0,x:62.2,y:137.8},3).wait(2).to({scaleX:1,scaleY:0.94,skewX:-5.6,skewY:-4.9,x:70.2,y:137.5},0).to({regY:7.8,scaleX:1,scaleY:1.05,skewX:3.1,skewY:4.2,x:59.9,y:138.5},2).to({regY:7.9,scaleY:1,skewX:0,skewY:0,x:62.2,y:137.8},3).wait(8));

	// orange_body_legs
	this.instance_4 = new lib.orange_body_legs();
	this.instance_4.setTransform(109.4,136.7,1,1,0,0,0,98,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:98.1,regY:130.1,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:113.1,y:141},3).wait(2).to({regX:98,regY:130,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:107,y:135.3},2).to({scaleY:1,skewX:0,skewY:0,x:109.4,y:136.7},3).wait(2).to({regX:98.1,regY:130.1,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:113.1,y:141},0).to({regX:98,regY:130,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:107,y:135.3},2).to({scaleY:1,skewX:0,skewY:0,x:109.4,y:136.7},3).wait(2).to({regX:98.1,regY:130.1,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:113.1,y:141},0).to({regX:98,regY:130,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:107,y:135.3},2).to({scaleY:1,skewX:0,skewY:0,x:109.4,y:136.7},3).wait(2).to({regX:98.1,regY:130.1,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:113.1,y:141},0).to({regX:98,regY:130,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:107,y:135.3},2).to({scaleY:1,skewX:0,skewY:0,x:109.4,y:136.7},3).wait(2).to({regX:98.1,regY:130.1,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:113.1,y:141},0).to({regX:98,regY:130,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:107,y:135.3},2).to({scaleY:1,skewX:0,skewY:0,x:109.4,y:136.7},3).wait(2).to({regX:98.1,regY:130.1,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:113.1,y:141},0).to({regX:98,regY:130,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:107,y:135.3},2).to({scaleY:1,skewX:0,skewY:0,x:109.4,y:136.7},3).wait(2).to({regX:98.1,regY:130.1,scaleX:1,scaleY:0.94,skewX:6.6,skewY:5.8,x:113.1,y:141},0).to({regX:98,regY:130,scaleX:1,scaleY:1.05,skewX:-3.9,skewY:-2.7,x:107,y:135.3},2).to({scaleY:1,skewX:0,skewY:0,x:109.4,y:136.7},3).wait(8));

	// orange_leg_L
	this.instance_5 = new lib.orange_leg_L();
	this.instance_5.setTransform(83.1,156.4,1,1,0,0,0,15,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	// orange_leg_R
	this.instance_6 = new lib.orange_leg_R();
	this.instance_6.setTransform(146.9,152.9,1,1,0,0,0,18.7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

	// orange_arm_L
	this.instance_7 = new lib.orange_arm_L();
	this.instance_7.setTransform(166.5,119.8,1,1,0,0,0,9.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:4,scaleX:1,scaleY:0.94,skewX:-5.9,skewY:-5.1,x:173.3,y:130.8},3).wait(2).to({regX:9.2,regY:4.4,scaleX:1,scaleY:1.05,skewX:0.6,skewY:1.8,x:162.8,y:114.9},2).to({regX:9.3,regY:4.3,scaleY:1,skewX:0,skewY:0,x:166.5,y:119.8},3).wait(2).to({regY:4,scaleX:1,scaleY:0.94,skewX:-5.9,skewY:-5.1,x:173.3,y:130.8},0).to({regX:9.2,regY:4.4,scaleX:1,scaleY:1.05,skewX:0.6,skewY:1.8,x:162.8,y:114.9},2).to({regX:9.3,regY:4.3,scaleY:1,skewX:0,skewY:0,x:166.5,y:119.8},3).wait(2).to({regY:4,scaleX:1,scaleY:0.94,skewX:-5.9,skewY:-5.1,x:173.3,y:130.8},0).to({regX:9.2,regY:4.4,scaleX:1,scaleY:1.05,skewX:0.6,skewY:1.8,x:162.8,y:114.9},2).to({regX:9.3,regY:4.3,scaleY:1,skewX:0,skewY:0,x:166.5,y:119.8},3).wait(2).to({regY:4,scaleX:1,scaleY:0.94,skewX:-5.9,skewY:-5.1,x:173.3,y:130.8},0).to({regX:9.2,regY:4.4,scaleX:1,scaleY:1.05,skewX:0.6,skewY:1.8,x:162.8,y:114.9},2).to({regX:9.3,regY:4.3,scaleY:1,skewX:0,skewY:0,x:166.5,y:119.8},3).wait(2).to({regY:4,scaleX:1,scaleY:0.94,skewX:-5.9,skewY:-5.1,x:173.3,y:130.8},0).to({regX:9.2,regY:4.4,scaleX:1,scaleY:1.05,skewX:0.6,skewY:1.8,x:162.8,y:114.9},2).to({regX:9.3,regY:4.3,scaleY:1,skewX:0,skewY:0,x:166.5,y:119.8},3).wait(2).to({regY:4,scaleX:1,scaleY:0.94,skewX:-5.9,skewY:-5.1,x:173.3,y:130.8},0).to({regX:9.2,regY:4.4,scaleX:1,scaleY:1.05,skewX:0.6,skewY:1.8,x:162.8,y:114.9},2).to({regX:9.3,regY:4.3,scaleY:1,skewX:0,skewY:0,x:166.5,y:119.8},3).wait(2).to({regY:4,scaleX:1,scaleY:0.94,skewX:-5.9,skewY:-5.1,x:173.3,y:130.8},0).to({regX:9.2,regY:4.4,scaleX:1,scaleY:1.05,skewX:0.6,skewY:1.8,x:162.8,y:114.9},2).to({regX:9.3,regY:4.3,scaleY:1,skewX:0,skewY:0,x:166.5,y:119.8},3).wait(8));

	// shadow
	this.instance_8 = new lib.shadow02();
	this.instance_8.setTransform(110,244,1,1,0,0,0,90,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,1.7,216,280);


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
p.nominalBounds = new cjs.Rectangle(-2,-7,1462.2,1171.2);


(lib.anime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{anime:0});

	// timeline functions:
	this.frame_327 = function() {
		playSound("cartoonSlideUpwav");
	}
	this.frame_349 = function() {
		playSound("cartoonDoinkwav");
	}
	this.frame_367 = function() {
		playSound("monstertalk");
	}
	this.frame_428 = function() {
		playSound("monstertalk");
	}
	this.frame_499 = function() {
		playSound("monstertalk");
	}
	this.frame_535 = function() {
		playSound("monstertalk");
	}
	this.frame_556 = function() {
		playSound("cartoonSwish");
	}
	this.frame_566 = function() {
		playSound("monstertalk");
	}
	this.frame_595 = function() {
		playSound("cartoonCrash01wav");
	}
	this.frame_637 = function() {
		playSound("monstertalk");
	}
	this.frame_685 = function() {
		playSound("monstertalk");
	}
	this.frame_737 = function() {
		playSound("Dwarf_Laugh1wav");
	}
	this.frame_742 = function() {
		playSound("Dwarf_Laugh2wav");
	}
	this.frame_758 = function() {
		playSound("Dwarf_Laugh2wav");
	}
	this.frame_760 = function() {
		playSound("Dwarf_Laugh1wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(327).call(this.frame_327).wait(22).call(this.frame_349).wait(18).call(this.frame_367).wait(61).call(this.frame_428).wait(71).call(this.frame_499).wait(36).call(this.frame_535).wait(21).call(this.frame_556).wait(10).call(this.frame_566).wait(29).call(this.frame_595).wait(42).call(this.frame_637).wait(48).call(this.frame_685).wait(52).call(this.frame_737).wait(5).call(this.frame_742).wait(16).call(this.frame_758).wait(2).call(this.frame_760).wait(94));

	// efx_0
	this.instance = new lib.text_CRASH();
	this.instance.setTransform(640.7,189.9,0.8,0.8,0,0,0,310.7,66.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(595).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},2).wait(16).to({scaleX:0.8,scaleY:0.8,alpha:0},3).to({_off:true},1).wait(237));

	// efx
	this.instance_1 = new lib.efx_splash();
	this.instance_1.setTransform(-39.8,438.1,0.4,0.4,0,0,0,187.7,250.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.image_black();
	this.instance_2.setTransform(626.8,374.3,1,1,0,0,0,638.5,388.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(595).to({_off:false},0).to({scaleX:1,scaleY:1,x:89.2,y:399.4},2).wait(16).to({scaleX:0.5,scaleY:0.5,x:-145.5,y:420.5},3).to({_off:true},1).wait(237));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(784).to({_off:false},0).to({alpha:1},12).wait(58));

	// dude 2
	this.instance_3 = new lib.Orange_character_walk();
	this.instance_3.setTransform(1439.2,498.9,1,1,0,0,180,98,132.3);
	this.instance_3._off = true;

	this.instance_4 = new lib.Orange_character_stillNEW();
	this.instance_4.setTransform(772.2,498.9,1,1,0,0,180,98,132.3);
	this.instance_4._off = true;

	this.instance_5 = new lib.Orange_character_talkNEW();
	this.instance_5.setTransform(772.2,498.9,1,1,0,0,180,98,132.3);

	this.instance_6 = new lib.Orange_character_laugh();
	this.instance_6.setTransform(774.4,508.1,1,1,0,0,180,98,132.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},265).to({state:[{t:this.instance_3}]},44).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},19).to({state:[{t:this.instance_4}]},17).to({state:[{t:this.instance_4}]},58).to({state:[{t:this.instance_4}]},22).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1,x:772.2,y:498.9}}]},2).to({state:[{t:this.instance_4}]},41).to({state:[{t:this.instance_4}]},126).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},11).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5,p:{scaleX:3.24,scaleY:3.24,x:713.3,y:549.9}}]},7).to({state:[{t:this.instance_4}]},30).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_4}]},47).to({state:[{t:this.instance_6}]},13).to({state:[{t:this.instance_4}]},37).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(265).to({_off:false},0).to({x:772.2},44).to({_off:true},1).wait(544));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(310).to({_off:false},0).wait(116).to({_off:true},2).wait(41).to({_off:false},0).wait(126).to({skewX:2,skewY:182,x:762.4,y:503.6},0).wait(2).to({scaleX:1.15,scaleY:1.15,skewX:-2,skewY:178,x:804.3,y:477.4},0).wait(2).to({scaleX:1,scaleY:1,skewX:3,skewY:183,x:770.1,y:505.8},0).wait(2).to({scaleX:1.05,scaleY:1.05,skewX:-3,skewY:177,x:786.2,y:470.2},0).wait(2).to({regX:97.8,scaleX:1,scaleY:1,skewX:1,skewY:181,x:767.4,y:496.9},0).wait(2).to({regX:98,skewX:-2,skewY:178,x:781.8,y:493.8},0).wait(2).to({scaleX:1.15,scaleY:1.15,skewX:3,skewY:183,x:788.9,y:468.2},0).wait(2).to({scaleX:1,scaleY:1,skewX:-3,skewY:177,x:778.5,y:491.1},0).wait(2).to({regX:97.8,skewX:1,skewY:181,x:767.4,y:496.9},0).wait(2).to({regX:98,skewX:0,skewY:180,x:772.2,y:498.9},0).wait(11).to({scaleX:3.24,scaleY:3.24,x:713.3,y:549.9},6).to({_off:true},7).wait(30).to({_off:false},0).wait(3).to({x:1610.3},12).wait(47).to({scaleX:1,scaleY:1,x:772.2,y:498.9},0).to({_off:true},13).wait(37).to({_off:false},0).wait(75));

	// dude 1
	this.instance_7 = new lib.shuttle();
	this.instance_7.setTransform(-385.5,346.4,1,1,0,0,0,199.5,193);
	this.instance_7._off = true;

	this.instance_8 = new lib.Blue_character_walk();
	this.instance_8.setTransform(-215.5,325.4,1,1,0,0,0,21.8,-13);
	this.instance_8._off = true;

	this.instance_9 = new lib.Blue_character_stillNEW();
	this.instance_9.setTransform(451.5,325.4,1,1,0,0,0,21.8,-13);
	this.instance_9._off = true;

	this.instance_10 = new lib.Blue_character_run();
	this.instance_10.setTransform(414,325.4,1,1,0,0,0,21.8,-13);
	this.instance_10._off = true;

	this.instance_11 = new lib.Blue_character_handGrabNEW();
	this.instance_11.setTransform(444,283.7,0.8,0.8,0,0,0,7.2,5.5);

	this.instance_12 = new lib.Blue_character_handGrab_talkNEW();
	this.instance_12.setTransform(444,283.7,0.8,0.8,0,0,0,7.2,5.5);

	this.instance_13 = new lib.Blue_character_handGrab_stillNEW();
	this.instance_13.setTransform(444,283.7,0.8,0.8,0,0,0,7.2,5.5);
	this.instance_13._off = true;

	this.instance_14 = new lib.Blue_character_runhandNEW();
	this.instance_14.setTransform(426,283.7,0.8,0.8,0,0,0,7.2,5.5);
	this.instance_14._off = true;

	this.instance_15 = new lib.Blue_character_handthrowlNEW("synched",0,false);
	this.instance_15.setTransform(393.6,355.4,1,1,0,0,0,7.2,5.5);

	this.instance_16 = new lib.Blue_character_talkNEW();
	this.instance_16.setTransform(383.4,85,3.24,3.24,0,0,0,7.1,5.5);

	this.instance_17 = new lib.Blue_character_laugh();
	this.instance_17.setTransform(436.9,343.9,1,1,0,0,0,13.8,28.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},14).to({state:[{t:this.instance_7}]},70).to({state:[{t:this.instance_7}]},132).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},44).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},19).to({state:[{t:this.instance_10}]},16).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12,p:{scaleX:0.8,scaleY:0.8,x:444,y:283.7}}]},21).to({state:[{t:this.instance_13}]},37).to({state:[{t:this.instance_13}]},22).to({state:[{t:this.instance_13}]},43).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_14}]},11).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12,p:{scaleX:1,scaleY:1,x:393.6,y:355.4}}]},6).to({state:[{t:this.instance_13}]},32).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_9}]},60).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},11).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9}]},40).to({state:[{t:this.instance_9}]},12).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_9}]},35).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_17}]},8).to({state:[{t:this.instance_9}]},42).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({x:594.5},70,cjs.Ease.get(0.8)).wait(133).to({regX:184.1,regY:181.6,scaleX:1,scaleY:1,x:579.1,y:335},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:579},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:578.9,y:334.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:578.8,y:334.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:578.5,y:334.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:578.3,y:334.4},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:577.9,y:334.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:577.6,y:333.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:577.2,y:333.6},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:576.7,y:333.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:576.2,y:332.8},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:575.7,y:332.4},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:575,y:332},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:574.4,y:331.5},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:573.7,y:331},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:572.9,y:330.4},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:572.1,y:329.8},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:571.2,y:329.1},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:570.3,y:328.5},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:569.4,y:327.8},0).wait(1).to({scaleX:1.69,scaleY:1.69,x:568.5,y:327.1},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:567.5,y:326.4},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:566.4,y:325.7},0).wait(1).to({scaleX:1.89,scaleY:1.89,x:565.4,y:324.9},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:564.4,y:324.1},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:563.3,y:323.3},0).wait(1).to({scaleX:2.1,scaleY:2.1,x:562.2,y:322.5},0).wait(1).to({scaleX:2.17,scaleY:2.17,x:561.1,y:321.7},0).wait(1).to({scaleX:2.24,scaleY:2.24,x:560.1,y:320.9},0).wait(1).to({scaleX:2.31,scaleY:2.31,x:559,y:320.2},0).wait(1).to({scaleX:2.37,scaleY:2.37,x:558,y:319.4},0).wait(1).to({scaleX:2.44,scaleY:2.44,x:557,y:318.7},0).wait(1).to({scaleX:2.5,scaleY:2.5,x:556.1,y:317.9},0).wait(1).to({scaleX:2.56,scaleY:2.56,x:555.1,y:317.3},0).wait(1).to({scaleX:2.62,scaleY:2.62,x:554.2,y:316.6},0).wait(1).to({scaleX:2.67,scaleY:2.67,x:553.4,y:316},0).wait(1).to({scaleX:2.72,scaleY:2.72,x:552.7,y:315.4},0).wait(1).to({scaleX:2.77,scaleY:2.77,x:551.9,y:314.9},0).wait(1).to({scaleX:2.81,scaleY:2.81,x:551.2,y:314.4},0).wait(1).to({scaleX:2.85,scaleY:2.85,x:550.7,y:313.9},0).wait(1).to({scaleX:2.89,scaleY:2.89,x:550.2,y:313.5},0).wait(1).to({scaleX:2.92,scaleY:2.92,x:549.7,y:313.2},0).wait(1).to({scaleX:2.94,scaleY:2.94,x:549.3,y:312.9},0).wait(1).to({scaleX:2.96,scaleY:2.96,x:549,y:312.6},0).wait(1).to({scaleX:2.98,scaleY:2.98,x:548.7,y:312.5},0).wait(1).to({scaleX:2.99,scaleY:2.99,x:548.6,y:312.4},0).wait(1).to({scaleX:3,scaleY:3,x:548.5,y:312.3},0).wait(1).to({regX:199.5,regY:193,scaleX:3,scaleY:3,x:594.6,y:346.4},0).to({_off:true},1).wait(589));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(265).to({_off:false},0).to({x:451.5},44).to({_off:true},1).wait(544));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(310).to({_off:false},0).to({_off:true},19).wait(266).to({_off:false,regX:7.2,regY:5.5,rotation:2,x:389,y:347.1},0).wait(2).to({regX:7.1,scaleX:1.15,scaleY:1.15,rotation:-2,x:363.3,y:327.6},0).wait(2).to({regX:7.2,scaleX:1,scaleY:1,rotation:3,x:399.5,y:342.8},0).wait(2).to({scaleX:1.05,scaleY:1.05,rotation:-3,x:381.3,y:340.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:1,x:391.3,y:346.8},0).wait(2).to({rotation:-2,x:398.4,y:363.7},0).wait(2).to({regX:7.1,scaleX:1.15,scaleY:1.15,rotation:3,x:362.7,y:280.6},0).wait(2).to({regX:7.2,scaleX:1,scaleY:1,rotation:-3,x:392.9,y:367.7},0).wait(2).to({rotation:1,x:391.3,y:346.8},0).wait(2).to({rotation:0,x:393.6,y:355.4},0).wait(11).to({regX:7.1,scaleX:3.24,scaleY:3.24,x:-513.6,y:85},6).wait(40).to({x:383.4},12).to({_off:true},3).wait(35).to({_off:false},0).wait(9).to({regX:21.8,regY:-13,scaleX:1,scaleY:1,x:451.5,y:325.4},0).to({_off:true},8).wait(42).to({_off:false,regX:13.8,regY:28.7,x:443.5,y:367.6},0).wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(329).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,x:430.7,y:268.9},16).to({_off:true},1).wait(508));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(404).to({_off:false},0).wait(74).to({_off:true},3).wait(12).to({_off:false,scaleX:1,scaleY:1,x:393.6,y:355.4},0).to({_off:true},6).wait(32).to({_off:false},0).to({_off:true},4).wait(319));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(481).to({_off:false},0).to({regX:7.1,scaleX:1,scaleY:1,x:368,y:352.2},11).to({_off:true},1).wait(361));

	// ball
	this.instance_18 = new lib.moon();
	this.instance_18.setTransform(1147.3,136.1);

	this.instance_19 = new lib.ball();
	this.instance_19.setTransform(597.3,-174.5,0.6,0.6,0,0,0,48.5,48.4);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:1060.5},264).to({_off:true},1).wait(589));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(324).to({_off:false},0).to({regY:48.3,scaleX:0.8,scaleY:0.8,x:609.3,y:405.8},25).to({regY:48.4,x:606.9,y:407.8},2).to({regY:48.3,x:607.6,y:391.7},2).wait(128).to({x:605.8,y:389.9},0).to({scaleX:1,scaleY:1,x:596,y:486.5},11).wait(1).to({x:600,y:491.1},0).wait(47).to({x:599.4,y:491.7},0).to({x:598.2,y:500.7},10).wait(4).to({x:585.2,y:448},0).wait(1).to({x:546.8,y:393.5},0).wait(1).to({x:498.5,y:343.3},0).to({x:-105.7,y:67.6},5).to({_off:true},1).wait(292));

	// ball shadow
	this.instance_20 = new lib.planet1();
	this.instance_20.setTransform(120.9,282.8,1,1,0,0,0,37,37);

	this.instance_21 = new lib.ballshadow();
	this.instance_21.setTransform(597.3,492.2,0.3,0.3,0,0,0,42.4,7.4);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({x:88.3},264).to({_off:true},1).wait(589));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(324).to({_off:false},0).to({scaleX:0.6,scaleY:0.6,y:492.3},25).wait(132).to({scaleX:1,scaleY:1,x:569.9,y:608.8},11).wait(1).to({x:575.6},0).wait(47).to({scaleX:0.9,scaleY:0.9},10).wait(4).to({scaleX:1,scaleY:1},0).wait(1).to({x:538.6},0).wait(1).to({x:481.3},0).to({x:-101.9},5).to({_off:true},1).wait(292));

	// bkgd tint
	this.instance_22 = new lib.tint();
	this.instance_22.setTransform(625,375,1,1,0,0,0,625,375);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(265).to({_off:false},0).wait(589));

	// bkgd
	this.instance_23 = new lib.bkgd_space();
	this.instance_23.setTransform(625,367.4,1,1,0,0,0,625,367.4);

	this.instance_24 = new lib.lab_new();
	this.instance_24.setTransform(752.2,25.2,1,1,0,0,0,849.7,385.8);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).to({state:[{t:this.instance_24}]},265).to({state:[{t:this.instance_24}]},139).to({state:[{t:this.instance_24}]},22).to({state:[{t:this.instance_24}]},43).to({state:[{t:this.instance_24}]},9).to({state:[{t:this.instance_24}]},117).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_24}]},11).to({state:[{t:this.instance_24}]},6).to({state:[{t:this.instance_24}]},40).to({state:[{t:this.instance_24}]},12).to({state:[{t:this.instance_24}]},47).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(265).to({_off:false},0).wait(330).to({regY:385.9,rotation:2,x:759,y:29.6},0).wait(2).to({regX:849.8,regY:385.8,scaleX:1.15,scaleY:1.15,rotation:-2,x:762.5,y:-66.2},0).wait(2).to({regX:849.7,scaleX:1,scaleY:1,rotation:3,x:774.9,y:31.8},0).wait(2).to({scaleX:1.05,scaleY:1.05,rotation:-3,x:739.3,y:-25.4},0).wait(2).to({regX:849.8,regY:385.9,scaleX:1,scaleY:1,rotation:1,x:755.6,y:23},0).wait(2).to({rotation:-2,x:745.4,y:21.2},0).wait(2).to({regX:849.6,regY:385.8,scaleX:1.15,scaleY:1.15,rotation:3,x:794.4,y:-77},0).wait(2).to({scaleX:1,scaleY:1,rotation:-3,x:733.7,y:19.2},0).wait(2).to({regX:849.8,regY:385.9,rotation:1,x:755.6,y:23},0).wait(2).to({regX:849.7,regY:385.8,rotation:0,x:752.2,y:25.2},0).wait(11).to({scaleX:3.24,scaleY:3.24,x:648.5,y:-984.8},6).wait(40).to({x:1545.5},12).wait(47).to({scaleX:1,scaleY:1,x:752.2,y:25.2},0).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.3,-3.5,2388.4,834);


// stage content:



(lib.scene = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.anime();
	this.instance.setTransform(445,275,1,1,0,0,0,625,375);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(247.7,171.4,2388.4,834);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;