---
nav_exclude: true
search_exclude: true
---

# HapticEvent

```csharp
[StructLayout(2)]
public struct HapticEvent
{
	static HapticEvent()
	{
		Il2CppClassPointerStore<HapticEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Haptics", "HapticEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HapticEvent>.NativeClassPtr);
		HapticEvent.NativeFieldInfoPtr_EventPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HapticEvent>.NativeClassPtr, "EventPrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HapticEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventPrefab;
	[FieldOffset(0)]
	public PrefabGUID EventPrefab;
}
