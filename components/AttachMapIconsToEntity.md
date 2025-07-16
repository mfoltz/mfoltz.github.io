# AttachMapIconsToEntity

```csharp
[StructLayout(2)]
public struct AttachMapIconsToEntity
{
	static AttachMapIconsToEntity()
	{
		Il2CppClassPointerStore<AttachMapIconsToEntity>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AttachMapIconsToEntity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AttachMapIconsToEntity>.NativeClassPtr);
		AttachMapIconsToEntity.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachMapIconsToEntity>.NativeClassPtr, "Prefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AttachMapIconsToEntity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;
	[FieldOffset(0)]
	public PrefabGUID Prefab;
}
