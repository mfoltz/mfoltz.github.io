---
nav_exclude: true
search_exclude: true
---

# OpenDoorsBuffer

```csharp
[StructLayout(2)]
public struct OpenDoorsBuffer
{
	static OpenDoorsBuffer()
	{
		Il2CppClassPointerStore<OpenDoorsBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "OpenDoorsBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OpenDoorsBuffer>.NativeClassPtr);
		OpenDoorsBuffer.NativeFieldInfoPtr_DoorEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OpenDoorsBuffer>.NativeClassPtr, "DoorEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OpenDoorsBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DoorEntity;
	[FieldOffset(0)]
	public Entity DoorEntity;
}
