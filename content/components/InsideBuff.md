---
nav_exclude: true
search_exclude: true
---

```csharp
public struct InsideBuff
{
	static InsideBuff()
	{
		Il2CppClassPointerStore<InsideBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "InsideBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InsideBuff>.NativeClassPtr);
		InsideBuff.NativeFieldInfoPtr_ExitBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InsideBuff>.NativeClassPtr, "ExitBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InsideBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ExitBuff;

	public PrefabGUID ExitBuff;
}
```

## Server Systems

- [HasResidentBuffDestroySystem_Shared]({{% relref "systems/server/HasResidentBuffDestroySystem_Shared.md" %}})
- [InsideBuffDestroySystem_Shared]({{% relref "systems/server/InsideBuffDestroySystem_Shared.md" %}})
- [InsideSystem_Server]({{% relref "systems/server/InsideSystem_Server.md" %}})
- [SleepInsideSystem]({{% relref "systems/server/SleepInsideSystem.md" %}})

## Client Systems

- [HasResidentBuffDestroySystem_Shared]({{% relref "systems/client/HasResidentBuffDestroySystem_Shared.md" %}})
