---
nav_exclude: true
search_exclude: true
---

# BakingOnlyRoadBuffer

```csharp
public struct BakingOnlyRoadBuffer
{
	static BakingOnlyRoadBuffer()
	{
		Il2CppClassPointerStore<BakingOnlyRoadBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "BakingOnlyRoadBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakingOnlyRoadBuffer>.NativeClassPtr);
		BakingOnlyRoadBuffer.NativeFieldInfoPtr_IsRoad = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakingOnlyRoadBuffer>.NativeClassPtr, "IsRoad");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakingOnlyRoadBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsRoad;

	public bool IsRoad;
}
```
