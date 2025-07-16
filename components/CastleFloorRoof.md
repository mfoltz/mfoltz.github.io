# CastleFloorRoof

```csharp
[StructLayout(2)]
public struct CastleFloorRoof
{
	static CastleFloorRoof()
	{
		Il2CppClassPointerStore<CastleFloorRoof>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleFloorRoof");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleFloorRoof>.NativeClassPtr);
		CastleFloorRoof.NativeFieldInfoPtr_RoofEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloorRoof>.NativeClassPtr, "RoofEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleFloorRoof>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RoofEntity;
	[FieldOffset(0)]
	public NetworkedEntity RoofEntity;
}
