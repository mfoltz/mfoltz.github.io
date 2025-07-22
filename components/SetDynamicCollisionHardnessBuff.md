---
nav_exclude: true
search_exclude: false
---

# SetDynamicCollisionHardnessBuff

```csharp
public struct SetDynamicCollisionHardnessBuff
{
	static SetDynamicCollisionHardnessBuff()
	{
		Il2CppClassPointerStore<SetDynamicCollisionHardnessBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SetDynamicCollisionHardnessBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SetDynamicCollisionHardnessBuff>.NativeClassPtr);
		SetDynamicCollisionHardnessBuff.NativeFieldInfoPtr_Hardness = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetDynamicCollisionHardnessBuff>.NativeClassPtr, "Hardness");
		SetDynamicCollisionHardnessBuff.NativeFieldInfoPtr_Targets = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetDynamicCollisionHardnessBuff>.NativeClassPtr, "Targets");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SetDynamicCollisionHardnessBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Hardness;
	private static readonly IntPtr NativeFieldInfoPtr_Targets;

	public float Hardness;

	public SetDynamicCollisionHardnessBuffTargets Targets;
}
```

## Server Systems

- [Apply_BuffModificationsSystem_Server](/systems/server/Apply_BuffModificationsSystem_Server)
- [Destroy_BuffModificationsSystem_Server](/systems/server/Destroy_BuffModificationsSystem_Server)
