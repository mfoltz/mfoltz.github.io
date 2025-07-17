---
nav_exclude: true
search_exclude: true
---

# SurfaceTileLockStates

```csharp
[StructLayout(2)]
public struct SurfaceTileLockStates
{
	static SurfaceTileLockStates()
	{
		Il2CppClassPointerStore<SurfaceTileLockStates>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "SurfaceTileLockStates");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SurfaceTileLockStates>.NativeClassPtr);
		SurfaceTileLockStates.NativeFieldInfoPtr_Locked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SurfaceTileLockStates>.NativeClassPtr, "Locked");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SurfaceTileLockStates>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Locked;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Locked;
}
