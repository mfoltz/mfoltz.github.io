# CastleRoofOrnaments

```csharp
[StructLayout(2)]
public struct CastleRoofOrnaments
{
	static CastleRoofOrnaments()
	{
		Il2CppClassPointerStore<CastleRoofOrnaments>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleRoofOrnaments");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRoofOrnaments>.NativeClassPtr);
		CastleRoofOrnaments.NativeFieldInfoPtr_WestOrnament = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoofOrnaments>.NativeClassPtr, "WestOrnament");
		CastleRoofOrnaments.NativeFieldInfoPtr_EastOrnament = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoofOrnaments>.NativeClassPtr, "EastOrnament");
		CastleRoofOrnaments.NativeFieldInfoPtr_NorthOrnament = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoofOrnaments>.NativeClassPtr, "NorthOrnament");
		CastleRoofOrnaments.NativeFieldInfoPtr_SouthOrnament = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoofOrnaments>.NativeClassPtr, "SouthOrnament");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRoofOrnaments>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WestOrnament;
	private static readonly IntPtr NativeFieldInfoPtr_EastOrnament;
	private static readonly IntPtr NativeFieldInfoPtr_NorthOrnament;
	private static readonly IntPtr NativeFieldInfoPtr_SouthOrnament;
	[FieldOffset(0)]
	public NetworkedEntity WestOrnament;
	[FieldOffset(12)]
	public NetworkedEntity EastOrnament;
	[FieldOffset(24)]
	public NetworkedEntity NorthOrnament;
	[FieldOffset(36)]
	public NetworkedEntity SouthOrnament;
}
