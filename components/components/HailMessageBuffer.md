---
nav_exclude: true
search_exclude: true
---

# HailMessageBuffer

```csharp
[StructLayout(2)]
public struct HailMessageBuffer
{
	static HailMessageBuffer()
	{
		Il2CppClassPointerStore<HailMessageBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "HailMessageBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HailMessageBuffer>.NativeClassPtr);
		HailMessageBuffer.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageBuffer>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HailMessageBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	[FieldOffset(0)]
	public byte Data;
}
