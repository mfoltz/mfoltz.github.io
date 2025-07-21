---
nav_exclude: true
search_exclude: false
---

# CursorPosition

```csharp
public struct CursorPosition
{
	static CursorPosition()
	{
		Il2CppClassPointerStore<CursorPosition>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CursorPosition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CursorPosition>.NativeClassPtr);
		CursorPosition.NativeFieldInfoPtr_ScreenPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CursorPosition>.NativeClassPtr, "ScreenPosition");
		CursorPosition.NativeFieldInfoPtr_ViewPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CursorPosition>.NativeClassPtr, "ViewPosition");
		CursorPosition.NativeFieldInfoPtr_WorldPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CursorPosition>.NativeClassPtr, "WorldPosition");
		CursorPosition.NativeFieldInfoPtr_WorldPositionPlayerPlane = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CursorPosition>.NativeClassPtr, "WorldPositionPlayerPlane");
		CursorPosition.NativeFieldInfoPtr_WorldPositionPlayerPlaneProjection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CursorPosition>.NativeClassPtr, "WorldPositionPlayerPlaneProjection");
		CursorPosition.NativeFieldInfoPtr_WorldPositionPlayerPlaneTerrainProjection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CursorPosition>.NativeClassPtr, "WorldPositionPlayerPlaneTerrainProjection");
		CursorPosition.NativeFieldInfoPtr_WorldPositionFilterByHeightLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CursorPosition>.NativeClassPtr, "WorldPositionFilterByHeightLevel");
		CursorPosition.NativeFieldInfoPtr_GAMEPAD_EDGE_MARGIN = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CursorPosition>.NativeClassPtr, "GAMEPAD_EDGE_MARGIN");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CursorPosition>.NativeClassPtr, ref this));
	}
	public unsafe static float GAMEPAD_EDGE_MARGIN
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(CursorPosition.NativeFieldInfoPtr_GAMEPAD_EDGE_MARGIN, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(CursorPosition.NativeFieldInfoPtr_GAMEPAD_EDGE_MARGIN, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_ScreenPosition;
	private static readonly IntPtr NativeFieldInfoPtr_ViewPosition;
	private static readonly IntPtr NativeFieldInfoPtr_WorldPosition;
	private static readonly IntPtr NativeFieldInfoPtr_WorldPositionPlayerPlane;
	private static readonly IntPtr NativeFieldInfoPtr_WorldPositionPlayerPlaneProjection;
	private static readonly IntPtr NativeFieldInfoPtr_WorldPositionPlayerPlaneTerrainProjection;
	private static readonly IntPtr NativeFieldInfoPtr_WorldPositionFilterByHeightLevel;
	private static readonly IntPtr NativeFieldInfoPtr_GAMEPAD_EDGE_MARGIN;

	public float2 ScreenPosition;

	public float2 ViewPosition;

	public float3 WorldPosition;

	public float3 WorldPositionPlayerPlane;

	public float3 WorldPositionPlayerPlaneProjection;

	public float3 WorldPositionPlayerPlaneTerrainProjection;

	public float3 WorldPositionFilterByHeightLevel;
}
```

## Client Systems

- [BuildModeInputSystem](/systems/client/BuildModeInputSystem)
- [ClientSequencerConsoleCommandSystem](/systems/client/ClientSequencerConsoleCommandSystem)
- [CursorPositionSystem](/systems/client/CursorPositionSystem)
- [DrawCastleTerritorySystem](/systems/client/DrawCastleTerritorySystem)
- [GameplayInputSystem](/systems/client/GameplayInputSystem)
- [PickingSystem](/systems/client/PickingSystem)
- [PlayerTeleportCommandSystem](/systems/client/PlayerTeleportCommandSystem)
- [ShowLineOfSightTileSystem](/systems/client/ShowLineOfSightTileSystem)
- [ShowSurfaceFluffSystem](/systems/client/ShowSurfaceFluffSystem)
- [ShowTileHeightsSystemNew](/systems/client/ShowTileHeightsSystemNew)
- [ShowTilePlacementSystem](/systems/client/ShowTilePlacementSystem)
