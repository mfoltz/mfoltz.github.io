# TileModel_Client

```csharp
[StructLayout(2)]
public struct TileModel_Client
{
	static TileModel_Client()
	{
		Il2CppClassPointerStore<TileModel_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "TileModel_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TileModel_Client>.NativeClassPtr);
		TileModel_Client.NativeFieldInfoPtr_LastUpdatedDisabledTileTypes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TileModel_Client>.NativeClassPtr, "LastUpdatedDisabledTileTypes");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TileModel_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastUpdatedDisabledTileTypes;
	[FieldOffset(0)]
	public TileType LastUpdatedDisabledTileTypes;
}
