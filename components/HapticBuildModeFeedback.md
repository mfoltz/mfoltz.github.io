# HapticBuildModeFeedback

```csharp
[StructLayout(2)]
public struct HapticBuildModeFeedback
{
	static HapticBuildModeFeedback()
	{
		Il2CppClassPointerStore<HapticBuildModeFeedback>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Haptics", "HapticBuildModeFeedback");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HapticBuildModeFeedback>.NativeClassPtr);
		HapticBuildModeFeedback.NativeFieldInfoPtr_PlacementSuccessful = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HapticBuildModeFeedback>.NativeClassPtr, "PlacementSuccessful");
		HapticBuildModeFeedback.NativeFieldInfoPtr_PlacementFail = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HapticBuildModeFeedback>.NativeClassPtr, "PlacementFail");
		HapticBuildModeFeedback.NativeFieldInfoPtr_PlacementDismantle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HapticBuildModeFeedback>.NativeClassPtr, "PlacementDismantle");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HapticBuildModeFeedback>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PlacementSuccessful;
	private static readonly IntPtr NativeFieldInfoPtr_PlacementFail;
	private static readonly IntPtr NativeFieldInfoPtr_PlacementDismantle;
	[FieldOffset(0)]
	public PrefabGUID PlacementSuccessful;
	[FieldOffset(4)]
	public PrefabGUID PlacementFail;
	[FieldOffset(8)]
	public PrefabGUID PlacementDismantle;
}
