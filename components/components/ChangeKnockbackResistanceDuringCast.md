---
nav_exclude: true
search_exclude: true
---

# ChangeKnockbackResistanceDuringCast

```csharp
[StructLayout(2)]
public struct ChangeKnockbackResistanceDuringCast
{
	static ChangeKnockbackResistanceDuringCast()
	{
		Il2CppClassPointerStore<ChangeKnockbackResistanceDuringCast>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ChangeKnockbackResistanceDuringCast");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChangeKnockbackResistanceDuringCast>.NativeClassPtr);
		ChangeKnockbackResistanceDuringCast.NativeFieldInfoPtr_KnockbackResistanceIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeKnockbackResistanceDuringCast>.NativeClassPtr, "KnockbackResistanceIndex");
		ChangeKnockbackResistanceDuringCast.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeKnockbackResistanceDuringCast>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChangeKnockbackResistanceDuringCast>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackResistanceIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;
	[FieldOffset(0)]
	public int KnockbackResistanceIndex;
	[FieldOffset(4)]
	public ModificationId ModificationId;
}
