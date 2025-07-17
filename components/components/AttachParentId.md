---
nav_exclude: true
search_exclude: true
---

# AttachParentId

```csharp
[StructLayout(2)]
public struct AttachParentId
{
	static AttachParentId()
	{
		Il2CppClassPointerStore<AttachParentId>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AttachParentId");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AttachParentId>.NativeClassPtr);
		AttachParentId.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachParentId>.NativeClassPtr, "Index");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AttachParentId>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Index;
	[FieldOffset(0)]
	public int Index;
}
