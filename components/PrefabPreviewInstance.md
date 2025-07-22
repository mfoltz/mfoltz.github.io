---
nav_exclude: true
search_exclude: false
---

# PrefabPreviewInstance

```csharp
public struct PrefabPreviewInstance
{
	static PrefabPreviewInstance()
	{
		Il2CppClassPointerStore<PrefabPreviewInstance>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PrefabPreviewInstance");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrefabPreviewInstance>.NativeClassPtr);
		PrefabPreviewInstance.NativeFieldInfoPtr_Instance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabPreviewInstance>.NativeClassPtr, "Instance");
		PrefabPreviewInstance.NativeFieldInfoPtr_PrefabOwnerObjectId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabPreviewInstance>.NativeClassPtr, "PrefabOwnerObjectId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrefabPreviewInstance>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Instance;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabOwnerObjectId;

	public Entity Instance;

	public int PrefabOwnerObjectId;
}
```
