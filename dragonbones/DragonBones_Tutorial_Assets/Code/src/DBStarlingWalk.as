package
{
	import dragonBones.Armature;
	import dragonBones.animation.WorldClock;
	import dragonBones.factorys.StarlingFactory;
	
	import starling.display.Sprite;
	import starling.events.EnterFrameEvent;
	import flash.events.Event;
	
	public class DBStarlingWalk extends Sprite
	{
		[Embed(source = "../assets/DragonWalk.png", mimeType = "application/octet-stream")]
		public static const ResourcesData:Class;
		
		private var armature:Armature;
		private var armatureClip:Sprite;
		private var factory:StarlingFactory
		
		public function DBStarlingWalk() 
		{
			factory = new StarlingFactory();
			factory.addEventListener(Event.COMPLETE, textureCompleteHandler);
			factory.parseData(new ResourcesData());
		}
		
		private function textureCompleteHandler(e:Event):void {
			armature = factory.buildArmature("Dragon");
			armatureClip = armature.display as Sprite;
			armatureClip.x = 400;
			armatureClip.y = 550;
			addChild(armatureClip);
			WorldClock.clock.add(armature);
			armature.animation.gotoAndPlay("walk");
			addEventListener(EnterFrameEvent.ENTER_FRAME, onEnterFrameHandler);
		}
		
		private function onEnterFrameHandler(e:EnterFrameEvent):void
		{
			WorldClock.clock.advanceTime(-1);
		}
		
	}
}