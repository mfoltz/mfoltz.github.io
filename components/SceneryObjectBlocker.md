---
nav_exclude: true
search_exclude: true
---

# SceneryObjectBlocker

```csharp
[StructLayout(2)]
public struct SceneryObjectBlocker
{
	static SceneryObjectBlocker()
	{
		Il2CppClassPointerStore<SceneryObjectBlocker>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "SceneryObjectBlocker");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SceneryObjectBlocker>.NativeClassPtr);
		SceneryObjectBlocker.NativeFieldInfoPtr_LocalBounds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneryObjectBlocker>.NativeClassPtr, "LocalBounds");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SceneryObjectBlocker>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LocalBounds;
	[FieldOffset(0)]
	public Aabb LocalBounds;
}
