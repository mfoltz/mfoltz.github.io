---
nav_exclude: true
search_exclude: true
---

```csharp
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

	public float MinZoomBonus;

	public float MaxZoomBonus;

	public float MinPitchBonus;

	public float MaxPitchBonus;

	public int Importance;
}
```

## Client Systems

- [ZoomModifierBuffSystem]({{% relref "systems/client/ZoomModifierBuffSystem.md" %}})
