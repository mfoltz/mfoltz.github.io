# PlacementLimitToSet

```csharp
[StructLayout(2)]
public struct PlacementLimitToSet
{
	static PlacementLimitToSet()
	{
		Il2CppClassPointerStore<PlacementLimitToSet>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "PlacementLimitToSet");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlacementLimitToSet>.NativeClassPtr);
		PlacementLimitToSet.NativeFieldInfoPtr_LimitToPrefabSet = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlacementLimitToSet>.NativeClassPtr, "LimitToPrefabSet");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlacementLimitToSet>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LimitToPrefabSet;
	[FieldOffset(0)]
	public PrefabGUID LimitToPrefabSet;
}
