var main: Object = parent;
while(!(main.parent is Stage)) {
	main = main.parent;
}

var point:Point = null;
var ratio: Number = stage.stageWidth / this.getRect(this).width;

this.addEventListener(Event.ENTER_FRAME, this.enterFrame);

function enterFrame(e:Event) {
	main.scaleX = this.ratio / this.scaleX;
	main.scaleY = main.scaleX;
	if(this['camera'] == undefined) {
		main.rotation = -this.rotation;
		point = this.localToGlobal(new Point(0, 0));		
	}
	else {
		main.rotation = -this["camera"].rotation;
		point = this['camera'].localToGlobal(new Point(0, 0));
	}
	main.x = (main.x - (point.x)) + (stage.stageWidth/2);
	main.y = (main.y - (point.y)) + (stage.stageHeight/2);	
}