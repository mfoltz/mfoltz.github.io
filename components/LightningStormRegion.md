# LightningStormRegion

```csharp
[StructLayout(2)]
public struct LightningStormRegion
{
	static LightningStormRegion()
	{
		Il2CppClassPointerStore<LightningStormRegion>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.LightningStorm", "LightningStormRegion");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LightningStormRegion>.NativeClassPtr);
		LightningStormRegion.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningStormRegion>.NativeClassPtr, "Data");
		LightningStormRegion.NativeFieldInfoPtr_GameplayStrikeTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningStormRegion>.NativeClassPtr, "GameplayStrikeTimer");
		LightningStormRegion.NativeFieldInfoPtr_AmbienceStrikeTimer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningStormRegion>.NativeClassPtr, "AmbienceStrikeTimer");
		LightningStormRegion.NativeFieldInfoPtr_TypeId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LightningStormRegion>.NativeClassPtr, "TypeId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LightningStormRegion>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayStrikeTimer;
	private static readonly IntPtr NativeFieldInfoPtr_AmbienceStrikeTimer;
	private static readonly IntPtr NativeFieldInfoPtr_TypeId;
	[FieldOffset(0)]
	public BlobAssetReference<PolygonRegionBlob> Data;
	[FieldOffset(8)]
	public float GameplayStrikeTimer;
	[FieldOffset(12)]
	public float AmbienceStrikeTimer;
	[FieldOffset(16)]
	public PrefabGUID TypeId;
}
