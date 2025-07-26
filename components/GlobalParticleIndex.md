# GlobalParticleIndex

```csharp
[StructLayout(2)]
public struct GlobalParticleIndex
{
	static GlobalParticleIndex()
	{
		Il2CppClassPointerStore<GlobalParticleIndex>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "GlobalParticleIndex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GlobalParticleIndex>.NativeClassPtr);
		GlobalParticleIndex.NativeFieldInfoPtr_PrefabIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GlobalParticleIndex>.NativeClassPtr, "PrefabIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GlobalParticleIndex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabIndex;
	[FieldOffset(0)]
	public int PrefabIndex;
}
