---
nav_exclude: true
search_exclude: false
---

# ProfessorCoilManager

```csharp
public struct ProfessorCoilManager
{
	static ProfessorCoilManager()
	{
		Il2CppClassPointerStore<ProfessorCoilManager>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProfessorCoilManager");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProfessorCoilManager>.NativeClassPtr);
		ProfessorCoilManager.NativeFieldInfoPtr_DamageParameters = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilManager>.NativeClassPtr, "DamageParameters");
		ProfessorCoilManager.NativeFieldInfoPtr_IgnoredBuffModifications = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilManager>.NativeClassPtr, "IgnoredBuffModifications");
		ProfessorCoilManager.NativeFieldInfoPtr_HitBuffPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilManager>.NativeClassPtr, "HitBuffPrefabGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProfessorCoilManager>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DamageParameters;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoredBuffModifications;
	private static readonly IntPtr NativeFieldInfoPtr_HitBuffPrefabGuid;

	public DealDamageParameters DamageParameters;

	public BuffModificationTypes IgnoredBuffModifications;

	public PrefabGUID HitBuffPrefabGuid;
}
```
