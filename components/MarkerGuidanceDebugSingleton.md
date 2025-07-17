---
nav_exclude: true
search_exclude: true
---

# MarkerGuidanceDebugSingleton

```csharp
[StructLayout(2)]
public struct MarkerGuidanceDebugSingleton
{
	static MarkerGuidanceDebugSingleton()
	{
		Il2CppClassPointerStore<MarkerGuidanceDebugSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MarkerGuidanceDebugSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MarkerGuidanceDebugSingleton>.NativeClassPtr);
		MarkerGuidanceDebugSingleton.NativeFieldInfoPtr_Enabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MarkerGuidanceDebugSingleton>.NativeClassPtr, "Enabled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MarkerGuidanceDebugSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Enabled;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool Enabled;
}
