---
nav_exclude: true
search_exclude: true
---

# RespecStation

```csharp
public struct RespecStation
{
	static RespecStation()
	{
		Il2CppClassPointerStore<RespecStation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RespecStation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RespecStation>.NativeClassPtr);
		RespecStation.NativeFieldInfoPtr_ResetSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespecStation>.NativeClassPtr, "ResetSequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RespecStation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ResetSequence;

	public SequenceGUID ResetSequence;
}
```
