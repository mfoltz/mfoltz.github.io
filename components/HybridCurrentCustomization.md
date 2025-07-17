---
nav_exclude: true
search_exclude: true
---

# HybridCurrentCustomization

```csharp
public struct HybridCurrentCustomization
{
	static HybridCurrentCustomization()
	{
		Il2CppClassPointerStore<HybridCurrentCustomization>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "HybridCurrentCustomization");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridCurrentCustomization>.NativeClassPtr);
		HybridCurrentCustomization.NativeFieldInfoPtr_SkintoneIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentCustomization>.NativeClassPtr, "SkintoneIndex");
		HybridCurrentCustomization.NativeFieldInfoPtr_FaceIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentCustomization>.NativeClassPtr, "FaceIndex");
		HybridCurrentCustomization.NativeFieldInfoPtr_EyeColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentCustomization>.NativeClassPtr, "EyeColorIndex");
		HybridCurrentCustomization.NativeFieldInfoPtr_HairStyleIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentCustomization>.NativeClassPtr, "HairStyleIndex");
		HybridCurrentCustomization.NativeFieldInfoPtr_HairColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentCustomization>.NativeClassPtr, "HairColorIndex");
		HybridCurrentCustomization.NativeFieldInfoPtr_FeaturesIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentCustomization>.NativeClassPtr, "FeaturesIndex");
		HybridCurrentCustomization.NativeFieldInfoPtr_AccessoriesIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridCurrentCustomization>.NativeClassPtr, "AccessoriesIndex");
		HybridCurrentCustomization.NativeMethodInfoPtr_GetDefault_Public_Static_HybridCurrentCustomization_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HybridCurrentCustomization>.NativeClassPtr, 100672314);
	}

	public unsafe static HybridCurrentCustomization GetDefault()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HybridCurrentCustomization.NativeMethodInfoPtr_GetDefault_Public_Static_HybridCurrentCustomization_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridCurrentCustomization>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SkintoneIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FaceIndex;
	private static readonly IntPtr NativeFieldInfoPtr_EyeColorIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HairStyleIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HairColorIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FeaturesIndex;
	private static readonly IntPtr NativeFieldInfoPtr_AccessoriesIndex;
	private static readonly IntPtr NativeMethodInfoPtr_GetDefault_Public_Static_HybridCurrentCustomization_0;

	public int SkintoneIndex;

	public int FaceIndex;

	public int EyeColorIndex;

	public int HairStyleIndex;

	public int HairColorIndex;

	public int FeaturesIndex;

	public int AccessoriesIndex;
}
```
