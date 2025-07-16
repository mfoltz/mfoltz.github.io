# AttachedBuffer

```csharp
[StructLayout(2)]
public struct AttachedBuffer
{
	static AttachedBuffer()
	{
		Il2CppClassPointerStore<AttachedBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AttachedBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AttachedBuffer>.NativeClassPtr);
		AttachedBuffer.NativeFieldInfoPtr_PrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachedBuffer>.NativeClassPtr, "PrefabGuid");
		AttachedBuffer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachedBuffer>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AttachedBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public PrefabGUID PrefabGuid;
	[FieldOffset(4)]
	public Entity Entity;
}
