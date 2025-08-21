---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BloodBuffModifier
{
	static BloodBuffModifier()
	{
		Il2CppClassPointerStore<BloodBuffModifier>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodBuffModifier");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuffModifier>.NativeClassPtr);
		BloodBuffModifier.NativeFieldInfoPtr_ScaleByStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffModifier>.NativeClassPtr, "ScaleByStacks");
		BloodBuffModifier.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffModifier>.NativeClassPtr, "Modifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuffModifier>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ScaleByStacks;
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;

	public bool ScaleByStacks;

	public float Modifier;
}
```
