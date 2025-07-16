# PhysicsWorldIndexBakingData

```csharp
[StructLayout(2)]
public struct PhysicsWorldIndexBakingData
{
	static PhysicsWorldIndexBakingData()
	{
		Il2CppClassPointerStore<PhysicsWorldIndexBakingData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.Hybrid.dll", "Unity.Physics.Authoring", "PhysicsWorldIndexBakingData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsWorldIndexBakingData>.NativeClassPtr);
		PhysicsWorldIndexBakingData.NativeFieldInfoPtr_WorldIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsWorldIndexBakingData>.NativeClassPtr, "WorldIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsWorldIndexBakingData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WorldIndex;
	[FieldOffset(0)]
	public uint WorldIndex;
}
