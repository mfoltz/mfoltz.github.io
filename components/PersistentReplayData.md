---
nav_exclude: true
search_exclude: true
---

# PersistentReplayData

```csharp
public struct PersistentReplayData
{
	static PersistentReplayData()
	{
		Il2CppClassPointerStore<PersistentReplayData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "PersistentReplayData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PersistentReplayData>.NativeClassPtr);
		PersistentReplayData.NativeFieldInfoPtr_TimeScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PersistentReplayData>.NativeClassPtr, "TimeScale");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PersistentReplayData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeScale;

	public float TimeScale;
}
```
