---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastAbilityInStateScript_DataServer
{
	static CastAbilityInStateScript_DataServer()
	{
		Il2CppClassPointerStore<CastAbilityInStateScript_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "CastAbilityInStateScript_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastAbilityInStateScript_DataServer>.NativeClassPtr);
		CastAbilityInStateScript_DataServer.NativeFieldInfoPtr_AbilityIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastAbilityInStateScript_DataServer>.NativeClassPtr, "AbilityIndex");
		CastAbilityInStateScript_DataServer.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastAbilityInStateScript_DataServer>.NativeClassPtr, "State");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastAbilityInStateScript_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityIndex;
	private static readonly IntPtr NativeFieldInfoPtr_State;

	public int AbilityIndex;

	public GenericEnemyState State;
}
```
