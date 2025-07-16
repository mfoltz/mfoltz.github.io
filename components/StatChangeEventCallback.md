# StatChangeEventCallback

```csharp
[StructLayout(2)]
public struct StatChangeEventCallback
{
	static StatChangeEventCallback()
	{
		Il2CppClassPointerStore<StatChangeEventCallback>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StatChangeEventCallback");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StatChangeEventCallback>.NativeClassPtr);
		StatChangeEventCallback.NativeFieldInfoPtr_StatType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeEventCallback>.NativeClassPtr, "StatType");
		StatChangeEventCallback.NativeFieldInfoPtr_FunctionHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeEventCallback>.NativeClassPtr, "FunctionHash");
		StatChangeEventCallback.NativeFieldInfoPtr_CallerEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeEventCallback>.NativeClassPtr, "CallerEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StatChangeEventCallback>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StatType;
	private static readonly IntPtr NativeFieldInfoPtr_FunctionHash;
	private static readonly IntPtr NativeFieldInfoPtr_CallerEntity;
	[FieldOffset(0)]
	public StatType StatType;
	[FieldOffset(4)]
	public int FunctionHash;
	[FieldOffset(8)]
	public Entity CallerEntity;
}
