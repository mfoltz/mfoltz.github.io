---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DestroyWhenSequenceIsDestroyed
{
	static DestroyWhenSequenceIsDestroyed()
	{
		Il2CppClassPointerStore<DestroyWhenSequenceIsDestroyed>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DestroyWhenSequenceIsDestroyed");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyWhenSequenceIsDestroyed>.NativeClassPtr);
		DestroyWhenSequenceIsDestroyed.NativeFieldInfoPtr_Sequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyWhenSequenceIsDestroyed>.NativeClassPtr, "Sequence");
		DestroyWhenSequenceIsDestroyed.NativeFieldInfoPtr_TimeWhenNoLongerAllowedToBeAlive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyWhenSequenceIsDestroyed>.NativeClassPtr, "TimeWhenNoLongerAllowedToBeAlive");
		DestroyWhenSequenceIsDestroyed.NativeFieldInfoPtr_TimeSpawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyWhenSequenceIsDestroyed>.NativeClassPtr, "TimeSpawned");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyWhenSequenceIsDestroyed>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Sequence;
	private static readonly IntPtr NativeFieldInfoPtr_TimeWhenNoLongerAllowedToBeAlive;
	private static readonly IntPtr NativeFieldInfoPtr_TimeSpawned;

	public SequenceState Sequence;

	public double TimeWhenNoLongerAllowedToBeAlive;

	public double TimeSpawned;
}
```

## Server Systems

- [DestroyWhenSequenceIsDestroyedSystem]({{% relref "systems/server/DestroyWhenSequenceIsDestroyedSystem.md" %}})

## Client Systems

- [DestroyWhenSequenceIsDestroyedSystem]({{% relref "systems/client/DestroyWhenSequenceIsDestroyedSystem.md" %}})
