---
nav_exclude: true
search_exclude: true
---

# ReplayScreenshotBuffer

```csharp
[StructLayout(2)]
public struct ReplayScreenshotBuffer
{
	static ReplayScreenshotBuffer()
	{
		Il2CppClassPointerStore<ReplayScreenshotBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Replays", "ReplayScreenshotBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReplayScreenshotBuffer>.NativeClassPtr);
		ReplayScreenshotBuffer.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplayScreenshotBuffer>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReplayScreenshotBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	[FieldOffset(0)]
	public byte Data;
}
