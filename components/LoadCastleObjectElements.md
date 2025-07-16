# LoadCastleObjectElements

```csharp
[StructLayout(2)]
public struct LoadCastleObjectElements
{
	static LoadCastleObjectElements()
	{
		Il2CppClassPointerStore<LoadCastleObjectElements>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "LoadCastleObjectElements");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LoadCastleObjectElements>.NativeClassPtr);
		LoadCastleObjectElements.NativeFieldInfoPtr_ObjectGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleObjectElements>.NativeClassPtr, "ObjectGroup");
		LoadCastleObjectElements.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleObjectElements>.NativeClassPtr, "PrefabGUID");
		LoadCastleObjectElements.NativeFieldInfoPtr_TranslationOffsetFromHeart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleObjectElements>.NativeClassPtr, "TranslationOffsetFromHeart");
		LoadCastleObjectElements.NativeFieldInfoPtr_RotationOffsetFromHeart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleObjectElements>.NativeClassPtr, "RotationOffsetFromHeart");
		LoadCastleObjectElements.NativeFieldInfoPtr_DyeVariation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadCastleObjectElements>.NativeClassPtr, "DyeVariation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LoadCastleObjectElements>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ObjectGroup;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_TranslationOffsetFromHeart;
	private static readonly IntPtr NativeFieldInfoPtr_RotationOffsetFromHeart;
	private static readonly IntPtr NativeFieldInfoPtr_DyeVariation;
	[FieldOffset(0)]
	public LoadCastleObjectGroup ObjectGroup;
	[FieldOffset(4)]
	public PrefabGUID PrefabGUID;
	[FieldOffset(8)]
	public float3 TranslationOffsetFromHeart;
	[FieldOffset(20)]
	public quaternion RotationOffsetFromHeart;
	[FieldOffset(36)]
	public byte DyeVariation;
}
