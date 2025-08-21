---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ReplaceRandomizedSpawnChainElement
{
	static ReplaceRandomizedSpawnChainElement()
	{
		Il2CppClassPointerStore<ReplaceRandomizedSpawnChainElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ReplaceRandomizedSpawnChainElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReplaceRandomizedSpawnChainElement>.NativeClassPtr);
		ReplaceRandomizedSpawnChainElement.NativeFieldInfoPtr_RandomizedSpawnChain = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceRandomizedSpawnChainElement>.NativeClassPtr, "RandomizedSpawnChain");
		ReplaceRandomizedSpawnChainElement.NativeFieldInfoPtr_ReplacedRandomizeSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceRandomizedSpawnChainElement>.NativeClassPtr, "ReplacedRandomizeSettings");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReplaceRandomizedSpawnChainElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RandomizedSpawnChain;
	private static readonly IntPtr NativeFieldInfoPtr_ReplacedRandomizeSettings;

	public PrefabGUID RandomizedSpawnChain;

	public PrefabGUID ReplacedRandomizeSettings;
}
```
