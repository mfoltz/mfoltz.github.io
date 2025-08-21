---
nav_exclude: true
search_exclude: true
---

```csharp
public struct LowHealthEffect
{
	static LowHealthEffect()
	{
		Il2CppClassPointerStore<LowHealthEffect>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "LowHealthEffect");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LowHealthEffect>.NativeClassPtr);
		LowHealthEffect.NativeFieldInfoPtr_LowHealthSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LowHealthEffect>.NativeClassPtr, "LowHealthSequenceGuid");
		LowHealthEffect.NativeFieldInfoPtr_LowHealthSequenceInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LowHealthEffect>.NativeClassPtr, "LowHealthSequenceInstance");
		LowHealthEffect.NativeFieldInfoPtr_LowHealthSequenceStartFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LowHealthEffect>.NativeClassPtr, "LowHealthSequenceStartFactor");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LowHealthEffect>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LowHealthSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_LowHealthSequenceInstance;
	private static readonly IntPtr NativeFieldInfoPtr_LowHealthSequenceStartFactor;

	public SequenceGUID LowHealthSequenceGuid;

	public SequenceState LowHealthSequenceInstance;

	public float LowHealthSequenceStartFactor;
}
```
