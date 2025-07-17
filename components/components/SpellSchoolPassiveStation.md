---
nav_exclude: true
search_exclude: true
---

# SpellSchoolPassiveStation

```csharp
[StructLayout(2)]
public struct SpellSchoolPassiveStation
{
	static SpellSchoolPassiveStation()
	{
		Il2CppClassPointerStore<SpellSchoolPassiveStation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpellSchoolPassiveStation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellSchoolPassiveStation>.NativeClassPtr);
		SpellSchoolPassiveStation.NativeFieldInfoPtr_UnlockSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellSchoolPassiveStation>.NativeClassPtr, "UnlockSequenceGuid");
		SpellSchoolPassiveStation.NativeFieldInfoPtr_LearnSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellSchoolPassiveStation>.NativeClassPtr, "LearnSequenceGuid");
		SpellSchoolPassiveStation.NativeFieldInfoPtr_ShareSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellSchoolPassiveStation>.NativeClassPtr, "ShareSequenceGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellSchoolPassiveStation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnlockSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_LearnSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ShareSequenceGuid;
	[FieldOffset(0)]
	public SequenceGUID UnlockSequenceGuid;
	[FieldOffset(4)]
	public SequenceGUID LearnSequenceGuid;
	[FieldOffset(8)]
	public SequenceGUID ShareSequenceGuid;
}
