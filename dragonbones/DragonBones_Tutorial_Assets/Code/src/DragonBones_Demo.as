package
{
	import flash.display.Sprite;
	
	import starling.core.Starling;
	
	[SWF(width="800", height="600", frameRate="30", backgroundColor="#999999")]
	
	public class DragonBones_Demo extends Sprite
	{
		public function DragonBones_Demo()
		{
			//
			var _starling:Starling = new Starling(DBStarlingWalk, stage);
			//var _starling:Starling = new Starling(DBStarlingMultiBehavior, stage);
			//var _starling:Starling = new Starling(DBStarlingControlBone, stage);
			//var _starling:Starling = new Starling(DBStarlingClothes, stage);
			
			
			//_starling.antiAliasing = 1;
			_starling.showStats = true;
			_starling.start();
		}
	}
}