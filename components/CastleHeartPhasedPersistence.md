# CastleHeartPhasedPersistence

```csharp
[StructLayout(2)]
public struct CastleHeartPhasedPersistence
{
	static CastleHeartPhasedPersistence()
	{
		Il2CppClassPointerStore<CastleHeartPhasedPersistence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleHeartPhasedPersistence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleHeartPhasedPersistence>.NativeClassPtr);
		CastleHeartPhasedPersistence.NativeFieldInfoPtr_SourceTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartPhasedPersistence>.NativeClassPtr, "SourceTerritory");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleHeartPhasedPersistence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SourceTerritory;
	[FieldOffset(0)]
	public MapZoneId SourceTerritory;
}
