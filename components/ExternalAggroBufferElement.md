# ExternalAggroBufferElement

```csharp
[StructLayout(2)]
public struct ExternalAggroBufferElement
{
	static ExternalAggroBufferElement()
	{
		Il2CppClassPointerStore<ExternalAggroBufferElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ExternalAggroBufferElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ExternalAggroBufferElement>.NativeClassPtr);
		ExternalAggroBufferElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ExternalAggroBufferElement>.NativeClassPtr, "Value");
		ExternalAggroBufferElement.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ExternalAggroBufferElement>.NativeClassPtr, "Source");
		ExternalAggroBufferElement.NativeFieldInfoPtr_Applier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ExternalAggroBufferElement>.NativeClassPtr, "Applier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ExternalAggroBufferElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_Applier;
	[FieldOffset(0)]
	public float Value;
	[FieldOffset(4)]
	public Entity Source;
	[FieldOffset(12)]
	public Entity Applier;
}
