---
nav_exclude: true
search_exclude: true
---

# AggroCandidateBufferElement

```csharp
[StructLayout(2)]
public struct AggroCandidateBufferElement
{
	static AggroCandidateBufferElement()
	{
		Il2CppClassPointerStore<AggroCandidateBufferElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AggroCandidateBufferElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AggroCandidateBufferElement>.NativeClassPtr);
		AggroCandidateBufferElement.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroCandidateBufferElement>.NativeClassPtr, "Position");
		AggroCandidateBufferElement.NativeFieldInfoPtr_DistanceSq = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroCandidateBufferElement>.NativeClassPtr, "DistanceSq");
		AggroCandidateBufferElement.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroCandidateBufferElement>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AggroCandidateBufferElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_DistanceSq;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public float3 Position;
	[FieldOffset(12)]
	public float DistanceSq;
	[FieldOffset(16)]
	public Entity Entity;
}
