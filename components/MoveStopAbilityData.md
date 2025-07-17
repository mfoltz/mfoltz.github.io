---
nav_exclude: true
search_exclude: true
---

# MoveStopAbilityData

```csharp
[StructLayout(2)]
public struct MoveStopAbilityData
{
	static MoveStopAbilityData()
	{
		Il2CppClassPointerStore<MoveStopAbilityData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MoveStopAbilityData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoveStopAbilityData>.NativeClassPtr);
		MoveStopAbilityData.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveStopAbilityData>.NativeClassPtr, "Radius");
		MoveStopAbilityData.NativeFieldInfoPtr_UnitAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveStopAbilityData>.NativeClassPtr, "UnitAngle");
		MoveStopAbilityData.NativeFieldInfoPtr_ResourceAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveStopAbilityData>.NativeClassPtr, "ResourceAngle");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoveStopAbilityData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_UnitAngle;
	private static readonly IntPtr NativeFieldInfoPtr_ResourceAngle;
	[FieldOffset(0)]
	public float Radius;
	[FieldOffset(4)]
	public float UnitAngle;
	[FieldOffset(8)]
	public float ResourceAngle;
}
