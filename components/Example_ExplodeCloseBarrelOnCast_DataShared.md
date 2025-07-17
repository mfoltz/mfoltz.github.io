---
nav_exclude: true
search_exclude: true
---

# Example_ExplodeCloseBarrelOnCast_DataShared

```csharp
[StructLayout(2)]
public struct Example_ExplodeCloseBarrelOnCast_DataShared
{
	static Example_ExplodeCloseBarrelOnCast_DataShared()
	{
		Il2CppClassPointerStore<Example_ExplodeCloseBarrelOnCast_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Example_ExplodeCloseBarrelOnCast_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Example_ExplodeCloseBarrelOnCast_DataShared>.NativeClassPtr);
		Example_ExplodeCloseBarrelOnCast_DataShared.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_ExplodeCloseBarrelOnCast_DataShared>.NativeClassPtr, "Radius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Example_ExplodeCloseBarrelOnCast_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	[FieldOffset(0)]
	public float Radius;
}
