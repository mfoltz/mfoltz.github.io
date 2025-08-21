---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RepairData
{
	static RepairData()
	{
		Il2CppClassPointerStore<RepairData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RepairData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RepairData>.NativeClassPtr);
		RepairData.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RepairData>.NativeClassPtr, "Entity");
		RepairData.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RepairData>.NativeClassPtr, "Guid");
		RepairData.NativeFieldInfoPtr_RepairDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RepairData>.NativeClassPtr, "RepairDuration");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RepairData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_RepairDuration;

	public Entity Entity;

	public PrefabGUID Guid;

	public float RepairDuration;
}
```
