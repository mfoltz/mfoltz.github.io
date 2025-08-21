---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DestroyBuffOnDamageTaken
{
	static DestroyBuffOnDamageTaken()
	{
		Il2CppClassPointerStore<DestroyBuffOnDamageTaken>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DestroyBuffOnDamageTaken");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyBuffOnDamageTaken>.NativeClassPtr);
		DestroyBuffOnDamageTaken.NativeFieldInfoPtr_IncludeDoTs = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyBuffOnDamageTaken>.NativeClassPtr, "IncludeDoTs");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyBuffOnDamageTaken>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IncludeDoTs;

	public bool IncludeDoTs;
}
```
