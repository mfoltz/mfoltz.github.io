# Latency

```csharp
[StructLayout(2)]
public struct Latency
{
	static Latency()
	{
		Il2CppClassPointerStore<Latency>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "Latency");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Latency>.NativeClassPtr);
		Latency.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Latency>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Latency>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public float Value;
}
