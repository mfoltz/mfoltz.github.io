# Script_Buff_VisionStackModification_DataServer

```csharp
[StructLayout(2)]
public struct Script_Buff_VisionStackModification_DataServer
{
	static Script_Buff_VisionStackModification_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_VisionStackModification_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_VisionStackModification_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_VisionStackModification_DataServer>.NativeClassPtr);
		Script_Buff_VisionStackModification_DataServer.NativeFieldInfoPtr_VisionModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_VisionStackModification_DataServer>.NativeClassPtr, "VisionModificationId");
		Script_Buff_VisionStackModification_DataServer.NativeFieldInfoPtr_VisionReductionPerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_VisionStackModification_DataServer>.NativeClassPtr, "VisionReductionPerStack");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_VisionStackModification_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VisionModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_VisionReductionPerStack;
	[FieldOffset(0)]
	public ModificationId VisionModificationId;
	[FieldOffset(4)]
	public float VisionReductionPerStack;
}
