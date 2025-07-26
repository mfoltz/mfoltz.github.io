# ServerControlsPositionModifications

```csharp
[StructLayout(2)]
public struct ServerControlsPositionModifications
{
	static ServerControlsPositionModifications()
	{
		Il2CppClassPointerStore<ServerControlsPositionModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServerControlsPositionModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerControlsPositionModifications>.NativeClassPtr);
		ServerControlsPositionModifications.NativeFieldInfoPtr_MovementControlledModification = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerControlsPositionModifications>.NativeClassPtr, "MovementControlledModification");
		ServerControlsPositionModifications.NativeFieldInfoPtr_RotationControlledModification = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerControlsPositionModifications>.NativeClassPtr, "RotationControlledModification");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServerControlsPositionModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MovementControlledModification;
	private static readonly IntPtr NativeFieldInfoPtr_RotationControlledModification;
	[FieldOffset(0)]
	public ModificationId MovementControlledModification;
	[FieldOffset(4)]
	public ModificationId RotationControlledModification;
}
