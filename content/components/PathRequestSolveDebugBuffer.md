---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PathRequestSolveDebugBuffer
{
	static PathRequestSolveDebugBuffer()
	{
		Il2CppClassPointerStore<PathRequestSolveDebugBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Pathfinding.dll", "ProjectM.Pathfinding", "PathRequestSolveDebugBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PathRequestSolveDebugBuffer>.NativeClassPtr);
		PathRequestSolveDebugBuffer.NativeFieldInfoPtr_H = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequestSolveDebugBuffer>.NativeClassPtr, "H");
		PathRequestSolveDebugBuffer.NativeFieldInfoPtr_G = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequestSolveDebugBuffer>.NativeClassPtr, "G");
		PathRequestSolveDebugBuffer.NativeFieldInfoPtr_Visited = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequestSolveDebugBuffer>.NativeClassPtr, "Visited");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PathRequestSolveDebugBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_H;
	private static readonly IntPtr NativeFieldInfoPtr_G;
	private static readonly IntPtr NativeFieldInfoPtr_Visited;

	public float H;

	public float G;

	public bool Visited;
}
```
