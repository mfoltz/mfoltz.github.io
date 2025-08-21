---
nav_exclude: true
search_exclude: true
---

```csharp
public struct FakeTurnOffStudioListener
{
	static FakeTurnOffStudioListener()
	{
		Il2CppClassPointerStore<FakeTurnOffStudioListener>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Audio", "FakeTurnOffStudioListener");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FakeTurnOffStudioListener>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FakeTurnOffStudioListener>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [FootstepSystem]({{% relref "systems/client/FootstepSystem.md" %}})
- [StudioListenerSystem]({{% relref "systems/client/StudioListenerSystem.md" %}})
