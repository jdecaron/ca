package  
{
	import dragonBones.Armature;
	import dragonBones.factorys.NativeFactory;
	import dragonBones.animation.WorldClock;
	
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	
	[SWF(width="800", height="600", frameRate="30", backgroundColor="#999999")]
	
	public class DB_Tutorial_Walk_DisplayList extends Sprite 
	{
		[Embed(source = "../assets/Dragon1.swf", mimeType = "application/octet-stream")]
		private static const ResourcesData:Class;
		
		private var factory:NativeFactory;
		private var armature:Armature;
		private var armatureClip:Sprite
		
		public function DB_Tutorial_Walk_DisplayList()
		{
			factory = new NativeFactory();
			factory.addEventListener(Event.COMPLETE, textureCompleteHandler);
			factory.parseData(new ResourcesData());
		}
		private function textureCompleteHandler(e:Event):void 
		{
			armature = factory.buildArmature("Dragon");
			armatureClip = armature.display as Sprite;
			armatureClip.x = 400;
			armatureClip.y = 500;
			addChild(armatureClip);
			armature.animation.gotoAndPlay("walk");
			WorldClock.clock.add(armature);
			addEventListener(Event.ENTER_FRAME, onEnterFrameHandler);
		}
		private function onEnterFrameHandler(_e:Event):void 
		{
			WorldClock.clock.advanceTime(-1);
		}
	}
}