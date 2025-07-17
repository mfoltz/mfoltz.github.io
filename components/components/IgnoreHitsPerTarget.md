---
nav_exclude: true
search_exclude: true
---

# IgnoreHitsPerTarget

```csharp
[StructLayout(2)]
public struct IgnoreHitsPerTarget
{
	static IgnoreHitsPerTarget()
	{
		Il2CppClassPointerStore<IgnoreHitsPerTarget>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "IgnoreHitsPerTarget");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<IgnoreHitsPerTarget>.NativeClassPtr);
		IgnoreHitsPerTarget.NativeFieldInfoPtr_HitResetTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IgnoreHitsPerTarget>.NativeClassPtr, "HitResetTimer");
		IgnoreHitsPerTarget.NativeFieldInfoPtr_ReductionModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<IgnoreHitsPerTarget>.NativeClassPtr, "ReductionModifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<IgnoreHitsPerTarget>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HitResetTimer;
	private static readonly IntPtr NativeFieldInfoPtr_ReductionModifier;
	[FieldOffset(0)]
	public float HitResetTimer;
	[FieldOffset(4)]
	public float ReductionModifier;
}
