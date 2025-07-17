---
nav_exclude: true
search_exclude: true
---

# MoodColliderSphere

```csharp
[StructLayout(2)]
public struct MoodColliderSphere
{
	static MoodColliderSphere()
	{
		Il2CppClassPointerStore<MoodColliderSphere>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "MoodColliderSphere");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoodColliderSphere>.NativeClassPtr);
		MoodColliderSphere.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoodColliderSphere>.NativeClassPtr, "Radius");
		MoodColliderSphere.NativeFieldInfoPtr_OuterRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoodColliderSphere>.NativeClassPtr, "OuterRadius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoodColliderSphere>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_OuterRadius;
	[FieldOffset(0)]
	public float Radius;
	[FieldOffset(4)]
	public float OuterRadius;
}
