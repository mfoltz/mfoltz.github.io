---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HoverTileModelSelection
{
	static HoverTileModelSelection()
	{
		Il2CppClassPointerStore<HoverTileModelSelection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "HoverTileModelSelection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HoverTileModelSelection>.NativeClassPtr);
		HoverTileModelSelection.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HoverTileModelSelection>.NativeClassPtr, "Target");
		HoverTileModelSelection.NativeFieldInfoPtr_VisualTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HoverTileModelSelection>.NativeClassPtr, "VisualTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HoverTileModelSelection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_VisualTarget;

	public Entity Target;

	public Entity VisualTarget;
}
```
