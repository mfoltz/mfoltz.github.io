# StaticHierarchyBuffer

```csharp
[StructLayout(2)]
public struct StaticHierarchyBuffer
{
	static StaticHierarchyBuffer()
	{
		Il2CppClassPointerStore<StaticHierarchyBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "StaticHierarchyBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StaticHierarchyBuffer>.NativeClassPtr);
		StaticHierarchyBuffer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticHierarchyBuffer>.NativeClassPtr, "Entity");
		StaticHierarchyBuffer.NativeFieldInfoPtr_BlobIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticHierarchyBuffer>.NativeClassPtr, "BlobIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StaticHierarchyBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_BlobIndex;
	[FieldOffset(0)]
	public Entity Entity;
	[FieldOffset(8)]
	public ushort BlobIndex;
}
