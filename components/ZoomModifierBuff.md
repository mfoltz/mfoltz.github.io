---
nav_exclude: true
search_exclude: true
---

# ZoomModifierBuff

```csharp
[StructLayout(2)]
public struct ZoomModifierBuff
{
	static ZoomModifierBuff()
	{
		Il2CppClassPointerStore<ZoomModifierBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ZoomModifierBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ZoomModifierBuff>.NativeClassPtr);
		ZoomModifierBuff.NativeFieldInfoPtr_MinZoomBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierBuff>.NativeClassPtr, "MinZoomBonus");
		ZoomModifierBuff.NativeFieldInfoPtr_MaxZoomBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierBuff>.NativeClassPtr, "MaxZoomBonus");
		ZoomModifierBuff.NativeFieldInfoPtr_MinPitchBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierBuff>.NativeClassPtr, "MinPitchBonus");
		ZoomModifierBuff.NativeFieldInfoPtr_MaxPitchBonus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierBuff>.NativeClassPtr, "MaxPitchBonus");
		ZoomModifierBuff.NativeFieldInfoPtr_Importance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ZoomModifierBuff>.NativeClassPtr, "Importance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ZoomModifierBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinZoomBonus;
	private static readonly IntPtr NativeFieldInfoPtr_MaxZoomBonus;
	private static readonly IntPtr NativeFieldInfoPtr_MinPitchBonus;
	private static readonly IntPtr NativeFieldInfoPtr_MaxPitchBonus;
	private static readonly IntPtr NativeFieldInfoPtr_Importance;
	[FieldOffset(0)]
	public float MinZoomBonus;
	[FieldOffset(4)]
	public float MaxZoomBonus;
	[FieldOffset(8)]
	public float MinPitchBonus;
	[FieldOffset(12)]
	public float MaxPitchBonus;
	[FieldOffset(16)]
	public int Importance;
}
