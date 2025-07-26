# RoofTileVariations

```csharp
[StructLayout(2)]
public struct RoofTileVariations
{
	static RoofTileVariations()
	{
		Il2CppClassPointerStore<RoofTileVariations>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Roofs", "RoofTileVariations");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RoofTileVariations>.NativeClassPtr);
		RoofTileVariations.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofTileVariations>.NativeClassPtr, "PrefabGUID");
		RoofTileVariations.NativeFieldInfoPtr_PrefabRotationOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofTileVariations>.NativeClassPtr, "PrefabRotationOffset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RoofTileVariations>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabRotationOffset;
	[FieldOffset(0)]
	public PrefabGUID PrefabGUID;
	[FieldOffset(4)]
	public OrthogonalRotation PrefabRotationOffset;
}
