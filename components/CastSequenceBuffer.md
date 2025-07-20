---
nav_exclude: true
search_exclude: true
---

# CastSequenceBuffer

```csharp
public struct CastSequenceBuffer
{
	static CastSequenceBuffer()
	{
		Il2CppClassPointerStore<CastSequenceBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CastSequenceBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastSequenceBuffer>.NativeClassPtr);
		CastSequenceBuffer.NativeFieldInfoPtr_CastSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastSequenceBuffer>.NativeClassPtr, "CastSequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastSequenceBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastSequence;

	public SequenceState CastSequence;
}
```
