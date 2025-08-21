---
nav_exclude: true
search_exclude: true
---

```csharp
public struct GallopBuffModifications
{
	static GallopBuffModifications()
	{
		Il2CppClassPointerStore<GallopBuffModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GallopBuffModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GallopBuffModifications>.NativeClassPtr);
		GallopBuffModifications.NativeFieldInfoPtr_ModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GallopBuffModifications>.NativeClassPtr, "ModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GallopBuffModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModId;

	public ModificationId ModId;
}
```
