# InverseAggroBufferElement

```csharp
[StructLayout(2)]
public struct InverseAggroBufferElement
{
	static InverseAggroBufferElement()
	{
		Il2CppClassPointerStore<InverseAggroBufferElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "InverseAggroBufferElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InverseAggroBufferElement>.NativeClassPtr);
		InverseAggroBufferElement.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InverseAggroBufferElement>.NativeClassPtr, "Entity");
		InverseAggroBufferElement.NativeFieldInfoPtr_ApplyCombatBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InverseAggroBufferElement>.NativeClassPtr, "ApplyCombatBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InverseAggroBufferElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_ApplyCombatBuff;
	[FieldOffset(0)]
	public Entity Entity;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool ApplyCombatBuff;
}
