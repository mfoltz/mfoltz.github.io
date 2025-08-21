---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ModifyMovementDuringCastActive
{
	static ModifyMovementDuringCastActive()
	{
		Il2CppClassPointerStore<ModifyMovementDuringCastActive>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "ModifyMovementDuringCastActive");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyMovementDuringCastActive>.NativeClassPtr);
		ModifyMovementDuringCastActive.NativeFieldInfoPtr_CastStartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementDuringCastActive>.NativeClassPtr, "CastStartTime");
		ModifyMovementDuringCastActive.NativeFieldInfoPtr_CastFinishedTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementDuringCastActive>.NativeClassPtr, "CastFinishedTime");
		ModifyMovementDuringCastActive.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementDuringCastActive>.NativeClassPtr, "Ability");
		ModifyMovementDuringCastActive.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementDuringCastActive>.NativeClassPtr, "Character");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyMovementDuringCastActive>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastStartTime;
	private static readonly IntPtr NativeFieldInfoPtr_CastFinishedTime;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_Character;

	public double CastStartTime;

	public Nullable_Unboxed<double> CastFinishedTime;

	public Entity Ability;

	public Entity Character;
}
```
