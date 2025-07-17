---
nav_exclude: true
search_exclude: true
---

# AlertBuffer

```csharp
[StructLayout(2)]
public struct AlertBuffer
{
	static AlertBuffer()
	{
		Il2CppClassPointerStore<AlertBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AlertBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AlertBuffer>.NativeClassPtr);
		AlertBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AlertBuffer>.NativeClassPtr, "Value");
		AlertBuffer.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AlertBuffer>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AlertBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public float Value;
	[FieldOffset(4)]
	public Entity Entity;
}
