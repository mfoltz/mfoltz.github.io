---
nav_exclude: true
search_exclude: true
---

# Script_TileModelForceAiming_DataServer

```csharp
public struct Script_TileModelForceAiming_DataServer
{
	static Script_TileModelForceAiming_DataServer()
	{
		Il2CppClassPointerStore<Script_TileModelForceAiming_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_TileModelForceAiming_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_TileModelForceAiming_DataServer>.NativeClassPtr);
		Script_TileModelForceAiming_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_TileModelForceAiming_DataServer>.NativeClassPtr, "Radius");
		Script_TileModelForceAiming_DataServer.NativeFieldInfoPtr_HitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_TileModelForceAiming_DataServer>.NativeClassPtr, "HitFilter");
		Script_TileModelForceAiming_DataServer.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_TileModelForceAiming_DataServer>.NativeClassPtr, "Condition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_TileModelForceAiming_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_HitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;

	public float Radius;

	public HitFilter HitFilter;

	public BlobAssetReference<ConditionBlob> Condition;
}
```
