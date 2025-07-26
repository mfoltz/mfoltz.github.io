# ResearchBuffer

```csharp
[StructLayout(2)]
public struct ResearchBuffer
{
	static ResearchBuffer()
	{
		Il2CppClassPointerStore<ResearchBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ResearchBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ResearchBuffer>.NativeClassPtr);
		ResearchBuffer.NativeFieldInfoPtr_ResearchGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResearchBuffer>.NativeClassPtr, "ResearchGuid");
		ResearchBuffer.NativeFieldInfoPtr_IsResearchByStation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResearchBuffer>.NativeClassPtr, "IsResearchByStation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ResearchBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ResearchGuid;
	private static readonly IntPtr NativeFieldInfoPtr_IsResearchByStation;
	[FieldOffset(0)]
	public PrefabGUID ResearchGuid;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool IsResearchByStation;
}
