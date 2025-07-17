---
nav_exclude: true
search_exclude: true
---

# DismantleDestroyData

```csharp
public struct DismantleDestroyData
{
	static DismantleDestroyData()
	{
		Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DismantleDestroyData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr);
		DismantleDestroyData.NativeFieldInfoPtr_DismantleDestroyTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr, "DismantleDestroyTime");
		DismantleDestroyData.NativeFieldInfoPtr_DismantleSequenceInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr, "DismantleSequenceInstance");
		DismantleDestroyData.NativeFieldInfoPtr_SkipDismantleTimeIfReplaced = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr, "SkipDismantleTimeIfReplaced");
		DismantleDestroyData.NativeFieldInfoPtr_WasDismantled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr, "WasDismantled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DismantleDestroyData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DismantleDestroyTime;
	private static readonly IntPtr NativeFieldInfoPtr_DismantleSequenceInstance;
	private static readonly IntPtr NativeFieldInfoPtr_SkipDismantleTimeIfReplaced;
	private static readonly IntPtr NativeFieldInfoPtr_WasDismantled;

	public float DismantleDestroyTime;

	public SequenceState DismantleSequenceInstance;

	public bool SkipDismantleTimeIfReplaced;

	public bool WasDismantled;
}
```
