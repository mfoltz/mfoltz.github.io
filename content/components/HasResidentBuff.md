---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HasResidentBuff
{
	static HasResidentBuff()
	{
		Il2CppClassPointerStore<HasResidentBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "HasResidentBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HasResidentBuff>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HasResidentBuff>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [HasResidentBuffDestroySystem_Shared]({{% relref "systems/server/HasResidentBuffDestroySystem_Shared.md" %}})
- [InsideBuffDestroySystem_Shared]({{% relref "systems/server/InsideBuffDestroySystem_Shared.md" %}})

## Client Systems

- [HasResidentBuffDestroySystem_Shared]({{% relref "systems/client/HasResidentBuffDestroySystem_Shared.md" %}})
