---
nav_exclude: true
search_exclude: true
---

# BuffOnConnectionStatusElement

```csharp
public struct BuffOnConnectionStatusElement
{
	static BuffOnConnectionStatusElement()
	{
		Il2CppClassPointerStore<BuffOnConnectionStatusElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BuffOnConnectionStatusElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffOnConnectionStatusElement>.NativeClassPtr);
		BuffOnConnectionStatusElement.NativeFieldInfoPtr_BuffPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffOnConnectionStatusElement>.NativeClassPtr, "BuffPrefabGuid");
		BuffOnConnectionStatusElement.NativeFieldInfoPtr_OnConnect = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffOnConnectionStatusElement>.NativeClassPtr, "OnConnect");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffOnConnectionStatusElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_OnConnect;

	public PrefabGUID BuffPrefabGuid;

	public bool OnConnect;
}
```
