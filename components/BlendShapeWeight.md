---
nav_exclude: true
search_exclude: true
---

# BlendShapeWeight

```csharp
public struct BlendShapeWeight
{
	static BlendShapeWeight()
	{
		Il2CppClassPointerStore<BlendShapeWeight>.NativeClassPtr = IL2CPP.GetIl2CppClass("Rukhanka.Runtime.dll", "Rukhanka", "BlendShapeWeight");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlendShapeWeight>.NativeClassPtr);
		BlendShapeWeight.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlendShapeWeight>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BlendShapeWeight>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float Value;
}
```

## Client Systems

- [BlendShapeDeformationSystem](/systems/client/BlendShapeDeformationSystem)
