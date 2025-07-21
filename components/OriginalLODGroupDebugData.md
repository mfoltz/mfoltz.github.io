---
nav_exclude: true
search_exclude: false
---

# OriginalLODGroupDebugData

```csharp
public struct OriginalLODGroupDebugData
{
	static OriginalLODGroupDebugData()
	{
		Il2CppClassPointerStore<OriginalLODGroupDebugData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Entities.Graphics.Extension", "OriginalLODGroupDebugData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OriginalLODGroupDebugData>.NativeClassPtr);
		OriginalLODGroupDebugData.NativeFieldInfoPtr_FakeSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OriginalLODGroupDebugData>.NativeClassPtr, "FakeSize");
		OriginalLODGroupDebugData.NativeFieldInfoPtr_RealSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OriginalLODGroupDebugData>.NativeClassPtr, "RealSize");
		OriginalLODGroupDebugData.NativeFieldInfoPtr_LODCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OriginalLODGroupDebugData>.NativeClassPtr, "LODCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OriginalLODGroupDebugData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FakeSize;
	private static readonly IntPtr NativeFieldInfoPtr_RealSize;
	private static readonly IntPtr NativeFieldInfoPtr_LODCount;

	public float FakeSize;

	public float RealSize;

	public int LODCount;
}
```
