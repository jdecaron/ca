package
{
	import dragonBones.Armature;
	import dragonBones.animation.WorldClock;
	import dragonBones.factorys.StarlingFactory;
	
	import flash.ui.Keyboard;
	
	import starling.display.Sprite;
	import starling.events.EnterFrameEvent;
	import starling.events.KeyboardEvent;
	import starling.text.TextField;
	import flash.events.Event;
	
	
	public class DBStarlingMultiBehavior extends Sprite
	{
		[Embed(source = "../assets/Dragon2.png", mimeType = "application/octet-stream")]
		public static const ResourcesData:Class;
		
		private var factory:StarlingFactory;
		private var armature:Armature;
		private var armatureClip:Sprite;

		private var isLeft:Boolean;
		private var isRight:Boolean;
		private var isJumping:Boolean;
		private var moveDir:int=0;
		private var speedX:Number = 0;
		private var speedY:Number = 0;
		private var textField:TextField
		
		public function DBStarlingMultiBehavior()
		{
			factory = new StarlingFactory();
			factory.addEventListener(Event.COMPLETE, textureCompleteHandler);
			factory.parseData(new ResourcesData());

		}
		
		private function textureCompleteHandler(e:Event):void
		{
			armature = factory.buildArmature("Dragon");
			armatureClip = armature.display as Sprite;
			armatureClip.x = 400;
			armatureClip.y = 550;
			addChild(armatureClip);
			WorldClock.clock.add(armature);
			updateBehavior()
			addEventListener(EnterFrameEvent.ENTER_FRAME, onEnterFrameHandler);

			stage.addEventListener(KeyboardEvent.KEY_DOWN, onKeyEventHandler);
			stage.addEventListener(KeyboardEvent.KEY_UP, onKeyEventHandler);
			
			textField=new TextField(400,30,"A-move left,D-move right,W-jump","Verdana",16,0,true)
			textField.x=60;
			textField.y=2;
			addChild(textField);
		}
		
		private function onKeyEventHandler(e:KeyboardEvent):void
		{
			switch (e.keyCode)
			{
				case Keyboard.A :
				case Keyboard.LEFT :
					isLeft=e.type == KeyboardEvent.KEY_DOWN;
					break;
				case Keyboard.D :
				case Keyboard.RIGHT :
					isRight=e.type == KeyboardEvent.KEY_DOWN;
					break;
				case Keyboard.W :
				case Keyboard.UP :
					jump();
					break;
			}
			var dir:int;
			if (isLeft && isRight) 
			{
				dir=moveDir;
				return;
			}
			else if (isLeft)
			{
				dir=-1;
			}
			else if (isRight)
			{
				dir=1;
			}
			else 
			{
				dir=0;
			}
			if(dir==moveDir)
			{
				return;
			}
			else
			{
				moveDir=dir;
			}
			updateBehavior()
		}
	
		private function onEnterFrameHandler(_e:EnterFrameEvent):void
		{
			updateMove();
			WorldClock.clock.advanceTime(-1);
		}

		private function updateBehavior():void 
		{
			if (isJumping)
			{
				return;
			}
			if (moveDir == 0)
			{
				speedX = 0;
				armature.animation.gotoAndPlay("stand");
			}
			else
			{
				speedX=6*moveDir;
				armatureClip.scaleX = -moveDir;
				armature.animation.gotoAndPlay("walk");
			}
		}
		private function updateMove():void
		{
			if (speedX != 0) 
			{
				armatureClip.x += speedX;
				if (armatureClip.x < 0) 
				{
					armatureClip.x = 0;
				}
				else if (armatureClip.x > 800) 
				{
					armatureClip.x = 800;
				}
			}
			if (isJumping)
			{
				if (speedY <= 0 && speedY + 1 > 0 ) 
				{
					armature.animation.gotoAndPlay("fall");
				}
				speedY += 1;
			}
			if (speedY != 0) 
			{
				armatureClip.y += speedY;
				if (armatureClip.y > 540) 
				{
					armatureClip.y = 550;
					isJumping = false;
					speedY = 0;
					updateBehavior();
				}
			}
		}
		private function jump():void 
		{
			if (isJumping) 
			{
				return;
			}
			speedY = -25;
			isJumping = true;
			armature.animation.gotoAndPlay("jump");
		}
	}
}