# Script_Blood_CrimsonBeam_HitSequenceElement

```csharp
[StructLayout(2)]
public struct Script_Blood_CrimsonBeam_HitSequenceElement
{
	static Script_Blood_CrimsonBeam_HitSequenceElement()
	{
		Il2CppClassPointerStore<Script_Blood_CrimsonBeam_HitSequenceElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Blood_CrimsonBeam_HitSequenceElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_HitSequenceElement>.NativeClassPtr);
		Script_Blood_CrimsonBeam_HitSequenceElement.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_HitSequenceElement>.NativeClassPtr, "SequenceGuid");
		Script_Blood_CrimsonBeam_HitSequenceElement.NativeFieldInfoPtr_Ally = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_HitSequenceElement>.NativeClassPtr, "Ally");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_HitSequenceElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Ally;
	[FieldOffset(0)]
	public SequenceGUID SequenceGuid;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool Ally;
}
