---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_LightningProjectile_Nodes
{
	static Script_LightningProjectile_Nodes()
	{
		Il2CppClassPointerStore<Script_LightningProjectile_Nodes>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_LightningProjectile_Nodes");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_LightningProjectile_Nodes>.NativeClassPtr);
		Script_LightningProjectile_Nodes.NativeFieldInfoPtr_Age = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LightningProjectile_Nodes>.NativeClassPtr, "Age");
		Script_LightningProjectile_Nodes.NativeFieldInfoPtr_AngleDiff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_LightningProjectile_Nodes>.NativeClassPtr, "AngleDiff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_LightningProjectile_Nodes>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Age;
	private static readonly IntPtr NativeFieldInfoPtr_AngleDiff;

	public float Age;

	public float AngleDiff;
}
```
