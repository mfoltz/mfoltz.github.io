---
nav_exclude: true
search_exclude: true
---

# ZoomModifierArea

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public double LerpDuration;
	[FieldOffset(8)]
	public float Weight;
	[FieldOffset(12)]
	public float Radius;
	[FieldOffset(16)]
	public float KeepZoomBonusDistance;
	[FieldOffset(20)]
	public float MinZoomBonus;
	[FieldOffset(24)]
	public float MaxZoomBonus;
	[FieldOffset(28)]
	public float MinPitchBonus;
	[FieldOffset(32)]
	public float MaxPitchBonus;
	[FieldOffset(36)]
	public int Importance;
	[FieldOffset(40)]
	[MarshalAs(4)]
	public bool ActiveOnLocalCharacter;
}
