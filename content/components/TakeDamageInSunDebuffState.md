---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TakeDamageInSunDebuffState
{
	static TakeDamageInSunDebuffState()
	{
		Il2CppClassPointerStore<TakeDamageInSunDebuffState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TakeDamageInSunDebuffState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TakeDamageInSunDebuffState>.NativeClassPtr);
		TakeDamageInSunDebuffState.NativeFieldInfoPtr_DebuffInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TakeDamageInSunDebuffState>.NativeClassPtr, "DebuffInstance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TakeDamageInSunDebuffState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DebuffInstance;

	public Entity DebuffInstance;
}
```
