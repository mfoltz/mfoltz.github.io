---
nav_exclude: true
search_exclude: true
---

# AimPreviewDash

```csharp
[StructLayout(2)]
public struct AimPreviewDash
{
	static AimPreviewDash()
	{
		Il2CppClassPointerStore<AimPreviewDash>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimPreviewDash");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewDash>.NativeClassPtr);
		AimPreviewDash.NativeFieldInfoPtr_LineSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewDash>.NativeClassPtr, "LineSequenceGuid");
		AimPreviewDash.NativeFieldInfoPtr_LineSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewDash>.NativeClassPtr, "LineSequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewDash>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LineSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_LineSequenceState;
	[FieldOffset(0)]
	public SequenceGUID LineSequenceGuid;
	[FieldOffset(4)]
	public SequenceState LineSequenceState;
}
