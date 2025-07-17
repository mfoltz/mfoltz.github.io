---
nav_exclude: true
search_exclude: true
---

# ColliderEntities

```csharp
[StructLayout(2)]
public struct ColliderEntities
{
	static ColliderEntities()
	{
		Il2CppClassPointerStore<ColliderEntities>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "ColliderEntities");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ColliderEntities>.NativeClassPtr);
		ColliderEntities.NativeFieldInfoPtr_ColliderEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ColliderEntities>.NativeClassPtr, "ColliderEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ColliderEntities>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ColliderEntity;
	[FieldOffset(0)]
	public Entity ColliderEntity;
}
