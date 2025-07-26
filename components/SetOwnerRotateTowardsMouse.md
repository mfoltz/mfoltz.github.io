# SetOwnerRotateTowardsMouse

```csharp
[StructLayout(2)]
public struct SetOwnerRotateTowardsMouse
{
	static SetOwnerRotateTowardsMouse()
	{
		Il2CppClassPointerStore<SetOwnerRotateTowardsMouse>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SetOwnerRotateTowardsMouse");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SetOwnerRotateTowardsMouse>.NativeClassPtr);
		SetOwnerRotateTowardsMouse.NativeFieldInfoPtr_Importance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetOwnerRotateTowardsMouse>.NativeClassPtr, "Importance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SetOwnerRotateTowardsMouse>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Importance;
	[FieldOffset(0)]
	public int Importance;
}
