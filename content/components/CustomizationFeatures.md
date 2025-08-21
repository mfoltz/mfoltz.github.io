---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CustomizationFeatures
{
	static CustomizationFeatures()
	{
		Il2CppClassPointerStore<CustomizationFeatures>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CustomizationFeatures");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CustomizationFeatures>.NativeClassPtr);
		CustomizationFeatures.NativeFieldInfoPtr_GenderIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizationFeatures>.NativeClassPtr, "GenderIndex");
		CustomizationFeatures.NativeFieldInfoPtr_SkintoneIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizationFeatures>.NativeClassPtr, "SkintoneIndex");
		CustomizationFeatures.NativeFieldInfoPtr_FaceIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizationFeatures>.NativeClassPtr, "FaceIndex");
		CustomizationFeatures.NativeFieldInfoPtr_EyeColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizationFeatures>.NativeClassPtr, "EyeColorIndex");
		CustomizationFeatures.NativeFieldInfoPtr_HairStyleIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizationFeatures>.NativeClassPtr, "HairStyleIndex");
		CustomizationFeatures.NativeFieldInfoPtr_HairColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizationFeatures>.NativeClassPtr, "HairColorIndex");
		CustomizationFeatures.NativeFieldInfoPtr_FeaturesIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizationFeatures>.NativeClassPtr, "FeaturesIndex");
		CustomizationFeatures.NativeFieldInfoPtr_AccessoriesIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizationFeatures>.NativeClassPtr, "AccessoriesIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CustomizationFeatures>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GenderIndex;
	private static readonly IntPtr NativeFieldInfoPtr_SkintoneIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FaceIndex;
	private static readonly IntPtr NativeFieldInfoPtr_EyeColorIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HairStyleIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HairColorIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FeaturesIndex;
	private static readonly IntPtr NativeFieldInfoPtr_AccessoriesIndex;

	public byte GenderIndex;

	public byte SkintoneIndex;

	public byte FaceIndex;

	public byte EyeColorIndex;

	public byte HairStyleIndex;

	public byte HairColorIndex;

	public byte FeaturesIndex;

	public byte AccessoriesIndex;
}
```
