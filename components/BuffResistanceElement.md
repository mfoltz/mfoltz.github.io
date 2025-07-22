---
nav_exclude: true
search_exclude: true
---

# BuffResistanceElement

```csharp
public struct BuffResistanceElement
{
	static BuffResistanceElement()
	{
		Il2CppClassPointerStore<BuffResistanceElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BuffResistanceElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffResistanceElement>.NativeClassPtr);
		BuffResistanceElement.NativeFieldInfoPtr_BuffCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffResistanceElement>.NativeClassPtr, "BuffCategory");
		BuffResistanceElement.NativeFieldInfoPtr_ModifyDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffResistanceElement>.NativeClassPtr, "ModifyDuration");
		BuffResistanceElement.NativeFieldInfoPtr_DurationModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffResistanceElement>.NativeClassPtr, "DurationModifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffResistanceElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffCategory;
	private static readonly IntPtr NativeFieldInfoPtr_ModifyDuration;
	private static readonly IntPtr NativeFieldInfoPtr_DurationModifier;

	public long BuffCategory;

	public bool ModifyDuration;

	public float DurationModifier;
}
```
