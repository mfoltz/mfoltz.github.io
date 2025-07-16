# HideTargetHUD

```csharp
[StructLayout(2)]
public struct HideTargetHUD
{
	static HideTargetHUD()
	{
		Il2CppClassPointerStore<HideTargetHUD>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "HideTargetHUD");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HideTargetHUD>.NativeClassPtr);
		HideTargetHUD.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HideTargetHUD>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HideTargetHUD>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	[FieldOffset(0)]
	public HideTargetHUDType Type;
}
