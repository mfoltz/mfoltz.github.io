---
nav_exclude: true
search_exclude: true
---

# CastleBuildingMaxRange

```csharp
[StructLayout(2)]
public struct CastleBuildingMaxRange
{
	static CastleBuildingMaxRange()
	{
		Il2CppClassPointerStore<CastleBuildingMaxRange>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleBuildingMaxRange");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleBuildingMaxRange>.NativeClassPtr);
		CastleBuildingMaxRange.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingMaxRange>.NativeClassPtr, "MaxRange");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleBuildingMaxRange>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	[FieldOffset(0)]
	public float MaxRange;
}
