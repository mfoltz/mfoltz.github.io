---
nav_exclude: true
search_exclude: true
---

# MapZoneData

```csharp
public struct MapZoneData
{
	static MapZoneData()
	{
		Il2CppClassPointerStore<MapZoneData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "MapZoneData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr);
		MapZoneData.NativeFieldInfoPtr_MaxVertices = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "MaxVertices");
		MapZoneData.NativeFieldInfoPtr_MaxDiscoveries = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "MaxDiscoveries");
		MapZoneData.NativeFieldInfoPtr_ZoneFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "ZoneFlags");
		MapZoneData.NativeFieldInfoPtr_ZoneIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "ZoneIndex");
		MapZoneData.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "Name");
		MapZoneData.NativeFieldInfoPtr_Description = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "Description");
		MapZoneData.NativeFieldInfoPtr_LoreText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "LoreText");
		MapZoneData.NativeFieldInfoPtr_Color = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "Color");
		MapZoneData.NativeFieldInfoPtr_ChunkCoordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "ChunkCoordinate");
		MapZoneData.NativeFieldInfoPtr_ServantMissionAsset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "ServantMissionAsset");
		MapZoneData.NativeFieldInfoPtr_BiomeColorAsset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "BiomeColorAsset");
		MapZoneData.NativeFieldInfoPtr_CenterPosWS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "CenterPosWS");
		MapZoneData.NativeFieldInfoPtr_AspectRatio = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "AspectRatio");
		MapZoneData.NativeFieldInfoPtr_MaxUV = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "MaxUV");
		MapZoneData.NativeFieldInfoPtr_MinUV = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "MinUV");
		MapZoneData.NativeFieldInfoPtr_TextureDataIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, "TextureDataIndex");
		MapZoneData.NativeMethodInfoPtr_get_ZoneId_Public_get_MapZoneId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, 100668644);
	}
	public unsafe MapZoneId ZoneId
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MapZoneData.NativeMethodInfoPtr_get_ZoneId_Public_get_MapZoneId_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapZoneData>.NativeClassPtr, ref this));
	}
	public unsafe static int MaxVertices
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(MapZoneData.NativeFieldInfoPtr_MaxVertices, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(MapZoneData.NativeFieldInfoPtr_MaxVertices, (void*)(&value));
		}
	}
	public unsafe static int MaxDiscoveries
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(MapZoneData.NativeFieldInfoPtr_MaxDiscoveries, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(MapZoneData.NativeFieldInfoPtr_MaxDiscoveries, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxVertices;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDiscoveries;
	private static readonly IntPtr NativeFieldInfoPtr_ZoneFlags;
	private static readonly IntPtr NativeFieldInfoPtr_ZoneIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_Description;
	private static readonly IntPtr NativeFieldInfoPtr_LoreText;
	private static readonly IntPtr NativeFieldInfoPtr_Color;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkCoordinate;
	private static readonly IntPtr NativeFieldInfoPtr_ServantMissionAsset;
	private static readonly IntPtr NativeFieldInfoPtr_BiomeColorAsset;
	private static readonly IntPtr NativeFieldInfoPtr_CenterPosWS;
	private static readonly IntPtr NativeFieldInfoPtr_AspectRatio;
	private static readonly IntPtr NativeFieldInfoPtr_MaxUV;
	private static readonly IntPtr NativeFieldInfoPtr_MinUV;
	private static readonly IntPtr NativeFieldInfoPtr_TextureDataIndex;
	private static readonly IntPtr NativeMethodInfoPtr_get_ZoneId_Public_get_MapZoneId_0;

	public MapZoneFlags ZoneFlags;

	public byte ZoneIndex;

	public LocalizationKey Name;

	public LocalizationKey Description;

	public LocalizationKey LoreText;

	public Color Color;

	public TerrainChunk ChunkCoordinate;

	public PrefabGUID ServantMissionAsset;

	public PrefabGUID BiomeColorAsset;

	public float2 CenterPosWS;

	public float2 AspectRatio;

	public float2 MaxUV;

	public float2 MinUV;

	public int TextureDataIndex;
}
```
