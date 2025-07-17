---
nav_exclude: true
search_exclude: true
---

# CurrentMapZone

```csharp
[StructLayout(2)]
public struct CurrentMapZone
{
	static CurrentMapZone()
	{
		Il2CppClassPointerStore<CurrentMapZone>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CurrentMapZone");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CurrentMapZone>.NativeClassPtr);
		CurrentMapZone.NativeFieldInfoPtr_UserZoneEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentMapZone>.NativeClassPtr, "UserZoneEntity");
		CurrentMapZone.NativeFieldInfoPtr_ZoneEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentMapZone>.NativeClassPtr, "ZoneEntity");
		CurrentMapZone.NativeFieldInfoPtr_MapType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentMapZone>.NativeClassPtr, "MapType");
		CurrentMapZone.NativeFieldInfoPtr_TerrainChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentMapZone>.NativeClassPtr, "TerrainChunk");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CurrentMapZone>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UserZoneEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ZoneEntity;
	private static readonly IntPtr NativeFieldInfoPtr_MapType;
	private static readonly IntPtr NativeFieldInfoPtr_TerrainChunk;
	[FieldOffset(0)]
	public Entity UserZoneEntity;
	[FieldOffset(8)]
	public Entity ZoneEntity;
	[FieldOffset(16)]
	public MapType MapType;
	[FieldOffset(20)]
	public TerrainChunk TerrainChunk;
}
