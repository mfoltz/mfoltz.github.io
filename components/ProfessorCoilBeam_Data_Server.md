# ProfessorCoilBeam_Data_Server

```csharp
[StructLayout(2)]
public struct ProfessorCoilBeam_Data_Server
{
	static ProfessorCoilBeam_Data_Server()
	{
		Il2CppClassPointerStore<ProfessorCoilBeam_Data_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ProfessorCoilBeam_Data_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProfessorCoilBeam_Data_Server>.NativeClassPtr);
		ProfessorCoilBeam_Data_Server.NativeFieldInfoPtr_Width = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProfessorCoilBeam_Data_Server>.NativeClassPtr, "Width");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProfessorCoilBeam_Data_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Width;
	[FieldOffset(0)]
	public float Width;
}
