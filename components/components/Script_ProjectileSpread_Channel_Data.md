---
nav_exclude: true
search_exclude: true
---

# Script_ProjectileSpread_Channel_Data

```csharp
[StructLayout(2)]
public struct Script_ProjectileSpread_Channel_Data
{
	static Script_ProjectileSpread_Channel_Data()
	{
		Il2CppClassPointerStore<Script_ProjectileSpread_Channel_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ProjectileSpread_Channel_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ProjectileSpread_Channel_Data>.NativeClassPtr);
		Script_ProjectileSpread_Channel_Data.NativeFieldInfoPtr_Angle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProjectileSpread_Channel_Data>.NativeClassPtr, "Angle");
		Script_ProjectileSpread_Channel_Data.NativeFieldInfoPtr_CustomDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProjectileSpread_Channel_Data>.NativeClassPtr, "CustomDuration");
		Script_ProjectileSpread_Channel_Data.NativeFieldInfoPtr_Projectile = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProjectileSpread_Channel_Data>.NativeClassPtr, "Projectile");
		Script_ProjectileSpread_Channel_Data.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProjectileSpread_Channel_Data>.NativeClassPtr, "Count");
		Script_ProjectileSpread_Channel_Data.NativeFieldInfoPtr_ProjectilesSpawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProjectileSpread_Channel_Data>.NativeClassPtr, "ProjectilesSpawned");
		Script_ProjectileSpread_Channel_Data.NativeFieldInfoPtr_Curve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProjectileSpread_Channel_Data>.NativeClassPtr, "Curve");
		Script_ProjectileSpread_Channel_Data.NativeFieldInfoPtr_UseCustomDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ProjectileSpread_Channel_Data>.NativeClassPtr, "UseCustomDuration");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ProjectileSpread_Channel_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Angle;
	private static readonly IntPtr NativeFieldInfoPtr_CustomDuration;
	private static readonly IntPtr NativeFieldInfoPtr_Projectile;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	private static readonly IntPtr NativeFieldInfoPtr_ProjectilesSpawned;
	private static readonly IntPtr NativeFieldInfoPtr_Curve;
	private static readonly IntPtr NativeFieldInfoPtr_UseCustomDuration;
	[FieldOffset(0)]
	public float Angle;
	[FieldOffset(4)]
	public float CustomDuration;
	[FieldOffset(8)]
	public PrefabGUID Projectile;
	[FieldOffset(12)]
	public int Count;
	[FieldOffset(16)]
	public int ProjectilesSpawned;
	[FieldOffset(20)]
	public CurveReference Curve;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool UseCustomDuration;
}
