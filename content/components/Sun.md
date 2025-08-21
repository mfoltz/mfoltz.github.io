---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Sun
{
	static Sun()
	{
		Il2CppClassPointerStore<Sun>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Sun");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Sun>.NativeClassPtr);
		Sun.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Sun>.NativeClassPtr, "Rotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Sun>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;

	public float3 Rotation;
}
```

## Server Systems

- [CheckInSunSystem]({{% relref "systems/server/CheckInSunSystem.md" %}})
- [ShowSunDamageRaysSystem]({{% relref "systems/server/ShowSunDamageRaysSystem.md" %}})
- [SunSystem]({{% relref "systems/server/SunSystem.md" %}})

## Client Systems

- [CheckInSunSystem]({{% relref "systems/client/CheckInSunSystem.md" %}})
- [ShowProjectedSunblockerSystem]({{% relref "systems/client/ShowProjectedSunblockerSystem.md" %}})
