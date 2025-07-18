---
nav_exclude: true
search_exclude: true
---

# StudioEventUpdatePosition

```csharp
public struct StudioEventUpdatePosition
{
	static StudioEventUpdatePosition()
	{
		Il2CppClassPointerStore<StudioEventUpdatePosition>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Audio", "StudioEventUpdatePosition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StudioEventUpdatePosition>.NativeClassPtr);
		StudioEventUpdatePosition.NativeFieldInfoPtr_FollowEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEventUpdatePosition>.NativeClassPtr, "FollowEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StudioEventUpdatePosition>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FollowEntity;

	public Entity FollowEntity;
}
```

## Client Systems

- [StudioEventSystem](/systems/client/StudioEventSystem)
