---
nav_exclude: true
search_exclude: true
---

# UpToDateUserBitMask

```csharp
[StructLayout(2)]
public struct UpToDateUserBitMask
{
	static UpToDateUserBitMask()
	{
		Il2CppClassPointerStore<UpToDateUserBitMask>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "UpToDateUserBitMask");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UpToDateUserBitMask>.NativeClassPtr);
		UpToDateUserBitMask.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpToDateUserBitMask>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UpToDateUserBitMask>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public UserBitMask128 Value;
}
