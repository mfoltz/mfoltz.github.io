# SyncAlias_Rotation

```csharp
[StructLayout(2)]
public struct SyncAlias_Rotation
{
	static SyncAlias_Rotation()
	{
		Il2CppClassPointerStore<SyncAlias_Rotation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "SyncAlias_Rotation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SyncAlias_Rotation>.NativeClassPtr);
		SyncAlias_Rotation.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SyncAlias_Rotation>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SyncAlias_Rotation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public quaternion Value;
}
