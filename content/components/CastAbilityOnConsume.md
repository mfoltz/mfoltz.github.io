---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastAbilityOnConsume
{
	static CastAbilityOnConsume()
	{
		Il2CppClassPointerStore<CastAbilityOnConsume>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CastAbilityOnConsume");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastAbilityOnConsume>.NativeClassPtr);
		CastAbilityOnConsume.NativeFieldInfoPtr_AbilityGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastAbilityOnConsume>.NativeClassPtr, "AbilityGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastAbilityOnConsume>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGuid;

	public PrefabGUID AbilityGuid;
}
```
