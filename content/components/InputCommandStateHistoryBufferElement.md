---
nav_exclude: true
search_exclude: true
---

```csharp
public struct InputCommandStateHistoryBufferElement
{
	static InputCommandStateHistoryBufferElement()
	{
		Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "InputCommandStateHistoryBufferElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr);
		InputCommandStateHistoryBufferElement.NativeFieldInfoPtr_Frame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr, "Frame");
		InputCommandStateHistoryBufferElement.NativeFieldInfoPtr_MovementSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr, "MovementSpeed");
		InputCommandStateHistoryBufferElement.NativeFieldInfoPtr_MountMaxSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr, "MountMaxSpeed");
		InputCommandStateHistoryBufferElement.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr, "Rotation");
		InputCommandStateHistoryBufferElement.NativeFieldInfoPtr_AbilityMovement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr, "AbilityMovement");
		InputCommandStateHistoryBufferElement.NativeFieldInfoPtr_CanMove = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr, "CanMove");
		InputCommandStateHistoryBufferElement.NativeFieldInfoPtr_HasMapCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr, "HasMapCollision");
		InputCommandStateHistoryBufferElement.NativeFieldInfoPtr_HasDynamicCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr, "HasDynamicCollision");
		InputCommandStateHistoryBufferElement.NativeFieldInfoPtr_IsMounted = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr, "IsMounted");
		InputCommandStateHistoryBufferElement.NativeFieldInfoPtr_IsDead = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr, "IsDead");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InputCommandStateHistoryBufferElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Frame;
	private static readonly IntPtr NativeFieldInfoPtr_MovementSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_MountMaxSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityMovement;
	private static readonly IntPtr NativeFieldInfoPtr_CanMove;
	private static readonly IntPtr NativeFieldInfoPtr_HasMapCollision;
	private static readonly IntPtr NativeFieldInfoPtr_HasDynamicCollision;
	private static readonly IntPtr NativeFieldInfoPtr_IsMounted;
	private static readonly IntPtr NativeFieldInfoPtr_IsDead;

	public int Frame;

	public float MovementSpeed;

	public float MountMaxSpeed;

	public CommandRotationHistoryState Rotation;

	public AbilityMovementData AbilityMovement;

	public bool CanMove;

	public bool HasMapCollision;

	public bool HasDynamicCollision;

	public bool IsMounted;

	public bool IsDead;
}
```
