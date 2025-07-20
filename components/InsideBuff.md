---
nav_exclude: true
search_exclude: true
---

# InsideBuff

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

- [HasResidentBuffDestroySystem_Shared](/systems/server/HasResidentBuffDestroySystem_Shared)
- [InsideBuffDestroySystem_Shared](/systems/server/InsideBuffDestroySystem_Shared)
- [InsideSystem_Server](/systems/server/InsideSystem_Server)
- [SleepInsideSystem](/systems/server/SleepInsideSystem)

## Client Systems

- [HasResidentBuffDestroySystem_Shared](/systems/client/HasResidentBuffDestroySystem_Shared)
