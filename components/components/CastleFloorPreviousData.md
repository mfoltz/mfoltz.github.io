---
nav_exclude: true
search_exclude: true
---

# CastleFloorPreviousData

```csharp
[StructLayout(2)]
public struct CastleFloorPreviousData
{
	static CastleFloorPreviousData()
	{
		Il2CppClassPointerStore<CastleFloorPreviousData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleFloorPreviousData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleFloorPreviousData>.NativeClassPtr);
		CastleFloorPreviousData.NativeFieldInfoPtr_CastleFloor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloorPreviousData>.NativeClassPtr, "CastleFloor");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleFloorPreviousData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastleFloor;
	[FieldOffset(0)]
	public CastleFloor CastleFloor;
}
