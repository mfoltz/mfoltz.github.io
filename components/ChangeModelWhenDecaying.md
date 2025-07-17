---
nav_exclude: true
search_exclude: true
---

# ChangeModelWhenDecaying

```csharp
public struct ChangeModelWhenDecaying
{
	static ChangeModelWhenDecaying()
	{
		Il2CppClassPointerStore<ChangeModelWhenDecaying>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ChangeModelWhenDecaying");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChangeModelWhenDecaying>.NativeClassPtr);
		ChangeModelWhenDecaying.NativeFieldInfoPtr_HealthThreshold = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeModelWhenDecaying>.NativeClassPtr, "HealthThreshold");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChangeModelWhenDecaying>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HealthThreshold;

	public half HealthThreshold;
}
```
