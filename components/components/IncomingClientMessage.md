---
nav_exclude: true
search_exclude: true
---

# IncomingClientMessage

```csharp
[StructLayout(2)]
public struct IncomingClientMessage
{
	static IncomingClientMessage()
	{
		Il2CppClassPointerStore<IncomingClientMessage>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "IncomingClientMessage");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<IncomingClientMessage>.NativeClassPtr);
		IncomingClientMessage.NativeFieldInfoPtr_BufferLengthBits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IncomingClientMessage>.NativeClassPtr, "BufferLengthBits");
		IncomingClientMessage.NativeFieldInfoPtr_BufferPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IncomingClientMessage>.NativeClassPtr, "BufferPosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<IncomingClientMessage>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BufferLengthBits;
	private static readonly IntPtr NativeFieldInfoPtr_BufferPosition;
	[FieldOffset(0)]
	public ushort BufferLengthBits;
	[FieldOffset(2)]
	public ushort BufferPosition;
}
