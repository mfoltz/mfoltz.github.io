---
nav_exclude: true
search_exclude: false
---

# SequenceStressTest

```csharp
public struct SequenceStressTest
{
	static SequenceStressTest()
	{
		Il2CppClassPointerStore<SequenceStressTest>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SequenceStressTest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SequenceStressTest>.NativeClassPtr);
		SequenceStressTest.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceStressTest>.NativeClassPtr, "Name");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SequenceStressTest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Name;

	public FixedString128Bytes Name;
}
```
