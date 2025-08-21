---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AutoChainInstanceData
{
	static AutoChainInstanceData()
	{
		Il2CppClassPointerStore<AutoChainInstanceData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AutoChainInstanceData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AutoChainInstanceData>.NativeClassPtr);
		AutoChainInstanceData.NativeFieldInfoPtr_NextTransitionAttempt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AutoChainInstanceData>.NativeClassPtr, "NextTransitionAttempt");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AutoChainInstanceData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NextTransitionAttempt;

	public double NextTransitionAttempt;
}
```
