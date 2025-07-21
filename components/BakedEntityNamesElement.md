---
nav_exclude: true
search_exclude: false
---

# BakedEntityNamesElement

```csharp
public struct BakedEntityNamesElement
{
	static BakedEntityNamesElement()
	{
		Il2CppClassPointerStore<BakedEntityNamesElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "BakedEntityNamesElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakedEntityNamesElement>.NativeClassPtr);
		BakedEntityNamesElement.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedEntityNamesElement>.NativeClassPtr, "Entity");
		BakedEntityNamesElement.NativeFieldInfoPtr_EntityName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedEntityNamesElement>.NativeClassPtr, "EntityName");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakedEntityNamesElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_EntityName;

	public Entity Entity;

	public FixedString64Bytes EntityName;
}
```
