---
nav_exclude: true
search_exclude: true
---

```csharp
public struct FluffMaskPoolAllocation
{
	static FluffMaskPoolAllocation()
	{
		Il2CppClassPointerStore<FluffMaskPoolAllocation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "Terrain.Systems", "FluffMaskPoolAllocation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FluffMaskPoolAllocation>.NativeClassPtr);
		FluffMaskPoolAllocation.NativeFieldInfoPtr_PoolIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FluffMaskPoolAllocation>.NativeClassPtr, "PoolIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FluffMaskPoolAllocation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PoolIndex;

	public int PoolIndex;
}
```

## Client Systems

- [FluffRenderingMaskSystem]({{% relref "systems/client/FluffRenderingMaskSystem.md" %}})
