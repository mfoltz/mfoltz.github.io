---
nav_exclude: true
search_exclude: true
---

# ServantBloodTypePerkElement

```csharp
public struct ServantBloodTypePerkElement
{
	static ServantBloodTypePerkElement()
	{
		Il2CppClassPointerStore<ServantBloodTypePerkElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantBloodTypePerkElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantBloodTypePerkElement>.NativeClassPtr);
		ServantBloodTypePerkElement.NativeFieldInfoPtr_BloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantBloodTypePerkElement>.NativeClassPtr, "BloodType");
		ServantBloodTypePerkElement.NativeFieldInfoPtr_Perk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantBloodTypePerkElement>.NativeClassPtr, "Perk");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantBloodTypePerkElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BloodType;
	private static readonly IntPtr NativeFieldInfoPtr_Perk;

	public PrefabGUID BloodType;

	public PrefabGUID Perk;
}
```
