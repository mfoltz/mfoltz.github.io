# CastOptionStateBuffer

```csharp
[StructLayout(2)]
public struct CastOptionStateBuffer
{
	static CastOptionStateBuffer()
	{
		Il2CppClassPointerStore<CastOptionStateBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "CastOptionStateBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastOptionStateBuffer>.NativeClassPtr);
		CastOptionStateBuffer.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionStateBuffer>.NativeClassPtr, "State");
		CastOptionStateBuffer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionStateBuffer>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastOptionStateBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public GenericEnemyState State;
	[FieldOffset(4)]
	public Entity Entity;
}
