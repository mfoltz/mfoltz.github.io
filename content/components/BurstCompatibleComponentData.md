---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BurstCompatibleComponentData
{
	static BurstCompatibleComponentData()
	{
		Il2CppClassPointerStore<BurstCompatibleComponentData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "BurstCompatibleComponentData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BurstCompatibleComponentData>.NativeClassPtr);
		BurstCompatibleComponentData.NativeFieldInfoPtr_UnusedField = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BurstCompatibleComponentData>.NativeClassPtr, "UnusedField");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BurstCompatibleComponentData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnusedField;

	public int UnusedField;
}
```
