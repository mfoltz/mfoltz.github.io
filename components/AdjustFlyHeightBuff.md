---
nav_exclude: true
search_exclude: true
---

# AdjustFlyHeightBuff

```csharp
public struct AdjustFlyHeightBuff
{
	static AdjustFlyHeightBuff()
	{
		Il2CppClassPointerStore<AdjustFlyHeightBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AdjustFlyHeightBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdjustFlyHeightBuff>.NativeClassPtr);
		AdjustFlyHeightBuff.NativeFieldInfoPtr_Height = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdjustFlyHeightBuff>.NativeClassPtr, "Height");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdjustFlyHeightBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Height;

	public float Height;
}
```

## Server Systems

- [Apply_BuffModificationsSystem_Server](/systems/server/Apply_BuffModificationsSystem_Server)
- [Destroy_BuffModificationsSystem_Server](/systems/server/Destroy_BuffModificationsSystem_Server)
