---
nav_exclude: true
search_exclude: true
---

```csharp
public struct MicroPOIUnitSpawner
{
	static MicroPOIUnitSpawner()
	{
		Il2CppClassPointerStore<MicroPOIUnitSpawner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MicroPOIUnitSpawner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MicroPOIUnitSpawner>.NativeClassPtr);
		MicroPOIUnitSpawner.NativeFieldInfoPtr_OwnerMicroPOI = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MicroPOIUnitSpawner>.NativeClassPtr, "OwnerMicroPOI");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MicroPOIUnitSpawner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OwnerMicroPOI;

	public Entity OwnerMicroPOI;
}
```
