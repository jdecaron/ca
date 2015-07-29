package core.model.vo
{
	import dragonBones.objects.DragonBonesData;
	import dragonBones.textures.NativeTextureAtlas;

	public final class ParsedVO
	{
		public var importVO:ImportVO = null;
		
		public var skeleton:DragonBonesData = null;
		public var textureAtlas:NativeTextureAtlas = null;
		
		public function ParsedVO()
		{
		}
	}
}