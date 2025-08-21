---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ModifyAggroRangesBuffModifications
{
	static ModifyAggroRangesBuffModifications()
	{
		Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyAggroRangesBuffModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr);
		ModifyAggroRangesBuffModifications.NativeFieldInfoPtr_AggroCircleRadiusModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr, "AggroCircleRadiusModId");
		ModifyAggroRangesBuffModifications.NativeFieldInfoPtr_AggroConeRadiusModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr, "AggroConeRadiusModId");
		ModifyAggroRangesBuffModifications.NativeFieldInfoPtr_AlertCircleRadiusModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr, "AlertCircleRadiusModId");
		ModifyAggroRangesBuffModifications.NativeFieldInfoPtr_AlertConeRadiusModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr, "AlertConeRadiusModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyAggroRangesBuffModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AggroCircleRadiusModId;
	private static readonly IntPtr NativeFieldInfoPtr_AggroConeRadiusModId;
	private static readonly IntPtr NativeFieldInfoPtr_AlertCircleRadiusModId;
	private static readonly IntPtr NativeFieldInfoPtr_AlertConeRadiusModId;

	public ModificationId AggroCircleRadiusModId;

	public ModificationId AggroConeRadiusModId;

	public ModificationId AlertCircleRadiusModId;

	public ModificationId AlertConeRadiusModId;
}
```

## Server Systems

- [Apply_BuffModificationsSystem_Server]({{% relref "systems/server/Apply_BuffModificationsSystem_Server.md" %}})
- [Destroy_BuffModificationsSystem_Server]({{% relref "systems/server/Destroy_BuffModificationsSystem_Server.md" %}})
