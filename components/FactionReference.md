---
nav_exclude: true
search_exclude: true
---

# FactionReference

```csharp
public struct FactionReference
{
	static FactionReference()
	{
		Il2CppClassPointerStore<FactionReference>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "FactionReference");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FactionReference>.NativeClassPtr);
		FactionReference.NativeFieldInfoPtr_FactionGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FactionReference>.NativeClassPtr, "FactionGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FactionReference>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FactionGuid;

	public ModifiablePrefabGUID FactionGuid;
}
```
