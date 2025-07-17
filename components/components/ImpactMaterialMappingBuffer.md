---
nav_exclude: true
search_exclude: true
---

# ImpactMaterialMappingBuffer

```csharp
[StructLayout(2)]
public struct ImpactMaterialMappingBuffer
{
	static ImpactMaterialMappingBuffer()
	{
		Il2CppClassPointerStore<ImpactMaterialMappingBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Sequencer", "ImpactMaterialMappingBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ImpactMaterialMappingBuffer>.NativeClassPtr);
		ImpactMaterialMappingBuffer.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ImpactMaterialMappingBuffer>.NativeClassPtr, "Type");
		ImpactMaterialMappingBuffer.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ImpactMaterialMappingBuffer>.NativeClassPtr, "Sequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ImpactMaterialMappingBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
	[FieldOffset(0)]
	public ImpactMaterialType Type;
	[FieldOffset(4)]
	public SequenceGUID Sequence;
}
