# BulletHellParticleIndex

```csharp
[StructLayout(2)]
public struct BulletHellParticleIndex
{
	static BulletHellParticleIndex()
	{
		Il2CppClassPointerStore<BulletHellParticleIndex>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "BulletHellParticleIndex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BulletHellParticleIndex>.NativeClassPtr);
		BulletHellParticleIndex.NativeFieldInfoPtr_PrefabIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BulletHellParticleIndex>.NativeClassPtr, "PrefabIndex");
		BulletHellParticleIndex.NativeFieldInfoPtr_ParticleIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BulletHellParticleIndex>.NativeClassPtr, "ParticleIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BulletHellParticleIndex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ParticleIndex;
	[FieldOffset(0)]
	public int PrefabIndex;
	[FieldOffset(4)]
	public int ParticleIndex;
}
