---
nav_exclude: true
search_exclude: false
---

# MoveDuringCastActive

```csharp
public struct MoveDuringCastActive
{
	static MoveDuringCastActive()
	{
		Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MoveDuringCastActive");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr);
		MoveDuringCastActive.NativeFieldInfoPtr_CastStartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "CastStartTime");
		MoveDuringCastActive.NativeFieldInfoPtr_InitialRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "InitialRotation");
		MoveDuringCastActive.NativeFieldInfoPtr_InitialMoveRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "InitialMoveRotation");
		MoveDuringCastActive.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "Ability");
		MoveDuringCastActive.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "Character");
		MoveDuringCastActive.NativeFieldInfoPtr_CanMoveModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "CanMoveModificationId");
		MoveDuringCastActive.NativeFieldInfoPtr_InterruptCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "InterruptCounter");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastStartTime;
	private static readonly IntPtr NativeFieldInfoPtr_InitialRotation;
	private static readonly IntPtr NativeFieldInfoPtr_InitialMoveRotation;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_Character;
	private static readonly IntPtr NativeFieldInfoPtr_CanMoveModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_InterruptCounter;

	public double CastStartTime;

	public quaternion InitialRotation;

	public quaternion InitialMoveRotation;

	public Entity Ability;

	public Entity Character;

	public ModificationId CanMoveModificationId;

	public int InterruptCounter;
}
```
