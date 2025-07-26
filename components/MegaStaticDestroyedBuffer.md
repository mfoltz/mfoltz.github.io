# MegaStaticDestroyedBuffer

```csharp
[StructLayout(2)]
public struct MegaStaticDestroyedBuffer
{
	static MegaStaticDestroyedBuffer()
	{
		Il2CppClassPointerStore<MegaStaticDestroyedBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MegaStaticDestroyedBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MegaStaticDestroyedBuffer>.NativeClassPtr);
		MegaStaticDestroyedBuffer.NativeFieldInfoPtr_TimeDestroyed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticDestroyedBuffer>.NativeClassPtr, "TimeDestroyed");
		MegaStaticDestroyedBuffer.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticDestroyedBuffer>.NativeClassPtr, "Prefab");
		MegaStaticDestroyedBuffer.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MegaStaticDestroyedBuffer>.NativeClassPtr, "Index");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MegaStaticDestroyedBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeDestroyed;
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;
	private static readonly IntPtr NativeFieldInfoPtr_Index;
	[FieldOffset(0)]
	public double TimeDestroyed;
	[FieldOffset(8)]
	public PrefabGUID Prefab;
	[FieldOffset(12)]
	public ushort Index;
}
