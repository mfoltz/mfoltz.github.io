---
nav_exclude: true
search_exclude: true
---

# ProjectileDestroyData

```csharp
[StructLayout(2)]
public struct ProjectileDestroyData
{
	static ProjectileDestroyData()
	{
		Il2CppClassPointerStore<ProjectileDestroyData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ProjectileDestroyData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ProjectileDestroyData>.NativeClassPtr);
		ProjectileDestroyData.NativeFieldInfoPtr_HasHitTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ProjectileDestroyData>.NativeClassPtr, "HasHitTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ProjectileDestroyData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HasHitTarget;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool HasHitTarget;
}
