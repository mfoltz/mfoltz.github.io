# GlobalParticleSystem

```csharp
[StructLayout(2)]
public struct GlobalParticleSystem
{
	static GlobalParticleSystem()
	{
		Il2CppClassPointerStore<GlobalParticleSystem>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "GlobalParticleSystem");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GlobalParticleSystem>.NativeClassPtr);
		GlobalParticleSystem.NativeFieldInfoPtr_RandomTimeOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleSystem>.NativeClassPtr, "RandomTimeOffset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GlobalParticleSystem>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RandomTimeOffset;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool RandomTimeOffset;
}
