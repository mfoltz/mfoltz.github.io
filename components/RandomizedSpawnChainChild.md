# RandomizedSpawnChainChild

```csharp
[StructLayout(2)]
public struct RandomizedSpawnChainChild
{
	static RandomizedSpawnChainChild()
	{
		Il2CppClassPointerStore<RandomizedSpawnChainChild>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RandomizedSpawnChainChild");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RandomizedSpawnChainChild>.NativeClassPtr);
		RandomizedSpawnChainChild.NativeFieldInfoPtr_Parent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RandomizedSpawnChainChild>.NativeClassPtr, "Parent");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RandomizedSpawnChainChild>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Parent;
	[FieldOffset(0)]
	public Entity Parent;
}
