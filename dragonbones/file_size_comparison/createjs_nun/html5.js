(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1200,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Tank_Torso01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#ABB4B8"],[0.341,0.569],11.9,14.4,0,11.9,14.4,44.4).s().p("AgsBbQhdhxhvgqQBqgOA1hGQA4hTDXA2QAEBcA3AgQAfCpheBAQgeATgfAAQhMAAhVhsg");
	this.shape.setTransform(29.5,-58);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AltE0QiVk3CakZIB/g2QA4AEA1AUQBuArBcBzQB6CYBlg/QBfhBggirIAPAIQA1BrAHCcQioDYkeCSQhNAJhCAAQh6AAhVgfg");
	this.shape_1.setTransform(17.1,-33);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.8,-77.9,88,78.9);


(lib.Tank_Tete01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF5F3").s().p("Ag/AGQAAgDADgDQA7gXAlAJIADACIAKACIADACIAGADQAJAFgFANIgBAAIgDADIAAABQgIgrhxAgg");
	this.shape.setTransform(14.7,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#886037").s().p("AAGANQgVgDgRgEIgPgFIABgBIAUgFQgBADgCACIAKgFQAIgDAGAAIACABIAAgCQAYgFANAEIgCACIADgBIACAAQACAEgCAHIAEgJIAEAEIADAHQgMAJgWAAIgIAAg");
	this.shape_1.setTransform(14.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfgCIgCAAIgDABIACgBIABgCIABgBIADgBIAAgBQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAABIABADIgBABIgEAKQACgKgCgCgAggABIAGgDQAFgEAEgBQAFgDABACIABABIABAFIAAACIgCgBIgEgBQgEAAgGACIgKAFQACgBABgDg");
	this.shape_2.setTransform(15.5,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2986D").s().p("AAzAIIgEgEIAAgBIAAgDQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIgBAAIgCABIgBAAIgCABQgNgCgZADIgBgDIAAgCQgBgCgFADQgEABgFADIgFAEIgVAHIgBABIAAgBIgHgDIgFgEQgIgEACgDQBygiAIArIgHAIIgBAAIAAABIgDgJgAgDABIADACQgGAAgIADQAGgFAFAAg");
	this.shape_3.setTransform(14.4,-1.3);

	// Tank_Oeil02
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWgEIAfgBIAOgCQgDACgCADQgKAFgIACQgDADgEAAQgKAAgFgMg");
	this.shape_4.setTransform(18.6,-6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B9844F").s().p("AgNAfQgHgCgEgGQgDgDgEgKQgBgJABgHIACgCQgCAJAFAJQAEALAJAEIAAAAIABAAIABAAQAJADAGgFIACgCQAGgFADgJIACgHQACgEAAgIIgBgBQgBgFgCgFIAAgBIAAgCQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABgBQADgEADACQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIAFAQQgGgHgGAEQACARgJAOQgIAPgNAAIgCABIgEgBg");
	this.shape_5.setTransform(21.2,-3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgDAiQgKgDgDgLQgFgIABgKIAEgBIAbgQIADAAQABAAAEAHQACAHABAGIgBAHIgCAGQgDAHgFAEIgDADQgEACgEAAIgDAAgAAJADIgBAGQgBADABACQAAAAAAABQABAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAABgBQABgCAAgDIAAgGQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAIAAAAIgCACgAALggIgEABIgEADIgMABQAJgJALAEg");
	this.shape_6.setTransform(20.6,-4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJAjIgBAAIgBAAIAAAAQgJgEgEgLQgFgJACgLIgCACQgUAJADgnQAAARAEAEQAFADAKgDIAAAAIABAAIABgBIADgBIABgCIASgLIAAAAIADgCIADgEIAKgFIACgBIADgBIAEAAQAIACALATIAEAKIAAABIACAEIgCgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgFgKgIgEQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDgCgDAEQgBAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAIAAACIAAABQACAFABAFIABABQAAAGgCAGIgCAHQgDAJgGAFIgCACQgFADgEAAIgGgBgAgVAAIgEAAQAAAJAEAIQAEALAJADQAHACAFgEIACgDQAGgEACgHIACgGIABgHQAAgGgDgHQgDgHgBAAIgEAAgAAGANQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQgCgCABgDIABgGQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAAAGQAAADgCACIgCACIAAAAg");
	this.shape_7.setTransform(21,-4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#889499").s().p("AgnAOQgDgEgBgPIAAgCIAAABQAHASARgIQAIgDAKgFQABgDACgBIAEgDIADgBQAPgGAKAJQAGAGAEAKQgKgRgJgCIgEAAIgDABIgBABIgKAFIgFAEIgCABIAAAAIgRAKIgCACIgDABIgBABIgBAAIAAAAIgJACQgEAAgCgCg");
	this.shape_8.setTransform(20.7,-6.5);

	// Tank_Oeil01
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B9844F").s().p("AAAApQgbgFgKgTQgNgRANgWQgKgGgPAGIAQgSIAKgBQAGgBAFAFIAEAEIAAACIgCACQgHAFgCAFIgCACQgDAHgBAJIABAHQADALAKAIIAEADQANAJARgCIACAAIABAAIABAAQASgCAOgLQAMgKAEgMIABABQgCAMgHAKQgJAKgJAEQgLAFgPAAIgBAAIgDAAIgGgBg");
	this.shape_9.setTransform(3.1,-4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfAnIgEgDQgKgIgDgLIgBgJQABgIAEgGIABgCQADgFAGgFIACgCIAAgCIgEgEQgFgFgGABIgKABQgPAEgQAJIgFAEIgGADQADgEAEgCIABgBQAGgHAGgDQAcgVASABIAIABIADACIAEACIARAJIAFAFIAHADIAAABIAeASIADACIAFADIADAAIAAAAIACAAQASAGALgDQAIgDAIgSIABgCIAAACQgMAvgkgRIgBgBQgEAMgMAKQgOALgSACIgBAAIgBAAIgBAAIgEABQgPAAgMgIgAgQgWQgCAAgKAGQgJAHgDAJIgBAHQAAAFABAEQADAIAIAHIAEAEQAMAGANgBQARAAANgMQALgIAEgMIgHgCIgvgbIgFgBIgCAAgAAZAUQgCgCABgEQABgEACgDIAFgCQABAAAAABQABAAABAAQAAAAAAABQABAAAAABQACADgBAEQgBAEgCADQgDACgDAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAgBAAgBg");
	this.shape_10.setTransform(4.1,-5.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AgbAkIgDgDQgJgHgCgJQgCgEAAgEIACgIQADgIAJgIQAJgFADAAQACgBAFABIAvAbIAGACQgDAMgLAJQgNALgQABIgDAAQgNAAgLgGgAAaAIQgDADAAAEQgBAEACADQAAABAAAAQAAABABABQAAAAABAAQAAAAABAAQADAAADgCQACgDAAgDQABgEgBgEQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgFABgAAHghQgDgDgDgBIgFgEQAXgBAPAOg");
	this.shape_11.setTransform(4.3,-5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#889499").s().p("AAsAWIgCgBIAAAAIgDAAIgFgDIgDgCIgegQIAAgBIgFgDIgHgFIgRgJIgEgCIgDgCIgIgBQgSgBgcAVQANgNAPgGQAVgJAbALIAHAEQADABADADIAHAGQARAKAOAFQAgANATgUIABgBIgBACQgIAUgIADIgHABQgKAAgMgFg");
	this.shape_12.setTransform(5.1,-7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAIQgOgFgRgKIgJgGIAbAFIA+AJQgMANgQAAQgLAAgKgGg");
	this.shape_13.setTransform(9.5,-7.5);

	// Tank_EyePatch_Right_12
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYgHIAqgBIADAAIAFAAIgGAEIgBAAIgCACIgFACIgCABIgBAAIgHAEIgEADIgHABQgNAAgCgQg");
	this.shape_14.setTransform(19.1,-6.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#886037").s().p("AgMAOIAGgEQALgGAIgSQgIAdgQAAIgBgBg");
	this.shape_15.setTransform(22.5,-1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EBC7AB").s().p("AgBAHQACgGACgJIADgIIAEgCIAAAAQABAJgBAEQgJASgLAGQAFgEAEgIg");
	this.shape_16.setTransform(22.8,-2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLAjIgDgEQgGgJABgPIABgGIAAAAIgCAAIAAAAIgCABIgGABIACACIAEgCQgCAJADAIIgDgHQgBAAAAAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgEgGgBgFQgHgEAAgSQAAALAFAFIACABQACACAEAAIACAAIAJgCIACgBIAEgDIABgBIAXgQIABgBIAIgDIADAAIAEAAQADABADADQAHAHACATQgDgJgFgFQgDgFgEgBIAAgBIgBAAQgEgBgEAAIADAJIABAIIAAABIgBAEIAAAFQgBALgGAKQgHALgIACIgCAAQgFAAgEgFgAgQAHIABAGQAAAFACAEIACAEQADAHAFABIADAAQAHgBAGgKQAGgJAAgNIAAgFIAAgCIAAgEIgCgDIgCgEIAAgBIgCAAIgFAEIgIAGQgFAGgGADQACAAAJgDQALgGAIAEIAAAEQgEAAgFAAIgLAFIgMAHIgCgKIgBAFgAgGAdIAGgBQAMgDAHgZQgDAWgOAHQgCABgBAAQgDAAgCgBgAAZABIABgDQADACABACQgCgCgDABgAAEgcQAKgLAGAAIACAEQgGABgHAGIgBAAg");
	this.shape_17.setTransform(20.8,-4.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B9844F").s().p("AgCAgQgFgDgDgIQgGgIgDgMQAAAAABABQAAAAAAAAQAAAAABAAQAAgBAAAAIAEAHQgDgIACgHIAAgBIACgBIAAAAIACAAIAAAAIgBAGQgBANAGAJIADAEQADAGAHgBQAIgCAIgLQAGgKABgJIAAgFIABgGIAAgBIgBgIIgDgJQAEAAAEABIAAAAIABABQAEABADAFIgHABIgCAAIAAABIAAABIAEAOQgCgDgDgDIAAAFQADgBACACIgEACIgDAHQgCALgEAFQgEAIgFAFIgGAEIgFAAQgFAAgCgCgAgDgJQAEgFAFgGIAKgGIAJABIABADIABAEIAAACQgJgEgKAGQgJAFgCAAIAAAAgAgqghIAGABIAAACIADATQgIgJgBgNg");
	this.shape_18.setTransform(20,-3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#889499").s().p("AAAAoQgFgBgDgGIgCgEQgCgFAAgEIAAgHIABgEIABAJQADANAEAEQADAEAGgEQANgGADgWIABgHIAAAHQgBANgGAJQgGAKgHABIgDAAgAgZAKIAHgBIAAAAIgFACIgCgBgAAlgTQgDgDgDgBIgDAAIgEAAIgHAEIgBAAIgXARIgBAAIgFACIgBAAIgJADIgCAAQgEAAgDgCIgCgBQgEgEgBgKIAAgGIABgBQADAVATgEIAGgCIAHgEIABgBIACgBIADgDIACgCIABgBIAGgDIAAgBQAHgFAHgBIgDgEQgFgBgKAMIgEAAQAOgTAHABQADADACAHQASgBgBAlQgDgSgHgIgAAegEIAAgCIACAAIAAACIgCAAgAAMgIIAFgDIABAAIABABIACAEIgJgCgAgugPQgBgIADgLQgBALADAHIACADg");
	this.shape_19.setTransform(20.4,-4.9);

	// Tank_Eye_Pupil01
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgCADIAAgDQAAAAAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIACgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIAAADQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_20.setTransform(21,-3);

	// Tank_Eyewhite01
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AgTAhQgDgeAKgUQAJgWANACQARAYgKAdQgHAWgNAAQgHAAgJgFg");
	this.shape_21.setTransform(20.8,-3.8);

	// Tank_Mouth10
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#889499").s().p("AgJgFQACgDAFAAIACAAQAKgDAOADIgJADQgEgBgFABQgHgCgEACIgCAAIgEAFQgIAFAAAEIgDABIgBABQADgMALgEg");
	this.shape_22.setTransform(3.7,4.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FCF5F3").s().p("AhrAFQAegQAegHQAfgHAQAEIAcADQAHACAOAAQANAAACABIAHAAIAPABQAEABAOgCQAGAAgBAHIgCAPIgEgRQgMACgNgCQgNgCgMACQgMABgagHQgfgHglAKQgdAKgVAJQgCADAAAQQgGgLAEgJgAhXgSIAEgEIADgBQADgBAJABQAFAAAEABQgQAEgUAMQABgEAHgIg");
	this.shape_23.setTransform(11.3,6.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhwAFIAGgEQAKggAaADQAaAGAUgDQATgDAQAEIAeAFIAbADQAPACAPAAIAPgBQAEAQgFAGIgFAHIABgDIACgPQAAgHgGAAQgOACgEgBIgPgBIgGAAQgDgBgNAAQgOAAgHgCIgbgDQgRgEgeAHQgfAHgeAQQgDAJAGALQgNgRAFgHgAhKgWIgEABQgEAAgDACQgKAFgDANIABAAIACgBQAVgMAPgEIAKgDQgIgCgGAAIgLABg");
	this.shape_24.setTransform(11.2,5.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C2986D").s().p("AgwgQIAAgEQAUgFAGgKIABgEQAGAEAKACQAcAHAbgQQgnAZgfgSQgFALgTAHQgEAVAEAnQgIghAEgag");
	this.shape_25.setTransform(2.6,5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#886037").s().p("Ah6A6IgBAAQgKgcAFgjIAAgGIACgBQASgEAGgMIAAgCQgNgKACgVQAMA9BZgnIgNAIQgbAQgegHQgKgCgHgEIgBAEQgGAKgUAFIABAEQgEAaAIAhQALAGARABIgJABQgJAAgLgEgAB6gQQgLAEgVgcQATAWANgDQAFgBADgDIgEAFQALAmgTAjQARgqgNgbg");
	this.shape_26.setTransform(10.3,3.9);

	// Layer 11
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#878E91").ss(0.5,1,1).p("AhdCHQhegPg9gqQAxk1G7CMQAEAWABAPQh2AHiJgeQgSATgCAEQgrA3gYCGg");
	this.shape_27.setTransform(-0.7,-1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#855734").ss(0.5,1,1).p("ACqhjQABALABACIgBAAQAFBWgYBNQiHAni8ga");
	this.shape_28.setTransform(7.1,3.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#EBC7AB","#BD8B58"],[0.478,0.655],3.8,-1.8,0,3.8,-1.8,24.7).s().p("AirBaQAYiFArg5QCYAlB7gXQAFBWgYBNQhRAYhiAAQhEAAhMgLg");
	this.shape_29.setTransform(7.1,3.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFFFFF","#ABB4B8"],[0.341,0.569],12.3,-5.2,0,12.3,-5.2,32.5).s().p("Aj4BOQAxk1G7CMQAEAWABAPQh2AHiJgeQgSATgCAEQgrA3gYCGQhegPg9gqg");
	this.shape_30.setTransform(-0.7,-1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BD8B58").s().p("AiJAAQABgCATgTQCIAcB2gHIACAOIgBAAQgvAIg0AAQhRAAhfgWg");
	this.shape_31.setTransform(10.5,-6.6);

	// Tank_Cranium01
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EBC7AB").s().p("AhRBjQgWAAgOgIQgOgHgBgGQgCgHAEgFIACgBIgFgGQgKgKAAgHIgBgNQgBgYAMgTQAHgRAMgJQgLgHAAgPQgBgKAGgMQAGgLALgDQCnAbBRgIIAAABQAEBXgYBLQgTALiZAEQgMgBgWABgAA9A2QAKACAFAEQADAEAGAAIAFgEQAHAAAEgEQAEgFAAgGQAAgHgNACQgNABgggDQgggDgBABIgMADIgBAAQgBABgDAFIgCABQgFAFAAADQABAGAUgDIAVgEIANgBIAQACg");
	this.shape_32.setTransform(9.8,2.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B9844F").s().p("AioBmIgCgCQgCgcAGgVIAJgfQADgLAEgJIAQgtQANgfAcgYQAOgHALAEIAMADQBuAVB1gCIABAFQhRAIingbQgLADgGALQgGAMABAKQAAAPALAHQgMAJgHARQgMATABAZIABANQAAAGAKALIAFAFIgCABQgEAGACAGQABAHAOAGQAOAIAWAAQAWgBAMABQgwADglAAQgnAAgYgDgABnBAQgFgFgKgCQgPgDgOACIgVAFQgWADgBgHQAAgDAFgFIACgBQADgEADgCIABAAIAMgDQABgBAgADQAgADANgBQANgCAAAHQAAAGgEAFQgEAEgHABIgFADIgBAAQgFAAgDgDg");
	this.shape_33.setTransform(7.1,2.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#889499").s().p("AijB0QhHgRgOgVQAgjQDYgEIAjAEQgLAPgDALQgFAJgBALIACAIIAAABQBkAXCEgCIAAAAIAAAIQh1AChxgVIgLgDQgJgEgOAHQgcAYgNAfIgQAqQgFAMgCALIgKAfQgFAVACAbIhHgSg");
	this.shape_34.setTransform(-0.7,-0.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhxAQIAAAAIgCgJQAAgIAFgKQAEgKALgQQCgAMAuAZIAFAmIgUAAQh2AAhbgWg");
	this.shape_35.setTransform(12.6,-10.3);

	this.addChild(this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.6,-15.6,52.5,30.3);


(lib.Tank_Roche01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F3B33").s().p("AhHAnIBAgYQgIgPgRg5IgFgSIAygLIA7B3IgpArIhQAAIgWALg");
	this.shape.setTransform(4.3,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#A28E6A","#2A2824"],[0.357,0.976],-2.8,-0.1,0,-2.8,-0.1,14.3).s().p("AhJAAIAzhNIBCgOIAFASQARA6AIAPIhAAYIAAAwIgmAUg");
	this.shape_1.setTransform(-4,0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.4,-9.8,23,19.6);


(lib.Tank_Robe01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqgiBQHIl9JtAWQCiCgBrGAQgdBmiDFMQvEjmjemFg");
	this.shape.setTransform(-37.6,38.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105,-10.3,134.8,98.1);


(lib.Tank_Pied01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#959595").s().p("ABPAEQACgZgUAFQgzAGgYgFQgcgHgtAWQAcgSAlgPQA5gFAtADQAPAagMAnQgIAFgFACQAHgFACgcg");
	this.shape.setTransform(9.9,-9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#585858").s().p("AgdAxQhbgchQANIAGgHQBEgNBbAcQB0AUBygeIAGAIQhDARhFAAQgvAAgvgIgAA9gsQglAIghASQArgfAsgGQA2gEAxAKQgsgGgqAEQgvAIghAgQANgVAhgMgAgKgiQgEgCAAgEQAAgEAEgDQADgCAGAAQADAAADACQAEADgBAEQAAAEgDACQgFADgCAAQgGAAgCgDgAgHgsQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAABIAFABQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQABgBABAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgCgEgCQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgFACg");
	this.shape_1.setTransform(-0.2,-9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqBYQgYgfgNgBQgZgBAHAlQgvgDgdACQgggXAFgiQBQgNBbAcQB1AUBxgdIgIAgQg8AchKAAQgwAAg1gMgAgjAqQhbgchEANQgPguAvg+QBggcBrAPQAOAeAXAJQgsAGgrAfQAhgSAlgIQghAMgNAVQAhggAvgIQAqgEAsAGIALACQASAngPAoQhEAShGAAQgvAAgtgIgAC1ABQgCAcgIAFQAGgCAIgFQAMgngPgaQgtgDg7AFQgmAPgbATQAtgXAcAHQAaAFAygGIAGgBQAPAAgCAVgAgJgvQgFADAAAEQAAAEAEACQACADAGAAQACAAAFgDQADgCAAgEQABgEgEgDQgDgCgDAAQgGAAgCACgAgHglQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAFgCQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAEACAAACQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgFgBg");
	this.shape_2.setTransform(-0.3,-9.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.1,40.4,20.2);


(lib.Tank_Ombre01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0.729,1],0,0,0,0,0,51.8).s().p("AlvA0QiXgWgBgeQABgdCXgWQCZgVDWAAQDXAACYAVQCYAWABAdQgBAeiYAWQiYAVjXAAQjWAAiZgVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-7.3,104,14.7);


(lib.Tank_Molet01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgJA0IgIg+QgEgWgFgYIgFgWIgCgKIgDgVIgCgIQAQAJATAGIALACIACASIAAABQACAHAAAIIAFAiIAAACIAAACIAWCSQgngNgJg1g");
	this.shape.setTransform(-6.9,-6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#790000").s().p("AAdAxIAAAAIADAAIgBACIgCgCgAAPAcQgSgFgPgKIgFgOQATAJAVAHIAIACIAAABIACANIgMgDgAAPgMQgMgDgIgFQgNgFgKgHIAAAAIAAgDIgCgPQAXATAgAHIgBAPIgJgDg");
	this.shape_1.setTransform(-8.9,-19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C5A52").s().p("AAWA0QgWgHgSgLIAAgCIgFgcQAKAHANAEQAIAFAMAEIAJACIABAHIAAAGIAAAPIgIgCgAgZgMIgFggIAAgEIAAAAIAAgFIANAOQALAIALAGIAFADIAUAGIAAAAIAAALIAAARQgggIgXgQg");
	this.shape_2.setTransform(-9.4,-23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgmB2IgWiSIAAgCIAAgCIgFgiQAAgIgCgHIABABIABgBIgCgBIgCgSQATAEARAAIAOgBIAmgFQAegGATgKIACgBIgBAJIgCAJIgDAWIgBAHIgBAHIgBAHIgBAAIABAAIAAALIgBARIAAAfQABAYADAZQAABGhOAAIgYgCg");
	this.shape_3.setTransform(0.9,-6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhKApIgCgOIAAgBIAEAAQAhAIAngIIAOgCQAigHAVgOIgBAFIAAADIgDAIIgBAAIABABIgBACIgCAAQgSAKgeAGIgnAFIgNABQgRAAgTgDgAhOAAIABgOIAFABQAWAFAYgDIAOAAIAIgBIASgEIAOgEIAJgCQAagIAQgOQgBAKgEAKIgMAGQgMAHgTAGIgBAAIgQADIgHABQgZADgUABQgTAAgVgDg");
	this.shape_4.setTransform(1.5,-20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C2C1BC").s().p("AhMAyIgEAAIgBgPIAAgGIgBgHQAVAEATAAQAUAAAZgFIAHgBIAQgEIABABIAAgBQATgFAMgHIAMgEIgBAGIgCAJIgCALQgVAPgiAHIgMACQgUAEgTAAQgTAAgQgEgAhMAJIgFgBIABgRIAAgLQARAEAZgBIAEAAIAhgDIAEAAIACgBQAQgCAMgDIAGgCQAJgDAIgEIAOgJIACACIgCgCIANgJIgIAhQgQANgaAHIgJACIgOAEIgSAEIgIABIgOAAIgPABQgQAAgPgDg");
	this.shape_5.setTransform(1.9,-22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3D2B18").s().p("AAxBVIABAAIAAABgAgPAxIgHgLIALgLIAAAWIgEAAgAgyARIANAKIgHAVgAATAmIAOgFIgHAOIgGAAgAA1AeIAKgJIgBASIgGABgAhSAmIgMgQIAOAGIACAMIgEgCgAABAMIAJABIgCAMgABdAXIgMgUIAKgHIACAaIACACgAAlAPIgKgRIALACIAAAPIAAACgAhNADQAEgBAFAAIgEANgAA0gMIAPAAIgCARIAAAGgAg0gGIgBgGIACAAIAMAAIgBABIgGAWgAhpAFIgDgOIAKgDIgHATgAAGgtIAMALIgGAUgAgkgnIANAGIAEARgABcgbIgGgSIAOAAIgHAYgAhHgyIAOAKIgEATgAhTgoIAGAFIgKAOgAA2g+IAOALIgIAUgAAVhDIAOAJIgCATgAgSg6QADgCAFABIgEAMgAhqhNIANAKIgHAUgAgug4IgFgQIAJgDIgEAUgABlhNIAIAEIgLAOgAhThVIAOAAIAAABIgGAXg");
	this.shape_6.setTransform(-0.4,-29.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#886037").s().p("Ag8CMIgUgGIgDgNIgNgFIALAPQgNgGgLgJIgMgNQgBgiABg/QAMiSB4ACQB5ABgKCNQg4gdgNARQgOAOgMAHQgMAHgPABQgdAGgNARQgJANgCAXIgCAAIABAFIgFA3gAhPBhIAFALIAEgNQgFAAgEACgAhvBSIAEARIAAACIAGgVgAg/BGIAEgTIgOgKgAhZBGIAKgOIgHgFgAhnAsIAIgUIgNgKgAg1ATIAEARIAAABIAFgVgAhNAeIAGgXIAAgBIgOAAg");
	this.shape_7.setTransform(-0.2,-39);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBC7AB").s().p("AhaBMIAFg3IAGATIAGgXIABgBIgMAAQADgVAIgNQANgRAegGQAQgBAMgHQAKgHAOgQQANgRA4AfIgJA4IgJAtIgNAJIgCgdIgKAKIAMATIgOAJQgIAEgJADIABgSIgKAJIADALQgMADgOACIgCABIAFgOIgMAFIABAJIghADIAAgXIgLALIAHAMIgKAAQgSAAgOgDgAhNBNIAHgVIgNgKgAgXA2IACgLIgJgCgAAEAsIABACIAAgCIAAgPIgJgDgAAgAoIAAgFIACgTIgPAAgAgTANIAGgSIgMgKgAg0ALIgEgPIgNgFgAA7ABIABAFIAHgWIgOAAgAAbgCIAIgUIgOgLgAAAgJIACgUIgMgJgAgzgdIAEAMIAEgNQgFAAgDABgABBgeIALgNIgIgFg");
	this.shape_8.setTransform(2.9,-32.6);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-52.9,24.7,58.8);


(lib.Tank_Main02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF5F3").s().p("AA8AbIgBgGQASgLANALIAAAGQgRgGgNAGgAhYACIABgCQAVgKARABIADALQgdgFgNAFgAgjgEIAAgJQAVgGAPAHIADAKIAAACQgTgJgUAFgAALgUQAVgJARAEIADALQgggGgIAMIgBgMg");
	this.shape.setTransform(1.9,-3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#886037").s().p("AhcAyQgHgPgEgUQAGAAAGgBIAKACIAEgMQADgUAIgUQgIAcAEAlQAaAKAQgSQAHgUAAgQQADgVAFgRIAAAJQABAfgMAiQAgAHARgPIAEgRQADgPgFgTQABgOAFgIIABANQAFAggHAcQAXAJATgGQACgQABgOIAFgDIABAGIABAEIgCACIgBAKIADAAQABAQgFALQALAMAMAAQgTAJgZgBQgRgHgKgQQgjAGhAAaQgRgBgIgKg");
	this.shape_1.setTransform(-0.4,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBC7AB").s().p("AA/AdIgEAAIABgMIACgBQALgEAJACIgBAOIgPACIgDgBgAhRAGQAAgDAGgFQALgEAJAAIAAAKQgKAFgHAAQgFAAgEgDgAgegBIAEgNQAOgDAMACIgBALQgJAEgJAAQgGAAgFgBgAARgMQgDgEAJgKIATgDQACAIgDAFQgKAGgHAAIgHgCg");
	this.shape_2.setTransform(1.8,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2AB85").s().p("AA8AmQAGgLgBgQQAHAAALgBIABgNQgJgCgLAEIgBgEQANgFAQAFQAAAigIAVQgNAAgLgMgAhaAjQgEglAIgcQANgHAeAHIACAVQAAAQgGAUQgLAMgPAAQgIAAgJgEgAhJgUQgGAHAAACQAJAHARgJIAAgLIgCAAQgIAAgKAEgAgsAbQAMgiAAgfQAUgFATALQAFATgDANIgDATQgKAKgTAAQgKAAgLgCgAgYggIgEAMQAOAGAOgIIAAgLIgJgBIgPACgAANATQAGgcgEggQAIgMAgAFQADAUAAAUQgBANgDARQgHADgHAAQgNAAgOgGgAAZgsQgJAKADAEQAKAEAOgIQADgGgCgHg");
	this.shape_3.setTransform(1.6,-0.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-6.4,21.7,12.9);


(lib.Tank_Main01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#886037").s().p("AiggSIApgtQAUCEBcAoQAagIATgIQATAJAOgOQAagDACgZIgbAOQgMARgUgJQAVABAQgUIgCAFQAlgUADgQQgFACgFAAIgUADQgPAPgMgQQALAGANgIQADgCABgEQACgFAAgHIAEAFQABADgDAEIAWgEQAJgPgDgOIgEAAQgTgCgQgLQAwALANgPQANgTgJgNQAFgBAFACQAKABgFAWQgEAVgYACIgDAHIABAMQgBAHgHAIQAGAJgIAKIgLAIQACAPgLAPQgLAGgPABQgOARgRgIQgnASgaAAQhngvgihZgAAxgUQgMgBADgQQAEATAagGQgHAFgJAAIgFgBgAAuhiQgIgHgKgFQAfAIAmgPIgJAKQgYAJgQAAIgCAAg");
	this.shape.setTransform(0,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCF5F3").s().p("AAEBJQAEgFAPAGQgHAGgFAAQgFAAgCgHgAAOAPQAAgHACgHQADgFgHgEQAQAIAAAJQgBASgGACQgHgHAAgHgABBAKQglgUgqgHQgTgegfgHQAUAAAQAIQAKAFAIAHIAHAGIBTAkQgDAEgFAAIgHgCgAAihFQgiANgbgJQgdgIgXACIAKgEQARgBAdADQAaAEAlgKQAHANgJANQADgGgHgKg");
	this.shape_1.setTransform(5.9,-5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2AB85").s().p("AiFgyQAhglBCgiQAXgCAaAIQAdAIAjgNQAGAKgCAGQgmAPgfgIQgOgIgTABQAdAHATAeQArAGAlAXQALADAEgGIAGAAQAJANgNAUQgNANgwgKQAQAKATABIAEAAQADAQgJAQIgWAEQADgFgBgCIgEgGQAAAIgCAFQgBAEgDABQgNAIgLgFQAMAQAPgQIAUgCQAFgBAFgCQgDAQglAUIACgEQgQATgVgBQAUAKAMgSIAbgOQgCAZgaAEQgOANgTgJQgTAJgaAHQhcgogUiEgAAwAWQAEANAPgLQgIgDgFAAQgEAAgCABgAAjgGQAMABAJgFQgaAFgEgSQgDAQAMABgAA9gwQgDAHAAAIQAAAGAHAIQAHgCABgTQgBgKgQgJQAHAFgCAGg");
	this.shape_2.setTransform(1.4,-0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.1,-13.1,32.3,26.3);


(lib.Tank_Hat01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlhBJQgNhpAYhXIA7BNQAbAQA6APQBWg6BYhYQBzgHCfAOIBtAiQhWgSh3ABQhcAZg2B8Qg0B9hhATQiEg5hQgeg");
	this.shape.setTransform(-35.4,11.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.3,-4.4,71.9,32.2);


(lib.Tank_Dust_Nuage01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFAxQgJgGAAgKIgGABQgDAHgKAFQgMAIgSgBQgTABgOgIQgKgHgBgIQgHABgIAAQgRAAgNgIQgOgIAAgLQAAgKAOgJQALgGAOgBQAAgHAGgGQAIgEAIAAQAJAAAHAEIALgHQAVgNAfgBQAbABAVANQAIAEAFAGIAGgBQAGAAAEACQADACAAAEIAAACIAIgBQAQAAALAIIAHAEQAJgEAMgBQALABAJAEQAJAGAAAGQAAAIgJAFQgJAGgLAAQgMgBgHgEQgEADgFADQgLAHgQABIgBAAIABADQAAAKgMAHQgLAHgQAAQgQAAgMgHg");
	this.shape.setTransform(4,0.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.7,-4.8,31.4,11.2);


(lib.Tank_Bras02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAmDiIirgdQiPgohRhaQgKgCgHgTQgxg8gEg6IgBgWQACgZAFgUQAGgWAMgMQAOgWAfgPQAPgQAWAAIAEAAQAVgHAWAAQA1AAAgAVQAYAQAVAkQAHANAkApIADAEQAzAZADAAQAyAAAtgUQAWgLAQgEIARgLQAxgVBNAPQBMAPA4AoQA9AsAEA0QACAggYAhQgPAvgrAmQhIA+iIAAQgvAAg4gIg");
	this.shape.setTransform(29.9,14);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13,-9.4,85.9,46.8);


(lib.Tank_Bras01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak9CpQhPiKCsjzQCyhYBBCnIAiCFICrAEQCYCKgqBRQiYAUh9AAQjrAAiLhKg");
	this.shape.setTransform(7.7,20.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.6,-3.7,68.7,48.8);


(lib.Tank_12GaugeCartridge = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B46C1C").s().p("AgPAaIgKAAQgDgRABgPIAKAAQAAgIACgKIABgJIADAGIAAAIQgCAJAAAIIAnAAQAAALACANIgnAAIAAAGIgDAGIgBgIg");
	this.shape.setTransform(-4.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFD96").s().p("AgOAKQAAgIACgHIAoAAQgCAHAAAIgAgbAHIACgQIAKAAQgCAJAAAHg");
	this.shape_1.setTransform(-4.7,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2C706").s().p("AgaAaIAKAAIAAAIIgJABIgBgJgAgMAcIgBgGIAoAAIAAAGgAgNgTIABgIIAnAAIAAAIgAgagYIABgKIAJABIAAAJg");
	this.shape_2.setTransform(-4.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#205217").s().p("AgrADIgBgEIBYAAIABAEg");
	this.shape_3.setTransform(2.7,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#419F2D").s().p("AgrAZQgCgNAAgMIBYAAIACAZgAgrgQIABgIIBYAAIgBAIg");
	this.shape_4.setTransform(2.6,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#89D670").s().p("AgsAIQAAgIACgHIBXAAQgBAHAAAIg");
	this.shape_5.setTransform(2.5,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#29691E").s().p("AgBAWIgBgYQAAgJABgIIABgIQAIAbgIAcIgBgGg");
	this.shape_6.setTransform(7.3,0);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.6,-3.5,15.3,7.1);


(lib.NA_Imp_UpperJaw01_teeth_0 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBE4D3").s().p("ACOAKIgGgPQAIgHAOgFQACAMgFAHQgLAcgdARQAUgVAHgQgAgagEIADgDIAGgJIAIANIAJAOQgKAMgMAFQgFgPABgRgAhlAIQgEgLABgVIAYAYQgEAIAEARgABhAEQAAgOgDgPIAagVQADAPgCAPIgCAQIgCAHQgQAMgOAFQAGgKAEgKgAhHAAQABgFADgEIACgEIAKAJIAHAHIAAAUQgOgJgJgOgAAmAJQABgMgDgOIALgIIABAJQABAJgBAHIAAAJIgSAMIAIgMgAiYgGQgFgSAAgQQAPAMAPASQgCAKACAMg");
	this.shape.setTransform(5,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0AD76").s().p("ABFAPQgMALgQAJQgMAIgOAFQACgRAJgQQAJgMALgIIALgJQADAOAAAMIgIANIARgNIAAgJQAPgLASgLIABgBIAMgHIAbgQIgaAVQADAQAAAOQgFAKgGAJQAPgEAPgNIADgJIAKgEIAOgGIAOgFQgNAGgIAHIAFAPQgGAPgUAWQADgSgDgSQgUASgXANIgbANQAFgYgDgUgAiDARQgCAOAFANQgXgQgSgTIgEgNQgDgKgBgLIgBgKQAQAJAMASIgBgYQAAgNABgNQAPALANANQARASANATQgBgJADgLIACgGIACgIQAKAIAJAJQAJALAHAJIACgEQAJAQAOAIIAAgTIAGAIIABAbQgVgLgMgPQABANAGANQgbgLgRgPQABAUAEARQgagQgVgUgAhPALIAVARQgEgQAEgLIgYgVQgBAUAEALgAiDgCIAaASQgDgMADgLQgQgRgPgMQAAAQAFASgAgPAPIALgPQgCARAGAPQAJgGAMgLQgJAOgMAMIgGADQgFgMgEgRg");
	this.shape_1.setTransform(2.8,1.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.1,-4.6,36,11.9);


(lib.NA_Imp_UpperJaw01 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANAfIgKgPQAPAHAUgNQgLAKgJALgAgcAfIgGgHIgIgJQAOAIATgMIgDAEIgLAQgACrABQAXgKAMgSQgPAbgWAXQAFgKgDgMgAhLABQAQAPAGgHQgDAFgBAFIgCAEQgGgMgKgKgAiCgRQAbAVAFgFQgCAJAAAMQgNgUgRgRgAA+ADQANAFATgLQgSAKgOANQABgJgBgIgACHACQADAIAUgEIgPAGIgKAGIACgQgAjOgeQAPAMAFgCIAAgHQAFAGAJAIQAKAHADgJIABAVQgMgPgQgJIABAKQABAJADAKQgNgRgMgYg");
	this.shape.setTransform(3.6,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B3B3B").s().p("AgqAnIgKgJIgBADQgHAHgPgPQgJgJgKgIIgCAIIgCAGQgFAHgbgYQgNgLgPgLQgBANAAAMQgDAJgKgIQgKgIgEgEIAAAFQgFADgPgLIAwgTQAOgiEuAjIAxAVIgBABQgMAPgXANIgOAEQgTAFgDgJQABgPgCgNIgbAOIgMAHIgBABQgUAMgMgFIgBgKIgMAIIgLAJQgUANgPgHIgHgNIgGAJQgLAHgJAAQgGAAgGgEg");
	this.shape_1.setTransform(3.6,-2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBE4D3").s().p("ACOAKIgGgPQAIgHAOgFQACAMgFAHQgLAcgdARQAUgVAHgQgAgagEIADgDIAGgJIAIANIAJAOQgKAMgMAFQgFgPABgRgAhlAIQgEgLABgVIAYAYQgEAIAEARgABhAEQAAgOgDgPIAagVQADAPgCAPIgCAQIgCAHQgQAMgOAFQAGgKAEgKgAhHAAQABgFADgEIACgEIAKAJIAHAHIAAAUQgOgJgJgOgAAmAJQABgMgDgOIALgIIABAJQABAJgBAHIAAAJIgSAMIAIgMgAiYgGQgFgSAAgQQAPAMAPASQgCAKACAMg");
	this.shape_2.setTransform(5,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0AD76").s().p("ABFAPQgMALgQAJQgMAIgOAFQACgRAJgQQAJgMALgIIALgJQADAOAAAMIgIANIARgNIAAgJQAPgLASgLIABgBIAMgHIAbgQIgaAVQADAQAAAOQgFAKgGAJQAPgEAPgNIADgJIAKgEIAOgGIAOgFQgNAGgIAHIAFAPQgGAPgUAWQADgSgDgSQgUASgXANIgbANQAFgYgDgUgAiDARQgCAOAFANQgXgQgSgTIgEgNQgDgKgBgLIgBgKQAQAJAMASIgBgYQAAgNABgNQAPALANANQARASANATQgBgJADgLIACgGIACgIQAKAIAJAJQAJALAHAJIACgEQAJAQAOAIIAAgTIAGAIIABAbQgVgLgMgPQABANAGANQgbgLgRgPQABAUAEARQgagQgVgUgAhPALIAVARQgEgQAEgLIgYgVQgBAUAEALgAiDgCIAaASQgDgMADgLQgQgRgPgMQAAAQAFASgAgPAPIALgPQgCARAGAPQAJgGAMgLQgJAOgMAMIgGADQgFgMgEgRg");
	this.shape_3.setTransform(2.8,1.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.1,-7,41.5,14.4);


(lib.NA_Imp_RightEye01_0 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020502").s().p("AAUACIgbAAQgKgGgQgCIAQgPIAuALIAFAfQgCgJgMgKg");
	this.shape.setTransform(4.2,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFD9C").s().p("Ag5AbQAMgRANgNIAAAFQAAANAJAJQAKAKANAAQALAAAKgKQAKgJAAgNQAAgMgKgJQgKgKgLAAIgJABIAOgOIAEgDQAQADAKAHQARASAGARQgTAagiAUQglgHgZgMg");
	this.shape_1.setTransform(-0.2,4.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-1.8,13.8,10.7);


(lib.NA_Imp_RightEye01 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373737").s().p("AhhA7IANAAIBhh+IBVApIgDA8IACg3QgvgMgigTQg4A5gmA+QgLgCgIgGg");
	this.shape.setTransform(-0.4,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AhXA7QAng8A3g7QAiATAvAMIgBA2IgHAHQgBgYgEgUQgggGgZgLQgwAqgiAuQgFACgGAAQgFAAgHgCg");
	this.shape_1.setTransform(0.5,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#080808").s().p("AhOApQgJgJgFgHQAIAGALACQANAEAKgEQAhgsAxgsQAZALAgAGQAEAWAAAWIgHAIIAAgMIAAgBIgFggIgwgKIgRAOIgDADIgOAOIgXAXQgOAPgMARIgHALQgNgIgIgHg");
	this.shape_2.setTransform(-0.9,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhHAcIAIgLQAZAMAmAHQAhgUATgaQgGgRgRgSIAcAAQANAKACAKIAAABIAAAMQgnAkggAWQgqgHgegLg");
	this.shape_3.setTransform(0.5,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("Ag5AbQAMgRANgNIAXgZIAOgOIAEgDQAQADAKAHQARASAGARQgTAagiAUQglgHgZgMg");
	this.shape_4.setTransform(-0.2,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhkBKIBsiTIBdA2IgIBDIACg8IhUgoIhiB+g");
	this.shape_5.setTransform(-0.1,-2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020502").s().p("AAUACIgbAAQgKgGgQgCIAQgPIAuALIAFAfQgCgJgMgKg");
	this.shape_6.setTransform(4.2,0.4);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.3,-9.9,20.3,19.8);


(lib.NA_Imp_Pinch01_0 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020502").s().p("AiKgZQgDgXAHgYIAIAKIAGAfQAnAcBDASIgHgNIgIgfIgIgHIAHABQAYACAagDIgUAWIgCAZIADgDIACAJQBCgPA5ghIAGgYIADgEQADALABAMIABASIgFgFQgCAVgHAMQg2AlhCAVQgBgMgHgMQgIAPgDAOQhJgsg0g2g");
	this.shape.setTransform(1.7,0.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.4,-6.6,28.1,14.7);


(lib.NA_Imp_Pinch01 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#585858").s().p("AgNAmIgFADIAEgbIAMgOIgHAfQApgFAkgOQAXgGATgGQg5AghAAPgAiIgBIgGgfIAJALIAAANQAKAKAVAIQAdARAkAFIAHANQhDgUgngagAB3AFIAFAFIgBgQQgBgMgDgKIATgSQAGAfgBAdQgQAOgRAMQAHgOACgVg");
	this.shape.setTransform(3.3,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AiagWQgFgiALgWIADAEQgHAYADAXQA0A2BKAsQADgOAIgPQAJAMAAAMQBAgVA2glQARgKAQgOQACgggHgfIADgCQAMAcgCAnQhJA3hZAhQAAgMgHgMQgIATgCANQhZg2gqgygAhhgUQAXAKAjAEIgJggIAIAHIAJAfQgkgEgegQgAACgeIAAgBIAHgHIgIAgQApgEAfgIQgkAOgoAEg");
	this.shape_1.setTransform(2.7,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020502").s().p("AiKgZQgDgXAHgYIAIAKIAGAfQAnAcBDASIgHgNIgIgfIgIgHIAHABQAYACAagDIgHAHIgBABIgMAOIgCAZIADgDIACAJQBCgPA5ghIAGgYIADgEQADALABAMIABASIgFgFQgCAVgHAMQg2AlhCAVQgBgMgHgMQgIAPgDAOQhJgsg0g2g");
	this.shape_2.setTransform(1.7,0.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13,-7.3,31.4,16.5);


(lib.NA_Imp_Nose01_0 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020502").s().p("AgjAMIAfgXIAoAXQgugMgZAMg");
	this.shape.setTransform(0,-0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.6,-1.4,7.3,2.5);


(lib.NA_Imp_Nose01 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060606").s().p("AgrAQIAnggIAwAhQg1gNgiAMgAAkANIgogXIgfAXQANgHASAAQAQAAAYAHg");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFgBIgPAIIARgRIAYAWg");
	this.shape_1.setTransform(0.3,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020502").s().p("AgjAMIAfgXIAoAXQgugMgZAMg");
	this.shape_2.setTransform(0,-0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,-3.2,8.9,4.8);


(lib.NA_Imp_Moth01 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#612C3C").s().p("Ah4AkQgfgsgVgnQAmAmAkAPQBOAJA4gFQAngcAkgNQAaACAkAJQgbAcglAdQhAALg3AAQg7AAgzgMg");
	this.shape.setTransform(1,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#753549").s().p("AhmAqQgkgSgmgkIgDgGQAqgTAjgJQA0ATAkAbIgSAWQAugmBAgeQBCANAkAiIgLAMQgkgIgagCQgkANgnAdQgWACgXAAQgpAAgwgFg");
	this.shape_1.setTransform(1.3,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050202").s().p("AhOAZQgKgVgEgYQAMgWAXgQQAgAHAMAIIAEAZIgKAPIAPAMIAMgNIgIgNIAEgaQAWgKAZgEQAaAJAQAVQgBAVgIASIgPgEQgvAUgoAfQgdgUgfgOg");
	this.shape_2.setTransform(2.2,5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#883E58").s().p("AgQARQgjgag1gTQgiAJgqATIgBgCQAggVAugMQAQAGAQAHQAgAOAdASQAngdAwgUIAOAEQA4APAjAiIgDAFQglgihBgNQhBAcgtAog");
	this.shape_3.setTransform(1.5,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2E151B").s().p("ABVAoQAIgTABgVQgQgUgagIQgZAEgWAKIgFAYIAJAMIgMAPIgPgOIAKgOIgEgXQgMgIgggIQgXAQgMAVQAEAaAKAUQgQgHgRgFQgtAMghAUQgagxgNgnQALgkAXgoIGAAAIAlBHQgJA5grA3Qgjglg4gPg");
	this.shape_4.setTransform(2.1,3.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.7,-6.1,45.6,27.3);


(lib.NA_Imp_LowerJaw01_teeth_0 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#702116").s().p("AAAAAIABAAIgBAAg");
	this.shape.setTransform(23.1,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBE4D3").s().p("ABTAhQgRgWgcgYQAVAMATAMIARAOIAAAKIgDAbQgEgOgFgPgAAdAlQgUgUgTgRQAcANAWASIACAOQgBAJgDAIgAhQAPQgQAFgLAGQARgOAZgMIgHA2QgFgUgDgTgACIAiQgCgTgFgRQgXgagjgUQAcAJAsAXIAHAEIAEALIADAOIADAXIABALQgJgIgQgFgAh0AFQgJADgNAKQgFgWAFgcQgQADgQAJIgDACQgDgLAGgUQgUAFgQAMQATgSAggKQgHASAAARQAUgLAYgJQgLAegBAZQANgKAQgLQgGARAAAUIgBAGIgBAFQgIgNABgTgAhrAaIAAAAgAC8gBIgJgaQgOgSgYgQQAfAMATALQAFAIAEAHQAFALABALIgSAAg");
	this.shape_1.setTransform(4,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0AD76").s().p("ABLA8QgSgKgOgNQABAQgEAPIgIgCQgYgGgOgPIgBgPIgCgkQATAPAUAUIAIAZQADgIACgJIgDgOQABgWgDgWQAdAYAQAXQAGAOADAOIAEgbIgBgKIgQgOQABgagIghQAiAUAYAaQAFASACASQAQAFAJAIQghgMghAAIAAASIAAANIgBAMQgKgEgKgGgAhvA0IACgSQgUAGgPAKQgCgFAAgFIAAgBQAAgKACgLIABgCQgUAHgSADIgCAAIgJAAIADgSIABgIIADgJQgMACgIADQgDgQADgUQAQgLAUgGQgGAUADALIADgCQAPgIAQgEQgEAcAFAWQAMgKAKgBQgBARAIANIABgFIABgGQALgGAQgFQACAUAGATQgXAOgQAEIgBgMgACagIIgDgMIgHgEQACgUgEgZQAYARAOASIAJAZIASAAIgOADIAAAAIgDABIgEAAIgHAAQgMAAgNgDg");
	this.shape_2.setTransform(3.9,-3.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-10.7,41.6,14);


(lib.NA_Imp_LowerJaw01 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAzAIQAOANASAKQgcgKgHASQAEgPgBgQgAiIAVQAPgKAUgGIgCASQgGgRgbAPgABoAAQAhAAAhAKQg3gHgLANIAAgQgAitgBQASgDAUgHIgBACQgCAJAAAKQgCgOghADgAClgVIgDgQQARAEAPgBIAEAAIAAAAQgVAHgIAbIgEgVgAjFghQAIgDAMgCIgDALQAAgIgRACg");
	this.shape.setTransform(3.1,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B3B3B").s().p("AivAaQgagUgWgrQAFgRALgUQgDAUADAQQARgCAAAIIgBAHIgDASIAJAAIACAAQAhgCACAOIAAABQAAAFACAFQAbgPAGAQIABAMQAQgDAXgOIACgOQAeAGAggGIABANQAOAPAYAGIAIACQAHgSAcAKQAKAFAKAEIABgLIAAgNQALgMA3AGIgBgJQAIgcAVgHIADgBIAAAAIAOgDQgBgLgGgLQAVAOAEALQAIAdhKAkQhUArh1AHQhYgPgrgig");
	this.shape_1.setTransform(4.1,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#702116").s().p("AAAAAIABAAIgBAAg");
	this.shape_2.setTransform(23.1,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBE4D3").s().p("ABTAhQgRgWgcgYQAVAMATAMIARAOIAAAKIgDAbQgEgOgFgPgAAdAlQgUgUgTgRQAcANAWASIACAOQgBAJgDAIgAhQAPQgQAFgLAGQARgOAZgMIgEAmIgDAQQgFgUgDgTgACIAiQgCgTgFgRQgXgagjgUQAcAJAsAXIAHAEIAEALIADAOIADAXIABALQgJgIgQgFgAh0AFQgJADgNAKQgFgWAFgcQgQADgQAJIgDACQgDgLAGgUQgUAFgQAMQATgSAggKQgHASAAARQAUgLAYgJQgLAegBAZQANgKAQgLQgGARAAAUIgBAGIgBAFQgIgNABgTgAhrAaIAAAAgAC8gBIgJgaQgOgSgYgQQAfAMATALQAFAIAEAHQAFALABALIgSAAg");
	this.shape_3.setTransform(4,-4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0AD76").s().p("ABLA8QgSgKgOgNIgDgOQABgWgDgWQAdAYAQAXQAGAOADAOIAEgbIgBgKIgQgOQABgagIghQAiAUAYAaQAFASACASQAQAFAJAIQghgMghAAIAAASIAAANIgBAMQgKgEgKgGgAAgBCQgYgGgOgPIgBgPIgCgkQATAPAUAUIAIAZQADgIACgJQABAQgEAPIgIgCgAhvA0IACgSQgUAGgPAKQgCgFAAgFIAAgBQAAgKACgLIABgCQgUAHgSADIgCAAIgJAAIADgSIABgIIADgJQgMACgIADQgDgQADgUQAQgLAUgGQgGAUADALIADgCQAPgIAQgEQgEAcAFAWQAMgKAKgBQgBARAIANIABgFIABgGQALgGAQgFQACAUAGATQgXAOgQAEIgBgMgACagIIgDgMIgHgEQACgUgEgZQAYARAOASIAJAZIASAAIgOADIAAAAIgDABIgEAAIgHAAQgMAAgNgDg");
	this.shape_4.setTransform(3.9,-3.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.3,-10.7,44.9,18);


(lib.NA_Imp_Leg02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#242424").s().p("AABCeIAig7QAPhLgOgoIgDgIIgzhLIgUAAIgWAeIgWA7IAMg+IAegzIAzgoIAxArQAQAsAHA3QABA2gRA9QgoBDgTADIgHgGg");
	this.shape.setTransform(-3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606060").s().p("AgDCxIgDgCQARgDAohDQARg9AAg2QgIg4gPgsIgwgqIg1AnIgdAzIgNA+IAIhJIAfg+IA5gtIA7AoIAeBFIAMBBQgCA+gWA2QgvA6gcAMIgDgDg");
	this.shape_1.setTransform(-1.4,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AgDC7QAagMAwg6QAVg2ACg/IgMhAIgehFIg7goIg4AtIgfA9IgIBJIAAhMIAihHIA9gwIA/ArIAgBKIAPBJQgBA+gVA5IgvAzIgiATIgDgDg");
	this.shape_2.setTransform(-1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AARB6Qgahlgyg4IgDgEIAWg7IAWgeIASAAIA1BLIADAIQAOApgPBKIgiA7IgEgHg");
	this.shape_3.setTransform(-5,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkBNQgRhEg3hUIgDgFIADADQAwA7AcBjIgEgEg");
	this.shape_4.setTransform(-7.3,8.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.3,-19.1,20.8,38.1);


(lib.NA_Imp_Horn01 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBB0BF").s().p("AAzgGQgUgag2gVQAXAegBANQgXAQgXAKIgMgJQAbgHAcgTQgIgYgagUQA0ANAuAqQgGAjgkAkQAcgjAFgig");
	this.shape.setTransform(2.1,-4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#572734").s().p("AAYAxQgegOgZgWIgJgJIgJgHIAMAGIAMAGQATgJAQgQQAEgMgMgWQAkASAMAZQgFAdgUAaIADADIgEgCg");
	this.shape_1.setTransform(1.1,-3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#944259").s().p("AAOA4QAUgaAFgeQgMgYgigSQAKAWgDAMQgRAPgTAKIgNgGQAYgKAXgQQACgNgYgeQA2AVAUAaQgFAigcAjIgDgCg");
	this.shape_2.setTransform(2.2,-4.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,-11.2,12.1,12.8);


(lib.NA_Imp_Foot01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#301620").s().p("AgGAEIgDgKIATANg");
	this.shape.setTransform(2,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBB0BF").s().p("AgNgNIAFgBQARAOAFAPQgKgPgRgNg");
	this.shape_1.setTransform(1.6,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#944259").s().p("AALASQgFgQgJgRIAEAAQATANAKAQIgVgOIADAKIADAJIgEgBgAgaAIIgDgaIAGABIAAAaIgDgBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#572734").s().p("AgQAJIAAgaIAIACIAIAAIACAAQALARAEAQQgUgCgNgHg");
	this.shape_3.setTransform(-0.6,0);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-1.9,6.1,3.9);


(lib.NA_Imp_Ear01 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgbgEQAagVAdgDQgKAWABAQQACARgYACQgTgOgFgTgAgRgCQAKAEADAEIAAAOQATABAAgXQgBgJAFgLQgVAGgPAOg");
	this.shape.setTransform(2.2,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAiQAYgCgBgRQgCgQAKgWQgcADgbAUQAUgaAtgIQgLAegCAaQAAANgYAAIgEgBgAgJALQgDgEgKgGQAJgBAKAEQABAKgHALg");
	this.shape_1.setTransform(2.7,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020502").s().p("AgFAWQAFgLAAgKQgJgCgJABQAPgPAWgGQgGALABAJQAAAXgSAAIgBAAg");
	this.shape_2.setTransform(2.3,-1.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.6,-5.8,6.6,7);


(lib.NA_Imp_Body01 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0B0B0B").s().p("AkYhUIgEgHIADgKIAGAJQA+BcC3A3QCcgdCRhWIANgIIABAOQiMCGizAWQiagthciNg");
	this.shape.setTransform(-0.2,24.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B3B3B").s().p("AkQBcQAriwBliaQAlABBFAyQBOgpBbgMQBsCOASDfQiRBYibAdQi3g4g+heg");
	this.shape_1.setTransform(-0.4,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AiJgEQA3gdBRgKQBNAMA+AYQhbALhOAoQhFgwglAAg");
	this.shape_2.setTransform(0.5,-17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACQiaQg+gYhQgMQhPAKg3AdQhlCYgrCyIgGgJQAsi2BkicQAugeBigNQBfALBHAnQBgCoAPDFIgNAIQgTjghriOg");
	this.shape_3.setTransform(-0.1,-2.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.7,-23.8,57.1,58.9);


(lib.NA_Imp_Arm01 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AAfgKIAOAOIASADQgSgNgBgLQAJAQAYAMIgigEIgOgNQg0AegWBEQAThNA5gZgAgygPIASAEQAUgKAigFIAEADQgeAFgXAKIgBAGIgSgFIgvAUgAArgqIAAgBQAAgVAHgNIgJAEQgFACgBADIAAgFQALgKASgIQgSAXgBAVIAIADIALgSQAPgGAPADIgFADIgXAEIgNATIgKgDgAAagsQgEgKgBgMQgEAGAAAEIgCgFQACgJAKgMIgCAPQgBAKADAJIAIAAIABAEg");
	this.shape.setTransform(9.3,-6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhRA1QgKgZABgWIAvgUIARAFIACgGQAWgKAfgEIgEgEQAAgQgFgOQgBgEAEgGQABAMAEAKIALAAIgCgEQgBgJABgKQACgDAEgDIAJgEQgGANAAAWIAAAAIAKADIANgTIAWgEQgQAKgMAMIgDAEQgIAJgFAKQABALASANIgSgBIgPgQQg4AZgTBNQgagLgNgVg");
	this.shape_1.setTransform(9.1,-5.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-15.5,18.9,18.5);


(lib.Lead_Ombre01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0.729,1],0,0,0,0,0,67.7).s().p("AnfBEQjIgdAAgnQAAgmDIgdQDHgcEYAAQEZAADGAcQDJAdAAAmQAAAnjJAdQjGAckZAAQkYAAjHgcg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-9.6,136,19.2);


(lib.GUN_TANK_GOLD = function() {
	this.initialize();

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#171717").s().p("ABGANQgXgNgWANQgZgNgSANQgWgNgWANQgcgNgSAOQgEgOACgSIC/AAQAIAPAQACIAHABQgHATgPAAQgJAAgLgGg");
	this.shape.setTransform(67.2,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AApAQQgcgWgQAWQgWgUgVAUQgegTgQATQgGgBgFgDQgEgHgCgGQARgNAdANQAVgOAXAOQASgPAZAPQAWgPAXAPQAeAPALgdQADAPgPAOQgFACgHAAQgXgWgWAWg");
	this.shape_1.setTransform(67.4,-3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B8B8B8").s().p("ABUAAIi/AAIABgPIDFAAQAAAJACAGQADALAMAFQgQgCgIgOg");
	this.shape_2.setTransform(66.9,-7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#636363").s().p("ABuAEIgHgCQgMgCgDgNQgCgHAAgIIjFAAIgBAPQgCARAEAPQADAIAEAHQgWgOAGg3IDUAAQgEAfAQADIAQAAIAAAGQgBAZgXAGQAPgPgCgRg");
	this.shape_3.setTransform(67.4,-6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C96418").s().p("Ah8AeQB8g5B9ggQiBAnhKBQQgegMgQgSg");
	this.shape_4.setTransform(-0.7,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFA2").s().p("AgxAZIABgCQAEgGACgFIACgKQAAgHgEgIQgGgPgUgMICMAAQADAWgQAUQgIAKgLALIgPALQgXAHgRAAQgaAAgGgQg");
	this.shape_5.setTransform(106.2,-21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B8B8B8").s().p("AEzAKQALgKAHgJIAgAAQAEAJABAKgAlRAKQgSgKgGgJII2AAIgCAJQgCAEgEAGg");
	this.shape_6.setTransform(80.2,-19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E88625").s().p("ApfAwQAfAEARgOQA/gvBQgaQBQgbBfgDQAPAGASAEQA3ABA3gLQBKgLBdAIQEpAXDggXQAFAJAOAKIsCAAQg1AFgwAJQgqAIglALQh9Aeh+A7QgLgMgEgNg");
	this.shape_7.setTransform(46.1,-3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#474747").s().p("AiogzIANAEQABBUBmAUIAGANQhygRgIhogACegZQgpgPAdgYIAPgFQgkAYAsAUIgLAAg");
	this.shape_8.setTransform(-2.4,2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AqfAeQAZgbA2gbQBJgpB7guQAGAbgmAVQgeATg3AUIgCABQhYAdg2AlIAIAUQAXAyA0AIIAFgDQBYhEBzguQA+gWBagIIKeACIAFAEIAEAFInuAAQhFAAg0APQi2BchEgGQhUgthUBfQhmgUgBhWgAliAIIgPAFIgSAIQgeANgbARQA+BLEBiVIgLAAQh7AAhfAfgAgbiHIIVAAQgJANgXALIgjAAQgogLhHALIi7AAIAEgKIgOACIg6AIQhJgJgbgPgAJMhvIAAgBQARgLAMgMIA2AAQACAMgCAMg");
	this.shape_9.setTransform(49.2,-5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#636363").s().p("Ao2CSQBUheBUAtQBEAFC2hcQA0gPBFAAIHuAAIAEAFIn5AAQhJAAg2AYQh4A/hlATIgUAEQhNgyhSBjgAqqAlQAWgZAugaQAygdBKgfQgCAEgFAHIAPgHQAtgWApgPIACAHQh7AuhJAoQg2AbgZAbgAIyhIIADgFIAAgCIBlAAQAFgLACgLQACgMgCgLQgBgLgEgLIgfAAIAHgMIAbAAIAGAMQANAhgPAiIgCACIgCAFgAgxiSQgEgFAAgHIImAAIAQAAQADAGAAAGg");
	this.shape_10.setTransform(49,-6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFFFF","#FFFF6B","#FFFF00","rgba(237,146,0,0.808)","#F09A00"],[0,0.475,0.906,1,1],-5.8,-5.3,0,-5.8,-5.3,128.3).s().p("ACsBCQglgOgrAAQgjgBgoAJIAsgMIANgDIAtgLQAmgHApgGQgNApA6AJQAcAEAjgBQAegBAjgDQg+AKgwAAQg3AAgigOgAlyggQBOgnBxgIQgoAVgWAWQgiAYgZgHQgSgEgcAJQgKgJgOgJg");
	this.shape_11.setTransform(42.4,-18.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#943800").s().p("AF9AVIgBgBIAbAAQARAageAVQAQgdgdgRgAl6gXQgdgXgGgTIAWgBQAAAHAGAJIAAABIABAAIACAEQAIAJASALIClAAQgNgQgFgSQA5AGA4AMIh/AdQgtAKghAAQgyAAgbgVgAEtgkQgjAHgrAFIg0AGQBDgSA/AAg");
	this.shape_12.setTransform(57.9,-10.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#171717").s().p("AprCPQBuhmCWggQAbgGAegDQA6gFBDACIJAAAIAHADIqeAAQhaAGg+AYQh0AuhXBEgAm2AvIATgIQgdAYApAPQgtgEAOgbgAk7g4QgfgSgBgRQgDgIAGgIICgAAQAAALAFALQAEAPAOAOgAIBg/QAHgLASgLIAAAAIBTAAQgDALgEALgABahDQgDgHAEgLIC7AAIg6AJQhAANgkAAQgTAAgLgEgAGFhVIAjAAIgRAGQgIgEgKgCgAhxiCQgBgFAAgIIAJAAQAAAIADAFQAGALASAKQAdAPBHAJIgWAFQhogOgJgkg");
	this.shape_13.setTransform(54.3,-7.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#702800").s().p("ABdAZQgOgOgEgNQgFgLABgLIifAAQgHAIgBAIQgCAIAFAGQgFgHgBgHQgBgNALgJICmAAQAAAPAFAOQAFAQANAQIgHgGg");
	this.shape_14.setTransform(28.6,-15.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFFFFF","#FFFF6B","#FFFF00","rgba(237,146,0,0.808)","#F09A00"],[0,0.475,0.906,1,1],-8.3,-29.2,0,-8.3,-29.2,124.9).s().p("AplBzQgEgHAAgIQA8gmBaggIANgEQBYggAGgnIgDgMQgFgPgMgMIgJgJQAcgJASAEQAZAHAigYIgKALIgJAOIgCACQgHAOAEAPQADANAOAQQATAVAaAJQhgAEhQAaQhQAbg/AxQgNAKgWAAIgNgBgAl/ACIAAACIAAADQABAAAAAAQAAAAABABQAAAAABAAQAAAAABAAIABgBQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgBgBIgEABgAlggCIAAACIAAABIAEABIABgBQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgBgCQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABgAkigHQAAAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIADABIACgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAIgCgBIgDABgAlBgHIgBACIABADIADABIACgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIgCgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAgABAAAQhegJhKAJIAUgCIA8gPQAmgJAjABQArAAAlAOQBAAYCHgUQAIgCAJAAQA7gIArgLIAKgDIAagIIABgBQATgHAOgIQASgKAJgMQAKAbBAgRIgIAFIgKAHQgiAZASAdQhxAKiEAAQiAAAiTgJg");
	this.shape_15.setTransform(46.7,-10.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC4E00").s().p("AHdBGIAVAAQAQAjgzAMQAfgVgRgagAmpAzIgBgCIABgDIADgBIABABQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgBACQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBgAmKAtIgBgDIABgCQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAIACABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgCABIgDgBgAlMApQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIACgCIACACQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgCABIgCgBgAlrApIgBgDIABgCQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAIABACQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgBABIgDgBgACEASQAjAFBXgRQAfgGAagCQBHgKAoAKIAGACQgYAGghAGQg/AAhEASIglABQg1AAgSgNgAn1gIQAggRAngMQAKALAFAKQgpAOgtAUQAOgQgOgKgAiLgJQgFgOAAgPIioAAQgLAJABANIgVABQgEgKAEgJQAFgLAPgRQBngQCHAEQgHAKAAAJQADAiBlAUIgiAHIgEABQg4gKg5gGgAHehEQgUgag4gWQBPAUANAcg");
	this.shape_16.setTransform(50.9,-15.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F58702").s().p("AHQBGIgCgBIgEgFIgEgEIgFgFIgGgEIARAAIAAAAQAeARgRAdQAzgMgQgiIAQAAQATArhRANQALgUgJgRgAnzgDIADgFQABgKgGgEQgIgFgRABQAlgZA2gRIAPALQgnANggARQAOALgOAQIgPAGQAFgGACgDgAkVADQgRgIgJgKIgCgDIAAgBIgBgBQgFgIACgHQABgJAHgIQgFAIACAJQACARAeARICaAAIAHAEgACOAAQgHgFgCgGQAhAKBigTIA5gKQBHgKAoAKQAKADAJAEIgNAEIgGgCQgogKhHAKQgaADgfAHQhDALgkAAIgTAAgAhShLQAAgIAHgLQiHgDhnAPIAKgJQADgDAEgCQBsgOCTAFQgMAFgJAGIgIAHQgBAHACAFQAIAkBnAOIgUAFQhlgVgDgig");
	this.shape_17.setTransform(49.9,-13.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FBFA60").s().p("AqHBzIgIgUQA2glBYgfIACgBQA3gUAfgRQAlgVgFgbIgCgGQgGgKgKgLIgOgMQgNgKgSgKQBgg0CHgCIAOAAQgwAYgcAWQgEACgDAEIgJAJQgQARgEALQgEAJADAKQAGATAdAXQAtAhBugWIB/gdIAFgBIAigJIAUgEIAXgFIA7gIIANgCIgEAKQgDALADAHQACAGAGAGQAYARBVgFIA0gGQArgFAjgHQAigGAYgHIAMgFIAQgGQAXgLAKgNQAEgGACgFIACgKQAAgGgDgHQgOgchOgUIDpAAQABAagLAWIgIANQgHALgLAKQgLAMgRALIgBABQgRALgHALIgBACIgDAFQgIAWAzAdIhIAAIgPAAIgWAAIgbAAIgRAAIpBAAQhCgCg7AHQgdADgbAGQiWAghvBmIgEAEQg0gIgYgygAm0hzQAOAIAKAJIAJAJQAMANAFAOIADAMQgGAnhYAgIgNAFQhaAgg8AmQAAAIAEAHQAEANALAMQAQASAeAMQBKhSCEgnQAlgLApgIQAwgJA2gFIMBAAQgNgKgGgHQgSgdAigZIAKgIIAIgFIAPgLQALgLAIgKQAQgWgDgWIiOAAQAUAMAGAPQAEAIAAAJIgCAKQgCAFgEAGIgBACQgJALgSALQgOAHgTAIIgBAAIgaAIIgKADQgrAMg7AIQgJAAgIABQgjAEgeABQgjAAgcgEQg6gIANgpQgpAFgmAHIgtALIgLAEIgsALIg8APIgUAFQg3AJg3gBQgSgEgOgEQgagMgTgVQgOgPgDgNQgEgPAHgPIACgBIAJgPIAKgKQAWgWAogWQhxAIhOAog");
	this.shape_18.setTransform(49,-10.2);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.3,-27.6,136.7,37.5);


(lib.GUN_TANK_10 = function() {
	this.initialize();

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#419F2D").s().p("AgWA0IAIgsIgYgGIAFgWIAYAGIAIgrIAWAGIgHArIAZAFIgGAWIgYgFIgJArg");
	this.shape.setTransform(-1.3,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#232323").ss(0.8,1,0,3).p("AAAA5IgXgFIAKgsIgZgGIAGgVIAXAGIAJgrIAWAFIgIAqIAZAHIgEAWIgagGg");
	this.shape_1.setTransform(-1.4,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292929").s().p("AgngsQAJgNAMgNQATAGAnAkQgZA4gDArQghgygShBg");
	this.shape_2.setTransform(1.8,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0A0A0A").s().p("AApBeQg4gRgpgfQAFgNAJglQAJgtAigtQARBDAkAwQgCARADAOQAHArgQAAIgFgBg");
	this.shape_3.setTransform(-2.4,5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F4F4F").s().p("AhMBaQAFgiANgoQAZhOAmgfQAvAaAZAfIgLAAQgmgkgWgFQgJAMgJANQgkAtgJArQgJAngFANQgCAGgCAAIgBgEg");
	this.shape_4.setTransform(-0.9,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#212121").s().p("AAqBaQgigCgrgWQgigRgGgJQACAAABgFQApAeA4ASQAWAHgHgyQgEgOACgRQADgoAYg7IAMAAQglBfAJAoQAEAUgBAMQgDAOgHAAIAAgBg");
	this.shape_5.setTransform(-0.8,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464646").s().p("Ag1AWIgXgsICZAAIgDAHIiLAAIAUAlg");
	this.shape_6.setTransform(75.7,-11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#215919").s().p("AgJAJIgNgQIAtAAIgMAQg");
	this.shape_7.setTransform(75.9,-11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#62C640").s().p("AAUAJIAPgQIAUAAIgNAQgAgpAJIgNgQIAUAAIABABIAOAPg");
	this.shape_8.setTransform(75.7,-11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0A0A0A").s().p("AgxATIgUglICLAAIgUAlgAARAEIAWAAIANgQIgUAAgAgLAEIAUAAIAMgQIgtAAgAgsAEIAWAAIgOgOIgBgCIgUAAg");
	this.shape_9.setTransform(76.1,-11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#327823").s().p("AhPADIgMgFICsAAIALAFg");
	this.shape_10.setTransform(59.2,-21.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#215919").s().p("Ai/AJIAdgQIBOAAIgOAHIDFAAIAPgHIBOAAIgbAQg");
	this.shape_11.setTransform(39.9,-16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#62C640").s().p("ADWAnIgdgSIATAAIAbASgAC4AnIgbgSIARAAIAdASgACZAnIgcgSIATAAIAcASgAB4AnIgcgSIATAAIAbASgABaAnIgagSIARAAIAcASgAA8AnIgdgSIAUAAIAbASgAjmAnIAFgHIABAAIAEgGIgBAAIAFgHIAAAAIAJgNICxAAIALAHIigAAIgDAGICqAAIAMAHIi8AAIgEAGIDHAAIALAHgAgOgUIgcgSIATAAIAaASgAgvgUIgcgSIATAAIAbASgAhNgUIgagSIARAAIAcASgAhrgUIgdgSIAUAAIAbASg");
	this.shape_12.setTransform(48.8,-22.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#205719").s().p("AgOAIIgCAAIgEgKIAAgEIAlAAIAEANIgeABg");
	this.shape_13.setTransform(89,-7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2E7522").s().p("AAOAPIglAAIgBgIIgBgHIApAAIgBgJIgnAAIAAgHIAoAAIAEgNQAHAOgBARQgCAUgGAIg");
	this.shape_14.setTransform(89.3,-9.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1A4714").s().p("AgaAlQgCgBAAgFIAAhDIAIAAQgHAgAJAiQAAABABAAQABAAAAgBQABAAAAAAQABgBAAgBIAEgEIACAAIAFAAIgEADIgPAHIgDADgAgQgHIABgIIAngBIABAJgAgPgWIAEgOIAoAAIgEAOg");
	this.shape_15.setTransform(88.4,-8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#317322").s().p("AAAAlQgEAAAAgGIAAhDIAHAAIAABDQAAAFACABg");
	this.shape_16.setTransform(85.1,-8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0B1F08").s().p("AAAAhQgJgiAHggIAHAAIgEAOIAAAHIgBAIIABAHIABAIIAAAFIAEALIgEAEQAAABgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAAgBg");
	this.shape_17.setTransform(86.6,-9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#194514").s().p("AA4A9IAAgGIAfAAIABgCQAGgJAAgHIAAhcIAAgFIAFAAQAAAQAHAHIABAAQgFAMAAARQAAAPAFALIAIAAIAAAPQAAANgUAJQgFACgGABIgFADgAAjA9IAAgGIANAAIAAAGgAANA9IAAgGIANAAIAAAGgAgHA9IAAgGIALAAIAAAGgAgdA9IAAgGIANAAIAAAGgAgzA9IAAgGIANAAIAAAGgAhJA9IAAgGIANAAIAAAGgAhpA9IgGgEIgBgCIgCAAIAgAAIAAAGg");
	this.shape_18.setTransform(68.1,-8.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#47A932").s().p("AhlA4IgCgCQgCgGgBgIIAAgGIAAhbIDVAAIAAAFIjQAAIAABuIAAgCg");
	this.shape_19.setTransform(66.8,-8.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AAqAHIgRgKIg2AAIgQAKIguAAIAAgOIC3AAIAAAOg");
	this.shape_20.setTransform(66.6,-11.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABTAkIAAgiIAJAAIAAAigAA6AkIAAgiIAKAAIAAAigAAlAkIAAgiIAIAAIAAAigAAPAkIAAgiIAJAAIAAAigAgFAkIAAgiIAHAAIAAAigAgaAkIAAgiIAIAAIAAAigAgxAkIAAgiIAKAAIAAAigAhGAkIAAgiIAJAAIAAAigAhbAkIAAgiIAIAAIAAAigAhbgfIAAgEIC3AAIAAAEg");
	this.shape_21.setTransform(66.6,-9.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#636363").s().p("AAlAHIgPgJIgvAAIgOAJIg0AAIAAgDIAuAAIAQgKIA2AAIARAKIAyAAIAAADg");
	this.shape_22.setTransform(66.6,-11.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2E7522").s().p("ABCA3IAAgBIgHAAIAAABIgOAAIAAgBIgJAAIAAABIgNAAIAAgBIgIAAIAAABIgOAAIAAgBIgHAAIAAABIgNAAIAAgBIgIAAIAAABIgOAAIAAgBIgJAAIAAABIgMAAIAAgBIgJAAIAAABIghAAIAAhtIDRAAIAABcQgBAGgGAKIAAABgABPAgIAJAAIAAggIgJAAgAA1AgIAKAAIAAggIgKAAgAAhAgIAIAAIAAggIgIAAgAAKAgIAJAAIAAggIgJAAgAgJAgIAJAAIAAggIgJAAgAgfAgIAIAAIAAggIgIAAgAg1AgIAJAAIAAggIgJAAgAhKAgIAJAAIAAggIgJAAgAhgAgIAIAAIAAggIgIAAgAARgbIAQALIA3AAIAAgDIAAgQIAAgEIi4AAIAAAEIAAAQIAAADIA0AAIAPgLg");
	this.shape_23.setTransform(67.1,-8.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1C1C1C").s().p("Ag3AKIAAgBIgDgKIAAgEIAAgEIBwAAIABAGIAAACQAAAFACAFQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAg");
	this.shape_24.setTransform(94.3,-13.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#525252").s().p("Ag5AGIACgLIBxAAIAAAFIgBAGg");
	this.shape_25.setTransform(93.9,-19.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#171717").s().p("AjtAHQACgHAEgGIA3AAIBFAAIE1AAIAjAAIAAANg");
	this.shape_26.setTransform(61.8,-11.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C2C2C").s().p("AjeACIgLAAIgCgDIHXAAIAAADg");
	this.shape_27.setTransform(62,-6.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AmwBwQgTgHgFgMQAHgPAbgLQgQAPANAbIADAFIgKgCgAHEgDQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQgCgEAAgIIAAgCIgBgGIgBgLIAAgKIAAgKIAAgCIAAgMIAAgHIAAgGIACgOQABgQADAAQACAAABAQIABAOIABANIAAAMIAAACQAAAVgCAQIAAACQgBALgBADgAFMgDIgDgOIgBgEIgCgRQgBgGAAgGIAAgGIAAgOIABgNIAAAAIABgFIABgEQABgLADgKIACAAIACAAIAAACQgDALgBAMIgBAFIgBANIAAAOIAAAGQAAAGABAGQAAAHACAGIAAAEIAAAEIADAMIAAACg");
	this.shape_28.setTransform(55,-11.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#11330E").s().p("AA8AJIgZAAIgeAAIgmgBIghAAQgFgCABgIQAAABAAABQAAAAABAAQAAAAAAAAQABAAABAAICFAAQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAgBIABgFIABAAIgBADIAAACQgBALgEAAg");
	this.shape_29.setTransform(26.3,-10);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#184012").s().p("AiNgnIgDgEQgFgIADgKQAOgpAxgEID6AAIgQANQiGgHgmASQgNAFgCAHQggA9hBgXQgRAegHAhIAAAGQgEAUABAVIABASIAAACIAAAJQgUhLAmhHgAh/hHQgEAIgCAJIgBACIgCAFIADACQAiALAdgcQAIgHgCgLQAAgEgEgFIAAgBQgCgDgEgBQgDgDgGgBIgKAAQgbAMgHAPg");
	this.shape_30.setTransform(22.1,4.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#232323").s().p("AnOBmQACgGAEgEIACgGIABgBQAHgJAJgGIAJgFIAFgBIAAAAIACgBIAFgCIACAAQAFgCAHAAIAPAAQgHhCggg3QAVAXAYBVQAGALAMACIAQAAIAzAAIAoAAIAdAAIAeAAIAhAAIABg7IAMAAQgEAIgCAHIAAAEIgBALIAAAFIAAADIABAEIACAHIADAEIABAEIALAAIgIAHIj8AAQgxADgOAqIABgHgAFdghIgGAAQgBgGAAgGIAAgGIAAgOIB0AAIAAANIAAABIABAKIAAAKgAFXhNIABgGQABgMAEgLIAAgCIAOAAIgCACIgDALIBcAAIADgLIgBgCIAMAAQgDAAgBAQIgBAPg");
	this.shape_31.setTransform(53.8,-12.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#215919").s().p("Ag1ClQhGgZACg3IACgOQAWhHAPgYQAPgbAdgnQALgOANgNIBHBXIgBABIgDAFQgEAFgCAFIgBAHQgCAIAEAIIADAEQglBJATBLQgKAQgXAAQgVAAgggMgAAViUIAXgOQAPgIAPgGQAYANAYBrIgOAAQgHAAgGABIgBAAIgGACIgCABg");
	this.shape_32.setTransform(2.7,-0.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2F7520").s().p("AgygaQASgSAUgNIA/BdIgBAAIgEACIgJAFQgJAGgHAJg");
	this.shape_33.setTransform(6.2,-9.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6ACC55").s().p("AgfAFIAGgFIApgUIARANIgOAFIgCAAIgFACIgHACIgSAMIgNAHg");
	this.shape_34.setTransform(7,-18.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#47A932").s().p("AgEC2QgqgGgegRIgDgDQgngUgCgcIgBgNIAAgMQgCA3BGAZQBDAaATgeQgEAYgbAAIgGgBgAh0AuQAMhEAshGIANgYQAZgjAfgYIAGAQIAMgHQgrAbgfAsIgYAlQgkA+gIAqgABKiyIAJgEQAgA3AHBFQgYhrgYgNg");
	this.shape_35.setTransform(2.7,-0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#62C640").s().p("AhDAPQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgJIAAgDQgBgEABgDQAAgGADgBIAAAAIAAADIAAAJIAAACIAAACIABAFQAAAAAAABQABABAAAAQAAAAABABQAAAAABAAIB/AAQABAAAAAAQABgBAAAAQAAAAABgBQAAgBAAAAIACgFIAAgEIAAgJIgBgDIABAAQACABABAGIAAAHIAAABIAAAFIgBAGQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_36.setTransform(26.2,-11.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8CD87C").s().p("AhgBqQAHgqAkhAIAYgjQAdgsAugaIAUgMIAHgDIAFgDIACAAIAOgGIAIAHIgJAEQgPAGgQAIIgWAPQgUANgSARQgLANgLAOQgdAmgPAaQgOAbgXBGIAFgXg");
	this.shape_37.setTransform(0.9,-6.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#838383").s().p("AgUgCIAOgHQgLAMAmgCIgQAFIgBABQgEABgDABg");
	this.shape_38.setTransform(10.8,-20.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#626262").s().p("AmEBrIAAgBIABABgAidBMIgCgIIgBgEIHbAAIAAAEIAAAIgAjNApIAAgFIAAAFgAm4g/QAtgRA3gBIA4AAQADALgDAKIg6AAQgOAAgOACQgWACgTAFIgFAAQghAAAJgMgAEyg8IgUAAIg8AAIgrAAQgDgLAEgLIB6AAIAjAAQgCALgBALgAFthSIAEgLIAZAAIgDALgAGVhfIADgLIAjAAIgDALg");
	this.shape_39.setTransform(54.1,-15.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AjVBgIgeAAIgMgaIAaAAIAGAAQAEAAAAgNIAAgBIABgEIgBgFIAAgBIAAgJQAAgGgCgBIgBAAIgyAAIgGgPICdAAIAJAWIg3AAIgMAAIgBA7gAlrBgIgQAAQgMgCgGgLQgYhVgVgXIADgBIADgBQASgGATgDQANgCAMgBIALAYIgnAAIAMAeIAqAAIAGAPIgRAAIgBAAQgDABAAAGQAAADAAAGIAAADIABAIQAAALAFABIAgAAIANAbgAiuBLIAAgDIAAgFIABgLIAAgEIHaAAIAAAEIAAALIABAFIAAADgAE2AlIgihOIAuAAIAAABIgBAMIAAAOIAAAGQAAAGABAEIADASIAAADIADAOgAgrAlIgJgWIBIAAIAlgeICdAAIgngZIAqAAIAxBNgAFJAPQgBgGgBgHIAGAAIBuACIAAALgAFWg6IAKgNIAaAAIAOgOIAiAAIADgKIAHAYIABACIgDALg");
	this.shape_40.setTransform(55.4,-16.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4F4F4F").s().p("AjvBFIgpAAIgMgbIAoABIAeAAIAMAagAFOAKIgjAAIgyhOIA8AAIAiBOgAhQAKIgJgUIBFAAIAJAUgAk1ACIgHgMIBGAAIAHAMgAlKgqIgMgYIATgCIAzAAIgSAag");
	this.shape_41.setTransform(52.2,-13.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9F9F9F").s().p("AiMBdIgDgDIHZAAIAAADgAmmgdQAEgCAFAAIACgBIAPgFQATgFAWgCQAOgCAOAAIA5AAIgGAJIgzAAIgTABQgMABgNACQgTAEgSAFIgDABIgDABgADLglIgEgIIgBgBIAqAAIA9AAIAUAAIAgAAIgCAEIgBAEIguAAIg7ABgAF1hCIACgCIAIgLIgDALIgKANgAGZhPIAOgNIgDALIgOANg");
	this.shape_42.setTransform(52.6,-16.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2B2B2B").s().p("ADRAKIACgYIA6AlQgEALADALIABABIAEAIgAjHAYIAWgcIAEAAIgDAOIgYAjQAEgKgDgLgAAyAIIgugeIgEgfIA2AnIAAAYgAgLgPIAAgHIgEgXIAFAAIADgIIAEAfIAAAHgAgigPIAAgHIgFgXIAGAAIACgIIAEAfIAAAHgAg2gPIAAgHIgEgXIAFAAIADgIIADAfIAAAHgAhJgPIAAgHIgEgXIAEAAIAEgIIADAfIAAAHgAhdgPIAAgHIgEgXIAFAAIADgIIAEAfIAAAHgAhwgPIAAgHIgEgXIAEAAIADgIIAFAfIAAAHgAiDgPIAAgHIgFgXIAFAAIADgIIAFAfIAAAHgAiXgPIAAgHIgFgXIAHAAIABgIIAFAfIAAAHgAiqgPIAAgHIgFgXIAGAAIACgIIAEAfIAAAHgAi+gPIAAgHIgEgXIAGAAIACgIIAEAfIAAAHgAjSgPIAAgHIgEgXIAGAAIACgIIAEAfIAAAHgAjlgPIAAgHIgEgXIAFAAIACgIIAFAfIAAAHgAj4gPIAAgHIgFgXIAGAAIACgIIAFAfIAAAHgAkMgPIAAgHIgFgXIAHAAIABgIIAFAfIAAAHg");
	this.shape_43.setTransform(45.6,-25.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0A0A0A").s().p("AkEBYQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIgBgEIAAgDIAAgEIAAgIIAAgDIARAAIBGAAIAxAAIABADIAAAIIAAAHIgBAEQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAgAAoAvIhDAAIicAAIhHAAIgpAAIgNggIAoAAIAoAAIATgXIAGgJIAYgjIA+AAIgHgRIgDAAIgOAAIgjABIgFAAIhKAAIgTAAIgIgTIALAAIAAAHIAIAAIAAgHIABAAIAKAAIAAAHIAIAAIAAgHIAMAAIAAAHIAIAAIAAgHIALAAIAAAHIAIAAIAAgHIAMAAIAAAHIAIAAIAAgHIALAAIAAAHIAIAAIAAgHIAMAAIAAAHIAIAAIAAgHIAFAAIAGAAIAAAHIAIAAIAAgHIADAAIAJAAIAAAHIAIAAIAAgHIALAAIAAAHIAIAAIAAgHIAMAAIAAAHIAHAAIAAgHIAMAAIAAAHIAHAAIAAgHIAMAAIAAAHIAIAAIAAgHIAQAAIAAAHIAIAAIAAgHIAHAAIAuAhIADACICcAAIBAAsIAnAXIieAAIglAgg");
	this.shape_44.setTransform(45.9,-19.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4A4A4A").s().p("ABaAgIAAgbICeAAIgDAbgAiLAgIADgQIAjgBIAOAAIADAAIAHARgAAggBIgFgeIAJAAIAFAegAAHgBIgDgeIAPAAIAAAIIAFAWgAgKgBIgEgeIAMAAIAAAIIACAWgAgdgBIgEgeIAMAAIAAAIIADAWgAgwgBIgFgeIAMAAIAAAIIAFAWgAhEgBIgEgeIALAAIAAAIIAFAWgAhUgBIgDAAIgEgeIAHAAIAEAAIAAAIIAFAWgAhlgBIgGAAIgEgeIAKAAIACAAIAAAIIAEAWgAh+gBIgFgeIAMAAIAAAIIAEAWgAiRgBIgFgeIAMAAIAAAIIAEAWgAilgBIgFgeIAMAAIAAAIIAFAWgAi5gBIgEgeIALAAIAAAIIAFAWgAjMgBIgEgeIALAAIAAAIIAFAWgAjfgBIgBAAIgEgeIABAAIALAAIAAAIIAEAWgAjygBIgEgeIAKAAIAAAIIAEAWg");
	this.shape_45.setTransform(42,-27.9);

	this.addChild(this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-31.2,110.4,49.1);


(lib.GUN_TANK_09 = function() {
	this.initialize();

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#171717").s().p("AgWAOIABgJIAmAAIACAJgAgVAAIADgNIApAAIgEANg");
	this.shape.setTransform(89.1,-10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAOAPIglAAIgBgIIgBgHIApAAIgBgJIgnAAIAAgHIAoAAIAEgNQAHAOgBARQgCAUgGAIg");
	this.shape_1.setTransform(89.3,-9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#232323").s().p("AgJAlQgCgBAAgFIAAhDIAJAAQgIAgAJAiQABABAAAAQAAAAAAgBQAAAAAAAAQABgBABgBIADgEIACAAIAFAAIgEADIgNAHIgDADg");
	this.shape_2.setTransform(86.7,-8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#626262").s().p("AgcAlQgEAAAAgGIAAhDIAJAAIAABDQABAFACABgAgCAYIgCAAIgEgLIgBgFIAmAAIAEAPIghABg");
	this.shape_3.setTransform(87.9,-8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAhQgJgiAHggIAHAAIgEAOIAAAHIgBAIIABAHIABAIIAAAFIAEALIgEAEQAAABgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAAgBg");
	this.shape_4.setTransform(86.6,-9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#232323").s().p("AgKA3QAGgKABgHIAAhbIAAgGIADAAQAAARAGAHIABAAQgFALAAASQAAAOAFALIAIAAIAAAQQAAAQgdAIQACgBACgDg");
	this.shape_5.setTransform(78.1,-8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#626262").s().p("AhlA4IgCgCQgCgGgBgIIAAgGIAAhbIDVAAIAAAFIjQAAIAABuIAAgCg");
	this.shape_6.setTransform(66.8,-8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#47A932").s().p("AAqAHIgRgKIg2AAIgQAKIguAAIAAgOIC3AAIAAAOg");
	this.shape_7.setTransform(66.6,-11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABTAkIAAgiIAJAAIAAAigAA6AkIAAgiIAKAAIAAAigAAlAkIAAgiIAIAAIAAAigAAPAkIAAgiIAJAAIAAAigAgFAkIAAgiIAHAAIAAAigAgaAkIAAgiIAIAAIAAAigAgxAkIAAgiIAKAAIAAAigAhGAkIAAgiIAJAAIAAAigAhbAkIAAgiIAIAAIAAAigAhbgfIAAgEIC3AAIAAAEg");
	this.shape_8.setTransform(66.6,-9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2E7522").s().p("AAlAHIgPgJIgvAAIgOAJIg0AAIAAgDIAuAAIAQgKIA2AAIARAKIAyAAIAAADg");
	this.shape_9.setTransform(66.6,-11.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("ABCA7IAAgIIgHAAIAAAIIgOAAIAAgIIgJAAIAAAIIgNAAIAAgIIgIAAIAAAIIgOAAIAAgIIgHAAIAAAIIgNAAIAAgIIgIAAIAAAIIgOAAIAAgIIgJAAIAAAIIgMAAIAAgIIgJAAIAAAIIgYAAIgGgFIgBgCIgCAAIAAhtIDRAAIAABbQgBAHgGAKQgCADgCABIgFAEgABPAcIAJAAIAAgfIgJAAgAA1AcIAKAAIAAgfIgKAAgAAhAcIAIAAIAAgfIgIAAgAAKAcIAJAAIAAgfIgJAAgAgJAcIAJAAIAAgfIgJAAgAgfAcIAIAAIAAgfIgIAAgAg1AcIAJAAIAAgfIgJAAgAhKAcIAJAAIAAgfIgJAAgAhgAcIAIAAIAAgfIgIAAgAARgeIAQALIA3AAIAAgDIAAgQIAAgFIi4AAIAAAFIAAAQIAAADIA0AAIAPgLg");
	this.shape_10.setTransform(67.1,-8.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#232323").s().p("AgSArIAHglIgUgEIADgSIAVAFIAHgjIASAEIgGAjIAUAFIgFARIgUgDIgHAjg");
	this.shape_11.setTransform(-1,4.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#3BAB2F").ss(0.8,1,0,3).p("AAcAQIgVgEIgHAjIgSgEIAHglIgUgEIAEgSIAUAFIAHgjIASAEIgGAjIAUAFg");
	this.shape_12.setTransform(-1.1,4.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#215919").s().p("AAUBXQghgIgpgbQAFgNAIgnQAKgrAhgtQASBDAjAwQgEANADAcQABAVgVAAQgGAAgIgCg");
	this.shape_13.setTransform(-2.3,5.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#13380F").s().p("AgeBHQgngTgHgJQACAAADgGQAoAbAiAIQAjAIgBgbQgDgcAEgNQADgoAYg7IALAAQggBbACAXQABAWgCARQgBARgSAEIgGABQgSAAgggRg");
	this.shape_14.setTransform(-0.5,6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3BAB2F").s().p("AhLBLQACgRAPg0QAPgyAzgwQAtAZAYAeIgLAAQgngkgUgFIgUAZQgjAtgKArQgIAngFANQgCAGgCAAIAAgSg");
	this.shape_15.setTransform(-0.6,1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C8023").s().p("AgngtIAWgYQASAFAnAkQgYA4gEAqQghgxgShCg");
	this.shape_16.setTransform(2,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#62C640").s().p("ADsAVIgKgNIBmAAIgKANgAlJAIIgPgNIAOgDIASASIgPADgAlBgLIAOgBIAQASIgOACgAkaAGIgMgVIANAAIANAVgAE6gBIALgTIATAAIgMATgAEagBIANgTIASAAIgMATgAD+gBIALgTIATAAIgNATgADcgBIAMgTIAUAAIgPATgAC9gBIANgTIARAAIgLATgAChgBIALgTIATAAIgNATgAkBgHIgCgHIB1AAIAEAHg");
	this.shape_17.setTransform(48.9,-16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ah8gNQAcgOAkgBICrAAIANAaIiFAAIAIARIg1AAQghACgNAMQgHgVgRgVg");
	this.shape_18.setTransform(24.4,-16.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABSAbIgVgWIkQAAIgHgJIDaAAIARgWIDKAAIgjA1g");
	this.shape_19.setTransform(63.5,-16.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#575757").s().p("AAmAxQgogGgdgSIgEgCQgngVgCgaIAAgNIAAgMQADA4BGAXQBEAYAMgbQgEAXgaAAIgJgBg");
	this.shape_20.setTransform(-1.8,12.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1C1C1C").s().p("Ag3AKIAAgBIgDgKIAAgEIAAgEIBwAAIABAGIAAACQAAAFACAFQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAg");
	this.shape_21.setTransform(94.3,-13.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#525252").s().p("ACeA8IABgNIB0AAIAAAGIgBAHgAjWABIgugeIgJAAIgEgeIAJAAIBYA8IAWAQQgGALAFAKIAEAIg");
	this.shape_22.setTransform(72.2,-25.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#171717").s().p("AjtAHQACgHAEgGIEqAAIAnAAICDAAIAAANg");
	this.shape_23.setTransform(61.8,-11.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C2C2C").s().p("AB5ACIglAAIkyAAIgLAAIgCgDIHXAAIAAADg");
	this.shape_24.setTransform(62,-6.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4F4F4F").s().p("AlbgOQAUgSAYgMIAMgHIA5BuIgGAAQgHAAgGACIgBAAIgMAEIgJAFQgGADgEAFgAhbA7IgLgaIAyAAIADAAIAHAagAE1AAIgchNIArAAIAYBNgAh1gFIgehIIBDAAIAUBIg");
	this.shape_25.setTransform(37.6,-12.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AmwB1QgTgGgFgMQACgFAEgEQAJgKATgIQgQAQANAbIADAFIgKgDgAljAYQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIgBgJIAAgDQgBgGABgDQAAgEADgBIBBAAIA5AAIAQAAQADABAAAEIAAAJIAAABIAAAFIgBAGQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAgAHEAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgCgEAAgIIAAgBIgBgHIgBgKIAAgLIAAgKIAAgBIAAgMIAAgHIAAgGIACgOQABgRADAAQACAAABARIABAOIABANIAAAMIAAABQAAAWgCAQIAAABQgBAMgBAAgAFMAAIgDgMIgBgDIgCgSQgBgFAAgHIAAgGIAAgNIABgNIAAgBIABgEIABgEQABgLADgLIACAAIACAAIAAACQgDAMgBAMIgBAFIgBANIAAANIAAAGQAAAHABAFQAAAHACAGIAAAFIAAADIADAMIAAAAgAgzhUQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIgBgEQAAgEACgDQADgCADAAQADAAADACQACADAAAEIAAAEIgCACQgCACgEAAQgEAAgCgCgAhPhUIAAAAIgCgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgBQAAgDAEgDQACgDADAAQADAAADADQACACAAAEIAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABIgBACIAAAAIgGACIgFgCgAhthUIAAAAIgBgCIgCgEIAAgBQAAgDADgDQADgDACAAQAEAAACADQADACAAAEIAAABIgBAEIgCACIAAAAQgCACgEAAIgFgCgAiLhUIgBAAIgBgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgDADgDQADgDADAAQADAAADADQACACAAAEIgBAEIgBACIgBAAQgCACgDAAIgFgCgAiqhUIgBAAIgBgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgDADgDQADgDADAAQADAAADADQACACAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABIgBACIgBAAQgCACgDAAIgFgCgAhAhnQgDgDAAgEQAAgCADgDQADgCACAAQAEAAADACQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCgAhehnQgCgDAAgEQAAgEACgCQADgDADAAQADAAADADQADACAAAEQAAAEgDADQgCACgEAAQgDAAgDgCgAh7hnQgDgDAAgEQAAgEADgCQADgDACAAQAEAAADADQACACAAAEQAAAEgCADQgDACgEAAQgDAAgCgCgAiahoQgCgCAAgEQAAgDACgDQADgCADAAQAEAAACACQACACAAAEQAAAEgCACQgCACgEAAQgEAAgCgCgAi5hoQgCgCAAgEQAAgDACgDQADgCADAAQADAAADACQACACAAAEQAAAEgCACQgCACgEAAQgEAAgCgCg");
	this.shape_26.setTransform(55,-12.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#838383").s().p("AlVARIAEgDIACgBIABAAIA4gbQgLANAogBIgQADIgBABQgMADgKAEIgCAAIgGAEIgCAAIgFACIgUAMIgNAHgAE+gLIgLAAIgCAAIgKgWIAfAAIAQAWg");
	this.shape_27.setTransform(37.9,-19.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9F9F9F").s().p("AoECKQAHgqAlhAIAYgjQAfgsAtgbIAUgMIAFgCIACAAIAGgEIACAAQALgEALgDIACgBIAPgFQATgFAWgCQAOgCAOAAICgAAIADAJIhCAAIhDAAIgeAAQgXAAgVAEQgTAEgSAFIgDABQgQAFgOAHIgMAHQgXAMgVATQgWASgSAXQgdAlgPAbQgPAagWBHIAEgXgAgqAZIgDgDIHZAAIAAADgADlhpIhVAAIAAAAIgDgBIgEgIIBaAAIAdAAIACAAIAMAAIAXAAIB+AAIAgAAIgCAEIgBAEIiwABgAHXiGIACgCIAIgLIgDALIgKANgAH7iTIAOgNIgDALIgOANg");
	this.shape_28.setTransform(42.8,-9.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AnXDlQhHgXgDg5IACgOQAWhHAPgaQAPgbAdglQASgXAWgSIA+BcQgGAFgDAIQgEAFgCAFQgFAOAGALQADAFAIAGQgRAegHAjIAAAGQgDAUABAVIABASIAAACIgBALQgHAOgWAAQgUAAghgMgAhuAGIgHAAIgHgZIAEAAQAEAAAAgMIAAgCIABgEIgBgFIAAgBIAAgJQAAgGgCgBIgRAAIgUhIIBCAAIALAZIDpAAIgPgMIgSgNIgBAAIBVAAIAcBPIkqAAIgMAAIgBA6gAipAGIhbAAIguAAIgCAAIg6hvQAOgHAQgFIADgBQASgFATgEQAVgEAXAAIAeAAIAeBIIhBAAQgDABAAAGQAAADAAAGIAAADIABAJQAAAKAFACIBJAAIAEAAIAMAZgAhHgOIAAgDIAAgFIABgLIAAgDIHaAAIAAADIAAALIABAFIAAADgAGUg0IiDAAIgYhPICwgBIAAABIgBANIAAANIAAAGQAAAHABAFIADASIAAADIADAOgAGwhKQgBgGgBgHIAGAAIBuADIAAAKgAG9iVIAKgNIAaAAIAOgNIAiAAIADgLIAHAYIABACIgDALgAgGjKIAAgHIgEgXIAFAAIADgIIACAfIAAAHgAgdjKIAAgHIgFgXIAGAAIACgIIAEAfIAAAHgAgxjKIAAgHIgEgXIAFAAIADgIIADAfIAAAHgAhEjKIAAgHIgEgXIAEAAIAEgIIADAfIAAAHgAhYjKIAAgHIgEgXIAFAAIADgIIAEAfIAAAHgAhrjKIAAgHIgEgXIAEAAIADgIIAFAfIAAAHgAh+jKIAAgHIgFgXIAFAAIADgIIAFAfIAAAHgAiSjKIAAgHIgFgXIAHAAIABgIIAFAfIAAAHgAiljKIAAgHIgFgXIAGAAIACgIIAEAfIAAAHgAi5jKIAAgHIgEgXIAGAAIACgIIAEAfIAAAHgAjNjKIAAgHIgEgXIAGAAIACgIIAEAfIAAAHgAjgjKIAAgHIgEgXIAFAAIACgIIAFAfIAAAHgAjzjKIAAgHIgFgXIAGAAIACgIIAFAfIAAAHgAkHjKIAAgHIgFgXIAHAAIABgIIAFAfIAAAHg");
	this.shape_29.setTransform(45.1,-7.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#232323").s().p("AnBCQQgIgGgDgFQgGgLAFgOQACgFADgFQAEgIAGgFQAEgFAGgEIAJgFIAMgEIABAAQAGgBAHAAIAGAAIADAAIAuAAIBbAAIADAAIAxAAIAHAAIAhAAIABg8IAMAAQgEAIgCAIIAAADIgBALIAAAFIAAADIABAEIACAIIACADIACAEIALAAIgYATIgkgBIgwAAQhBABgZALQgNAFgCAIQgYAsgoAAQgPAAgSgGgAm1BgQgEAEgCAFQgEAIgCAJIgBACIgCAFIADABQAiAMAdgcQAIgHgCgLQAAgGgEgEQgCgDgEgBQgDgDgGgBIgKAAQgTAIgJAKgAFdgbIgFAAQgBgFAAgHIAAgGIAAgNIB0AAIAAAMIAAABIAAAKIAAALgAikguIgLgZIgEgJIgKgVIgNgfIgDAAIgOAAIhyABIgTAAIgIgSIALAAIAAAHIAIAAIAAgHIABAAIAKAAIAAAHIAIAAIAAgHIAMAAIAAAHIAIAAIAAgHIALAAIAAAHIAIAAIAAgHIAMAAIAAAHIAIAAIAAgHIALAAIAAAHIAIAAIAAgHIAMAAIAAAHIAIAAIAAgHIAFAAIAGAAIAAAHIAIAAIAAgHIADAAIAJAAIAAAHIAIAAIAAgHIALAAIAAAHIAIAAIAAgHIAMAAIAAAHIAHAAIAAgHIAMAAIAAAHIAHAAIAAgHIAMAAIAAAHIAIAAIAAgHIAQAAIAAAHIAIAAIAAgHIAJAAIAuAgIA9AtIACABIABAAIABAAIARANIAQAMgAgmhbQgCADAAAEIABAEQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQACACAEAAQAEAAACgCIACgCIAAgEQAAgEgCgDQgDgCgDAAQgDAAgDACgAhChbQgEADAAADIAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABIACACIAAAAIAFACIAGgCIAAAAIABgCQAAgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAIAAgBQAAgEgCgCQgDgDgDAAQgDAAgCADgAhghbQgDADAAADIAAABIACAEIABACIAAAAIAFACQAEAAACgCIAAAAIACgCIABgEIAAgBQAAgEgDgCQgCgDgEAAQgCAAgDADgAh/haQgDADAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABIABACIABAAIAFACQADAAACgCIABAAIABgCIABgEQAAgEgCgCQgDgDgDAAQgDAAgDADgAiehaQgDADAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABIABACIABAAIAFACQADAAACgCIABAAIABgCQAAgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgEgCgCQgDgDgDAAQgDAAgDADgAgzhtQgDADAAACQAAAEADADQACACADAAQAEAAADgCQACgDAAgEQAAgDgCgCQgDgCgEAAQgCAAgDACgAhRhuQgCACAAAEQAAAEACADQADACADAAQAEAAACgCQADgDAAgEQAAgEgDgCQgDgDgDAAQgDAAgDADgAhuhuQgDACAAAEQAAAEADADQACACADAAQAEAAADgCQACgDAAgEQAAgEgCgCQgDgDgEAAQgCAAgDADgAiNhuQgCADAAADQAAAEACACQACACAEAAQAEAAACgCQACgCAAgEQAAgEgCgCQgCgCgEAAQgDAAgDACgAishuQgCADAAADQAAAEACACQACACAEAAQAEAAACgCQACgCAAgEQAAgEgCgCQgDgCgDAAQgDAAgDACgAFYhHIABgFQABgMADgMIAAgCIAPAAIgCACIgDALIBcAAIADgLIgBgCIAMAAQgDAAgBARIgCAOg");
	this.shape_30.setTransform(53.7,-13.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#626262").s().p("AoYCwQAMhGAshFIANgYQAZgiAhgYIAGARIAMgHQgtAagfAqIgYAlQgkBAgIAqgAg/A8IgCgHIgBgFIHbAAIAAAFIAAAHgAh4AsIgCAAIgyAAIgFAAIhJgBQgFgCAAgKQAAABABABQAAAAAAABQABAAAAABQABAAAAAAICIAAQABAAAAAAQABgBAAAAQABgBAAAAQABgBAAgBIABgFIAAgGIAAAGIAAADIAAACQgBANgEAAgAlahOQAtgRA3gCICUAAIAKAVIigAAQgOAAgOADQgWACgTAFIgFAAQghAAAJgMgAGQhMIh9AAIgQgVICNAAIAjAAQgCAKgBALgADQhMIhaAAQgFgKAGgLIBsAAIAKAVgAHLhhIAEgMIAZAAIgDAMgAHzhvIADgLIAjAAIgDALgAgSiRIgDgeIAPAAIAAAIIAFAWgAgliRIgEgeIAMAAIAAAIIAEAWgAg5iRIgDgeIALAAIAAAIIAEAWgAhLiRIgFgeIAMAAIAAAIIAEAWgAhfiRIgEgeIALAAIAAAIIAFAWgAhviRIgDAAIgFgeIAIAAIAEAAIAAAIIAEAWgAiBiRIgFAAIgEgeIAJAAIACAAIAAAIIAFAWgAiZiRIgFgeIAMAAIAAAIIAEAWgAitiRIgEgeIALAAIAAAIIAFAWgAjAiRIgFgeIAMAAIAAAIIAEAWgAjUiRIgEgeIALAAIAAAIIAFAWgAjniRIgFgeIAMAAIAAAIIAEAWgAj6iRIgBAAIgEgeIABAAIAKAAIAAAIIAFAWgAkNiRIgFgeIALAAIAAAIIAEAWg");
	this.shape_31.setTransform(44.7,-13.5);

	this.addChild(this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-31.2,110.4,49.1);


(lib.GUN_TANK_08 = function() {
	this.initialize();

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAOAPIglAAIgBgIIgBgHIAoAAIAAgJIgnAAIAAgHIApAAQAAgFADgIQAHAOgBARQgCAUgGAIg");
	this.shape.setTransform(87.8,-9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAhQgJgiAHggIAHAAIgEAOIAAAHIgBAIIABAHIABAIIAAAFIAEALIgEAEQAAABgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAAgBg");
	this.shape_1.setTransform(85.1,-9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626262").s().p("AgcAlQgEAAAAgGIAAhDIAJAAIAABDQAAAFACABgAgCAYIgCAAIgEgLIAAgFIAlAAIAEAPIggABg");
	this.shape_2.setTransform(86.3,-8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#232323").s().p("AgJAlQgCgBAAgFIAAhDIAJAAQgHAgAIAiQABABAAAAQAAAAAAgBQAAAAAAAAQABgBAAgBIAFgEIABAAIAFAAIgEADIgNAHIgDADg");
	this.shape_3.setTransform(85.2,-8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#171717").s().p("AgWAOIABgJIAmAAIABAJgAgVAAIADgNIApAAQgDAIgBAFg");
	this.shape_4.setTransform(87.5,-10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#232323").s().p("AgKA3QAGgKABgHIAAhbIAAgGIADAAQAAARAGAHIABAAQgFALAAASQAAAOAFALIAIAAIAAAQQAAAQgdAIQACgBACgDg");
	this.shape_5.setTransform(78.1,-8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#626262").s().p("AhlA4IgCgCQgCgGgBgIIAAgGIAAhbIDVAAIAAAFIjQAAIAABuIAAgCg");
	this.shape_6.setTransform(66.8,-8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABTAdIAAg5IAJAAIAAA5gAA6AdIAAg5IAKAAIAAA5gAAlAdIAAg5IAIAAIAAA5gAAPAdIAAg5IAJAAIAAA5gAgFAdIAAg5IAHAAIAAA5gAgaAdIAAg5IAIAAIAAA5gAgxAdIAAg5IAKAAIAAA5gAhGAdIAAg5IAJAAIAAA5gAhbAdIAAg5IAIAAIAAA5g");
	this.shape_7.setTransform(66.6,-8.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("ABCA7IAAgIIgHAAIAAAIIgOAAIAAgIIgJAAIAAAIIgNAAIAAgIIgIAAIAAAIIgOAAIAAgIIgHAAIAAAIIgNAAIAAgIIgIAAIAAAIIgOAAIAAgIIgJAAIAAAIIgMAAIAAgIIgJAAIAAAIIgYAAIgGgFIgBgCIgCAAIAAhtIDRAAIAABbQgBAHgGAKQgCADgCABIgFAEgABPAcIAJAAIAAg4IgJAAgAA1AcIAKAAIAAg4IgKAAgAAhAcIAIAAIAAg4IgIAAgAAKAcIAJAAIAAg4IgJAAgAgJAcIAJAAIAAg4IgJAAgAgfAcIAIAAIAAg4IgIAAgAg1AcIAJAAIAAg4IgJAAgAhKAcIAJAAIAAg4IgJAAgAhgAcIAIAAIAAg4IgIAAgAAVgzQgCACgBAEQABAEACADQADACADAAQAEAAACgCQACgDABgEQgBgEgCgCQgCgDgEAAQgDAAgDADgABQgzQgDADAAADQAAAEADACQACACAEAAQADAAACgCQACgCAAgEQAAgDgCgDQgCgCgDgBQgEABgCACgAgEgzQgDACAAADQAAADADADQACADACAAQACAAAEgDQACgDAAgDQAAgDgCgCQgEgDgCAAQgCAAgCADgAgig0QgDACAAAEQAAADADADQACADADAAQADAAADgDQADgDAAgDQAAgEgDgCQgDgCgDgBQgDABgCACgAhAg0QgDACAAAEQAAADADADQACADAEAAQADAAADgDQACgDAAgDQAAgEgCgCQgDgCgDgBQgEABgCACgAhfg0QgCACAAAEQAAADACADQACADAEAAQADAAAEgDQABgDAAgDQAAgEgBgCQgEgCgDgBQgEABgCACgAAzgzQgDACAAADQAAADADADQACACACAAQAEAAADgCQACgDAAgDQAAgDgCgCQgDgCgEgBQgCABgCACg");
	this.shape_8.setTransform(67.1,-8.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#419F2D").s().p("AAXAGQgCgCAAgEQAAgCACgCQADgDADAAQAEAAACADQADACAAACQAAAEgDACQgCADgEAAQgDAAgDgDgABSAGQgDgDAAgDQAAgBADgDQADgDADAAQADAAADADQACADAAABQAAADgCADQgDACgDAAQgDAAgDgCgAgCAFQgDgDAAgCQAAgCADgCQACgDABAAQAEAAADADQACACAAACQAAACgCADQgDADgEAAQgBAAgCgDgAggAFQgDgDAAgCQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAACgDADQgCADgEAAQgDAAgCgDgAg+AFQgCgDAAgCQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAACgCADQgDADgDAAQgDAAgDgDgAhcAFQgDgDAAgCQAAgDADgCQACgDAEAAQADAAADADQABACAAADQAAACgBADQgDADgDAAQgEAAgCgDgAA1AFQgDgDAAgCQAAgCADgCQACgDADAAQADAAADADQACACAAACQAAACgCADQgDACgDAAQgDAAgCgCg");
	this.shape_9.setTransform(66.8,-13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#419F2D").s().p("AgbAFIgPgJIBUAAIABAJg");
	this.shape_10.setTransform(75.3,-13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#419F2D").s().p("AgmAEIgPgHIBqAAIABAHg");
	this.shape_11.setTransform(74.2,-15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#232323").s().p("AgSArIAHglIgUgEIADgSIAVAFIAHgjIASAEIgGAjIAUAFIgFARIgUgDIgHAjg");
	this.shape_12.setTransform(-1,4.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#3BAB2F").ss(0.8,1,0,3).p("AAggCIgEASIgVgEIgHAjIgSgEIAHglIgUgEIAEgSIAUAFIAHgjIASAEIgGAjg");
	this.shape_13.setTransform(-1.1,4.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3B3B3B").s().p("AAqBeQg6gRgogfQAFgNAIglQALgtAggtQASBDAjAwQgBAQADAPQAGArgPAAIgEgBg");
	this.shape_14.setTransform(-2.1,6.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#626262").s().p("AgiBCQgjgRgGgJQABABADgHQAoAfA5ARQAVAIgIgyQgDgOACgRQADgoAYg6IALAAQgkBeAJAoQAEAUgCANQgCANgHgBQgigBgqgXg");
	this.shape_15.setTransform(-0.6,7.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D4D4D").s().p("AgngtIAWgYQASAEAnAlQgZA4gDAqQgggxgThCg");
	this.shape_16.setTransform(2,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8A8A8A").s().p("AhMBaQAFgiAMgoQAahOAlgfQAxAbAYAeIgLAAQgngkgUgFIgUAZQgiAtgLArQgIAngEANQgDAGgCAAIgBgEg");
	this.shape_17.setTransform(-0.6,2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1C1C1C").s().p("AgPAHIgjAAQgCgGgBgEIgBgDIBoAAIAAAFIADAHQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAg");
	this.shape_18.setTransform(87.2,-13.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#525252").s().p("ACCA2IABgJIBqAAIAAAEIAAAFgAjegXIgJAAIgFgdIAKAAIBtBLQgFALAFALIAEAIg");
	this.shape_19.setTransform(68.4,-22.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#171717").s().p("AjtAHQACgHAEgGIEwAAIA6AAIBDAAIAEAAIAjAAIAAANg");
	this.shape_20.setTransform(61.8,-11.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C2C2C").s().p("AjeACIgLAAIgCgDIHXAAIAAADg");
	this.shape_21.setTransform(62,-6.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AmLBkQgSgGgFgMQAHgPAbgMQgQAQANAbIADAFIgLgDgAjCAHIg0AAIhGAAIgCgEIgCgDQgCgBABgLQABgKADAAIA5AAIAwAAIAgAAQAEACgBAOIAAABIAAAFIgBAEQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAgAGfgPQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIgCgJIAAgFIgBgHIAAgHIAAgHIAAgCIAAgHIAAgFIAAgEIABgKQACgLACAAQACAAABALIACAKIAAAJIAAAHQAAARgCALQgBAJgBABgAEvgPIgDgMIgCgLIAAgJIAAgNIAAgJIABgEIAEgRIACAAIADAAIgFARIgBAEIgBAJIAAANIABAJIACAIIAAADQABAHADAFgAgNhDIgBgCIgBgEQAAgEACgDQADgCACAAQAEAAACACQACADAAAEIAAAEIgCACQgBACgFAAQgDAAgCgCgAgphDIAAgBIgCgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgBQAAgDAEgEQACgCACAAQADAAAEACQACADAAAEIAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAIAAABIAAABQgEACgDAAQgCAAgCgCgAhHhDIgBgBIgBgBIgBgEIAAgBQAAgDACgEQAEgCACAAQAEAAACACQACADABAEIAAABIgBAEIgCABIAAABQgDACgDAAQgDAAgCgCgAhlhDIgBgBIgBgBQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgEADgCQADgDADAAQADAAACADQADACAAAEIgBAEIgCABIAAABQgCACgDAAQgDAAgCgCgAgahWQgDgDgBgDQABgDADgDQACgDADAAQADAAAEADQACADAAADQAAAEgCACQgDACgEAAQgDAAgCgCgAg4hWQgDgDABgEQgBgDADgDQADgDADAAQADAAACADQAEACAAAEQAAAFgEACQgCACgDAAQgDAAgDgCgAhVhWQgDgDAAgEQAAgDADgDQADgDACAAQAEAAACADQACACAAAEQAAAFgCACQgCACgEAAQgDAAgCgCgAh0hXQgCgDgBgDQABgCACgEQADgCACAAQAEAAADACQACADAAADQAAAEgCACQgDADgEAAQgDAAgCgDg");
	this.shape_22.setTransform(51.3,-10.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#232323").s().p("AmcB/QgIgGgDgFQgGgLAFgOQACgFAEgFQAHgPANgHIAIgFIANgEIABAAQAGgBAIAAIAYAAIB5AAIA6AAIAiAAIAAg6IAMAAQgEAIgBAGIgBADIgBALIABAFIAAADIABAEIACAIIACADIABAEIAMAAIgYATQi0gIgKAgQgXAsgoAAQgQAAgSgGgAmVBYQgEAIgDAJIAAACIgCAFIACABQAjAMAdgcQAIgHgCgLQgBgGgEgEQgCgDgDgBQgDgDgHgBIgKAAQgaAMgHAPgAhrgcIgMgaIgEgFIgBgEIgHgVIgVgfIhVABIgHgSIAKAAIAAAHIAIAAIAAgHIAMAAIAAAHIAIAAIAAgHIALAAIAAAHIAIAAIAAgHIAMAAIAAAHIAIAAIAAgHIALAAIAAAHIAIAAIAAgHIAMAAIAAAHIAIAAIAAgHIALAAIAAAHIAHAAIAAgHIAMAAIAAAHIAIAAIAAgHIAMAAIAAAHIAHAAIAAgHIARAAIAAAHIAHAAIAAgHIAKAAIBrBNIACABIAAAAIABAAIAhAagAAAhKQgDADAAAEIABAEIACACQAAACADAAQAEAAACgCIACgCIAAgEQAAgEgCgDQgCgCgEAAQgDAAAAACgAgdhLQgDAEAAADIAAABQAAAAAAABQAAAAAAABQABABAAAAQAAABABAAIABABIAAABQADACACAAQADAAADgCIABgBIAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgBQAAgEgCgDQgEgCgDAAQgCAAgDACgAg7hLQgCAEAAADIAAABIABAEIABABIABABQACACADAAQADAAACgCIABgBIABgBIABgEIAAgBQAAgEgCgDQgDgCgDAAQgDAAgDACgAhZhJQgDACAAAEQAAAAAAABQAAAAAAABQABABAAAAQAAABABAAIABABIAAABQADACACAAQAEAAACgCIAAgBIACgBIABgEQAAgEgDgCQgCgDgEAAQgCAAgDADgAgNhcQgEADAAADQAAADAEADQACACADAAQAEAAACgCQACgCAAgEQAAgDgCgDQgDgDgDAAQgDAAgCADgAgrhdQgDADAAADQAAAEADADQACACAEAAQADAAACgCQADgCAAgFQAAgEgDgCQgCgDgDAAQgDAAgDADgAhJhdQgCADAAADQAAAEACADQACACAEAAQAEAAACgCQACgCAAgFQAAgEgCgCQgCgDgEAAQgDAAgDADgAhnhdQgDAEAAACQAAADADADQACADADAAQAEAAADgDQACgCAAgEQAAgDgCgDQgDgCgEAAQgCAAgDACgAE7ggIgBgJIAAgNIBrAAIAAAHIAAACIAAAHIAAAHgAE7g/IABgEIAFgRIAMAAIgEAJIBVAAIAEgIIgBgBIAKAAQgCAAgCALIgCAKg");
	this.shape_23.setTransform(50,-11.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4F4F4F").s().p("AlIgoIADAAQASgGAUgDIAcBiIgXAAQgJAAgGACIgBAAIgMAEgAiKAxIgNgaIA3AAIAQAagAEOgIIgsguIApAAIA+AugAiogQIgRgmIApAAIAYAmg");
	this.shape_24.setTransform(42.1,-11.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#838383").s().p("Ak9ASIAAAAIACgCIABgBIAEgCIA4gbQgKANAngBIgPADIgCAAIgWAIIgBABIgHADIgHACIgUAMIgMAHgAEbgLIgCAAIgKgVIAAgBIAfAAIAAABIARAVg");
	this.shape_25.setTransform(33.3,-16.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9F9F9F").s().p("AnhB1QAIgsAmhBQAfgrAtgaIAUgMIAHgCIAGgDIACgBIAWgIIABAAIAQgFQATgFAWgCQAOgCAOAAIDHAAIABAEIAEAFIhoAAIgpAAIg8AAQgWAAgUAEQgUADgTAHIgCAAQgWAIgUALQg3AegpA3QgZArgWBHIAEgXgAgHAEIgCgDIHYAAIAAADgAEmhcIgoAAIhLAAIAAAAIgCgBIgFgIIAxAAIACAAIAjAAICgAAIgBAJgAG4h6IAIgIIgDAIIgJAJgAHYiCIAOgJIgEAIIgNAJg");
	this.shape_26.setTransform(39.3,-7.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#626262").s().p("AnvB4QAHgrAmhCQAZgiAhgXIAGAQIANgIQgtAbggArQgmBBgHArIgEAYIgCANQACgrAEgOgAgYAYIgCgHIgBgEIHcAAIAAAEIAAAHgAhTAIIg2AAIhKgBQgEgBAAgJIACAAIACADIBGAAIA0AAIANAAQAAAAABAAQAAAAABAAQAAAAABgBQAAgBAAgBIABgFIAAgFIABAFIgBAEIAAABQAAALgEAAgAlIhRQAsgQA3gCIC+AAIAIAWIjHAAQgPAAgOACQgVACgTAFIgDAAQgkAAAKgNgAD0hNIgRgWIC2AAIgFASIgBAEgACehNQgFgLAFgLIAmAAIAKAWgAGuhjIADgIIAYAAIgDAIgAHUhsIADgIIAfAAIgDAIgAAUiTIgEgdIAQAAIAAAGIAEAXgAAAiTIgBgdIAJAAIAAAGIAEAXgAgRiTIgEgdIAMAAIAAAGIAEAXgAgkiTIgEgdIALAAIAAAGIAFAXgAg3iTIgFgdIAMAAIAAAGIAEAXgAhLiTIgEgdIALAAIAAAGIAFAXgAheiTIgFgdIAMAAIAAAGIAEAXgAhyiTIgEgdIALAAIAAAGIAFAXgAiFiTIgFgdIAMAAIAAAGIAEAXgAiYiTIgEgdIAKAAIAAAGIAFAXg");
	this.shape_27.setTransform(40.7,-9.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AmHDjQgqgGgdgRIgEgDQgngVgCgbIAAgNIAAgMIACgOQAWhHAYgrQApg3A4geQAUgLAVgIIASBgIgJAFQgMAFgIAPQgDAEgCAGQgFAOAGALQADAFAIAGQgRAegHAjIAAAGQgEAUABAUIABASIAAADQAAAgggAAIgIAAgAhIgNIgRgbIAHAAQAEAAAAgMIAAgCIABgEIgBgFIAAgBQACgOgFgCIggAAIgYgmIBoAAIANAaIDVAAIghgaIgBAAIBLAAIAsAtIkwAAIgMAAIgBA8gAj8gNIgchlQAUgEAWAAIA8AAIARAmIg5AAQgDAAgBAKQgBALACACIACAEIgCABQAAAKAEACIBKAAIAMAbgAghgjIAAgDIAAgFIABgLIAAgEIHaAAIAAAEIAAALIABAFIAAADgAFQhJIg+gtIB7AAIAAANIAAAJIACALIAEAMgAGThYIgBgIIBqABIABAHgAGgiLIAIgJIAYAAIAOgJIAfAAIADgJIAHASIABABIgEAIgAAei9IAAgHIgEgYIAFAAIACgGIAFAeIAAAHgAAGi9IAAgHIgEgYIAFAAIADgGIAEAeIAAAHgAgLi9IAAgHIgEgYIAFAAIADgGIADAeIAAAHgAgei9IAAgHIgFgYIAFAAIADgGIAEAeIAAAHgAgyi9IAAgHIgEgYIAFAAIADgGIAEAeIAAAHgAhFi9IAAgHIgFgYIAFAAIADgGIAFAeIAAAHgAhZi9IAAgHIgEgYIAFAAIADgGIAEAeIAAAHgAhsi9IAAgHIgFgYIAGAAIACgGIAFAeIAAAHgAiAi9IAAgHIgEgYIAGAAIACgGIAEAeIAAAHgAiTi9IAAgHIgFgYIAGAAIACgGIAFAeIAAAHg");
	this.shape_28.setTransform(41.3,-5);

	this.addChild(this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-27.7,102.8,45.6);


(lib.GUN_TANK_07 = function() {
	this.initialize();

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("AgKA3QAFgKABgHIAAhbIAAgGIAEAAQAAARAFAHIABAAQgEALAAASQAAAOAEALIAJAAIAAAQQAAAQgdAIIAEgEg");
	this.shape.setTransform(80.3,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626262").s().p("AhmA4IgBgCQgDgGAAgIIAAgGIAAhbIDVAAIAAAFIjQAAIAABuIgBgCg");
	this.shape_1.setTransform(69,-8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABUAWIAAgsIAIAAIAAAsgAA6AWIAAgsIAJAAIAAAsgAAlAWIAAgsIAJAAIAAAsgAAPAWIAAgsIAJAAIAAAsgAgEAWIAAgsIAHAAIAAAsgAgaAWIAAgsIAIAAIAAAsgAgwAWIAAgsIAJAAIAAAsgAhFAWIAAgsIAJAAIAAAsgAhbAWIAAgsIAIAAIAAAsg");
	this.shape_2.setTransform(68.8,-7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ABDA7IAAgIIgJAAIAAAIIgNAAIAAgIIgIAAIAAAIIgOAAIAAgIIgIAAIAAAIIgNAAIAAgIIgIAAIAAAIIgNAAIAAgIIgJAAIAAAIIgNAAIAAgIIgIAAIAAAIIgOAAIAAgIIgJAAIAAAIIgXAAIgGgFIgBgCIgBAAIAAhtIDPAAIAABbQAAAHgGAKIgDAEIgGAEgABPAcIAIAAIAAgsIgIAAgAA2AcIAJAAIAAgsIgJAAgAAgAcIAJAAIAAgsIgJAAgAAKAcIAJAAIAAgsIgJAAgAgJAcIAJAAIAAgsIgJAAgAgfAcIAJAAIAAgsIgJAAgAg1AcIAJAAIAAgsIgJAAgAhKAcIAJAAIAAgsIgJAAgAhgAcIAJAAIAAgsIgJAAg");
	this.shape_3.setTransform(69.3,-8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#419F2D").s().p("AA1AWIAAgIIABgjIAVAAIAAArgAAKAWIAAgIIAAgjIAWAAIAAAjIgBAIgAgfAWIAAgIIAAgjIAVAAIAAAjIAAAIgAhJAWIgBgrIAVAAIABAjIAAAIg");
	this.shape_4.setTransform(16.7,-14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6ACB49").s().p("AA2AIIAAgIIgWAAIAAAIIgWAAIAAgIIgUAAIAAAIIgVAAIAAgIIgWAAIAAAIIgVAAIAAgPICVAAIAAAPg");
	this.shape_5.setTransform(16.7,-17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#205418").s().p("AAgAWIAAgjIAAgIIAWAAIAAAIIgBAjgAgKAWIAAgjIAAgIIAUAAIAAAIIAAAjgAg0AWIgBgjIAAgIIAWAAIAAAIIAAAjg");
	this.shape_6.setTransform(16.7,-15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AggAsQAegyAjg2QgbA6gGA1IgeAKIgCgRg");
	this.shape_7.setTransform(-5.7,7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgIgEIAFgIIALAPIAAALg");
	this.shape_8.setTransform(-7.8,-9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A1A1A1").s().p("AAAgFQABgEAEgEIgDARIgCADIAAABIgBACIgDADg");
	this.shape_9.setTransform(-7.7,-14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B2B2B").s().p("AASByQgpgIgpgNIgLgEIgCgEQgKgSABgXQASgdAYgfIATgZQAigzgxgXIAPAAQAhASgJAaIhRB3QACATALASQAtANAxAJIALgUQgWgeA/hrIAKAFQgMAPgHAOQgkA6ANAuQgIASgIAKIgLgCg");
	this.shape_10.setTransform(-2.8,6.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#636363").s().p("AANAhIAAgdIAAgQIgdgYIAhATIAAA2g");
	this.shape_11.setTransform(51.8,-17.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#707070").s().p("ACRAhIAFgFIAJAJIgDAGgAgBAlIAHgJIAEAFIgKAKgAgfARIAYgfIACAFIgYAfgAksANIBtgpIABAFIhwAsgAD5gOIACAAIAwgcIAEADIgJAGIgHAEIgiAUg");
	this.shape_12.setTransform(23.2,-9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D0D0D").s().p("AhCBZQgLgSgCgTIBPh2QALgaghgSIBgAAQgPAgAIASIgNgLQgLgHgJAAQgZAAgQAiIhDBiQACAVASANIA6ANQgCgPANgFQAEgCAGAAQADgnAagzQAHgOAJgNIAFgKIAFADQhABqAXAeIgMAUQgxgJgsgNg");
	this.shape_13.setTransform(-3,6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#606060").s().p("AhMBPQAGgwAthIQgIgOgTgLQgQAEgRAWQglA0geA1IACARIADALQgRgNgDgVIBDhiQASgiAZAAQAKAAALAHIAMALQACAHAGAFIgFAKQgJANgGAOQgbAzgDAnQgGAAgEACQgMAFABAPQgKgSAVgJgAgBgkIgKgEQBUAJAbgnQAOgXAegLIACgBIABAAIAVAAIgSAEIgCABQgdALgPAWQgVAhg5AAQgNAAgOgCgAAchpIATAAQgXAMARAgQgfgXASgVg");
	this.shape_14.setTransform(6.2,5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AEzBJIAAhFIAHgEIAABPgAASBPIgTAAIgBAAIg2AAIgtAAIgTAAIgTAAIgIAAIgTAAIhjAAIgPAAIgXAAIAFgGIE6AAIAEAGgAiqALIgBgFIgDgIIgEgXIAhgQIATglIgOAqIghAPIARBKIgDAEgAk5AkIAPgHIgCAHIgGACg");
	this.shape_15.setTransform(21.2,-13.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C6C6C6").s().p("Ak4ArIAOgHIgBADIAAADQgBAHACAIIgEAIIgPAHgAkeAHQAGgEAKgDQAQgFAcgGIAQgEIAJgBIgDARQgFAAgFABIgOACIAAAAIgbAHQgPAFgKAEIgCABQgEACgDADgAi2AHIACgQIABgIIAigRIgEAdIgiAOgAEcgqIgEgdIAiATIAEAdg");
	this.shape_16.setTransform(21.6,-16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DEDEDE").s().p("AgJAGIgBAAIADgRQAHAAAGADIAFAEIgCAQQgJgFgJgBg");
	this.shape_17.setTransform(2.3,-17.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#969696").s().p("ABiBdIAEgFICAAAIAHAFgAgtBTIgFgEICOAAIgEAEgAjsBIIADgFICQAAIADAFgAg+AnIgCgEIEAAAIAEAEgAjag4IAUglIgFAeIgTAlg");
	this.shape_18.setTransform(28.9,-14.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#1F1F1F","#333333"],[0,1],-0.2,-4.7,-0.2,0.3).s().p("AjkA3IgRhKIAggPIAPAAIgBgFQAAgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAHIgBAFIARAAIgBgFQAAgHAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAAAFIAQAAIgBgFQAAgHADgEQAGgEAFAAQAGAAAEAEQAFAEAAAHQAAADgCACIARAAIgBgFQAAgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAHIgBAFIARAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQACAEAAAHIAAAFIAQAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQAFAEAAAHQAAADgCACIARAAIgBgFQAAgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAHIgBAFIARAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQAEAEAAAHIAAAFIAQAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQAFAEAAAHQAAADgCACIAVAAQgCgCAAgDQAAgHAEgEQAFgEAGAAQAGAAAEAEQAFAEAAAHQAAADgCACIAaAAIAAAdIgwAbIgBAAIkBAAIgYAhg");
	this.shape_19.setTransform(28.4,-13.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#515151").s().p("Ak7AkIAHACIAIAjIgGAGgAkuAkIACgHIASAUIAAgLIBqgoIADAIIhtArIgCAHgAkYAUQgGgGAAgHQAAgHAGgEQAAAEAEADQAGAGAHAAQAHAAAGgGIACgBIAAAFQAAAHgFAGQgGAFgIAAQgHAAgGgFgAjgAAQgEgCAAgHQAAgFADgEQABADACABQADAEAHAAQAGAAAEgEIACgCQACADAAAEQAAAHgFACQgEAFgGAAQgGAAgFgFgAEigkQACgCAAgDQAAgHgFgEQgEgEgGAAQgGAAgFAEQgEAEAAAHQAAADACACIgVAAQACgCAAgDQAAgHgFgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgQAAIAAgFQAAgHgEgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgRAAIABgFQAAgHgEgEQgEgEgHAAQgFAAgFAEQgEAEAAAHIABAFIgRAAQACgCAAgDQAAgHgFgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgQAAIAAgFQAAgHgEgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgRAAIABgFQAAgHgEgEQgEgEgHAAQgFAAgFAEQgDAEAAAHIAAAFIgPAAQACgCAAgDQAAgHgFgEQgEgEgGAAQgFAAgGAEQgDAEAAAHIABAFIgQAAIAAgFQAAgHgEgEQgEgEgGAAQgGAAgEAEQgEAEAAAHIABAFIgRAAIABgFQAAgHgEgEQgEgEgHAAQgFAAgFAEQgEAEAAAHIABAFIgPAAIAPgqIARAAIAAAJIASAAIAAgJIATAAIAAAJIARAAIAAgJIASAAIAAAJIATAAIAAgJIARAAIAAAJIAQAAIAAgJIATAAIAAAJIASAAIAAgJIARAAIAAAJIATAAIAAgJIASAAIAAAJIASAAIAAgJIARAAIAAAJIATAAIAAgJIASAAIAAAJIARAAIAAgJIATAAIAAAJIASAAIAAgJIASAAIAAAJIASAAIAAgJIAUAAIAeAYIAAASg");
	this.shape_20.setTransform(21.4,-13.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#202020").s().p("AkpC3IgDgMIAegKQAJg3Aag6QASgWAPgEQATALAIANQgtBLgGAwQgVAIAKATgAigAwIgGgEQgFgEgDgHQgIgSAQgeIATAAQgVAiAOANQAGAFALACQAoAEAagPQAPgJADgJQAKgUgNgFIA2AAIgCAAQgdALgPAVQgWAgg9AAQgOAAgPgBgAiLgPIATAAQgSATAfAXQgrgKALgggACzgVIgKgJIiQAAIgJAJIk6AAIgIgjIAGgCIASAUIBwgtIALAuICWAAIAVghIEFAAIAigUIAABFgAklhJQgCgJAAgGIABgDIABgEIAAABIAAgBIADgEIABgCIABgBIAEgDQACgDAFgBIACgBQAKgFAOgEIAbgHIABAAIANgCQAFgCAFABIABAAQAKABALAFIAAACIAEAXIhqAqgAkVhkIAAAAQgHAFABAIQgBAHAHAGQAFAFAHAAQAJAAAFgFQAFgGAAgHIAAgFQgCgFgDgDQgFgGgJAAQgHAAgFAGgAjdhzIgCABQgDAEAAAFQAAAHAFAEQAEAFAGAAQAGAAAEgFQAFgEAAgHQAAgEgCgDIgDgDQgEgFgGAAQgGAAgEAFgAD6ilIAAgJIgBgVIAQAAIADAVIAAAJgADWilIAAgJIgBgVIASAAIABAVIAAAJgACyilIAAgJIgBgVIASAAIAAAVIAAAJgACNilIAAgJIAAgVIASAAIABAVIAAAJgABqilIAAgJIAAgVIARAAIABAVIAAAJgABFilIAAgJIAAgVIATAAIAAAVIAAAJgAAiilIAAgJIAAgVIASAAIAAAVIAAAJgAgBilIAAgJIABgVIAQAAIgBAVIAAAJgAglilIAAgJIABgVIASAAIAAAVIAAAJgAhIilIAAgJIABgVIASAAIgCAVIAAAJgAhtilIAAgJIADgVIARAAIgCAVIAAAJg");
	this.shape_21.setTransform(21.2,-3.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B5B5B5").s().p("AC7AOIgDgTIgBgIIAUAAIAEAbgACXAOIgBgTIgBgIIATAAIAAAIIACATgABzAOIAAgTIgBgIIASAAIAAAIIACATgABPAOIAAgTIAAgIIARAAIAAAIIABATgAArAOIAAgTIgBgIIATAAIAAAIIAAATgAAIAOIgBgTIAAgIIASAAIAAAIIAAATgAgbAOIAAgTIAAgIIASAAIAAAIIAAATgAg/AOIABgTIAAgIIASAAIAAAIIgBATgAhjAOIABgTIAAgIIASAAIgBAIIAAATgAiHAOIABgTIABgIIARAAIAAAIIgBATgAirAOIABgTIABgIIARAAIAAAIIgBATgAjOAOIAEgbIAPAAIAAAIIgCATg");
	this.shape_22.setTransform(29.3,-22.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AhJh0IAGAAIANDlIB5gMIgMjZIAFAAIAODbIiGAOg");
	this.shape_23.setTransform(31.1,-4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AhNh3IAEAAIANDpICGgNIgOjcIAFAAIANDgIiOAPg");
	this.shape_24.setTransform(31.1,-4.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6ACB49").s().p("AguhpIAEAAIAODOIAKgBIAAAEIgPACgAAThpIAEAAIAODIIAKgBIAAAEIgPABg");
	this.shape_25.setTransform(31,-5.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#419F2D").s().p("AgshmIALAAIANDNIgKAAgAAVhmIAKAAIAODGIgKACg");
	this.shape_26.setTransform(31.2,-6.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#202020").s().p("AhDhyIAVAAIANDSIAOgBIAAgEIgNjNIAyAAIAODMIAOgCIAAgDIgOjHIAYAAIAMDZIh6AMg");
	this.shape_27.setTransform(31,-5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#232323").s().p("AgJAlQgCgBAAgFIAAgMIAAgDIAAgFIAAgLIAAgUIAAgQIAJAAIgDAQQgBAKAAAKIABALIABAFIAAADIADALQAAABABAAQAAgBAAAAQAAAAAAAAQABgBAAgBIAEgEIACAAIAFAAIgEADIgNAIIgDACg");
	this.shape_28.setTransform(86.3,-9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAAiIgDgLIAAgEIgBgEIgBgNQAAgJABgKIADgQIAGAAIgBACIgDAMIAAAHIgBAJIABAHIABAHIAAAEIAAABIAEALIgEAFQAAAAgBABQAAAAgBAAQAAABAAAAQAAAAAAAAIAAAAg");
	this.shape_29.setTransform(86.2,-9.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#171717").s().p("ADYAOIgEAAIABgIIADAAIAmgBIAAAJgAkBAAQABgFADgIIG6AAIAAANgADYAAIgDAAIACgLIABgCIAqAAIgDANg");
	this.shape_30.setTransform(65.1,-11.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9F9F9F").s().p("AjcACIgCgDIG9AAIAAADg");
	this.shape_31.setTransform(61.8,-7.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#626262").s().p("ADDAlQgEAAAAgGIAAgMIAAgDIAAgFIm9AAIgCgGIgBgFIHAAAIAAgUIAAgQIAKAAIAAAQIAAAUIAAALIAAAFIAAADIAAAMQAAAFACABgADdAYIgCAAIgEgLIAAgCIAAgDIAEAAIAjAAIAEAPIggABg");
	this.shape_32.setTransform(64.9,-9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AD6APIgjAAIgEAAIgBgIIgBgHIAFAAIAmAAIgBgJIglABIgEAAIAAgHIAEAAIAmAAIAEgOQAHAOgBASQgCATgGAIgAkFAGIAAgCIgBgEQAAgFACgFIAAgDIG/AAIAAATg");
	this.shape_33.setTransform(65.3,-9.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2C2C2C").s().p("AC1ABImFAAIgMAAIgBgBIG7AAIAAABg");
	this.shape_34.setTransform(61.9,-7.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#171717").s().p("AjRgFQDzAACwgFIgCAMQiqAJj3AAg");
	this.shape_35.setTransform(72.6,-14.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AjRAAQDzgBCwgFIAAAHQiwAFjzABg");
	this.shape_36.setTransform(72.6,-15.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#636363").s().p("AjRgKQDzABCvAEIABAKQiwAFjzABg");
	this.shape_37.setTransform(72.6,-17.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B8B8B8").s().p("AjRADIAAgJQDzAACuAGIACAHQiwgEjzAAg");
	this.shape_38.setTransform(72.6,-18.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7B7B7B").s().p("AjUAcQD3AACqgIIACgOIAAgHIAAgNIgCgIQiugHjzAAIAAgGQD2AACwAKQAFAZgFAaQisAKj6AAg");
	this.shape_39.setTransform(72.9,-16.3);

	this.addChild(this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.5,-24,105.7,42);


(lib.GUN_TANK_06 = function() {
	this.initialize();

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("AgKA3QAFgKABgHIAAhbIAAgGIAEAAQAAARAFAHIABAAQgEALAAASQAAAOAEALIAJAAIAAAQQAAAQgdAIIAEgEg");
	this.shape.setTransform(80.3,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626262").s().p("AhmA4IgBgCQgDgGAAgIIAAgGIAAhbIDVAAIAAAFIjQAAIAABuIgBgCg");
	this.shape_1.setTransform(69,-8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABUAWIAAgsIAIAAIAAAsgAA6AWIAAgsIAJAAIAAAsgAAlAWIAAgsIAJAAIAAAsgAAPAWIAAgsIAJAAIAAAsgAgEAWIAAgsIAHAAIAAAsgAgaAWIAAgsIAIAAIAAAsgAgwAWIAAgsIAJAAIAAAsgAhFAWIAAgsIAJAAIAAAsgAhbAWIAAgsIAIAAIAAAsg");
	this.shape_2.setTransform(68.8,-7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ABDA7IAAgIIgJAAIAAAIIgNAAIAAgIIgIAAIAAAIIgOAAIAAgIIgIAAIAAAIIgNAAIAAgIIgIAAIAAAIIgNAAIAAgIIgJAAIAAAIIgNAAIAAgIIgIAAIAAAIIgOAAIAAgIIgJAAIAAAIIgXAAIgGgFIgBgCIgBAAIAAhtIDPAAIAABbQAAAHgGAKIgDAEIgGAEgABPAcIAIAAIAAgsIgIAAgAA2AcIAJAAIAAgsIgJAAgAAgAcIAJAAIAAgsIgJAAgAAKAcIAJAAIAAgsIgJAAgAgJAcIAJAAIAAgsIgJAAgAgfAcIAJAAIAAgsIgJAAgAg1AcIAJAAIAAgsIgJAAgAhKAcIAJAAIAAgsIgJAAgAhgAcIAJAAIAAgsIgJAAg");
	this.shape_3.setTransform(69.3,-8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AggAsQAegyAjg2QgbA6gGA1IgeAKIgCgRg");
	this.shape_4.setTransform(-5.7,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgIgEIAFgIIALAPIAAALg");
	this.shape_5.setTransform(-7.8,-9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A1A1A1").s().p("AAAgFQABgEAEgEIgDARIgCADIAAABIgBACIgDADg");
	this.shape_6.setTransform(-7.7,-14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B2B2B").s().p("AASByQgpgIgpgNIgLgEIgCgEQgKgSABgXQASgdAYgfIATgZQAigzgxgXIAPAAQAhASgJAaIhRB3QACATALASQAtANAxAJIALgUQgWgeA/hrIAKAFQgMAPgHAOQgkA6ANAuQgIASgIAKIgLgCg");
	this.shape_7.setTransform(-2.8,6.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#636363").s().p("AANAhIAAgdIAAgQIgdgYIAhATIAAA2g");
	this.shape_8.setTransform(51.8,-17.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#606060").s().p("AhPAhIgKgEQBWAJAZgmQAOgWAegLIACgBIABAAIAVAAIgSAFIgCAAQgdALgPAVQgVAgg3AAQgNAAgQgCgAgwgiIATAAQgXAMARAeQgfgVASgVg");
	this.shape_9.setTransform(14,-1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#707070").s().p("ACRAhIAFgFIAJAJIgDAGgAgBAlIAHgJIAEAFIgKAKgAgfARIAYgfIACAFIgYAfgAksANIBtgpIABAFIhwAsgAD5gOIACAAIAwgcIAEADIgJAGIgHAEIgiAUg");
	this.shape_10.setTransform(23.2,-9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D0D0D").s().p("AhCBZQgLgSgCgTIBPh2QALgaghgSIBgAAQgPAgAIASQACAHAGAFIAFADQhABqAXAeIgMAUQgxgJgsgNgAAGgtQgjA0geA1IACARIADALIA6ANQgIgSATgJQAGgwAshIQgIgOgSgLQgQAEgRAWg");
	this.shape_11.setTransform(-3,6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AEzBJIAAhFIAHgEIAABPgAASBPIgTAAIgBAAIg2AAIgtAAIgTAAIgTAAIgIAAIgTAAIhjAAIgPAAIgXAAIAFgGIE6AAIAEAGgAiqALIgBgFIgDgIIgEgXIAhgQIATglIgOAqIghAPIARBKIgDAEgAk5AkIAPgHIgCAHIgGACg");
	this.shape_12.setTransform(21.2,-13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C6C6C6").s().p("Ak4ArIAOgHIgBADIAAADQgBAHACAIIgEAIIgPAHgAkeAHQAGgEAKgDQAQgFAcgGIAQgEIAJgBIgDARQgFAAgFABIgOACIAAAAIgbAHQgPAFgKAEIgCABQgEACgDADgAi2AHIACgQIABgIIAigRIgEAdIgiAOgAEcgqIgEgdIAiATIAEAdg");
	this.shape_13.setTransform(21.6,-16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DEDEDE").s().p("AgJAGIgBAAIADgRQAHAAAGADIAFAEIgCAQQgJgFgJgBg");
	this.shape_14.setTransform(2.3,-17.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#969696").s().p("ABiBdIAEgFICAAAIAHAFgAgtBTIgFgEICOAAIgEAEgAjsBIIADgFICQAAIADAFgAg+AnIgCgEIEAAAIAEAEgAjag4IAUglIgFAeIgTAlg");
	this.shape_15.setTransform(28.9,-14.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AjkA3IgRhKIAggPIAPAAIgBgFQAAgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAHIgBAFIARAAIgBgFQAAgHAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAAAFIAQAAIgBgFQAAgHADgEQAGgEAFAAQAGAAAEAEQAFAEAAAHQAAADgCACIARAAIgBgFQAAgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAHIgBAFIARAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQACAEAAAHIAAAFIAQAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQAFAEAAAHQAAADgCACIARAAIgBgFQAAgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAHIgBAFIARAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQAEAEAAAHIAAAFIAQAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQAFAEAAAHQAAADgCACIAVAAQgCgCAAgDQAAgHAEgEQAFgEAGAAQAGAAAEAEQAFAEAAAHQAAADgCACIAaAAIAAAdIgwAbIgBAAIkBAAIgYAhg");
	this.shape_16.setTransform(28.4,-13.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#515151").s().p("Ak7AkIAHACIAIAjIgGAGgAkuAkIACgHIASAUIAAgLIBqgoIADAIIhtArIgCAHgAkYAUQgGgGAAgHQAAgHAGgEQAAAEAEADQAGAGAHAAQAHAAAGgGIACgBIAAAFQAAAHgFAGQgGAFgIAAQgHAAgGgFgAjgAAQgEgCAAgHQAAgFADgEQABADACABQADAEAHAAQAGAAAEgEIACgCQACADAAAEQAAAHgFACQgEAFgGAAQgGAAgFgFgAEigkQACgCAAgDQAAgHgFgEQgEgEgGAAQgGAAgFAEQgEAEAAAHQAAADACACIgVAAQACgCAAgDQAAgHgFgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgQAAIAAgFQAAgHgEgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgRAAIABgFQAAgHgEgEQgEgEgHAAQgFAAgFAEQgEAEAAAHIABAFIgRAAQACgCAAgDQAAgHgFgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgQAAIAAgFQAAgHgEgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgRAAIABgFQAAgHgEgEQgEgEgHAAQgFAAgFAEQgDAEAAAHIAAAFIgPAAQACgCAAgDQAAgHgFgEQgEgEgGAAQgFAAgGAEQgDAEAAAHIABAFIgQAAIAAgFQAAgHgEgEQgEgEgGAAQgGAAgEAEQgEAEAAAHIABAFIgRAAIABgFQAAgHgEgEQgEgEgHAAQgFAAgFAEQgEAEAAAHIABAFIgPAAIAPgqIARAAIAAAJIASAAIAAgJIATAAIAAAJIARAAIAAgJIASAAIAAAJIATAAIAAgJIARAAIAAAJIAQAAIAAgJIATAAIAAAJIASAAIAAgJIARAAIAAAJIATAAIAAgJIASAAIAAAJIASAAIAAgJIARAAIAAAJIATAAIAAgJIASAAIAAAJIARAAIAAgJIATAAIAAAJIASAAIAAgJIASAAIAAAJIASAAIAAgJIAUAAIAeAYIAAASg");
	this.shape_17.setTransform(21.4,-13.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#202020").s().p("AkpC3IgDgMIAegKQAJg3Aag6QASgWAPgEQATALAIANQgtBLgGAwQgVAIAKATgAigAwIgGgEQgFgEgDgHQgIgSAQgeIATAAQgVAiAOANQAGAFALACQAoAEAagPQAPgJADgJQAKgUgNgFIA2AAIgCAAQgdALgPAVQgWAgg9AAQgOAAgPgBgAiLgPIATAAQgSATAfAXQgrgKALgggACzgVIgKgJIiQAAIgJAJIk6AAIgIgjIAGgCIASAUIBwgtIALAuICWAAIAVghIEFAAIAigUIAABFgAklhJQgCgJAAgGIABgDIABgEIAAABIAAgBIADgEIABgCIABgBIAEgDQACgDAFgBIACgBQAKgFAOgEIAbgHIABAAIANgCQAFgCAFABIABAAQAKABALAFIAAACIAEAXIhqAqgAkVhkIAAAAQgHAFABAIQgBAHAHAGQAFAFAHAAQAJAAAFgFQAFgGAAgHIAAgFQgCgFgDgDQgFgGgJAAQgHAAgFAGgAjdhzIgCABQgDAEAAAFQAAAHAFAEQAEAFAGAAQAGAAAEgFQAFgEAAgHQAAgEgCgDIgDgDQgEgFgGAAQgGAAgEAFgAD6ilIAAgJIgBgVIAQAAIADAVIAAAJgADWilIAAgJIgBgVIASAAIABAVIAAAJgACyilIAAgJIgBgVIASAAIAAAVIAAAJgACNilIAAgJIAAgVIASAAIABAVIAAAJgABqilIAAgJIAAgVIARAAIABAVIAAAJgABFilIAAgJIAAgVIATAAIAAAVIAAAJgAAiilIAAgJIAAgVIASAAIAAAVIAAAJgAgBilIAAgJIABgVIAQAAIgBAVIAAAJgAglilIAAgJIABgVIASAAIAAAVIAAAJgAhIilIAAgJIABgVIASAAIgCAVIAAAJgAhtilIAAgJIADgVIARAAIgCAVIAAAJg");
	this.shape_18.setTransform(21.2,-3.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B5B5B5").s().p("AC7AOIgDgTIgBgIIAUAAIAEAbgACXAOIgBgTIgBgIIATAAIAAAIIACATgABzAOIAAgTIgBgIIASAAIAAAIIACATgABPAOIAAgTIAAgIIARAAIAAAIIABATgAArAOIAAgTIgBgIIATAAIAAAIIAAATgAAIAOIgBgTIAAgIIASAAIAAAIIAAATgAgbAOIAAgTIAAgIIASAAIAAAIIAAATgAg/AOIABgTIAAgIIASAAIAAAIIgBATgAhjAOIABgTIAAgIIASAAIgBAIIAAATgAiHAOIABgTIABgIIARAAIAAAIIgBATgAirAOIABgTIABgIIARAAIAAAIIgBATgAjOAOIAEgbIAPAAIAAAIIgCATg");
	this.shape_19.setTransform(29.3,-22.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#202020").s().p("Ag9g1IAUAAIACBZIAPgCIAAgEIgChTIAyAAIACBSIAPgCIAAgDIgDhNIAXAAIABBfIh5AMg");
	this.shape_20.setTransform(30.9,-1.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AhIg5IAEAAIADBvICGgOIgEhhIAGAAIACBlIiOAOgAgqg5IAFAAIADBUIAKgBIAAAEIgPABgAAYg5IAEAAIACBNIAKgBIAAAEIgOACg");
	this.shape_21.setTransform(31,-1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AhEg3IAHAAIABBrIB6gMIgBhfIAEAAIAEBiIiGANgAglg3IALAAIACBTIgKABgAAcg3IAJAAIADBNIgKABg");
	this.shape_22.setTransform(31,-1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#232323").s().p("AgJAlQgCgBAAgFIAAgMIAAgDIAAgFIAAgLIAAgUIAAgQIAJAAIgDAQQgBAKAAAKIABALIABAFIAAADIADALQAAABABAAQAAgBAAAAQAAAAAAAAQABgBAAgBIAEgEIACAAIAFAAIgEADIgNAIIgDACg");
	this.shape_23.setTransform(86.3,-9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAAiIgDgLIAAgEIgBgEIgBgNQAAgJABgKIADgQIAGAAIgBACIgDAMIAAAHIgBAJIABAHIABAHIAAAEIAAABIAEALIgEAFQAAAAgBABQAAAAgBAAQAAABAAAAQAAAAAAAAIAAAAg");
	this.shape_24.setTransform(86.2,-9.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#171717").s().p("ADYAOIgEAAIABgIIADAAIAmgBIAAAJgAkBAAQABgFADgIIG6AAIAAANgADYAAIgDAAIACgLIABgCIAqAAIgDANg");
	this.shape_25.setTransform(65.1,-11.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9F9F9F").s().p("AjcACIgCgDIG9AAIAAADg");
	this.shape_26.setTransform(61.8,-7.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#626262").s().p("ADDAlQgEAAAAgGIAAgMIAAgDIAAgFIm9AAIgCgGIgBgFIHAAAIAAgUIAAgQIAKAAIAAAQIAAAUIAAALIAAAFIAAADIAAAMQAAAFACABgADdAYIgCAAIgEgLIAAgCIAAgDIAEAAIAjAAIAEAPIggABg");
	this.shape_27.setTransform(64.9,-9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AD6APIgjAAIgEAAIgBgIIgBgHIAFAAIAmAAIgBgJIglABIgEAAIAAgHIAEAAIAmAAIAEgOQAHAOgBASQgCATgGAIgAkFAGIAAgCIgBgEQAAgFACgFIAAgDIG/AAIAAATg");
	this.shape_28.setTransform(65.3,-9.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2C2C2C").s().p("AC1ABImFAAIgMAAIgBgBIG7AAIAAABg");
	this.shape_29.setTransform(61.9,-7.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#636363").s().p("AjRgKQDzABCvAEIABAKQiwAFjzABg");
	this.shape_30.setTransform(72.6,-17.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B8B8B8").s().p("AjRADIAAgJQDzAACuAGIACAHQiwgEjzAAg");
	this.shape_31.setTransform(72.6,-18.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7B7B7B").s().p("AjUAcQD3AACqgIIACgOIAAgHIAAgNIgCgIQiugHjzAAIAAgGQD2AACwAKQAFAZgFAaQisAKj6AAg");
	this.shape_32.setTransform(72.9,-16.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#171717").s().p("AjRgFQDzAACwgFIgCAMQiqAJj3AAg");
	this.shape_33.setTransform(72.6,-14.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AjRAAQDzgBCwgFIAAAHQiwAFjzABg");
	this.shape_34.setTransform(72.6,-15.8);

	this.addChild(this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.5,-24,105.7,42);


(lib.GUN_TANK_05 = function() {
	this.initialize();

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDEDED").s().p("AhCAgQgcggAcgfIAHAAQgZAeAWAbICPAAIgGAGg");
	this.shape.setTransform(31.9,-15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#191919").s().p("AhCgcICGAAQAVAdgPAcIiPAAQgWgdAZgcg");
	this.shape_1.setTransform(32.6,-15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLACIAAgLIAXAFIAAAJQgRgBgDAGQgDgBAAgHg");
	this.shape_2.setTransform(99.3,-10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#191919").s().p("AhAAJQgFAAAAgGIAAgMICIAAIAAAMQAAAGADABg");
	this.shape_3.setTransform(91.3,-10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAeQgXgQgWARQgYgRgSARIgHgCIgCgBIAAgJIAJACQASgRAYASQAWgTAXARQAVgRAaATQATgWAVAVIARgDIAAguIAAgCIAFAAIAAAAQABADADgBIAAAJQgDAGAAAKQAAAGADAFIAHAAIAAAIQgBAHgKAEIgPADIgHABQgVgVgTAVQgagTgVASg");
	this.shape_4.setTransform(69,-8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#191919").s().p("AgDAXQgYgRgVATQgYgSgTARIgJgCIAAguIDJAAIAAAtIgRADQgWgVgTAWQgagTgUARg");
	this.shape_5.setTransform(68.3,-8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#292929").s().p("AhjAdIgBgBQgCgCgBgGIAAgwIDOAAIAAACIjIAAIAAAvIAAAJg");
	this.shape_6.setTransform(68,-8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(1,1,1).p("AAAAAIAAAA");
	this.shape_7.setTransform(100.4,-9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#525252").s().p("AgpACIABgDIBSAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAABAAABg");
	this.shape_8.setTransform(110.1,-13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B46C1C").s().p("AAAAAIAAAAIAAABg");
	this.shape_9.setTransform(49.8,-17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2C706").s().p("AAAAAIAAAAIAAAAg");
	this.shape_10.setTransform(49,-21.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AD4BOIgBgBIgCgCIgBgLIAAAAIABgHIAAgCIADgCIABgBIABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQACAFAAAEQAAAHgCAEQgCAEgCAAIgCgBgAEPhAIgEgFIgLgCIgLACIgFAFIAAgDQAAgEAEgCIABgCQAGgDAFAAQAEAAAHADIABACQADADAAADIAAADIAAAAgADYhAIgEgFIgLgCIgLABIgEAGIAAgBIgBgDQAAgEAEgCIABgBQAGgDAFAAQAFAAAGADIABACQAEADAAADIAAADIgBAAgAkchAIgEgFIgLgDIgLADIgFAFIAAAAIgBgDQAAgEAFgDIABgBQAFgDAGAAQAEAAAHADQAAACAAgBQAEAEAAADIAAADIAAAAgAE4hFQgEgCgHAAQgGAAgFACIgEAFIAAgDQAAgEAEgCIAAgCQAEgDAHAAQAHAAAEADIABACQAEADAAADIAAADgAChhBIgFgFIgLgCIgLACIgDAFIgBABIAAgBIAAgDQAAgDACgCIACgBIAAgBQAHgDAEAAQAFAAAGADQABAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAQADAEAAACIAAADIAAABgABphBIgEgFIgLgCIgLACIgFAGIAAgBIAAgDQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIADgCIABgBIADgBIAIgCQAFAAAGADIABABQAEAEAAACIAAADIgBABgAAyhBIgFgFIgKgCIgLACIgFAGIAAgBIgBgDIAAgBQABgEAEgBIABgBIAGgDIAFAAQAEAAAGADIABABQAEAEAAACIAAADIAAABgAgihFQAAgEAEgBIAAgBIAHgDIAEAAQAFAAAHADIAAABQAEAEAAACIAAADIgEgFIgMgCIgCABIgJABIgDAFIgBABgAg7hBIgEgFIAAAAIgLgCIgCABIgJABIgEAGIAAgBIgBgDIAAgBQABgEAEgBIAAgBIAHgDIAEAAQAFAAAGADIACABQADAEAAACIAAADIgBABgAiRhFQAAgEAEgBIAAgBIAHgDIAEAAQAFAAAGADIABABQAEAEAAACIAAADIgFgFIgLgCIgCABIgJABIgEAGgAiphBIgFgFIgLgCIgCABIgJABIgDAFIgBABIAAgBIgBgDIAAgBQABgEADgBIABgBIAHgDIAEAAQAFAAAGADIABABQAEAEAAACIAAADIAAABgAjhhBIgEgFIgLgCIgDABIgIABIgFAGIAAgBIAAgDIAAgBQAAgEAEgBIABgBIAGgDIAFAAQAEAAAHADIABABQADAEAAACIAAADIAAABg");
	this.shape_11.setTransform(75.8,-15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AqMBkIAggTIADAOQAGALAIAHIggAWQgLgRgGgSgAgqgCIAAgDIIqABIgDACIAAABgAJUhoIAFgHIABgCIAvAAIADAJgAJEh2IAAgCIAAgEIAAgDQAAgDgEgDIAiAAIgGAJIgBAEIgBACgAIhh2IgKAAIAAgDIgBgDIABAAIAAgDQAAgDgDgDIAVAAQgEACABAEIAAADIAAAAIAAADIAAABIAAACgAHgh2IAAgDIAAgDIAAAAIAAgDQAAgDgDgDIAfAAQgEACAAAEIAAADIAAAGgAgUh2IAAgDIgBgDIABAAIAAgDQAAgDgEgEIAVAAIAJAAIAEAAQgEACAAAEIAAAAIAAADIAAABIAAACIAAABIAAACIgEAAIgEAAIgBAAIABABgAg9h2QgDgKgJgGIAEAAIAVAAQgEADAAAEIABADIAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAgAGsh3IgDAAIAAgDIgBgCIABgBIAAgDQAAgCgDgEIARAAIAOAAQgFACABAEIABADIAAABQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAABIABACgAF7h3IgDAAIgGAAIAAgDIgBgCIABgBIAAgDQgBgCgDgEIATAAIABAAIAKAAIABAAIgBABQgCADAAACIAAADIAAABIAAACIAAABIAAACgAFEh3IgKAAIAAgDIAAgCIAAgBIAAgDQAAgCgEgEIARAAIAPAAIgDADQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIABADIAAABIgBACIAAABIABACgAEXh3IgUAAIAAgGIAAgDQAAgCgEgEIAbAAIAFAAQgEACgBAEIAAAAIABADIAAABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAgADgh3IgUAAIAAgDIgBgCIABgBIAAgDQgBgCgDgEIAgAAQgFACAAAEIAAAEIAAAFgACph3IgRAAIgFAAIAAgGIAAgDQABgCgEgEIAhAAQgFACgBAEIAAAAIABADIAAABQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAAAgABwh3IgTAAIAAgDIgBgCIABgBIAAgDQAAgCgEgEIAcAAIADAAQgDACAAAEIAAAEIAAAFgAA5h3IgUAAIAAgDIgBgCIABgBIAAgDQAAgCgDgEIAbAAIAEAAQgDACgBAEIAAAAIABADIAAABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIAAABIABACg");
	this.shape_12.setTransform(49.4,-9.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFD2E").s().p("AAAANIgJALIgEgDIgKgLIALgKIgLgJIAPgOIAIALIAKgKIANANIgKAJIALAJIgOAPg");
	this.shape_13.setTransform(-9.6,6.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DFDFDF").s().p("AgPAGIAggTIAAAGIgfAVIgBgIg");
	this.shape_14.setTransform(-14.7,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#636363").s().p("ApOCiIgCgBIAHgGIANAKIgFAFgApXCOQgOgOgJgNIgIgMIAfgWQAFAEAHADQARAHAcgHIARgGIgkAdIgNgOIgKAKIgKgLIgPAPIALAKIgLAKIALALgAqGBnIgHgOIgEgPIAAgBIgCgOIAAgIIAAgCIAAgDIAAgIIABAAIAFgDIABALIABAHQABAIADAHQAGASALARIgMAJIgEgJgAp2BnIAAAAgApqAZIAAgJIABgIIADgBIAAACIAAAFIAAAEIAAACIAAADIAAAEIgEAEIAAgGgAjdAAQgQgCgNgDIgNgDIAWgBQARAGAXADgAgsgNIAAgHIADgGIIqABIAAAAIABALIABACgAglglIABgCIIoAAIACACIgCABgAI1g4IpTAAIAAgEQAEAAAFgCIABAAQAFgCAAgFIAAgCIgBAAIgCgEIgCgCIgFgBIACgJIAXAAIAAgBICiAAIC3AAIA+AAIAwAAIBfABIAUAAQAHgQAHgLIAAgBIANgVIAHgJIACgFIACgCIABgEIAGgJIABgEIAAAEQABABgEAIIgCAEIgEAHIgCACIgEAHIgOAVIAAABIBJAAQAAAPgEARIhUAAQgCAEAAAFIgBAEIgCAIIAAAFIgDAJgAIBhNIgBACQgBABgBAAQAAABgBAAQAAAAAAABQAAAAAAABIAAACQAAAFAEACIACABIAJABIALgBIAAgBQAFgCAAgFIAAgCIgBAAIgBgEIgDgCQgHgCgEAAIgLACgAHFhFQAAAFAGABIABABQAEACAGAAIAJgBIABgBQAFgCAAgFIAAgCIAAAAIgFgGQgGgCgEAAIgLACQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAgBABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAgAGOhFQAAAFAFABIACABQAEACAFAAQAGAAAEgCIABgBQAFgBAAgFIAAgCIgBgBIgCgDIgCgCQgHgDgEAAIgJACIgCABQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQAAABABAAIgBABgAFWhFQAAAFAFABIACABQAEACAFAAQAFAAAFgCIACgBQAEgBAAgFIAAgCIgBgBIgCgDIgBgCQgIgDgEAAIgLADIgCACQAAAAgBABQgBAAAAAAQAAABAAAAQAAABAAAAIgBABgAEfhFIAAABQABAEAEABIABABQAFACAFAAIABAAQAFAAAEgCIABgBQAFgBAAgFIAAgCIgBgBIgCgDIgCgCQgHgDgEAAIgCABIgJACQAAAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAgAD1hPIgJACIgBACQgBAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIAAADIAAABQAAAEAEABIACABQAFACAFAAIABAAQAFAAAEgCIABgBQAFgBAAgFIAAgDIgFgFQgHgDgEAAIgDABgACwhFQABAFAFABIABABQAEACAGAAIABAAQAEAAAEgCIACgBQAEgBAAgFIAAgCIAAgBIgCgDIgCgCQgHgDgEAAIgCABIgJACQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAgBABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAgACHhPIgJACIgCACQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAIAAADIAAABQAAAEAFABIABABQAFACAFAAIAAAAQAGAAAEgCIABgBQAEgBAAgFIAAgDIgCgDIgCgCQgHgDgEAAIgCABgABChFIAAABQABAEAEABIABABQAEACAGAAIABAAQAEAAAEgCIACgBQAFgBAAgFIAAgCIgBgBIgCgDIgCgCQgHgDgEAAIgCABIgJACQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAgBABQAAAAgBAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAgAAKhFQABAFAEABIACABQAEACAFAAIACAAQAEAAAFgCIAAgBQAFgBAAgFIAAgCIgBgBIgCgDIgCgCQgHgDgEAAIgCABIgJACQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIgBABgAIbhlQgFgCAAgIIAAgBIABABQAAAEAEAEQAEAFAHAAQAHAAAEgFQACgCADgGQAAAIgFACQgEAGgHAAQgHAAgEgGgAHshfQgFgCgEgEQgFgCAAgIIAAgBIABABIAAgBIAAABQABAEADAEQAFAFAGAAIAAAAQAHAAAEgFIAEgGIABgCQAAAIgFACQgEAGgHAAgAgIhfQgGgCgEgEQgCgBgBgDIABgDIACAFQAEADAGACIACAAQAGAAADgFQADgCABgGIAAACIABABQgBAFgEACQgDAGgGAAgAG1hgQgGgBgDgEQgFgDAAgIIAAgBIAAABQABAEAEAEQADAEAGABIADAAQAGAAAEgFQACgBADgHIAAABQAAAHgFADQgEAFgGAAgAF+hgQgGgBgEgEQgEgDAAgIIAAgBIAAABIAEAIQAEAEAGABIABAAQAHAAAEgFQADgBACgHQAAAIgFADQgEAFgHAAgAFGhgQgEgBgDgCIgCgCQgFgDAAgIIAAgBIABABQAAAEAEAEQAEAEAFABIADAAQADAAADgCIACgBIACgCQADgBACgHIAAABQAAAHgEADQgFAFgGAAgAEPhgQgEgBgDgCIgCgCQgGgDAAgIIAAgBIABABIAAgBIABABIAEAIQAEAFAHAAIAAAAQAEAAADgCIAEgDIAEgFIABgDQAAAIgFADQgEAFgHAAgADXhgIgHgDIgCgCIgCgBQgCgDAAgGIAAgBIAEAIQAEAEAFABIACAAQAEAAAEgCIAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQADgBACgHIAAADIABgDIAAADQgCAGgDACQgEAFgIAAgACghgIgHgDIgCgCIgCgBQgCgDAAgGIAAgCIAAABQABAEADAEQAEAEAFABIACAAIAHgBIAEgEQADgBACgHQAAAHgDADIgCABIgDADQgDACgFAAgABphgQgFgBgDgCIgCgCQgEgDAAgHIAAgBQABAEADAEQADAEAHABIABAAIABAAQAEAAAEgCQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBQACgBACgHIAAADIABgDIAAADQgCAGgDACQgEAFgHAAgAAxhgQgEgBgDgCIgCgCQgFgDAAgHIAAgCIABABIAAgBIABABQAAAEAEAEQAEAFAGAAIABAAIAGgBIAFgEIAEgFIABgDIAAADQgBAGgEACIgEADQgDACgEAAg");
	this.shape_15.setTransform(48.9,-6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#838383").s().p("AAxA5IgJgbIgDgJIgKgcIgCgGIgCgDIAAgDIgKgcIgDgKIAPAAIAAAAIARAAIAJAAIAJAAIACAAIAoA5IgCAKIAAABIgCAFIgCAFIgEAJQgHAPgGADQgHAGgKACIgCABIgJAAIgCAAgAg8A5IgJgbIgDgJIgMgcIgNglIgFgNIAFAAIAhAAIAYAyIAPAcIAEAJIAPAbg");
	this.shape_16.setTransform(35,-13.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BFBFBF").s().p("AA3APIgCAAIgDAAIgBAAIgFAAIgNAAIgWgcIAJAAIAKAAIAiAcgAABAPIgsAAIgSgcIAoAAIAgAcg");
	this.shape_17.setTransform(35.7,-21.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#969696").s().p("AqMBqIAhgXIACATIgfATQgDgIgBgHgAqOBYIAOgNIAVgOIAAAIIAAAJIgiAUIgBgKgAgtAnIAAgBIIvAAIABACgAI4gUQABgFACgEIBUAAIgCAJgAhGhZIgigeIAEAAIAIABIAEABIACABIAHACIABAAIABAAIAAABIAAABIABAAQAJAFACAKIAAABIABABIAAAFIAAABgAhyhZIgHAAIgigeIAgAAIAWAegAjChZIgBgBIgEgGIgNgKIgCgBIgJgGIgLgGIACAAIAlAAIASAegAJdhcIAFgHIAoAAIADAHgAIWhyQgHgCgEAAQgFAAgGACIAAACIggAAIgBgCQgGgCgFAAQgFgBgFADIgBABIgPAAIgRAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQgFgDgFABQgFgBgGADIgBABIgCAAIgKAAIgBAAIgTAAIgBgBQgGgDgFABIgHABIgEABIgBABIgOAAIgRAAIgBgBQgHgDgEABIgFAAIgGACIgBABIgEAAIgbAAIgBgBQgGgDgGABIgEAAIgHACIAAABIgfAAIgBgBQgHgDgFABIgEAAIgHACIAAABIghAAIgBgBQgGgDgFABIgDAAIgHACIgBABIgEAAIgcAAIgBgBQgGgDgFABIgEAAIgGACIgBABIgFAAIgbAAIgBgBQgGgDgFABIgFAAIgGACIAAABIgFAAIgJAAIgUAAQAAABgBgCQgGgCgFAAQgGAAgFACIgBABIgVAAIgFAAIgHgDIgCAAIgJgCIgFgBIAFAAIAJAAIACAAIAPAAIA+AAIAAgBICiAAIBFAAIDUAAIBqABIBBAAIAAADIgBAEIghAAIgBgCQgDgCgIAAQgGAAgFACIAAACIgVAAIgBAAIgBgCg");
	this.shape_18.setTransform(49.1,-11.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1C1C1C").s().p("AlTA5QgagIgEgdQASgKAbgFQgZAWAUAegAFyg4IAAAAIAAABg");
	this.shape_19.setTransform(45.8,-5.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#696969").s().p("AAtA5IghAAIgMgbIgEgJIgPgcIgZgyIAVAAIAMAAIAqAAIADAKIAKAcIAAADIABADIADAGIAKAcIADAJIAJAbgAg1A5QgjgGgWgRQgUgPgBgQIAAgDQACgZAbgVIAPgLIAGAAIAFANIANAlIALAcIAEAJIAJAbgABSg5IAGAAIAJAAIAjAAIgCAWIgBAGIgDAWIgCAHIgBAAg");
	this.shape_20.setTransform(32.9,-13.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AhbBAQgugOgHgaIgBgGIgBgEIAAgBIAKgGQAAgnAygdIAEgDIDFAAIAAADIAQAAIAQAAIAAABIgCAVIgBAHIgDAVIAAAAIgDAIIAAADIgDAIIgBAFIgBACIgBADIgDAJQgKAYgLAIQgGAEgGAAIgCAAIh/AAQgVgDgRgFIgDgBQgugNgOgVQAHAYAtAQIAOAFIgVAAIgCgBgAhZgyQgaAVgCAaIgBADQACAQATAOQAXARAiAGIAPABIAzAAIAhAAIAYAAIACAAIAJgBIACgBQAKgCAHgGQAGgCAHgPIAEgJIACgFIACgGIAAgBIADgIIAAgBIACgIIAEgVIABgHIACgVIgjAAIgKAAIgFAAIgCAAIgJAAIgJAAIgRAAIAAAAIgPAAIgrAAIgKAAIgVAAIghAAIgEAAIgHAAIgPAKg");
	this.shape_21.setTransform(31.6,-13.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4F4F4F").s().p("Ao+CfIB9hhIAGgCQAJgDAEADIgUAOIgIAGQAtAIAfAAQAkgBArgLQBCgSBBgsIAAgBIAJgFIgEgFIgYAAQgWgDgSgFIgOgEQgtgQgHgZQAOAWAuAMIADABQARAGAVADICBAAIACAAQAGgBAGgDQALgJAKgYIADgJIABgCIABgCIABgFIADgKIAAgDIADgIIAAAAIADgVIABgHIACgWIAAgBIAGAAIgBAQIAAAEIgBAJIgBADIgCATIgBAIIgDALIgBACIgBAGIgBADIJTAAIgBAJIh+AAIhjAAIAAAAIAAAAIh+AAIjOAAIgoAAIgDAIIAAACIgBADIgEAIIgDAGQgGAMgIAEQgGADgHAAIhWAAIgRANIgFADQhCAvhEARQgsALgjACQgjAAgxgLQgRANhOBHIgNgKgAkvhSQAMgeAngVIAEgCIAIgDIAIAAIAGAAIAdAAIAPAAIARAAIAuAAIAKAAIAHAAIANAAIANAAIAFAAIABAAIADAAIACAAIAHAAIAFAAIAAgBIAAgEIAAgBIAAgBQgCgKgJgFIgBAAIAAgBIAAgBIgBAAIgBAAIgHgDIgCgBIgFgBIgIgBIAIAAIAFABIAJACIACAAIAHAEQAJAFADALIAAABIAAABIAAAEIAAADIAAABIjHAAIgEACQgyAeAAApIgKAGQAAgPAGgLg");
	this.shape_22.setTransform(47.9,-6.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#292929").s().p("AhnAZQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgFAAQA8grBugHIAbgBQANAEAPADIgqABIghADQgkADgVAHQgaAFgTAIQgPAIgOAKIgKgBg");
	this.shape_23.setTransform(15.3,-3.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#303030").s().p("AhHA2IgXgXIgBgCIgJgMIALgIIAIAMQAJANAPANIAAAAIADAEIAKgMIALAMIAOgPIgKgKIAKgKIAhgbIgPAGQgcAFgRgFQgGgCgFgEQgIgHgGgLIgDgOIgCgTIADgDIAAABIADARQACAIAEAGQAFAJALAHQAEADAIACIABAAQAPADAWgGQAJgDAXgJIASgHIAKgEIALgEIAJgEIAIgBIAGAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAKABIgBABIgKAIQgDgCgJACIgGACIh8BfIgHAGIgQgMg");
	this.shape_24.setTransform(-4.8,3.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#191919").s().p("AiJBtQgIgCgFgDQgKgHgGgJQgDgGgCgIIgDgRIAAgBIAMgHQA6gmBHgmQBng5A+gRIAWgFIAVgCQgnAVgMAdQgFAMgBAOIAAABIABAEIABAGQgjAJgnAOQhTAkhjBHIgBAAg");
	this.shape_25.setTransform(5,-8.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AoxB+QBjhGBVglQAngQAkgHQAHAYAtAOIACACIANADIgbABQhvAGg9AuIgIABIgJADIgLAEIgLAFIgRAHQgXAJgLACQgPAEgLAAIgLgBgApXBAIAAgEIAAgFIAAgCIAFgEQBjhFBegvQBrg2BDgEIAGgBIACAAIABAAIAMAGIAIAGIADACIAMAKIAFAFIABABIgQAAIgcAAIgHAAIgIAAIgJAAIgDAAIgMABQgOABgRAFQg+ARhpA6QhFAkg5AlIgPAKIAAgFgAIQgWIgEgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABgBIABgCIALgCQAEAAAHACIADACIABAEIgEADQgEADgHAAQgGAAgFgDgAHagXIgFgDQAAAAAAgBQAAAAAAgBQAAAAABAAQABgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIALgCQAEAAAGACIAFAGIgFADQgDADgHAAQgIAAgDgEgAgNgVIADgLIAFABIACACIACAEIgEADQgDADgFAAIAAgCgAGjgWIgBgBIgEgDQgBAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIACgBIAJgCQAEAAAHADIACACIACADIgEADQgEAEgHAAQgGAAgEgDgAFqgXIgEgDQAAAAAAgBQAAAAAAgBQAAAAABAAQABgBAAAAIACgCIALgDQAEAAAIADIABACIACADIgDADQgEAEgIAAQgHAAgEgEgAE+gTQgHAAgEgEIgEgDQgBAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAJgCIACgBQAEAAAHADIACACIACADIgEADIAAAAQgEAEgFAAIgCAAgAEHgTQgHAAgFgEIgEgDQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBABAAIABgCIAJgCIADgBQAEAAAHADIAFAFIgEADIgBAAQgDADgHABgADQgTQgHAAgEgEIgFgDQAAAAAAgBQAAAAAAgBQAAAAABAAQABgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAJgCIACgBQAEAAAHADIACACIACADIgEADQgEAEgGAAIgBAAgACYgTQgHAAgEgEIgFgDQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIACgCIAJgCIACgBQAEAAAHADIACACIACADIgDADIgBAAQgDAEgHAAIgBAAgABhgTQgHAAgEgEIgEgDQgBAAAAgBQAAAAAAgBQABAAAAAAQABgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAJgCIACgBQAEAAAHADIACACIACADIgEADIAAAAQgEADgFABIgCAAgAApgTQgGAAgFgEIgEgDQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBABAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAJgCIACgBQAEAAAHADIACACIACADIgEADQgEAEgFAAIgCAAgAIqg5QgEgEAAgEIgBgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgBQABgGADgDQAIgEADAAQADAAAIAEQAEAEABAFIAAABIAAADQgDAGgCACQgEAFgHAAQgHAAgEgFgAH9g0QgGAAgFgFQgDgEgBgEIAAgBIAAABIgBgBIABgCQgBgEAFgGIAJgEIACAAQAEAAAHAEQAEAEABAFIAAAEIgBACIgEAGQgEAFgHAAgAAFg0QgFgCgDgDIgCgFIAAgJIABgEIABgEIADAAIACgCIADgBIACAAQADAAAIADQAEAFABAFIAAAEIgBACIAAgCQgBAGgDACQgFAFgGAAgAHEg1QgGgBgDgEQgEgEgBgEIAAgBIAAgBQAAgFAFgGIACAAIAHgEIADAAQACAAAIAEQAFAEAAAFIAAAEQgDAHgCABQgEAFgGAAgAGNg1QgGgBgEgEIgEgIIAAgBIAAgBIABgBIACgIIAAAAIABgCIABAAIAIgEIACAAQADAAAIAEQAFAEAAAFIAAABIAAADQgCAHgDABQgEAFgHAAgAFVg1QgFgBgEgEQgEgEAAgEIgBgBIABgBQgBgFAFgGIACAAIAHgEIADAAQADAAAIAEQAEAEAAAFIAAAEQgCAHgDABIgCACIgCABQgDACgDAAgAEgg1QgHAAgEgFIgEgIIgBgBIAAABIgBgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBgFAGgGIAEgCIABAAIAAAAIAEgCIACAAQADAAAIAEQAEAEABAFIAAAEIgBADIgEAFIgEADQgDACgEAAgADmg1QgFgBgEgEIgEgIIAAgCQAAgFAEgGIACAAIAHgEIACAAQAEAAAIAEQAEAEABAFIAAAEIgBADIAAgDQgCAHgDABQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIAAAAQgEACgEAAgACvg1QgFgBgEgEQgDgEgBgEIAAgBIAAgBQABgFACgEIAAAAIABgCIABAAIAGgDIACgBIACAAQADAAAIAEQAEAEABAFIAAAEQgCAHgDABIgEAEIgHABgAB5g1IgBAAQgHgBgDgEQgDgEgBgEIAAgCQAAgFAEgGIADAAIAAgBIAHgDIACAAQADAAAIAEQAEAEABAFIAAAEIgBADIAAgDQgCAHgCABQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgEACgEAAgABCg1QgGAAgEgFQgEgEAAgEIgBgBIAAABIgBgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBgFAFgGIAFgCIAAAAIADgBIABgBIADAAQADAAAIAEQAEAEABAFIAAAEIgBADIgEAFIgFAEIgGABgAI+hjIgEgFIgBgCIAAgBIABgCIAAgBIAEgEQAEgCAHAAQAGAAAFACIAEAEIAAAEIAAACQAAADgEACIgFACIgGAAgAIVhhIgFgCIgEgFIAAgFIAEgFIALgCIALACIAEAEIAAABIABACIAAADQAAADgFACIgEACIgHAAgAHahkQgEgBgBgEIgBgCIAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAFgFIALgBIAKACIAFAEIAAABIAAACIAAADQAAADgFACIgFACIgFAAgAgWhhIgFgCQgDgCgBgDQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAEgFIALgDIALADIAEAEIAAABIABACIAAADQAAADgFACIgFACIgGAAgAGihkQgCgBgCgEIgBgCIAAgBIABgCIAAAAIAEgFIALgCIALACIAEAFIAAAAIABACIAAADQAAADgFACIgFACIgGABgAFvhiIgFgCQgDgBgBgEIgBgCIAAgBIABgCIAEgFIALgCIAMACIADAFIAAAAIABACIAAADIAAABQgBADgDABIgGACIgGABgAE+hhIgGgBIgFgCQgCgBgCgEQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgBQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBIAEgFIALgCIALACIAEAFIAAAAIABACIAAADIAAABQgBADgEABIgFACIgGABgAEGhhIgLgDQgCgBgCgEIAAgFIABAAIADgFIAJgBIADgBIALACIAFAFIAAAFIAAABQAAADgFABIgFACIgGABgADPhhIgFgBIgFgCQgDgBgCgEQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgBQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAFgFIAJgBIACgBIAKACIABAAIAEAFIAAAAIAAACIAAADIAAABQAAADgEABIgFACIgGABgACShiIgFgCQgDgBgCgEIAAgFIAFgFIAJgBIACgBIALACIAEAFIAAAFIAAABQAAADgEABIgFACIgGABgABghhIgKgDQgDgBgBgEIgBgCIAAgBQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAAAIAEgFIAJgBIACgBIALACIAEAFIAAAAIABACIAAADIAAABQgBADgEABIgFACIgGABgAAphhIgGgBIgFgCQgCgBgCgEIgBgCIAAgBIABgCIAEgFIAJgBIACgBIALACIAEAFIAAAAIABACIAAADIAAABQgBADgEABIgEACIgHABg");
	this.shape_26.setTransform(47.4,-10.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#ADADAD").s().p("AnrBtIAIgFQAzAHAggCQAggCAogMQA3gPA2gjIATgMIAEAEIgJAGIAAABQhBArhCATQgrALgkAAIgDABQgeAAgrgJgAp9A5IAAgDIAAgCIABAFIAPgKQA5glBFgkQBpg6A+gRQARgFANgBIANgBIADAAIAJAAIgIACIgEADIgVACIgWAFQg+ARhpA5QhHAmg7AmIgLAHIgBgEgAhAAGIAEgGIInAAIgBAHgAHtgbIgCgBQgFgCAAgFIAAgCIAFADQAEADAHAAQAHAAAEgDIAEgDIAAAAIAAACQAAAFgEACIgBABIgKABIgJgBgAG1gcIgBgBQgFgBAAgFIAAgCQAAABAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIAEADQAEAEAHAAQAHAAAEgDIAEgDIABAAIAAACQAAAFgFACIgBABIgKABQgGAAgEgCgAF+gcIgCgBQgEgBAAgFIAAgCIAAgBIAEADIABABQAEADAGAAQAHAAAEgEIAFgDIAAABIAAACQAAAFgFABIAAABQgFACgGAAQgEAAgFgCgAFGgcIgBgBQgFgBAAgFIAAgCIAAgBIAFADQAEAEAHAAQAHAAAEgEIAEgDIABABIAAACQAAAFgFABIgBABQgFACgFAAQgGAAgEgCgAEZgaQgFAAgFgCIgBgBQgFgBgBgEIAAgBIAAgCQABABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAFADQAEAEAHAAIABAAQAGAAADgEIABAAIAEgDIAAABIAAACQAAAFgFABIgBABQgDACgGAAgADhgaQgFAAgEgCIgCgBQgEgBAAgEIAAgBIAAgDIAEADQAEAEAHAAIACAAQAGgBAEgDIAAAAIAEgDIAAADQAAAFgEABIgCABQgEACgFAAgACqgaQgGAAgEgCIgBgBQgEgBgBgFIAAgCQAAABAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAEADQAFAEAGAAIACAAQAFAAAEgEIAEgDIABABIAAACQAAAFgFABIgBABQgFACgDAAIgCAAgABygaQgFAAgEgCIgCgBQgEgBAAgEIAAgBIAAgDIAEADQAEAEAHAAIACAAQAGAAADgEIABAAIAEgDIAAADQAAAFgFABIAAABQgFACgFAAgAA7gaQgFAAgFgCIgBgBQgEgBgBgEIAAgBIAAgCQAAABABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEADQAFAEAGAAIACAAQAGgBADgDIABAAIAEgDIAAABIAAACQAAAFgFABIgBABQgEACgFAAIgBAAgAAEgaQgEAAgDgCIgCgBQgFgBAAgFIAAgCIAAgBIAFADQAEAEAFAAIABAAQAGAAAEgEIAEgDIAAABIAAACQAAAFgEABIgBABQgEACgFAAIgBAAgAgzgfQAFAAAEgDIAEgDIAAAAIAAACQAAAFgEACIgCAAQgEACgEAAIABgFgAIPg1IhegBIgxAAIg9AAIi4AAIifAAIAAABIgaAAIACgSQACADACABQAEAEAFACIACAAQAIAAADgGQAEgCACgFIAAgDIAAgEQgBgFgFgFQgHgDgEAAIgCAAIgCABIgFACIgCAAIgCAEIABgQIgGAAIgQAAIgQAAIAAgDIAAgBIAAgCIAAgEIAAgBIAAgCIAKAAQABADAEACIAEACIAHAAIAGAAIAFgCQAEgCAAgDIASAAIAAgBIAGAAIAEAAQACAEADABIAFACIADABIABAAIAGgBIAFgCQAEgBAAgDIAAgBIAVAAIAEAAQABAEADABIAKADIABAAIAHgBIAEgCQAFgBAAgDIAAgBIAUAAIAEAAQACAEACABIAFACIAGABIAHgBIAEgCQAFgBAAgDIAAgBIAEAAIARAAIAEAAQACAEACABIAFACIAGABIAAAAIAGgBIAFgCQAEgBABgDIAAgBIAUAAIAEAAQACAEACABIALADIAAAAIAHgBIAFgCQAEgBAAgDIAAgBIAUAAIAEAAQACAEADABIAFACIAFABIABAAIAGgBIAEgCQAFgBAAgDIAAgBIAKAAIAOAAQACAEADABIAEACIAHABIAGgBIAFgCQAEgBABgDIAAgBIAGAAIADAAIAPAAQACAEACABIALADIAHgBIAEgCQAFgCAAgDIADAAIAWAAQABAEADABIALADIAGAAIAFgCQAFgCAAgDIAXAAIAFAFIAFACIAGAAIAGAAIAFgCQAEgCAAgDIAKAAIAFAAIAEAFIALACIAHAAIAEgCQAFgCAAgDIAVAAIgDAFIgGAJIgNAVIAAABQgIALgGAQgAH/hNQAAAIAFACQAFAGAGAAQAHAAAEgGQAFgCAAgIIAAgDIAAgBQAAgFgFgEQgIgEgDAAQgDAAgIAEQgDADAAAGIgBABQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAgAHIhNQAAAIAEACQAEAEAGACIACAAQAGAAAFgGQAEgCAAgIIAAgEQAAgFgEgEQgIgEgDAAIgCAAIgKAEQgEAGAAAEIAAACgAGQhOQAAAIAGADQADAEAGABIACAAQAHAAAEgFQAEgDAAgHIAAgBIAAgEQAAgFgEgEQgIgEgDAAIgCAAIgIAEIgBAAQgGAGABAFIgBABgAFZhOQAAAIAFADQAEAEAFABIACAAQAHAAAEgFQAFgDAAgIIAAgDIAAgBQgBgFgEgEQgIgEgDAAIgCAAIgJAEIAAAAIgBACIAAAAIgDAIIAAABIgBABgAEihOQAAAIAEADIADACQADACADABIADAAQAHAAAEgFQAEgDAAgHIAAgBIAAgEQAAgFgEgEQgIgEgDAAIgDAAIgHAEIgCAAQgEAGAAAFIAAABgADqhOQAAAIAFADIACACQADACAEABIADAAQAGAAAEgFQAFgDAAgIIAAgEQAAgFgFgEQgIgEgCAAIgDAAIgDACIgBAAIgBAAIgEACQgFAGABAFQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAgBgAC6hbIgDAAQgEAGAAAFIAAACIAAABQAAAGADADIABABIACACIAIADIACAAQAIAAAEgFQADgCABgGIAAgDIAAgEQAAgFgEgEQgIgEgEAAIgCAAgAB8hNQAAAGADADIACABIACACIAHADIACAAQAEAAADgCIAEgDIACgBQACgDAAgHIAAgEQAAgFgEgEQgIgEgDAAIgDAAIgCABIgGADIAAAAIgCACIAAAAQgCAEAAAFIgBABgABMhcIgBABIgCAAQgFAGAAAFIAAACIAAABQAAAHAFADIACACQACACAFABIACAAQAIAAADgFQAEgCABgGIAAgDIAAgEQgBgFgEgEQgHgEgEAAIgCAAgAANhNQAAAHAEADIACACQAEACAEABIACAAQAFAAADgCIADgDQAEgCABgGIAAgDIAAgEQAAgFgFgEQgIgEgDAAIgCAAIgBABIgDABIgBAAIgFACQgEAGABAFQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAAAgBgAI0hQIAAgBIAOgVIA5AAQADAKAAAMg");
	this.shape_27.setTransform(51.2,-9.4);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.1,-23.4,132.2,34.5);


(lib.GUN_TANK_04 = function() {
	this.initialize();

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AArAZQgagUgUATQgYgRgVASQgYgSgTASIgJgCIAAgvIDJAAIAAAuIgRADQgWgVgTAVg");
	this.shape.setTransform(68.3,-8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626262").s().p("AhjAdIgBgCQgCgBgBgGIAAgxIDOAAIAAADIjIAAIAAAvIAAAJg");
	this.shape_1.setTransform(68,-8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#232323").s().p("AgLAeQgXgRgWATQgYgTgSASIgJgDIAAgJIAJACQASgRAYARQAWgSAXARQAVgSAaATQATgVAVAVIARgDIAAguIAAgDIAFAAIAAAAQABAEADgBIAAAJQgDAGAAAJQAAAHADAFIAHAAIAAAJQgBAGgKAEIgPADIgHABQgVgWgTAXQgagUgVASg");
	this.shape_2.setTransform(69,-8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(1,1,1).p("AgEgIIAAgBAAAgMIAAAAQABAAACADQACAEAAAFQAAAFgCAEQgCAEgBAAQgBAAAAgB");
	this.shape_3.setTransform(100.9,-8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#232323").s().p("AAIAVIgBgCIgBgCQgCgEAAgGIAAgBQAAgEACgCIAAAAIACgDIACAAIAAAAQADAAABADQADACAAAFQAAAGgDAEQgBAEgDAAIgCAAgAgNAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgCIAAgCIAAgGIAAgHIAXAFIAAACIAAAIIAAABQgIgBgGACQgEABgBACg");
	this.shape_4.setTransform(99.7,-9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BCBCBC").s().p("ApHCGIgKAMIgOgOIALgLIgLgKIAPgOIAKALIAKgLIANAOIgJAKIAKAKIgOAPgAqSA0IAqgaIAAAFIAAABIgqAcIAAgIgAHvggQABgDAEgBIASAAIgDADIAAABgAgkggIABgEIGGAAQAAAEAEAAgAJaiIIAFgHIABgCIAwAAIADAJg");
	this.shape_5.setTransform(48.7,-6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhAAKQgDAAgBgDIgBgDIAAgCIAAgEIAAgHICIAAIAAAHIAAAEIAAACIABADQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAg");
	this.shape_6.setTransform(91.2,-10.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#525252").s().p("AliBGIAAgCII0AAIACACgAlZA4QAAgEADgEIGLAAICHAAIABAAIAUAAQgBADAAAFgADCAtQAGgCAKAAIAAgBIABAAIACACIgBABgAlVAtIABgDIGEAAIABADgAEIAMIABgEIBUAAQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAgAEaggIAAAAIAOgVIA5AAQACAKAAALgAEug+IAFgHIAoAAIADAHg");
	this.shape_7.setTransform(79.3,-14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9C98B").s().p("AiSAiIAIgGQAzAHAggCQAggBAmgMQA3gQA2ghIATgMIAEAFIgKAHQhBAphBASQgpALgkABQgfAAgtgIg");
	this.shape_8.setTransform(16.6,-1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A88858").s().p("AieAjIAHgEIAAgBIABAAQAtAIAgAAQAjgBApgLQBCgSBBgpIAJgHIgEgFIAUAAIgRAMQhFAwhGATQgpALgjABQglAAgwgLg");
	this.shape_9.setTransform(17,-1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AghAOIgBgBQgGgIgLgFIgDgBIgIgGIgMgGIACAAIBgAAQAKAAALAGIAKAGIACABQAJAFAIAIIABABg");
	this.shape_10.setTransform(33,-21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D6D6D").s().p("AktAvQAFgBAEgCIADgEIABABIAAACQABAEgFACIgBABIgIADIAAgGgADzAyIgCgBQgFgBAAgFIAAgDQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIAEADQAEADAIAAQAHAAAEgDIADgDIAAADQAAAFgDABIgCABIgJACIgKgCgAC7AyIgBgBQgFgBAAgFIAAgDQAAACABgCIAEADQAEADAHAAQAHAAAEgDIAEgDIABAAIAAADQAAAFgFABIgBABIgKACIgKgCgACEAyIgCgBQgEgBAAgFIAAgDQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIADADIABABQAFACAFAAQAHAAAFgDIAEgDIAAAAIAAADQAAAFgEABIgCABIgKACIgJgCgABMAyIgBgBQgFgBAAgFIAAgDQAAACAAgCIAFADQAFADAGAAQAHAAAEgDIAEgDIABAAIAAADQgBAFgEABIgBABIgKACIgKgCgAAfA0IgKgCIgBgBQgFgCgBgDIAAgBIAAgDQABACAAgCIAFADQAEADAHAAIABAAQAGAAADgDIABAAIAEgDIABAAIAAADQgBAFgFABIAAABIgKACgAgWA0IgKgCIgBgBQgFgCAAgDIAAgBIAAgDQABACgBgCIAFADQADADAIAAIABAAQAGAAADgDIABAAIAEgDIABAAIAAADQAAAFgGABIgBABIgJACgAhNA0IgKgCIgBgBQgGgCAAgEIAAgDQAAACAAgCIAGADQAEADAHAAIABAAQAFAAAEgDIAEgDIABAAIAAADQAAAFgFABIgBABIgIACIgBAAgAiQAyIgBgBQgEgCAAgDIAAgBIAAgDQAAACABgCIADADQAFADAHAAIABAAQAGAAAEgDIAAAAIAEgDIAAAAIAAADQAAAFgEABIgBABIgKACIgLgCgAi9A0IgJgCIgCgBQgEgCAAgDIAAgBIAAgDQAAACAAgCIAEADQAEADAHAAIACAAQAGAAADgDIABAAIAEgDIAAAAIAAADQABAFgGABIgBABIgIACIgCAAgAj0A0IgJgCIgCgBQgFgCABgEIAAgDIAEADQAEADAHAAIABAAQAGAAAFgDIADgDIAAADQABAFgEABIgCABIgJACIgBAAgAkZARQgFgCgEgEIgDgEIAAgEIADAGQAEADAFABIACAAQAHAAAFgEQACgDACgFIAAACIAAgCQABAIgFACQgEAFgIABgAEKAKQgFgCABgHIAAgBIAAABIAEAHQAEAGAHgBQAHABAEgGQADgCACgFQABAHgGACQgEAGgHAAQgHAAgEgGgADcAQQgGgCgEgEQgDgCAAgHIAAgBIAAABQAAADAEAEQAFAGAFgBIABAAQAHABAEgGIAEgGIABgBQgBAHgEACQgEAGgHAAgAClAQQgGgCgDgEQgFgCgBgHIAAgBIABABIAFAHQADAEAGABIACAAQAGABAEgGIAGgHIAAABIAAgBQAAAHgGACQgDAGgHAAgABuAQQgHgCgDgEQgFgCAAgHIAAgBIABABIAEAHQADAEAHABIABAAQAHABAEgGQADgCACgFQAAAHgFACQgEAGgHAAgAA2AQIgHgDIgCgDQgFgCAAgHIAAgBIAAABQABADAEAEQADAEAGABIACAAQAEAAADgCIACgBIABgCQADgCACgFIAAABIABgBQAAAHgFACQgFAGgGAAgAAAAQIgGgDIgDgDQgFgCAAgHIAAgBIABABIAAgBIAAABQACADADAEQAEAGAFgBIAAAAQAEAAACgCIAFgDIAEgGIAAgBQAAAHgEACQgEAGgHAAgAg3AQIgIgEIgBgCQgFgCABgHIAAgBIAAABQABADADAEQAEAEAFABIADAAQAEAAACgCIABgBIADgCQACgCACgFIAAABIABgBQAAAHgEACQgEAGgHAAgAhuAQIgIgEIgCgCQgEgCAAgHIAAgBIABABQAAADADAEQAEAEAGABIACAAIAGgBIAFgEQACgCACgFQAAAHgEACQgFAGgGAAgAimAQQgEgCgDgCIgCgCQgFgCAAgHIAAgBIABABQAAADAEAEQAEAEAFABIACAAQAFAAADgDIADgCQADgCACgFIAAABIAAgBQAAAHgFACQgDAGgIAAgAjdAQIgIgDIgBgDQgFgCAAgHIAAgBIAAABIAAgBIABABIAEAHQAFAGAGgBIAAAAIAHgBIAEgEIAFgGIABgBQAAAHgGACQgDAGgIAAgAkggkIAAgEIgBgCIABAAIAAgCQAAgDgEgEIAWAAIALAAIADAAQgDACAAADIAAAEIAAAGIgEAAIgHAAIAAAAgAlKgkQgCgKgJgFIAFAAIAVAAQgEABAAAGIAAACIAAACIAAACIAAACgAE5gkIAAgDIAAgBIAAgCIAAAAIAAgDQAAgDgEgDIAhAAQgCAFgDAEIgBADIgCADgAEVgkIgKAAIAAgGIAAgDQABgDgEgDIAVAAQgDACAAAEIABADIAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAAABQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAABABgADVgkIAAgEIgBgCIABAAIAAgDQAAgDgEgDIAgAAQgFACAAAEIABADIAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIAAABIABADgACggkIgDAAIAAgEIAAgCIAAAAIAAgDQAAgDgDgDIARAAIAOAAQgEACAAAEIABADIAAAAIgBACIAAABIABADgABvgkIgDAAIgGAAIAAgEIgBgCIABAAIAAgDQAAgDgDgDIASAAIABAAIAKAAIABAAIAAAAQgDADAAADIABADIAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAAABIABADgAA5gkIgKAAIAAgEIgBgCIABAAIAAgDQAAgDgFgDIASAAIAPAAIgEACIgBAEIAAADIAAAAIAAACIAAABIAAADgAALgkIgRAAIAAgEIgBgCIABAAIAAgDQAAgDgEgDIAYAAIAFAAQgEACgBADIAAABIABADIAAAAIgBACIAAABIABADgAgqgkIgUAAIAAgEIgBgCIABAAIAAgDQAAgDgEgDIAgAAQgDACgBADIAAABIAAADIAAAAIAAACIAAABIAAADgAhhgkIgRAAIgEAAIAAgEIAAgCIAAAAIAAgDQABgDgEgDIAfAAQgEACAAADIAAABIAAADIAAAAIAAACIAAABIAAADgAiZgkIgUAAIAAgEIAAgCIAAAAIAAgDQAAgDgDgDIAbAAIAEAAQgEACAAADIAAABIABADIAAAAIgBACIAAABIABADgAjRgkIgUAAIAAgGIAAgDQAAgDgCgDIAbAAIADAAQgDACAAADIAAABIAAADIAAAAIAAACIAAABIAAADg");
	this.shape_11.setTransform(76.1,-17.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AkmAjIAFACIADABIABAEIgEADQgDADgFABIADgOgAD1AsIgFgCQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIALgCIALACIACACIACAEIgEACQgEAEgHAAQgHAAgEgEgAC+AsIgFgCQAAgBAAAAQAAgBAAAAQAAgBABAAQABgBABAAIACgCIAKgCQAEgBAHADIACACIADAEIgFACQgDAEgIAAQgHAAgDgEgACHAtIgBgBIgEgCQAAgBAAAAQAAgBAAAAQAAgBABAAQABgBAAAAQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIADgBIAIgBQAFgBAGADIACACIADAEIgFACQgEAEgHAAQgGAAgEgDgABOAsIgEgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAMgCQADgBAIADIABACIACAEIgDACQgEAEgHAAQgHAAgFgEgAAjAwQgIAAgEgEIgEgCQgBgBABAAQAAgBAAAAQABgBAAAAQABgBABAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIAJgCIADAAQADgBAHADIACACIACAEIgDACIgBAAQgEAEgFAAIgBAAgAgTAwQgHAAgEgEIgEgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAIgCIADAAQAFgBAGADIACACIACAEIgDACIgBAAQgDADgGABIgCAAgAhKAwQgHAAgEgEIgFgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAJgCIACAAQADgBAIADIACACIACAEIgEACQgEAEgGAAIgBAAgAiCAwQgHAAgEgEIgEgCQAAgBAAAAQAAgBAAAAQAAgBABAAQABgBABAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAJgCIACAAQAEgBAHADIACACIADAEIgFACIAAAAQgDAEgHAAgAi5AwQgHAAgEgEIgFgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIADgCIAJgCIACAAQAEgBAGADIADACIADAEIgFACIgBAAQgCADgHABIgBAAgAjwAwQgHAAgEgEIgFgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAJgCIACAAQADgBAIADIAEAGIgEACQgEAEgGAAIgBAAgAEOAJIgFgHIAAgCIAAAAIABAAQABgGADgDQAIgEADAAQADAAAHAEQAFAEABAFIAAAAIAAACQgDAFgDACQgDAGgHAAQgHAAgEgGgADhAPQgGAAgEgGQgEgEgBgDIAAgCIAAAAQAAgEADgFIALgEIACAAQACAAAIAEQAEAEABAFIAAACIgBACIgEAFQgEAGgGAAgACoAPQgGgBgDgFIgEgHIgBgCIABAAQgBgEAFgFIACgBIABAAIAGgDIADAAQADAAAHAEQAFAEAAAFIAAACIAAACIAAgCIgFAHQgEAGgGAAgABxAPQgGgBgEgFIgDgHIgBgCQAAABAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAAAAIACgIIAAAAIABgBIABAAIAIgEIACAAQAEAAAIAEQAEAEAAAFIAAAAIAAACQgCAFgCACQgFAGgHAAgAA5APQgFgBgEgFQgEgEAAgDIAAgCIAAAAQgBgEAFgFIAJgEIACAAQAEAAAIAEQADAEABAFIAAACIAAACIAAgCQgDAFgCACIgCACIgCACQgDACgEAAgAAEAPQgFAAgDgGQgEgEgBgDIgBgCIAAACIgBgCIABAAQAAgEAFgFIADgCIACAAIACgCIACAAQADAAAIAEQAEAEABAFIAAACIAAACIgFAFIgEAEQgCACgFAAgAgzAPQgGgBgDgFQgEgEgBgDIAAgCIAAAAQAAgEAFgFIABgBIAIgDIACAAQADAAAIAEQAEAEABAFIAAACIgBACIAAgCQgCAFgDACIgCADIgBABQgDACgEAAgAhqAPQgGgBgEgFQgDgEgBgDIgBgCQABABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABgEACgEIAAAAIABgBIABAAIAFgDIADgBIADAAQADAAAHAEQAEAEABAFIAAACQgCAFgDACIgEAFIgGABgAiiAPQgGgBgEgFQgDgEgBgDIAAgCIAAAAQAAgEAEgFIADgBIABAAIAGgDIACAAQADAAAIAEQAEAEAAAFIAAACIAAACIAAgCQgCAFgCACIgDADQgDADgFAAgAjYAPQgFAAgGgGIgDgHIgBgCIAAACIAAgCIAAAAQgBgEAFgFIAFgCIABAAIACgBIABgBIADAAQADAAAIAEQAFAEAAAFIAAACIgBACIgEAFIgFAFIgGABgAkVAPQgGgCgDgDIgEgFIACgLIACgDIAGgDIADAAIACAAQAEAAAHADQAFAFAAAEIAAACIAAADIAAgDQgCAGgDACQgFAFgGAAgAk3geIgFgFIAAgBIAAgCIAAgDIAFgEIALgCIALACIAEAEIABADIAAADQAAACgFADIgLADgAEigeQgDgDgBgCQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAgBIABAAIADgEQAFgCAGAAQAHAAAEACIAFAEIAAAAIAAADIAAABIAAACQAAACgFADIgEACIgHAAgAD5gcIgEgCQgDgDgCgCIgBgCIAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAgBIAFgEIALgCIALACIAEAEIAAAGQAAACgEADIgFACIgGAAgADCgcIgEgCIgFgFIgBgCIAAgBIABgDIAFgEIAKgCIALACIAFAEIAAAAIABADIAAADQgBACgFADIgEACIgHAAgACGgeIgEgFIgBgCIAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAgBIAAAAIAEgEIALgCIALACIAFAEIAAAAIAAADIAAADQAAACgFADIgEACIgHAAgABTgcIgFgCIgEgFIAAgCIAAgBIAAgDIAEgEIAMgCIALACIADAEIAAAAIABADIAAADIAAAAQgBACgDADIgGACIgFAAgAAdgcIgGgCIgEgFIgBgCIAAgBIABgDIAEgEIAMgCIAKACIAEAEIAAAAIABADIAAADIAAAAQAAACgFADIgEACIgIAAgAgegeIgEgFIAAgCIAAgBIAAgDIAAAAIAEgEIAIgCIADAAIALACIAEAEIAAAAIABADIAAADIAAAAQgBACgEADIgFACIgHAAgAhLgcIgFAAIgFgCIgFgFIgBgCIAAgBIABgDIAFgEIAJgCIACAAIAKACIABAAIAEAEIAAAAIAAADIAAADIAAAAQAAACgEADIgFACIgGAAgAiIgcIgFgCIgEgFIgBgCIAAgBIABgDIAEgEIAJgCIACAAIALACIAFAEIAAAAIAAADIAAADIAAAAQgBACgEADIgEACIgHAAgAjEgeIgFgFIAAgCIAAgBIAAgDIABAAIAEgEIAJgCIACAAIAKACIAGAEIAAAAIAAADIAAADIAAAAQgBACgFADIgEACIgHAAgAj3gcIgEgCIgFgFIAAgGIAFgEIAIgCIADAAIAKACIABAAIAEAEIAAAGIAAAAQAAACgEADIgFACIgGAAg");
	this.shape_12.setTransform(75.8,-17.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AE9AGIgFgFQgEgBgHAAQgGAAgFABIgDAFIgBAAIAAAAIgBgDQAAgDAEgBIABgCQAFgCAGAAQAHAAAEACIABACQAEABAAADIAAADIAAAAgADwAGIgBgDQABgDAFgBIAAgCQAGgCAFAAQAEAAAHACIAAACQAEABAAADIAAADIgEgFIgLgBIgLABIgFAFgADYAGIgFgFIgLgBIgKABIgFAFIAAAAIgBgDQABgDAEgBIABgCQAGgCAEAAQAFAAAGACIABACQAFABAAADIAAADIgBAAgAChAGIgFgFIgLgBIgLABIgEAFIAAAAIAAAAIgBgDQAAgDADAAIABgBIABgCQAHgCAEAAQAFAAAGACIABACQAEABAAADIAAADIAAAAgABoAGIgDgFIgLgBIgMABIgEAFIAAAAIAAgDIABgDIADgBIAAgCIAEAAQAEgCAEAAQAEAAAHACIABACQADABAAADIAAADIgBAAgAAxAGIgEgFIgKgBIgMABIgEAFIAAAAIgBgDIAAgBQAAgCAEgBIABgCIAHgCIAFAAQAEAAAGACIABACQAEABAAADIAAADIgBAAgAgEAGIgEgFIgLgBIgDAAIgIABIgEAFIAAgDIAAgBQAAgCADgBIABgCIAHgCIAEAAQAFAAAGACIACACQADABAAADIAAADIgBAAgAg7AGIgEgFIgBAAIgKgBIgCAAIgJABIgFAFIAAAAIgBgDIAAgBQABgCAEgBIABgCIAHgCIAEAAQAFAAAGACIABACQADABAAADIAAADIAAAAgAhyAGIgFgFIgLgBIgCAAIgJABIgEAFIAAAAIgBgDIAAgBQABgCAEgBIAAgCIAHgCIAEAAQAEAAAHACIABACQAEABAAADIAAADIAAAAgAipAGIgGgFIgKgBIgCAAIgJABIgEAFIgBAAIAAAAIAAgDIAAgBQABgCADgBIABgCIAGgCIAFAAQAFAAAFACIACACQAEABAAADIAAADIAAAAgAkAACQAAgCADgBIACgCIAGgCIAFAAQAEAAAHACQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQADABAAADIAAADIgEgFIgBAAIgKgBIgDAAIgIABIgFAFgAkdAGIgEgEIgLgCIgLACIgFAEIAAgCQAAgEAFgBIAAgBQAGgDAFAAQAFAAAGADIABABQAEACAAADIAAACg");
	this.shape_13.setTransform(75.8,-22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A3A3A").s().p("AgvA/IjNAAIgqAAIAAgBIADgJIJSAAIgBAJIgwAAIAAgCIgZgFIiKAAIAAAHIgOAAIAAAAIAAABgAkdAWIADgSIADAFQAEADAFACIACAAQAIAAAEgFQAFgDgBgGIAAgEQAAgFgEgEQgHgEgFAAIgCAAIgCABIgHADIgCADIABgQIgWAAIgQAAIABgCIAAgCIAAgDIgBgDIgBgDIALAAIAEAFIAMACIALgCQAFgDgBgCIASAAIAAAAIAHAAIAEAAIAEAEIAFACIAGABIAHgBIAFgCQAEgCgBgCIAAAAIAUAAIAFAAIAEAEIAKADIAHgBIAFgCQAFgCAAgCIAAAAIAUAAIAFAAIADAEIAGACIAGABIAGgBIAFgCQAEgCAAgCIAAAAIAEAAIARAAIADAAIAGAEIAEACIAGABIABAAIAFgBIAFgCQAEgCABgCIAAAAIAUAAIAEAAIAFAEIAKADIAHgBIAEgCQADgCABgCIAAAAIATAAIAEAAIAFAEIAFACIAFABIAIgBIADgCQAFgCABgCIAAAAIAKAAIANAAIAFAEIAEACIAHABIAGgBIAFgCQAEgCABgCIAAAAIAGAAIADAAIAQAAIADAEIALADIAHgBIAFgCQAEgCAAgCIADAAIAWAAIAEAEIAFACIAGABIAGgBIAFgCQAFgCAAgCIAYAAQABACADACIAFACIAHABIAFgBIAGgCQADgCAAgCIAKAAIAGAAQAAACADACIAMADIAGgBIAFgCQAEgCAAgCIAVAAIgDAEIgFAJIgPAWIAAAAQgGAKgHAQIgVAAIheAAIgxAAIg9AAIi2AAIihAAIAAAAgAERAAQgBAFAFADQAEAFAHAAQAHAAAEgFQAGgDgBgFIAAgEIAAAAQAAgGgFgDQgHgEgEAAQgDAAgIAEQgDADAAAGIgBABIAAABgADdgNQgDAFAAAFIAAABIAAACQAAAFADADQAEAEAGABIACAAQAHAAAEgFQAEgDABgFIAAgEQgBgGgEgDQgIgEgDAAIgCAAIgKAEgAChAAQABAFAFADQADAEAGABIACAAQAHAAADgFQAGgDAAgFIAAgEQAAgGgGgDQgHgEgDAAIgCAAIgHACIgBABIgBABQgFAFAAAFIgBABgABqAAQAAAFAFADQADAEAHABIABAAQAHAAAEgFQAFgDAAgFIAAgEIAAAAQgBgGgEgDQgIgEgDAAIgCAAIgIAEIgBAAIgBABIAAAAIgDAIIAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAgAAzAAQAAAFAFADIACADIAHACIACAAQAGAAAFgFQAFgDAAgFIAAgEQgBgGgEgDQgHgEgEAAIgCAAIgJAEQgFAFAAAFIAAABgAgDAAQAAAFADADIADADIAHACIACAAQAHAAAEgFQAEgDAAgFIAAgEQAAgGgEgDQgJgEgCAAIgCAAIgFACIgBAAIgEACQgDAFABAFIgBABgAg5AAQgBAFAFADIABACIAIADIADAAQAHAAAEgFQAEgDAAgFIAAgEQgBgGgDgDQgIgEgDAAIgDAAIgHADIgCABQgFAFABAFIAAABgAhxAAQAAAFAEADIACACIAIADIACAAQAGAAAFgFQAEgDAAgFIAAgEQgBgGgDgDQgIgEgDAAIgDAAIgCAAIgGAEIgBAAIAAABIAAAAQgDAEAAAFQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAgAipAAQAAAFAFADIACACQADACAEABIACAAQAIAAADgFQAFgDAAgFIAAgEQAAgGgFgDQgHgEgEAAIgCAAIgGACIgBABIgCABQgEAFAAAFIgBABgAjgAAQAAAFAFADIABADIAIACIACAAQAIAAADgFQAGgDAAgFIAAgEQgBgGgFgDQgHgEgEAAIgCAAIgBAAIgDACIgBAAIgEACQgFAFAAAFIAAABgADbg4QgGgCgFAAQgFAAgGACIgBACIgOAAIgRAAIgBgCQgGgCgGAAQgDAAgIACIgBACIgBAAIgKAAIgBAAIgSAAIgCgCQgHgCgEAAQgDAAgFACIgDAAIAAACIgPAAIgSAAIgBgCQgGgCgEAAIgEAAIgHACIgBACIgFAAIgZAAIgBgCQgGgCgEAAIgFAAIgGACIgBACIggAAIgBgCQgGgCgEAAIgFAAIgGACIgCACIgfAAIgBgCQgHgCgEAAIgFAAIgHACIAAACIgEAAIgbAAIgCgCQgFgCgGAAIgEAAIgHACIgBACIgDAAIgbAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgIgCgEAAIgEAAIgHACIgBACIgDAAIgLAAIgWAAIAAgBQgGgDgFAAQgFAAgHADIAAABIgVAAIgFAAIgJgEQgGgCgJgBIAgAAIA/AAIAAgBICiAAIBGAAIDTAAIBqAAIBBAAIAAADIgCAFIghAAIAAgCQgEgCgHAAQgHAAgFACIgBACIgVAAIAAgCQgIgCgDAAQgGAAgGACIAAACIggAAIAAAAIgBgCg");
	this.shape_14.setTransform(75,-17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1C1C1C").s().p("AnzB2QgbgIgEgcQASgKAcgGQgaAXAUAdgAiyAmQAEgFAEgIIIpAAIAAAAQAAAHACAEIABACgADRADIABAAIgBABgAGzgEIpSAAIABgCIAIgDIABgBQAFgCAAgEIAAgCIgBgBIgCgDIgCgBIgFgCIABgJIAaAAIAAAAICfAAIC4AAIA9AAIAxAAIBeAAIAVAAQAHgRAHgLIAAgBIAOgVIAFgJIADgEIACgDIABgDQADgEACgFIACgFIAAAFQABAAgEAJIgCADIgEAHIgCACIgEAHIgPAVIAAABIBKAAQAAATgHAWIhTAAIgBAFIgCAHIAAAFIgDAHgAF7gQQAAAFAFABIACABIAKACIAJgCIACgBQAEgBAAgFIAAgDIgCgDIgCgCIgLgDIgMADQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABQgBAAgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBgAFEgQQAAAFAFABIACABIAJACIAKgCIABgBQAFgBAAgFIAAgDIgBAAIgCgDIgCgCQgHgDgEAAIgLADIgCACQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAACgBgCgAENgQQAAAFAFABIABABIAKACIAKgCIABgBQAFgBAAgFIAAgDIgBAAIgCgDIgCgCQgHgDgEAAIgIACIgDABQgBAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBgADVgQQAAAFAFABIACABIAJACIAKgCIABgBQAFgBAAgFIAAgDIgBAAIgCgDIgCgCQgHgDgEAAIgLADQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAACgBgCgACegQIAAABQAAADAFACIABABIAKACIABAAIAJgCIAAgBQAGgBAAgFIAAgDIgBAAIgCgDIgDgCQgGgDgEAAIgCABIgJACQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQgBAAgBAAQgBABAAAAQgBABAAAAQAAABAAAAQAAACAAgCgABngQIAAABQABADAEACIABABIAKACIAAAAIAKgCIABgBQAFgBAAgFIAAgDIgBAAIgCgDIgCgCQgHgDgEAAIgDABIgIACQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABQgBAAgBAAQAAABAAAAQgBABAAAAQAAABABAAQAAACgBgCgAAvgQQABAEAFACIABABIAKACIABAAIAIgCIACgBQAEgBAAgFIAAgDIAAAAIgCgDIgCgCQgIgDgDAAIgCABIgJACQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABQgBAAgBAAQgBABAAAAQAAABAAAAQAAABAAAAQAAACgBgCgAgGgQIAAABQABADAEACIABABIAIACIAKgCIABgBQAFgBAAgFIAAgDIgBAAIgCgDIgCgCQgHgDgEAAIgCABIgHACQgBAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQAAABABAAQAAACgBgCgAg9gQIAAABQAAADAEACIACABIAJACIACAAIAIgCIABgBQAGgBAAgFIAAgDIgBAAIgCgDIgDgCQgGgDgFAAIgCABIgJACIgCACQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAACAAgCgAhngaIgJACQAAAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABQgBAAgBAAQgBABAAAAQAAABAAAAQAAABAAAAIAAADQAAAEAEACIACABIAJACIABAAIAKgCIABgBQAEgBAAgFIAAgDIgEgFQgIgDgEAAIgCABg");
	this.shape_15.setTransform(61.8,-11.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFB527").s().p("Ah0BxIAPgLQAEAAAFACIAAABIgLAIQgDgDgKADgAkXBSIAAgJIAAgHIADgCIAAACIAAAFIAAACIAAACIAAACIAAACIABAGIgEACIAAgFgAB0A4IgegGIgNgDIAWAAQARAFAXAEgABJhPIANgGIAOAAIAsAAIBvAAIASAAIAAgBIAAgEIAAgDQgDgKgIgFIgBAAIAAAAIgEgCIgFgCIAHAAIAJAEQAIAFADAKIABADIAAAEIAAACIAAACIjHAAIgEADQgyAdAAAoIgKAHQgBguA5geg");
	this.shape_16.setTransform(15,-11.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#171717").s().p("AkvByIgDgCIAugkQARAIAcgIQAOgEAlgPIAKgEQANgFAJgDIiFBoQgWgPgQgUgAj2CFIAOgOIgLgLIAKgJIgNgOIgKAKIgKgLIgPAPIALAKIgLAKIAOAOIAKgLgAj5BFQCQhkBwgeQAIAaAvAPIANAEQiBAChEAwIgHACIgKADIgLAEIgLAEQgkAPgPAEQgOAEgLAAIgMgBgACngLIgTAAIgYAAQgXgDgRgGQhAgTgEghIAAgEIAAgCQAAgoAygeIAXAAIAzAAIBwAAIAKAAIAGAAIAQAAIAXAAIgBAPIgCANIAAAEIgDASIgBAIIgDAOIgBAFIgBADIgCAJIAAABIgDAHIgBADIgBADQgDAEgBAEQgDAIgFAFIgBABIgJAJQgFADgHAAgAA/iJQgbAVgCAaIgBADQAFAgBOANIByAAIAjAAIAEgDIAEgDIACgDIAFgHIAEgKIACgEIACgFIAAgCIADgLIACgIQAEgXADgaIgtAAIhwAAIg2AAIgLAAIgPAKgABgiLICIAAQAWAggQAbIiQABQgXgeAZgeg");
	this.shape_17.setTransform(16.2,-4.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9A630E").s().p("Aj5CAQgcgLgCguIAAAAIAEgDIAAABQADAtAhAHIABAAQAQADAVgGQAPgEAlgPIAKgEIALgEIAKgDIAHgCIAGAAIAEAAIgPAKIgFABQgJADgMAFIgLAEQglAPgOAEQgOAEgLAAQgLAAgJgEgAATgJIgBgHIgBgEIAKgGIAAACIAAAEQAEAfBAATIgWAAQgvgPgHgYgAERhgIgKAAIhwAAIgzAAIgXAAIAEgDIDHAAIAAADgAD8iBIgHgCIgIAAIAHAAQAIAAAHACg");
	this.shape_18.setTransform(15,-10);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#292929").s().p("Aj3CkIgCgCICFhoIAGgBQAJgDADADIgTAOIgIAGIgBAAIAAABIgHAEQgRANhUBMgAkvBoQgHgMgEgRIgBgOIApgdQACAuAdALIguAkQgIgJgGgMgAjqBSQgggHgEgtIAAgBIALgHQA7gkBHgoQBpg6A8gQQAZgHASAAQg5AfAAAtIABAEIABAHQhwAeiRBkIgBAAgAk7AzIAAgEIAAgHIAAAAIAUgPIAWgPIgBAHIAAAJIgpAaIAAgBgAhgAvIgEAAIgGAAQBFgwCAgCIAeADIgqACQg7ADgfAKQgcAGgSAJQgPAIgPALQgFgCgEAAgAkPATIAAgCIAAgCIAAgFIAAgCIAFgDQBkhFBegwQBug4BEgCIACAAIANAGIAIAGIADABQAKAHAHAIIABABIgsAAIgPAAIgJAAIgDAAQgSAAgZAIQg8ARhpA5QhFAng5AjIgPAJIgBgFgAD3gdIhyAAQhOgNgFggIABgDQABgaAbgVIAQgKIALAAIA2AAIBvAAIAtAAQgCAagEAXIgDAIIgCALIAAACIgCAFIgCAEIgFAKIgEAHIgDADIgDADIgFADgABqg9ICPAAIAFgGQARgbgWggIiIAAIgHAAQgcAgAcAhgAEEiNIgBgBQgJgIgIgGIgCgCIgKgGQgLgGgLAAIAiAAIAIAAIAIACIAEACIAFACIAAABIAAAAQAJAFACAKIAAACIAAAEIAAABg");
	this.shape_19.setTransform(14.5,-6.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ADADAD").s().p("AkGBQIAAgCIAAgDIABAFIAPgJQA5glBFgkQBpg6A8gRQAZgIASAAIADAAIAJAAIgMAGQgSAAgZAHQg8ARhpA3QhHAog7AmIgLAIIgBgGgABzgFQgcghAcggIAHAAQgZAeAWAeICQgBIgFAGg");
	this.shape_20.setTransform(13.6,-11.7);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-23.3,132.1,34.5);


(lib.GUN_TANK_03 = function() {
	this.initialize();

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAOAPIglAAIgBgIIgBgHIAoAAIAAgJIgnAAIAAgHIApAAQAAgFADgIQAHAOgBARQgCAUgGAIg");
	this.shape.setTransform(87.8,-9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAhQgJgiAHggIAHAAIgEAOIAAAHIgBAIIABAHIABAIIAAAFIAEALIgEAEQAAABgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAAgBg");
	this.shape_1.setTransform(85.1,-9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626262").s().p("AgcAlQgEAAAAgGIAAhDIAJAAIAABDQAAAFACABgAgCAYIgCAAIgEgLIAAgFIAlAAIAEAPIggABg");
	this.shape_2.setTransform(86.3,-8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#232323").s().p("AgJAlQgCgBAAgFIAAhDIAJAAQgHAgAIAiQABABAAAAQAAAAAAgBQAAAAAAAAQABgBAAgBIAFgEIABAAIAFAAIgEADIgNAHIgDADg");
	this.shape_3.setTransform(85.2,-8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#171717").s().p("AgWAOIABgJIAmAAIABAJgAgVAAIADgNIApAAQgDAIgBAFg");
	this.shape_4.setTransform(87.5,-10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#232323").s().p("AgKA3QAGgKABgHIAAhbIAAgGIADAAQAAARAGAHIABAAQgFALAAASQAAAOAFALIAIAAIAAAQQAAAQgdAIQACgBACgDg");
	this.shape_5.setTransform(78.1,-8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#626262").s().p("AhlA4IgCgCQgCgGgBgIIAAgGIAAhbIDVAAIAAAFIjQAAIAABuIAAgCg");
	this.shape_6.setTransform(66.8,-8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("ABCA7IAAgIIgHAAIAAAIIgOAAIAAgIIgJAAIAAAIIgNAAIAAgIIgIAAIAAAIIgOAAIAAgIIgHAAIAAAIIgNAAIAAgIIgIAAIAAAIIgOAAIAAgIIgJAAIAAAIIgMAAIAAgIIgJAAIAAAIIgYAAIgGgFIgBgCIgCAAIAAhtIDRAAIAABbQgBAHgGAKQgCADgCABIgFAEgABPAcIAJAAIAAg4IgJAAgAA1AcIAKAAIAAg4IgKAAgAAhAcIAIAAIAAg4IgIAAgAAKAcIAJAAIAAg4IgJAAgAgJAcIAJAAIAAg4IgJAAgAgfAcIAIAAIAAg4IgIAAgAg1AcIAJAAIAAg4IgJAAgAhKAcIAJAAIAAg4IgJAAgAhgAcIAIAAIAAg4IgIAAgAAVgzQgCACgBAEQABAEACADQADACADAAQAEAAACgCQACgDABgEQgBgEgCgCQgCgDgEAAQgDAAgDADgABQgzQgDADAAADQAAAEADACQACACAEAAQADAAACgCQACgCAAgEQAAgDgCgDQgCgCgDgBQgEABgCACgAgEgzQgDACAAADQAAADADADQACADACAAQACAAAEgDQACgDAAgDQAAgDgCgCQgEgDgCAAQgCAAgCADgAgig0QgDACAAAEQAAADADADQACADADAAQADAAADgDQADgDAAgDQAAgEgDgCQgDgCgDgBQgDABgCACgAhAg0QgDACAAAEQAAADADADQACADAEAAQADAAADgDQACgDAAgDQAAgEgCgCQgDgCgDgBQgEABgCACgAhfg0QgCACAAAEQAAADACADQACADAEAAQADAAAEgDQABgDAAgDQAAgEgBgCQgEgCgDgBQgEABgCACgAAzgzQgDACAAADQAAADADADQACACACAAQAEAAADgCQACgDAAgDQAAgDgCgCQgDgCgEgBQgCABgCACg");
	this.shape_7.setTransform(67.1,-8.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABRAqIAAg5IAJAAIAAA5gAA4AqIAAg5IAJAAIAAA5gAAjAqIAAg5IAIAAIAAA5gAAMAqIAAg5IAKAAIAAA5gAgHAqIAAg5IAHAAIAAA5gAgcAqIAAg5IAIAAIAAA5gAgzAqIAAg5IAKAAIAAA5gAhIAqIAAg5IAJAAIAAA5gAhdAqIAAg5IAIAAIAAA5gAAXgZQgCgCAAgEQAAgFACgBQADgDADAAQAEAAACADQADABAAAFQAAAEgDACQgCADgEAAQgDAAgDgDgABSgaQgDgCAAgDQAAgEADgCQADgDADAAQADAAADADQACACAAAEQAAADgCACQgDADgDAAQgDAAgDgDgAgCgbQgDgCAAgDQAAgDADgCQACgDABAAQAEAAADADQACACAAADQAAADgCACQgDADgEAAQgBAAgCgDgAgggbQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDgAg+gbQgCgCAAgEQAAgDACgCQADgDADAAQADAAADADQACACAAADQAAAEgCACQgDADgDAAQgDAAgDgDgAhcgbQgDgCAAgEQAAgDADgCQACgDAEAAQADAAADADQABACAAADQAAAEgBACQgDADgDAAQgEAAgCgDgAA1gbQgDgCAAgDQAAgDADgCQACgDADAAQADAAADADQACACAAADQAAADgCACQgDACgDAAQgDAAgCgCg");
	this.shape_8.setTransform(66.8,-9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C1C1C").s().p("AgPAHIgjAAQgCgGgBgEIgBgDIBoAAIAAAFIADAHQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAg");
	this.shape_9.setTransform(87.2,-13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#525252").s().p("Ag0AEIABgHIBoAAIAAADIAAAEg");
	this.shape_10.setTransform(86.8,-17.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#171717").s().p("AjtAHQACgHAEgGIGtAAIAEAAIAjAAIAAANg");
	this.shape_11.setTransform(61.8,-11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C2C2C").s().p("ACoACImGAAIgLAAIgCgDIHXAAIAAADg");
	this.shape_12.setTransform(62,-6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AmXCxQgBgCAAgEIAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQACgCAEAAQADAAABACQADABABADIAAABQgBADgDACQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgEAAgCgBgAnxCJQgDAAgBgDIgCgBIgBgEQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABgBQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAAAAQAEAAACABQACACAAADIAAADIgCACQgCADgEAAgAk1ANQgTgGgFgKQAIgPAagMQgQAPAOAZIACAFIgKgCgAjmhPIgDgDIgCgEQgBgCAAgLQABgKADAAICKAAQAEABgCAPIAAABIAAAFIgBAFQAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAgAH0hmQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgCgJIgBgFIgBgHIAAgIIAAgGIAAgCIAAgHIAAgFIAAgEIACgKQABgLACgBQADAAAAAMIACAKIABAJIAAAHIAAABQgBAPgCAMQAAAIgCACgAGFhmIgEgMIgCgMIAAgIIAAgFIAAgIIAAgJIABgEIAFgSIACAAIACAAIgEASIgBAEIgBAJIAAAIIAAAFIABAIIACAJIAAADQABAGACAGg");
	this.shape_13.setTransform(42.7,-2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AmHDFQgqgHgdgRIgEgCQgngVgCgcIAAgNIAAgMIACgNQAWhHAYgqQBUhzCJgFIJ7AAIAAAJIAAAFIAAAIIACAMIAEAMImtAAIgMAAIgBA7IjsAAQgIAAgHACQgcAFgOAZQgDAFgCAGQgFAMAGAKQADAGAIAFQgRAegHAjIAAAGQgEAUABAVIABASIAAADQAAAgggAAIgIAAgAneA5QgMAogGAiQAAAJArAVQAsAWAiACQAHAAACgNQACgNgEgUQgJgnAkhhQgYgcgwgbQgnAfgaBOgAjehkQgBALACACIACADIgCABQAAAKAEACICHABQAEAAAAgNIAAgCIABgDIgBgGIAAAAQACgPgFgCIiJAAQgDAAgBALgAghhCIAAgDIAAgEIABgMIAAgDIHaAAIAAADIAAAMIABAEIAAADgAGTh2IgBgJIBqACIABAHgAGgiqIAIgJIAYAAIAOgJIAfAAIADgIIAHARIABACIgEAHg");
	this.shape_14.setTransform(41.3,-1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#232323").s().p("AnNCeQgrgUAAgJQAFgjAMgnQAahPAngfQAxAbAYAdQgkBgAJAoQAEAUgCANQgCANgHgBQgjgBgrgXgAmRCjQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAABIAAABQAAAEACACQACABADAAQABAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQADgCAAgDIAAgBQAAgDgDgBQgCgCgDAAQgDAAgCACgAnwB4QAAABgBABQAAAAgBABQAAAAAAABQAAAAAAABIABAEIABABQACADADAAIAAAAQAEAAABgDIADgCIAAgDQAAgDgDgCQgBgBgEAAIAAAAQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAgAlOAeQgHgGgDgFQgHgLAGgMQACgGADgEQAOgaAcgFQAGgCAJAAIDsAAIAAg7IAMAAQgEAIgBAHIAAAEIgBALIAAAFIAAADIABAEIACAHIACAEIABAEIAMAAIgYATQizgIgKAgQgYAqgoAAQgQAAgSgGgAlHgHQgEAHgDAIIAAACIgCAEIACACQAjALAdgbQAIgFgCgLQAAgHgFgDQgCgDgDgCQgDgDgGAAIgKAAQgbAMgHAPgAGJiCIgBgIIAAgFIAAgIIBsAAIAAAHIAAACIAAAGIAAAIgAGJigIABgEIAFgSIAMAAIgDAJIBUAAIAEgHIgBgCIAKAAQgCABgCALIgBAKg");
	this.shape_15.setTransform(42.2,-1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#626262").s().p("AnvBZQAHgrAmhAQBNhqCQgFIGDAAIAZAAIDiAAIgFASIgBADIjxAAIgEAAImEAAQgPABgOABQg0AGgqAUQg5AcgoA2QgmBAgHAsIgEAXIgCAOQACgrAEgPgAgYgEIgCgHIgBgFIHcAAIAAAFIAAAHgAjTgVQgEgCAAgKIACgBIACAEICHABQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBIABgFIAAgGIABAGIgBADIAAACQAAANgEAAgAGuiBIADgIIAYAAIgDAIgAHUiKIADgIIAfAAIgDAIg");
	this.shape_16.setTransform(40.7,-6.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9F9F9F").s().p("AnhB1QAIgsAmhBQAng1A5gcQArgUA0gGQAOgCAOAAIGEAAIAEAAIDyAAIgBAJIp6AAQiKAFhTBxQgZArgWBHIAEgXgAgHAEIgCgDIHYAAIAAADgAG4h6IAIgIIgDAIIgJAJgAHYiCIAOgJIgEAIIgNAJg");
	this.shape_17.setTransform(39.3,-7.6);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-21.6,102.8,39.5);


(lib.GUN_TANK_02 = function() {
	this.initialize();

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(35,7,3,0.278)").s().p("AhNAPIAAgBIAMAEIgMgDgAgMgMIBHgEIATAAQgLABg9ADIgSAAg");
	this.shape.setTransform(62.1,-10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(180,134,98,0.086)").s().p("AgmABIgBAAIAIgCIABAAIAFAAIAJgCIADAAIAJABIASABIAZACIABABIgBABQgnABgmgDg");
	this.shape_1.setTransform(59.9,-8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(35,7,3,0.086)").s().p("AgLALQhFgQgKAAIAAgCIADgBIADAAQAYABAmAIQAkALAKAAQARAAALgDQAGgBAPgGIABAAQgaAOgcAAQgQAAgPgFgABEgCQgFgCgJAAQgIAAgKACQgKACgIAAIgzgLIAAAAIACgBQAKAAAVAEQASAEAFAAQAIAAAIgDIAPgBQATAAAAAFQAAADgMAEQgJAEgJAAQAWgIADgCgABMgNIgFgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQAIAAAEACIAGACIAAABIgPgDg");
	this.shape_2.setTransform(67.3,-9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(35,7,3,0.086)").s().p("Ai5BsIgBgMQAAgEATgyQAOgiADgQQAEgWAIggIAPg0IABAAQgEAYgIAjIgQA5QgFASgRAoQgLAkACAYIAAABQgBgDgDgKgAjzBYIgBgMQAAgbALgeIABAGIgJA/gAjEBCQAAgXAIgSQACgHALgSIABAAIABgDIAIgNQAHgOAEgcQAEgdAGgKQgCAIgFAhQgDAagKAQQgPAYgGAPQgJAYABATIgBABQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBgAAKhTIgKgBIgFgCIABgBIANADIADABgAD0hVIhBABIgCgCIgJAAIALgCIBBAAIABACIAAACgABOhZIgXgEQgHAAgIACIgMACQgRAAAAgGQgBgEAKgEQAJgEAJAAQgUAIgDADQAEADAJAAQAGAAAKgCQAIgCAGAAIAxAKIAAABIgCAAQgJAAgSgDgACVhfQgUAAgjgKQgigLgJAAQgPAAgJACIgTAIIgCgBQAmgUAoAMQA/ASAIAAIAAACgACbhlQAEgCgHgCIAAgCIADABIA7AAQACABAaAAIACACIgCACIg0ABIgjgBg");
	this.shape_3.setTransform(14.6,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(35,7,3,0.278)").s().p("AkCBpIADgQIABAAIAAgBIABgFIABAAIgFAWgAioA0QADgZAUgzQATgzACgcIABAAQACACAAADQAAAPgJAgIgCAEIgJAaIgCALIgBACQgVA5AAADgAj3AAIATgbQANgRADgLIAAACQAAAHgOAWQgOAVgHADgAjBhJQAHgRAAgOIACAAIAAADQAAAMgFASQgHAUgJAHIgBABIANgegAAfgtIgFgBQAJgBA2gDIATABIhBAEgACLg1IAAAAIA8gCIhCAEIAGgCgAD8hWQgJgCgXgBIAAgBIgLAAIAAgBQAfACALADIAIABIAAABIgHgCg");
	this.shape_4.setTransform(17.3,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(180,134,98,0.086)").s().p("Ai4BxQAAgRAHgTQAJgXAEgQIACAAIABAAIAAABIgDAKQABAFgFAPIgHARIgEAmIgDABQgBgGgBgGgAjhBsIABgpIAFgUIgBgNIgBgGIAAgDIgGASIgGARIgDAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAYhMAAAxIAAAqIAAABIgBAAIgBABIgCAPQgCAbgCAAQgFAAACgJgAjDBJQAAgeAJgYQALgYgBgIQAAgDgCgFIABgBIAEAGIAAAEQAAAMgGATIgKAgIAAAtIgCAFIgBABQgDAAAAgdgAkDBGQAAgJAEgXQAGgXACgFIACADIgEAXQgGAVAAAYIgBADIgBABQgCgIAAgHgAiKgUIACgJIgBgHQAAgcAEgHIAEgbQACgOADgEQAEgJAGABQADACAAAGIgHAeIgIAfIgDABIgCASQgDAWgCAFIgBAAIAAgCIgGAcIgBABIAGgmgAhyAPQAAgDAEgKIAGgLIAAgNIAAgBIAAgCIACgLIAKgaIACgEQAGgOAFgHIABACIgTA0IgFAaQgCAPgKAIIAAABIAAgCgAilAGQAQg6AEgWIACAAIABACQgBANgHAeQgDAPgHASIgBAEIgBAAIgCAAIAAAAIgBgCgACThAIgSgBIgngDIgzgEQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAgDQBNAABMAFIACAAIgNAEIAAAAIgGACIgDAAQgJACgIAAIgGAAgAB/hjIgBgCQADgEANgBIAigCIBIADIAMAAIAAABIABADQAAACgJAAIgygBIgvAAIgaACg");
	this.shape_5.setTransform(13.3,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A9784F").s().p("ABkATQACgLAAgIIjUAAQAAgGACgFIDQAAIgBgGIAHAAIACAGIACALQABAIgEALg");
	this.shape_6.setTransform(66.9,-10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#905C37").s().p("ABiAZQADgGABgHIjQAAQgCgJAAgJIDUAAQAAAIgCAKIAHAAIgFANgAhqgRIACgHIDNAAIABAHg");
	this.shape_7.setTransform(66.7,-9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A2314").s().p("AhmAeQgEgHgCgGQgFgKABgJIADgKIACgHIAFgKIDSAAIAFAKIgHAAIjOAAIgCAHQgBAFAAAFQgBAJADAKIDPAAQAAAGgDAHg");
	this.shape_8.setTransform(66.2,-9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBD975").s().p("AgDAEQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBABAAQAAgBABAAQABAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAABAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBgBAAAAg");
	this.shape_9.setTransform(8.9,-11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#419F2D").s().p("AgFAGQgEgEAAgDQAAgDACgDQACgCAEAAQADAAAEAEQAEAEAAADQAAADgCADQgDACgEAAQgCAAgEgEgAgDgDQgBAAAAABQgBABAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABQAAAAABABQAAAAABAAQAAABABAAQAAAAAAAAQAAAAAAAAQABAAABgBQAAAAABAAQAAgBABAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABg");
	this.shape_10.setTransform(8.9,-11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#245E1A").s().p("AgHAHQgDgDAAgEQAAgEADgEIADgCQgCADAAADQAAAEAEADQACAEAFAAQADAAADgCQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgEAEgFAAQgDAAgEgEg");
	this.shape_11.setTransform(8.6,-11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FBD975").s().p("AgDAEQgCgBAAgDQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQACAAACACQAAABABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAADgCABQgCACgCAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_12.setTransform(38.6,-13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#419F2D").s().p("AgFAGQgEgDAAgEQAAgDACgCQADgDADAAQADAAAEAEQAEAEAAADQAAADgBADQgDACgEAAQgDAAgEgEgAgDgDQAAABgBAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAADACABQABAAAAABQAAAAABABQAAAAABAAQAAAAAAAAQACAAACgCQACgBAAgDQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgCgCgCAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAABgBAAg");
	this.shape_13.setTransform(38.6,-13.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#245E1A").s().p("AgHAHQgEgDAAgEQAAgFAEgEIADgBQgCADAAADQAAAEAEADQACAEAFAAQAEAAADgDQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQgEAEgFAAQgDAAgEgEg");
	this.shape_14.setTransform(38.3,-12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FBD975").s().p("AgDADQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAABABQABAAAAAAQABABAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQgCAEgCAAQgBAAgCgEg");
	this.shape_15.setTransform(37.3,-21.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#245E1A").s().p("AgGAHQgFgDAAgEQAAgEAFgEIACgCQgCADAAADQAAAEAEAEQACADAEAAQAEAAAEgCQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgEAEgGAAQgCAAgEgEg");
	this.shape_16.setTransform(37,-20.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#419F2D").s().p("AgFAHQgEgEAAgEQAAgDACgDQACgCAEAAQADAAAEAEQAEAEAAADQAAADgCADQgDACgEAAQgCAAgEgDgAgDgDQgBAAAAABQAAABgBAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACADABAAQACAAACgDQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABg");
	this.shape_17.setTransform(37.3,-21.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#332B2B").s().p("AhMBNIACgXIABgOQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIBqgBIAAADIAAAOIgCAXgAgHAsIgDACQgEAEAAAEQAAAGAEADQAEAEAEAAQAEAAAEgEQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQACgDAAgEQAAgEgEgEQgEgEgEAAQgDAAgCACgAgzAsIgEACQgEAEAAAEQAAAGAEADQAEAEAFAAQAGAAAEgEIACgCQACgDAAgEQAAgEgEgEQgEgEgGAAQgDAAgCACgAAbgUIAAgxIAPgHIAiAjQgWAPgYAKIgDgEg");
	this.shape_18.setTransform(85.2,-23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C8C0BD").s().p("AENAJQADhTgtgtIAEAAQAuAtgDBTQgFBTgaAcIgEAAQAagcAEhTgACIBGIALgMIAEgHQAGgQACgeIAAgMQAAgNgEgLQgDgKgFgIIgFgHQAAgBgGgFIgFgGQACgCADAAIAFABIAEAEIAIAQIAIASQACAMABAMIAAAGIAAAGQgCAbgFARIgBACIgEAJIgDAFIgEAFIgGABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBgAAJA8IAFAAIAGAAIADgCIAEgHQAGgQABgeIAAgMIAAgCQAAgMgDgKQgEgKgEgIIgFgHIgEgEIgHAAIgEAAQAJgHAHAGIAAABIABAAQABACACACIAEAHQAGAIADAKQACAIABAJIABAFQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAIgBAMIgCAXQgDAOgDAJIgEAHIgCACQgDADgEAAQgEAAgFgDgABtAIQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAgABBAIQgDgCAAgDQAAgCADgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQADABAAACQAAADgDACQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAgAjngTIgIgIIgHgIIgGgKQgDgDAAgDIgDgGIgCgEIgBgCQgCgDAAgDIgJAAIgBgEIAOAAIABADIABAEIACACIABAEIACAFQABADADADIAGAKIAGAIIAIAIIC4AAIAGgIIAFgIIAEgKIAEgGIAAgFIABgEIABgCIAAgDIAAgEIAOAAIAAAEIgJAAIAAAGIgBACIAAAEIgCAGIgCAGIgGAKIgFAIIgGAIg");
	this.shape_19.setTransform(73.7,-18.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C97106").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_20.setTransform(24.1,-0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#15121B").s().p("ADHAHQAFgQACgaIAAgIQA3AIAmAPQgEAugMAZQgkgbgwgRgABJAJQADgJADgMIBtAAQgDAMgEAJgAkRAJQgcgOAEgpIAAgEIFqAAIAAAOQgBAfgGAOg");
	this.shape_21.setTransform(69.5,-14.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4E4242").s().p("AEPB4QgdgbgxgSIADgFIAEgJIABgCQAwARAkAbQAMgZAEgvQgmgQg3gIIAAgGQgBgKgCgMQAsgIAvgQQgIgXgNgRQgjAagrAUIgIgQQAXgKAXgPIgigjIgQAHIAAgGIAUgKIAmAmIATgOIAAgEQAvAtgCBGQgEBHgdArIgDgFgABFBGIACgCIAEgHIBsAAQAEgJADgOIACgXIAAgOIAAgBIAAgEIhtAAQgBgJgCgIIBsAAQgDgKgFgIIhtAAIgEgHQgCgCgBgCIBrAAQAHACABACIABABIAEAGQAGAIADAKIAEAVIAAABIgBAOQgBAegHAQIgEAHIgGACgAA1BGIkmAAQgSgCgMgHIFLAAQAGgQABgeIAAgOIlqAAIAAgWIBNAAIgMgSIhFAAIgBgDIgGgIIBSAAIAFALQAEAJAHAJQAIAKAKAJIDEAAIAOgTQAFgJADgJIAEgLIAPAAIAEAAIAEAEIABABIAEAGQAFAIADAKQADALABALIgBAOQAAAegIAQIgDAHIgCACgAAWgVIApAAQgCgKgFgIIgZAAQgDAIgGAKgACTAYQgEgDAAgGQAAgEAEgEIACgCQgCACAAAEQAAAGAEADQAEAEAFAAQAEAAADgCQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgEAEgGAAQgEAAgEgEgABmAYQgEgDAAgGQAAgEAEgEIADgCQgDACAAAEQAAAGAEADQAEAEAFAAQAEAAAEgCIgCACQgEAEgGAAQgFAAgEgEg");
	this.shape_22.setTransform(69.3,-19.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BCBCBC").s().p("ABVAmIBtgBIAAAFIhsABIgBgFgADHACQArgSAkgaQANASAHAWQgvAPgsAHIgIgSgABSAUQgDgKgFgIIBsAAQAGAIACAKgAAYAUQAGgJADgJIAZAAQAFAIACAKgAklAUIgBgFIgBgHIgCgGIBFAAIANASg");
	this.shape_23.setTransform(69.1,-24.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#419F2D").s().p("AhPAlQhLgHgGgPIAAgDQAIguBBgDIBPAAIAIABQAZAFAPARQAQgRAdgFIAIgBIAEAAIgFABIA0AAIAEAAQAWAGgOARIgCACQgSACgOgJQgSgTglAPQgTAJgMAQQgdAjg8AAIgagBgAiPgCQgBACACAEQAEAWBIAEQBPABAJgfIABgCIABgEQgIgYg+gBIgXgBQhGAAgEAeg");
	this.shape_24.setTransform(21.8,-0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#245E1A").s().p("AhKAmQhRgHAAgSIgCgDIAAgBQAHAPBLAHQBQAIAjgoQALgSAUgJQAkgPATATQAOAJASgCIgFADQgRAFgPgKQgRgTghAPQgSAKgMAQQgdAkg/AAIgXgBgAiMgIQAFgiBcAFQA+ABAJAYIgBAEIgBAAQgJgXg8gBQhcgFgEAhIAAAEQgBgEAAgEg");
	this.shape_25.setTransform(21.5,0.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4C2216").s().p("Ah6AVQgXgCgTgHQARAFAWACQgEgGgCgFQgGgMAKgIQAJgHASgCIEJAAIgBAFIgkAAIgHAAIgkAAIgaAAIgVAAIghABIgEAAIhMAAIgLAAQgMAAgJACQgHABgFADIgDACQgHAHAEALIADAKg");
	this.shape_26.setTransform(27.2,-8.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B48662").s().p("AhABCIABgBIACgJQAKAFAPgCQAQgCAPgLQAUgQASgeQAQgeAMgpIAEACQgUBHgkAlQgFAGgEAFQgZAWgTAAQgLAAgJgGg");
	this.shape_27.setTransform(-5.9,-4.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#230703").s().p("AjRB0IgGgBQgogGgcgOIAAgDQAiAOAlAEIAEABQARACARgBQAXhoAogUIAIg1QAogPgOgbIAEACQAMAKASAFQATAIAXACQAJAIAZAEICQAAIAzgBIAHABQA/gZg4gaIAHAAIAkAAIgHAfQgFAbgqAEIgFAAIgBAAIgJAAIgEAAIg0AAIAFgBIgFAAIgHABIhVAAIgKgBIhNAAQhBADgIAwIAAADIAAABIABADQgVAqgPBOIgIAAQgqAAgggEg");
	this.shape_28.setTransform(15.1,1.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4A2314").s().p("AgcBvIgEgBQglgDgjgOIAAgDQAdAJAfAEIAFAAQAQACARAAQAbhmAbgcIAUgsQAWgOAGgdIAFAFQAOAbgoAQIgJA1QgnATgYBoIgJABIgWgCg");
	this.shape_29.setTransform(-2.9,1.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#693B19").s().p("AlmC7IgEAAQgfgEgdgJIAAgRQAiAgA1ghQAvh+A1hLIAAAAQAEAEAFAGIAFAHQgFAcgXANIgUAsQgbAegcBmIgHAAQgOAAgNgCgABZAOIgVgxIAkAAQA3Abg+AWgAhoAOQgYgDgMgIIAAAAIgDgJQgEgNAHgHIAEgBQAEgDAHgCQgCAEAAAFQAAANARAJQARAHAYAAQAZAAAQgHQASgJAAgNQgBgHgEgEIAFAAIAegBIASAxgADaiRIgHgIIgGgHIDQAAIgFAHIgGAIgADDixIgDgFIgBgEIgCgCIDqAAIgBACIgBAEIAAAFg");
	this.shape_30.setTransform(28.9,-6.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8F8D85").s().p("AitAzQAHgbAdgVQAKgEALgFQApgWBGgLIAegFQAggFAngBQAhgEAmAAIAEAAIACACIACAGQglABgjACIgZACIgDAAIgtADIgNABIgTADQhDAKgpAYQgKAEgJAHQgRANgKARQgFAGgEAIIgIgEg");
	this.shape_31.setTransform(21,-18.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#905C37").s().p("AmlCgIAAgBQACgkAHglQAaATAmgjQAGgEAGgHQAkgkAThHIACgJIgEgDQgIgGgUgEQAyAEAaAXQg0BMgwB+QgaAQgWAAQgVAAgRgPgAAVggIAWAAIAaAAIAVAwIgzABgAhtAAQgSgIAAgMQAAgFADgFQAJgCANAAIAKAAIBOAAQAEAFAAAHQAAAMgRAIQgRAIgYAAQgYAAgRgIgADNieIgGgKQgDgDgBgDIDjAAIgEAGIgEAKg");
	this.shape_32.setTransform(28.8,-6.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A9784F").s().p("AhABIQBYg0AIhXIAAgIQAUAEAIAGIAFADIgCAJIgFgCQgLApgRAcQgRAggUAQQgQALgQACIgIABQgKAAgHgEg");
	this.shape_33.setTransform(-5.7,-6.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EEE2E5").s().p("AhVAnQAhg0CKgcQgeAJgYALQgcAMgQAMQgXASgHAVQgVgGgWADg");
	this.shape_34.setTransform(7.8,-19.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#21201E").s().p("AhIAYIgDgIQgFgRALgWICJAAQANASgEAOQgCAIgFAHg");
	this.shape_35.setTransform(25.9,-16.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#878681").s().p("AGvBzQAdgrAEhHQAChGgvgtQAAgFAJAAQAtAtgDBTQgEBTgaAcQgFAAgEgFgAnTBPQgDgFABgGIABgEQABgIADgHQAHgNALgMIA0A9QgOAIAGAQQgygMgPgSgAFNA+IACgCIAGgCIAEgHQAHgQABgeIABgMIAAgDIgEgVQgDgKgGgIIgEgGIgBgBQgBgCgHgCQABgGADgCIAFAGQAGAFAAABIAFAHQAFAIADAKQAEALAAANIAAAMQgCAegGAQIgEAHIgLAMQgDgCgBgGgADXA8IACgCIADgHQAIgQAAgeIABgMQgBgNgDgLQgDgKgFgIIgEgGIgBgBIgEgEIAHAAIAEAEIAFAHQAEAIAEAKQADAKAAAMIAAACIAAAMQgBAegGAQIgEAHIgDACgAmqAJQAKgHANgDQgJAJgEAKgAE0AKQgEgDAAgGQAAgCACgCQADgCADAAQAGAAAEAEQAEACAAAEQAAAEgCADQgDACgEAAQgFAAgEgEgAE2AAQAAAAgBAAQAAAAAAABQgBAAAAABQAAABAAAAQAAABAAAAQAAABABABQAAAAAAABQABAAAAABQABAAAAABQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAgAEHAKQgEgDAAgGQAAgCADgCQADgCADAAQAGAAAEAEQAEACAAAEQAAAEgCADQgEACgEAAQgFAAgEgEgAEKAAQgDABAAACQAAADADACQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAQABAAAAAAQABAAABgBQAAAAABAAQAAgBAAAAQADgCAAgDQAAgCgDgBQAAAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAgAghgMQgKgJgIgKQgHgJgEgJIgFgLIgEgJIAJAAQAAADACADIABACIACAEIADAGQAAADADADIAGAKIAHAIIAIAIIC9AAIAGgIIAFgIIAGgKIACgGIACgGIAAgEIABgCIAAgGIAJAAIgBAJIgEALQgDAJgFAJIgOATg");
	this.shape_36.setTransform(53.6,-18.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F6F6F6").s().p("AiLAAQAJgIAMgHIAKAJIBDA4IgUAAIgPADIgLAFgAAtAyIgTgdIAwAAIAXAdgABIg4QAJgBAKgBIAwA3gAgFgfIgJgQIAggEIAQAUg");
	this.shape_37.setTransform(22.9,-16.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EEEEEE").s().p("AigA9QgGgIAAgJIABgEQABgIAEgHQAGgNAKgLQAIgHALgGQAPgKAUgHQAXgJAxgHIAggEIAxgFIAXgCIBGgEIAJgBIACAHIgHAAIhEAFQgLAAgJACIg2AFIggAEQgwAIgXAIIgKADQgNAGgKAHQgMAGgIAHQgLALgHAOQgDAGgBAIIgBAEQgBAHADAFIgBgBgABKAdIgwAAIhHAAIgCgIQgGgVAMgXIADADQgMAUAFATIADAIICOAAIADACg");
	this.shape_38.setTransform(22.8,-17);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5C5A55").s().p("AhkBLQgSgFgMgKIgEgCIgFgFIgGgHQgEgGgFgEIAAgBQgagXgygEIAegBQANACAQAGIAIADQAEgHAFgGQALgPAQgNQAJgHALgGQAogYBDgKIAUgDIAMgBIAtgEIAEAAIAYgBQAkgDAkAAIhGAFIgXACIgyAFIghAEQgvAHgXAIQgUAIgPAJQgLAHgIAIQgKALgGAMQgEAGgCAIIAAAEQgBAJAHAIIAAABQAQASAxAMQgFgQANgIIALgGIAPgCIAUAAIBWAAIA0AAIBxAAIgCADIAAAAIkJAAQgSACgJAHQgKAIAGAOQACAFAEAGQgWgCgRgGgAB5AFQAFgFACgHQAFgRgNgRIiKAAIgCgDIAiAAIApAAIBEAAQAOATgFATQgCAGgGAIg");
	this.shape_39.setTransform(20.8,-14.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C9C6BB").s().p("AhOAAQBAgLA/gDQAngDAnAAIAHAIQgoAAgmADQglABghAFQg+AFg5ANQAYgLAfgHg");
	this.shape_40.setTransform(24.5,-23.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B5ABA5").s().p("ABwBJIgWgdIAdAAQAGgIACgIQAEgTgNgRIhFAAIgQgUIA2gFIBEAzIgwg1IBEgFIAHAAIABAFIAAAZIAAADQgEAoAdAPQALAGASACIgLARgAgZBJIhEg6QAFgLAJgJIAJgDQAXgIAvgIIAJAQIgiAAQgNAXAGAUIACAJIBHAAIATAdgAjNArIgfABQAbgxBPgcIAIgCQBNgaB6gJQAkgCAoAAIADAAQAKABAGAIIAGAIIABACIACAHIgJAAIgCgHIgCgBIgEAAQgmAAghADQgnACggAFIgeAEQhGAMgpAVQgLAFgKAEQgdAVgHAcQgQgGgNgCgAixAhQAIgVAWgQQASgPAcgMQA5gNA8gHQAjgFAkgBQAngCAngBIgGgIQgnAAgnADQhBADg/AMQiMAbghA0IAPgBQAOAAAOAFg");
	this.shape_41.setTransform(21.3,-18.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#232323").s().p("AgJAKQgCgBAAgGIAAgMIAXAFIAAAJQgQgBgEAGg");
	this.shape_42.setTransform(86.8,-12.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AhBAKQgDAAAAgHIAAgMICHAAIAAAMQAAAGACABg");
	this.shape_43.setTransform(78.8,-12.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(35,7,3,0.086)").s().p("Ai5BsIgBgMQAAgEATgyQAOgiADgQQAEgWAIggIAPg0IABAAQgEAYgIAjIgQA5QgFASgRAoQgLAkACAYIAAABQgBgDgDgKgAjzBYIgBgMQAAgbALgeIABAGIgJA/gAjEBCQAAgXAIgSQACgHALgSIABAAIABgDIAIgNQAHgOAEgcQAEgdAGgKQgCAIgFAhQgDAagKAQQgPAYgGAPQgJAYABATIgBABQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBgAAKhTIgKgBIgFgCIABgBIANADIADABgAD0hVIhBABIgCgCIgJAAIALgCIBBAAIABACIAAACgABOhZIgXgEQgHAAgIACIgMACQgRAAAAgGQgBgEAKgEQAJgEAJAAQgUAIgDADQAEADAJAAQAGAAAKgCQAIgCAGAAIAxAKIAAABIgCAAQgJAAgSgDgACVhfQgUAAgjgKQgigLgJAAQgPAAgJACIgTAIIgCgBQAmgUAoAMQA/ASAIAAIAAACgACbhlQAEgCgHgCIAAgCIADABIA7AAQACABAaAAIACACIgCACIg0ABIgjgBg");
	this.shape_44.setTransform(14.6,1.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(35,7,3,0.278)").s().p("AkDBpIADgQIAAAAIAAgBIABgFIABAAIgFAWgAiqA0QADgZAUgzQATgzACgcIABAAQADACAAADQAAAPgJAgIgCAEIgKAaIgCALIAAACQgWA5AAADgAj5AAIAUgbQAMgRADgLIABACQAAAHgPAWQgOAVgGADgAjChJQAGgRABgOIABAAIABADQAAAMgGASQgGAUgKAHIgBABIAOgegAAegtIgGgBQAJgBA3gDIASABIhBAEgACJg1IABAAIA8gCIhDAEIAGgCgAD7hWQgKgCgXgBIAAgBIgLAAIAAgBQAgACALADIAKACIAAABQgEgCgFgBg");
	this.shape_45.setTransform(17.4,-0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(180,134,98,0.086)").s().p("Ai4BxQAAgRAHgTQAJgXAEgQIACAAIABAAIAAABIgDAKQABAFgFAPIgHARIgEAmIgDABQgBgGgBgGgAjhBsIABgpIAFgUIgBgNIgBgGIAAgDIgGASIgGARIgDAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAYhMAAAxIAAAqIAAABIgBAAIgBABIgCAPQgCAbgCAAQgFAAACgJgAjDBJQAAgeAJgYQALgYgBgIQAAgDgCgFIABgBIAEAGIAAAEQAAAMgGATIgKAgIAAAtIgCAFIgBABQgDAAAAgdgAkDBGQAAgJAEgXQAGgXACgFIACADIgEAXQgGAVAAAYIgBADIgBABQgCgIAAgHgAiKgUIACgJIgBgHQAAgcAEgHIAEgbQACgOADgEQAEgJAGABQADACAAAGIgHAeIgIAfIgDABIgCASQgDAWgCAFIgBAAIAAgCIgGAcIgBABIAGgmgAhyAPQAAgDAEgKIAGgLIAAgNIAAgBIAAgCIACgLIAKgaIACgEQAGgOAFgHIABACIgTA0IgFAaQgCAPgKAIIAAABIAAgCgAilAGQAQg6AEgWIACAAIABACQgBANgHAeQgDAPgHASIgBAEIgBAAIgCAAIAAAAIgBgCgACThAIgSgBIgngDIgzgEQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAgDQBNAABMAFIACAAIgNAEIAAAAIgGACIgDAAQgJACgIAAIgGAAgAB/hjIgBgCQADgEANgBIAigCIBIADIAMAAIAAABIABADQAAACgJAAIgygBIgvAAIgaACg");
	this.shape_46.setTransform(13.3,0.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1C1C1C").s().p("Ak3AGIAAgLIJvAAQAAAFgCAGg");
	this.shape_47.setTransform(57.6,-9.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BCBCBC").s().p("Ak3ABIAAgBIJuAAIABABg");
	this.shape_48.setTransform(57.5,-11.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#525252").s().p("Ak3AOIAAgBIJtAAIAAABgAk3AAIAAgHIJuAAIABAHgAk3gJIAAgDIJtAAIABADg");
	this.shape_49.setTransform(57.6,-10.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#419F2D").s().p("AgEATQgJgVANgSIAIgBQgPAPAFAdg");
	this.shape_50.setTransform(12.1,-0.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#245E1A").s().p("AACgTIgHABQgOASAJAWQgKgWAGgPIACgFQAMgDARgBIgDADQgTATgDAbQgFgcAPgQg");
	this.shape_51.setTransform(12.7,-0.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#230703").s().p("AjRB0IgGgBQgogGgcgOIAAgDQAiAOAlAEIAEABQARACARgBQAXhoAogUIAIg1QAtgSgXggQAaAdA2AGQAJAIAZAEICQAAIAzgBIAHABQA/gZg4gaIAHAAIAkAAIgHAfQgFAbgqAEIgQAAIkyAAIAAA2QgmAhACBaIgIAAQgqAAgggEg");
	this.shape_52.setTransform(15.1,1.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B48662").s().p("AhABCIABgBIACgJQAKAFAPgCQAQgCAPgLQAUgQASgeQAQgeAMgpIAEACQgUBHgkAlQgFAGgEAFQgZAWgTAAQgLAAgJgGg");
	this.shape_53.setTransform(-5.9,-4.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#693B19").s().p("AjTB/IgEAAQgfgEgdgJIAAgRQAiAgA0ghQA4iPA8hRQACANAAALIgJAFIAGAHIABACQgGAfgXAOIgUAsQgbAcgdBmIgHAAQgNAAgNgCgADsgsIgVgzIAjAAQA4Abg+AYgAApgsQgZgDgLgIIAAAAIgDgLQgCgOAIgHQAFgDAHgCQgDAEAAAFQAAANASAJQARAJAYAAQAYAAARgJQARgJAAgNQAAgHgEgEIAlgBIASAzg");
	this.shape_54.setTransform(14.2,-0.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4C2216").s().p("AhkAvQg2gFgageIgBgBIgGgHIAJgEIA2gjID7gMQAKATgDATQA4gHgDASIgBAGIgkAAIgHAAIgjAAIgwAAIglABIhWAAQgNAAgJACQgHABgFADQgKAIAEAOIADAKg");
	this.shape_55.setTransform(24.9,-11.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A9784F").s().p("AhABIQBYg0AIhXIAAgIQAUAEAIAGIAFADIgCAJIgFgCQgLApgRAcQgRAggUAQQgQALgQACIgIABQgKAAgHgEg");
	this.shape_56.setTransform(-5.7,-6.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4A2314").s().p("Ag0CJIgEgBQglgDgjgOIAAgDQAdAJAfAEIAFAAQAQACARAAQAdhmAZgdIAUgrQAWgOAGgfQAYAfgtATIgJAzQgnAVgWBoIgLABIgWgCgABJh+IAHgJIAxgDIg3AkQABgLgCgNg");
	this.shape_57.setTransform(-0.5,-0.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#905C37").s().p("Aj/BuIAAgBQACgkAHglQAaATAmgjQAGgEAGgHQAkgiAThJIACgJIgEgDQgIgGgUgEIBkgFIgIAJQg8BRg4CQQgaARgWAAQgVAAgRgQgAC7hSIAwAAIAVAyIgzABgAA3gxQgSgJAAgMQAAgFADgFQAJgBANAAIBYAAQAEAEAAAHQAAAMgRAJQgRAJgYAAQgYAAgRgJg");
	this.shape_58.setTransform(12.2,-1.9);

	this.addChild(this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-32.3,114.6,46.3);


(lib.GUN_TANK_01 = function() {
	this.initialize();

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(35,7,3,0.086)").s().p("Ai1B4QgBgCgDgJIgCgNQAAgEAUgyQAOghADgRQAFgWAIggIAOg1QgDAagJAiIgQA4QgFATgPAoQgMAkADAYgAjzBYIAAgMQAAgcAKgcIAAAFIgJA/gAjEBCQAAgWAHgTIANgZIACAAIACgCIAHgOQAIgOADgcQAEgdAGgKQgDAIgFAhQgDAagIAQQgQAZgGAOQgJAXABAUIgCABIgBgDgAAAhUIgEgCIAAgCQAGADAGABIAFAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgHAAgDgBgAD0hVIhCABIgBgCIgJAAIAKgCIBCAAIAAACIAAACgABOhZQgTgEgFAAQgGAAgHACQgIACgGAAQgRAAAAgGQAAgFALgEQAIgDAIgBQgTAJgDADQAFADAHAAQAHAAAJgCQAJgCAHAAIAvAKIAAABQABAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgJAAgTgDgACWhfQgWAAghgKQgjgLgJAAQgPAAgKACIgTAIIAAAAQAlgVAoAMQA/ASAIAAIAAACIgDAAgACbhlQAFgBgJgDIAAgBQABAAAAgBQABAAAAAAQABABAAAAQABAAAAAAIA7AAQADACAZAAIABAAIgBADIg1ABQggAAgCgBg");
	this.shape.setTransform(14.5,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(35,7,3,0.278)").s().p("Aj/BTIAAAAIgEAWgAiqA0QADgZAUgzQASgzACgcIACAAQACACAAAEQAAANgJAgIgCAEQgGAUgEAGIgBAMIgBACIgWA8gAj5AAIATgaQAMgTAEgKIAAACQAAAHgOAWQgOAUgHAEgAjDhJQAHgSAAgNIACAAIAAACQAAANgGASQgGATgJAJIgBAAIANgegAAXgtQAKgCA3gDIARAAIhBAFgACJg0IAAAAIA8gEQgnADgeABIAJAAgAD6hWQgJgCgXgBIAAgBIAfADIALADIgKgCgADPhaIAAgBIAHABg");
	this.shape_1.setTransform(17.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(180,134,98,0.086)").s().p("Ai3BxQAAgRAFgTIAPgnIACAAIAAAAIgCALQAAAGgFANIgHASIgEAmIgDABIgBgMgAjiBrIACgnIAFgVIgBgNIAAgFIgBgEIgGARIgGASIgCAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAXhLAAAxIgBArIgCABIAAAPQgDAbgCAAQgFAAABgKgAjCBIQAAgdAJgZQAJgWAAgKQAAgCgCgFIAAgBIAGAGIAAAEQAAAMgHAUIgKAfIAAAtIgBAFIgCABQgDAAABgegAkDBGQAAgKAFgWQAFgYADgEQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAIgFAXQgGAVAAAYIgBAEIAAAAQgDgIAAgHgAiJgTIABgLIgBgHQAAgbAEgHIAFgcQACgNACgEQAEgJAFACQAFACAAAFQAAAEgIAaIgIAfIgCABIgDASQgDAWgCAEIgBABIAAgCIgGAdIgBAAIAHglgAhxAOIAEgLQAEgJABgEQABgDgBgJIAAgBIABgCIABgLQAEgHAGgTIACgFQAGgNAFgHIABACIgTA0IgFAaQgCAOgJAJgAilAHQAQg8AFgWIABAAIABADQAAAOgIAdQgDAPgHATIgBADIgCAAIgBAAIAAAAIgBgBgACThAIgRgBIgogCIgzgEQAAgBgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIABgCQBMAABMAFIACABIgNAEIAAAAIgJABQgJACgIAAIgGAAgAB/hjIgBgCQAEgEAMgBQAJgBAagBIBIADIAHAAIAEAAIAAABIAAACQAAADgHAAIgygBIgvAAIgaACg");
	this.shape_2.setTransform(13.2,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(35,7,3,0.278)").s().p("AgsABIBGgCIATABQgKAAg8ACIgTgBg");
	this.shape_3.setTransform(66.8,-11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(180,134,98,0.086)").s().p("AgmAAIgBAAIAIAAIAAAAIAGgCIAJAAIAEAAIAIAAIASACIAZAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIgBABQgnAAgmgDg");
	this.shape_4.setTransform(61.4,-8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(35,7,3,0.086)").s().p("AgLALQhGgQgKAAIAAgCIAEgBIADAAQAYABAlAIQAlALAKAAQARAAAKgDQAGgBAQgHIABABQgaANgcAAQgQAAgPgEgABEgBQgGgEgIAAQgJAAgKADIgQACIg0gKIAAgBIACgBQAKAAAUAEIAXADQAJAAAIgCIAPgBQASAAABAFQAAADgMAEQgJAEgKAAQAXgIADgBgABLgNIgFgBIADAAIAMABIAHACIgBABIgQgDg");
	this.shape_5.setTransform(68.8,-9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BDCCD4").s().p("Ag2AXQgTgXATgWIAFAAQgSAWARATIBzgBIgEAFg");
	this.shape_6.setTransform(23.3,-13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#171717").s().p("Ag2gUIBuAAQAPAUgMAUIhzABQgQgVASgUg");
	this.shape_7.setTransform(23.8,-13.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A9784F").s().p("ABkATQADgLgBgIIjTAAIABgMIDRAAIgBgGIAGAAIACAGIACAMQABAIgDALg");
	this.shape_8.setTransform(67.2,-9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#905C37").s().p("ABiAZQADgHAAgFIjPAAQgCgKAAgJIDTAAQABAIgDALIAIAAIgGAMgAhrgSIACgGIDOAAIABAGg");
	this.shape_9.setTransform(67,-9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A2314").s().p("AhmAeQgEgHgCgFQgFgKACgJQAAgGACgGIADgGIAEgKIDSAAIAFAKIgHAAIjOAAIgCAGIgBAMQAAAJACAKIDPAAQAAAFgDAHg");
	this.shape_10.setTransform(66.5,-9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#232323").s().p("AgJAKQgCgBAAgGIAAgMIAXAFIAAAJQgQgBgEAGg");
	this.shape_11.setTransform(86.8,-11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AhBAKQgDAAAAgHIAAgMICHAAIAAAMQAAAGACABg");
	this.shape_12.setTransform(78.8,-11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#525150").s().p("AiTgIIAVAaQgaAFAGAWQgLgdAKgYgAg6AQIhKgwQAEgFAHgFIBIgDIBDA9gABrAQIgdAAIgcgTIAAAAIg0goIAqAAIBCAlIgqglIAdAAQADAKALAOQATATAbAAIgDAQg");
	this.shape_13.setTransform(28.5,-12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A6A6A6").s().p("AhUAGIgOgQQhLATAMAYIgDgDIgBgBQgTgWBdgeIAjgKIAHAAIBkAAIBpAAIAAAGIgdAAIAqAjIhCgjIgsAAIA2AmIAAAAIAcAVIg8AAIhFg9IhGADIgFgBIgPAFIAJAGIBIAwIguAAQgLAAgJACg");
	this.shape_14.setTransform(22.2,-13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8A8A8A").s().p("AjDAbIgGgBIAIgDQApgXAvgOQAegMALgBQAogFAXgCQAZgDAHACICngCQACAEACAGIiyADIgVAIIggALIgLAFIgUAEQg0AUgWAOQgkgMgZABg");
	this.shape_15.setTransform(17.7,-16.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#41403F").s().p("Ah2AVIAAgBQgNgVBMgWIANASQgKAYALAdIAEAKQg4gFgZgggAiOACIgCgCIgCAAQgVgIgfgCQAYgBAlALQAWgNA0gUIATgHIALgEIAhgLIDHgDIgBAMIhpABIhkAAIgHAAIgjAKQhdAgATATQgHgIgMgGgAgkgjIAQgFIAEABQgGAFgFAFg");
	this.shape_16.setTransform(18,-12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D6D6D").s().p("AgrAFICwgCIABAIIjGACIAVgIgAhpgDQAlgFBXgDQA3gBAuAAQAGACADAEIikADQgIgCgbACQgXACgoAEg");
	this.shape_17.setTransform(24.5,-19.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A9784F").s().p("AgyBxQANhEAigzQAig7gBgxQALACAKAFIgBALQgDATgGASIgDAIQgJAZgQAYQgfAvgWBHIgKgDg");
	this.shape_18.setTransform(-4.8,-1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#230703").s().p("AkHBiIgIgCIABgHIALACIgDgBIACgKIAKADIAGAAQANABAUgBIAmgJQANhSA7gyQAJgNAEgHIACgGQACgLgKgOQAaAfA3AEQALAJAXAEICQAAIAygBIAJABQA9gZg3gaIAGAAIAkAAQAAADgFAbQgHAcgqAEIgOAAIkEAAQg/ANgWBYQgMAxADALQgIACgRABQgmgCgygOg");
	this.shape_19.setTransform(16.2,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4C2216").s().p("AirBQQAVhXA/gNQgeANgQASQgcAkgGBOQABAMgOAEQgDgLAMgygAjCAHQAngoAEgqIAAgBIACgDIAZgmQACAOAAALIA2gkID7gMQAKATgDATQA3gHgCAUIgBAGIgkAAIgHAAIgjAAIgwAAIgmAAIhVAAQgNAAgJADQgIABgEADQgLAIAEAPIAEAJQg2gFgageQAJAOgCALIgBAGQgEAHgKAMQg7AxgNBUIgmAIQAJhBAngog");
	this.shape_20.setTransform(19.3,-1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#693B19").s().p("Aj6BuQAWhDAgguQARgaALgcQAIgaAEgbIAOAKQAFALAMALIAAABQgEAqgnAnQgoApgIBBIgVABIgNgBgADSgjIgVgyIAkAAQA3Aag+AZgAAQgiQgXgEgLgIIgEgKQgEgOAKgIQAFgDAIgCQgEAFAAAEQAAANAQAKQARAIAYAAQAZAAAQgIQARgKAAgNQAAgGgEgFIAmAAIASAzg");
	this.shape_21.setTransform(16.7,-1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B48662").s().p("Ag6B4IABgBQAMhJAkg3QAjg7gCg0IAJADQABAygiA6QgiAzgOBFIgCAKIAEABgAgmBxQAWhHAfguQARgYAJgaIADgIQAGgSACgTIACgLIACAAIADADQgDAbgJAaQgKAcgRAaQgfAugVBDIgGAAg");
	this.shape_22.setTransform(-5,-1.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#905C37").s().p("ACFgDIAwAAIAUAwIgyABgAABAdQgRgKABgNQgBgEAEgDQAIgCALAAIBYAAQAFADAAAGQAAANgSAKQgQAIgZAAQgYAAgQgIgAiWgSIgPgKIgDgDIgDAAQgJgFgMgCIgIgEIBkgDIgHAIIgZAlIgCACQgMgJgEgLg");
	this.shape_23.setTransform(17.6,-9.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A2314").s().p("AgbgFIAIgIIAugEIg0AjQABgLgDgMg");
	this.shape_24.setTransform(9.6,-12.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1C1C1C").s().p("ACeAGIgXAAImyAAIAAgLIGyAAIAXAAICOAAQAAAFgCAGg");
	this.shape_25.setTransform(59.9,-9.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#525252").s().p("AkrAOIAAgCIGyAAIAXAAICMAAIAAACgACeAAIgXAAImyAAIAAgHIGyAAIAXAAICOAAIAAAHgACegKIgXAAImyAAIAAgCIGyAAIAXAAICMAAIABACg");
	this.shape_26.setTransform(59.9,-9.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BCBCBC").s().p("ACfABIgYAAImyAAIAAgBIGyAAIAYAAICMAAIABABg");
	this.shape_27.setTransform(59.9,-10.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8A8A8A").s().p("AgDASQgKgUANgSIAIgBQgOAPAFAdg");
	this.shape_28.setTransform(12,-0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#41403F").s().p("AAAgQIgHABQgOAQAJAXQgKgXAGgOIAEgNQAMAGATgHIgHAIQgTATgDAcQgFgdAPgPg");
	this.shape_29.setTransform(12.8,-1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#525252").s().p("AkiABIAAgBIJFAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_30.setTransform(64.5,-12.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#15121B").s().p("AklAUIAAgnIFEAAIACAAIAXAAIDuAAQAAATgGAUg");
	this.shape_31.setTransform(64.9,-14.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4E4242").s().p("AA4ASIgXAAIgCAAIlEAAIAAgUIJIAAQADAJAAALgAklgLIAAgGIJCAAIAEAGg");
	this.shape_32.setTransform(64.9,-18.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BCBCBC").s().p("AkkAEIAAgHIJGAAIADAHg");
	this.shape_33.setTransform(64.7,-19.3);

	this.addChild(this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.8,-20.8,107.2,35.2);


(lib.Tank_Roche_Tombe01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tank_Roche01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-21.3,x:-9.7,y:-14.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-31.3,x:-12.7,y:-16.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-39.1,x:-18.2,y:-20},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-46.7,x:-25.6,y:-20.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-56.1,x:-36.3,y:-15.8},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.75,scaleY:0.75,rotation:-75,x:-51.4,y:1.5},0).wait(1).to({regX:0,regY:0,scaleX:0.68,scaleY:0.68,rotation:-100.6,x:-56.4,y:-7.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-112.6,x:-57.6,y:-8.5},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-121.9,x:-60.5,y:-10.6},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-131,x:-64.5,y:-11.3},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-142.3,x:-70.9,y:-7.8},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:-165,x:-79.1,y:4},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:-193.1,x:-81.8,y:-0.9},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-206.3,x:-82.3,y:-1.5},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-216.5,x:-83.7,y:-2.8},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-226.5,x:-85.6,y:-3.5},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-238.8,x:-89,y:-2.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-263.7,x:-94,y:3.9},0).to({scaleX:0.1,scaleY:0.1,rotation:-983.7,x:-175,y:5},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-9.8,23,19.6);


(lib.Tank_Jambes_Run_Loop01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Tank_Robe01();
	this.instance.setTransform(40.3,-86,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-37.6,regY:38.7,skewX:-0.8,skewY:-0.8,x:11.1,y:-55.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,skewX:-3.4,skewY:-3.6,x:10.2,y:-54.4},0).wait(1).to({scaleX:0.76,scaleY:0.77,skewX:-8.4,skewY:-8.9,x:8.8,y:-52.2},0).wait(1).to({scaleX:0.76,scaleY:0.78,skewX:-15.9,skewY:-17,x:7.1,y:-49.2},0).wait(1).to({scaleX:0.76,scaleY:0.78,skewX:-25.5,skewY:-27.3,x:5.5,y:-46.4},0).wait(1).to({scaleX:0.75,scaleY:0.78,skewX:-35.2,skewY:-37.6,x:4.3,y:-44.9},0).wait(1).to({scaleX:0.75,scaleY:0.79,skewX:-42.9,skewY:-45.9,x:3.5,y:-44.7},0).wait(1).to({scaleX:0.74,scaleY:0.79,skewX:-48,skewY:-51.3,x:3.1,y:-45},0).wait(1).to({scaleX:0.74,scaleY:0.79,skewX:-50.7,skewY:-54.2,x:2.8,y:-45.3},0).wait(1).to({regX:0,regY:0,skewX:-51.5,skewY:-55.1,x:-5.2,y:-87.3},0).wait(1).to({regX:-37.6,regY:38.7,scaleX:0.75,scaleY:0.79,skewX:-50.9,skewY:-53.9,x:2.3,y:-45.9},0).wait(1).to({scaleX:0.77,scaleY:0.78,skewX:-48.8,skewY:-49.7,x:1,y:-47.5},0).wait(1).to({scaleX:0.8,scaleY:0.76,skewX:-44.8,skewY:-41.7,x:-1.8,y:-51.3},0).wait(1).to({scaleX:0.86,scaleY:0.74,skewX:-39,skewY:-30.4,x:-5.3,y:-58},0).wait(1).to({scaleX:0.91,scaleY:0.71,skewX:-33.2,skewY:-18.9,x:-8.2,y:-66.7},0).wait(1).to({scaleX:0.95,scaleY:0.7,skewX:-29.1,skewY:-10.7,x:-9.6,y:-73.7},0).wait(1).to({scaleX:0.97,scaleY:0.69,skewX:-26.9,skewY:-6.4,x:-10.1,y:-77.7},0).wait(1).to({regX:0,regY:0,scaleX:0.98,scaleY:0.69,skewX:-26.3,skewY:-5.2,x:14.5,y:-106},0).to({scaleX:0.77,scaleY:0.77,skewX:0,skewY:0,x:40.3,y:-86},12,cjs.Ease.get(-0.5)).wait(1).to({regX:-37.6,regY:38.7,skewX:-0.8,skewY:-0.8,x:11.1,y:-55.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,skewX:-3.4,skewY:-3.6,x:10.2,y:-54.4},0).wait(1).to({scaleX:0.76,scaleY:0.77,skewX:-8.4,skewY:-8.9,x:8.8,y:-52.2},0).wait(1).to({scaleX:0.76,scaleY:0.78,skewX:-15.9,skewY:-17,x:7.1,y:-49.2},0).wait(1).to({scaleX:0.76,scaleY:0.78,skewX:-25.5,skewY:-27.3,x:5.5,y:-46.4},0).wait(1).to({scaleX:0.75,scaleY:0.78,skewX:-35.2,skewY:-37.6,x:4.3,y:-44.9},0).wait(1).to({scaleX:0.75,scaleY:0.79,skewX:-42.9,skewY:-45.9,x:3.5,y:-44.7},0).wait(1).to({scaleX:0.74,scaleY:0.79,skewX:-48,skewY:-51.3,x:3.1,y:-45},0).wait(1).to({scaleX:0.74,scaleY:0.79,skewX:-50.7,skewY:-54.2,x:2.8,y:-45.3},0).wait(1).to({regX:0,regY:0,skewX:-51.5,skewY:-55.1,x:-5.2,y:-87.3},0).wait(1).to({regX:-37.6,regY:38.7,scaleX:0.74,scaleY:0.79,skewX:-50.9,skewY:-53.9,x:2.4,y:-45.9},0).wait(1).to({scaleX:0.76,scaleY:0.78,skewX:-48.8,skewY:-49.7,x:1.3,y:-47.6},0).wait(1).to({scaleX:0.79,scaleY:0.76,skewX:-44.8,skewY:-41.7,x:-0.9,y:-51.7},0).wait(1).to({scaleX:0.83,scaleY:0.74,skewX:-39,skewY:-30.4,x:-3.6,y:-58.6},0).wait(1).to({scaleX:0.87,scaleY:0.71,skewX:-33.2,skewY:-18.9,x:-5.7,y:-67.2},0).wait(1).to({scaleX:0.9,scaleY:0.7,skewX:-29.1,skewY:-10.7,x:-6.5,y:-74.1},0).wait(1).to({scaleX:0.92,scaleY:0.69,skewX:-26.9,skewY:-6.4,x:-6.7,y:-78},0).wait(1).to({regX:0,regY:0,scaleX:0.92,scaleY:0.69,skewX:-26.3,skewY:-5.2,x:16.1,y:-106.2},0).to({scaleX:0.77,scaleY:0.77,skewX:0,skewY:0,x:40.3,y:-86},12,cjs.Ease.get(-0.5)).wait(1));

	// Tank_Pied01_0
	this.instance_1 = new lib.Tank_Pied01();
	this.instance_1.setTransform(-55.1,-61.2,0.768,0.768,126.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:80.5,x:11.4,y:-23.9},10,cjs.Ease.get(-1)).to({rotation:-27.2,x:57.2,y:-36.8},8,cjs.Ease.get(1)).to({scaleX:0.77,scaleY:0.77,rotation:-36.2,x:55.1,y:-10.5},12,cjs.Ease.get(-1)).to({scaleY:0.91,rotation:0,skewX:14.6,x:33.8,y:-1.3},2).to({scaleY:0.77,skewX:0,x:-8,y:-0.7},8).to({rotation:151.6,guide:{path:[-8.1,-0.8,-93.9,-14.6,-76.9,-84.9]}},8).to({scaleX:0.77,scaleY:0.77,rotation:126.3,x:-55.1,y:-61.2},12,cjs.Ease.get(-1)).wait(1));

	// Tank_Pied01
	this.instance_2 = new lib.Tank_Pied01();
	this.instance_2.setTransform(55.1,-10.5,0.769,0.769,-36.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.91,rotation:0,skewX:14.6,x:33.8,y:-1.3},2).to({scaleY:0.77,skewX:0,x:-8,y:-0.7},8).to({rotation:151.6,guide:{path:[-8.1,-0.8,-93.9,-14.6,-76.9,-84.9]}},8).to({scaleX:0.77,scaleY:0.77,rotation:126.3,x:-55.1,y:-61.2},12,cjs.Ease.get(-1)).to({rotation:80.5,x:11.4,y:-23.9},10,cjs.Ease.get(-1)).to({rotation:-27.2,x:57.2,y:-36.8},8,cjs.Ease.get(1)).to({scaleX:0.77,scaleY:0.77,rotation:-36.2,x:55.1,y:-10.5},12,cjs.Ease.get(-1)).wait(1));

	// Dust
	this.instance_3 = new lib.Tank_Dust_Nuage01();
	this.instance_3.setTransform(36.2,-0.6,0.577,0.577);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({scaleX:2.72,scaleY:1.73,x:-12.3},4,cjs.Ease.get(0.5)).to({scaleX:0.46,scaleY:0.03,x:-148.4,y:-0.9},8,cjs.Ease.get(-0.5)).to({_off:true},1).wait(15).to({_off:false,scaleX:0.58,scaleY:0.58,x:36.2,y:-0.6},0).to({scaleX:2.72,scaleY:1.73,x:-12.3},4,cjs.Ease.get(0.5)).to({scaleX:0.46,scaleY:0.03,x:-148.4,y:-0.9},8,cjs.Ease.get(-0.5)).to({_off:true},1).wait(19));

	// Calque 10
	this.instance_4 = new lib.Tank_Molet01();
	this.instance_4.setTransform(-42.2,-58.8,0.769,0.769,85.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:31,x:19.9,y:-26.2},10,cjs.Ease.get(-1)).to({rotation:-14.2,x:44.8,y:-44.3},8,cjs.Ease.get(1)).to({rotation:15,x:41.8,y:-16.1},12,cjs.Ease.get(-1)).to({rotation:14.8,x:30.4},2).to({rotation:15,x:-14.9},8).to({rotation:91,guide:{path:[-15,-16.2,-74.6,-18.9,-70.5,-78]}},8).to({rotation:85.3,x:-42.2,y:-58.8},12,cjs.Ease.get(-1)).wait(1));

	// Calque 12
	this.instance_5 = new lib.Tank_Molet01();
	this.instance_5.setTransform(41.8,-16.1,0.769,0.769,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:14.8,x:30.4},2).to({rotation:15,x:-14.9},8).to({rotation:91,guide:{path:[-15,-16.2,-74.6,-18.9,-70.5,-78]}},8).to({rotation:85.3,x:-42.2,y:-58.8},12,cjs.Ease.get(-1)).to({rotation:31,x:19.9,y:-26.2},10,cjs.Ease.get(-1)).to({rotation:-14.2,x:44.8,y:-44.3},8,cjs.Ease.get(1)).to({rotation:15,x:41.8,y:-16.1},12,cjs.Ease.get(-1)).wait(1));

	// Calque 13
	this.instance_6 = new lib.Tank_Ombre01();
	this.instance_6.setTransform(5.3,0,1.803,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleX:1.8,x:5.2},0).wait(1).to({scaleX:1.78},0).wait(1).to({scaleX:1.75,x:5},0).wait(1).to({scaleX:1.69,x:4.8},0).wait(1).to({scaleX:1.63,x:4.5},0).wait(1).to({scaleX:1.56,x:4.2},0).wait(1).to({scaleX:1.51,x:4},0).wait(1).to({scaleX:1.47,x:3.9},0).wait(1).to({scaleX:1.46,x:3.8},0).wait(1).to({scaleX:1.45},0).wait(1).to({scaleX:1.44,scaleY:0.76,x:3.5},0).wait(1).to({scaleX:1.39,scaleY:0.73,x:2.8},0).wait(1).to({scaleX:1.3,scaleY:0.67,x:1.5},0).wait(1).to({scaleX:1.18,scaleY:0.58,x:-0.5},0).wait(1).to({scaleX:1.05,scaleY:0.49,x:-2.4},0).wait(1).to({scaleX:0.96,scaleY:0.43,x:-3.8},0).wait(1).to({scaleX:0.92,scaleY:0.39,x:-4.5},0).wait(1).to({scaleX:0.9,scaleY:0.39,x:-4.7},0).to({scaleX:1.8,scaleY:0.77,x:5.3},12,cjs.Ease.get(-0.5)).to({scaleX:1.45,x:3.8},10).wait(1).to({scaleX:1.44,scaleY:0.76,x:3.5},0).wait(1).to({scaleX:1.39,scaleY:0.73,x:2.8},0).wait(1).to({scaleX:1.3,scaleY:0.67,x:1.5},0).wait(1).to({scaleX:1.18,scaleY:0.58,x:-0.5},0).wait(1).to({scaleX:1.05,scaleY:0.49,x:-2.4},0).wait(1).to({scaleX:0.96,scaleY:0.43,x:-3.8},0).wait(1).to({scaleX:0.92,scaleY:0.39,x:-4.5},0).wait(1).to({scaleX:0.9,scaleY:0.39,x:-4.7},0).to({scaleX:1.8,scaleY:0.77,x:5.3},12,cjs.Ease.get(-0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-93.9,187.6,99.6);


(lib.Tank_Dust_ParticuleMove01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dust
	this.instance = new lib.Tank_Dust_Nuage01();
	this.instance.setTransform(-5.8,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.6,scaleY:0.04,x:-58.4,y:-0.9},8).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-5.5,31.4,11.2);


(lib.Tank_ArmsWeapon01 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Tank_Main01();
	this.instance.setTransform(12.2,0.6,0.769,0.769);

	// Layer 3
	this.instance_1 = new lib.Tank_Main02();
	this.instance_1.setTransform(57.9,-2.7,0.769,0.769);

	// Layer 1
	this.instance_2 = new lib.GUN_TANK_01();
	this.instance_2.setTransform(12.3,1.2,0.769,0.769);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-14.8,85.1,27.1);


(lib.Interpolation69 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.NA_Imp_Foot01();
	this.instance.setTransform(18.6,-22.1,1.029,0.667,0,-55.3,-60);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 46, 21, 27, 0)];
	this.instance.cache(-5,-4,10,8);

	this.instance_1 = new lib.NA_Imp_Foot01();
	this.instance_1.setTransform(-17.5,20.5,1.088,1.553,0,-23.1,136.7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.1,-25.6,42.3,51.2);


(lib.GUN_TANK_12 = function() {
	this.initialize();

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("AgXAiIALgdIgSgBIAGgOIATACIAJgbIASABIgKAcIATACIgHANIgTgCIgJAdg");
	this.shape.setTransform(-3.5,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3BAB2F").ss(0.8,1,0,3).p("AAWgiIgLAcIAUACIgHANIgUgBIgJAcIgTgBIALgeIgRgBIAGgOIATACIAJgbg");
	this.shape_1.setTransform(-3.4,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#194514").s().p("AA5A9IAAgGIAeAAIABgCQAFgJABgHIAAhcIAAgFIAFAAQAAAQAGAHIABAAQgEAMAAARQAAAPAEALIAJAAIAAAPQAAANgUAJIgLADIgGADgAAjA9IAAgGIANAAIAAAGgAANA9IAAgGIANAAIAAAGgAgHA9IAAgGIALAAIAAAGgAgdA9IAAgGIANAAIAAAGgAg0A9IAAgGIAOAAIAAAGgAhJA9IAAgGIANAAIAAAGgAhqA9IgGgEIgBgCIgBAAIAgAAIAAAGg");
	this.shape_2.setTransform(70.3,-8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#47A932").s().p("AhmA4IgBgCQgDgGAAgIIAAgGIAAhbIDVAAIAAAFIjQAAIAABuIgBgCg");
	this.shape_3.setTransform(69,-8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABUAQIAAgfIAIAAIAAAfgAA6AQIAAgfIAJAAIAAAfgAAlAQIAAgfIAJAAIAAAfgAAPAQIAAgfIAJAAIAAAfgAgEAQIAAgfIAHAAIAAAfgAgaAQIAAgfIAIAAIAAAfgAgwAQIAAgfIAJAAIAAAfgAhFAQIAAgfIAJAAIAAAfgAhbAQIAAgfIAIAAIAAAfg");
	this.shape_4.setTransform(68.8,-7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2E7522").s().p("ABDA3IAAgBIgJAAIAAABIgNAAIAAgBIgIAAIAAABIgOAAIAAgBIgIAAIAAABIgNAAIAAgBIgIAAIAAABIgNAAIAAgBIgJAAIAAABIgNAAIAAgBIgIAAIAAABIgOAAIAAgBIgJAAIAAABIgfAAIAAhtIDPAAIAABcQAAAGgGAKIAAABgABPAgIAIAAIAAggIgIAAgAA2AgIAJAAIAAggIgJAAgAAgAgIAJAAIAAggIgJAAgAAKAgIAJAAIAAggIgJAAgAgJAgIAJAAIAAggIgJAAgAgfAgIAJAAIAAggIgJAAgAg1AgIAJAAIAAggIgJAAgAhKAgIAJAAIAAggIgJAAgAhgAgIAJAAIAAggIgJAAg");
	this.shape_5.setTransform(69.3,-8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhOANIAAgZICdAAIAAAZg");
	this.shape_6.setTransform(90,-16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#171717").s().p("ABUg2QAGA2gGA3QgLg3ALg2gAhSAxIgDgPIgBgQICcAAIAEAQIACAPg");
	this.shape_7.setTransform(90.9,-17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B8B8B8").s().p("AhQAIQABgIACgHICeAAQgCAHgBAIg");
	this.shape_8.setTransform(90.4,-21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#636363").s().p("AhPAMIABgXICeAAQgCALAAAMg");
	this.shape_9.setTransform(90.1,-19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7B7B7B").s().p("AhUA3QgLg3ALg2ICuAAQgKA2AKA3gAhPgfIgBAZIAAAYIABAQIAEAPICeAAIgDgPIgDgQIAAgYQAAgNACgMQACgJACgJIieAAQgDAJgBAJg");
	this.shape_10.setTransform(90.2,-17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D0D0D").s().p("AgEAXQgDgJAAgOQAAgNADgLQACgJACAAQAEAAACAJQACALAAANQAAAOgCAJQgCAMgEAAQgCAAgCgMg");
	this.shape_11.setTransform(40.1,4.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#717171").s().p("AgNBYQARgzAAhkIAAgjIAAgGIAKABIAAAnQAABwgUA5IgHgRg");
	this.shape_12.setTransform(40.8,11.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5C5C5C").s().p("AAACRIgDgMQgEgPgDgSQgCgGAAgIQgEgWgBgYIgBgIIAAgOIAAgVIAAgXIABgVQABgZAEgWIABgHIABgHQADgSAEgPIACgHIAABUQAFASAPADIAAAGIAAAjQAABkgTAzIAAgEg");
	this.shape_13.setTransform(39.3,5.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D0D0D").s().p("ABTCaIgIgVIiKAAQAFALgCAKIgIAAIgKgVIgGgMQgFgPgEgSQgCgGAAgIQgEgWgCgYIgBgIICxAAIABAIQACAYADAWQABAIACAGQACASAFAPIADAMIABAEIAHARgAhEB5ICLAAQgFgPgCgSIiNAAQAEASAFAPgAhPBKICMAAQgDgWgBgYIiOAAQABAYAFAWgAhdg7QABgZAFgWIAIAAQgFAWgBAZgAhVh4QAEgSAFgPIAIAAQgFAPgEASg");
	this.shape_14.setTransform(29.8,6.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgQBhIAAgYIAAgWIAIAAIgBAWIABAYgAAGhLQAEgKAGgLQACALgEAKg");
	this.shape_15.setTransform(21.9,-2.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#464646").s().p("ABkBBQgPgEgHgSIAAhSIgCAIQgEAPgDAQIgBAGIixAAIACgGQAEgQAFgPIAFgNIALgVIAIAAQgGALgFAKIAIAAICJAAIAJgVIATAAQASAvAEBUIgKgBgAhjAAIAIAAICNAAQACgQAFgPIiLAAIgIAAQgFAPgEAQg");
	this.shape_16.setTransform(31.2,-5.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#202020").s().p("AhbBDIgBgOIAAgKIAAgNIAAgNIAAgKQAAgJACgKQACgZAEgWIAAgHICxAAIgBAHQgEAWgBAZIgBATIAAAXIAAAXIAAAOgAhUAeIAAAXIAIAAICPAAIgBgXIABgXIiPAAIgIAAIAAAXgAhSgMIAHAAICPAAQABgZADgWIiNAAIgIAAQgEAWgBAZg");
	this.shape_17.setTransform(28.7,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8A8A8A").s().p("AANCqQgGgJgFgLIgDgMQgFgPgEgSQgCgHgBgHQgEgWgBgZIgBgHIAAgOIAAgKIAAgNIAAgLIAAgKIABgVQABgaAEgVIABgHIACgHQAEgSAFgPIADgMQAFgLAGgKIAHAAIgKAVIgFAMQgFAPgCASIgCAHIgBAHQgDAVgCAaQgCAKAAALIAAAKIAAALIAAANIAAAKIABAOIABAHQACAZADAWQABAHACAHQACASAFAPIAFAMIAKAUg");
	this.shape_18.setTransform(20.7,4.6);

	this.instance = new lib.Tank_12GaugeCartridge();
	this.instance.setTransform(28.3,11.1,1.056,1.056);
	this.instance.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance.cache(-10,-5,19,11);

	this.instance_1 = new lib.Tank_12GaugeCartridge();
	this.instance_1.setTransform(29.3,16.2,1.003,1.003);
	this.instance_1.filters = [new cjs.ColorFilter(0.6, 0.6, 0.6, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-10,-5,19,11);

	this.instance_2 = new lib.Tank_12GaugeCartridge();
	this.instance_2.setTransform(30.8,18.6,0.953,0.953);
	this.instance_2.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-10,-5,19,11);

	this.instance_3 = new lib.Tank_12GaugeCartridge();
	this.instance_3.setTransform(28.1,4.4,1.111,1.111);
	this.instance_3.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-10,-5,19,11);

	this.instance_4 = new lib.Tank_12GaugeCartridge();
	this.instance_4.setTransform(28.3,-1.9,1.056,1.056);
	this.instance_4.filters = [new cjs.ColorFilter(0.8, 0.8, 0.8, 1, 0, 0, 0, 0)];
	this.instance_4.cache(-10,-5,19,11);

	this.instance_5 = new lib.Tank_12GaugeCartridge();
	this.instance_5.setTransform(29.3,-7,1.003,1.003);
	this.instance_5.filters = [new cjs.ColorFilter(0.9, 0.9, 0.9, 1, 0, 0, 0, 0)];
	this.instance_5.cache(-10,-5,19,11);

	this.instance_6 = new lib.Tank_12GaugeCartridge();
	this.instance_6.setTransform(30.9,-9.3,0.953,0.953);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#205418").s().p("AAgAWIAAgkIAAgHIAWAAIAAAHIgBAkgAgKAWIAAgkIAAgHIAVAAIAAAHIgBAkgAg0AWIgBgkIAAgHIAWAAIAAAHIAAAkg");
	this.shape_19.setTransform(13.2,-12.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6ACB49").s().p("AA2AIIAAgIIgWAAIAAAIIgVAAIAAgIIgVAAIAAAIIgVAAIAAgIIgWAAIAAAIIgVAAIAAgPICVAAIAAAPg");
	this.shape_20.setTransform(13.2,-14.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#419F2D").s().p("AA1AWIAAgHIABgkIAVAAIAAArgAAKAWIAAgHIABgkIAVAAIAAAkIgBAHgAgfAWIAAgHIAAgkIAVAAIAAAkIAAAHgAhKAWIAAgrIAVAAIABAkIAAAHg");
	this.shape_21.setTransform(13.2,-11.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#327823").s().p("AggAsQAegyAjg2QgbA6gGA1IgeAKIgCgRg");
	this.shape_22.setTransform(-5.7,7.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3C3C3C").s().p("AgIADIABgYIAGAMIAJAUIAAALg");
	this.shape_23.setTransform(-7.8,-10.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#56B535").s().p("AgDAAQAAgIAEgIIAAACIAAAIQABAEACACIgEARQgDgIAAgJg");
	this.shape_24.setTransform(-6,-16.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#25571A").s().p("AgZAgIARhPIAigHIAAAKIgEgBQgNAAgJAKIgEAGQgGAIAAAKQAAAJAEAGIACAEIAEAEQABADAEADQAHAEAKAAIAEAAIgBARIgnAQg");
	this.shape_25.setTransform(-5.3,-14.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#205418").s().p("Ag6BJIgDgLIAegKQAJg2AYg6QASgVAPgEQATAKAIAOQgtBJgGAvQgTAJAIASg");
	this.shape_26.setTransform(-2.7,7.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B2B2B").s().p("AASByQgpgIgpgNIgLgEIgCgEQgKgSABgXQASgdAYgfIATgZQAigzgxgXIAPAAQAhASgJAaIhRB3QACATALASQAtANAxAJIALgUQgWgeA/hrIAKAFQgMAPgHAOQgkA6ANAuQgIASgIAKIgLgCg");
	this.shape_27.setTransform(-2.8,6.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#636363").s().p("AANAhIAAgdIAAgQIgdgYIAhATIAAA2g");
	this.shape_28.setTransform(51.8,-17.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#242424").s().p("AhcAMIAAgXIC5AAIAAAIIgbAPg");
	this.shape_29.setTransform(41.4,-13.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#606060").s().p("AhPAhIgKgEQBWAJAZgmQAOgWAegLIACgBIAWAAIgSAFIgCAAQgdALgPAVQgVAgg3AAQgNAAgQgCgAgwgiIATAAQgXAMARAeQgfgVASgVg");
	this.shape_30.setTransform(14,-1.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#707070").s().p("ACRAhIAFgFIAJAJIgDAGgAgBAlIAHgJIAEAFIgKAKgAgfARIAYgfIACAFIgYAfgAksANIBtgpIABAFIhwAsgAD5gOIACAAIAwgcIAEADIgJAGIgHAEIgiAUg");
	this.shape_31.setTransform(23.2,-9.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0D0D0D").s().p("AhCBZQgLgSgCgTIBPh2QALgaghgSIBgAAQgPAgAIASIgNgLQgLgHgJAAQgZAAgQAiIhDBiQACAVASANIA6ANQgCgPANgFQAEgCAGAAQADgnAagzQAHgOAJgNIAFgKIAFADQhABqAXAeIgMAUQgxgJgsgNgAAOBbQgCACAAAEQAAADACADQACACAEAAQAEAAABgCQADgDAAgDQAAgEgDgCQgBgDgEAAQgEAAgCADg");
	this.shape_32.setTransform(-3,6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#419F2D").s().p("AiZBlQAGgwAshJQgIgNgSgLQgQAEgRAWQglA0geA0IACARIADAMQgSgNgCgVIBDhjQASghAZAAQAJAAALAHIANALQACAHAGAEIgFAKQgJAMgHAOQgaA1gDAnQgGAAgEACQgNAFACAPQgKgTAVgIgABmhuIgHgRICWAAIgIARg");
	this.shape_33.setTransform(14,3.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C6C6C6").s().p("Ak4AsIALgFIgBAaIgPAHgAi2AHIADgYIAigRIgEAdIgiAOgAEcgqIgEgdIAiATIAEAdg");
	this.shape_34.setTransform(21.6,-16.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AEzBJIAAhFIAHgEIAABPgAASBPIgUAAIg2AAIgtAAIgTAAIgTAAIgIAAIgTAAIhjAAIgPAAIgXAAIAFgGIE6AAIAEAGgAiqALIgBgFIgFgTIgCgMIAhgQIATglIgOAqIghAPIARBKIgDAEgAk5AkIAPgHIgCAHIgGACg");
	this.shape_35.setTransform(21.2,-13.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B6E1F").s().p("AAQAjQAKgBAIgIIACgCQALgKAAgOIAAgDQgCgLgJgJQgJgJgLAAIAAgJIAwgJIAKA0IADAMIgGAPIg4AWgAgqAgIgLAFIgSAGIgFgLQAegGAEgaQAAgFgIgYIAggFIgSBPg");
	this.shape_36.setTransform(-4.3,-16);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#98DA81").s().p("AADA7QgIAAgHgEIAEgSQAIAEAIAAQALAAAJgIIgCARQgIAIgKABIgFAAgAg3gqIB1gQIgDAKIh4AWg");
	this.shape_37.setTransform(-3.4,-18.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#86D36B").s().p("AhJAfQAegEADgZQABgEgKgaIB7gVIAAAEIgwAJIgiAHIggAGQAIAXAAAEQgEAcgeAGIAFAKIgFACg");
	this.shape_38.setTransform(-5.3,-16.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6ACB49").s().p("AAbDFQgCgDAAgDQAAgEACgCQACgDAEAAQAEAAABADQADACAAAEQAAADgDADQgBACgEAAQgEAAgCgCgABEgfQgCgDAAgDQAAgEACgCQAEgDADAAQADAAACADQADACAAAEQAAADgDADQgCACgDAAQgDAAgEgCgAA+g4QgCgCAAgDQAAgEACgDQACgCADAAQAFAAACACQACADAAAEQAAADgCACQgCADgFAAQgDAAgCgDgAgKhkIgEgDIgCgEIAFgTQACAGAEAEIAFAFIgDASQgEgDgDgEgAAlhzIACgBIABgBQAFgFACgGIAAAEQABAPgLAJIgCACgAhMhzQASgDAJgKQgDAagfAEgAg0iwIB4gWIgDARIh8AWg");
	this.shape_39.setTransform(-4.3,-3.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A0DD8C").s().p("AgFgJIAAgFIADgSIACgKIAGA4IgDAbIAAACg");
	this.shape_40.setTransform(2.9,-20.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#969696").s().p("ABiBdIAEgFICAAAIAHAFgAgtBTIgFgEICOAAIgEAEgAjsBIIADgFICQAAIADAFgAg+AnIgCgEIEAAAIAEAEgAjag4IAUglIgFAeIgTAlg");
	this.shape_41.setTransform(28.9,-14.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#6ACB49","#323232"],[0,1],0.3,-5.8,-0.1,6.8).s().p("AjkA3IgRhKIAggPIAPAAIgBgFQAAgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAHIgBAFIARAAIgBgFQAAgHAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAAAFIAQAAIgBgFQAAgHADgEQAGgEAFAAQAGAAAEAEQAFAEAAAHQAAADgCACIARAAIgBgFQAAgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAHIgBAFIARAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQACAEAAAHIAAAFIAQAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQAFAEAAAHQAAADgCACIARAAIgBgFQAAgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAHIgBAFIARAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQAEAEAAAHIAAAFIAQAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQAFAEAAAHQAAADgCACIAVAAQgCgCAAgDQAAgHAEgEQAFgEAGAAQAGAAAEAEQAFAEAAAHQAAADgCACIAaAAIAAAdIgwAbIgBAAIkBAAIgYAhgAAjAHIChAAIAbgPIAAgIIi8AAg");
	this.shape_42.setTransform(28.4,-13.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#515151").s().p("Ak7AkIAHACIAIAjIgGAGgAkuAkIACgHIASAUIAAgLIAqgQIA4gWIAGgNIAFATIhtArIgCAHgAEigkQACgCAAgDQAAgHgFgEQgEgEgGAAQgGAAgFAEQgEAEAAAHQAAADACACIgVAAQACgCAAgDQAAgHgFgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgQAAIAAgFQAAgHgEgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgRAAIABgFQAAgHgEgEQgEgEgHAAQgFAAgFAEQgEAEAAAHIABAFIgRAAQACgCAAgDQAAgHgFgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgQAAIAAgFQAAgHgEgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgRAAIABgFQAAgHgEgEQgEgEgHAAQgFAAgFAEQgDAEAAAHIAAAFIgPAAQACgCAAgDQAAgHgFgEQgEgEgGAAQgFAAgGAEQgDAEAAAHIABAFIgQAAIAAgFQAAgHgEgEQgEgEgGAAQgGAAgEAEQgEAEAAAHIABAFIgRAAIABgFQAAgHgEgEQgEgEgHAAQgFAAgFAEQgEAEAAAHIABAFIgPAAIAPgqIARAAIAAAJIASAAIAAgJIATAAIAAAJIARAAIAAgJIASAAIAAAJIATAAIAAgJIARAAIAAAJIAQAAIAAgJIATAAIAAAJIASAAIAAgJIARAAIAAAJIATAAIAAgJIASAAIAAAJIASAAIAAgJIARAAIAAAJIATAAIAAgJIASAAIAAAJIARAAIAAgJIATAAIAAAJIASAAIAAgJIASAAIAAAJIASAAIAAgJIAUAAIAeAYIAAASg");
	this.shape_43.setTransform(21.4,-13.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#202020").s().p("AigB5IgGgEQgFgEgDgHQgIgSAQggIATAAQgVAkAOANQAGAFALACQAoAEAagPQAPgJADgJQAKgWgNgFIA2AAIgCAAQgdALgPAXQgWAhg9AAQgOAAgPgCgAiLA4IATAAQgSAVAfAXQgrgKALgigACzAyIgKgJIiQAAIgJAJIk6AAIgIgjIAGgCIASAUIBwgrIALAsICWAAIAVghIEFAAIAigSIAABDgAi5AcQgCACAAAEQAAAEACACQADADAEAAQADAAABgDQAEgCAAgEQAAgEgEgCQgBgCgDAAQgEAAgDACgAAeAdICHAAIAIgRIiXAAgAjAAEQgBACAAAEQAAAEABABQADADADAAQAEAAACgDQADgBAAgEQAAgEgDgCQgCgCgEAAQgDAAgDACgAD6hcIAAgJIgBgVIAQAAIADAVIAAAJgADWhcIAAgJIgBgVIASAAIABAVIAAAJgACyhcIAAgJIgBgVIASAAIAAAVIAAAJgACNhcIAAgJIAAgVIASAAIABAVIAAAJgABqhcIAAgJIAAgVIARAAIABAVIAAAJgABFhcIAAgJIAAgVIATAAIAAAVIAAAJgAAihcIAAgJIAAgVIASAAIAAAVIAAAJgAgBhcIAAgJIABgVIAQAAIgBAVIAAAJgAglhcIAAgJIABgVIASAAIAAAVIAAAJgAhIhcIAAgJIABgVIASAAIgCAVIAAAJgAhthcIAAgJIADgVIARAAIgCAVIAAAJg");
	this.shape_44.setTransform(21.2,-10.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B5B5B5").s().p("AC7AOIgDgTIgBgIIAUAAIAEAbgACXAOIgBgTIgBgIIATAAIAAAIIACATgABzAOIAAgTIgBgIIASAAIAAAIIACATgABPAOIAAgTIAAgIIARAAIAAAIIABATgAArAOIAAgTIgBgIIATAAIAAAIIAAATgAAIAOIgBgTIAAgIIASAAIAAAIIAAATgAgbAOIAAgTIAAgIIASAAIAAAIIAAATgAg/AOIABgTIAAgIIASAAIAAAIIgBATgAhjAOIABgTIAAgIIASAAIgBAIIAAATgAiHAOIABgTIABgIIARAAIAAAIIgBATgAirAOIABgTIABgIIARAAIAAAIIgBATgAjOAOIAEgbIAPAAIAAAIIgCATg");
	this.shape_45.setTransform(29.3,-22.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#419F2D").s().p("AgOAIIgCAAIgEgJIAAgCIAAgEIAEAAIAhABIAEANIgeABg");
	this.shape_46.setTransform(88.6,-7.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#205418").s().p("AAOAPIgiAAIgEAAIAAgIIgBgHIAEAAIAkAAIAAgJIgkABIgDAAIAAgHIADAAIAlAAIAEgOQAHAOgBASQgCATgGAIg");
	this.shape_47.setTransform(89,-9.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#232323").s().p("AgJAlQgCgBAAgFIAAgMIAAgDIAAgFIAAgLIAAgUIAAgQIAJAAIgDAQQgBAKAAAKIABALIABAFIAAADIADALQAAABABAAQAAgBAAAAQAAAAAAAAQABgBAAgBIAEgEIACAAIAFAAIgEADIgNAIIgDACg");
	this.shape_48.setTransform(86.3,-9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#153B11").s().p("AgRAOIgFAAIABgIIAEAAIAjgBIAAAJgAgRAAIgEAAIADgLIABgCIAoAAIgEANg");
	this.shape_49.setTransform(88.7,-11.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAAAiIgDgLIAAgEIgBgEIgBgNQAAgJABgKIADgQIAGAAIgBACIgDAMIAAAHIgBAJIABAHIABAHIAAAEIAAABIAEALIgEAFQAAAAgBABQAAAAgBAAQAAABAAAAQAAAAAAAAIAAAAg");
	this.shape_50.setTransform(86.2,-9.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#171717").s().p("AjfAHQABgHAEgGIG6AAIAAANg");
	this.shape_51.setTransform(61.7,-12);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9F9F9F").s().p("AjcACIgCgDIG9AAIAAADg");
	this.shape_52.setTransform(61.8,-7.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#626262").s().p("ADfAlQgEAAAAgGIAAgMIAAgDIAAgFIm9AAIgCgGIgCgFIHBAAIAAgUIAAgQIAKAAIAAAQIAAAUIAAALIAAAFIAAADIAAAMQAAAFACABg");
	this.shape_53.setTransform(62.2,-9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AjfAKIAAgCIgBgFQAAgEABgFIABgDIG/AAIAAATg");
	this.shape_54.setTransform(61.6,-10.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2C2C2C").s().p("AC1ABImFAAIgMAAIgBgBIG7AAIAAABg");
	this.shape_55.setTransform(61.9,-7.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B8B8B8").s().p("AjyADIAAgLQEaAADIAIIADAJQjLgGkaAAg");
	this.shape_56.setTransform(73.1,-19.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7B7B7B").s().p("Aj1AhQEeAADEgKQADgIAAgIIAAgJIAAgOIgDgJQjIgJkaAAIAAgHQEdAADLAMQAGAdgGAeQjHAMkhAAg");
	this.shape_57.setTransform(73.4,-17.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#171717").s().p("AjygHQEaAADLgEQAAAHgDAHQjEAJkeABg");
	this.shape_58.setTransform(73.1,-15);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AjygBQEaAADLgFIAAAJQjLAEkaAAg");
	this.shape_59.setTransform(73.1,-16.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#636363").s().p("AjygLQEaAADLAFIAAANQjLAFkaAAg");
	this.shape_60.setTransform(73.1,-18.1);

	this.addChild(this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.7,-24.4,112.4,46.5);


(lib.GUN_TANK_11 = function() {
	this.initialize();

	// Calque 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("AgKA3QAFgKABgHIAAhbIAAgGIAEAAQAAARAFAHIABAAQgEALAAARQAAAQAEAKIAJAAIAAAPQAAARgdAJIAEgFg");
	this.shape.setTransform(80.3,-7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626262").s().p("AhmA5IgBgDQgDgFAAgJIAAgGIAAhbIDVAAIAAAGIjQAAIAABtIgBgBg");
	this.shape_1.setTransform(69,-7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#47A932").s().p("AAqAHIgQgKIg3AAIgQAKIguAAIAAgNIC3AAIAAANg");
	this.shape_2.setTransform(68.8,-10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E7522").s().p("AAlAHIgPgJIgvAAIgOAJIg0AAIAAgDIAuAAIAQgKIA3AAIAQAKIAyAAIAAADg");
	this.shape_3.setTransform(68.8,-9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABUAkIAAgiIAIAAIAAAigAA6AkIAAgiIAJAAIAAAigAAlAkIAAgiIAJAAIAAAigAAPAkIAAgiIAJAAIAAAigAgEAkIAAgiIAHAAIAAAigAgaAkIAAgiIAIAAIAAAigAgwAkIAAgiIAJAAIAAAigAhFAkIAAgiIAJAAIAAAigAhbAkIAAgiIAIAAIAAAigAhbgfIAAgEIC3AAIAAAEg");
	this.shape_4.setTransform(68.8,-7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ABDA6IAAgGIgJAAIAAAGIgNAAIAAgGIgIAAIAAAGIgOAAIAAgGIgIAAIAAAGIgNAAIAAgGIgIAAIAAAGIgNAAIAAgGIgJAAIAAAGIgNAAIAAgGIgIAAIAAAGIgOAAIAAgGIgJAAIAAAGIgXAAIgGgEIgBgCIgBAAIAAhuIDPAAIAABcQAAAHgGAKIgDAEIgGADgABPAcIAIAAIAAggIgIAAgAA2AcIAJAAIAAggIgJAAgAAgAcIAJAAIAAggIgJAAgAAKAcIAJAAIAAggIgJAAgAgJAcIAJAAIAAggIgJAAgAgfAcIAJAAIAAggIgJAAgAg1AcIAJAAIAAggIgJAAgAhKAcIAJAAIAAggIgJAAgAhgAcIAJAAIAAggIgJAAgAASgfIAOALIA3AAIAAgDIAAgPIAAgEIi3AAIAAAEIAAAPIAAADIA0AAIAOgLg");
	this.shape_5.setTransform(69.3,-6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#232323").s().p("AgXAiIALgdIgSgBIAGgOIATACIAJgbIASABIgKAcIATACIgHANIgTgCIgJAdg");
	this.shape_6.setTransform(-3.5,7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#3BAB2F").ss(0.8,1,0,3).p("AAWgiIgLAcIAUACIgHANIgUgBIgJAcIgTgBIALgeIgRgBIAGgOIATACIAJgbg");
	this.shape_7.setTransform(-3.4,7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhBALIAAgVICDAAIAAAVg");
	this.shape_8.setTransform(90.1,-16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8B8B8").s().p("AhCAHIACgNICDAAIgDANg");
	this.shape_9.setTransform(90.4,-20.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#636363").s().p("AhCAJIACgRICDAAIgCARg");
	this.shape_10.setTransform(90.1,-18.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7B7B7B").s().p("AhGAtQgJgtAJgsICSAAQgKAsAKAtgAhAgZIgCATIAAAVIACAOIABAMICEAAIgCgMIgDgOIAAgVIACgTIADgPIiEAAIgBAPg");
	this.shape_11.setTransform(90.2,-17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#171717").s().p("ABGgsQAFAsgFAtQgKgtAKgsgAhEApIgCgMIgCgOICDAAIACAOIACAMg");
	this.shape_12.setTransform(90.8,-17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#205418").s().p("AAgAWIAAgkIAAgHIAWAAIAAAHIgBAkgAgKAWIAAgkIAAgHIAVAAIAAAHIgBAkgAg0AWIgBgkIAAgHIAWAAIAAAHIAAAkg");
	this.shape_13.setTransform(13.2,-12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6ACB49").s().p("AA2AIIAAgIIgWAAIAAAIIgVAAIAAgIIgVAAIAAAIIgVAAIAAgIIgWAAIAAAIIgVAAIAAgPICVAAIAAAPg");
	this.shape_14.setTransform(13.2,-14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#419F2D").s().p("AA1AWIAAgHIABgkIAVAAIAAArgAAKAWIAAgHIABgkIAVAAIAAAkIgBAHgAgfAWIAAgHIAAgkIAVAAIAAAkIAAAHgAhKAWIAAgrIAVAAIABAkIAAAHg");
	this.shape_15.setTransform(13.2,-11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#327823").s().p("AggAsQAegyAjg2QgbA6gGA1IgeAKIgCgRg");
	this.shape_16.setTransform(-5.7,7.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3C3C3C").s().p("AgIgFIAEgHIAMAOIAAALg");
	this.shape_17.setTransform(-7.8,-9.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6ACB49").s().p("AAOCTQgCgDAAgDQAAgEACgCQACgDAEAAQAEAAABADQADACAAAEQAAADgDADQgBACgEAAQgEAAgCgCgAgah/IAzgVIAAAHIg0AWg");
	this.shape_18.setTransform(-3,1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#808080").s().p("AghAGIAAABIgBABIABgCgAAjgHIAAABIgCABg");
	this.shape_19.setTransform(-6.6,-19.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B2B2B").s().p("AASByQgpgIgpgNIgLgEIgCgEQgKgSABgXQASgdAYgfIATgZQAigzgxgXIAPAAQAhASgJAaIhRB3QACATALASQAtANAxAJIALgUQgWgeA/hrIAKAFQgMAPgHAOQgkA6ANAuQgIASgIAKIgLgCg");
	this.shape_20.setTransform(-2.8,6.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#636363").s().p("AANAhIAAgdIAAgQIgdgYIAhATIAAA2g");
	this.shape_21.setTransform(51.8,-17.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#242424").s().p("AhcAMIAAgXIC5AAIAAAIIgbAPg");
	this.shape_22.setTransform(41.4,-13.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#606060").s().p("AhPAhIgKgEQBWAJAZgmQAOgWAegLIACgBIAWAAIgSAFIgCAAQgdALgPAVQgVAgg3AAQgNAAgQgCgAgwgiIATAAQgXAMARAeQgfgVASgVg");
	this.shape_23.setTransform(14,-1.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#707070").s().p("ACRAhIAFgFIAJAJIgDAGgAgBAlIAHgJIAEAFIgKAKgAgfARIAYgfIACAFIgYAfgAksANIBtgpIABAFIhwAsgAD5gOIACAAIAwgcIAEADIgJAGIgHAEIgiAUg");
	this.shape_24.setTransform(23.2,-9.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0D0D0D").s().p("AhCBZQgLgSgCgTIBPh2QALgaghgSIBgAAQgPAgAIASIgNgLQgLgHgJAAQgZAAgQAiIhDBiQACAVASANIA6ANQgCgPANgFQAEgCAGAAQADgnAagzQAHgOAJgNIAFgKIAFADQhABqAXAeIgMAUQgxgJgsgNgAAOBbQgCACAAAEQAAADACADQACACAEAAQAEAAABgCQADgDAAgDQAAgEgDgCQgBgDgEAAQgEAAgCADg");
	this.shape_25.setTransform(-3,6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AEzBJIAAhFIAHgEIAABPgAASBPIgUAAIg2AAIgtAAIgTAAIgTAAIgIAAIgTAAIhjAAIgPAAIgXAAIAFgGIE6AAIAEAGgAiqALIgBgFIgFgTIgCgMIAhgQIATglIgOAqIghAPIARBKIgDAEgAk5AkIAPgHIgCAHIgGACg");
	this.shape_26.setTransform(21.2,-13.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C6C6C6").s().p("Ak4AsIANAOIgDAHIgPAHgAi2AHIAAgHIADgRIAigRIgEAdIgiAOgAEcgqIgEgdIAiATIAEAdg");
	this.shape_27.setTransform(21.6,-16.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#419F2D").s().p("AiZCmQAGgwAshLQgIgNgSgLQgQAEgRAVQglA2geA1IACARIADALQgSgMgCgVIBDhlQASghAZAAQAJgBALAIIANALQACAGAGAFIgFAKQgJAOgHANQgaA2gDAnQgGAAgEACQgNAFACAPQgKgTAVgIgABmgtIgHgRICWAAIgIARgAiPheIAAgHIALALIAAABIAAAJgAjGhpQALgBAIgIQgDAHgFAFQgKAKgMAAgAh0iDIAJgQIACALIgBAJIAAACIACANIgFAOgAjxh9QAAgMAJgKIABgBIgBAKQAAAOAJAKIABAAIgKAMQgJgJAAgOgAiMiMIAAgBQAGgBAFgDQgBAFgFAGQgGAFgIAAgAiqiUQAAgJAGgHIAEgCIgBAEQAAAIAGAGIgJAOQgGgHAAgHgAjvicIAGgIIACgEQALgLAPgBIgLAOQgMACgKAIgAipisIACgEIAGgHQAJgIALgBIgJANQgKAAgIAIg");
	this.shape_28.setTransform(14,-3.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#205418").s().p("AguCtIgDgLIAegKQAJg4AYg6QASgWAPgEQATALAIAOQgtBKgGAwQgVAJAKASgAgQhGIgNAEIgOgQIgOgOIgEgEIAAgBQgMgMAAgSQAAgJADgHQACgIAGgEIABgCIACgBQAJgJAMgCIAHgBQAIAAAIAEQAHADAHAGIABACQAAgKAFgGIABgBIADgBQAIgIAKAAQAMAAAJAJIADADQAFAGAAAGIAFAXIAGAiIgWAJIAAgBIgLgLIgzAVIgCAIIA1gXIALAPIg7AZgAg0ibIgBACQgJAKAAAMQAAANAJAKQAIAIALACIADAAQANAAAKgKQAFgFACgIQABgEAAgGQAAgMgIgKQgKgKgNAAQgLAAgKAIgAARitIgFADQgFAHgBAIQABAIAFAHQAHAFAIAAIABAAQAHAAAGgFQAFgGABgFIAAgEQAAgIgGgHQgGgFgIAAQgGAAgEACg");
	this.shape_29.setTransform(-3.9,-2.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#85D56A").s().p("AgpAKIgHABIALgLIAEgBQAJAAAHABIgJANQgHgDgIAAgAAmAHQgJgHgMAAIAIgMIABAAQAMAAAIAIIADAEIgIALIgDgEg");
	this.shape_30.setTransform(-2.9,-21.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#61C83E").s().p("AgqArQgLgBgIgIIAKgNQAJAJAMAAIACAAIgKANgAATAHQgIAAgGgGIAIgMQAHAHAIAAIABABIgJAKgAAwgSQAAgGgEgFIAIgNQAEAEABAHIAFAWIgJANgAgIgRQgHgHgIgDIAJgNQAHADAHAGQgGAGgCAJIAAgBg");
	this.shape_31.setTransform(-3.1,-16.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#969696").s().p("ABiBdIAEgFICAAAIAHAFgAgtBTIgFgEICOAAIgEAEgAjsBIIADgFICQAAIADAFgAg+AnIgCgEIEAAAIAEAEgAjag4IAUglIgFAeIgTAlg");
	this.shape_32.setTransform(28.9,-14.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#1F1F1F","#333333"],[0,1],-0.2,-4.7,-0.2,0.3).s().p("AjkA3IgRhKIAggPIAPAAIgBgFQAAgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAHIgBAFIARAAIgBgFQAAgHAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAHIAAAFIAQAAIgBgFQAAgHADgEQAGgEAFAAQAGAAAEAEQAFAEAAAHQAAADgCACIARAAIgBgFQAAgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAHIgBAFIARAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQACAEAAAHIAAAFIAQAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQAFAEAAAHQAAADgCACIARAAIgBgFQAAgHAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAHIgBAFIARAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQAEAEAAAHIAAAFIAQAAIgBgFQAAgHAEgEQAFgEAFAAQAGAAAEAEQAFAEAAAHQAAADgCACIAVAAQgCgCAAgDQAAgHAEgEQAFgEAGAAQAGAAAEAEQAFAEAAAHQAAADgCACIAaAAIAAAdIgwAbIgBAAIkBAAIgYAhgAAjAHIChAAIAbgPIAAgIIi8AAg");
	this.shape_33.setTransform(28.4,-13.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#515151").s().p("Ak7AkIAHACIAIAjIgGAGgAkuAkIACgHIASAUIAAgLIAMgFIACAJIA+gYIAAgJIAWgJIAGgNIAFATIhtArIgCAHgAEigkQACgCAAgDQAAgHgFgEQgEgEgGAAQgGAAgFAEQgEAEAAAHQAAADACACIgVAAQACgCAAgDQAAgHgFgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgQAAIAAgFQAAgHgEgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgRAAIABgFQAAgHgEgEQgEgEgHAAQgFAAgFAEQgEAEAAAHIABAFIgRAAQACgCAAgDQAAgHgFgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgQAAIAAgFQAAgHgEgEQgEgEgGAAQgFAAgFAEQgEAEAAAHIABAFIgRAAIABgFQAAgHgEgEQgEgEgHAAQgFAAgFAEQgDAEAAAHIAAAFIgPAAQACgCAAgDQAAgHgFgEQgEgEgGAAQgFAAgGAEQgDAEAAAHIABAFIgQAAIAAgFQAAgHgEgEQgEgEgGAAQgGAAgEAEQgEAEAAAHIABAFIgRAAIABgFQAAgHgEgEQgEgEgHAAQgFAAgFAEQgEAEAAAHIABAFIgPAAIAPgqIARAAIAAAJIASAAIAAgJIATAAIAAAJIARAAIAAgJIASAAIAAAJIATAAIAAgJIARAAIAAAJIAQAAIAAgJIATAAIAAAJIASAAIAAgJIARAAIAAAJIATAAIAAgJIASAAIAAAJIASAAIAAgJIARAAIAAAJIATAAIAAgJIASAAIAAAJIARAAIAAgJIATAAIAAAJIASAAIAAgJIASAAIAAAJIASAAIAAgJIAUAAIAeAYIAAASg");
	this.shape_34.setTransform(21.4,-13.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#202020").s().p("AigB5IgGgEQgFgEgDgHQgIgSAQggIATAAQgVAkAOANQAGAFALACQAoAEAagPQAPgJADgJQAKgWgNgFIA2AAIgCAAQgdALgPAXQgWAhg9AAQgOAAgPgCgAiLA4IATAAQgSAVAfAXQgrgKALgigACzAyIgKgJIiQAAIgJAJIk6AAIgIgjIAGgCIASAUIBwgrIALAsICWAAIAVghIEFAAIAigSIAABDgAAeAdICHAAIAIgRIiXAAgAD6hcIAAgJIgBgVIAQAAIADAVIAAAJgADWhcIAAgJIgBgVIASAAIABAVIAAAJgACyhcIAAgJIgBgVIASAAIAAAVIAAAJgACNhcIAAgJIAAgVIASAAIABAVIAAAJgABqhcIAAgJIAAgVIARAAIABAVIAAAJgABFhcIAAgJIAAgVIATAAIAAAVIAAAJgAAihcIAAgJIAAgVIASAAIAAAVIAAAJgAgBhcIAAgJIABgVIAQAAIgBAVIAAAJgAglhcIAAgJIABgVIASAAIAAAVIAAAJgAhIhcIAAgJIABgVIASAAIgCAVIAAAJgAhthcIAAgJIADgVIARAAIgCAVIAAAJg");
	this.shape_35.setTransform(21.2,-10.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B5B5B5").s().p("Aj6AgIABAAIAAABgADngCIgDgVIgBgJIAUAAIAEAegADDgCIgBgVIgBgJIASAAIABAJIABAVgACegCIAAgVIAAgJIARAAIABAJIABAVgAB7gCIgBgVIAAgJIASAAIAAAJIABAVgABXgCIgBgVIAAgJIASAAIAAAJIAAAVgAAzgCIAAgVIAAgJIARAAIABAJIAAAVgAAPgCIAAgVIAAgJIARAAIAAAJIAAAVgAgUgCIABgVIAAgJIASAAIAAAJIAAAVgAg3gCIAAgVIABgJIARAAIAAAJIgBAVgAhcgCIACgVIABgJIARAAIgBAJIgBAVgAiAgCIACgVIABgJIARAAIAAAJIgBAVgAijgCIAFgeIAPAAIAAAJIgDAVg");
	this.shape_36.setTransform(24.9,-20.7);

	this.instance = new lib.Tank_12GaugeCartridge();
	this.instance.setTransform(32.1,11.7,1.004,1.003,0,-4.3,-1.3);
	this.instance.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance.cache(-10,-5,19,11);

	this.instance_1 = new lib.Tank_12GaugeCartridge();
	this.instance_1.setTransform(31.6,4.6,1.004,1.003,0,-4.3,-1.3);
	this.instance_1.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-10,-5,19,11);

	this.instance_2 = new lib.Tank_12GaugeCartridge();
	this.instance_2.setTransform(31.3,-2.7,1.004,1.003,0,-4.3,-1.3);
	this.instance_2.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-10,-5,19,11);

	this.instance_3 = new lib.Tank_12GaugeCartridge();
	this.instance_3.setTransform(30.9,-9.7,1.004,1.003,0,-4.3,-1.3);
	this.instance_3.filters = [new cjs.ColorFilter(0.75, 0.75, 0.75, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-10,-5,19,11);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#202020").s().p("AhSiLIAaAAIAGAAIAMAAIA9AAIAGAAIALAAIAdAAIAOEIIiUAPg");
	this.shape_37.setTransform(31.4,2.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AhfiQIAGAAIAQEcICjgRIgRkLIAGAAIAREQIiuARg");
	this.shape_38.setTransform(31.5,2.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AhZiOIAGAAIAREXICUgPIgOkIIAFAAIARELIijARg");
	this.shape_39.setTransform(31.5,2.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#419F2D").s().p("AgOAIIgCAAIgEgJIAAgCIAAgEIAEAAIAhABIAEANIgeABg");
	this.shape_40.setTransform(88.6,-7.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#205418").s().p("AAOAPIgiAAIgEAAIAAgIIgBgHIAEAAIAkAAIAAgJIgkABIgDAAIAAgHIADAAIAlAAIAEgOQAHAOgBASQgCATgGAIg");
	this.shape_41.setTransform(89,-9.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#232323").s().p("AgJAlQgCgBAAgFIAAgMIAAgDIAAgFIAAgLIAAgUIAAgQIAJAAIgDAQQgBAKAAAKIABALIABAFIAAADIADALQAAABABAAQAAgBAAAAQAAAAAAAAQABgBAAgBIAEgEIACAAIAFAAIgEADIgNAIIgDACg");
	this.shape_42.setTransform(86.3,-9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAAAiIgDgLIAAgEIgBgEIgBgNQAAgJABgKIADgQIAGAAIgBACIgDAMIAAAHIgBAJIABAHIABAHIAAAEIAAABIAEALIgEAFQAAAAgBABQAAAAgBAAQAAABAAAAQAAAAAAAAIAAAAg");
	this.shape_43.setTransform(86.2,-9.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#153B11").s().p("AgRAOIgFAAIABgIIAEAAIAjgBIAAAJgAgRAAIgEAAIADgLIABgCIAoAAIgEANg");
	this.shape_44.setTransform(88.7,-11.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#171717").s().p("AjfAHQABgHAEgGIG6AAIAAANg");
	this.shape_45.setTransform(61.7,-12);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9F9F9F").s().p("AjcACIgCgDIG9AAIAAADg");
	this.shape_46.setTransform(61.8,-7.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#626262").s().p("ADfAlQgEAAAAgGIAAgMIAAgDIAAgFIm9AAIgCgGIgCgFIHBAAIAAgUIAAgQIAKAAIAAAQIAAAUIAAALIAAAFIAAADIAAAMQAAAFACABg");
	this.shape_47.setTransform(62.2,-9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AjfAKIAAgCIgBgFQAAgEABgFIABgDIG/AAIAAATg");
	this.shape_48.setTransform(61.6,-10.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2C2C2C").s().p("AC1ABImFAAIgMAAIgBgBIG7AAIAAABg");
	this.shape_49.setTransform(61.9,-7.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7B7B7B").s().p("Aj1AhQEeAADEgKQADgIAAgIIAAgJIAAgOIgDgJQjIgJkaAAIAAgHQEdAADLAMQAGAdgGAeQjHAMkhAAg");
	this.shape_50.setTransform(73.4,-17.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#171717").s().p("AjygHQEaAADLgEQAAAHgDAHQjEAJkeABg");
	this.shape_51.setTransform(73.1,-15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AjygBQEaAADLgFIAAAJQjLAEkaAAg");
	this.shape_52.setTransform(73.1,-16.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#636363").s().p("AjygLQEaAADLAFIAAANQjLAFkaAAg");
	this.shape_53.setTransform(73.1,-18.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B8B8B8").s().p("AjyADIAAgLQEaAADIAIIADAJQjLgGkaAAg");
	this.shape_54.setTransform(73.1,-19.7);

	this.addChild(this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.5,-24,109.7,42);


(lib.ANM_NUN_TANK_TORSO_RUN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tank_BrasAv
	this.instance = new lib.Tank_Bras01();
	this.instance.setTransform(4.3,-36.2,0.769,0.769,22.7,0,0,-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:7.7,regY:20.6,scaleX:0.77,rotation:0,skewX:22.9,skewY:22.8,x:4,y:-18.9},0).wait(1).to({scaleX:0.76,skewX:23.4,skewY:23.2,x:4.8,y:-18.3},0).wait(1).to({scaleX:0.76,scaleY:0.77,skewX:24.4,skewY:23.9,x:6.3,y:-17.1},0).wait(1).to({scaleX:0.75,skewX:25.9,skewY:24.9,x:8.5,y:-15.2},0).wait(1).to({scaleX:0.74,scaleY:0.77,skewX:27.8,skewY:26.2,x:11.5,y:-12.8},0).wait(1).to({scaleX:0.72,scaleY:0.77,skewX:29.8,skewY:27.5,x:14.4,y:-10.4},0).wait(1).to({scaleX:0.71,scaleY:0.77,skewX:31.3,skewY:28.6,x:16.7,y:-8.6},0).wait(1).to({scaleX:0.71,scaleY:0.76,skewX:32.3,skewY:29.3,x:18.3,y:-7.3},0).wait(1).to({scaleX:0.7,skewX:32.9,skewY:29.6,x:19.1,y:-6.7},0).wait(1).to({regX:0,regY:0,scaleX:0.7,skewX:33,skewY:29.7,x:23.2,y:-22.5},0).wait(1).to({regX:7.7,regY:20.6,scaleX:0.7,skewX:34.3,skewY:31.2,x:18.7,y:-6.8},0).wait(1).to({scaleX:0.68,skewX:38.8,skewY:36.3,x:16.5,y:-8},0).wait(1).to({scaleX:0.65,skewX:47.3,skewY:46.1,x:12.6,y:-10.4},0).wait(1).to({scaleX:0.6,skewX:59.4,skewY:60,x:7.3,y:-14.5},0).wait(1).to({scaleX:0.55,skewX:71.7,skewY:74,x:2.6,y:-19.3},0).wait(1).to({scaleX:0.52,skewX:80.4,skewY:84,x:-0.3,y:-23.2},0).wait(1).to({scaleX:0.5,skewX:85,skewY:89.3,x:-1.6,y:-25.2},0).wait(1).to({regX:0.1,regY:-0.4,scaleX:0.5,skewX:86.3,skewY:90.8,x:13.8,y:-30.6},0).wait(1).to({regX:7.7,regY:20.6,skewX:88.3,skewY:92.6,x:-2.8,y:-26.4},0).wait(1).to({skewX:90.6,skewY:94.6,x:-3.3,y:-27},0).wait(1).to({skewX:93.2,skewY:96.9,x:-3.9,y:-27.7},0).wait(1).to({skewX:96.1,skewY:99.4,x:-4.5,y:-28.5},0).wait(1).to({scaleY:0.76,skewX:99.4,skewY:102.3,x:-5.1,y:-29.3},0).wait(1).to({skewX:102.9,skewY:105.3,x:-5.8,y:-30.3},0).wait(1).to({skewX:106.7,skewY:108.7,x:-6.4,y:-31.3},0).wait(1).to({skewX:110.8,skewY:112.3,x:-7,y:-32.4},0).wait(1).to({skewX:115.3,skewY:116.2,x:-7.5,y:-33.6},0).wait(1).to({scaleY:0.76,skewX:120,skewY:120.4,x:-8,y:-34.8},0).wait(1).to({skewX:125.1,skewY:124.8,x:-8.4,y:-36.1},0).wait(1).to({regX:-0.1,regY:-0.1,skewX:130.4,skewY:129.5,x:6,y:-30},0).wait(1).to({regX:7.7,regY:20.6,scaleX:0.5,skewX:129.3,skewY:128.2,x:-8.2,y:-36.9},0).wait(1).to({scaleX:0.51,skewX:125.6,skewY:123.6,x:-6.9,y:-35.5},0).wait(1).to({scaleX:0.53,scaleY:0.76,skewX:118.4,skewY:115.1,x:-4.3,y:-33},0).wait(1).to({scaleX:0.55,scaleY:0.76,skewX:107.6,skewY:102,x:0.1,y:-28.9},0).wait(1).to({scaleX:0.59,scaleY:0.77,skewX:93.8,skewY:85.4,x:6.8,y:-23.9},0).wait(1).to({scaleX:0.62,scaleY:0.77,skewX:79.9,skewY:68.7,x:14.6,y:-19.1},0).wait(1).to({scaleX:0.65,scaleY:0.77,skewX:68.8,skewY:55.3,x:21.4,y:-15.7},0).wait(1).to({scaleX:0.67,skewX:61.5,skewY:46.5,x:26.2,y:-13.7},0).wait(1).to({scaleX:0.68,scaleY:0.77,skewX:57.7,skewY:41.9,x:28.8,y:-12.8},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.68,skewX:56.5,skewY:40.5,x:38.9,y:-24.7},0).wait(1).to({regX:7.7,regY:20.6,scaleX:0.68,scaleY:0.77,skewX:55.4,skewY:39.9,x:29.2,y:-12.4},0).wait(1).to({scaleX:0.69,scaleY:0.76,skewX:51.7,skewY:38,x:27.5,y:-12.3},0).wait(1).to({scaleX:0.71,scaleY:0.75,skewX:44.6,skewY:34.4,x:24.4,y:-12.2},0).wait(1).to({scaleX:0.74,scaleY:0.73,skewX:34.4,skewY:29.2,x:20.2,y:-12.4},0).wait(1).to({scaleX:0.77,scaleY:0.72,skewX:24.2,skewY:24,x:16.2,y:-13.2},0).wait(1).to({scaleX:0.79,scaleY:0.71,skewX:16.9,skewY:20.2,x:13.3,y:-14.1},0).wait(1).to({scaleX:0.8,scaleY:0.7,skewX:13,skewY:18.3,x:11.7,y:-14.7},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.8,scaleY:0.7,skewX:11.9,skewY:17.7,x:8.3,y:-30.9},0).wait(1).to({regX:7.7,regY:20.6,scaleX:0.8,scaleY:0.7,skewX:12.4,skewY:17.9,x:11,y:-15},0).wait(1).to({scaleX:0.8,scaleY:0.71,skewX:13,skewY:18.2,x:10.5,y:-15.3},0).wait(1).to({scaleX:0.79,scaleY:0.71,skewX:13.6,skewY:18.5,x:10.1,y:-15.5},0).wait(1).to({scaleX:0.79,scaleY:0.72,skewX:14.3,skewY:18.8,x:9.6,y:-15.8},0).wait(1).to({scaleX:0.79,scaleY:0.72,skewX:15.1,skewY:19.2,x:9.1,y:-16.1},0).wait(1).to({scaleX:0.79,scaleY:0.73,skewX:16,skewY:19.6,x:8.5,y:-16.4},0).wait(1).to({scaleX:0.79,scaleY:0.73,skewX:16.9,skewY:20,x:7.8,y:-16.8},0).wait(1).to({scaleX:0.78,scaleY:0.74,skewX:17.9,skewY:20.5,x:7.1,y:-17.2},0).wait(1).to({scaleX:0.78,scaleY:0.75,skewX:19,skewY:21,x:6.3,y:-17.6},0).wait(1).to({scaleX:0.78,scaleY:0.75,skewX:20.2,skewY:21.5,x:5.5,y:-18.1},0).wait(1).to({scaleX:0.77,scaleY:0.76,skewX:21.4,skewY:22.1,x:4.6,y:-18.6},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:0.77,scaleY:0.77,rotation:22.7,skewX:0,skewY:0,x:4.3,y:-36.2},0).wait(1));

	// Tank_ArmsWeapon01
	this.instance_1 = new lib.Tank_ArmsWeapon01();
	this.instance_1.setTransform(30.2,19,0.769,0.769,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:42.3,regY:-1.3,rotation:-37.6,x:55.3,y:-1.6},0).wait(1).to({rotation:-36.1,x:55.9,y:-0.7},0).wait(1).to({rotation:-33.4,x:57.1,y:1},0).wait(1).to({rotation:-29.2,x:58.6,y:3.7},0).wait(1).to({rotation:-23.9,x:60.4,y:7.1},0).wait(1).to({rotation:-18.6,x:61.9,y:10.7},0).wait(1).to({rotation:-14.3,x:62.9,y:13.7},0).wait(1).to({rotation:-11.5,x:63.5,y:15.6},0).wait(1).to({rotation:-10,x:63.8,y:16.7},0).wait(1).to({regX:0,regY:0,rotation:-9.6,x:32,y:23.4},0).wait(1).to({regX:42.3,regY:-1.3,rotation:-8.6,x:62.6,y:16.9},0).wait(1).to({rotation:-5.3,x:58.1,y:16.6},0).wait(1).to({rotation:1.1,x:49.2,y:16.2},0).wait(1).to({rotation:10.2,x:36,y:15.5},0).wait(1).to({rotation:19.4,x:21.8,y:14.7},0).wait(1).to({rotation:25.9,x:11.2,y:14},0).wait(1).to({rotation:29.4,x:5.4,y:13.6},0).wait(1).to({regX:0,regY:0,rotation:30.4,x:-24.9,y:-2.2},0).wait(1).to({regX:42.3,regY:-1.3,rotation:31.3,x:2.9,y:12.3},0).wait(1).to({rotation:32.4,x:2,y:11},0).wait(1).to({rotation:33.7,x:1,y:9.5},0).wait(1).to({rotation:35.1,x:-0.2,y:7.8},0).wait(1).to({rotation:36.7,x:-1.5,y:5.9},0).wait(1).to({rotation:38.4,x:-3,y:3.8},0).wait(1).to({rotation:40.2,x:-4.6,y:1.6},0).wait(1).to({rotation:42.2,x:-6.5,y:-0.9},0).wait(1).to({rotation:44.3,x:-8.4,y:-3.6},0).wait(1).to({rotation:46.6,x:-10.5,y:-6.5},0).wait(1).to({rotation:49.1,x:-12.9,y:-9.7},0).wait(1).to({regX:0,regY:0,rotation:51.7,x:-36.3,y:-38},0).wait(1).to({regX:42.3,regY:-1.3,rotation:50.8,x:-13.9,y:-12.5},0).wait(1).to({rotation:47.8,x:-8.8,y:-10.7},0).wait(1).to({rotation:42.2,x:0.4,y:-7.5},0).wait(1).to({rotation:33.6,x:14.1,y:-3},0).wait(1).to({rotation:22.7,x:30.5,y:2.1},0).wait(1).to({rotation:11.8,x:46,y:6.9},0).wait(1).to({rotation:3,x:57.5,y:10.5},0).wait(1).to({rotation:-2.8,x:64.7,y:12.9},0).wait(1).to({rotation:-5.8,x:68.4,y:14.2},0).wait(1).to({regX:0,regY:0,rotation:-6.7,x:37.3,y:19.4},0).wait(1).to({regX:42.3,regY:-1.3,rotation:-7.2,x:69.4,y:14.2},0).wait(1).to({rotation:-8.9,x:69.3,y:12.9},0).wait(1).to({rotation:-12.2,x:69,y:10.3},0).wait(1).to({rotation:-16.9,x:68.2,y:6.8},0).wait(1).to({rotation:-21.6,x:67.4,y:3.3},0).wait(1).to({rotation:-24.9,x:66.7,y:0.8},0).wait(1).to({rotation:-26.7,x:66.2,y:-0.4},0).wait(1).to({regX:0,regY:0,rotation:-27.2,x:37.6,y:15},0).wait(1).to({regX:42.3,regY:-1.3,rotation:-27.7,x:65.6,y:-0.9},0).wait(1).to({rotation:-28.3,x:65.1,y:-1},0).wait(1).to({rotation:-28.9,x:64.4},0).wait(1).to({rotation:-29.6,x:63.7},0).wait(1).to({rotation:-30.4,x:63,y:-1.2},0).wait(1).to({rotation:-31.3,x:62.1,y:-1.3},0).wait(1).to({rotation:-32.2,x:61.1,y:-1.4},0).wait(1).to({rotation:-33.2,x:60.1},0).wait(1).to({rotation:-34.3,x:59,y:-1.6},0).wait(1).to({rotation:-35.5,x:57.8},0).wait(1).to({rotation:-36.7,x:56.5,y:-1.7},0).wait(1).to({regX:0,regY:0,rotation:-38,x:30.2,y:19},0).wait(1));

	// Tank_CouvreTete01
	this.instance_2 = new lib.Tank_Hat01();
	this.instance_2.setTransform(48.7,-61,0.796,0.773,0,-10.1,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-35.4,regY:11.6,skewX:-10,skewY:-3.3,x:22.7,y:-50.1},0).wait(1).to({skewX:-9.6,skewY:-2.9,x:24.4,y:-49.1},0).wait(1).to({skewX:-8.8,skewY:-2.2,x:27.8,y:-47.2},0).wait(1).to({skewX:-7.6,skewY:-1,x:33,y:-44.3},0).wait(1).to({skewX:-6.2,skewY:0.5,x:39.6,y:-40.6},0).wait(1).to({skewX:-4.7,skewY:2,x:46.2,y:-36.9},0).wait(1).to({skewX:-3.5,skewY:3.2,x:51.5,y:-33.9},0).wait(1).to({skewX:-2.7,skewY:4,x:55,y:-32},0).wait(1).to({skewX:-2.3,skewY:4.4,x:56.9,y:-31},0).wait(1).to({regX:0,regY:0,skewX:-2.2,skewY:4.5,x:85.2,y:-37.4},0).wait(1).to({regX:-35.4,regY:11.6,scaleX:0.8,scaleY:0.78,skewX:-2.1,x:57,y:-30.8},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:-1.9,x:55.1,y:-31.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,skewX:-1.5,skewY:4.6,x:51.8,y:-32.7},0).wait(1).to({scaleX:0.78,scaleY:0.8,skewX:-1,skewY:4.7,x:46.9,y:-34.4},0).wait(1).to({scaleX:0.78,scaleY:0.82,skewX:-0.4,skewY:4.8,x:42,y:-36.1},0).wait(1).to({scaleX:0.77,scaleY:0.83,skewX:0,skewY:4.9,x:38.6,y:-37.3},0).wait(1).to({scaleX:0.77,scaleY:0.83,skewX:0.2,x:36.7,y:-38},0).wait(1).to({regX:0,regY:0,scaleX:0.77,scaleY:0.83,skewX:0.3,x:63.4,y:-45.5},0).wait(1).to({regX:-35.4,regY:11.6,scaleX:0.77,scaleY:0.83,skewX:-0.2,skewY:4.6,x:35.6,y:-38.6},0).wait(1).to({scaleX:0.77,scaleY:0.83,skewX:-0.7,skewY:4.1,x:34.8,y:-39.3},0).wait(1).to({scaleX:0.77,scaleY:0.82,skewX:-1.3,skewY:3.6,x:34,y:-40.1},0).wait(1).to({scaleX:0.78,scaleY:0.82,skewX:-2,skewY:3.1,x:33.1,y:-40.8},0).wait(1).to({scaleX:0.78,scaleY:0.82,skewX:-2.8,skewY:2.5,x:32,y:-41.8},0).wait(1).to({scaleX:0.78,scaleY:0.81,skewX:-3.6,skewY:1.8,x:30.9,y:-42.7},0).wait(1).to({scaleX:0.78,scaleY:0.81,skewX:-4.5,skewY:1.1,x:29.7,y:-43.8},0).wait(1).to({scaleX:0.78,scaleY:0.8,skewX:-5.5,skewY:0.3,x:28.4,y:-45},0).wait(1).to({scaleX:0.79,scaleY:0.79,skewX:-6.5,skewY:-0.6,x:26.9,y:-46.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,skewX:-7.7,skewY:-1.5,x:25.4,y:-47.5},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:-8.8,skewY:-2.4,x:23.8,y:-48.9},0).wait(1).to({regX:0,regY:0,scaleX:0.8,scaleY:0.77,skewX:-10.1,skewY:-3.5,x:48.7,y:-61},0).wait(1).to({regX:-35.4,regY:11.6,skewX:-10,skewY:-3.3,x:22.7,y:-50.1},0).wait(1).to({skewX:-9.6,skewY:-2.9,x:24.8,y:-49.1},0).wait(1).to({skewX:-8.8,skewY:-2.2,x:28.6,y:-47.2},0).wait(1).to({skewX:-7.6,skewY:-1,x:34.6,y:-44.3},0).wait(1).to({skewX:-6.2,skewY:0.5,x:42.2,y:-40.6},0).wait(1).to({skewX:-4.7,skewY:2,x:49.8,y:-36.9},0).wait(1).to({skewX:-3.5,skewY:3.2,x:55.9,y:-33.9},0).wait(1).to({skewX:-2.7,skewY:4,x:59.9,y:-32},0).wait(1).to({skewX:-2.3,skewY:4.4,x:62.1,y:-31},0).wait(1).to({regX:0,regY:0,skewX:-2.2,skewY:4.5,x:90.5,y:-37.4},0).wait(1).to({regX:-35.4,regY:11.6,scaleX:0.8,scaleY:0.78,skewX:-2.1,x:62,y:-30.8},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:-1.9,x:59.3,y:-31.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,skewX:-1.5,skewY:4.6,x:54.3,y:-32.7},0).wait(1).to({scaleX:0.78,scaleY:0.8,skewX:-1,skewY:4.7,x:47.1,y:-34.4},0).wait(1).to({scaleX:0.78,scaleY:0.82,skewX:-0.4,skewY:4.8,x:39.9,y:-36.1},0).wait(1).to({scaleX:0.77,scaleY:0.83,skewX:0,skewY:4.9,x:34.7,y:-37.3},0).wait(1).to({scaleX:0.77,scaleY:0.83,skewX:0.2,x:32,y:-38},0).wait(1).to({regX:0,regY:0,scaleX:0.77,scaleY:0.83,skewX:0.3,x:58.4,y:-45.5},0).wait(1).to({regX:-35.4,regY:11.6,scaleX:0.77,scaleY:0.83,skewX:-0.2,skewY:4.6,x:30.8,y:-38.6},0).wait(1).to({scaleX:0.77,scaleY:0.83,skewX:-0.7,skewY:4.1,x:30.3,y:-39.3},0).wait(1).to({scaleX:0.77,scaleY:0.82,skewX:-1.3,skewY:3.6,x:29.8,y:-40.1},0).wait(1).to({scaleX:0.78,scaleY:0.82,skewX:-2,skewY:3.1,x:29.2,y:-40.8},0).wait(1).to({scaleX:0.78,scaleY:0.82,skewX:-2.8,skewY:2.5,x:28.5,y:-41.8},0).wait(1).to({scaleX:0.78,scaleY:0.81,skewX:-3.6,skewY:1.8,x:27.8,y:-42.7},0).wait(1).to({scaleX:0.78,scaleY:0.81,skewX:-4.5,skewY:1.1,x:27,y:-43.8},0).wait(1).to({scaleX:0.78,scaleY:0.8,skewX:-5.5,skewY:0.3,x:26.1,y:-45},0).wait(1).to({scaleX:0.79,scaleY:0.79,skewX:-6.5,skewY:-0.6,x:25.2,y:-46.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,skewX:-7.7,skewY:-1.5,x:24.2,y:-47.5},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:-8.8,skewY:-2.4,x:23.2,y:-48.9},0).wait(1).to({regX:0,regY:0,scaleX:0.8,scaleY:0.77,skewX:-10.1,skewY:-3.5,x:48.7,y:-61},0).wait(1));

	// Tank_Tete01
	this.instance_3 = new lib.Tank_Tete01();
	this.instance_3.setTransform(33.8,-51.3,0.769,0.769,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-0.2,regY:-0.5,rotation:-2.9,x:34.1},0).wait(1).to({rotation:-2.5,x:35.9,y:-50.2},0).wait(1).to({rotation:-1.7,x:39.3,y:-48.2},0).wait(1).to({rotation:-0.5,x:44.6,y:-45.1},0).wait(1).to({rotation:0.9,x:51.1,y:-41.1},0).wait(1).to({rotation:2.4,x:57.8,y:-37.1},0).wait(1).to({rotation:3.6,x:63.1,y:-33.9},0).wait(1).to({rotation:4.4,x:66.6,y:-31.8},0).wait(1).to({rotation:4.8,x:68.5,y:-30.7},0).wait(1).to({regX:0,regY:0,rotation:4.9,x:69.2,y:-30},0).wait(1).to({regX:-0.2,regY:-0.5,x:68.5,y:-30.6},0).wait(1).to({x:66.7,y:-31.2},0).wait(1).to({x:63.2,y:-32.5},0).wait(1).to({x:58.2,y:-34.3},0).wait(1).to({x:53.2,y:-36.1},0).wait(1).to({x:49.7,y:-37.4},0).wait(1).to({x:47.8,y:-38.1},0).wait(1).to({regX:0,regY:0,x:47.4,y:-37.9},0).wait(1).to({regX:-0.2,regY:-0.5,rotation:4.6,x:46.6,y:-38.9},0).wait(1).to({rotation:4.2,x:45.9,y:-39.6},0).wait(1).to({rotation:3.7,x:45.1,y:-40.3},0).wait(1).to({rotation:3.2,x:44.2,y:-41.2},0).wait(1).to({rotation:2.6,x:43.2,y:-42.2},0).wait(1).to({rotation:2,x:42.1,y:-43.3},0).wait(1).to({rotation:1.3,x:40.9,y:-44.4},0).wait(1).to({rotation:0.5,x:39.6,y:-45.7},0).wait(1).to({rotation:-0.3,x:38.3,y:-47},0).wait(1).to({rotation:-1.1,x:36.8,y:-48.5},0).wait(1).to({rotation:-2,x:35.3,y:-50},0).wait(1).to({regX:0,regY:0,rotation:-3,x:33.8,y:-51.3},0).wait(1).to({regX:-0.2,regY:-0.5,rotation:-2.9,x:34.2},0).wait(1).to({rotation:-2.5,x:36.3,y:-50.2},0).wait(1).to({rotation:-1.7,x:40.2,y:-48.2},0).wait(1).to({rotation:-0.5,x:46.2,y:-45.1},0).wait(1).to({rotation:0.9,x:53.7,y:-41.1},0).wait(1).to({rotation:2.4,x:61.4,y:-37.1},0).wait(1).to({rotation:3.6,x:67.5,y:-33.9},0).wait(1).to({rotation:4.4,x:71.5,y:-31.8},0).wait(1).to({rotation:4.8,x:73.7,y:-30.7},0).wait(1).to({regX:0,regY:0,rotation:4.9,x:74.4,y:-30},0).wait(1).to({regX:-0.2,regY:-0.5,x:73.5,y:-30.6},0).wait(1).to({x:70.8,y:-31.2},0).wait(1).to({x:65.7,y:-32.5},0).wait(1).to({x:58.4,y:-34.3},0).wait(1).to({x:51.1,y:-36.1},0).wait(1).to({x:45.8,y:-37.4},0).wait(1).to({x:43,y:-38.1},0).wait(1).to({regX:0,regY:0,x:42.4,y:-37.9},0).wait(1).to({regX:-0.2,regY:-0.5,rotation:4.6,x:41.9,y:-38.9},0).wait(1).to({rotation:4.2,x:41.4,y:-39.6},0).wait(1).to({rotation:3.7,x:40.9,y:-40.3},0).wait(1).to({rotation:3.2,x:40.3,y:-41.2},0).wait(1).to({rotation:2.6,x:39.7,y:-42.2},0).wait(1).to({rotation:2,x:39,y:-43.3},0).wait(1).to({rotation:1.3,x:38.2,y:-44.4},0).wait(1).to({rotation:0.5,x:37.4,y:-45.7},0).wait(1).to({rotation:-0.3,x:36.6,y:-47},0).wait(1).to({rotation:-1.1,x:35.6,y:-48.5},0).wait(1).to({rotation:-2,x:34.6,y:-50},0).wait(1).to({regX:0,regY:0,rotation:-3,x:33.8,y:-51.3},0).wait(1));

	// Tank_Corps01
	this.instance_4 = new lib.Tank_Torso01();
	this.instance_4.setTransform(4,18.1,0.681,0.936,0,4.7,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:17.1,regY:-38.5,scaleX:0.68,scaleY:0.93,skewX:5.1,skewY:18.1,x:18.3,y:-14.1},0).wait(1).to({scaleX:0.69,scaleY:0.93,skewX:6.5,skewY:17.8,x:19.2,y:-13.6},0).wait(1).to({scaleX:0.7,scaleY:0.91,skewX:9.2,skewY:17.2,x:20.9,y:-12.8},0).wait(1).to({scaleX:0.72,scaleY:0.89,skewX:13.2,skewY:16.4,x:23.4,y:-11.3},0).wait(1).to({scaleX:0.74,scaleY:0.86,skewX:18.3,skewY:15.3,x:26.3,y:-9.3},0).wait(1).to({scaleX:0.77,scaleY:0.83,skewX:23.5,skewY:14.2,x:28.9,y:-7.1},0).wait(1).to({scaleX:0.78,scaleY:0.81,skewX:27.6,skewY:13.3,x:30.9,y:-5.2},0).wait(1).to({scaleX:0.8,scaleY:0.79,skewX:30.3,skewY:12.7,x:32,y:-3.9},0).wait(1).to({scaleX:0.8,scaleY:0.79,skewX:31.8,skewY:12.4,x:32.6,y:-3.2},0).wait(1).to({regX:0,regY:0,scaleX:0.8,scaleY:0.78,skewX:32.2,skewY:12.3,x:3.3,y:19.6},0).wait(1).to({regX:17.1,regY:-38.5,skewX:31.8,skewY:12.4,x:32.5,y:-3.2},0).wait(1).to({scaleX:0.8,scaleY:0.78,skewX:30.3,skewY:12.6,x:31.8,y:-3.7},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:27.6,skewY:13,x:30.4,y:-4.8},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:23.7,skewY:13.6,x:28.4,y:-6.2},0).wait(1).to({scaleX:0.78,scaleY:0.77,skewX:19.7,skewY:14.2,x:26.3,y:-7.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,skewX:16.9,skewY:14.7,x:24.8,y:-8.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,skewX:15.4,skewY:14.9,x:24,y:-8.7},0).wait(1).to({regX:0,regY:0,scaleX:0.77,scaleY:0.77,rotation:14.9,skewX:0,skewY:0,x:3.4,y:16.4},0).wait(1).to({regX:17.1,regY:-38.5,scaleX:0.77,scaleY:0.78,rotation:0,skewX:14.5,skewY:15.1,x:23.6,y:-9.1},0).wait(1).to({scaleX:0.76,scaleY:0.79,skewX:13.9,skewY:15.3,x:23.3,y:-9.4},0).wait(1).to({scaleX:0.76,scaleY:0.8,skewX:13.3,skewY:15.4,x:23,y:-9.7},0).wait(1).to({scaleX:0.75,scaleY:0.81,skewX:12.7,skewY:15.7,x:22.7,y:-10.1},0).wait(1).to({scaleX:0.74,scaleY:0.82,skewX:11.9,skewY:15.9,x:22.3,y:-10.4},0).wait(1).to({scaleX:0.74,scaleY:0.83,skewX:11.1,skewY:16.2,x:21.9,y:-10.9},0).wait(1).to({scaleX:0.73,scaleY:0.85,skewX:10.2,skewY:16.4,x:21.4,y:-11.4},0).wait(1).to({scaleX:0.72,scaleY:0.86,skewX:9.2,skewY:16.7,x:20.9,y:-11.9},0).wait(1).to({scaleX:0.71,scaleY:0.88,skewX:8.2,skewY:17.1,x:20.3,y:-12.4},0).wait(1).to({scaleX:0.7,scaleY:0.9,skewX:7.1,skewY:17.4,x:19.6,y:-13},0).wait(1).to({scaleX:0.69,scaleY:0.92,skewX:5.9,skewY:17.8,x:18.8,y:-13.6},0).wait(1).to({regX:0,regY:0,scaleX:0.68,scaleY:0.94,skewX:4.7,skewY:18.2,x:4,y:18.1},0).wait(1).to({regX:17.1,regY:-38.5,scaleX:0.68,scaleY:0.93,skewX:5.1,skewY:18.1,x:18.4,y:-14.1},0).wait(1).to({scaleX:0.69,scaleY:0.93,skewX:6.5,skewY:17.8,x:19.5,y:-13.6},0).wait(1).to({scaleX:0.7,scaleY:0.91,skewX:9.2,skewY:17.2,x:21.8,y:-12.8},0).wait(1).to({scaleX:0.72,scaleY:0.89,skewX:13.2,skewY:16.4,x:25,y:-11.3},0).wait(1).to({scaleX:0.74,scaleY:0.86,skewX:18.3,skewY:15.3,x:28.9,y:-9.3},0).wait(1).to({scaleX:0.77,scaleY:0.83,skewX:23.5,skewY:14.2,x:32.5,y:-7.1},0).wait(1).to({scaleX:0.78,scaleY:0.81,skewX:27.6,skewY:13.3,x:35.2,y:-5.2},0).wait(1).to({scaleX:0.8,scaleY:0.79,skewX:30.3,skewY:12.7,x:36.9,y:-3.9},0).wait(1).to({scaleX:0.8,scaleY:0.79,skewX:31.8,skewY:12.4,x:37.7,y:-3.2},0).wait(1).to({regX:0,regY:0,scaleX:0.8,scaleY:0.78,skewX:32.2,skewY:12.3,x:8.5,y:19.6},0).wait(1).to({regX:17.1,regY:-38.5,skewX:31.8,skewY:12.4,x:37.5,y:-3.2},0).wait(1).to({scaleX:0.8,scaleY:0.78,skewX:30.3,skewY:12.6,x:36,y:-3.7},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:27.6,skewY:13,x:32.9,y:-4.8},0).wait(1).to({scaleX:0.79,scaleY:0.78,skewX:23.7,skewY:13.6,x:28.5,y:-6.2},0).wait(1).to({scaleX:0.78,scaleY:0.77,skewX:19.7,skewY:14.2,x:24.1,y:-7.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,skewX:16.9,skewY:14.7,x:21,y:-8.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,skewX:15.4,skewY:14.9,x:19.3,y:-8.7},0).wait(1).to({regX:0,regY:0,scaleX:0.77,scaleY:0.77,rotation:14.9,skewX:0,skewY:0,x:-1.6,y:16.4},0).wait(1).to({regX:17.1,regY:-38.5,scaleX:0.77,scaleY:0.78,rotation:0,skewX:14.5,skewY:15.1,x:18.9,y:-9.1},0).wait(1).to({scaleX:0.76,scaleY:0.79,skewX:13.9,skewY:15.3,x:18.8,y:-9.4},0).wait(1).to({scaleX:0.76,scaleY:0.8,skewX:13.3,skewY:15.4,y:-9.7},0).wait(1).to({scaleX:0.75,scaleY:0.81,skewX:12.7,skewY:15.7,y:-10.1},0).wait(1).to({scaleX:0.74,scaleY:0.82,skewX:11.9,skewY:15.9,y:-10.4},0).wait(1).to({scaleX:0.74,scaleY:0.83,skewX:11.1,skewY:16.2,y:-10.9},0).wait(1).to({scaleX:0.73,scaleY:0.85,skewX:10.2,skewY:16.4,x:18.7,y:-11.4},0).wait(1).to({scaleX:0.72,scaleY:0.86,skewX:9.2,skewY:16.7,y:-11.9},0).wait(1).to({scaleX:0.71,scaleY:0.88,skewX:8.2,skewY:17.1,x:18.6,y:-12.4},0).wait(1).to({scaleX:0.7,scaleY:0.9,skewX:7.1,skewY:17.4,x:18.4,y:-13},0).wait(1).to({scaleX:0.69,scaleY:0.92,skewX:5.9,skewY:17.8,x:18.2,y:-13.6},0).wait(1).to({regX:0,regY:0,scaleX:0.68,scaleY:0.94,skewX:4.7,skewY:18.2,x:4,y:18.1},0).wait(1));

	// Tank_BrasAr
	this.instance_5 = new lib.Tank_Bras02();
	this.instance_5.setTransform(30.1,-38.9,0.769,0.768,0,23.8,16.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:29.9,regY:14,scaleX:0.77,skewX:24,skewY:16.5,x:48,y:-22.2},0).wait(1).to({scaleX:0.77,skewX:24.7,skewY:17.1,x:49.1,y:-21},0).wait(1).to({scaleX:0.76,skewX:26,skewY:18.4,x:51,y:-18.6},0).wait(1).to({scaleX:0.76,skewX:27.9,skewY:20.3,x:53.9,y:-15},0).wait(1).to({scaleX:0.75,skewX:30.4,skewY:22.8,x:57.5,y:-10.4},0).wait(1).to({scaleX:0.75,skewX:32.8,skewY:25.3,x:61.2,y:-5.9},0).wait(1).to({scaleX:0.75,skewX:34.8,skewY:27.2,x:64.1,y:-2.3},0).wait(1).to({scaleX:0.74,skewX:36.1,skewY:28.5,x:66,y:0},0).wait(1).to({scaleX:0.74,skewX:36.8,skewY:29.2,x:67,y:1.2},0).wait(1).to({regX:0,regY:0,skewX:37,skewY:29.4,x:54.5,y:-17.9},0).wait(1).to({regX:29.9,regY:14,scaleX:0.74,skewX:38.4,skewY:31.2,x:66.6,y:2.1},0).wait(1).to({scaleX:0.73,skewX:43.2,skewY:37.4,x:64.3,y:3.6},0).wait(1).to({scaleX:0.73,scaleY:0.77,skewX:52.3,skewY:49.2,x:59.4,y:5.8},0).wait(1).to({scaleX:0.71,scaleY:0.77,skewX:65.2,skewY:65.9,x:52.1,y:7.4},0).wait(1).to({scaleX:0.7,scaleY:0.76,skewX:78.3,skewY:82.8,x:44.6,y:7},0).wait(1).to({scaleX:0.69,skewX:87.6,skewY:94.9,x:39.6,y:5.5},0).wait(1).to({scaleX:0.69,scaleY:0.76,skewX:92.5,skewY:101.2,x:37.1,y:4.4},0).wait(1).to({regX:0,regY:0,scaleX:0.68,skewX:93.9,skewY:103.1,x:51.7,y:-15.2},0).wait(1).to({regX:29.9,regY:14,scaleX:0.69,skewX:95.8,skewY:104.1,x:35.5,y:3.4},0).wait(1).to({scaleX:0.69,skewX:97.9,skewY:105.3,x:34.5,y:2.7},0).wait(1).to({scaleX:0.7,scaleY:0.76,skewX:100.2,skewY:106.7,x:33.4,y:1.9},0).wait(1).to({scaleX:0.7,skewX:102.9,skewY:108.3,x:32,y:1},0).wait(1).to({scaleX:0.71,scaleY:0.77,skewX:105.8,skewY:110,x:30.7,y:0},0).wait(1).to({scaleX:0.72,skewX:109,skewY:111.9,x:29.2,y:-1.2},0).wait(1).to({scaleX:0.72,skewX:112.5,skewY:113.9,x:27.6,y:-2.4},0).wait(1).to({scaleX:0.73,scaleY:0.77,skewX:116.3,skewY:116.1,x:26,y:-3.8},0).wait(1).to({scaleX:0.74,skewX:120.3,skewY:118.5,x:24.2,y:-5.2},0).wait(1).to({scaleX:0.75,scaleY:0.77,skewX:124.6,skewY:121,x:22.3,y:-6.8},0).wait(1).to({scaleX:0.76,scaleY:0.77,skewX:129.2,skewY:123.7,x:20.5,y:-8.6},0).wait(1).to({regX:0,regY:0,scaleX:0.77,skewX:134.1,skewY:126.6,x:40,y:-21.4},0).wait(1).to({regX:29.9,regY:14,skewX:132.7,skewY:125.1,x:19.2,y:-9.8},0).wait(1).to({scaleX:0.77,skewX:127.7,skewY:120.1,x:21.5,y:-7.9},0).wait(1).to({scaleX:0.76,skewX:118.4,skewY:110.8,x:26.1,y:-4.5},0).wait(1).to({scaleX:0.76,skewX:104.1,skewY:96.5,x:34,y:-0.3},0).wait(1).to({scaleX:0.75,skewX:86,skewY:78.4,x:45.1,y:3.2},0).wait(1).to({scaleX:0.75,skewX:67.8,skewY:60.2,x:56.9,y:4.5},0).wait(1).to({scaleX:0.75,skewX:53.2,skewY:45.6,x:66.1,y:3.9},0).wait(1).to({scaleX:0.74,skewX:43.6,skewY:36,x:72,y:2.7},0).wait(1).to({scaleX:0.74,skewX:38.5,skewY:31,x:74.9,y:1.8},0).wait(1).to({regX:0,regY:0,skewX:37,skewY:29.4,x:63,y:-17.9},0).wait(1).to({regX:29.9,regY:14,scaleX:0.74,skewX:35.9,skewY:28.4,x:75.7,y:1.4},0).wait(1).to({scaleX:0.74,skewX:32.1,skewY:24.6,x:75.1,y:0.9},0).wait(1).to({scaleX:0.75,skewX:25,skewY:17.4,x:73.8,y:-0.4},0).wait(1).to({scaleX:0.75,skewX:14.7,skewY:7.1,x:71.6,y:-2.6},0).wait(1).to({scaleX:0.76,skewX:4.4,skewY:-3.3,x:68.7,y:-5.4},0).wait(1).to({scaleX:0.77,skewX:-2.9,skewY:-10.6,x:66.3,y:-7.6},0).wait(1).to({scaleX:0.77,skewX:-6.8,skewY:-14.5,x:64.8,y:-8.8},0).wait(1).to({regX:0,regY:0,scaleX:0.77,skewX:-7.9,skewY:-15.7,x:40.8,y:-13.7},0).wait(1).to({regX:29.9,regY:14,skewX:-6.5,skewY:-14.2,x:63.7,y:-9.7},0).wait(1).to({skewX:-4.8,skewY:-12.6,x:63,y:-10.4},0).wait(1).to({skewX:-3,skewY:-10.7,x:62.2,y:-11.1},0).wait(1).to({skewX:-0.9,skewY:-8.6,x:61.2,y:-11.9},0).wait(1).to({skewX:1.4,skewY:-6.2,x:60.2,y:-12.8},0).wait(1).to({skewX:4,skewY:-3.7,x:58.9,y:-13.9},0).wait(1).to({skewX:6.7,skewY:-0.9,x:57.5,y:-14.9},0).wait(1).to({skewX:9.7,skewY:2.1,x:56,y:-16.2},0).wait(1).to({skewX:12.9,skewY:5.3,x:54.2,y:-17.6},0).wait(1).to({skewX:16.3,skewY:8.7,x:52.3,y:-19.1},0).wait(1).to({skewX:20,skewY:12.4,x:50.2,y:-20.7},0).wait(1).to({regX:0,regY:0,scaleX:0.77,skewX:23.8,skewY:16.3,x:30.1,y:-38.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-64.4,114.6,96.4);


(lib.ANM_NUN_TANK_TORSO_IDLE = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.Tank_Bras01();
	this.instance.setTransform(16.3,-32.3,0.615,0.817,0,34.4,29.5,-0.1,-0.3);

	// Tank_ArmsWeapon01
	this.instance_1 = new lib.Tank_ArmsWeapon01();
	this.instance_1.setTransform(17.7,6.6,1,1,-3.3);

	// Tank_CouvreTete01
	this.instance_2 = new lib.Tank_Hat01();
	this.instance_2.setTransform(67.6,-50,0.796,0.773,0,-6.1,0.5);

	// Tank_Tete01
	this.instance_3 = new lib.Tank_Tete01();
	this.instance_3.setTransform(52.1,-41.3,0.769,0.769,1);

	// Tank_Corps01
	this.instance_4 = new lib.Tank_Torso01();
	this.instance_4.setTransform(2.6,10.4,0.777,0.794,0,20.1,10);

	// Layer 9
	this.instance_5 = new lib.Tank_Bras02();
	this.instance_5.setTransform(42.3,-26.5,0.768,0.768,0,31.6,28.4);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.9,-53.9,120.8,78.5);


(lib.ANM_NUN_TANK_JUMP_OUT_PORTAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.instance = new lib.ANM_NUN_TANK_TORSO_IDLE();
	this.instance.setTransform(-17.1,-64.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:42.1,regY:-14.7,x:25,y:-79.3},0).wait(1).to({x:24.9,y:-80.1},0).wait(1).to({x:24.7,y:-81.5},0).wait(1).to({x:24.5,y:-83.4},0).wait(1).to({x:24.2,y:-85.8},0).wait(1).to({x:23.9,y:-88.8},0).wait(1).to({x:23.5,y:-92.3},0).wait(1).to({x:23,y:-96.3},0).wait(1).to({x:22.5,y:-100.9},0).wait(1).to({x:21.9,y:-106},0).wait(1).to({x:21.2,y:-111.7},0).wait(1).to({x:20.5,y:-117.9},0).wait(1).to({x:19.7,y:-124.6},0).wait(1).to({x:18.9,y:-131.9},0).wait(1).to({x:18,y:-139.7},0).wait(1).to({regX:0,regY:0,x:-25.1,y:-133.4},0).wait(1));

	// Symbol 2_0
	this.instance_1 = new lib.Tank_Robe01();
	this.instance_1.setTransform(-27.7,-66.7,0.878,0.553,0,12.1,-169);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-37.6,regY:38.7,scaleX:0.88,scaleY:0.55,skewX:12.2,x:0.1,y:-39.7},0).wait(1).to({scaleX:0.88,scaleY:0.55,skewX:12.4,skewY:-168.8,x:-0.2,y:-40.6},0).wait(1).to({scaleX:0.87,scaleY:0.55,skewX:12.8,skewY:-168.5,x:-0.7,y:-42},0).wait(1).to({scaleX:0.87,scaleY:0.55,skewX:13.3,skewY:-168.1,x:-1.3,y:-44.1},0).wait(1).to({scaleX:0.87,scaleY:0.54,skewX:13.9,skewY:-167.5,x:-2.2,y:-46.6},0).wait(1).to({scaleX:0.86,scaleY:0.54,skewX:14.7,skewY:-166.9,x:-3.3,y:-49.8},0).wait(1).to({scaleX:0.85,scaleY:0.54,skewX:15.7,skewY:-166.1,x:-4.6,y:-53.5},0).wait(1).to({scaleX:0.85,scaleY:0.53,skewX:16.7,skewY:-165.3,x:-6.1,y:-57.9},0).wait(1).to({scaleX:0.84,scaleY:0.52,skewX:18,skewY:-164.3,x:-7.8,y:-62.8},0).wait(1).to({scaleX:0.83,scaleY:0.52,skewX:19.3,skewY:-163.2,x:-9.7,y:-68.4},0).wait(1).to({scaleX:0.82,scaleY:0.51,skewX:20.8,skewY:-161.9,x:-11.7,y:-74.6},0).wait(1).to({scaleX:0.81,scaleY:0.5,skewX:22.5,skewY:-160.6,x:-14,y:-81.4},0).wait(1).to({scaleX:0.79,scaleY:0.49,skewX:24.3,skewY:-159.1,x:-16.4,y:-88.8},0).wait(1).to({scaleX:0.78,scaleY:0.48,skewX:26.2,skewY:-157.5,x:-19,y:-96.8},0).wait(1).to({scaleX:0.77,scaleY:0.47,skewX:28.3,skewY:-155.8,x:-21.7,y:-105.5},0).wait(1).to({regX:0,regY:0,scaleX:0.75,scaleY:0.46,skewX:30.6,skewY:-154,x:-41,y:-142.7},0).wait(1));

	// Symbol 2
	this.instance_2 = new lib.Tank_Robe01();
	this.instance_2.setTransform(40.9,-71.7,0.895,0.542,0,-16.3,-19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-37.6,regY:38.7,scaleX:0.89,scaleY:0.54,skewY:-19,x:14.9,y:-40.7},0).wait(1).to({scaleX:0.89,scaleY:0.55,skewX:-16.1,skewY:-18.6,x:14.7,y:-41.3},0).wait(1).to({scaleX:0.89,scaleY:0.56,skewX:-15.9,skewY:-17.9,x:14.4,y:-42.4},0).wait(1).to({scaleX:0.88,scaleY:0.57,skewX:-15.6,skewY:-17,x:14,y:-43.8},0).wait(1).to({scaleX:0.87,scaleY:0.59,skewX:-15.2,skewY:-15.8,x:13.4,y:-45.6},0).wait(1).to({scaleX:0.86,scaleY:0.61,skewX:-14.7,skewY:-14.3,x:12.8,y:-47.7},0).wait(1).to({scaleX:0.85,scaleY:0.64,skewX:-14.1,skewY:-12.6,x:12,y:-50.3},0).wait(1).to({scaleX:0.84,scaleY:0.66,skewX:-13.5,skewY:-10.6,x:11.2,y:-53.2},0).wait(1).to({scaleX:0.82,scaleY:0.7,skewX:-12.7,skewY:-8.4,x:10.3,y:-56.5},0).wait(1).to({scaleX:0.8,scaleY:0.73,skewX:-11.9,skewY:-5.8,x:9.2,y:-60.1},0).wait(1).to({scaleX:0.78,scaleY:0.77,skewX:-11,skewY:-3.1,x:8.2,y:-64},0).wait(1).to({scaleX:0.76,scaleY:0.82,skewX:-9.9,skewY:0,x:7,y:-68.2},0).wait(1).to({scaleX:0.74,scaleY:0.86,skewX:-8.8,skewY:3.3,x:5.7,y:-72.7},0).wait(1).to({scaleX:0.71,scaleY:0.91,skewX:-7.6,skewY:6.9,x:4.4,y:-77.4},0).wait(1).to({scaleX:0.68,scaleY:0.97,skewX:-6.4,skewY:10.7,x:2.9,y:-82.4},0).wait(1).to({regX:0,regY:0,scaleX:0.66,scaleY:1.03,skewX:-5,skewY:14.9,x:21.8,y:-120.8},0).wait(1));

	// Tank_Pied01_0
	this.instance_3 = new lib.Tank_Pied01();
	this.instance_3.setTransform(-20.6,-24.1,0.769,0.769,0,-120,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-0.3,regY:-9.1,skewX:-119.4,skewY:60.6,x:-26.9,y:-21.1},0).wait(1).to({skewX:-117.8,skewY:62.2,x:-27.4,y:-21.9},0).wait(1).to({skewX:-115,skewY:65,x:-28.2,y:-23.3},0).wait(1).to({skewX:-111.2,skewY:68.8,x:-29.3,y:-25.3},0).wait(1).to({skewX:-106.2,skewY:73.8,x:-30.7,y:-27.8},0).wait(1).to({skewX:-100.1,skewY:79.9,x:-32.3,y:-31},0).wait(1).to({skewX:-93,skewY:87,x:-34.1,y:-34.8},0).wait(1).to({skewX:-84.7,skewY:95.3,x:-36.1,y:-39.1},0).wait(1).to({skewX:-75.3,skewY:104.7,x:-38.1,y:-43.9},0).wait(1).to({skewX:-64.8,skewY:115.2,x:-40.2,y:-49.3},0).wait(1).to({skewX:-53.2,skewY:126.8,x:-42.2,y:-55.1},0).wait(1).to({skewX:-40.5,skewY:139.5,x:-44.2,y:-61.2},0).wait(1).to({skewX:-26.7,skewY:153.3,x:-46.2,y:-67.6},0).wait(1).to({skewX:-11.9,skewY:168.1,x:-48,y:-74.1},0).wait(1).to({skewX:4.2,skewY:184.2,x:-50,y:-80.6},0).wait(1).to({regX:0,regY:0,skewX:21.3,skewY:201.3,x:-54.9,y:-80.4},0).wait(1));

	// Tank_Pied01
	this.instance_4 = new lib.Tank_Pied01();
	this.instance_4.setTransform(41.1,-25.9,0.769,0.769,117);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-0.3,regY:-9.1,rotation:116.4,x:47.4,y:-22.9},0).wait(1).to({rotation:114.7},0).wait(1).to({rotation:111.8,x:47.5},0).wait(1).to({rotation:107.7,x:47.4},0).wait(1).to({rotation:102.5,y:-23},0).wait(1).to({rotation:96.1,x:47.2,y:-23.1},0).wait(1).to({rotation:88.6,x:47,y:-23.2},0).wait(1).to({rotation:79.9,x:46.5,y:-23.3},0).wait(1).to({rotation:70.1,x:45.8,y:-23.4},0).wait(1).to({rotation:59.1,x:44.8},0).wait(1).to({rotation:46.9,x:43.4,y:-23.2},0).wait(1).to({rotation:33.6,x:41.6,y:-22.8},0).wait(1).to({rotation:19.1,x:39.5,y:-21.9},0).wait(1).to({rotation:3.5,x:37,y:-20.5},0).wait(1).to({rotation:-13.3,x:34.4,y:-18.4},0).wait(1).to({regX:0,regY:0,rotation:-31.3,x:35.6,y:-9.8},0).wait(1));

	// Tank_Molet01_0
	this.instance_5 = new lib.Tank_Molet01();
	this.instance_5.setTransform(51.6,-29.7,0.769,0.272,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-0.2,regY:-23.6,scaleY:0.27,rotation:29.9,x:54.6,y:-35.3},0).wait(1).to({scaleX:0.77,scaleY:0.28,rotation:0,skewX:29.5,skewY:29.6,x:54.3},0).wait(1).to({scaleX:0.77,scaleY:0.29,skewX:28.8,skewY:29,x:53.8},0).wait(1).to({scaleX:0.77,scaleY:0.31,skewX:27.9,skewY:28.2,x:53.1,y:-35.4},0).wait(1).to({scaleX:0.76,scaleY:0.33,skewX:26.7,skewY:27.2,x:52.3},0).wait(1).to({scaleX:0.76,scaleY:0.36,skewX:25.2,skewY:26,x:51.1,y:-35.5},0).wait(1).to({scaleX:0.76,scaleY:0.39,skewX:23.5,skewY:24.5,x:49.8,y:-35.7},0).wait(1).to({scaleX:0.76,scaleY:0.43,skewX:21.5,skewY:22.8,x:48.2,y:-35.8},0).wait(1).to({scaleX:0.75,scaleY:0.47,skewX:19.2,skewY:20.9,x:46.3,y:-36},0).wait(1).to({scaleX:0.75,scaleY:0.52,skewX:16.7,skewY:18.8,x:44,y:-36.2},0).wait(1).to({scaleX:0.74,scaleY:0.57,skewX:13.9,skewY:16.4,x:41.4,y:-36.4},0).wait(1).to({scaleX:0.74,scaleY:0.63,skewX:10.8,skewY:13.8,x:38.4,y:-36.7},0).wait(1).to({scaleX:0.73,scaleY:0.69,skewX:7.5,skewY:11,x:35,y:-37},0).wait(1).to({scaleX:0.73,scaleY:0.76,skewX:3.9,skewY:8,x:31.2,y:-37.2},0).wait(1).to({scaleX:0.72,scaleY:0.83,skewX:0.1,skewY:4.7,x:26.8,y:-37.4},0).wait(1).to({regX:0,regY:0,scaleX:0.72,scaleY:0.91,skewX:-4.1,skewY:1.3,x:23.5,y:-16.1},0).wait(1));

	// Tank_Molet01
	this.instance_6 = new lib.Tank_Molet01();
	this.instance_6.setTransform(-28.4,-32.2,0.769,0.311,0,-19,161);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-0.2,regY:-23.6,scaleY:0.31,skewY:161.1,x:-30.7,y:-39.4},0).wait(1).to({scaleY:0.32,skewY:161.2,x:-30.9,y:-40.1},0).wait(1).to({scaleX:0.77,scaleY:0.33,skewX:-19.1,skewY:161.4,x:-31.3,y:-41.4},0).wait(1).to({scaleY:0.34,skewX:-19.2,skewY:161.6,x:-31.9,y:-43.2},0).wait(1).to({scaleY:0.36,skewX:-19.3,skewY:161.9,x:-32.5,y:-45.4},0).wait(1).to({scaleX:0.77,scaleY:0.38,skewX:-19.4,skewY:162.3,x:-33.4,y:-48.2},0).wait(1).to({scaleX:0.77,scaleY:0.4,skewX:-19.6,skewY:162.8,x:-34.4,y:-51.5},0).wait(1).to({scaleY:0.43,skewX:-19.8,skewY:163.4,x:-35.5,y:-55.2},0).wait(1).to({scaleX:0.77,scaleY:0.46,skewX:-20,skewY:164,x:-36.9,y:-59.5},0).wait(1).to({scaleX:0.77,scaleY:0.49,skewX:-20.2,skewY:164.7,x:-38.3,y:-64.2},0).wait(1).to({scaleX:0.78,scaleY:0.53,skewX:-20.5,skewY:165.4,x:-39.9,y:-69.5},0).wait(1).to({scaleX:0.78,scaleY:0.57,skewX:-20.7,skewY:166.3,x:-41.8,y:-75.2},0).wait(1).to({scaleX:0.78,scaleY:0.62,skewX:-21.1,skewY:167.2,x:-43.8,y:-81.5},0).wait(1).to({scaleX:0.78,scaleY:0.67,skewX:-21.4,skewY:168.2,x:-45.9,y:-88.3},0).wait(1).to({scaleX:0.78,scaleY:0.72,skewX:-21.7,skewY:169.2,x:-48.2,y:-95.5},0).wait(1).to({regX:0,regY:0,scaleX:0.78,scaleY:0.78,skewX:-22.1,skewY:170.4,x:-44,y:-86.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-118.3,148.3,123.1);


(lib.ANM_NUN_TANK_JUMP_IN_PORTAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.instance = new lib.ANM_NUN_TANK_TORSO_IDLE();
	this.instance.setTransform(8.1,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:42.1,regY:-14.7,x:45.8,y:-120.5},0).wait(1).to({x:41.9,y:-112.6},0).wait(1).to({x:38.4,y:-105.6},0).wait(1).to({x:35.2,y:-99.4},0).wait(1).to({x:32.5,y:-94},0).wait(1).to({x:30.2,y:-89.4},0).wait(1).to({x:28.3,y:-85.7},0).wait(1).to({x:26.9,y:-82.8},0).wait(1).to({x:25.8,y:-80.7},0).wait(1).to({x:25.2,y:-79.5},0).wait(1).to({regX:0,regY:0,x:-17.1,y:-64.4},0).wait(1));

	// Symbol 2_0
	this.instance_1 = new lib.Tank_Robe01();
	this.instance_1.setTransform(-0.2,-120.5,0.4,1.091,0,30.6,-135.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-37.6,regY:38.7,scaleX:0.48,scaleY:1,skewX:27.4,skewY:-141.6,x:-8.6,y:-65.5},0).wait(1).to({scaleX:0.56,scaleY:0.91,skewX:24.5,skewY:-146.8,x:-6.4,y:-59},0).wait(1).to({scaleX:0.63,scaleY:0.84,skewX:21.9,skewY:-151.5,x:-4.6,y:-53.8},0).wait(1).to({scaleX:0.68,scaleY:0.77,skewX:19.6,skewY:-155.6,x:-3.1,y:-49.7},0).wait(1).to({scaleX:0.74,scaleY:0.71,skewX:17.6,skewY:-159.1,x:-2,y:-46.5},0).wait(1).to({scaleX:0.78,scaleY:0.66,skewX:15.9,skewY:-162.2,x:-1.1,y:-44.1},0).wait(1).to({scaleX:0.81,scaleY:0.62,skewX:14.6,skewY:-164.6,x:-0.6,y:-42.3},0).wait(1).to({scaleX:0.84,scaleY:0.59,skewX:13.5,skewY:-166.5,x:-0.2,y:-41},0).wait(1).to({scaleX:0.86,scaleY:0.57,skewX:12.7,skewY:-167.9,x:0.1,y:-40.1},0).wait(1).to({scaleX:0.87,scaleY:0.56,skewX:12.3,skewY:-168.7,x:0.2,y:-39.6},0).wait(1).to({regX:0,regY:0,scaleX:0.88,scaleY:0.55,skewX:12.1,skewY:-169,x:-27.7,y:-66.7},0).wait(1));

	// Symbol 2
	this.instance_2 = new lib.Tank_Robe01();
	this.instance_2.setTransform(36.5,-115.2,0.359,1.12,0,16.4,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-37.6,regY:38.7,scaleX:0.45,scaleY:1.02,skewX:10.7,skewY:5.5,x:13,y:-70.5},0).wait(1).to({scaleX:0.54,scaleY:0.93,skewX:5.6,skewY:0.8,x:14.3,y:-65.3},0).wait(1).to({scaleX:0.61,scaleY:0.85,skewX:1,skewY:-3.4,x:15,y:-60.6},0).wait(1).to({scaleX:0.68,scaleY:0.78,skewX:-3.1,skewY:-7.1,x:15.4,y:-56.2},0).wait(1).to({scaleX:0.74,scaleY:0.71,skewX:-6.6,skewY:-10.3,x:15.5,y:-52.3},0).wait(1).to({scaleX:0.78,scaleY:0.66,skewX:-9.5,skewY:-13,y:-48.8},0).wait(1).to({scaleX:0.82,scaleY:0.62,skewX:-12,skewY:-15.2,x:15.3,y:-46},0).wait(1).to({scaleX:0.86,scaleY:0.59,skewX:-13.9,skewY:-16.9,x:15.2,y:-43.6},0).wait(1).to({scaleX:0.88,scaleY:0.56,skewX:-15.2,skewY:-18.1,x:15.1,y:-41.9},0).wait(1).to({scaleX:0.89,scaleY:0.55,skewX:-16,skewY:-18.9,x:15,y:-40.9},0).wait(1).to({regX:0,regY:0,scaleX:0.9,scaleY:0.54,skewX:-16.3,skewY:-19.1,x:40.9,y:-71.7},0).wait(1));

	// Tank_Pied01_0
	this.instance_3 = new lib.Tank_Pied01();
	this.instance_3.setTransform(-37.6,-20.1,0.817,0.769,0,-10.1,150.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-0.3,regY:-9.1,scaleX:0.81,skewX:-29.1,skewY:134.5,x:-37.8,y:-27},0).wait(1).to({scaleX:0.8,skewX:-46.4,skewY:120.4,x:-36.9,y:-26.5},0).wait(1).to({scaleX:0.8,skewX:-61.8,skewY:107.7,x:-35.6,y:-25.5},0).wait(1).to({scaleX:0.79,skewX:-75.5,skewY:96.5,x:-34.2,y:-24.5},0).wait(1).to({scaleX:0.78,skewX:-87.3,skewY:86.8,x:-32.6,y:-23.5},0).wait(1).to({scaleX:0.78,skewX:-97.3,skewY:78.6,x:-31.1,y:-22.6},0).wait(1).to({scaleX:0.78,skewX:-105.5,skewY:71.9,x:-29.6,y:-21.9},0).wait(1).to({scaleX:0.77,skewX:-111.8,skewY:66.7,x:-28.4,y:-21.4},0).wait(1).to({scaleX:0.77,skewX:-116.4,skewY:63,x:-27.5,y:-21.1},0).wait(1).to({scaleX:0.77,skewX:-119.1,skewY:60.7,x:-26.9,y:-20.9},0).wait(1).to({regX:0,regY:0,scaleX:0.77,skewX:-120,skewY:60,x:-20.6,y:-24.1},0).wait(1));

	// Tank_Pied01
	this.instance_4 = new lib.Tank_Pied01();
	this.instance_4.setTransform(-4.1,-8.7,0.769,0.862,0,33.1,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-0.3,regY:-9.1,scaleY:0.85,skewX:47.7,skewY:69.9,x:9.3,y:-17.1},0).wait(1).to({scaleY:0.83,skewX:60.9,skewY:78.8,x:17.3,y:-18.3},0).wait(1).to({scaleY:0.82,skewX:72.6,skewY:86.8,x:24.2,y:-19.2},0).wait(1).to({scaleY:0.81,skewX:83,skewY:93.9,x:30,y:-20.1},0).wait(1).to({scaleY:0.8,skewX:92,skewY:100,x:34.9,y:-20.7},0).wait(1).to({scaleY:0.79,skewX:99.7,skewY:105.2,x:38.8,y:-21.3},0).wait(1).to({scaleY:0.78,skewX:105.9,skewY:109.4,x:42,y:-21.8},0).wait(1).to({scaleY:0.78,skewX:110.7,skewY:112.7,x:44.4,y:-22.3},0).wait(1).to({scaleY:0.77,skewX:114.2,skewY:115.1,x:46.1,y:-22.6},0).wait(1).to({scaleY:0.77,skewX:116.3,skewY:116.5,x:47.1,y:-22.8},0).wait(1).to({regX:0,regY:0,scaleY:0.77,rotation:117,skewX:0,skewY:0,x:41.1,y:-25.9},0).wait(1));

	// Tank_Molet01_0
	this.instance_5 = new lib.Tank_Molet01();
	this.instance_5.setTransform(0.9,-24,0.769,0.777,0,21.9,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-0.2,regY:-23.6,scaleY:0.69,skewX:23.3,x:16,y:-40},0).wait(1).to({scaleY:0.61,skewX:24.6,x:23.5,y:-39.1},0).wait(1).to({scaleY:0.54,skewX:25.7,x:30.1,y:-38.2},0).wait(1).to({scaleY:0.48,skewX:26.7,x:36,y:-37.5},0).wait(1).to({scaleY:0.42,skewX:27.6,x:41,y:-36.9},0).wait(1).to({scaleY:0.38,skewX:28.3,x:45.2,y:-36.4},0).wait(1).to({scaleY:0.34,skewX:28.9,x:48.6,y:-36},0).wait(1).to({scaleY:0.31,skewX:29.4,x:51.3,y:-35.7},0).wait(1).to({scaleY:0.29,skewX:29.7,x:53.2,y:-35.5},0).wait(1).to({scaleY:0.28,skewX:29.9,x:54.3,y:-35.4},0).wait(1).to({regX:0,regY:0,scaleY:0.27,rotation:30,skewX:0,skewY:0,x:51.6,y:-29.7},0).wait(1));

	// Tank_Molet01
	this.instance_6 = new lib.Tank_Molet01();
	this.instance_6.setTransform(-35.1,-34,0.769,0.792,0,18.5,-175.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-0.2,regY:-23.6,scaleY:0.71,skewX:12,skewY:-179.4,x:-30.3,y:-50},0).wait(1).to({scaleY:0.63,skewX:6.1,skewY:-183.1,x:-31.1,y:-48.2},0).wait(1).to({scaleY:0.56,skewX:0.8,skewY:-186.4,x:-31.6,y:-46.5},0).wait(1).to({scaleY:0.51,skewX:-3.8,skewY:-189.4,x:-31.8,y:-44.8},0).wait(1).to({scaleY:0.45,skewX:-7.8,skewY:-191.9,x:-31.7,y:-43.3},0).wait(1).to({scaleY:0.41,skewX:-11.2,skewY:-194.1,x:-31.5,y:-42.1},0).wait(1).to({scaleY:0.37,skewX:-14,skewY:-195.8,x:-31.3,y:-41},0).wait(1).to({scaleY:0.35,skewX:-16.2,skewY:-197.2,x:-31,y:-40.2},0).wait(1).to({scaleY:0.33,skewX:-17.7,skewY:-198.2,x:-30.8,y:-39.6},0).wait(1).to({scaleY:0.32,skewX:-18.7,skewY:-198.8,x:-30.7,y:-39.3},0).wait(1).to({regX:0,regY:0,scaleY:0.31,skewX:-19,skewY:-199,x:-28.4,y:-32.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.6,-168.4,167.6,173.8);


(lib.GUN_TANKswap = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GUN_TANK_GOLD();
	this.instance.setTransform(388.9,179.9,1,1,0,0,0,44.1,-8);

	this.instance_1 = new lib.GUN_TANK_02();
	this.instance_1.setTransform(-27,48.7,1,1,0,0,0,39.5,-8.3);

	this.instance_2 = new lib.GUN_TANK_03();
	this.instance_2.setTransform(107.3,46.9,1,1,0,0,0,37.6,-1.8);

	this.instance_3 = new lib.GUN_TANK_08();
	this.instance_3.setTransform(253.2,115.2,1,1,0,0,0,37.6,-4.5);

	this.instance_4 = new lib.GUN_TANK_09();
	this.instance_4.setTransform(-171.6,184.6,1,1,0,0,0,41,-6);

	this.instance_5 = new lib.GUN_TANK_10();
	this.instance_5.setTransform(-28,184.6,1,1,0,0,0,44,-6);

	this.instance_6 = new lib.GUN_TANK_06();
	this.instance_6.setTransform(-24.9,117.3,1,1,0,0,0,37.1,-2.7);

	this.instance_7 = new lib.GUN_TANK_07();
	this.instance_7.setTransform(114.1,117.3,1,1,0,0,0,37.1,-2.7);

	this.instance_8 = new lib.GUN_TANK_11();
	this.instance_8.setTransform(109.2,187.8,1,1,0,0,0,38.9,-2.7);

	this.instance_9 = new lib.GUN_TANK_12();
	this.instance_9.setTransform(249.8,186.4,1,1,0,0,0,39.1,-1.1);

	this.instance_10 = new lib.GUN_TANK_04();
	this.instance_10.setTransform(198.9,50);

	this.instance_11 = new lib.GUN_TANK_05();
	this.instance_11.setTransform(-162.8,116.9,1,1,0,0,0,44,-5.5);

	this.addChild(this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-224,24.6,686.2,184.9);


(lib.ANM_NUN_TANK_RUN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.instance = new lib.Tank_Roche_Tombe01();
	this.instance.setTransform(74.3,-7.6,1.19,1.19);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({_off:true},26).wait(1));

	// Layer 11
	this.instance_1 = new lib.Tank_Roche_Tombe01();
	this.instance_1.setTransform(74.3,-7.7,0.75,0.75,0,0,0,0,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).to({_off:true},26).wait(3));

	// Layer 10
	this.instance_2 = new lib.Tank_Roche_Tombe01();
	this.instance_2.setTransform(64.3,-7.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({_off:true},26).wait(5));

	// Layer 9
	this.instance_3 = new lib.Tank_Roche_Tombe01();
	this.instance_3.setTransform(54.3,-7.6,1.19,1.19);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({_off:true},25).wait(32));

	// Layer 8
	this.instance_4 = new lib.Tank_Roche_Tombe01();
	this.instance_4.setTransform(54.3,-7.7,0.75,0.75,0,0,0,0,-0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({_off:true},25).wait(34));

	// Layer 7
	this.instance_5 = new lib.Tank_Roche_Tombe01();
	this.instance_5.setTransform(44.3,-7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},25).wait(36));

	// Layer 4
	this.instance_6 = new lib.ANM_NUN_TANK_TORSO_RUN();
	this.instance_6.setTransform(30.3,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:35.2,regY:-10.8,x:64.8,y:-86.8},0).wait(1).to({x:62.4},0).wait(1).to({x:58.1,y:-87},0).wait(1).to({x:51.4,y:-87.2},0).wait(1).to({x:42.9,y:-87.4},0).wait(1).to({x:34.4,y:-87.6},0).wait(1).to({x:27.6,y:-87.8},0).wait(1).to({x:23.1,y:-88},0).wait(1).to({x:20.7},0).wait(1).to({regX:0,regY:0,x:-15.2,y:-77.3},0).wait(1).to({regX:35.2,regY:-10.8,x:20.5,y:-88.5},0).wait(1).to({x:22.1,y:-90.1},0).wait(1).to({x:25.3,y:-93.1},0).wait(1).to({x:29.8,y:-97.3},0).wait(1).to({x:34.3,y:-101.7},0).wait(1).to({x:37.5,y:-104.7},0).wait(1).to({x:39.2,y:-106.3},0).wait(1).to({regX:0,regY:0,x:4.5,y:-96},0).to({x:30.3,y:-76},12,cjs.Ease.get(-0.5)).wait(1).to({regX:35.2,regY:-10.8,x:64.8,y:-86.8},0).wait(1).to({x:62.4},0).wait(1).to({x:58.1,y:-87},0).wait(1).to({x:51.4,y:-87.2},0).wait(1).to({x:42.9,y:-87.4},0).wait(1).to({x:34.4,y:-87.6},0).wait(1).to({x:27.6,y:-87.8},0).wait(1).to({x:23.1,y:-88},0).wait(1).to({x:20.7},0).wait(1).to({regX:0,regY:0,x:-15.2,y:-77.3},0).wait(1).to({regX:35.2,regY:-10.8,x:20.5,y:-88.5},0).wait(1).to({x:22.1,y:-90.1},0).wait(1).to({x:25.3,y:-93.1},0).wait(1).to({x:29.8,y:-97.3},0).wait(1).to({x:34.3,y:-101.7},0).wait(1).to({x:37.5,y:-104.7},0).wait(1).to({x:39.2,y:-106.3},0).wait(1).to({regX:0,regY:0,x:4.5,y:-96},0).to({x:30.3,y:-76},12,cjs.Ease.get(-0.5)).wait(1));

	// Calque 3
	this.instance_7 = new lib.Tank_Jambes_Run_Loop01();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.5,-140.4,205.5,146.1);


(lib.ANM_NUN_TANK_JUMP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ANM_NUN_TANK_JUMP_OUT_PORTAL();
	this.instance.setTransform(0,-50);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({y:0},16,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.ANM_NUN_TANK_JUMP_IN_PORTAL();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-50},11,cjs.Ease.get(1)).to({_off:true},1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.6,-168.4,167.6,173.8);


(lib.Tank_Bras_Slide_NoShoot01 = function() {
	this.initialize();

	// Tank_Bras01
	this.instance = new lib.Tank_Bras01();
	this.instance.setTransform(-72.6,-37.8,0.816,1.046,0,-40.1,-50.1,-0.3,-0.1);

	// Tank_ArmsWeapon01
	this.instance_1 = new lib.Tank_ArmsWeapon01();
	this.instance_1.setTransform(-38.3,-41.4,1,1,-3.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.9,-67.3,134.8,82.1);


(lib.NA_Imp_Walk001_Red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.NA_Imp_Pinch01_0();
	this.instance.setTransform(-16.7,-13.5,1.008,1.058,0,40.3,37.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:1.09,skewX:15.8,skewY:30.4,x:-10.5,y:-12.6},5).to({scaleX:0.99,scaleY:1.15,skewX:11.3,skewY:25.7,x:-4.7,y:-32.3},4).to({scaleX:0.98,skewX:-3.7,skewY:9.7,x:0,y:-50.9},4).to({scaleX:1,scaleY:1.04,skewX:-1.7,skewY:-0.5,x:-0.7,y:-59.7},4).to({scaleX:1.01,scaleY:1.04,skewX:-6.1,skewY:-7.1,x:0.6,y:-48.4},3).to({scaleX:0.91,scaleY:1.15,skewX:-11.4,skewY:-23.9,x:6,y:-28.3},4).to({scaleX:1.03,scaleY:1.02,skewX:-32.9,skewY:-20.7,x:7.5,y:-4.5},4).to({scaleX:0.9,scaleY:1.01,skewX:-28.9,skewY:-26.5,x:7.3,y:-7.3},5).to({scaleX:0.9,scaleY:1.01,skewX:-16,skewY:-23.1,x:3.4,y:-26.4},4).to({scaleX:0.94,skewX:-10.1,skewY:-8.6,x:-0.7,y:-46.3},4).to({scaleX:1.01,scaleY:1.04,skewX:0.6,skewY:0.8,y:-59.4},4).to({scaleX:1.01,skewX:11.6,skewY:15.8,x:-5.5,y:-52},3).to({scaleX:1.02,scaleY:1.09,skewX:22.1,skewY:31.2,x:-8.9,y:-37.7},3).to({scaleX:1.01,scaleY:1.06,skewX:40.3,skewY:37.7,x:-16.7,y:-13.5},3).wait(1));

	// NA_GreenImp_Pinch01
	this.instance_1 = new lib.NA_Imp_Pinch01();
	this.instance_1.setTransform(-16.7,-13.5,1.008,1.058,0,40.3,37.7);
	this.instance_1.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_1.cache(-15,-9,35,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.97,scaleY:1.09,skewX:15.8,skewY:30.4,x:-10.5,y:-12.6},5).to({scaleX:0.99,scaleY:1.15,skewX:11.3,skewY:25.7,x:-4.7,y:-32.3},4).to({scaleX:0.98,skewX:-3.7,skewY:9.7,x:0,y:-50.9},4).to({scaleX:1,scaleY:1.04,skewX:-1.7,skewY:-0.5,x:-0.7,y:-59.7},4).to({scaleX:1.01,scaleY:1.04,skewX:-6.1,skewY:-7.1,x:0.6,y:-48.4},3).to({scaleX:0.91,scaleY:1.15,skewX:-11.4,skewY:-23.9,x:6,y:-28.3},4).to({scaleX:1.03,scaleY:1.02,skewX:-32.9,skewY:-20.7,x:7.5,y:-4.5},4).to({scaleX:0.9,scaleY:1.01,skewX:-28.9,skewY:-26.5,x:7.3,y:-7.3},5).to({scaleX:0.9,scaleY:1.01,skewX:-16,skewY:-23.1,x:3.4,y:-26.4},4).to({scaleX:0.94,skewX:-10.1,skewY:-8.6,x:-0.7,y:-46.3},4).to({scaleX:1.01,scaleY:1.04,skewX:0.6,skewY:0.8,y:-59.4},4).to({scaleX:1.01,skewX:11.6,skewY:15.8,x:-5.5,y:-52},3).to({scaleX:1.02,scaleY:1.09,skewX:22.1,skewY:31.2,x:-8.9,y:-37.7},3).to({scaleX:1.01,scaleY:1.06,skewX:40.3,skewY:37.7,x:-16.7,y:-13.5},3).wait(1));

	// NA_GreenImp_RightEye01_2
	this.instance_2 = new lib.NA_Imp_RightEye01_0();
	this.instance_2.setTransform(4.5,-51.2,0.72,0.925,0,0.6,-172.3,0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-0.2,scaleX:0.71,scaleY:0.96,skewX:12.9,skewY:-163.2,x:3.2,y:-59.5},5).to({scaleY:0.92,skewX:13.2,skewY:-165.9,x:4.7,y:-85.2},4).to({regX:0.2,regY:-0.5,scaleX:0.71,scaleY:0.93,skewX:-14.3,skewY:-193.7,x:-4.7,y:-99.2},4).to({regX:0.3,scaleX:0.71,scaleY:0.95,skewX:-22.3,skewY:-192.8,x:-7.6,y:-101.3},4).to({scaleX:0.73,scaleY:0.94,skewX:-24.7,skewY:-202,x:-11.5,y:-92.9},3).to({regX:0.4,regY:-0.4,scaleX:0.73,scaleY:0.9,skewX:-33.4,skewY:-216.6,x:-15.1,y:-72.1},4).to({regX:0.3,regY:-0.5,scaleX:0.73,scaleY:0.86,skewX:-42.4,skewY:-220,x:-23.1,y:-35.9},4).to({regY:-0.4,skewX:-59.9,skewY:-237.4,x:-17.2,y:-41.7},5).to({regX:0.4,scaleX:0.71,scaleY:0.9,skewX:-30.5,skewY:-217,x:-13.1,y:-71.7},4).to({regY:-0.6,scaleX:0.71,scaleY:0.89,skewX:-23.9,skewY:-197.5,x:-12.1,y:-91.6},4).to({regX:0.3,scaleX:0.73,scaleY:0.94,skewX:-19.8,skewY:-196.1,x:-7.8,y:-101.2},4).to({regX:0.1,regY:-0.8,scaleX:0.73,scaleY:0.94,skewX:-4.2,skewY:-179.4,x:-5.8,y:-96.5},3).to({regX:0.3,regY:-0.7,scaleX:0.72,scaleY:0.99,skewX:15.7,skewY:-161.5,x:2.5,y:-89.5},3).to({regX:0.1,regY:-0.4,scaleX:0.72,scaleY:0.93,skewX:0.6,skewY:-172.3,x:4.5,y:-51.2},3).wait(1));

	// NA_GreenImp_RightEye01_1
	this.instance_3 = new lib.NA_Imp_RightEye01_0();
	this.instance_3.setTransform(25.7,-37.6,1,1.008,0,53,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,skewX:45.6,skewY:44.3,x:22.8,y:-46.6},5).to({scaleX:1,scaleY:0.99,skewX:38.9,skewY:37,x:25.4,y:-74.3},4).to({skewX:8.9,skewY:7,x:17.7,y:-98.7},4).to({scaleX:1,scaleY:1,skewX:14.7,skewY:7.6,x:16.4,y:-101.6},4).to({scaleX:1.01,scaleY:0.99,skewX:-2.3,skewY:-4.7,x:10.8,y:-97.4},3).to({scaleX:1.02,scaleY:1,skewX:-17.7,skewY:-25.2,x:4.3,y:-83.7},4).to({scaleX:1.01,skewX:-10.7,skewY:-15.9,x:-1.9,y:-46.8},4).to({scaleX:1,scaleY:1.01,skewX:-5.3,skewY:-12.8,x:3.6,y:-55.3},5).to({skewX:-14.8,skewY:-22.4,x:6.4,y:-82.8},4).to({scaleX:1.01,scaleY:0.97,skewX:-4.4,skewY:-6.5,x:10.4,y:-96.2},4).to({scaleX:1.01,scaleY:0.98,skewX:15.9,skewY:8.7,x:16.4,y:-101.6},4).to({scaleX:1.01,scaleY:0.99,skewX:24.3,skewY:18.1,x:16.8,y:-92.6},3).to({scaleX:1.03,scaleY:0.95,skewX:38.9,skewY:34.3,x:23.1,y:-78.6},3).to({scaleX:1,scaleY:1.01,skewX:53,skewY:55.5,x:25.7,y:-37.6},3).wait(1));

	// NA_GreenImp_RightEye01_0
	this.instance_4 = new lib.NA_Imp_RightEye01();
	this.instance_4.setTransform(4.5,-51.2,0.72,0.925,0,0.6,-172.3,0.1,-0.4);
	this.instance_4.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_4.cache(-12,-12,24,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-0.2,scaleX:0.71,scaleY:0.96,skewX:12.9,skewY:-163.2,x:3.2,y:-59.5},5).to({scaleY:0.92,skewX:13.2,skewY:-165.9,x:4.7,y:-85.2},4).to({regX:0.2,regY:-0.5,scaleX:0.71,scaleY:0.93,skewX:-14.3,skewY:-193.7,x:-4.7,y:-99.2},4).to({regX:0.3,scaleX:0.71,scaleY:0.95,skewX:-22.3,skewY:-192.8,x:-7.6,y:-101.3},4).to({scaleX:0.73,scaleY:0.94,skewX:-24.7,skewY:-202,x:-11.5,y:-92.9},3).to({regX:0.4,regY:-0.4,scaleX:0.73,scaleY:0.9,skewX:-33.4,skewY:-216.6,x:-15.1,y:-72.1},4).to({regX:0.3,regY:-0.5,scaleX:0.73,scaleY:0.86,skewX:-42.4,skewY:-220,x:-23.1,y:-35.9},4).to({regY:-0.4,skewX:-59.9,skewY:-237.4,x:-17.2,y:-41.7},5).to({regX:0.4,scaleX:0.71,scaleY:0.9,skewX:-30.5,skewY:-217,x:-13.1,y:-71.7},4).to({regY:-0.6,scaleX:0.71,scaleY:0.89,skewX:-23.9,skewY:-197.5,x:-12.1,y:-91.6},4).to({regX:0.3,scaleX:0.73,scaleY:0.94,skewX:-19.8,skewY:-196.1,x:-7.8,y:-101.2},4).to({regX:0.1,regY:-0.8,scaleX:0.73,scaleY:0.94,skewX:-4.2,skewY:-179.4,x:-5.8,y:-96.5},3).to({regX:0.3,regY:-0.7,scaleX:0.72,scaleY:0.99,skewX:15.7,skewY:-161.5,x:2.5,y:-89.5},3).to({regX:0.1,regY:-0.4,scaleX:0.72,scaleY:0.93,skewX:0.6,skewY:-172.3,x:4.5,y:-51.2},3).wait(1));

	// NA_GreenImp_RightEye01
	this.instance_5 = new lib.NA_Imp_RightEye01();
	this.instance_5.setTransform(25.7,-37.6,1,1.008,0,53,55.5);
	this.instance_5.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_5.cache(-12,-12,24,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,skewX:45.6,skewY:44.3,x:22.8,y:-46.6},5).to({scaleX:1,scaleY:0.99,skewX:38.9,skewY:37,x:25.4,y:-74.3},4).to({skewX:8.9,skewY:7,x:17.7,y:-98.7},4).to({scaleX:1,scaleY:1,skewX:14.7,skewY:7.6,x:16.4,y:-101.6},4).to({scaleX:1.01,scaleY:0.99,skewX:-2.3,skewY:-4.7,x:10.8,y:-97.4},3).to({scaleX:1.02,scaleY:1,skewX:-17.7,skewY:-25.2,x:4.3,y:-83.7},4).to({scaleX:1.01,skewX:-10.7,skewY:-15.9,x:-1.9,y:-46.8},4).to({scaleX:1,scaleY:1.01,skewX:-5.3,skewY:-12.8,x:3.6,y:-55.3},5).to({skewX:-14.8,skewY:-22.4,x:6.4,y:-82.8},4).to({scaleX:1.01,scaleY:0.97,skewX:-4.4,skewY:-6.5,x:10.4,y:-96.2},4).to({scaleX:1.01,scaleY:0.98,skewX:15.9,skewY:8.7,x:16.4,y:-101.6},4).to({scaleX:1.01,scaleY:0.99,skewX:24.3,skewY:18.1,x:16.8,y:-92.6},3).to({scaleX:1.03,scaleY:0.95,skewX:38.9,skewY:34.3,x:23.1,y:-78.6},3).to({scaleX:1,scaleY:1.01,skewX:53,skewY:55.5,x:25.7,y:-37.6},3).wait(1));

	// NA_GreenImp_Ear01_0
	this.instance_6 = new lib.NA_Imp_Ear01();
	this.instance_6.setTransform(34.5,-34.8,0.999,0.999,27,0,0,-0.1,0);
	this.instance_6.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_6.cache(-3,-8,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0,scaleY:1.02,rotation:0,skewX:83.7,skewY:72,x:27.2,y:-43},5).to({skewX:113.2,skewY:101.5,x:29.8,y:-70.7},4).to({scaleX:0.99,scaleY:1.08,skewX:45.8,skewY:37.2,x:25.7,y:-97.1},4).to({scaleX:0.99,skewX:0.8,skewY:-4.5,x:25.6,y:-100.6},4).to({skewX:-11.8,skewY:-17.2,x:20.4,y:-97.7},3).to({skewX:-17.8,skewY:-23.2,x:12.8,y:-86},4).to({skewX:-16.3,skewY:-21.7,x:7.7,y:-48.4},4).to({skewX:-22.3,skewY:-27.6,x:7.4,y:-61.8},5).to({x:13.3,y:-90.6},4).to({scaleX:0.98,skewY:-19.9,x:19.8,y:-100.4},4).to({scaleY:1.08,skewX:-3.6,skewY:-4.9,x:26.2,y:-100.8},4).to({skewX:7.4,skewY:6.1,x:26,y:-92.4},3).to({skewX:22.4,skewY:21.1,x:30.4,y:-78},3).to({regX:-0.1,scaleX:1,scaleY:1,rotation:27,skewX:0,skewY:0,x:34.5,y:-34.8},3).wait(1));

	// NA_GreenImp_Nose01_0
	this.instance_7 = new lib.NA_Imp_Nose01_0();
	this.instance_7.setTransform(11.6,-40.1,1,1,31.7);
	this.instance_7.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_7.cache(-6,-3,11,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:8.5,y:-47.8},5).to({scaleX:1,rotation:0,skewX:22.7,skewY:25.3,x:10.9,y:-73.8},4).to({scaleY:1.08,skewX:-11.7,skewY:10.3,x:5.8,y:-91.3},4).to({scaleX:0.97,skewY:4.7,x:3.8,y:-94.2},4).to({skewX:-20.9,skewY:-4.5,x:0.7,y:-87.6},3).to({scaleX:0.93,skewX:-34.6,skewY:-28.6,x:-2.8,y:-70},4).to({skewX:-32.4,skewY:-26.4,x:-10.4,y:-34.3},4).to({skewX:-36.9,skewY:-30.9,x:-4.7,y:-43.1},5).to({scaleX:0.93,scaleY:0.98,skewX:-31.4,skewY:-28.8,x:-1.1,y:-69},4).to({scaleY:0.98,skewX:-10.7,skewY:-13.8,x:-0.5,y:-86.2},4).to({skewX:4.3,skewY:1.2,x:3.5,y:-94.1},4).to({scaleX:0.93,skewX:13,skewY:8.6,x:3.2,y:-87.2},3).to({scaleX:0.98,scaleY:0.99,skewX:34.7,skewY:23.6,x:8.3,y:-77.5},3).to({scaleX:1,scaleY:1,rotation:31.7,skewX:0,skewY:0,x:11.6,y:-40.1},3).wait(1));

	// NA_GreenImp_Nose01
	this.instance_8 = new lib.NA_Imp_Nose01();
	this.instance_8.setTransform(11.6,-40.1,1,1,31.7);
	this.instance_8.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_8.cache(-6,-5,13,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:8.5,y:-47.8},5).to({scaleX:1,rotation:0,skewX:22.7,skewY:25.3,x:10.9,y:-73.8},4).to({scaleY:1.08,skewX:-11.7,skewY:10.3,x:5.8,y:-91.3},4).to({scaleX:0.97,skewY:4.7,x:3.8,y:-94.2},4).to({skewX:-20.9,skewY:-4.5,x:0.7,y:-87.6},3).to({scaleX:0.93,skewX:-34.6,skewY:-28.6,x:-2.8,y:-70},4).to({skewX:-32.4,skewY:-26.4,x:-10.4,y:-34.3},4).to({skewX:-36.9,skewY:-30.9,x:-4.7,y:-43.1},5).to({scaleX:0.93,scaleY:0.98,skewX:-31.4,skewY:-28.8,x:-1.1,y:-69},4).to({scaleY:0.98,skewX:-10.7,skewY:-13.8,x:-0.5,y:-86.2},4).to({skewX:4.3,skewY:1.2,x:3.5,y:-94.1},4).to({scaleX:0.93,skewX:13,skewY:8.6,x:3.2,y:-87.2},3).to({scaleX:0.98,scaleY:0.99,skewX:34.7,skewY:23.6,x:8.3,y:-77.5},3).to({scaleX:1,scaleY:1,rotation:31.7,skewX:0,skewY:0,x:11.6,y:-40.1},3).wait(1));

	// NA_GreenImp_Horn01_0
	this.instance_9 = new lib.NA_Imp_Horn01();
	this.instance_9.setTransform(32.8,-42.8,1.005,1.002,0,35.3,28.4,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:-0.2,x:28.3,y:-51.5},5).to({regX:-0.1,regY:-0.1,scaleX:0.99,scaleY:1,skewX:30.1,skewY:26.3,x:28.9,y:-77.5},4).to({scaleY:1,skewX:-3.9,skewY:-2.4,x:21.8,y:-102.9},4).to({regY:-0.3,scaleX:0.99,rotation:-3.9,skewX:0,skewY:0,x:20.5,y:-106.9},4).to({rotation:-13.1,x:14.3,y:-103.2},3).to({rotation:-41.8,x:4.6,y:-91.8},4).to({regY:-0.1,scaleX:0.98,scaleY:1.01,rotation:0,skewX:-23,skewY:-27.7,x:-0.7,y:-52.1},4).to({scaleX:0.98,scaleY:1.02,skewX:-47.4,skewY:-55.6,x:-0.5,y:-65.5},5).to({regX:-0.3,regY:-0.2,scaleX:0.97,scaleY:1.02,skewX:-38.5,skewY:-43.6,x:5.4,y:-95.3},4).to({regX:-0.2,scaleY:1.02,skewX:-33.1,skewY:-27.9,x:13.8,y:-106.3},4).to({regY:-0.1,scaleX:0.97,scaleY:1.02,skewX:-11.9,skewY:-8,x:21.2,y:-106.6},4).to({regX:-0.3,regY:-0.2,scaleX:0.97,scaleY:1.02,skewX:-0.3,skewY:1,y:-98.7},3).to({scaleX:0.98,skewX:7.9,skewY:15.7,x:28.4,y:-85.6},3).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,skewX:35.3,skewY:28.4,x:32.8,y:-42.8},3).wait(1));

	// NA_GreenImp_LowerJaw01_0
	this.instance_10 = new lib.NA_Imp_LowerJaw01_teeth_0();
	this.instance_10.setTransform(-7.1,-20.3,1.022,1.005,0,37.8,29.9,-0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:-0.4,regY:-0.1,scaleX:1.04,scaleY:0.92,skewX:33.2,skewY:38.3,x:-6.8,y:-26},5).to({regX:-0.5,regY:0.1,scaleX:0.97,scaleY:0.93,skewX:15.9,skewY:30.4,x:-1.1,y:-44.2},4).to({regX:-0.4,regY:0.4,scaleX:0.96,scaleY:0.89,skewX:4.1,skewY:10.4,x:0.7,y:-61.4},4).to({regY:0.3,scaleX:1.02,scaleY:0.88,skewX:0.2,skewY:0.7,x:-0.3,y:-70.1},4).to({regX:-0.3,regY:0.2,scaleX:1.02,scaleY:0.85,skewX:-0.1,skewY:-9.3,x:-0.2,y:-59.2},3).to({regX:-0.1,regY:0.1,scaleX:1.02,scaleY:0.83,skewX:-21.4,skewY:-31.9,x:4,y:-40.3},4).to({regX:-0.4,scaleX:1.04,scaleY:0.85,skewX:-25,skewY:-21.2,x:0.6,y:-11.3},4).to({regX:-0.3,regY:0.3,scaleX:0.95,scaleY:0.88,skewX:-15.1,skewY:-30.7,x:2.3,y:-18.1},5).to({regX:-0.1,regY:0.2,scaleX:0.97,scaleY:0.8,skewX:-16.3,skewY:-31.2,x:2,y:-37.2},4).to({regX:-0.2,regY:0,scaleX:0.95,scaleY:0.81,skewX:-3,skewY:-15.9,x:-1.3,y:-56},4).to({regX:-0.3,regY:-0.2,scaleX:1.04,scaleY:0.79,skewX:0.2,skewY:-0.2,x:-0.5,y:-70.9},4).to({regX:-0.1,regY:-0.3,scaleX:1.04,scaleY:0.85,skewX:14,skewY:14.8,x:-1.6,y:-65.3},3).to({regX:0,regY:-0.4,scaleX:1.03,scaleY:0.87,skewX:17.8,skewY:29.5,x:-0.8,y:-50.4},3).to({regX:-0.4,regY:-0.3,scaleX:1.02,scaleY:1,skewX:37.8,skewY:29.9,x:-7.2,y:-20.4},3).wait(1));

	// NA_GreenImp_UpperJaw01_0
	this.instance_11 = new lib.NA_Imp_UpperJaw01_teeth_0();
	this.instance_11.setTransform(6.6,-36.9,1.016,0.971,0,45.4,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:0.88,scaleY:1.02,skewX:25.8,skewY:34.3,x:4.3,y:-43},5).to({scaleX:0.84,scaleY:1.02,skewX:20.2,skewY:28,x:7.2,y:-68.8},4).to({scaleX:0.95,scaleY:1.02,skewX:-1.5,skewY:3.7,x:3.2,y:-86.7},4).to({scaleX:1.03,scaleY:0.75,skewX:-5,skewY:-0.4,x:1.7,y:-90.3},4).to({scaleX:0.99,scaleY:0.89,skewX:-2.5,skewY:-14.5,x:-0.6,y:-81.9},3).to({scaleX:0.98,scaleY:0.93,skewX:-17.1,skewY:-35.2,x:-2,y:-65},4).to({scaleX:0.95,scaleY:0.88,skewX:-26.4,skewY:-28.8,x:-8.7,y:-29.3},4).to({scaleX:0.95,scaleY:0.91,skewX:-17.8,skewY:-33.2,x:-2.9,y:-37.1},5).to({scaleX:0.97,scaleY:0.9,skewX:-15.9,skewY:-34.5,x:-1.1,y:-64.1},4).to({scaleX:0.98,scaleY:0.87,skewX:-2.6,skewY:-14.3,x:-0.7,y:-81.4},4).to({scaleX:1.05,scaleY:0.78,skewX:2.6,skewY:-1,x:2.2,y:-90.5},4).to({scaleX:0.96,scaleY:1.04,skewX:-2.9,skewY:8.4,x:1.9,y:-82.6},3).to({scaleX:0.93,scaleY:1,skewX:13.2,skewY:24.9,x:7.7,y:-73.5},3).to({scaleX:1.02,scaleY:0.97,skewX:45.4,skewY:29.6,x:6.6,y:-36.9},3).wait(1));

	// NA_GreenImp_LowerJaw01
	this.instance_12 = new lib.NA_Imp_LowerJaw01();
	this.instance_12.setTransform(-7.1,-20.3,1.022,1.005,0,37.8,29.9,-0.3,-0.3);
	this.instance_12.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_12.cache(-20,-13,49,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:-0.4,regY:-0.1,scaleX:1.04,scaleY:0.92,skewX:33.2,skewY:38.3,x:-6.8,y:-26},5).to({regX:-0.5,regY:0.1,scaleX:0.97,scaleY:0.93,skewX:15.9,skewY:30.4,x:-1.1,y:-44.2},4).to({regX:-0.4,regY:0.4,scaleX:0.96,scaleY:0.89,skewX:4.1,skewY:10.4,x:0.7,y:-61.4},4).to({regY:0.3,scaleX:1.02,scaleY:0.88,skewX:0.2,skewY:0.7,x:-0.3,y:-70.1},4).to({regX:-0.3,regY:0.2,scaleX:1.02,scaleY:0.85,skewX:-0.1,skewY:-9.3,x:-0.2,y:-59.2},3).to({regX:-0.1,regY:0.1,scaleX:1.02,scaleY:0.83,skewX:-21.4,skewY:-31.9,x:4,y:-40.3},4).to({regX:-0.4,scaleX:1.04,scaleY:0.85,skewX:-25,skewY:-21.2,x:0.6,y:-11.3},4).to({regX:-0.3,regY:0.3,scaleX:0.95,scaleY:0.88,skewX:-15.1,skewY:-30.7,x:2.3,y:-18.1},5).to({regX:-0.1,regY:0.2,scaleX:0.97,scaleY:0.8,skewX:-16.3,skewY:-31.2,x:2,y:-37.2},4).to({regX:-0.2,regY:0,scaleX:0.95,scaleY:0.81,skewX:-3,skewY:-15.9,x:-1.3,y:-56},4).to({regX:-0.3,regY:-0.2,scaleX:1.04,scaleY:0.79,skewX:0.2,skewY:-0.2,x:-0.5,y:-70.9},4).to({regX:-0.1,regY:-0.3,scaleX:1.04,scaleY:0.85,skewX:14,skewY:14.8,x:-1.6,y:-65.3},3).to({regX:0,regY:-0.4,scaleX:1.03,scaleY:0.87,skewX:17.8,skewY:29.5,x:-0.8,y:-50.4},3).to({regX:-0.4,regY:-0.3,scaleX:1.02,scaleY:1,skewX:37.8,skewY:29.9,x:-7.2,y:-20.4},3).wait(1));

	// NA_GreenImp_UpperJaw01
	this.instance_13 = new lib.NA_Imp_UpperJaw01();
	this.instance_13.setTransform(6.6,-36.9,1.016,0.971,0,45.4,29.6);
	this.instance_13.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_13.cache(-19,-9,46,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:0.88,scaleY:1.02,skewX:25.8,skewY:34.3,x:4.3,y:-43},5).to({scaleX:0.84,scaleY:1.02,skewX:20.2,skewY:28,x:7.2,y:-68.8},4).to({scaleX:0.95,scaleY:1.02,skewX:-1.5,skewY:3.7,x:3.2,y:-86.7},4).to({scaleX:1.03,scaleY:0.75,skewX:-5,skewY:-0.4,x:1.7,y:-90.3},4).to({scaleX:0.99,scaleY:0.89,skewX:-2.5,skewY:-14.5,x:-0.6,y:-81.9},3).to({scaleX:0.98,scaleY:0.93,skewX:-17.1,skewY:-35.2,x:-2,y:-65},4).to({scaleX:0.95,scaleY:0.88,skewX:-26.4,skewY:-28.8,x:-8.7,y:-29.3},4).to({scaleX:0.95,scaleY:0.91,skewX:-17.8,skewY:-33.2,x:-2.9,y:-37.1},5).to({scaleX:0.97,scaleY:0.9,skewX:-15.9,skewY:-34.5,x:-1.1,y:-64.1},4).to({scaleX:0.98,scaleY:0.87,skewX:-2.6,skewY:-14.3,x:-0.7,y:-81.4},4).to({scaleX:1.05,scaleY:0.78,skewX:2.6,skewY:-1,x:2.2,y:-90.5},4).to({scaleX:0.96,scaleY:1.04,skewX:-2.9,skewY:8.4,x:1.9,y:-82.6},3).to({scaleX:0.93,scaleY:1,skewX:13.2,skewY:24.9,x:7.7,y:-73.5},3).to({scaleX:1.02,scaleY:0.97,skewX:45.4,skewY:29.6,x:6.6,y:-36.9},3).wait(1));

	// NA_GreenImp_Moth01
	this.instance_14 = new lib.NA_Imp_Moth01();
	this.instance_14.setTransform(5.8,-33.6,0.991,1.098,0,38,31.7,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:-0.1,regY:-0.4,scaleX:0.94,scaleY:0.9,skewX:35.6,skewY:37.9,x:4,y:-38.2},5).to({regX:0,regY:-0.1,scaleX:0.81,scaleY:1.07,skewX:20.9,skewY:28.7,x:7.8,y:-63.8},4).to({regX:-0.3,regY:-0.3,scaleX:0.9,scaleY:1.06,skewX:4.4,skewY:7,x:4,y:-81.7},4).to({regX:-0.5,regY:-0.4,scaleX:1.08,scaleY:0.84,skewX:-0.7,skewY:0,x:2.9,y:-86.4},4).to({regX:-0.7,regY:-0.5,scaleX:0.92,scaleY:1.13,skewX:-5.3,skewY:-12.3,x:0.7,y:-79.6},3).to({regX:-0.5,scaleX:0.86,scaleY:1.02,skewX:-19,skewY:-30.8,x:-0.5,y:-60.7},4).to({regX:-0.6,regY:-0.3,scaleX:0.91,scaleY:0.89,skewX:-35.7,skewY:-23.4,x:-5.4,y:-26.9},4).to({regX:-0.5,regY:-0.2,scaleX:0.9,scaleY:0.92,skewX:-13.3,skewY:-28.8,x:-0.4,y:-35},5).to({regX:0.1,scaleX:0.86,scaleY:1.15,skewX:-4.9,skewY:-31.7,x:1.2,y:-60.1},4).to({regY:-0.6,scaleX:1.02,scaleY:0.96,skewX:-3.8,skewY:-15,x:0.7,y:-78},4).to({regX:0.2,regY:-0.7,scaleX:1.09,scaleY:0.94,skewX:3.1,skewY:0.6,x:4,y:-86.7},4).to({regY:-0.6,scaleX:0.94,scaleY:0.95,skewX:14.1,skewY:13.4,x:3.8,y:-79.1},3).to({regX:0.1,regY:-0.7,scaleX:0.94,scaleY:1.12,skewX:21.4,skewY:26.2,x:7.5,y:-68.2},3).to({regX:-0.2,regY:-0.1,scaleX:0.99,scaleY:1.1,skewX:38,skewY:31.7,x:5.8,y:-33.6},3).wait(1));

	// NA_GreenImp_Body01
	this.instance_15 = new lib.NA_Imp_Body01();
	this.instance_15.setTransform(9.6,-34.3,1.052,1.044,0,33.4,26.2,-0.1,-0.1);
	this.instance_15.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_15.cache(-31,-26,61,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:0.89,scaleY:1.1,skewX:25.6,skewY:34.6,x:7.9,y:-41.7},5).to({scaleX:0.86,scaleY:1.19,skewX:17.2,skewY:25.6,x:10.3,y:-64.5},4).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1.07,skewX:3.9,skewY:6.2,x:7.3,y:-84},4).to({scaleX:1.09,scaleY:0.96,skewX:2.7,skewY:0.2,x:6.1,y:-89.1},4).to({regX:-0.1,scaleX:1.06,scaleY:1.04,skewX:-7.2,skewY:-14.8,x:2.8,y:-80.5},3).to({regX:0,regY:0,scaleX:0.99,scaleY:1.13,skewX:-19,skewY:-35,x:0.7,y:-64},4).to({scaleX:1.09,scaleY:0.98,skewX:-36.5,skewY:-25,x:-2.7,y:-32.2},4).to({scaleX:1,scaleY:1.06,skewX:-29.4,skewY:-39.4,x:-0.7,y:-39.6},5).to({scaleX:0.97,scaleY:1.23,skewX:-13.2,skewY:-35.4,x:1.2,y:-65.7},4).to({scaleX:1.06,scaleY:1.05,skewX:-7.5,skewY:-18.5,x:2.3,y:-82.1},4).to({scaleX:1.09,scaleY:0.96,skewX:1.8,skewY:0.4,x:5.7,y:-89.4},4).to({scaleX:1.04,scaleY:1.03,skewX:6.4,skewY:9,x:6,y:-81.1},3).to({scaleX:0.97,scaleY:1.18,skewX:17.9,skewY:23.3,x:9.5,y:-68.9},3).to({regX:-0.1,regY:-0.1,scaleX:1.05,scaleY:1.04,skewX:33.4,skewY:26.2,x:9.6,y:-34.3},3).wait(1));

	// NA_GreenImp_Arm01_0
	this.instance_16 = new lib.NA_Imp_Arm01();
	this.instance_16.setTransform(30.4,-27.9,1.004,0.999,0,46.9,52.7,-0.1,0.1);
	this.instance_16.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_16.cache(-2,-17,23,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regY:0,scaleX:1,scaleY:0.98,skewX:79.7,skewY:84.7,x:22.6,y:-33.8},5).to({regY:-0.1,scaleY:0.98,skewX:98.7,skewY:92.6,x:25.8,y:-59.9},4).to({scaleX:1.03,scaleY:0.99,skewX:59.1,skewY:67.6,x:25.6,y:-89.6},4).to({regX:-0.2,regY:-0.3,scaleX:1.03,scaleY:0.98,skewX:26.7,skewY:35.1,x:27.7,y:-94.4},4).to({regX:-0.1,regY:-0.4,skewX:-12.9,skewY:-4.1,x:22.3,y:-91.2},3).to({regY:-0.3,scaleX:1.04,scaleY:0.97,skewX:-20.6,skewY:-25.9,x:15.5,y:-78.7},4).to({scaleY:0.97,skewX:-44.5,skewY:-40.9,x:13.5,y:-45.4},4).to({regY:-0.4,scaleY:0.97,skewX:-33.5,skewY:-34.7,x:13.6,y:-53.7},5).to({scaleX:1.04,scaleY:1.03,skewX:-17.9,skewY:-21.1,x:14.9,y:-81.3},4).to({regX:0,regY:-0.3,scaleY:1.03,skewX:-6.6,skewY:-6.1,x:21.5,y:-92.9},4).to({regX:-0.1,scaleX:1.04,scaleY:1.01,skewX:-3.2,skewY:7.7,x:28.1,y:-93.5},4).to({regY:-0.2,skewX:7.8,skewY:18.7,x:26.2,y:-84.8},3).to({regY:-0.1,scaleY:0.99,skewX:52.6,skewY:57.7,x:26.6,y:-67.9},3).to({regY:0.1,scaleX:1,scaleY:1,skewX:46.9,skewY:52.7,x:30.4,y:-27.9},3).wait(1));

	// NA_GreenImp_Horn01
	this.instance_17 = new lib.NA_Imp_Horn01();
	this.instance_17.setTransform(13.5,-55.2,0.921,0.997,0,45.9,-136.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:0.86,scaleY:1,skewX:45.7,skewY:-129.1,x:10.4,y:-65.7},5).to({scaleX:0.99,scaleY:1,skewX:37.8,skewY:-138.1,x:10,y:-89.7},4).to({scaleX:0.89,scaleY:1.11,skewX:13,skewY:-172.6,x:-4.4,y:-103.8},4).to({scaleX:0.89,scaleY:1.08,skewX:9.7,skewY:-169.6,x:-6.9,y:-105.6},4).to({scaleX:0.9,scaleY:1.08,skewX:-7.2,skewY:-177.6,x:-9.3,y:-97.3},3).to({skewX:-13.9,skewY:-184.3,x:-12.4,y:-78.4},4).to({skewX:-12.9,skewY:-183.3,x:-23.1,y:-42.2},4).to({scaleX:0.88,scaleY:1.08,skewX:-15.3,skewY:-193.9,x:-17.6,y:-50.3},5).to({scaleY:1.08,skewX:-17.3,x:-10.9,y:-81.8},4).to({scaleX:0.97,skewY:-188.3,x:-10.1,y:-96.9},4).to({scaleX:0.93,scaleY:1.07,skewX:4.6,skewY:-172.3,x:-6.1,y:-105.6},4).to({scaleX:0.93,skewX:15.6,skewY:-161.8,x:-4.2,y:-101.8},3).to({scaleX:0.94,scaleY:1.06,skewX:27.2,skewY:-147.5,x:7.6,y:-94},3).to({scaleX:0.92,scaleY:1,skewX:45.9,skewY:-136.4,x:13.5,y:-55.2},3).wait(1));

	// NA_GreenImp_Leg02_0
	this.instance_18 = new lib.NA_Imp_Leg02();
	this.instance_18.setTransform(-22.9,-38,1.242,0.366,0,89.9,-94.2);
	this.instance_18.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_18.cache(-13,-21,25,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleX:1.15,scaleY:0.34,skewX:66.4,skewY:-112.1,x:-21.9,y:-34},5).to({scaleX:1.22,scaleY:0.37,skewX:71.6,skewY:-119.7,x:-17.8,y:-57.3},4).to({scaleY:0.41,skewX:51.1,skewY:-140.2,x:-19.4,y:-65.9},4).to({scaleX:1.23,scaleY:0.43,skewX:11.5,skewY:-176,x:-17.5,y:-65},4).to({scaleX:0.71,scaleY:0.71,skewX:-6.2,skewY:-184.4,x:-12.1,y:-47.7},3).to({scaleX:0.69,scaleY:1.04,skewX:-8.2,skewY:-179.1,x:-5.2,y:-22.4},4).to({scaleX:0.89,scaleY:0.68,skewX:-86.5,skewY:-227.1,x:-8,y:-2.6},4).to({scaleX:0.71,scaleY:0.7,skewX:-103.6,skewY:-264.1,x:1,y:-4.5},5).to({scaleX:0.73,scaleY:0.98,skewX:-34.1,skewY:-192.4,x:0.6,y:-19.4},4).to({scaleX:0.81,scaleY:0.76,skewX:-28.2,skewY:-180.1,x:-8.9,y:-46.1},4).to({scaleX:0.88,scaleY:0.46,skewX:-51.4,skewY:-211.1,x:-20,y:-63.9},4).to({scaleY:0.49,skewX:-29.9,skewY:-180.5,x:-23.7,y:-63.7},3).to({scaleX:0.89,scaleY:0.5,skewX:0.4,skewY:-144.9,x:-21.6,y:-63.8},3).to({scaleX:1.24,scaleY:0.37,skewX:89.9,skewY:-94.2,x:-22.9,y:-38},3).wait(1));

	// NA_GreenImp_Foot01_0
	this.instance_19 = new lib.NA_Imp_Foot01();
	this.instance_19.setTransform(-30.1,-34.3,0.996,0.907,0,63,-113.4);

	this.instance_20 = new lib.Interpolation69();
	this.instance_20.setTransform(15.2,-21.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:-25.3,y:-27.3},5).to({skewX:54.1,skewY:-122.3,x:-21.5,y:-50.9},4).to({scaleX:0.93,skewX:39.1,skewY:-137.3,x:-22.7,y:-59},4).to({scaleX:0.93,scaleY:1.03,skewX:-16.2,skewY:-183,x:-15.8,y:-56.8},4).to({scaleX:0.85,skewX:-40.4,skewY:-215.6,x:-9.7,y:-33},3).to({_off:true,scaleX:1,scaleY:1,skewX:0,skewY:-360,x:15.2,y:-21.5},4).to({_off:false,scaleX:1.28,scaleY:1.24,skewX:12,skewY:-180.4,x:0.6,y:1.2},4).to({scaleX:1.2,scaleY:1.34,skewX:-4.8,skewY:-178.8,x:10.4,y:1.1},5).to({scaleX:1.22,skewX:-65.4,skewY:-258.4,x:11.8,y:-2.2},4).to({scaleX:1.02,skewX:-50.4,skewY:-234,x:-0.2,y:-32.1},4).to({scaleX:0.74,scaleY:1.1,skewX:-12.3,skewY:-183,x:-15.3,y:-57.1},4).to({scaleX:0.83,scaleY:0.97,skewX:27.1,skewY:-151.2,x:-23,y:-56},3).to({scaleX:0.81,scaleY:0.99,skewX:69.2,skewY:-113.6,x:-24,y:-56.2},3).to({scaleX:1,scaleY:0.91,skewX:63,skewY:-113.4,x:-30.1,y:-34.3},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(20).to({_off:false},4).to({_off:true,scaleX:1.28,scaleY:1.24,skewX:12,skewY:-180.4,x:0.6,y:1.2},4).wait(27));

	// Calque 23
	this.instance_21 = new lib.NA_Imp_Foot01();
	this.instance_21.setTransform(41.5,-36.6,0.849,0.81,0,-130.8,-124.7);
	this.instance_21._off = true;
	this.instance_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 46, 21, 27, 0)];
	this.instance_21.cache(-5,-4,10,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(28).to({_off:false},0).to({scaleX:0.97,scaleY:0.8,skewX:-99.7,skewY:-96.4,x:34.1,y:-22.8},5).to({scaleX:0.93,scaleY:0.84,skewX:-74.4,skewY:-75,x:32.4,y:-43.8},4).to({scaleX:0.96,scaleY:0.81,skewX:-46.2,skewY:-46.8,x:27.5,y:-52.1},4).to({_off:true},1).wait(13));

	// NA_GreenImp_Foot01
	this.instance_22 = new lib.NA_Imp_Foot01();
	this.instance_22.setTransform(6.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleY:1.21,x:11.1,y:1.5},5).to({scaleX:1.31,scaleY:1.19,skewX:27.7,skewY:50.2,x:18.5,y:-2.5},4).to({scaleX:1,scaleY:0.97,skewX:41.2,skewY:39,x:23.6,y:-35.5},4).to({skewX:11.2,skewY:9,x:24.2,y:-55.8},4).to({skewX:-28.1,skewY:-30.3,x:28.4,y:-51.7},3).to({scaleX:1.18,scaleY:1.15,skewX:-58.1,skewY:-60.3,x:33.2,y:-44.1},4).to({scaleX:0.97,scaleY:1.41,skewX:-132.7,skewY:-125,x:40.8,y:-36},4).to({scaleX:1.11,scaleY:1.39,skewX:-101.9,skewY:-96.7,x:33.2,y:-22.7},5).to({scaleX:1.06,scaleY:1.45,skewX:-76.4,skewY:-75.3,x:31.6,y:-44.1},4).to({scaleX:1.09,scaleY:1.4,skewX:-48.4,skewY:-47.1,x:27,y:-52.7},4).to({scaleX:0.86,scaleY:1.06,skewX:25.3,skewY:6.3,x:24.4,y:-56.1},4).to({scaleX:0.85,scaleY:1.01,skewX:31.3,skewY:34.5,x:12.5,y:-32.7},3).to({scaleX:1.19,scaleY:1.27,skewX:46.2,skewY:68.5,x:4.2,y:-3.6},3).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:6.8,y:1.9},3).wait(1));

	// NA_GreenImp_Leg02
	this.instance_23 = new lib.NA_Imp_Leg02();
	this.instance_23.setTransform(6.2,-9.7,2.035,0.733,0,-27.4,8.9);
	this.instance_23.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_23.cache(-13,-21,25,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({scaleX:1.41,scaleY:0.71,skewX:-31.8,skewY:-1.1,x:11.7,y:-8.6},5).to({scaleX:0.76,scaleY:1.19,skewX:-4.2,skewY:-25.8,x:16.7,y:-26.9},4).to({scaleX:0.74,scaleY:0.76,skewX:1.8,skewY:-16.3,x:25.1,y:-51.6},4).to({scaleX:1.16,scaleY:0.46,skewX:47.8,skewY:25.9,x:27.8,y:-63.5},4).to({scaleX:1.23,scaleY:0.39,skewX:18.6,skewY:-5.9,x:28.9,y:-59.4},3).to({scaleX:1,scaleY:0.48,skewX:-4.8,skewY:-47.4,x:31.6,y:-53},4).to({scaleX:0.85,skewX:-62.7,skewY:-98.8,x:33.3,y:-39.2},4).to({scaleX:0.97,scaleY:0.47,skewX:-20.9,skewY:-66.1,x:29.5,y:-29.3},5).to({scaleX:0.77,scaleY:0.54,skewX:2.2,skewY:-43.7,x:30.2,y:-53},4).to({scaleX:0.83,scaleY:0.55,skewX:18,skewY:-21.1,x:29.2,y:-60.8},4).to({scaleX:0.95,scaleY:0.38,skewX:32.5,skewY:0.5,x:29.5,y:-61.8},4).to({scaleX:0.82,scaleY:0.69,skewX:14.9,skewY:11,x:17.3,y:-46.7},3).to({scaleX:0.74,scaleY:1.14,skewX:21,skewY:4,x:13,y:-25.8},3).to({scaleX:2.04,scaleY:0.73,skewX:-27.4,skewY:8.9,x:6.2,y:-9.7},3).wait(1));

	// NA_GreenImp_Ear01
	this.instance_24 = new lib.NA_Imp_Ear01();
	this.instance_24.setTransform(7.7,-54.2,0.95,0.95,0,39.9,-140.1,-0.1,-0.2);
	this.instance_24.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_24.cache(-3,-8,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({regX:0,regY:-0.1,x:4.8,y:-64.5},5).to({regX:-0.1,skewX:30.9,skewY:-149.1,x:4.3,y:-88.3},4).to({regX:0,regY:-0.2,skewX:-1.6,skewY:-181.6,x:-8.9,y:-100.5},4).to({skewX:-1.6,x:-11.2,y:-101.8},4).to({regX:-0.2,skewX:-5.1,skewY:-185.1,x:-14.6,y:-93},3).to({regX:-0.1,skewX:-14.6,skewY:-194.6,x:-16.4,y:-71.4},4).to({skewX:-12.4,skewY:-192.4,x:-27.6,y:-37.2},4).to({regX:0.1,regY:-0.3,skewX:-47.1,skewY:-227.1,x:-20.6,y:-42.4},5).to({regX:-0.1,scaleY:0.95,skewX:-48.7,skewY:-223.4,x:-14.6,y:-75},4).to({regX:0,scaleY:0.95,skewX:-25.2,skewY:-205.2,x:-15.6,y:-91.8},4).to({regY:-0.1,skewX:4.8,skewY:-175.2,x:-11.4,y:-101.2},4).to({regX:0.1,skewX:7.6,skewY:-172.4,x:-10,y:-97.8},3).to({regX:0,skewX:22.6,skewY:-155.2,x:1.4,y:-91.9},3).to({regX:-0.1,regY:-0.2,skewX:39.9,skewY:-140.1,x:7.7,y:-54.2},3).wait(1));

	// NA_GreenImp_Arm01
	this.instance_25 = new lib.NA_Imp_Arm01();
	this.instance_25.setTransform(1.5,-51.3,0.959,0.946,0,43.1,-130.5);
	this.instance_25.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 103.5, 0, 0, 0)];
	this.instance_25.cache(-2,-17,23,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({scaleX:0.95,scaleY:0.95,skewX:16.6,skewY:-159.7,x:-1.2,y:-57.5},5).to({skewX:14.1,skewY:-162.2,x:0,y:-81.5},4).to({scaleX:0.96,skewX:-15.9,skewY:-189.7,x:-7.5,y:-93.9},4).to({scaleX:0.95,scaleY:0.96,skewX:0.1,skewY:-187.6,x:-13.1,y:-93.5},4).to({scaleX:0.95,scaleY:0.9,skewX:4.4,skewY:-189,x:-15.2,y:-83.5},3).to({scaleX:0.92,scaleY:0.91,skewX:-13,skewY:-190.4,x:-13.7,y:-61.6},4).to({scaleX:0.94,skewX:-42.6,skewY:-220.2,x:-24,y:-30.6},4).to({scaleX:0.94,scaleY:0.9,skewX:-62.4,skewY:-243.9,x:-18.6,y:-34.2},5).to({scaleX:1.11,scaleY:0.97,skewX:-98.5,skewY:-265.7,x:-12.1,y:-62},4).to({scaleX:1.11,scaleY:0.95,skewX:-30.1,skewY:-215.8,x:-12.6,y:-86.5},4).to({scaleX:1.13,scaleY:0.93,skewX:3.6,skewY:-184.8,x:-11.5,y:-93.3},4).to({scaleY:0.92,skewX:5.5,skewY:-173.8,x:-9.4,y:-90.4},3).to({scaleX:1.18,scaleY:0.96,skewX:33.3,skewY:-141,x:-2,y:-83.1},3).to({scaleX:0.96,scaleY:0.95,skewX:43.1,skewY:-130.5,x:1.5,y:-51.3},3).wait(1));

	// Calque 28
	this.instance_26 = new lib.Lead_Ombre01();
	this.instance_26.setTransform(0,0,0.554,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({scaleX:0.51},5).to({scaleX:0.42,scaleY:0.95,x:1.1,y:0.6},4).to({scaleX:0.36,scaleY:0.87,x:-0.3,y:0.7,alpha:0.559},4).to({scaleX:0.29,scaleY:0.7,x:-0.7,y:1.1,alpha:0.43},4).to({scaleX:0.35,scaleY:0.86,x:-1.2},3).to({scaleX:0.41,scaleY:1,alpha:0.391},4).to({scaleX:0.48,x:5.1,alpha:0.781},4).to({scaleX:0.44,x:6.1,alpha:0.898},5).to({scaleX:0.41,x:7,alpha:1},4).to({scaleX:0.35,scaleY:0.87,x:4.2,alpha:0.531},4).to({scaleX:0.3,scaleY:0.73,x:3.4,alpha:0.422},4).to({scaleX:0.33,scaleY:0.81,x:3.3,alpha:0.66},3).to({scaleX:0.49,scaleY:0.89,x:0,y:0.6,alpha:0.719},3).to({scaleX:0.55,scaleY:1,y:0,alpha:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-75.7,90.9,85.3);


(lib.NA_Imp_Walk001_Green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.NA_Imp_Pinch01_0();
	this.instance.setTransform(-16.7,-13.5,1.008,1.058,0,40.3,37.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:1.09,skewX:15.8,skewY:30.4,x:-10.5,y:-12.6},5).to({scaleX:0.99,scaleY:1.15,skewX:11.3,skewY:25.7,x:-4.7,y:-32.3},4).to({scaleX:0.98,skewX:-3.7,skewY:9.7,x:0,y:-50.9},4).to({scaleX:1,scaleY:1.04,skewX:-1.7,skewY:-0.5,x:-0.7,y:-59.7},4).to({scaleX:1.01,scaleY:1.04,skewX:-6.1,skewY:-7.1,x:0.6,y:-48.4},3).to({scaleX:0.91,scaleY:1.15,skewX:-11.4,skewY:-23.9,x:6,y:-28.3},4).to({scaleX:1.03,scaleY:1.02,skewX:-32.9,skewY:-20.7,x:7.5,y:-4.5},4).to({scaleX:0.9,scaleY:1.01,skewX:-28.9,skewY:-26.5,x:7.3,y:-7.3},5).to({scaleX:0.9,scaleY:1.01,skewX:-16,skewY:-23.1,x:3.4,y:-26.4},4).to({scaleX:0.94,skewX:-10.1,skewY:-8.6,x:-0.7,y:-46.3},4).to({scaleX:1.01,scaleY:1.04,skewX:0.6,skewY:0.8,y:-59.4},4).to({scaleX:1.01,skewX:11.6,skewY:15.8,x:-5.5,y:-52},3).to({scaleX:1.02,scaleY:1.09,skewX:22.1,skewY:31.2,x:-8.9,y:-37.7},3).to({scaleX:1.01,scaleY:1.06,skewX:40.3,skewY:37.7,x:-16.7,y:-13.5},3).wait(1));

	// NA_GreenImp_Pinch01
	this.instance_1 = new lib.NA_Imp_Pinch01();
	this.instance_1.setTransform(-16.7,-13.5,1.008,1.058,0,40.3,37.7);
	this.instance_1.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_1.cache(-15,-9,35,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.97,scaleY:1.09,skewX:15.8,skewY:30.4,x:-10.5,y:-12.6},5).to({scaleX:0.99,scaleY:1.15,skewX:11.3,skewY:25.7,x:-4.7,y:-32.3},4).to({scaleX:0.98,skewX:-3.7,skewY:9.7,x:0,y:-50.9},4).to({scaleX:1,scaleY:1.04,skewX:-1.7,skewY:-0.5,x:-0.7,y:-59.7},4).to({scaleX:1.01,scaleY:1.04,skewX:-6.1,skewY:-7.1,x:0.6,y:-48.4},3).to({scaleX:0.91,scaleY:1.15,skewX:-11.4,skewY:-23.9,x:6,y:-28.3},4).to({scaleX:1.03,scaleY:1.02,skewX:-32.9,skewY:-20.7,x:7.5,y:-4.5},4).to({scaleX:0.9,scaleY:1.01,skewX:-28.9,skewY:-26.5,x:7.3,y:-7.3},5).to({scaleX:0.9,scaleY:1.01,skewX:-16,skewY:-23.1,x:3.4,y:-26.4},4).to({scaleX:0.94,skewX:-10.1,skewY:-8.6,x:-0.7,y:-46.3},4).to({scaleX:1.01,scaleY:1.04,skewX:0.6,skewY:0.8,y:-59.4},4).to({scaleX:1.01,skewX:11.6,skewY:15.8,x:-5.5,y:-52},3).to({scaleX:1.02,scaleY:1.09,skewX:22.1,skewY:31.2,x:-8.9,y:-37.7},3).to({scaleX:1.01,scaleY:1.06,skewX:40.3,skewY:37.7,x:-16.7,y:-13.5},3).wait(1));

	// NA_GreenImp_RightEye01_2
	this.instance_2 = new lib.NA_Imp_RightEye01_0();
	this.instance_2.setTransform(4.5,-51.1,0.72,0.925,0,0.6,-172.3,0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-0.2,scaleX:0.71,scaleY:0.96,skewX:12.9,skewY:-163.2,x:3.2,y:-59.5},5).to({scaleY:0.92,skewX:13.2,skewY:-165.9,x:4.7,y:-85.2},4).to({regY:-0.5,scaleX:0.71,scaleY:0.93,skewX:-14.3,skewY:-193.7,x:-4.6,y:-99.3},4).to({regX:0.3,scaleX:0.71,scaleY:0.95,skewX:-22.3,skewY:-192.8,x:-7.6,y:-101.3},4).to({scaleX:0.73,scaleY:0.94,skewX:-24.7,skewY:-202,x:-11.5,y:-92.9},3).to({regY:-0.4,scaleX:0.73,scaleY:0.9,skewX:-33.4,skewY:-216.6,x:-15.1,y:-72.1},4).to({regY:-0.5,scaleX:0.73,scaleY:0.86,skewX:-42.4,skewY:-220,x:-23.1,y:-35.9},4).to({regY:-0.4,skewX:-59.9,skewY:-237.4,x:-17.2,y:-41.7},5).to({regX:0.4,scaleX:0.71,scaleY:0.9,skewX:-30.5,skewY:-217,x:-13.1,y:-71.7},4).to({regY:-0.6,scaleX:0.71,scaleY:0.89,skewX:-23.9,skewY:-197.5,x:-12.1,y:-91.6},4).to({regX:0.2,scaleX:0.73,scaleY:0.94,skewX:-19.8,skewY:-196.1,x:-7.8,y:-101.2},4).to({regY:-0.8,scaleX:0.73,scaleY:0.94,skewX:-4.2,skewY:-179.4,x:-5.9,y:-96.5},3).to({regX:0.3,regY:-0.7,scaleX:0.72,scaleY:0.99,skewX:15.7,skewY:-161.5,x:2.5,y:-89.5},3).to({regX:0.1,regY:-0.4,scaleX:0.72,scaleY:0.93,skewX:0.6,skewY:-172.3,x:4.5,y:-51.2},3).wait(1));

	// NA_GreenImp_RightEye01_1
	this.instance_3 = new lib.NA_Imp_RightEye01_0();
	this.instance_3.setTransform(25.7,-37.6,1,1.008,0,53,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,skewX:45.6,skewY:44.3,x:22.8,y:-46.6},5).to({scaleX:1,scaleY:0.99,skewX:38.9,skewY:37,x:25.4,y:-74.3},4).to({skewX:8.9,skewY:7,x:17.7,y:-98.7},4).to({scaleX:1,scaleY:1,skewX:14.7,skewY:7.6,x:16.4,y:-101.6},4).to({scaleX:1.01,scaleY:0.99,skewX:-2.3,skewY:-4.7,x:10.8,y:-97.4},3).to({scaleX:1.02,scaleY:1,skewX:-17.7,skewY:-25.2,x:4.3,y:-83.7},4).to({scaleX:1.01,skewX:-10.7,skewY:-15.9,x:-1.9,y:-46.8},4).to({scaleX:1,scaleY:1.01,skewX:-5.3,skewY:-12.8,x:3.6,y:-55.3},5).to({skewX:-14.8,skewY:-22.4,x:6.4,y:-82.8},4).to({scaleX:1.01,scaleY:0.97,skewX:-4.4,skewY:-6.5,x:10.4,y:-96.2},4).to({scaleX:1.01,scaleY:0.98,skewX:15.9,skewY:8.7,x:16.4,y:-101.6},4).to({scaleX:1.01,scaleY:0.99,skewX:24.3,skewY:18.1,x:16.8,y:-92.6},3).to({scaleX:1.03,scaleY:0.95,skewX:38.9,skewY:34.3,x:23.1,y:-78.6},3).to({scaleX:1,scaleY:1.01,skewX:53,skewY:55.5,x:25.7,y:-37.6},3).wait(1));

	// NA_GreenImp_RightEye01_0
	this.instance_4 = new lib.NA_Imp_RightEye01();
	this.instance_4.setTransform(4.5,-51.1,0.72,0.925,0,0.6,-172.3,0.1,-0.3);
	this.instance_4.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_4.cache(-12,-12,24,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-0.2,scaleX:0.71,scaleY:0.96,skewX:12.9,skewY:-163.2,x:3.2,y:-59.5},5).to({scaleY:0.92,skewX:13.2,skewY:-165.9,x:4.7,y:-85.2},4).to({regY:-0.5,scaleX:0.71,scaleY:0.93,skewX:-14.3,skewY:-193.7,x:-4.6,y:-99.3},4).to({regX:0.3,scaleX:0.71,scaleY:0.95,skewX:-22.3,skewY:-192.8,x:-7.6,y:-101.3},4).to({scaleX:0.73,scaleY:0.94,skewX:-24.7,skewY:-202,x:-11.5,y:-92.9},3).to({regY:-0.4,scaleX:0.73,scaleY:0.9,skewX:-33.4,skewY:-216.6,x:-15.1,y:-72.1},4).to({regY:-0.5,scaleX:0.73,scaleY:0.86,skewX:-42.4,skewY:-220,x:-23.1,y:-35.9},4).to({regY:-0.4,skewX:-59.9,skewY:-237.4,x:-17.2,y:-41.7},5).to({regX:0.4,scaleX:0.71,scaleY:0.9,skewX:-30.5,skewY:-217,x:-13.1,y:-71.7},4).to({regY:-0.6,scaleX:0.71,scaleY:0.89,skewX:-23.9,skewY:-197.5,x:-12.1,y:-91.6},4).to({regX:0.2,scaleX:0.73,scaleY:0.94,skewX:-19.8,skewY:-196.1,x:-7.8,y:-101.2},4).to({regY:-0.8,scaleX:0.73,scaleY:0.94,skewX:-4.2,skewY:-179.4,x:-5.9,y:-96.5},3).to({regX:0.3,regY:-0.7,scaleX:0.72,scaleY:0.99,skewX:15.7,skewY:-161.5,x:2.5,y:-89.5},3).to({regX:0.1,regY:-0.4,scaleX:0.72,scaleY:0.93,skewX:0.6,skewY:-172.3,x:4.5,y:-51.2},3).wait(1));

	// NA_GreenImp_RightEye01
	this.instance_5 = new lib.NA_Imp_RightEye01();
	this.instance_5.setTransform(25.7,-37.6,1,1.008,0,53,55.5);
	this.instance_5.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_5.cache(-12,-12,24,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,skewX:45.6,skewY:44.3,x:22.8,y:-46.6},5).to({scaleX:1,scaleY:0.99,skewX:38.9,skewY:37,x:25.4,y:-74.3},4).to({skewX:8.9,skewY:7,x:17.7,y:-98.7},4).to({scaleX:1,scaleY:1,skewX:14.7,skewY:7.6,x:16.4,y:-101.6},4).to({scaleX:1.01,scaleY:0.99,skewX:-2.3,skewY:-4.7,x:10.8,y:-97.4},3).to({scaleX:1.02,scaleY:1,skewX:-17.7,skewY:-25.2,x:4.3,y:-83.7},4).to({scaleX:1.01,skewX:-10.7,skewY:-15.9,x:-1.9,y:-46.8},4).to({scaleX:1,scaleY:1.01,skewX:-5.3,skewY:-12.8,x:3.6,y:-55.3},5).to({skewX:-14.8,skewY:-22.4,x:6.4,y:-82.8},4).to({scaleX:1.01,scaleY:0.97,skewX:-4.4,skewY:-6.5,x:10.4,y:-96.2},4).to({scaleX:1.01,scaleY:0.98,skewX:15.9,skewY:8.7,x:16.4,y:-101.6},4).to({scaleX:1.01,scaleY:0.99,skewX:24.3,skewY:18.1,x:16.8,y:-92.6},3).to({scaleX:1.03,scaleY:0.95,skewX:38.9,skewY:34.3,x:23.1,y:-78.6},3).to({scaleX:1,scaleY:1.01,skewX:53,skewY:55.5,x:25.7,y:-37.6},3).wait(1));

	// NA_GreenImp_Ear01_0
	this.instance_6 = new lib.NA_Imp_Ear01();
	this.instance_6.setTransform(34.6,-34.7,0.999,0.999,27);
	this.instance_6.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_6.cache(-3,-8,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:1.02,rotation:0,skewX:83.7,skewY:72,x:27.2,y:-43},5).to({skewX:113.2,skewY:101.5,x:29.8,y:-70.7},4).to({scaleX:0.99,scaleY:1.08,skewX:45.8,skewY:37.2,x:25.7,y:-97.1},4).to({scaleX:0.99,skewX:0.8,skewY:-4.5,x:25.6,y:-100.6},4).to({skewX:-11.8,skewY:-17.2,x:20.4,y:-97.7},3).to({skewX:-17.8,skewY:-23.2,x:12.8,y:-86},4).to({skewX:-16.3,skewY:-21.7,x:7.7,y:-48.4},4).to({skewX:-22.3,skewY:-27.6,x:7.4,y:-61.8},5).to({x:13.3,y:-90.6},4).to({scaleX:0.98,skewY:-19.9,x:19.8,y:-100.4},4).to({scaleY:1.08,skewX:-3.6,skewY:-4.9,x:26.2,y:-100.8},4).to({skewX:7.4,skewY:6.1,x:26,y:-92.4},3).to({skewX:22.4,skewY:21.1,x:30.4,y:-78},3).to({regX:-0.1,scaleX:1,scaleY:1,rotation:27,skewX:0,skewY:0,x:34.5,y:-34.8},3).wait(1));

	// NA_GreenImp_Nose01_0
	this.instance_7 = new lib.NA_Imp_Nose01_0();
	this.instance_7.setTransform(11.6,-40.1,1,1,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:8.5,y:-47.8},5).to({scaleX:1,rotation:0,skewX:22.7,skewY:25.3,x:10.9,y:-73.8},4).to({scaleY:1.08,skewX:-11.7,skewY:10.3,x:5.8,y:-91.3},4).to({scaleX:0.97,skewY:4.7,x:3.8,y:-94.2},4).to({skewX:-20.9,skewY:-4.5,x:0.7,y:-87.6},3).to({scaleX:0.93,skewX:-34.6,skewY:-28.6,x:-2.8,y:-70},4).to({skewX:-32.4,skewY:-26.4,x:-10.4,y:-34.3},4).to({skewX:-36.9,skewY:-30.9,x:-4.7,y:-43.1},5).to({scaleX:0.93,scaleY:0.98,skewX:-31.4,skewY:-28.8,x:-1.1,y:-69},4).to({scaleY:0.98,skewX:-10.7,skewY:-13.8,x:-0.5,y:-86.2},4).to({skewX:4.3,skewY:1.2,x:3.5,y:-94.1},4).to({scaleX:0.93,skewX:13,skewY:8.6,x:3.2,y:-87.2},3).to({scaleX:0.98,scaleY:0.99,skewX:34.7,skewY:23.6,x:8.3,y:-77.5},3).to({scaleX:1,scaleY:1,rotation:31.7,skewX:0,skewY:0,x:11.6,y:-40.1},3).wait(1));

	// NA_GreenImp_Nose01
	this.instance_8 = new lib.NA_Imp_Nose01();
	this.instance_8.setTransform(11.6,-40.1,1,1,31.7);
	this.instance_8.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_8.cache(-6,-5,13,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:8.5,y:-47.8},5).to({scaleX:1,rotation:0,skewX:22.7,skewY:25.3,x:10.9,y:-73.8},4).to({scaleY:1.08,skewX:-11.7,skewY:10.3,x:5.8,y:-91.3},4).to({scaleX:0.97,skewY:4.7,x:3.8,y:-94.2},4).to({skewX:-20.9,skewY:-4.5,x:0.7,y:-87.6},3).to({scaleX:0.93,skewX:-34.6,skewY:-28.6,x:-2.8,y:-70},4).to({skewX:-32.4,skewY:-26.4,x:-10.4,y:-34.3},4).to({skewX:-36.9,skewY:-30.9,x:-4.7,y:-43.1},5).to({scaleX:0.93,scaleY:0.98,skewX:-31.4,skewY:-28.8,x:-1.1,y:-69},4).to({scaleY:0.98,skewX:-10.7,skewY:-13.8,x:-0.5,y:-86.2},4).to({skewX:4.3,skewY:1.2,x:3.5,y:-94.1},4).to({scaleX:0.93,skewX:13,skewY:8.6,x:3.2,y:-87.2},3).to({scaleX:0.98,scaleY:0.99,skewX:34.7,skewY:23.6,x:8.3,y:-77.5},3).to({scaleX:1,scaleY:1,rotation:31.7,skewX:0,skewY:0,x:11.6,y:-40.1},3).wait(1));

	// NA_GreenImp_Horn01_0
	this.instance_9 = new lib.NA_Imp_Horn01();
	this.instance_9.setTransform(32.8,-42.8,1.005,1.002,0,35.3,28.4,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:28.2,y:-51.4},5).to({regX:-0.1,scaleX:0.99,scaleY:1,skewX:30.1,skewY:26.3,x:28.9,y:-77.5},4).to({scaleY:1,skewX:-3.9,skewY:-2.4,x:21.8,y:-102.9},4).to({regY:-0.2,scaleX:0.99,rotation:-3.9,skewX:0,skewY:0,x:20.5,y:-106.8},4).to({regY:-0.3,rotation:-13.1,x:14.3,y:-103.2},3).to({rotation:-41.8,x:4.6,y:-91.8},4).to({regY:-0.1,scaleX:0.98,scaleY:1.01,rotation:0,skewX:-23,skewY:-27.7,x:-0.7,y:-52.1},4).to({scaleX:0.98,scaleY:1.02,skewX:-47.4,skewY:-55.6,x:-0.5,y:-65.5},5).to({regY:-0.2,scaleX:0.97,scaleY:1.02,skewX:-38.5,skewY:-43.6,x:5.5,y:-95.5},4).to({regX:-0.2,scaleY:1.02,skewX:-33.1,skewY:-27.9,x:13.8,y:-106.3},4).to({regY:-0.1,scaleX:0.97,scaleY:1.02,skewX:-11.9,skewY:-8,x:21.2,y:-106.6},4).to({regX:-0.3,regY:-0.2,scaleX:0.97,scaleY:1.02,skewX:-0.3,skewY:1,y:-98.7},3).to({scaleX:0.98,skewX:7.9,skewY:15.7,x:28.4,y:-85.6},3).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,skewX:35.3,skewY:28.4,x:32.8,y:-42.8},3).wait(1));

	// NA_GreenImp_LowerJaw01_0
	this.instance_10 = new lib.NA_Imp_LowerJaw01_teeth_0();
	this.instance_10.setTransform(-7.2,-20.2,1.022,1.005,0,37.8,29.9,-0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:-0.5,regY:-0.1,scaleX:1.04,scaleY:0.92,skewX:33.2,skewY:38.3,x:-6.9,y:-26},5).to({regY:0.1,scaleX:0.97,scaleY:0.93,skewX:15.9,skewY:30.4,x:-1.1,y:-44.2},4).to({regX:-0.4,regY:0.3,scaleX:0.96,scaleY:0.89,skewX:4.1,skewY:10.4,x:0.8,y:-61.5},4).to({scaleX:1.02,scaleY:0.88,skewX:0.2,skewY:0.7,x:-0.3,y:-70.1},4).to({regX:-0.3,regY:0.2,scaleX:1.02,scaleY:0.85,skewX:-0.1,skewY:-9.3,x:-0.2,y:-59.2},3).to({regX:-0.1,regY:0.1,scaleX:1.02,scaleY:0.83,skewX:-21.4,skewY:-31.9,x:4,y:-40.3},4).to({regX:-0.4,scaleX:1.04,scaleY:0.85,skewX:-25,skewY:-21.2,x:0.6,y:-11.3},4).to({regX:-0.2,scaleX:0.95,scaleY:0.88,skewX:-15.1,skewY:-30.7,x:2.4,y:-18.3},5).to({regX:-0.1,scaleX:0.97,scaleY:0.8,skewX:-16.3,skewY:-31.2,x:1.9,y:-37.3},4).to({regX:-0.2,regY:0,scaleX:0.95,scaleY:0.81,skewX:-3,skewY:-15.9,x:-1.3,y:-56},4).to({regX:-0.3,regY:-0.2,scaleX:1.04,scaleY:0.79,skewX:0.2,skewY:-0.2,x:-0.5,y:-70.9},4).to({regX:-0.1,regY:-0.3,scaleX:1.04,scaleY:0.85,skewX:14,skewY:14.8,x:-1.6,y:-65.3},3).to({scaleX:1.03,scaleY:0.87,skewX:17.8,skewY:29.5,x:-0.9,y:-50.3},3).to({regX:-0.3,scaleX:1.02,scaleY:1,skewX:37.8,skewY:29.9,x:-7.1,y:-20.3},3).wait(1));

	// NA_GreenImp_UpperJaw01_0
	this.instance_11 = new lib.NA_Imp_UpperJaw01_teeth_0();
	this.instance_11.setTransform(6.6,-36.9,1.016,0.971,0,45.4,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:0.88,scaleY:1.02,skewX:25.8,skewY:34.3,x:4.3,y:-43},5).to({scaleX:0.84,scaleY:1.02,skewX:20.2,skewY:28,x:7.2,y:-68.8},4).to({scaleX:0.95,scaleY:1.02,skewX:-1.5,skewY:3.7,x:3.2,y:-86.7},4).to({scaleX:1.03,scaleY:0.75,skewX:-5,skewY:-0.4,x:1.7,y:-90.3},4).to({scaleX:0.99,scaleY:0.89,skewX:-2.5,skewY:-14.5,x:-0.6,y:-81.9},3).to({scaleX:0.98,scaleY:0.93,skewX:-17.1,skewY:-35.2,x:-2,y:-65},4).to({scaleX:0.95,scaleY:0.88,skewX:-26.4,skewY:-28.8,x:-8.7,y:-29.3},4).to({scaleX:0.95,scaleY:0.91,skewX:-17.8,skewY:-33.2,x:-2.9,y:-37.1},5).to({scaleX:0.97,scaleY:0.9,skewX:-15.9,skewY:-34.5,x:-1.1,y:-64.1},4).to({scaleX:0.98,scaleY:0.87,skewX:-2.6,skewY:-14.3,x:-0.7,y:-81.4},4).to({scaleX:1.05,scaleY:0.78,skewX:2.6,skewY:-1,x:2.2,y:-90.5},4).to({scaleX:0.96,scaleY:1.04,skewX:-2.9,skewY:8.4,x:1.9,y:-82.6},3).to({scaleX:0.93,scaleY:1,skewX:13.2,skewY:24.9,x:7.7,y:-73.5},3).to({scaleX:1.02,scaleY:0.97,skewX:45.4,skewY:29.6,x:6.6,y:-36.9},3).wait(1));

	// NA_GreenImp_LowerJaw01
	this.instance_12 = new lib.NA_Imp_LowerJaw01();
	this.instance_12.setTransform(-7.2,-20.2,1.022,1.005,0,37.8,29.9,-0.3,-0.2);
	this.instance_12.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_12.cache(-20,-13,49,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:-0.5,regY:-0.1,scaleX:1.04,scaleY:0.92,skewX:33.2,skewY:38.3,x:-6.9,y:-26},5).to({regY:0.1,scaleX:0.97,scaleY:0.93,skewX:15.9,skewY:30.4,x:-1.1,y:-44.2},4).to({regX:-0.4,regY:0.3,scaleX:0.96,scaleY:0.89,skewX:4.1,skewY:10.4,x:0.8,y:-61.5},4).to({scaleX:1.02,scaleY:0.88,skewX:0.2,skewY:0.7,x:-0.3,y:-70.1},4).to({regX:-0.3,regY:0.2,scaleX:1.02,scaleY:0.85,skewX:-0.1,skewY:-9.3,x:-0.2,y:-59.2},3).to({regX:-0.1,regY:0.1,scaleX:1.02,scaleY:0.83,skewX:-21.4,skewY:-31.9,x:4,y:-40.3},4).to({regX:-0.4,scaleX:1.04,scaleY:0.85,skewX:-25,skewY:-21.2,x:0.6,y:-11.3},4).to({regX:-0.2,scaleX:0.95,scaleY:0.88,skewX:-15.1,skewY:-30.7,x:2.4,y:-18.3},5).to({regX:-0.1,scaleX:0.97,scaleY:0.8,skewX:-16.3,skewY:-31.2,x:1.9,y:-37.3},4).to({regX:-0.2,regY:0,scaleX:0.95,scaleY:0.81,skewX:-3,skewY:-15.9,x:-1.3,y:-56},4).to({regX:-0.3,regY:-0.2,scaleX:1.04,scaleY:0.79,skewX:0.2,skewY:-0.2,x:-0.5,y:-70.9},4).to({regX:-0.1,regY:-0.3,scaleX:1.04,scaleY:0.85,skewX:14,skewY:14.8,x:-1.6,y:-65.3},3).to({scaleX:1.03,scaleY:0.87,skewX:17.8,skewY:29.5,x:-0.9,y:-50.3},3).to({regX:-0.3,scaleX:1.02,scaleY:1,skewX:37.8,skewY:29.9,x:-7.1,y:-20.3},3).wait(1));

	// NA_GreenImp_UpperJaw01
	this.instance_13 = new lib.NA_Imp_UpperJaw01();
	this.instance_13.setTransform(6.6,-36.9,1.016,0.971,0,45.4,29.6);
	this.instance_13.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_13.cache(-19,-9,46,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:0.88,scaleY:1.02,skewX:25.8,skewY:34.3,x:4.3,y:-43},5).to({scaleX:0.84,scaleY:1.02,skewX:20.2,skewY:28,x:7.2,y:-68.8},4).to({scaleX:0.95,scaleY:1.02,skewX:-1.5,skewY:3.7,x:3.2,y:-86.7},4).to({scaleX:1.03,scaleY:0.75,skewX:-5,skewY:-0.4,x:1.7,y:-90.3},4).to({scaleX:0.99,scaleY:0.89,skewX:-2.5,skewY:-14.5,x:-0.6,y:-81.9},3).to({scaleX:0.98,scaleY:0.93,skewX:-17.1,skewY:-35.2,x:-2,y:-65},4).to({scaleX:0.95,scaleY:0.88,skewX:-26.4,skewY:-28.8,x:-8.7,y:-29.3},4).to({scaleX:0.95,scaleY:0.91,skewX:-17.8,skewY:-33.2,x:-2.9,y:-37.1},5).to({scaleX:0.97,scaleY:0.9,skewX:-15.9,skewY:-34.5,x:-1.1,y:-64.1},4).to({scaleX:0.98,scaleY:0.87,skewX:-2.6,skewY:-14.3,x:-0.7,y:-81.4},4).to({scaleX:1.05,scaleY:0.78,skewX:2.6,skewY:-1,x:2.2,y:-90.5},4).to({scaleX:0.96,scaleY:1.04,skewX:-2.9,skewY:8.4,x:1.9,y:-82.6},3).to({scaleX:0.93,scaleY:1,skewX:13.2,skewY:24.9,x:7.7,y:-73.5},3).to({scaleX:1.02,scaleY:0.97,skewX:45.4,skewY:29.6,x:6.6,y:-36.9},3).wait(1));

	// NA_GreenImp_Moth01
	this.instance_14 = new lib.NA_Imp_Moth01();
	this.instance_14.setTransform(5.8,-33.6,0.991,1.098,0,38,31.7,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regY:-0.4,scaleX:0.94,scaleY:0.9,skewX:35.6,skewY:37.9,x:4,y:-38.2},5).to({regX:0,regY:-0.1,scaleX:0.81,scaleY:1.07,skewX:20.9,skewY:28.7,x:7.8,y:-63.8},4).to({regX:-0.3,regY:-0.3,scaleX:0.9,scaleY:1.06,skewX:4.4,skewY:7,x:4,y:-81.7},4).to({regX:-0.5,regY:-0.4,scaleX:1.08,scaleY:0.84,skewX:-0.7,skewY:0,x:2.9,y:-86.4},4).to({regX:-0.6,regY:-0.5,scaleX:0.92,scaleY:1.13,skewX:-5.3,skewY:-12.3,x:0.8,y:-79.6},3).to({regX:-0.5,scaleX:0.86,scaleY:1.02,skewX:-19,skewY:-30.8,x:-0.5,y:-60.7},4).to({regX:-0.6,regY:-0.3,scaleX:0.91,scaleY:0.89,skewX:-35.7,skewY:-23.4,x:-5.4,y:-26.9},4).to({regX:-0.5,regY:-0.2,scaleX:0.9,scaleY:0.92,skewX:-13.3,skewY:-28.8,x:-0.4,y:-35},5).to({regX:0.1,scaleX:0.86,scaleY:1.15,skewX:-4.9,skewY:-31.7,x:1.2,y:-60.1},4).to({regY:-0.5,scaleX:1.02,scaleY:0.96,skewX:-3.8,skewY:-15,x:0.7,y:-77.9},4).to({regY:-0.7,scaleX:1.09,scaleY:0.94,skewX:3.1,skewY:0.6,x:3.9,y:-86.7},4).to({regX:0.2,regY:-0.6,scaleX:0.94,scaleY:0.95,skewX:14.1,skewY:13.4,x:3.8,y:-79.1},3).to({regX:0.1,regY:-0.7,scaleX:0.94,scaleY:1.12,skewX:21.4,skewY:26.2,x:7.5,y:-68.2},3).to({regX:-0.2,regY:-0.1,scaleX:0.99,scaleY:1.1,skewX:38,skewY:31.7,x:5.8,y:-33.6},3).wait(1));

	// NA_GreenImp_Body01
	this.instance_15 = new lib.NA_Imp_Body01();
	this.instance_15.setTransform(9.6,-34.3,1.052,1.044,0,33.4,26.2,-0.1,-0.1);
	this.instance_15.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_15.cache(-31,-26,61,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:0,scaleX:0.89,scaleY:1.1,skewX:25.6,skewY:34.6,x:8,y:-41.6},5).to({regX:-0.1,scaleX:0.86,scaleY:1.19,skewX:17.2,skewY:25.6,x:10.3,y:-64.5},4).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1.07,skewX:3.9,skewY:6.2,x:7.3,y:-84},4).to({scaleX:1.09,scaleY:0.96,skewX:2.7,skewY:0.2,x:6.1,y:-89.1},4).to({regX:-0.1,scaleX:1.06,scaleY:1.04,skewX:-7.2,skewY:-14.8,x:2.8,y:-80.5},3).to({regX:0,regY:0,scaleX:0.99,scaleY:1.13,skewX:-19,skewY:-35,x:0.7,y:-64},4).to({scaleX:1.09,scaleY:0.98,skewX:-36.5,skewY:-25,x:-2.7,y:-32.2},4).to({scaleX:1,scaleY:1.06,skewX:-29.4,skewY:-39.4,x:-0.7,y:-39.6},5).to({scaleX:0.97,scaleY:1.23,skewX:-13.2,skewY:-35.4,x:1.2,y:-65.7},4).to({scaleX:1.06,scaleY:1.05,skewX:-7.5,skewY:-18.5,x:2.3,y:-82.1},4).to({scaleX:1.09,scaleY:0.96,skewX:1.8,skewY:0.4,x:5.7,y:-89.4},4).to({scaleX:1.04,scaleY:1.03,skewX:6.4,skewY:9,x:6,y:-81.1},3).to({scaleX:0.97,scaleY:1.18,skewX:17.9,skewY:23.3,x:9.5,y:-68.9},3).to({regX:-0.1,regY:-0.1,scaleX:1.05,scaleY:1.04,skewX:33.4,skewY:26.2,x:9.6,y:-34.3},3).wait(1));

	// NA_GreenImp_Arm01_0
	this.instance_16 = new lib.NA_Imp_Arm01();
	this.instance_16.setTransform(30.4,-27.9,1.004,0.999,0,46.9,52.7,-0.1,0.1);
	this.instance_16.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_16.cache(-2,-17,23,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regY:0,scaleX:1,scaleY:0.98,skewX:79.7,skewY:84.7,x:22.6,y:-33.8},5).to({regY:-0.1,scaleY:0.98,skewX:98.7,skewY:92.6,x:25.8,y:-59.9},4).to({scaleX:1.03,scaleY:0.99,skewX:59.1,skewY:67.6,x:25.6,y:-89.6},4).to({regX:-0.2,regY:-0.3,scaleX:1.03,scaleY:0.98,skewX:26.7,skewY:35.1,x:27.7,y:-94.4},4).to({regX:-0.1,regY:-0.4,skewX:-12.9,skewY:-4.1,x:22.3,y:-91.2},3).to({regY:-0.3,scaleX:1.04,scaleY:0.97,skewX:-20.6,skewY:-25.9,x:15.5,y:-78.7},4).to({scaleY:0.97,skewX:-44.5,skewY:-40.9,x:13.5,y:-45.4},4).to({regY:-0.4,scaleY:0.97,skewX:-33.5,skewY:-34.7,x:13.6,y:-53.7},5).to({scaleX:1.04,scaleY:1.03,skewX:-17.9,skewY:-21.1,x:14.9,y:-81.3},4).to({regX:0,regY:-0.3,scaleY:1.03,skewX:-6.6,skewY:-6.1,x:21.5,y:-92.9},4).to({regX:-0.1,scaleX:1.04,scaleY:1.01,skewX:-3.2,skewY:7.7,x:28.1,y:-93.5},4).to({skewX:7.8,skewY:18.7,x:26.2,y:-84.9},3).to({regY:-0.2,scaleY:0.99,skewX:52.6,skewY:57.7,x:26.6,y:-67.9},3).to({regY:0.1,scaleX:1,scaleY:1,skewX:46.9,skewY:52.7,x:30.4,y:-27.9},3).wait(1));

	// NA_GreenImp_Horn01
	this.instance_17 = new lib.NA_Imp_Horn01();
	this.instance_17.setTransform(13.5,-55.2,0.921,0.997,0,45.9,-136.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:0.86,scaleY:1,skewX:45.7,skewY:-129.1,x:10.4,y:-65.7},5).to({scaleX:0.99,scaleY:1,skewX:37.8,skewY:-138.1,x:10,y:-89.7},4).to({scaleX:0.89,scaleY:1.11,skewX:13,skewY:-172.6,x:-4.4,y:-103.8},4).to({scaleX:0.89,scaleY:1.08,skewX:9.7,skewY:-169.6,x:-6.9,y:-105.6},4).to({scaleX:0.9,scaleY:1.08,skewX:-7.2,skewY:-177.6,x:-9.3,y:-97.3},3).to({skewX:-13.9,skewY:-184.3,x:-12.4,y:-78.4},4).to({skewX:-12.9,skewY:-183.3,x:-23.1,y:-42.2},4).to({scaleX:0.88,scaleY:1.08,skewX:-15.3,skewY:-193.9,x:-17.6,y:-50.3},5).to({scaleY:1.08,skewX:-17.3,x:-10.9,y:-81.8},4).to({scaleX:0.97,skewY:-188.3,x:-10.1,y:-96.9},4).to({scaleX:0.93,scaleY:1.07,skewX:4.6,skewY:-172.3,x:-6.1,y:-105.6},4).to({scaleX:0.93,skewX:15.6,skewY:-161.8,x:-4.2,y:-101.8},3).to({scaleX:0.94,scaleY:1.06,skewX:27.2,skewY:-147.5,x:7.6,y:-94},3).to({scaleX:0.92,scaleY:1,skewX:45.9,skewY:-136.4,x:13.5,y:-55.2},3).wait(1));

	// NA_GreenImp_Leg02_0
	this.instance_18 = new lib.NA_Imp_Leg02();
	this.instance_18.setTransform(-22.9,-38,1.242,0.366,0,89.9,-94.2);
	this.instance_18.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_18.cache(-13,-21,25,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleX:1.15,scaleY:0.34,skewX:66.4,skewY:-112.1,x:-21.9,y:-34},5).to({scaleX:1.22,scaleY:0.37,skewX:71.6,skewY:-119.7,x:-17.8,y:-57.3},4).to({scaleY:0.41,skewX:51.1,skewY:-140.2,x:-19.4,y:-65.9},4).to({scaleX:1.23,scaleY:0.43,skewX:11.5,skewY:-176,x:-17.5,y:-65},4).to({scaleX:0.71,scaleY:0.71,skewX:-6.2,skewY:-184.4,x:-12.1,y:-47.7},3).to({scaleX:0.69,scaleY:1.04,skewX:-8.2,skewY:-179.1,x:-5.2,y:-22.4},4).to({scaleX:0.89,scaleY:0.68,skewX:-86.5,skewY:-227.1,x:-8,y:-2.6},4).to({scaleX:0.71,scaleY:0.7,skewX:-103.6,skewY:-264.1,x:1,y:-4.5},5).to({scaleX:0.73,scaleY:0.98,skewX:-34.1,skewY:-192.4,x:0.6,y:-19.4},4).to({scaleX:0.81,scaleY:0.76,skewX:-28.2,skewY:-180.1,x:-8.9,y:-46.1},4).to({scaleX:0.88,scaleY:0.46,skewX:-51.4,skewY:-211.1,x:-20,y:-63.9},4).to({scaleY:0.49,skewX:-29.9,skewY:-180.5,x:-23.7,y:-63.7},3).to({scaleX:0.89,scaleY:0.5,skewX:0.4,skewY:-144.9,x:-21.6,y:-63.8},3).to({scaleX:1.24,scaleY:0.37,skewX:89.9,skewY:-94.2,x:-22.9,y:-38},3).wait(1));

	// NA_GreenImp_Foot01_0
	this.instance_19 = new lib.NA_Imp_Foot01();
	this.instance_19.setTransform(-30.1,-34.3,0.996,0.907,0,63,-113.4);

	this.instance_20 = new lib.Interpolation69();
	this.instance_20.setTransform(15.2,-21.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:-25.3,y:-27.3},5).to({skewX:54.1,skewY:-122.3,x:-21.5,y:-50.9},4).to({scaleX:0.93,skewX:39.1,skewY:-137.3,x:-22.7,y:-59},4).to({scaleX:0.93,scaleY:1.03,skewX:-16.2,skewY:-183,x:-15.8,y:-56.8},4).to({scaleX:0.85,skewX:-40.4,skewY:-215.6,x:-9.7,y:-33},3).to({_off:true,scaleX:1,scaleY:1,skewX:0,skewY:-360,x:15.2,y:-21.5},4).to({_off:false,scaleX:1.28,scaleY:1.24,skewX:12,skewY:-180.4,x:0.6,y:1.2},4).to({scaleX:1.2,scaleY:1.34,skewX:-4.8,skewY:-178.8,x:10.4,y:1.1},5).to({scaleX:1.22,skewX:-65.4,skewY:-258.4,x:11.8,y:-2.2},4).to({scaleX:1.02,skewX:-50.4,skewY:-234,x:-0.2,y:-32.1},4).to({scaleX:0.74,scaleY:1.1,skewX:-12.3,skewY:-183,x:-15.3,y:-57.1},4).to({scaleX:0.83,scaleY:0.97,skewX:27.1,skewY:-151.2,x:-23,y:-56},3).to({scaleX:0.81,scaleY:0.99,skewX:69.2,skewY:-113.6,x:-24,y:-56.2},3).to({scaleX:1,scaleY:0.91,skewX:63,skewY:-113.4,x:-30.1,y:-34.3},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(20).to({_off:false},4).to({_off:true,scaleX:1.28,scaleY:1.24,skewX:12,skewY:-180.4,x:0.6,y:1.2},4).wait(27));

	// Calque 2
	this.instance_21 = new lib.NA_Imp_Foot01();
	this.instance_21.setTransform(41.5,-36.6,0.849,0.81,0,-130.8,-124.7);
	this.instance_21._off = true;
	this.instance_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 46, 21, 27, 0)];
	this.instance_21.cache(-5,-4,10,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(28).to({_off:false},0).to({scaleX:0.97,scaleY:0.8,skewX:-99.7,skewY:-96.4,x:34.1,y:-22.8},5).to({scaleX:0.93,scaleY:0.84,skewX:-74.4,skewY:-75,x:32.4,y:-43.8},4).to({scaleX:0.96,scaleY:0.81,skewX:-46.2,skewY:-46.8,x:27.5,y:-52.1},4).to({_off:true},1).wait(13));

	// NA_GreenImp_Foot01
	this.instance_22 = new lib.NA_Imp_Foot01();
	this.instance_22.setTransform(6.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleY:1.21,x:11.1,y:1.5},5).to({scaleX:1.31,scaleY:1.19,skewX:27.7,skewY:50.2,x:18.5,y:-2.5},4).to({scaleX:1,scaleY:0.97,skewX:41.2,skewY:39,x:23.6,y:-35.5},4).to({skewX:11.2,skewY:9,x:24.2,y:-55.8},4).to({skewX:-28.1,skewY:-30.3,x:28.4,y:-51.7},3).to({scaleX:1.18,scaleY:1.15,skewX:-58.1,skewY:-60.3,x:33.2,y:-44.1},4).to({scaleX:0.97,scaleY:1.41,skewX:-132.7,skewY:-125,x:40.8,y:-36},4).to({scaleX:1.11,scaleY:1.39,skewX:-101.9,skewY:-96.7,x:33.2,y:-22.7},5).to({scaleX:1.06,scaleY:1.45,skewX:-76.4,skewY:-75.3,x:31.6,y:-44.1},4).to({scaleX:1.09,scaleY:1.4,skewX:-48.4,skewY:-47.1,x:27,y:-52.7},4).to({scaleX:0.86,scaleY:1.06,skewX:25.3,skewY:6.3,x:24.4,y:-56.1},4).to({scaleX:0.85,scaleY:1.01,skewX:31.3,skewY:34.5,x:12.5,y:-32.7},3).to({scaleX:1.19,scaleY:1.27,skewX:46.2,skewY:68.5,x:4.2,y:-3.6},3).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:6.8,y:1.9},3).wait(1));

	// NA_GreenImp_Leg02
	this.instance_23 = new lib.NA_Imp_Leg02();
	this.instance_23.setTransform(6.2,-9.7,2.035,0.733,0,-27.4,8.9);
	this.instance_23.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_23.cache(-13,-21,25,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({scaleX:1.41,scaleY:0.71,skewX:-31.8,skewY:-1.1,x:11.7,y:-8.6},5).to({scaleX:0.76,scaleY:1.19,skewX:-4.2,skewY:-25.8,x:16.7,y:-26.9},4).to({scaleX:0.74,scaleY:0.76,skewX:1.8,skewY:-16.3,x:25.1,y:-51.6},4).to({scaleX:1.16,scaleY:0.46,skewX:47.8,skewY:25.9,x:27.8,y:-63.5},4).to({scaleX:1.23,scaleY:0.39,skewX:18.6,skewY:-5.9,x:28.9,y:-59.4},3).to({scaleX:1,scaleY:0.48,skewX:-4.8,skewY:-47.4,x:31.6,y:-53},4).to({scaleX:0.85,skewX:-62.7,skewY:-98.8,x:33.3,y:-39.2},4).to({scaleX:0.97,scaleY:0.47,skewX:-20.9,skewY:-66.1,x:29.5,y:-29.3},5).to({scaleX:0.77,scaleY:0.54,skewX:2.2,skewY:-43.7,x:30.2,y:-53},4).to({scaleX:0.83,scaleY:0.55,skewX:18,skewY:-21.1,x:29.2,y:-60.8},4).to({scaleX:0.95,scaleY:0.38,skewX:32.5,skewY:0.5,x:29.5,y:-61.8},4).to({scaleX:0.82,scaleY:0.69,skewX:14.9,skewY:11,x:17.3,y:-46.7},3).to({scaleX:0.74,scaleY:1.14,skewX:21,skewY:4,x:13,y:-25.8},3).to({scaleX:2.04,scaleY:0.73,skewX:-27.4,skewY:8.9,x:6.2,y:-9.7},3).wait(1));

	// NA_GreenImp_Ear01
	this.instance_24 = new lib.NA_Imp_Ear01();
	this.instance_24.setTransform(7.7,-54.2,0.95,0.95,0,39.9,-140.1,-0.1,-0.2);
	this.instance_24.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_24.cache(-3,-8,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({regX:0,regY:-0.1,x:4.8,y:-64.5},5).to({regX:-0.1,skewX:30.9,skewY:-149.1,x:4.3,y:-88.3},4).to({regX:0,regY:-0.2,skewX:-1.6,skewY:-181.6,x:-8.9,y:-100.5},4).to({skewX:-1.6,x:-11.2,y:-101.8},4).to({regX:-0.1,skewX:-5.1,skewY:-185.1,x:-14.7,y:-93},3).to({skewX:-14.6,skewY:-194.6,x:-16.4,y:-71.4},4).to({skewX:-12.4,skewY:-192.4,x:-27.6,y:-37.2},4).to({regX:0.1,regY:-0.3,skewX:-47.1,skewY:-227.1,x:-20.6,y:-42.4},5).to({regX:-0.1,regY:-0.2,scaleY:0.95,skewX:-48.7,skewY:-223.4,x:-14.5,y:-75},4).to({regX:0,regY:-0.3,scaleY:0.95,skewX:-25.2,skewY:-205.2,x:-15.6,y:-91.8},4).to({regY:-0.1,skewX:4.8,skewY:-175.2,x:-11.4,y:-101.2},4).to({regX:0.1,skewX:7.6,skewY:-172.4,x:-10,y:-97.8},3).to({regX:0,skewX:22.6,skewY:-155.2,x:1.4,y:-91.9},3).to({regX:-0.1,regY:-0.2,skewX:39.9,skewY:-140.1,x:7.7,y:-54.2},3).wait(1));

	// NA_GreenImp_Arm01
	this.instance_25 = new lib.NA_Imp_Arm01();
	this.instance_25.setTransform(1.5,-51.3,0.959,0.946,0,43.1,-130.5);
	this.instance_25.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 68.85, 22.95, 0)];
	this.instance_25.cache(-2,-17,23,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({scaleX:0.95,scaleY:0.95,skewX:16.6,skewY:-159.7,x:-1.2,y:-57.5},5).to({skewX:14.1,skewY:-162.2,x:0,y:-81.5},4).to({scaleX:0.96,skewX:-15.9,skewY:-189.7,x:-7.5,y:-93.9},4).to({scaleX:0.95,scaleY:0.96,skewX:0.1,skewY:-187.6,x:-13.1,y:-93.5},4).to({scaleX:0.95,scaleY:0.9,skewX:4.4,skewY:-189,x:-15.2,y:-83.5},3).to({scaleX:0.92,scaleY:0.91,skewX:-13,skewY:-190.4,x:-13.7,y:-61.6},4).to({scaleX:0.94,skewX:-42.6,skewY:-220.2,x:-24,y:-30.6},4).to({scaleX:0.94,scaleY:0.9,skewX:-62.4,skewY:-243.9,x:-18.6,y:-34.2},5).to({scaleX:1.11,scaleY:0.97,skewX:-98.5,skewY:-265.7,x:-12.1,y:-62},4).to({scaleX:1.11,scaleY:0.95,skewX:-30.1,skewY:-215.8,x:-12.6,y:-86.5},4).to({scaleX:1.13,scaleY:0.93,skewX:3.6,skewY:-184.8,x:-11.5,y:-93.3},4).to({scaleY:0.92,skewX:5.5,skewY:-173.8,x:-9.4,y:-90.4},3).to({scaleX:1.18,scaleY:0.96,skewX:33.3,skewY:-141,x:-2,y:-83.1},3).to({scaleX:0.96,scaleY:0.95,skewX:43.1,skewY:-130.5,x:1.5,y:-51.3},3).wait(1));

	// Layer 2
	this.instance_26 = new lib.Lead_Ombre01();
	this.instance_26.setTransform(0,0,0.554,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({scaleX:0.51},5).to({scaleX:0.42,scaleY:0.95,x:1.1,y:0.6},4).to({scaleX:0.36,scaleY:0.87,x:-0.3,y:0.7,alpha:0.559},4).to({scaleX:0.29,scaleY:0.7,x:-0.7,y:1.1,alpha:0.43},4).to({scaleX:0.35,scaleY:0.86,x:-1.2},3).to({scaleX:0.41,scaleY:1,alpha:0.391},4).to({scaleX:0.48,x:5.1,alpha:0.781},4).to({scaleX:0.44,x:6.1,alpha:0.898},5).to({scaleX:0.41,x:7,alpha:1},4).to({scaleX:0.35,scaleY:0.87,x:4.2,alpha:0.531},4).to({scaleX:0.3,scaleY:0.73,x:3.4,alpha:0.422},4).to({scaleX:0.33,scaleY:0.81,x:3.3,alpha:0.66},3).to({scaleX:0.49,scaleY:0.89,x:0,y:0.6,alpha:0.719},3).to({scaleX:0.55,scaleY:1,y:0,alpha:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-75.7,90.9,85.3);


(lib.NA_Imp_Walk001_Blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 3
	this.instance = new lib.NA_Imp_Pinch01_0();
	this.instance.setTransform(-16.7,-13.5,1.008,1.058,0,40.3,37.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:1.09,skewX:15.8,skewY:30.4,x:-10.5,y:-12.6},5).to({scaleX:0.99,scaleY:1.15,skewX:11.3,skewY:25.7,x:-4.7,y:-32.3},4).to({scaleX:0.98,skewX:-3.7,skewY:9.7,x:0,y:-50.9},4).to({scaleX:1,scaleY:1.04,skewX:-1.7,skewY:-0.5,x:-0.7,y:-59.7},4).to({scaleX:1.01,scaleY:1.04,skewX:-6.1,skewY:-7.1,x:0.6,y:-48.4},3).to({scaleX:0.91,scaleY:1.15,skewX:-11.4,skewY:-23.9,x:6,y:-28.3},4).to({scaleX:1.03,scaleY:1.02,skewX:-32.9,skewY:-20.7,x:7.5,y:-4.5},4).to({scaleX:0.9,scaleY:1.01,skewX:-28.9,skewY:-26.5,x:7.3,y:-7.3},5).to({scaleX:0.9,scaleY:1.01,skewX:-16,skewY:-23.1,x:3.4,y:-26.4},4).to({scaleX:0.94,skewX:-10.1,skewY:-8.6,x:-0.7,y:-46.3},4).to({scaleX:1.01,scaleY:1.04,skewX:0.6,skewY:0.8,y:-59.4},4).to({scaleX:1.01,skewX:11.6,skewY:15.8,x:-5.5,y:-52},3).to({scaleX:1.02,scaleY:1.09,skewX:22.1,skewY:31.2,x:-8.9,y:-37.7},3).to({scaleX:1.01,scaleY:1.06,skewX:40.3,skewY:37.7,x:-16.7,y:-13.5},3).wait(1));

	// NA_GreenImp_Pinch01
	this.instance_1 = new lib.NA_Imp_Pinch01();
	this.instance_1.setTransform(-16.7,-13.5,1.008,1.058,0,40.3,37.7);
	this.instance_1.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_1.cache(-15,-9,35,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.97,scaleY:1.09,skewX:15.8,skewY:30.4,x:-10.5,y:-12.6},5).to({scaleX:0.99,scaleY:1.15,skewX:11.3,skewY:25.7,x:-4.7,y:-32.3},4).to({scaleX:0.98,skewX:-3.7,skewY:9.7,x:0,y:-50.9},4).to({scaleX:1,scaleY:1.04,skewX:-1.7,skewY:-0.5,x:-0.7,y:-59.7},4).to({scaleX:1.01,scaleY:1.04,skewX:-6.1,skewY:-7.1,x:0.6,y:-48.4},3).to({scaleX:0.91,scaleY:1.15,skewX:-11.4,skewY:-23.9,x:6,y:-28.3},4).to({scaleX:1.03,scaleY:1.02,skewX:-32.9,skewY:-20.7,x:7.5,y:-4.5},4).to({scaleX:0.9,scaleY:1.01,skewX:-28.9,skewY:-26.5,x:7.3,y:-7.3},5).to({scaleX:0.9,scaleY:1.01,skewX:-16,skewY:-23.1,x:3.4,y:-26.4},4).to({scaleX:0.94,skewX:-10.1,skewY:-8.6,x:-0.7,y:-46.3},4).to({scaleX:1.01,scaleY:1.04,skewX:0.6,skewY:0.8,y:-59.4},4).to({scaleX:1.01,skewX:11.6,skewY:15.8,x:-5.5,y:-52},3).to({scaleX:1.02,scaleY:1.09,skewX:22.1,skewY:31.2,x:-8.9,y:-37.7},3).to({scaleX:1.01,scaleY:1.06,skewX:40.3,skewY:37.7,x:-16.7,y:-13.5},3).wait(1));

	// NA_GreenImp_RightEye01_2
	this.instance_2 = new lib.NA_Imp_RightEye01_0();
	this.instance_2.setTransform(4.5,-51.2,0.72,0.925,0,0.6,-172.3,0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-0.2,scaleX:0.71,scaleY:0.96,skewX:12.9,skewY:-163.2,x:3.2,y:-59.5},5).to({scaleY:0.92,skewX:13.2,skewY:-165.9,x:4.7,y:-85.2},4).to({regX:0.3,regY:-0.5,scaleX:0.71,scaleY:0.93,skewX:-14.3,skewY:-193.7,x:-4.8,y:-99.2},4).to({scaleX:0.71,scaleY:0.95,skewX:-22.3,skewY:-192.8,x:-7.6,y:-101.3},4).to({scaleX:0.73,scaleY:0.94,skewX:-24.7,skewY:-202,x:-11.5,y:-92.9},3).to({regX:0.4,regY:-0.3,scaleX:0.73,scaleY:0.9,skewX:-33.4,skewY:-216.6,x:-15.1,y:-72},4).to({regX:0.3,regY:-0.5,scaleX:0.73,scaleY:0.86,skewX:-42.4,skewY:-220,x:-23.1,y:-35.9},4).to({regX:0.4,regY:-0.4,skewX:-59.9,skewY:-237.4,x:-17.3,y:-41.7},5).to({regX:0.5,scaleX:0.71,scaleY:0.9,skewX:-30.5,skewY:-217,x:-13.2,y:-71.6},4).to({regX:0.4,regY:-0.6,scaleX:0.71,scaleY:0.89,skewX:-23.9,skewY:-197.5,x:-12.1,y:-91.6},4).to({regX:0.3,scaleX:0.73,scaleY:0.94,skewX:-19.8,skewY:-196.1,x:-7.8,y:-101.2},4).to({regX:0.1,regY:-0.8,scaleX:0.73,scaleY:0.94,skewX:-4.2,skewY:-179.4,x:-5.8,y:-96.5},3).to({regX:0.3,regY:-0.7,scaleX:0.72,scaleY:0.99,skewX:15.7,skewY:-161.5,x:2.5,y:-89.5},3).to({regX:0.1,regY:-0.4,scaleX:0.72,scaleY:0.93,skewX:0.6,skewY:-172.3,x:4.5,y:-51.2},3).wait(1));

	// NA_GreenImp_RightEye01_1
	this.instance_3 = new lib.NA_Imp_RightEye01_0();
	this.instance_3.setTransform(25.7,-37.6,1,1.008,0,53,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,skewX:45.6,skewY:44.3,x:22.8,y:-46.6},5).to({scaleX:1,scaleY:0.99,skewX:38.9,skewY:37,x:25.4,y:-74.3},4).to({skewX:8.9,skewY:7,x:17.7,y:-98.7},4).to({scaleX:1,scaleY:1,skewX:14.7,skewY:7.6,x:16.4,y:-101.6},4).to({scaleX:1.01,scaleY:0.99,skewX:-2.3,skewY:-4.7,x:10.8,y:-97.4},3).to({scaleX:1.02,scaleY:1,skewX:-17.7,skewY:-25.2,x:4.3,y:-83.7},4).to({scaleX:1.01,skewX:-10.7,skewY:-15.9,x:-1.9,y:-46.8},4).to({scaleX:1,scaleY:1.01,skewX:-5.3,skewY:-12.8,x:3.6,y:-55.3},5).to({skewX:-14.8,skewY:-22.4,x:6.4,y:-82.8},4).to({scaleX:1.01,scaleY:0.97,skewX:-4.4,skewY:-6.5,x:10.4,y:-96.2},4).to({scaleX:1.01,scaleY:0.98,skewX:15.9,skewY:8.7,x:16.4,y:-101.6},4).to({scaleX:1.01,scaleY:0.99,skewX:24.3,skewY:18.1,x:16.8,y:-92.6},3).to({scaleX:1.03,scaleY:0.95,skewX:38.9,skewY:34.3,x:23.1,y:-78.6},3).to({scaleX:1,scaleY:1.01,skewX:53,skewY:55.5,x:25.7,y:-37.6},3).wait(1));

	// NA_GreenImp_RightEye01_0
	this.instance_4 = new lib.NA_Imp_RightEye01();
	this.instance_4.setTransform(4.5,-51.2,0.72,0.925,0,0.6,-172.3,0.1,-0.4);
	this.instance_4.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_4.cache(-12,-12,24,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-0.2,scaleX:0.71,scaleY:0.96,skewX:12.9,skewY:-163.2,x:3.2,y:-59.5},5).to({scaleY:0.92,skewX:13.2,skewY:-165.9,x:4.7,y:-85.2},4).to({regX:0.3,regY:-0.5,scaleX:0.71,scaleY:0.93,skewX:-14.3,skewY:-193.7,x:-4.8,y:-99.2},4).to({scaleX:0.71,scaleY:0.95,skewX:-22.3,skewY:-192.8,x:-7.6,y:-101.3},4).to({scaleX:0.73,scaleY:0.94,skewX:-24.7,skewY:-202,x:-11.5,y:-92.9},3).to({regX:0.4,regY:-0.3,scaleX:0.73,scaleY:0.9,skewX:-33.4,skewY:-216.6,x:-15.1,y:-72},4).to({regX:0.3,regY:-0.5,scaleX:0.73,scaleY:0.86,skewX:-42.4,skewY:-220,x:-23.1,y:-35.9},4).to({regX:0.4,regY:-0.4,skewX:-59.9,skewY:-237.4,x:-17.3,y:-41.7},5).to({regX:0.5,scaleX:0.71,scaleY:0.9,skewX:-30.5,skewY:-217,x:-13.2,y:-71.6},4).to({regX:0.4,regY:-0.6,scaleX:0.71,scaleY:0.89,skewX:-23.9,skewY:-197.5,x:-12.1,y:-91.6},4).to({regX:0.3,scaleX:0.73,scaleY:0.94,skewX:-19.8,skewY:-196.1,x:-7.8,y:-101.2},4).to({regX:0.1,regY:-0.8,scaleX:0.73,scaleY:0.94,skewX:-4.2,skewY:-179.4,x:-5.8,y:-96.5},3).to({regX:0.3,regY:-0.7,scaleX:0.72,scaleY:0.99,skewX:15.7,skewY:-161.5,x:2.5,y:-89.5},3).to({regX:0.1,regY:-0.4,scaleX:0.72,scaleY:0.93,skewX:0.6,skewY:-172.3,x:4.5,y:-51.2},3).wait(1));

	// NA_GreenImp_RightEye01
	this.instance_5 = new lib.NA_Imp_RightEye01();
	this.instance_5.setTransform(25.7,-37.6,1,1.008,0,53,55.5);
	this.instance_5.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_5.cache(-12,-12,24,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,skewX:45.6,skewY:44.3,x:22.8,y:-46.6},5).to({scaleX:1,scaleY:0.99,skewX:38.9,skewY:37,x:25.4,y:-74.3},4).to({skewX:8.9,skewY:7,x:17.7,y:-98.7},4).to({scaleX:1,scaleY:1,skewX:14.7,skewY:7.6,x:16.4,y:-101.6},4).to({scaleX:1.01,scaleY:0.99,skewX:-2.3,skewY:-4.7,x:10.8,y:-97.4},3).to({scaleX:1.02,scaleY:1,skewX:-17.7,skewY:-25.2,x:4.3,y:-83.7},4).to({scaleX:1.01,skewX:-10.7,skewY:-15.9,x:-1.9,y:-46.8},4).to({scaleX:1,scaleY:1.01,skewX:-5.3,skewY:-12.8,x:3.6,y:-55.3},5).to({skewX:-14.8,skewY:-22.4,x:6.4,y:-82.8},4).to({scaleX:1.01,scaleY:0.97,skewX:-4.4,skewY:-6.5,x:10.4,y:-96.2},4).to({scaleX:1.01,scaleY:0.98,skewX:15.9,skewY:8.7,x:16.4,y:-101.6},4).to({scaleX:1.01,scaleY:0.99,skewX:24.3,skewY:18.1,x:16.8,y:-92.6},3).to({scaleX:1.03,scaleY:0.95,skewX:38.9,skewY:34.3,x:23.1,y:-78.6},3).to({scaleX:1,scaleY:1.01,skewX:53,skewY:55.5,x:25.7,y:-37.6},3).wait(1));

	// NA_GreenImp_Ear01_0
	this.instance_6 = new lib.NA_Imp_Ear01();
	this.instance_6.setTransform(34.5,-34.8,0.999,0.999,27,0,0,-0.1,0);
	this.instance_6.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_6.cache(-3,-8,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0,scaleY:1.02,rotation:0,skewX:83.7,skewY:72,x:27.2,y:-43},5).to({skewX:113.2,skewY:101.5,x:29.8,y:-70.7},4).to({scaleX:0.99,scaleY:1.08,skewX:45.8,skewY:37.2,x:25.7,y:-97.1},4).to({scaleX:0.99,skewX:0.8,skewY:-4.5,x:25.6,y:-100.6},4).to({skewX:-11.8,skewY:-17.2,x:20.4,y:-97.7},3).to({skewX:-17.8,skewY:-23.2,x:12.8,y:-86},4).to({skewX:-16.3,skewY:-21.7,x:7.7,y:-48.4},4).to({skewX:-22.3,skewY:-27.6,x:7.4,y:-61.8},5).to({x:13.3,y:-90.6},4).to({scaleX:0.98,skewY:-19.9,x:19.8,y:-100.4},4).to({scaleY:1.08,skewX:-3.6,skewY:-4.9,x:26.2,y:-100.8},4).to({skewX:7.4,skewY:6.1,x:26,y:-92.4},3).to({skewX:22.4,skewY:21.1,x:30.4,y:-78},3).to({regX:-0.1,regY:0.1,scaleX:1,scaleY:1,rotation:27,skewX:0,skewY:0,x:34.4,y:-34.7},3).wait(1));

	// NA_GreenImp_Nose01_0
	this.instance_7 = new lib.NA_Imp_Nose01_0();
	this.instance_7.setTransform(11.6,-40.1,1,1,31.7);
	this.instance_7.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_7.cache(-6,-3,11,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:8.5,y:-47.8},5).to({scaleX:1,rotation:0,skewX:22.7,skewY:25.3,x:10.9,y:-73.8},4).to({scaleY:1.08,skewX:-11.7,skewY:10.3,x:5.8,y:-91.3},4).to({scaleX:0.97,skewY:4.7,x:3.8,y:-94.2},4).to({skewX:-20.9,skewY:-4.5,x:0.7,y:-87.6},3).to({scaleX:0.93,skewX:-34.6,skewY:-28.6,x:-2.8,y:-70},4).to({skewX:-32.4,skewY:-26.4,x:-10.4,y:-34.3},4).to({skewX:-36.9,skewY:-30.9,x:-4.7,y:-43.1},5).to({scaleX:0.93,scaleY:0.98,skewX:-31.4,skewY:-28.8,x:-1.1,y:-69},4).to({scaleY:0.98,skewX:-10.7,skewY:-13.8,x:-0.5,y:-86.2},4).to({skewX:4.3,skewY:1.2,x:3.5,y:-94.1},4).to({scaleX:0.93,skewX:13,skewY:8.6,x:3.2,y:-87.2},3).to({scaleX:0.98,scaleY:0.99,skewX:34.7,skewY:23.6,x:8.3,y:-77.5},3).to({scaleX:1,scaleY:1,rotation:31.7,skewX:0,skewY:0,x:11.6,y:-40.1},3).wait(1));

	// NA_GreenImp_Nose01
	this.instance_8 = new lib.NA_Imp_Nose01();
	this.instance_8.setTransform(11.6,-40.1,1,1,31.7);
	this.instance_8.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_8.cache(-6,-5,13,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:8.5,y:-47.8},5).to({scaleX:1,rotation:0,skewX:22.7,skewY:25.3,x:10.9,y:-73.8},4).to({scaleY:1.08,skewX:-11.7,skewY:10.3,x:5.8,y:-91.3},4).to({scaleX:0.97,skewY:4.7,x:3.8,y:-94.2},4).to({skewX:-20.9,skewY:-4.5,x:0.7,y:-87.6},3).to({scaleX:0.93,skewX:-34.6,skewY:-28.6,x:-2.8,y:-70},4).to({skewX:-32.4,skewY:-26.4,x:-10.4,y:-34.3},4).to({skewX:-36.9,skewY:-30.9,x:-4.7,y:-43.1},5).to({scaleX:0.93,scaleY:0.98,skewX:-31.4,skewY:-28.8,x:-1.1,y:-69},4).to({scaleY:0.98,skewX:-10.7,skewY:-13.8,x:-0.5,y:-86.2},4).to({skewX:4.3,skewY:1.2,x:3.5,y:-94.1},4).to({scaleX:0.93,skewX:13,skewY:8.6,x:3.2,y:-87.2},3).to({scaleX:0.98,scaleY:0.99,skewX:34.7,skewY:23.6,x:8.3,y:-77.5},3).to({scaleX:1,scaleY:1,rotation:31.7,skewX:0,skewY:0,x:11.6,y:-40.1},3).wait(1));

	// NA_GreenImp_Horn01_0
	this.instance_9 = new lib.NA_Imp_Horn01();
	this.instance_9.setTransform(32.8,-42.8,1.005,1.002,0,35.3,28.4,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:-0.3,x:28.3,y:-51.6},5).to({regX:-0.1,regY:-0.1,scaleX:0.99,scaleY:1,skewX:30.1,skewY:26.3,x:28.9,y:-77.5},4).to({scaleY:1,skewX:-3.9,skewY:-2.4,x:21.8,y:-102.9},4).to({regY:-0.3,scaleX:0.99,rotation:-3.9,skewX:0,skewY:0,x:20.5,y:-106.9},4).to({regY:-0.4,rotation:-13.1,x:14.2,y:-103.3},3).to({regY:-0.3,rotation:-41.8,x:4.6,y:-91.8},4).to({regY:-0.1,scaleX:0.98,scaleY:1.01,rotation:0,skewX:-23,skewY:-27.7,x:-0.7,y:-52.1},4).to({scaleX:0.98,scaleY:1.02,skewX:-47.4,skewY:-55.6,x:-0.5,y:-65.5},5).to({regX:-0.3,regY:-0.3,scaleX:0.97,scaleY:1.02,skewX:-38.5,skewY:-43.6,x:5.3,y:-95.4},4).to({regX:-0.2,regY:-0.2,scaleY:1.02,skewX:-33.1,skewY:-27.9,x:13.8,y:-106.3},4).to({regX:-0.1,regY:-0.1,scaleX:0.97,scaleY:1.02,skewX:-11.9,skewY:-8,x:21.3,y:-106.6},4).to({regX:-0.3,regY:-0.2,scaleX:0.97,scaleY:1.02,skewX:-0.3,skewY:1,x:21.2,y:-98.7},3).to({scaleX:0.98,skewX:7.9,skewY:15.7,x:28.4,y:-85.6},3).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,skewX:35.3,skewY:28.4,x:32.8,y:-42.8},3).wait(1));

	// NA_GreenImp_LowerJaw01_0
	this.instance_10 = new lib.NA_Imp_LowerJaw01_teeth_0();
	this.instance_10.setTransform(-7.2,-20.4,1.022,1.005,0,37.8,29.9,-0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:-0.1,scaleX:1.04,scaleY:0.92,skewX:33.2,skewY:38.3,x:-6.8,y:-26},5).to({regX:-0.5,regY:0.1,scaleX:0.97,scaleY:0.93,skewX:15.9,skewY:30.4,x:-1.1,y:-44.2},4).to({regX:-0.3,regY:0.4,scaleX:0.96,scaleY:0.89,skewX:4.1,skewY:10.4,x:0.8,y:-61.4},4).to({regX:-0.4,regY:0.3,scaleX:1.02,scaleY:0.88,skewX:0.2,skewY:0.7,x:-0.3,y:-70.1},4).to({regX:-0.3,regY:0.2,scaleX:1.02,scaleY:0.85,skewX:-0.1,skewY:-9.3,x:-0.2,y:-59.2},3).to({regX:-0.1,regY:0.1,scaleX:1.02,scaleY:0.83,skewX:-21.4,skewY:-31.9,x:4,y:-40.3},4).to({regX:-0.4,scaleX:1.04,scaleY:0.85,skewX:-25,skewY:-21.2,x:0.6,y:-11.3},4).to({regX:-0.3,regY:0.3,scaleX:0.95,scaleY:0.88,skewX:-15.1,skewY:-30.7,x:2.3,y:-18.1},5).to({regX:-0.1,regY:0.2,scaleX:0.97,scaleY:0.8,skewX:-16.3,skewY:-31.2,x:2,y:-37.2},4).to({regX:-0.2,regY:0,scaleX:0.95,scaleY:0.81,skewX:-3,skewY:-15.9,x:-1.3,y:-56},4).to({regX:-0.3,regY:-0.2,scaleX:1.04,scaleY:0.79,skewX:0.2,skewY:-0.2,x:-0.5,y:-70.9},4).to({regX:-0.1,regY:-0.4,scaleX:1.04,scaleY:0.85,skewX:14,skewY:14.8,x:-1.6,y:-65.4},3).to({regX:0.1,scaleX:1.03,scaleY:0.87,skewX:17.8,skewY:29.5,x:-0.7,y:-50.3},3).to({regX:-0.4,regY:-0.3,scaleX:1.02,scaleY:1,skewX:37.8,skewY:29.9,x:-7.2,y:-20.4},3).wait(1));

	// NA_GreenImp_UpperJaw01_0
	this.instance_11 = new lib.NA_Imp_UpperJaw01_teeth_0();
	this.instance_11.setTransform(6.6,-36.9,1.016,0.971,0,45.4,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:0.88,scaleY:1.02,skewX:25.8,skewY:34.3,x:4.3,y:-43},5).to({scaleX:0.84,scaleY:1.02,skewX:20.2,skewY:28,x:7.2,y:-68.8},4).to({scaleX:0.95,scaleY:1.02,skewX:-1.5,skewY:3.7,x:3.2,y:-86.7},4).to({scaleX:1.03,scaleY:0.75,skewX:-5,skewY:-0.4,x:1.7,y:-90.3},4).to({scaleX:0.99,scaleY:0.89,skewX:-2.5,skewY:-14.5,x:-0.6,y:-81.9},3).to({scaleX:0.98,scaleY:0.93,skewX:-17.1,skewY:-35.2,x:-2,y:-65},4).to({scaleX:0.95,scaleY:0.88,skewX:-26.4,skewY:-28.8,x:-8.7,y:-29.3},4).to({scaleX:0.95,scaleY:0.91,skewX:-17.8,skewY:-33.2,x:-2.9,y:-37.1},5).to({scaleX:0.97,scaleY:0.9,skewX:-15.9,skewY:-34.5,x:-1.1,y:-64.1},4).to({scaleX:0.98,scaleY:0.87,skewX:-2.6,skewY:-14.3,x:-0.7,y:-81.4},4).to({scaleX:1.05,scaleY:0.78,skewX:2.6,skewY:-1,x:2.2,y:-90.5},4).to({scaleX:0.96,scaleY:1.04,skewX:-2.9,skewY:8.4,x:1.9,y:-82.6},3).to({scaleX:0.93,scaleY:1,skewX:13.2,skewY:24.9,x:7.7,y:-73.5},3).to({scaleX:1.02,scaleY:0.97,skewX:45.4,skewY:29.6,x:6.6,y:-36.9},3).wait(1));

	// NA_GreenImp_LowerJaw01
	this.instance_12 = new lib.NA_Imp_LowerJaw01();
	this.instance_12.setTransform(-7.2,-20.4,1.022,1.005,0,37.8,29.9,-0.4,-0.3);
	this.instance_12.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_12.cache(-20,-13,49,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:-0.1,scaleX:1.04,scaleY:0.92,skewX:33.2,skewY:38.3,x:-6.8,y:-26},5).to({regX:-0.5,regY:0.1,scaleX:0.97,scaleY:0.93,skewX:15.9,skewY:30.4,x:-1.1,y:-44.2},4).to({regX:-0.3,regY:0.4,scaleX:0.96,scaleY:0.89,skewX:4.1,skewY:10.4,x:0.8,y:-61.4},4).to({regX:-0.4,regY:0.3,scaleX:1.02,scaleY:0.88,skewX:0.2,skewY:0.7,x:-0.3,y:-70.1},4).to({regX:-0.3,regY:0.2,scaleX:1.02,scaleY:0.85,skewX:-0.1,skewY:-9.3,x:-0.2,y:-59.2},3).to({regX:-0.1,regY:0.1,scaleX:1.02,scaleY:0.83,skewX:-21.4,skewY:-31.9,x:4,y:-40.3},4).to({regX:-0.4,scaleX:1.04,scaleY:0.85,skewX:-25,skewY:-21.2,x:0.6,y:-11.3},4).to({regX:-0.3,regY:0.3,scaleX:0.95,scaleY:0.88,skewX:-15.1,skewY:-30.7,x:2.3,y:-18.1},5).to({regX:-0.1,regY:0.2,scaleX:0.97,scaleY:0.8,skewX:-16.3,skewY:-31.2,x:2,y:-37.2},4).to({regX:-0.2,regY:0,scaleX:0.95,scaleY:0.81,skewX:-3,skewY:-15.9,x:-1.3,y:-56},4).to({regX:-0.3,regY:-0.2,scaleX:1.04,scaleY:0.79,skewX:0.2,skewY:-0.2,x:-0.5,y:-70.9},4).to({regX:-0.1,regY:-0.4,scaleX:1.04,scaleY:0.85,skewX:14,skewY:14.8,x:-1.6,y:-65.4},3).to({regX:0.1,scaleX:1.03,scaleY:0.87,skewX:17.8,skewY:29.5,x:-0.7,y:-50.3},3).to({regX:-0.4,regY:-0.3,scaleX:1.02,scaleY:1,skewX:37.8,skewY:29.9,x:-7.2,y:-20.4},3).wait(1));

	// NA_GreenImp_UpperJaw01
	this.instance_13 = new lib.NA_Imp_UpperJaw01();
	this.instance_13.setTransform(6.6,-36.9,1.016,0.971,0,45.4,29.6);
	this.instance_13.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_13.cache(-19,-9,46,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:0.88,scaleY:1.02,skewX:25.8,skewY:34.3,x:4.3,y:-43},5).to({scaleX:0.84,scaleY:1.02,skewX:20.2,skewY:28,x:7.2,y:-68.8},4).to({scaleX:0.95,scaleY:1.02,skewX:-1.5,skewY:3.7,x:3.2,y:-86.7},4).to({scaleX:1.03,scaleY:0.75,skewX:-5,skewY:-0.4,x:1.7,y:-90.3},4).to({scaleX:0.99,scaleY:0.89,skewX:-2.5,skewY:-14.5,x:-0.6,y:-81.9},3).to({scaleX:0.98,scaleY:0.93,skewX:-17.1,skewY:-35.2,x:-2,y:-65},4).to({scaleX:0.95,scaleY:0.88,skewX:-26.4,skewY:-28.8,x:-8.7,y:-29.3},4).to({scaleX:0.95,scaleY:0.91,skewX:-17.8,skewY:-33.2,x:-2.9,y:-37.1},5).to({scaleX:0.97,scaleY:0.9,skewX:-15.9,skewY:-34.5,x:-1.1,y:-64.1},4).to({scaleX:0.98,scaleY:0.87,skewX:-2.6,skewY:-14.3,x:-0.7,y:-81.4},4).to({scaleX:1.05,scaleY:0.78,skewX:2.6,skewY:-1,x:2.2,y:-90.5},4).to({scaleX:0.96,scaleY:1.04,skewX:-2.9,skewY:8.4,x:1.9,y:-82.6},3).to({scaleX:0.93,scaleY:1,skewX:13.2,skewY:24.9,x:7.7,y:-73.5},3).to({scaleX:1.02,scaleY:0.97,skewX:45.4,skewY:29.6,x:6.6,y:-36.9},3).wait(1));

	// NA_GreenImp_Moth01
	this.instance_14 = new lib.NA_Imp_Moth01();
	this.instance_14.setTransform(5.8,-33.6,0.991,1.098,0,38,31.7,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:-0.1,regY:-0.5,scaleX:0.94,scaleY:0.9,skewX:35.6,skewY:37.9,x:4,y:-38.3},5).to({regX:0.1,regY:-0.1,scaleX:0.81,scaleY:1.07,skewX:20.9,skewY:28.7,x:7.9,y:-63.7},4).to({regX:-0.3,regY:-0.3,scaleX:0.9,scaleY:1.06,skewX:4.4,skewY:7,x:4,y:-81.7},4).to({regX:-0.5,regY:-0.4,scaleX:1.08,scaleY:0.84,skewX:-0.7,skewY:0,x:2.9,y:-86.4},4).to({regX:-0.7,scaleX:0.92,scaleY:1.13,skewX:-5.3,skewY:-12.3,x:0.7,y:-79.5},3).to({regX:-0.5,regY:-0.5,scaleX:0.86,scaleY:1.02,skewX:-19,skewY:-30.8,x:-0.5,y:-60.7},4).to({regX:-0.6,regY:-0.3,scaleX:0.91,scaleY:0.89,skewX:-35.7,skewY:-23.4,x:-5.4,y:-26.9},4).to({regX:-0.5,regY:-0.2,scaleX:0.9,scaleY:0.92,skewX:-13.3,skewY:-28.8,x:-0.4,y:-35},5).to({regX:0.1,scaleX:0.86,scaleY:1.15,skewX:-4.9,skewY:-31.7,x:1.2,y:-60.1},4).to({regX:0,regY:-0.7,scaleX:1.02,scaleY:0.96,skewX:-3.8,skewY:-15,x:0.6,y:-78},4).to({regX:0.3,scaleX:1.09,scaleY:0.94,skewX:3.1,skewY:0.6,x:4.2,y:-86.7},4).to({regX:0.2,regY:-0.5,scaleX:0.94,scaleY:0.95,skewX:14.1,skewY:13.4,x:3.7,y:-79},3).to({regX:0,regY:-0.7,scaleX:0.94,scaleY:1.12,skewX:21.4,skewY:26.2,x:7.4,y:-68.3},3).to({regX:-0.2,regY:-0.1,scaleX:0.99,scaleY:1.1,skewX:38,skewY:31.7,x:5.8,y:-33.6},3).wait(1));

	// NA_GreenImp_Body01
	this.instance_15 = new lib.NA_Imp_Body01();
	this.instance_15.setTransform(9.6,-34.3,1.052,1.044,0,33.4,26.2,-0.1,-0.1);
	this.instance_15.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_15.cache(-31,-26,61,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:0.89,scaleY:1.1,skewX:25.6,skewY:34.6,x:7.9,y:-41.7},5).to({scaleX:0.86,scaleY:1.19,skewX:17.2,skewY:25.6,x:10.3,y:-64.5},4).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1.07,skewX:3.9,skewY:6.2,x:7.3,y:-84},4).to({scaleX:1.09,scaleY:0.96,skewX:2.7,skewY:0.2,x:6.1,y:-89.1},4).to({regX:-0.2,scaleX:1.06,scaleY:1.04,skewX:-7.2,skewY:-14.8,x:2.7,y:-80.5},3).to({regX:0,regY:0,scaleX:0.99,scaleY:1.13,skewX:-19,skewY:-35,x:0.7,y:-64},4).to({scaleX:1.09,scaleY:0.98,skewX:-36.5,skewY:-25,x:-2.7,y:-32.2},4).to({scaleX:1,scaleY:1.06,skewX:-29.4,skewY:-39.4,x:-0.7,y:-39.6},5).to({scaleX:0.97,scaleY:1.23,skewX:-13.2,skewY:-35.4,x:1.2,y:-65.7},4).to({scaleX:1.06,scaleY:1.05,skewX:-7.5,skewY:-18.5,x:2.3,y:-82.1},4).to({scaleX:1.09,scaleY:0.96,skewX:1.8,skewY:0.4,x:5.7,y:-89.4},4).to({scaleX:1.04,scaleY:1.03,skewX:6.4,skewY:9,x:6,y:-81.1},3).to({scaleX:0.97,scaleY:1.18,skewX:17.9,skewY:23.3,x:9.5,y:-68.9},3).to({regX:-0.1,regY:-0.1,scaleX:1.05,scaleY:1.04,skewX:33.4,skewY:26.2,x:9.6,y:-34.3},3).wait(1));

	// NA_GreenImp_Arm01_0
	this.instance_16 = new lib.NA_Imp_Arm01();
	this.instance_16.setTransform(30.4,-27.9,1.004,0.999,0,46.9,52.7,-0.1,0.1);
	this.instance_16.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_16.cache(-2,-17,23,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regY:0,scaleX:1,scaleY:0.98,skewX:79.7,skewY:84.7,x:22.6,y:-33.8},5).to({regY:-0.1,scaleY:0.98,skewX:98.7,skewY:92.6,x:25.8,y:-59.9},4).to({scaleX:1.03,scaleY:0.99,skewX:59.1,skewY:67.6,x:25.6,y:-89.6},4).to({regX:-0.2,regY:-0.3,scaleX:1.03,scaleY:0.98,skewX:26.7,skewY:35.1,x:27.7,y:-94.4},4).to({regX:-0.1,regY:-0.4,skewX:-12.9,skewY:-4.1,x:22.3,y:-91.2},3).to({regY:-0.3,scaleX:1.04,scaleY:0.97,skewX:-20.6,skewY:-25.9,x:15.5,y:-78.7},4).to({scaleY:0.97,skewX:-44.5,skewY:-40.9,x:13.5,y:-45.4},4).to({regY:-0.4,scaleY:0.97,skewX:-33.5,skewY:-34.7,x:13.6,y:-53.7},5).to({scaleX:1.04,scaleY:1.03,skewX:-17.9,skewY:-21.1,x:14.9,y:-81.3},4).to({regX:0,regY:-0.3,scaleY:1.03,skewX:-6.6,skewY:-6.1,x:21.5,y:-92.9},4).to({regX:-0.1,scaleX:1.04,scaleY:1.01,skewX:-3.2,skewY:7.7,x:28.1,y:-93.5},4).to({regY:-0.1,skewX:7.8,skewY:18.7,x:26.2,y:-84.7},3).to({scaleY:0.99,skewX:52.6,skewY:57.7,x:26.6,y:-67.9},3).to({regY:0.1,scaleX:1,scaleY:1,skewX:46.9,skewY:52.7,x:30.4,y:-27.9},3).wait(1));

	// NA_GreenImp_Horn01
	this.instance_17 = new lib.NA_Imp_Horn01();
	this.instance_17.setTransform(13.5,-55.2,0.921,0.997,0,45.9,-136.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:0.86,scaleY:1,skewX:45.7,skewY:-129.1,x:10.4,y:-65.7},5).to({scaleX:0.99,scaleY:1,skewX:37.8,skewY:-138.1,x:10,y:-89.7},4).to({scaleX:0.89,scaleY:1.11,skewX:13,skewY:-172.6,x:-4.4,y:-103.8},4).to({scaleX:0.89,scaleY:1.08,skewX:9.7,skewY:-169.6,x:-6.9,y:-105.6},4).to({scaleX:0.9,scaleY:1.08,skewX:-7.2,skewY:-177.6,x:-9.3,y:-97.3},3).to({skewX:-13.9,skewY:-184.3,x:-12.4,y:-78.4},4).to({skewX:-12.9,skewY:-183.3,x:-23.1,y:-42.2},4).to({scaleX:0.88,scaleY:1.08,skewX:-15.3,skewY:-193.9,x:-17.6,y:-50.3},5).to({scaleY:1.08,skewX:-17.3,x:-10.9,y:-81.8},4).to({scaleX:0.97,skewY:-188.3,x:-10.1,y:-96.9},4).to({scaleX:0.93,scaleY:1.07,skewX:4.6,skewY:-172.3,x:-6.1,y:-105.6},4).to({scaleX:0.93,skewX:15.6,skewY:-161.8,x:-4.2,y:-101.8},3).to({scaleX:0.94,scaleY:1.06,skewX:27.2,skewY:-147.5,x:7.6,y:-94},3).to({scaleX:0.92,scaleY:1,skewX:45.9,skewY:-136.4,x:13.5,y:-55.2},3).wait(1));

	// NA_GreenImp_Leg02_0
	this.instance_18 = new lib.NA_Imp_Leg02();
	this.instance_18.setTransform(-22.9,-38,1.242,0.366,0,89.9,-94.2);
	this.instance_18.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_18.cache(-13,-21,25,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleX:1.15,scaleY:0.34,skewX:66.4,skewY:-112.1,x:-21.9,y:-34},5).to({scaleX:1.22,scaleY:0.37,skewX:71.6,skewY:-119.7,x:-17.8,y:-57.3},4).to({scaleY:0.41,skewX:51.1,skewY:-140.2,x:-19.4,y:-65.9},4).to({scaleX:1.23,scaleY:0.43,skewX:11.5,skewY:-176,x:-17.5,y:-65},4).to({scaleX:0.71,scaleY:0.71,skewX:-6.2,skewY:-184.4,x:-12.1,y:-47.7},3).to({scaleX:0.69,scaleY:1.04,skewX:-8.2,skewY:-179.1,x:-5.2,y:-22.4},4).to({scaleX:0.89,scaleY:0.68,skewX:-86.5,skewY:-227.1,x:-8,y:-2.6},4).to({scaleX:0.71,scaleY:0.7,skewX:-103.6,skewY:-264.1,x:1,y:-4.5},5).to({scaleX:0.73,scaleY:0.98,skewX:-34.1,skewY:-192.4,x:0.6,y:-19.4},4).to({scaleX:0.81,scaleY:0.76,skewX:-28.2,skewY:-180.1,x:-8.9,y:-46.1},4).to({scaleX:0.88,scaleY:0.46,skewX:-51.4,skewY:-211.1,x:-20,y:-63.9},4).to({scaleY:0.49,skewX:-29.9,skewY:-180.5,x:-23.7,y:-63.7},3).to({scaleX:0.89,scaleY:0.5,skewX:0.4,skewY:-144.9,x:-21.6,y:-63.8},3).to({scaleX:1.24,scaleY:0.37,skewX:89.9,skewY:-94.2,x:-22.9,y:-38},3).wait(1));

	// NA_GreenImp_Foot01_0
	this.instance_19 = new lib.NA_Imp_Foot01();
	this.instance_19.setTransform(-30.1,-34.3,0.996,0.907,0,63,-113.4);

	this.instance_20 = new lib.Interpolation69();
	this.instance_20.setTransform(15.2,-21.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:-25.3,y:-27.3},5).to({skewX:54.1,skewY:-122.3,x:-21.5,y:-50.9},4).to({scaleX:0.93,skewX:39.1,skewY:-137.3,x:-22.7,y:-59},4).to({scaleX:0.93,scaleY:1.03,skewX:-16.2,skewY:-183,x:-15.8,y:-56.8},4).to({scaleX:0.85,skewX:-40.4,skewY:-215.6,x:-9.7,y:-33},3).to({_off:true,scaleX:1,scaleY:1,skewX:0,skewY:-360,x:15.2,y:-21.5},4).to({_off:false,scaleX:1.28,scaleY:1.24,skewX:12,skewY:-180.4,x:0.6,y:1.2},4).to({scaleX:1.2,scaleY:1.34,skewX:-4.8,skewY:-178.8,x:10.4,y:1.1},5).to({scaleX:1.22,skewX:-65.4,skewY:-258.4,x:11.8,y:-2.2},4).to({scaleX:1.02,skewX:-50.4,skewY:-234,x:-0.2,y:-32.1},4).to({scaleX:0.74,scaleY:1.1,skewX:-12.3,skewY:-183,x:-15.3,y:-57.1},4).to({scaleX:0.83,scaleY:0.97,skewX:27.1,skewY:-151.2,x:-23,y:-56},3).to({scaleX:0.81,scaleY:0.99,skewX:69.2,skewY:-113.6,x:-24,y:-56.2},3).to({scaleX:1,scaleY:0.91,skewX:63,skewY:-113.4,x:-30.1,y:-34.3},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(20).to({_off:false},4).to({_off:true,scaleX:1.28,scaleY:1.24,skewX:12,skewY:-180.4,x:0.6,y:1.2},4).wait(27));

	// Calque 23
	this.instance_21 = new lib.NA_Imp_Foot01();
	this.instance_21.setTransform(41.5,-36.6,0.849,0.81,0,-130.8,-124.7);
	this.instance_21._off = true;
	this.instance_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 46, 21, 27, 0)];
	this.instance_21.cache(-5,-4,10,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(28).to({_off:false},0).to({scaleX:0.97,scaleY:0.8,skewX:-99.7,skewY:-96.4,x:34.1,y:-22.8},5).to({scaleX:0.93,scaleY:0.84,skewX:-74.4,skewY:-75,x:32.4,y:-43.8},4).to({scaleX:0.96,scaleY:0.81,skewX:-46.2,skewY:-46.8,x:27.5,y:-52.1},4).to({_off:true},1).wait(13));

	// NA_GreenImp_Foot01
	this.instance_22 = new lib.NA_Imp_Foot01();
	this.instance_22.setTransform(6.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleY:1.21,x:11.1,y:1.5},5).to({scaleX:1.31,scaleY:1.19,skewX:27.7,skewY:50.2,x:18.5,y:-2.5},4).to({scaleX:1,scaleY:0.97,skewX:41.2,skewY:39,x:23.6,y:-35.5},4).to({skewX:11.2,skewY:9,x:24.2,y:-55.8},4).to({skewX:-28.1,skewY:-30.3,x:28.4,y:-51.7},3).to({scaleX:1.18,scaleY:1.15,skewX:-58.1,skewY:-60.3,x:33.2,y:-44.1},4).to({scaleX:0.97,scaleY:1.41,skewX:-132.7,skewY:-125,x:40.8,y:-36},4).to({scaleX:1.11,scaleY:1.39,skewX:-101.9,skewY:-96.7,x:33.2,y:-22.7},5).to({scaleX:1.06,scaleY:1.45,skewX:-76.4,skewY:-75.3,x:31.6,y:-44.1},4).to({scaleX:1.09,scaleY:1.4,skewX:-48.4,skewY:-47.1,x:27,y:-52.7},4).to({scaleX:0.86,scaleY:1.06,skewX:25.3,skewY:6.3,x:24.4,y:-56.1},4).to({scaleX:0.85,scaleY:1.01,skewX:31.3,skewY:34.5,x:12.5,y:-32.7},3).to({scaleX:1.19,scaleY:1.27,skewX:46.2,skewY:68.5,x:4.2,y:-3.6},3).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:6.8,y:1.9},3).wait(1));

	// NA_GreenImp_Leg02
	this.instance_23 = new lib.NA_Imp_Leg02();
	this.instance_23.setTransform(6.2,-9.7,2.035,0.733,0,-27.4,8.9);
	this.instance_23.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_23.cache(-13,-21,25,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({scaleX:1.41,scaleY:0.71,skewX:-31.8,skewY:-1.1,x:11.7,y:-8.6},5).to({scaleX:0.76,scaleY:1.19,skewX:-4.2,skewY:-25.8,x:16.7,y:-26.9},4).to({scaleX:0.74,scaleY:0.76,skewX:1.8,skewY:-16.3,x:25.1,y:-51.6},4).to({scaleX:1.16,scaleY:0.46,skewX:47.8,skewY:25.9,x:27.8,y:-63.5},4).to({scaleX:1.23,scaleY:0.39,skewX:18.6,skewY:-5.9,x:28.9,y:-59.4},3).to({scaleX:1,scaleY:0.48,skewX:-4.8,skewY:-47.4,x:31.6,y:-53},4).to({scaleX:0.85,skewX:-62.7,skewY:-98.8,x:33.3,y:-39.2},4).to({scaleX:0.97,scaleY:0.47,skewX:-20.9,skewY:-66.1,x:29.5,y:-29.3},5).to({scaleX:0.77,scaleY:0.54,skewX:2.2,skewY:-43.7,x:30.2,y:-53},4).to({scaleX:0.83,scaleY:0.55,skewX:18,skewY:-21.1,x:29.2,y:-60.8},4).to({scaleX:0.95,scaleY:0.38,skewX:32.5,skewY:0.5,x:29.5,y:-61.8},4).to({scaleX:0.82,scaleY:0.69,skewX:14.9,skewY:11,x:17.3,y:-46.7},3).to({scaleX:0.74,scaleY:1.14,skewX:21,skewY:4,x:13,y:-25.8},3).to({scaleX:2.04,scaleY:0.73,skewX:-27.4,skewY:8.9,x:6.2,y:-9.7},3).wait(1));

	// NA_GreenImp_Ear01
	this.instance_24 = new lib.NA_Imp_Ear01();
	this.instance_24.setTransform(7.7,-54.2,0.95,0.95,0,39.9,-140.1,-0.1,-0.2);
	this.instance_24.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_24.cache(-3,-8,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({regX:0,regY:-0.1,x:4.8,y:-64.5},5).to({regX:-0.1,skewX:30.9,skewY:-149.1,x:4.3,y:-88.3},4).to({regX:0,regY:-0.2,skewX:-1.6,skewY:-181.6,x:-8.9,y:-100.5},4).to({skewX:-1.6,x:-11.2,y:-101.8},4).to({regX:-0.2,regY:-0.1,skewX:-5.1,skewY:-185.1,x:-14.6,y:-92.9},3).to({regX:-0.1,regY:-0.2,skewX:-14.6,skewY:-194.6,x:-16.4,y:-71.4},4).to({skewX:-12.4,skewY:-192.4,x:-27.6,y:-37.2},4).to({regX:0.1,regY:-0.3,skewX:-47.1,skewY:-227.1,x:-20.6,y:-42.4},5).to({regX:-0.1,scaleY:0.95,skewX:-48.7,skewY:-223.4,x:-14.6,y:-75},4).to({regX:0,scaleY:0.95,skewX:-25.2,skewY:-205.2,x:-15.6,y:-91.8},4).to({regY:-0.1,skewX:4.8,skewY:-175.2,x:-11.4,y:-101.2},4).to({regX:0.1,skewX:7.6,skewY:-172.4,x:-10,y:-97.8},3).to({regX:0,skewX:22.6,skewY:-155.2,x:1.4,y:-91.9},3).to({regX:-0.1,regY:-0.2,skewX:39.9,skewY:-140.1,x:7.7,y:-54.2},3).wait(1));

	// NA_GreenImp_Arm01
	this.instance_25 = new lib.NA_Imp_Arm01();
	this.instance_25.setTransform(1.5,-51.3,0.959,0.946,0,43.1,-130.5);
	this.instance_25.filters = [new cjs.ColorFilter(0.55, 0.55, 0.55, 1, 0, 22.95, 91.8, 0)];
	this.instance_25.cache(-2,-17,23,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({scaleX:0.95,scaleY:0.95,skewX:16.6,skewY:-159.7,x:-1.2,y:-57.5},5).to({skewX:14.1,skewY:-162.2,x:0,y:-81.5},4).to({scaleX:0.96,skewX:-15.9,skewY:-189.7,x:-7.5,y:-93.9},4).to({scaleX:0.95,scaleY:0.96,skewX:0.1,skewY:-187.6,x:-13.1,y:-93.5},4).to({scaleX:0.95,scaleY:0.9,skewX:4.4,skewY:-189,x:-15.2,y:-83.5},3).to({scaleX:0.92,scaleY:0.91,skewX:-13,skewY:-190.4,x:-13.7,y:-61.6},4).to({scaleX:0.94,skewX:-42.6,skewY:-220.2,x:-24,y:-30.6},4).to({scaleX:0.94,scaleY:0.9,skewX:-62.4,skewY:-243.9,x:-18.6,y:-34.2},5).to({scaleX:1.11,scaleY:0.97,skewX:-98.5,skewY:-265.7,x:-12.1,y:-62},4).to({scaleX:1.11,scaleY:0.95,skewX:-30.1,skewY:-215.8,x:-12.6,y:-86.5},4).to({scaleX:1.13,scaleY:0.93,skewX:3.6,skewY:-184.8,x:-11.5,y:-93.3},4).to({scaleY:0.92,skewX:5.5,skewY:-173.8,x:-9.4,y:-90.4},3).to({scaleX:1.18,scaleY:0.96,skewX:33.3,skewY:-141,x:-2,y:-83.1},3).to({scaleX:0.96,scaleY:0.95,skewX:43.1,skewY:-130.5,x:1.5,y:-51.3},3).wait(1));

	// Calque 28
	this.instance_26 = new lib.Lead_Ombre01();
	this.instance_26.setTransform(0,0,0.554,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({scaleX:0.51},5).to({scaleX:0.42,scaleY:0.95,x:1.1,y:0.6},4).to({scaleX:0.36,scaleY:0.87,x:-0.3,y:0.7,alpha:0.559},4).to({scaleX:0.29,scaleY:0.7,x:-0.7,y:1.1,alpha:0.43},4).to({scaleX:0.35,scaleY:0.86,x:-1.2},3).to({scaleX:0.41,scaleY:1,alpha:0.391},4).to({scaleX:0.48,x:5.1,alpha:0.781},4).to({scaleX:0.44,x:6.1,alpha:0.898},5).to({scaleX:0.41,x:7,alpha:1},4).to({scaleX:0.35,scaleY:0.87,x:4.2,alpha:0.531},4).to({scaleX:0.3,scaleY:0.73,x:3.4,alpha:0.422},4).to({scaleX:0.33,scaleY:0.81,x:3.3,alpha:0.66},3).to({scaleX:0.49,scaleY:0.89,x:0,y:0.6,alpha:0.719},3).to({scaleX:0.55,scaleY:1,y:0,alpha:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-75.7,90.9,85.3);


(lib.ANM_NUN_TANK_TORSO_SLIDE_IDLE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tank_Bras_Slide_NoShoot01();
	this.instance.setTransform(24.3,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:19.3},3).to({x:24.3},3).to({x:19.3},3).to({x:24.8},3).to({x:19.3},3).to({x:24.3},4).wait(1));

	// Tank_Hat01
	this.instance_1 = new lib.Tank_Hat01();
	this.instance_1.setTransform(-4.4,-44.7,0.796,0.773,0,-10.1,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:-6.4,skewY:0.3,x:-9.1,y:-42.7},3).to({skewX:-10.1,skewY:-3.5,x:-4.4,y:-44.7},3).to({skewX:-6.4,skewY:0.3,x:-9.1,y:-42.7},3).to({skewX:-10.1,skewY:-3.5,x:-4.4,y:-44.7},3).to({skewX:-6.4,skewY:0.3,x:-9.1,y:-42.7},4).to({skewX:-10.1,skewY:-3.5,x:-4.4,y:-44.7},3).wait(1));

	// Tank_Tete01
	this.instance_2 = new lib.Tank_Tete01();
	this.instance_2.setTransform(-19.3,-35,0.769,0.769,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0.7,x:-24.5,y:-34},3).to({rotation:-3,x:-19.3,y:-35},3).to({rotation:0.7,x:-24.5,y:-34},3).to({rotation:-3,x:-19.3,y:-35},3).to({rotation:0.7,x:-24.5,y:-34},4).to({rotation:-3,x:-19.3,y:-35},3).wait(1));

	// Tank_Torso01
	this.instance_3 = new lib.Tank_Torso01();
	this.instance_3.setTransform(4.5,19.4,0.734,0.936,0,-55.3,-29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.77,scaleY:0.89,skewX:-53.4,skewY:-28.4,x:-4.2},3).to({scaleX:0.73,scaleY:0.94,skewX:-55.3,skewY:-29.7,x:4.5},3).to({scaleX:0.77,scaleY:0.89,skewX:-53.4,skewY:-28.4,x:-4.2},3).to({scaleX:0.73,scaleY:0.94,skewX:-55.3,skewY:-29.7,x:4.5},3).to({scaleX:0.77,scaleY:0.89,skewX:-53.4,skewY:-28.4,x:-4.2},3).to({scaleX:0.73,scaleY:0.94,skewX:-55.3,skewY:-29.7,x:4.5},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.6,-48.1,142.8,87.2);


(lib.ANM_NUN_TANK_SLIDE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.instance = new lib.Tank_Roche_Tombe01();
	this.instance.setTransform(84.3,-2.6,1.19,1.19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},19).wait(1));

	// Layer 11
	this.instance_1 = new lib.Tank_Roche_Tombe01();
	this.instance_1.setTransform(84.3,-2.7,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},13).wait(7));

	// Layer 10
	this.instance_2 = new lib.Tank_Roche_Tombe01();
	this.instance_2.setTransform(74.3,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},5).wait(15));

	// Layer 2
	this.instance_3 = new lib.Tank_Roche_Tombe01();
	this.instance_3.setTransform(84.3,-2.6,1.19,1.19);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(6));

	// Layer 3
	this.instance_4 = new lib.Tank_Roche_Tombe01();
	this.instance_4.setTransform(84.3,-2.7,0.75,0.75);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).wait(12));

	// Layer 9
	this.instance_5 = new lib.Tank_Roche_Tombe01();
	this.instance_5.setTransform(74.3,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// Robe_0
	this.instance_6 = new lib.ANM_NUN_TANK_TORSO_SLIDE_IDLE();
	this.instance_6.setTransform(-24.7,-24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-3.2,regY:-4.5,x:-27.9,y:-28.7},0).wait(1).to({x:-28.2},0).wait(1).to({x:-28.8,y:-28.8},0).wait(1).to({x:-29.6},0).wait(1).to({x:-30.6,y:-29},0).wait(1).to({x:-31.4},0).wait(1).to({x:-32,y:-29.1},0).wait(1).to({x:-32.3},0).wait(1).to({regX:0,regY:0,x:-29.2,y:-24.7},0).wait(1).to({regX:-3.2,regY:-4.5,x:-32.3,y:-29.1},0).wait(1).to({x:-32.1},0).wait(1).to({x:-31.6},0).wait(1).to({x:-31,y:-29},0).wait(1).to({x:-30.1,y:-28.9},0).wait(1).to({x:-29.2,y:-28.8},0).wait(1).to({x:-28.6,y:-28.7},0).wait(1).to({x:-28.1},0).wait(1).to({x:-27.9},0).wait(1).to({regX:0,regY:0,x:-24.7,y:-24.2},0).wait(1));

	// Robe
	this.instance_7 = new lib.Tank_Robe01();
	this.instance_7.setTransform(-26.1,-22.6,0.677,0.717,0,-64.1,138.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.75,scaleY:0.65,skewX:-62.4,skewY:142,x:-31.8,y:-21},3).to({scaleX:0.68,scaleY:0.72,skewX:-64.1,skewY:138.8,x:-26.1,y:-22.6},3).to({scaleX:0.75,scaleY:0.65,skewX:-62.4,skewY:142,x:-31.8,y:-21},3).to({scaleX:0.68,scaleY:0.72,skewX:-64.1,skewY:138.8,x:-26.1,y:-22.6},3).to({scaleX:0.75,scaleY:0.65,skewX:-62.4,skewY:142,x:-31.8,y:-21},3).to({scaleX:0.68,scaleY:0.72,skewX:-64.1,skewY:138.8,x:-26.1,y:-22.6},4).wait(1));

	// Tank_Pied01_0
	this.instance_8 = new lib.Tank_Pied01();
	this.instance_8.setTransform(78.2,-2.1,0.769,0.769,-76.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-43.8,x:64.4,y:3.5},3).wait(1).to({regX:-0.3,regY:-9.1,rotation:-48.7,x:62.9,y:-3.3},0).wait(1).to({rotation:-52.9,x:65.8,y:-4.8},0).wait(1).to({rotation:-56.3,x:68.4,y:-6.2},0).wait(1).to({rotation:-58.9,x:70.3,y:-7.1},0).wait(1).to({rotation:-60.8,x:71.7,y:-7.8},0).wait(1).to({rotation:-62,x:72.5,y:-8.3},0).wait(1).to({regX:0,regY:0,rotation:-62.3,x:79.2,y:-5.4},0).wait(1).to({regX:-0.3,regY:-9.1,rotation:-62.5,x:72.8,y:-8.4},0).wait(1).to({rotation:-63,y:-8.3},0).wait(1).to({rotation:-63.9,x:72.7,y:-8.2},0).wait(1).to({rotation:-65.1,x:72.6,y:-8},0).wait(1).to({rotation:-66.6,x:72.4,y:-7.7},0).wait(1).to({rotation:-68.5,x:72.2,y:-7.5},0).wait(1).to({rotation:-70.8,x:72,y:-7.1},0).wait(1).to({rotation:-73.4,x:71.8,y:-6.8},0).wait(1).to({regX:0,regY:0,rotation:-76.3,x:78.4,y:-4.9},0).wait(1));

	// Tank_Molet01_0
	this.instance_9 = new lib.Tank_Molet01();
	this.instance_9.setTransform(62.6,1.3,0.715,0.912,0,-77.5,-72.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({skewX:-60,skewY:-54.7,x:52.1,y:-2.1},3).wait(1).to({regX:-0.2,regY:-23.6,skewX:-63,skewY:-57.7,x:35.7,y:-12.4},0).wait(1).to({skewX:-65.6,skewY:-60.3,x:37.8,y:-12.1},0).wait(1).to({skewX:-67.7,skewY:-62.4,x:39.5,y:-11.8},0).wait(1).to({skewX:-69.4,skewY:-64.1,x:40.9,y:-11.6},0).wait(1).to({skewX:-70.6,skewY:-65.2,x:41.8,y:-11.4},0).wait(1).to({skewX:-71.3,skewY:-65.9,x:42.5,y:-11.3},0).wait(1).to({regX:0,regY:0,skewX:-71.5,skewY:-66.2,x:63.1,y:-4.7},0).wait(1).to({regX:-0.2,regY:-23.6,skewX:-71.6,skewY:-66.3,x:42.6,y:-11.3},0).wait(1).to({skewX:-72,skewY:-66.7,y:-11},0).wait(1).to({skewX:-72.6,skewY:-67.3,x:42.5,y:-10.6},0).wait(1).to({skewX:-73.5,skewY:-68.1,x:42.4,y:-10},0).wait(1).to({skewX:-74.6,skewY:-69.3,x:42.3,y:-9.3},0).wait(1).to({skewX:-75.9,skewY:-70.6,x:42.2,y:-8.4},0).wait(1).to({skewX:-77.5,skewY:-72.2,x:42,y:-7.3},0).wait(1).to({skewX:-79.4,skewY:-74.1,x:41.8,y:-6.1},0).wait(1).to({regX:0,regY:0,skewX:-81.5,skewY:-76.1,x:63,y:-1.7},0).wait(1));

	// Tank_Pied01
	this.instance_10 = new lib.Tank_Pied01();
	this.instance_10.setTransform(63,-8.3,0.769,0.769,-50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:-0.3,regY:-9.1,rotation:-51.6,x:52.2,y:-12.2},0).wait(1).to({rotation:-52.6,x:49,y:-11.9},0).wait(1).to({regX:0,regY:0,rotation:-52.9,x:53.7,y:-7.8},0).wait(1).to({regX:-0.3,regY:-9.1,rotation:-51.3,x:53.2,y:-12.2},0).wait(1).to({rotation:-50.4,x:56.4,y:-12.5},0).wait(1).to({regX:0,regY:0,rotation:-50.1,x:63,y:-8.3},0).wait(1).to({regX:-0.3,regY:-9.1,rotation:-51.6,x:52.2,y:-12.2},0).wait(1).to({rotation:-52.6,x:49,y:-11.9},0).wait(1).to({regX:0,regY:0,rotation:-52.9,x:53.7,y:-7.8},0).wait(1).to({regX:-0.3,regY:-9.1,rotation:-51.3,x:53.2,y:-12.2},0).wait(1).to({rotation:-50.4,x:56.4,y:-12.5},0).wait(1).to({regX:0,regY:0,rotation:-50.1,x:63,y:-8.3},0).wait(1).to({regX:-0.3,regY:-9.1,rotation:-51.6,x:52.2,y:-12.2},0).wait(1).to({rotation:-52.6,x:49,y:-11.9},0).wait(1).to({regX:0,regY:0,rotation:-52.9,x:53.7,y:-7.8},0).wait(1).to({regX:-0.3,regY:-9.1,rotation:-51.7,x:52.1,y:-12.1},0).wait(1).to({rotation:-50.8,x:55.1,y:-12.3},0).wait(1).to({rotation:-50.3,x:56.8,y:-12.5},0).wait(1).to({regX:0,regY:0,rotation:-50.1,x:63,y:-8.3},0).wait(1));

	// Tank_Molet01
	this.instance_11 = new lib.Tank_Molet01();
	this.instance_11.setTransform(49.6,-10.4,0.715,0.912,0,-22.9,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:-0.2,regY:-23.6,skewX:-19.3,skewY:-14,x:37.8,y:-30.2},0).wait(1).to({skewX:-17.1,skewY:-11.8,x:35.9,y:-30.1},0).wait(1).to({regX:0,regY:0,skewX:-16.4,skewY:-11.1,x:41.5,y:-9.6},0).wait(1).to({regX:-0.2,regY:-23.6,skewX:-20,skewY:-14.7,x:38.5,y:-30.1},0).wait(1).to({skewX:-22.1,skewY:-16.8,x:40.4,y:-30.2},0).wait(1).to({regX:0,regY:0,skewX:-22.9,skewY:-17.5,x:49.6,y:-10.4},0).wait(1).to({regX:-0.2,regY:-23.6,skewX:-19.3,skewY:-14,x:37.8,y:-30.2},0).wait(1).to({skewX:-17.1,skewY:-11.8,x:35.9,y:-30.1},0).wait(1).to({regX:0,regY:0,skewX:-16.4,skewY:-11.1,x:41.5,y:-9.6},0).wait(1).to({regX:-0.2,regY:-23.6,skewX:-20,skewY:-14.7,x:38.5,y:-30.1},0).wait(1).to({skewX:-22.1,skewY:-16.8,x:40.4,y:-30.2},0).wait(1).to({regX:0,regY:0,skewX:-22.9,skewY:-17.5,x:49.6,y:-10.4},0).wait(1).to({regX:-0.2,regY:-23.6,skewX:-19.3,skewY:-14,x:37.8,y:-30.2},0).wait(1).to({skewX:-17.1,skewY:-11.8,x:35.9,y:-30.1},0).wait(1).to({regX:0,regY:0,skewX:-16.4,skewY:-11.1,x:41.5,y:-9.6},0).wait(1).to({regX:-0.2,regY:-23.6,skewX:-19.2,skewY:-13.9,x:37.8,y:-30.2},0).wait(1).to({skewX:-21.2,skewY:-15.9,x:39.6},0).wait(1).to({skewX:-22.5,skewY:-17.1,x:40.7},0).wait(1).to({regX:0,regY:0,skewX:-22.9,skewY:-17.5,x:49.6,y:-10.4},0).wait(1));

	// Layer 15
	this.instance_12 = new lib.Tank_Dust_ParticuleMove01();
	this.instance_12.setTransform(47.5,-0.6,2.192,2.192);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},4).wait(12).to({_off:false},0).wait(4));

	// Layer 14
	this.instance_13 = new lib.Tank_Dust_ParticuleMove01();
	this.instance_13.setTransform(50.1,0.2,2.192,2.192);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},2).wait(11).to({_off:false},0).wait(7));

	// Layer 13
	this.instance_14 = new lib.Tank_Dust_ParticuleMove01();
	this.instance_14.setTransform(32.3,0.2,2.192,2.192);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(11).to({_off:false},0).wait(9));

	// Layer 5
	this.instance_15 = new lib.Tank_Dust_ParticuleMove01();
	this.instance_15.setTransform(75.1,0.2,2.192,2.192);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({_off:false},0).to({_off:true},8).wait(4));

	// Layer 6
	this.instance_16 = new lib.Tank_Dust_ParticuleMove01();
	this.instance_16.setTransform(47.5,-0.6,2.192,2.192);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(5).to({_off:false},0).to({_off:true},8).wait(7));

	// Layer 7
	this.instance_17 = new lib.Tank_Dust_ParticuleMove01();
	this.instance_17.setTransform(50.1,0.2,2.192,2.192);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(2).to({_off:false},0).to({_off:true},9).wait(9));

	// Layer 8
	this.instance_18 = new lib.Tank_Dust_ParticuleMove01();
	this.instance_18.setTransform(32.3,0.2,2.192,2.192);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},9).wait(11));

	// Ombre
	this.instance_19 = new lib.Tank_Ombre01();
	this.instance_19.setTransform(-4.7,0,2.475,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.4,-72.7,257.4,91);


(lib.all = function() {
	this.initialize();

	// Calque 3
	this.instance = new lib.ANM_NUN_TANK_JUMP();
	this.instance.setTransform(-266.2,49.1);

	// Calque 4
	this.instance_1 = new lib.ANM_NUN_TANK_SLIDE();
	this.instance_1.setTransform(27,27.7);

	// Calque 6
	this.instance_2 = new lib.NA_Imp_Walk001_Blue();
	this.instance_2.setTransform(421,248.1);

	// Calque 7
	this.instance_3 = new lib.NA_Imp_Walk001_Red();
	this.instance_3.setTransform(251,248.1);

	// Calque 8
	this.instance_4 = new lib.NA_Imp_Walk001_Green();
	this.instance_4.setTransform(81,248.1);

	// Calque 9
	this.instance_5 = new lib.GUN_TANKswap();
	this.instance_5.setTransform(-278.2,264.8,1,1,0,0,0,119.1,117);

	// Calque 1
	this.instance_6 = new lib.ANM_NUN_TANK_RUN();
	this.instance_6.setTransform(-541.2,54.8);

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-629.7,-119.3,1104,476.6);


// stage content:
(lib.html5 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.all();
	this.instance.setTransform(629.1,257.3,1,1,0,0,0,0,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(599.3,497.5,1104,476.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;