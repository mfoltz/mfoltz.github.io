---
nav_exclude: true
search_exclude: false
---

# AbilityGroupConsumeItemOnCast

```csharp
public struct AbilityGroupConsumeItemOnCast
{
	static AbilityGroupConsumeItemOnCast()
	{
		Il2CppClassPointerStore<AbilityGroupConsumeItemOnCast>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityGroupConsumeItemOnCast");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityGroupConsumeItemOnCast>.NativeClassPtr);
		AbilityGroupConsumeItemOnCast.NativeFieldInfoPtr_ConsumableId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupConsumeItemOnCast>.NativeClassPtr, "ConsumableId");
		AbilityGroupConsumeItemOnCast.NativeFieldInfoPtr_ItemEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupConsumeItemOnCast>.NativeClassPtr, "ItemEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityGroupConsumeItemOnCast>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ConsumableId;
	private static readonly IntPtr NativeFieldInfoPtr_ItemEntity;

	public PrefabGUID ConsumableId;

	public Entity ItemEntity;
}
```
