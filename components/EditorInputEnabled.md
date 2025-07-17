---
nav_exclude: true
search_exclude: true
---

# EditorInputEnabled

```csharp
public struct EditorInputEnabled
{
	static EditorInputEnabled()
	{
		Il2CppClassPointerStore<EditorInputEnabled>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "EditorInputEnabled");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditorInputEnabled>.NativeClassPtr);
		EditorInputEnabled.NativeFieldInfoPtr_CaptureMouse = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorInputEnabled>.NativeClassPtr, "CaptureMouse");
		EditorInputEnabled.NativeFieldInfoPtr_CaptureKeys = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorInputEnabled>.NativeClassPtr, "CaptureKeys");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditorInputEnabled>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CaptureMouse;
	private static readonly IntPtr NativeFieldInfoPtr_CaptureKeys;

	public bool CaptureMouse;

	public EditorInputEnabled._CaptureKeys_e__FixedBuffer CaptureKeys;

	public struct _CaptureKeys_e__FixedBuffer
	{
		static _CaptureKeys_e__FixedBuffer()
		{
			Il2CppClassPointerStore<EditorInputEnabled._CaptureKeys_e__FixedBuffer>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<EditorInputEnabled>.NativeClassPtr, "<CaptureKeys>e__FixedBuffer");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditorInputEnabled._CaptureKeys_e__FixedBuffer>.NativeClassPtr);
			EditorInputEnabled._CaptureKeys_e__FixedBuffer.NativeFieldInfoPtr_FixedElementField = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorInputEnabled._CaptureKeys_e__FixedBuffer>.NativeClassPtr, "FixedElementField");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditorInputEnabled._CaptureKeys_e__FixedBuffer>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_FixedElementField;

		public bool FixedElementField;
	}
}
```
