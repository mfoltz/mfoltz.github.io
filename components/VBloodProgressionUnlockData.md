---
nav_exclude: true
search_exclude: false
---

# VBloodProgressionUnlockData

```csharp
public struct VBloodProgressionUnlockData
{
	static VBloodProgressionUnlockData()
	{
		Il2CppClassPointerStore<VBloodProgressionUnlockData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "VBloodProgressionUnlockData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VBloodProgressionUnlockData>.NativeClassPtr);
		VBloodProgressionUnlockData.NativeFieldInfoPtr_UnlockSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodProgressionUnlockData>.NativeClassPtr, "UnlockSequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VBloodProgressionUnlockData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnlockSequence;

	public SequenceGUID UnlockSequence;
}
```
