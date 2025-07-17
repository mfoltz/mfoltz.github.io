---
nav_exclude: true
search_exclude: true
---

# ProfessorCoilBeam_Client

```csharp
[StructLayout(2)]
public struct ProfessorCoilBeam_Client
{
	static ProfessorCoilBeam_Client()
	{
		Il2CppClassPointerStore<ProfessorCoilBeam_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProfessorCoilBeam_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProfessorCoilBeam_Client>.NativeClassPtr);
		ProfessorCoilBeam_Client.NativeFieldInfoPtr_SequencesLength1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_Client>.NativeClassPtr, "SequencesLength1");
		ProfessorCoilBeam_Client.NativeFieldInfoPtr_SequencesLength2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_Client>.NativeClassPtr, "SequencesLength2");
		ProfessorCoilBeam_Client.NativeFieldInfoPtr_SequencesLength3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_Client>.NativeClassPtr, "SequencesLength3");
		ProfessorCoilBeam_Client.NativeFieldInfoPtr_SequencesLength4 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_Client>.NativeClassPtr, "SequencesLength4");
		ProfessorCoilBeam_Client.NativeFieldInfoPtr_SequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_Client>.NativeClassPtr, "SequenceState");
		ProfessorCoilBeam_Client.NativeFieldInfoPtr_BeamState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_Client>.NativeClassPtr, "BeamState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProfessorCoilBeam_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequencesLength1;
	private static readonly IntPtr NativeFieldInfoPtr_SequencesLength2;
	private static readonly IntPtr NativeFieldInfoPtr_SequencesLength3;
	private static readonly IntPtr NativeFieldInfoPtr_SequencesLength4;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_BeamState;
	[FieldOffset(0)]
	public ProfessorCoilBeam_Client.SequencePair SequencesLength1;
	[FieldOffset(8)]
	public ProfessorCoilBeam_Client.SequencePair SequencesLength2;
	[FieldOffset(16)]
	public ProfessorCoilBeam_Client.SequencePair SequencesLength3;
	[FieldOffset(24)]
	public ProfessorCoilBeam_Client.SequencePair SequencesLength4;
	[FieldOffset(32)]
	public SequenceState SequenceState;
	[FieldOffset(40)]
	public ProfessorCoilBeamState BeamState;
	[StructLayout(2)]
	public struct SequencePair
	{
		static SequencePair()
		{
			Il2CppClassPointerStore<ProfessorCoilBeam_Client.SequencePair>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<ProfessorCoilBeam_Client>.NativeClassPtr, "SequencePair");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProfessorCoilBeam_Client.SequencePair>.NativeClassPtr);
			ProfessorCoilBeam_Client.SequencePair.NativeFieldInfoPtr_Preview = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_Client.SequencePair>.NativeClassPtr, "Preview");
			ProfessorCoilBeam_Client.SequencePair.NativeFieldInfoPtr_Blast = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_Client.SequencePair>.NativeClassPtr, "Blast");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProfessorCoilBeam_Client.SequencePair>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_Preview;
		private static readonly IntPtr NativeFieldInfoPtr_Blast;
		[FieldOffset(0)]
		public SequenceGUID Preview;
		[FieldOffset(4)]
		public SequenceGUID Blast;
	}
}
