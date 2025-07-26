# SystemInstance

```csharp
[StructLayout(2)]
public struct SystemInstance
{
	static SystemInstance()
	{
		Il2CppClassPointerStore<SystemInstance>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "SystemInstance");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SystemInstance>.NativeClassPtr);
		SystemInstance.NativeFieldInfoPtr_state = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SystemInstance>.NativeClassPtr, "state");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SystemInstance>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_state;
	[FieldOffset(0)]
	public unsafe SystemState* state;
}
