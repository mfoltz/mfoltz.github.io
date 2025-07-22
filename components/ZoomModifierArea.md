---
nav_exclude: true
search_exclude: true
---

# ZoomModifierArea

```csharp
public struct ZoomModifierArea
{
	static ZoomModifierArea()
	{
		Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ZoomModifierArea");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr);
		ZoomModifierArea.NativeFieldInfoPtr_LerpDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr, "LerpDuration");
		ZoomModifierArea.NativeFieldInfoPtr_Weight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr, "Weight");
		ZoomModifierArea.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr, "Radius");
		ZoomModifierArea.NativeFieldInfoPtr_KeepZoomBonusDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr, "KeepZoomBonusDistance");
		ZoomModifierArea.NativeFieldInfoPtr_MinZoomBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr, "MinZoomBonus");
		ZoomModifierArea.NativeFieldInfoPtr_MaxZoomBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr, "MaxZoomBonus");
		ZoomModifierArea.NativeFieldInfoPtr_MinPitchBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr, "MinPitchBonus");
		ZoomModifierArea.NativeFieldInfoPtr_MaxPitchBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr, "MaxPitchBonus");
		ZoomModifierArea.NativeFieldInfoPtr_Importance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr, "Importance");
		ZoomModifierArea.NativeFieldInfoPtr_ActiveOnLocalCharacter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr, "ActiveOnLocalCharacter");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ZoomModifierArea>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LerpDuration;
	private static readonly IntPtr NativeFieldInfoPtr_Weight;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_KeepZoomBonusDistance;
	private static readonly IntPtr NativeFieldInfoPtr_MinZoomBonus;
	private static readonly IntPtr NativeFieldInfoPtr_MaxZoomBonus;
	private static readonly IntPtr NativeFieldInfoPtr_MinPitchBonus;
	private static readonly IntPtr NativeFieldInfoPtr_MaxPitchBonus;
	private static readonly IntPtr NativeFieldInfoPtr_Importance;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveOnLocalCharacter;

	public double LerpDuration;

	public float Weight;

	public float Radius;

	public float KeepZoomBonusDistance;

	public float MinZoomBonus;

	public float MaxZoomBonus;

	public float MinPitchBonus;

	public float MaxPitchBonus;

	public int Importance;

	public bool ActiveOnLocalCharacter;
}
```

## Client Systems

- [ZoomModifierAreaSystem](/systems/client/ZoomModifierAreaSystem)
