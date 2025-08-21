---
nav_exclude: true
search_exclude: true
---

```csharp
public struct VisualizeCastleRoomsSingleton
{
	static VisualizeCastleRoomsSingleton()
	{
		Il2CppClassPointerStore<VisualizeCastleRoomsSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "VisualizeCastleRoomsSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VisualizeCastleRoomsSingleton>.NativeClassPtr);
		VisualizeCastleRoomsSingleton.NativeFieldInfoPtr_Filter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VisualizeCastleRoomsSingleton>.NativeClassPtr, "Filter");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VisualizeCastleRoomsSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Filter;

	public NeighbourFilter Filter;
}
```
