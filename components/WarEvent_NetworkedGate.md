---
nav_exclude: true
search_exclude: false
---

# WarEvent_NetworkedGate

```csharp
public struct WarEvent_NetworkedGate
{
	static WarEvent_NetworkedGate()
	{
		Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "WarEvent_NetworkedGate");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr);
		WarEvent_NetworkedGate.NativeFieldInfoPtr_Progress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr, "Progress");
		WarEvent_NetworkedGate.NativeFieldInfoPtr_TotalProgress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr, "TotalProgress");
		WarEvent_NetworkedGate.NativeFieldInfoPtr_Coordinates = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr, "Coordinates");
		WarEvent_NetworkedGate.NativeFieldInfoPtr_VariantIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr, "VariantIndex");
		WarEvent_NetworkedGate.NativeFieldInfoPtr_IsOpen = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr, "IsOpen");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_NetworkedGate>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Progress;
	private static readonly IntPtr NativeFieldInfoPtr_TotalProgress;
	private static readonly IntPtr NativeFieldInfoPtr_Coordinates;
	private static readonly IntPtr NativeFieldInfoPtr_VariantIndex;
	private static readonly IntPtr NativeFieldInfoPtr_IsOpen;

	public float Progress;

	public float TotalProgress;

	public int2 Coordinates;

	public byte VariantIndex;

	public bool IsOpen;
}
```

## Client Systems

- [ClientAdminConsoleCommandSystem](/systems/client/ClientAdminConsoleCommandSystem)
- [MapMenuMapper](/systems/client/MapMenuMapper)
- [MiniMapHUDSystem](/systems/client/MiniMapHUDSystem)
