---
nav_exclude: true
search_exclude: true
---

# BakedPlacementTilesBounds

```csharp
[StructLayout(2)]
public struct BakedPlacementTilesBounds
{
	static BakedPlacementTilesBounds()
	{
		Il2CppClassPointerStore<BakedPlacementTilesBounds>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "BakedPlacementTilesBounds");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakedPlacementTilesBounds>.NativeClassPtr);
		BakedPlacementTilesBounds.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedPlacementTilesBounds>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakedPlacementTilesBounds>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public BoundsMinMax Value;
}
