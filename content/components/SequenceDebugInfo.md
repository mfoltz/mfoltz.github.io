---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SequenceDebugInfo
{
	static SequenceDebugInfo()
	{
		Il2CppClassPointerStore<SequenceDebugInfo>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "Stunlock.Sequencer", "SequenceDebugInfo");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SequenceDebugInfo>.NativeClassPtr);
		SequenceDebugInfo.NativeFieldInfoPtr_SequenceDebugInfoBlob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceDebugInfo>.NativeClassPtr, "SequenceDebugInfoBlob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SequenceDebugInfo>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceDebugInfoBlob;

	public BlobAssetReference<SequenceDebugInfoBlob> SequenceDebugInfoBlob;
}
```
