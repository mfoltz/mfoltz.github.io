---
nav_exclude: true
search_exclude: true
---

```csharp
public struct MicroPOIInstance
{
	static MicroPOIInstance()
	{
		Il2CppClassPointerStore<MicroPOIInstance>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MicroPOIInstance");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MicroPOIInstance>.NativeClassPtr);
		MicroPOIInstance.NativeFieldInfoPtr_DespawnAtServerTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MicroPOIInstance>.NativeClassPtr, "DespawnAtServerTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MicroPOIInstance>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DespawnAtServerTime;

	public double DespawnAtServerTime;
}
```
