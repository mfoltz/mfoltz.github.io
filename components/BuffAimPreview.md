---
nav_exclude: true
search_exclude: true
---

# BuffAimPreview

```csharp
public struct BuffAimPreview
{
	static BuffAimPreview()
	{
		Il2CppClassPointerStore<BuffAimPreview>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BuffAimPreview");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffAimPreview>.NativeClassPtr);
		BuffAimPreview.NativeFieldInfoPtr_AimPreviewPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffAimPreview>.NativeClassPtr, "AimPreviewPrefab");
		BuffAimPreview.NativeFieldInfoPtr_DataSourceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffAimPreview>.NativeClassPtr, "DataSourceGuid");
		BuffAimPreview.NativeFieldInfoPtr_AimPreviewInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffAimPreview>.NativeClassPtr, "AimPreviewInstance");
		BuffAimPreview.NativeFieldInfoPtr_ShowForNonLocal = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffAimPreview>.NativeClassPtr, "ShowForNonLocal");
		BuffAimPreview.NativeFieldInfoPtr_ShowForTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffAimPreview>.NativeClassPtr, "ShowForTarget");
		BuffAimPreview.NativeFieldInfoPtr_HideOnKeyboardMouse = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffAimPreview>.NativeClassPtr, "HideOnKeyboardMouse");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffAimPreview>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AimPreviewPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_DataSourceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_AimPreviewInstance;
	private static readonly IntPtr NativeFieldInfoPtr_ShowForNonLocal;
	private static readonly IntPtr NativeFieldInfoPtr_ShowForTarget;
	private static readonly IntPtr NativeFieldInfoPtr_HideOnKeyboardMouse;

	public PrefabGUID AimPreviewPrefab;

	public PrefabGUID DataSourceGuid;

	public Entity AimPreviewInstance;

	public bool ShowForNonLocal;

	public bool ShowForTarget;

	public bool HideOnKeyboardMouse;
}
```

## Client Systems

- [BuffAimPreviewDestroySystem](/systems/client/BuffAimPreviewDestroySystem)
- [BuffAimPreviewSpawnSystem](/systems/client/BuffAimPreviewSpawnSystem)
