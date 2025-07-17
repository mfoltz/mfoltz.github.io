---
nav_exclude: true
search_exclude: true
---

# CastOptionGroupBuffer

```csharp
[StructLayout(2)]
public struct CastOptionGroupBuffer
{
	static CastOptionGroupBuffer()
	{
		Il2CppClassPointerStore<CastOptionGroupBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "CastOptionGroupBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastOptionGroupBuffer>.NativeClassPtr);
		CastOptionGroupBuffer.NativeFieldInfoPtr_CastOptionBufferEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionGroupBuffer>.NativeClassPtr, "CastOptionBufferEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastOptionGroupBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastOptionBufferEntity;
	[FieldOffset(0)]
	public Entity CastOptionBufferEntity;
}
