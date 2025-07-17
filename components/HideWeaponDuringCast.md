---
nav_exclude: true
search_exclude: true
---

# HideWeaponDuringCast

```csharp
[StructLayout(2)]
public struct HideWeaponDuringCast
{
	static HideWeaponDuringCast()
	{
		Il2CppClassPointerStore<HideWeaponDuringCast>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "HideWeaponDuringCast");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HideWeaponDuringCast>.NativeClassPtr);
		HideWeaponDuringCast.NativeFieldInfoPtr_CastStartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HideWeaponDuringCast>.NativeClassPtr, "CastStartTime");
		HideWeaponDuringCast.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HideWeaponDuringCast>.NativeClassPtr, "Duration");
		HideWeaponDuringCast.NativeFieldInfoPtr_CastStartCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HideWeaponDuringCast>.NativeClassPtr, "CastStartCounter");
		HideWeaponDuringCast.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HideWeaponDuringCast>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HideWeaponDuringCast>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastStartTime;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_CastStartCounter;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	[FieldOffset(0)]
	public double CastStartTime;
	[FieldOffset(8)]
	public float Duration;
	[FieldOffset(12)]
	public int CastStartCounter;
	[FieldOffset(16)]
	public HideWeaponDuringCastType Type;
}
