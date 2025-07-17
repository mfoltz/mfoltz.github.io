---
nav_exclude: true
search_exclude: true
---

# UnlockedProgressionElement

```csharp
[StructLayout(2)]
public struct UnlockedProgressionElement
{
	static UnlockedProgressionElement()
	{
		Il2CppClassPointerStore<UnlockedProgressionElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnlockedProgressionElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnlockedProgressionElement>.NativeClassPtr);
		UnlockedProgressionElement.NativeFieldInfoPtr_UnlockedPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedProgressionElement>.NativeClassPtr, "UnlockedPrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnlockedProgressionElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnlockedPrefab;
	[FieldOffset(0)]
	public PrefabGUID UnlockedPrefab;
}
