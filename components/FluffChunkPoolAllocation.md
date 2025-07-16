# FluffChunkPoolAllocation

```csharp
[StructLayout(2)]
public struct FluffChunkPoolAllocation
{
	static FluffChunkPoolAllocation()
	{
		Il2CppClassPointerStore<FluffChunkPoolAllocation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "Terrain.Systems", "FluffChunkPoolAllocation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FluffChunkPoolAllocation>.NativeClassPtr);
		FluffChunkPoolAllocation.NativeFieldInfoPtr_PoolIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FluffChunkPoolAllocation>.NativeClassPtr, "PoolIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FluffChunkPoolAllocation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PoolIndex;
	[FieldOffset(0)]
	public int PoolIndex;
}
