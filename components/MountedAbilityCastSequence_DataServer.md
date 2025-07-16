# MountedAbilityCastSequence_DataServer

```csharp
[StructLayout(2)]
public struct MountedAbilityCastSequence_DataServer
{
	static MountedAbilityCastSequence_DataServer()
	{
		Il2CppClassPointerStore<MountedAbilityCastSequence_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "MountedAbilityCastSequence_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MountedAbilityCastSequence_DataServer>.NativeClassPtr);
		MountedAbilityCastSequence_DataServer.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountedAbilityCastSequence_DataServer>.NativeClassPtr, "SequenceGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MountedAbilityCastSequence_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	[FieldOffset(0)]
	public SequenceGUID SequenceGuid;
}
