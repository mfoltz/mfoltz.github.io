---
nav_exclude: true
search_exclude: false
---

# BrushTarget

```csharp
public struct BrushTarget
{
	static BrushTarget()
	{
		Il2CppClassPointerStore<BrushTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "BrushTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BrushTarget>.NativeClassPtr);
		BrushTarget.NativeFieldInfoPtr_TargetChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BrushTarget>.NativeClassPtr, "TargetChunk");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BrushTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetChunk;

	public Entity TargetChunk;
}
```
