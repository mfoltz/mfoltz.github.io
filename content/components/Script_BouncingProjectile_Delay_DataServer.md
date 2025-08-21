---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_BouncingProjectile_Delay_DataServer
{
	static Script_BouncingProjectile_Delay_DataServer()
	{
		Il2CppClassPointerStore<Script_BouncingProjectile_Delay_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_BouncingProjectile_Delay_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_BouncingProjectile_Delay_DataServer>.NativeClassPtr);
		Script_BouncingProjectile_Delay_DataServer.NativeFieldInfoPtr_Settings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BouncingProjectile_Delay_DataServer>.NativeClassPtr, "Settings");
		Script_BouncingProjectile_Delay_DataServer.NativeFieldInfoPtr_TargetFilterCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BouncingProjectile_Delay_DataServer>.NativeClassPtr, "TargetFilterCondition");
		Script_BouncingProjectile_Delay_DataServer.NativeFieldInfoPtr_BounceToOwnerCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BouncingProjectile_Delay_DataServer>.NativeClassPtr, "BounceToOwnerCondition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_BouncingProjectile_Delay_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Settings;
	private static readonly IntPtr NativeFieldInfoPtr_TargetFilterCondition;
	private static readonly IntPtr NativeFieldInfoPtr_BounceToOwnerCondition;

	public BouncingProjectileData Settings;

	public BlobAssetReference<ConditionBlob> TargetFilterCondition;

	public BlobAssetReference<ConditionBlob> BounceToOwnerCondition;
}
```
