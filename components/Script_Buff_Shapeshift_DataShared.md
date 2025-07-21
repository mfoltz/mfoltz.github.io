---
nav_exclude: true
search_exclude: false
---

# Script_Buff_Shapeshift_DataShared

```csharp
public struct Script_Buff_Shapeshift_DataShared
{
	static Script_Buff_Shapeshift_DataShared()
	{
		Il2CppClassPointerStore<Script_Buff_Shapeshift_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_Shapeshift_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_Shapeshift_DataShared>.NativeClassPtr);
		Script_Buff_Shapeshift_DataShared.NativeFieldInfoPtr_ShapeshiftModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Shapeshift_DataShared>.NativeClassPtr, "ShapeshiftModificationId");
		Script_Buff_Shapeshift_DataShared.NativeFieldInfoPtr_RotateTowardsMovementModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Shapeshift_DataShared>.NativeClassPtr, "RotateTowardsMovementModificationId");
		Script_Buff_Shapeshift_DataShared.NativeFieldInfoPtr_BloodDrainValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Shapeshift_DataShared>.NativeClassPtr, "BloodDrainValue");
		Script_Buff_Shapeshift_DataShared.NativeFieldInfoPtr_BloodDrainModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Shapeshift_DataShared>.NativeClassPtr, "BloodDrainModificationId");
		Script_Buff_Shapeshift_DataShared.NativeFieldInfoPtr_OnStatChangedListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Shapeshift_DataShared>.NativeClassPtr, "OnStatChangedListener");
		Script_Buff_Shapeshift_DataShared.NativeFieldInfoPtr_RemoveOnDamageTaken = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Shapeshift_DataShared>.NativeClassPtr, "RemoveOnDamageTaken");
		Script_Buff_Shapeshift_DataShared.NativeFieldInfoPtr_DestroyOnAbilityEnd = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Shapeshift_DataShared>.NativeClassPtr, "DestroyOnAbilityEnd");
		Script_Buff_Shapeshift_DataShared.NativeFieldInfoPtr_MovementSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Shapeshift_DataShared>.NativeClassPtr, "MovementSpeed");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_Shapeshift_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ShapeshiftModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_RotateTowardsMovementModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_BloodDrainValue;
	private static readonly IntPtr NativeFieldInfoPtr_BloodDrainModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_OnStatChangedListener;
	private static readonly IntPtr NativeFieldInfoPtr_RemoveOnDamageTaken;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyOnAbilityEnd;
	private static readonly IntPtr NativeFieldInfoPtr_MovementSpeed;

	public ModificationId ShapeshiftModificationId;

	public ModificationId RotateTowardsMovementModificationId;

	public float BloodDrainValue;

	public ModificationId BloodDrainModificationId;

	public ListenerId OnStatChangedListener;

	public bool RemoveOnDamageTaken;

	public bool DestroyOnAbilityEnd;

	public float MovementSpeed;
}
```
