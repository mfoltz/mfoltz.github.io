---
nav_exclude: true
search_exclude: true
---

```csharp
public struct StudioEventParameterBuffer
{
	static StudioEventParameterBuffer()
	{
		Il2CppClassPointerStore<StudioEventParameterBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Audio", "StudioEventParameterBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StudioEventParameterBuffer>.NativeClassPtr);
		StudioEventParameterBuffer.NativeFieldInfoPtr_ParameterName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEventParameterBuffer>.NativeClassPtr, "ParameterName");
		StudioEventParameterBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEventParameterBuffer>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StudioEventParameterBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ParameterName;
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public FixedString64Bytes ParameterName;

	public float Value;
}
```

## Client Systems

- [StudioEventSystem]({{% relref "systems/client/StudioEventSystem.md" %}})
