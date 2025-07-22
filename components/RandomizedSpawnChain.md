---
nav_exclude: true
search_exclude: true
---

# RandomizedSpawnChain

```csharp
public struct RandomizedSpawnChain
{
	static RandomizedSpawnChain()
	{
		Il2CppClassPointerStore<RandomizedSpawnChain>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RandomizedSpawnChain");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RandomizedSpawnChain>.NativeClassPtr);
		RandomizedSpawnChain.NativeFieldInfoPtr_Settings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RandomizedSpawnChain>.NativeClassPtr, "Settings");
		RandomizedSpawnChain.NativeFieldInfoPtr_Random = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RandomizedSpawnChain>.NativeClassPtr, "Random");
		RandomizedSpawnChain.NativeFieldInfoPtr_SpawnChainInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RandomizedSpawnChain>.NativeClassPtr, "SpawnChainInstance");
		RandomizedSpawnChain.NativeFieldInfoPtr_LastChildSurplusAutoChainTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RandomizedSpawnChain>.NativeClassPtr, "LastChildSurplusAutoChainTime");
		RandomizedSpawnChain.NativeFieldInfoPtr_Initialized = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RandomizedSpawnChain>.NativeClassPtr, "Initialized");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RandomizedSpawnChain>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Settings;
	private static readonly IntPtr NativeFieldInfoPtr_Random;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnChainInstance;
	private static readonly IntPtr NativeFieldInfoPtr_LastChildSurplusAutoChainTime;
	private static readonly IntPtr NativeFieldInfoPtr_Initialized;

	public PrefabGUID Settings;

	public Unity.Mathematics.Random Random;

	public Entity SpawnChainInstance;

	public double LastChildSurplusAutoChainTime;

	public bool Initialized;
}
```

## Server Systems

- [RandomizedSpawnChainDestroySystem](/systems/server/RandomizedSpawnChainDestroySystem)
- [RandomizedSpawnChainUpdateSystem](/systems/server/RandomizedSpawnChainUpdateSystem)
