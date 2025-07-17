---
nav_exclude: true
search_exclude: true
---

# EntityMatrixElement

```csharp
[StructLayout(2)]
public struct EntityMatrixElement
{
	static EntityMatrixElement()
	{
		Il2CppClassPointerStore<EntityMatrixElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "EntityMatrixElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntityMatrixElement>.NativeClassPtr);
		EntityMatrixElement.NativeFieldInfoPtr_Matrix = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityMatrixElement>.NativeClassPtr, "Matrix");
		EntityMatrixElement.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityMatrixElement>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntityMatrixElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Matrix;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	[FieldOffset(0)]
	public float4x4 Matrix;
	[FieldOffset(64)]
	public Entity Entity;
}
