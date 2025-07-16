# BuffAimPreview

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public PrefabGUID AimPreviewPrefab;
	[FieldOffset(4)]
	public PrefabGUID DataSourceGuid;
	[FieldOffset(8)]
	public Entity AimPreviewInstance;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool ShowForNonLocal;
	[FieldOffset(17)]
	[MarshalAs(4)]
	public bool ShowForTarget;
	[FieldOffset(18)]
	[MarshalAs(4)]
	public bool HideOnKeyboardMouse;
}
