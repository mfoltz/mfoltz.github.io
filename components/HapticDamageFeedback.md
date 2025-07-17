---
nav_exclude: true
search_exclude: true
---

# HapticDamageFeedback

```csharp
[StructLayout(2)]
public struct HapticDamageFeedback
{
	static HapticDamageFeedback()
	{
		Il2CppClassPointerStore<HapticDamageFeedback>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Haptics.dll", "ProjectM.Haptics", "HapticDamageFeedback");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HapticDamageFeedback>.NativeClassPtr);
		HapticDamageFeedback.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HapticDamageFeedback>.NativeClassPtr, "Data");
		HapticDamageFeedback.NativeFieldInfoPtr_SunDamagePrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HapticDamageFeedback>.NativeClassPtr, "SunDamagePrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HapticDamageFeedback>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	private static readonly IntPtr NativeFieldInfoPtr_SunDamagePrefab;
	[FieldOffset(0)]
	public BlobAssetReference<HapticDamageFeedbackBlob> Data;
	[FieldOffset(8)]
	public PrefabGUID SunDamagePrefab;
}
