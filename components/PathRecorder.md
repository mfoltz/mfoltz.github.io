---
nav_exclude: true
search_exclude: false
---

# PathRecorder

```csharp
public struct PathRecorder
{
	static PathRecorder()
	{
		Il2CppClassPointerStore<PathRecorder>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PathRecorder");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PathRecorder>.NativeClassPtr);
		PathRecorder.NativeFieldInfoPtr_PointDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRecorder>.NativeClassPtr, "PointDistance");
		PathRecorder.NativeFieldInfoPtr_BufferIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRecorder>.NativeClassPtr, "BufferIndex");
		PathRecorder.NativeFieldInfoPtr_BufferLength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRecorder>.NativeClassPtr, "BufferLength");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PathRecorder>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PointDistance;
	private static readonly IntPtr NativeFieldInfoPtr_BufferIndex;
	private static readonly IntPtr NativeFieldInfoPtr_BufferLength;

	public float PointDistance;

	public int BufferIndex;

	public int BufferLength;
}
```
