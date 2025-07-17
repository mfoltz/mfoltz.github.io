---
nav_exclude: true
search_exclude: true
---

# HailMessage

```csharp
[StructLayout(2)]
public struct HailMessage
{
	static HailMessage()
	{
		Il2CppClassPointerStore<HailMessage>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "HailMessage");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HailMessage>.NativeClassPtr);
		HailMessage.NativeFieldInfoPtr_PositionBits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessage>.NativeClassPtr, "PositionBits");
		HailMessage.NativeFieldInfoPtr_LengthBits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessage>.NativeClassPtr, "LengthBits");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HailMessage>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PositionBits;
	private static readonly IntPtr NativeFieldInfoPtr_LengthBits;
	[FieldOffset(0)]
	public int PositionBits;
	[FieldOffset(4)]
	public int LengthBits;
}
