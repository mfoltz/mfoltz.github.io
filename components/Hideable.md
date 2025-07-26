---
nav_exclude: true
search_exclude: true
---

# Hideable

```csharp
public struct Hideable
{
	static Hideable()
	{
		Il2CppClassPointerStore<Hideable>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Hideable");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Hideable>.NativeClassPtr);
		Hideable.NativeFieldInfoPtr_IsHidden = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Hideable>.NativeClassPtr, "IsHidden");
		Hideable.NativeFieldInfoPtr_Visibility = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Hideable>.NativeClassPtr, "Visibility");
		Hideable.NativeFieldInfoPtr_AdditionalHideRangeSq = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Hideable>.NativeClassPtr, "AdditionalHideRangeSq");
		Hideable.NativeFieldInfoPtr_IgnoreLoS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Hideable>.NativeClassPtr, "IgnoreLoS");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Hideable>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsHidden;
	private static readonly IntPtr NativeFieldInfoPtr_Visibility;
	private static readonly IntPtr NativeFieldInfoPtr_AdditionalHideRangeSq;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreLoS;

	public bool IsHidden;

	public float Visibility;

	public float AdditionalHideRangeSq;

	public bool IgnoreLoS;
}
```

## Client Systems

- [VisibilitySystem_CopyStateFromBuffTarget](/systems/client/VisibilitySystem_CopyStateFromBuffTarget)
