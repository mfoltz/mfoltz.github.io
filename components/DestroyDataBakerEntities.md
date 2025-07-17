---
nav_exclude: true
search_exclude: true
---

# DestroyDataBakerEntities

```csharp
[StructLayout(2)]
public struct DestroyDataBakerEntities
{
	static DestroyDataBakerEntities()
	{
		Il2CppClassPointerStore<DestroyDataBakerEntities>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DestroyDataBakerEntities");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyDataBakerEntities>.NativeClassPtr);
		DestroyDataBakerEntities.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyDataBakerEntities>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyDataBakerEntities>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public Entity Entity;
}
