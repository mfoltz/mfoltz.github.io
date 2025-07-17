---
nav_exclude: true
search_exclude: true
---

# RegisterPrefabEvent

```csharp
public struct RegisterPrefabEvent
{
	static RegisterPrefabEvent()
	{
		Il2CppClassPointerStore<RegisterPrefabEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "RegisterPrefabEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RegisterPrefabEvent>.NativeClassPtr);
		RegisterPrefabEvent.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefabEvent>.NativeClassPtr, "PrefabGUID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RegisterPrefabEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;

	public PrefabGUID PrefabGUID;
}
```
