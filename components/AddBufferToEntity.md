---
nav_exclude: true
search_exclude: true
---

# AddBufferToEntity

```csharp
[StructLayout(2)]
public struct AddBufferToEntity
{
	static AddBufferToEntity()
	{
		Il2CppClassPointerStore<AddBufferToEntity>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core.Authoring", "AddBufferToEntity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AddBufferToEntity>.NativeClassPtr);
		AddBufferToEntity.NativeFieldInfoPtr_TargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AddBufferToEntity>.NativeClassPtr, "TargetEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AddBufferToEntity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity;
	[FieldOffset(0)]
	public Entity TargetEntity;
}
