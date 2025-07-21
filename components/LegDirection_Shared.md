---
nav_exclude: true
search_exclude: false
---

# LegDirection_Shared

```csharp
public struct LegDirection_Shared
{
	static LegDirection_Shared()
	{
		Il2CppClassPointerStore<LegDirection_Shared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "LegDirection_Shared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LegDirection_Shared>.NativeClassPtr);
		LegDirection_Shared.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegDirection_Shared>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LegDirection_Shared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float2 Value;
}
```

## Client Systems

- [HybridLegDirectionSystem](/systems/client/HybridLegDirectionSystem)
