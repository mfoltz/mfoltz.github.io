---
nav_exclude: true
search_exclude: false
---

# DismantleAbility

```csharp
public struct DismantleAbility
{
	static DismantleAbility()
	{
		Il2CppClassPointerStore<DismantleAbility>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DismantleAbility");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DismantleAbility>.NativeClassPtr);
		DismantleAbility.NativeFieldInfoPtr_DismantleTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DismantleAbility>.NativeClassPtr, "DismantleTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DismantleAbility>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DismantleTarget;

	public Entity DismantleTarget;
}
```
