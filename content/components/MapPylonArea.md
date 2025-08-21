---
nav_exclude: true
search_exclude: true
---

```csharp
public struct MapPylonArea
{
	static MapPylonArea()
	{
		Il2CppClassPointerStore<MapPylonArea>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MapPylonArea");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapPylonArea>.NativeClassPtr);
		MapPylonArea.NativeFieldInfoPtr_AllyColor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapPylonArea>.NativeClassPtr, "AllyColor");
		MapPylonArea.NativeFieldInfoPtr_NonAllyColor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapPylonArea>.NativeClassPtr, "NonAllyColor");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapPylonArea>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AllyColor;
	private static readonly IntPtr NativeFieldInfoPtr_NonAllyColor;

	public Color AllyColor;

	public Color NonAllyColor;
}
```
