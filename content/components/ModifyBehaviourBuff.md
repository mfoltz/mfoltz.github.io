---
nav_exclude: true
search_exclude: true
---

# ModifyBehaviourBuff

```csharp
public struct ModifyBehaviourBuff
{
	static ModifyBehaviourBuff()
	{
		Il2CppClassPointerStore<ModifyBehaviourBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "ModifyBehaviourBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyBehaviourBuff>.NativeClassPtr);
		ModifyBehaviourBuff.NativeFieldInfoPtr_Behaviour = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBehaviourBuff>.NativeClassPtr, "Behaviour");
		ModifyBehaviourBuff.NativeFieldInfoPtr_ModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBehaviourBuff>.NativeClassPtr, "ModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyBehaviourBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Behaviour;
	private static readonly IntPtr NativeFieldInfoPtr_ModId;

	public PrefabGUID Behaviour;

	public ModificationId ModId;
}
```
