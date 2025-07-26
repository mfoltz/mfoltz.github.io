---
nav_exclude: true
search_exclude: true
---

# EmoteAbility

```csharp
public struct EmoteAbility
{
	static EmoteAbility()
	{
		Il2CppClassPointerStore<EmoteAbility>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "EmoteAbility");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EmoteAbility>.NativeClassPtr);
		EmoteAbility.NativeFieldInfoPtr_EmoteAbilityId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EmoteAbility>.NativeClassPtr, "EmoteAbilityId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EmoteAbility>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EmoteAbilityId;

	public PrefabGUID EmoteAbilityId;
}
```
