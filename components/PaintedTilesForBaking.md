---
nav_exclude: true
search_exclude: false
---

# PaintedTilesForBaking

```csharp
public struct PaintedTilesForBaking
{
	static PaintedTilesForBaking()
	{
		Il2CppClassPointerStore<PaintedTilesForBaking>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "PaintedTilesForBaking");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PaintedTilesForBaking>.NativeClassPtr);
		PaintedTilesForBaking.NativeFieldInfoPtr_CollisionFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PaintedTilesForBaking>.NativeClassPtr, "CollisionFlags");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PaintedTilesForBaking>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CollisionFlags;

	public MapCollisionFlags CollisionFlags;
}
```
