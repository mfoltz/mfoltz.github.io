---
nav_exclude: true
search_exclude: true
---

```csharp
public struct UserFocusPoint
{
	static UserFocusPoint()
	{
		Il2CppClassPointerStore<UserFocusPoint>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UserFocusPoint");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserFocusPoint>.NativeClassPtr);
		UserFocusPoint.NativeFieldInfoPtr_ExpectedUserFocusPoint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserFocusPoint>.NativeClassPtr, "ExpectedUserFocusPoint");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserFocusPoint>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ExpectedUserFocusPoint;

	public float3 ExpectedUserFocusPoint;
}
```

## Client Systems

- [GameplayInputSystem]({{% relref "systems/client/GameplayInputSystem.md" %}})
