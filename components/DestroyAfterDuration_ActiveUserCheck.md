---
nav_exclude: true
search_exclude: true
---

# DestroyAfterDuration_ActiveUserCheck

```csharp
public struct DestroyAfterDuration_ActiveUserCheck
{
	static DestroyAfterDuration_ActiveUserCheck()
	{
		Il2CppClassPointerStore<DestroyAfterDuration_ActiveUserCheck>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DestroyAfterDuration_ActiveUserCheck");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyAfterDuration_ActiveUserCheck>.NativeClassPtr);
		DestroyAfterDuration_ActiveUserCheck.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyAfterDuration_ActiveUserCheck>.NativeClassPtr, "Range");
		DestroyAfterDuration_ActiveUserCheck.NativeFieldInfoPtr_DurationModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyAfterDuration_ActiveUserCheck>.NativeClassPtr, "DurationModifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyAfterDuration_ActiveUserCheck>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Range;
	private static readonly IntPtr NativeFieldInfoPtr_DurationModifier;

	public float Range;

	public float DurationModifier;
}
```
