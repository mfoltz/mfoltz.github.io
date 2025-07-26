# FluffInstanceDirty

```csharp
[StructLayout(2)]
public struct FluffInstanceDirty
{
	static FluffInstanceDirty()
	{
		Il2CppClassPointerStore<FluffInstanceDirty>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "FluffInstanceDirty");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FluffInstanceDirty>.NativeClassPtr);
		FluffInstanceDirty.NativeFieldInfoPtr_Dirty = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FluffInstanceDirty>.NativeClassPtr, "Dirty");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FluffInstanceDirty>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Dirty;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Dirty;
}
