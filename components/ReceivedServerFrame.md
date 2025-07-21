---
nav_exclude: true
search_exclude: false
---

# ReceivedServerFrame

```csharp
public struct ReceivedServerFrame
{
	static ReceivedServerFrame()
	{
		Il2CppClassPointerStore<ReceivedServerFrame>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "ReceivedServerFrame");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReceivedServerFrame>.NativeClassPtr);
		ReceivedServerFrame.NativeFieldInfoPtr_LastServerFrameReceived = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReceivedServerFrame>.NativeClassPtr, "LastServerFrameReceived");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReceivedServerFrame>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastServerFrameReceived;

	public int LastServerFrameReceived;
}
```
