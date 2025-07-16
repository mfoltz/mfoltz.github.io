# CastleTerritoryOccupant

```csharp
[StructLayout(2)]
public struct CastleTerritoryOccupant
{
	static CastleTerritoryOccupant()
	{
		Il2CppClassPointerStore<CastleTerritoryOccupant>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleTerritoryOccupant");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleTerritoryOccupant>.NativeClassPtr);
		CastleTerritoryOccupant.NativeFieldInfoPtr_Team = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTerritoryOccupant>.NativeClassPtr, "Team");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleTerritoryOccupant>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Team;
	[FieldOffset(0)]
	public int Team;
}
