# FollowerBuffer

```csharp
[StructLayout(2)]
public struct FollowerBuffer
{
	static FollowerBuffer()
	{
		Il2CppClassPointerStore<FollowerBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "FollowerBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FollowerBuffer>.NativeClassPtr);
		FollowerBuffer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FollowerBuffer>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FollowerBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public NetworkedEntity Entity;
}
