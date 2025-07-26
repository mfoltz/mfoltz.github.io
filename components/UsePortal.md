# UsePortal

```csharp
[StructLayout(2)]
public struct UsePortal
{
	static UsePortal()
	{
		Il2CppClassPointerStore<UsePortal>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UsePortal");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UsePortal>.NativeClassPtr);
		UsePortal.NativeFieldInfoPtr_CustomTravelBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UsePortal>.NativeClassPtr, "CustomTravelBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UsePortal>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CustomTravelBuff;
	[FieldOffset(0)]
	public PrefabGUID CustomTravelBuff;
}
