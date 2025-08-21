---
nav_exclude: true
search_exclude: true
---

```csharp
public struct StoredConsumeCount
{
	static StoredConsumeCount()
	{
		Il2CppClassPointerStore<StoredConsumeCount>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "StoredConsumeCount");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StoredConsumeCount>.NativeClassPtr);
		StoredConsumeCount.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StoredConsumeCount>.NativeClassPtr, "Count");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StoredConsumeCount>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Count;

	public int Count;
}
```
