---
nav_exclude: true
search_exclude: true
---

# AssetSwapState

```csharp
public struct AssetSwapState
{
	static AssetSwapState()
	{
		Il2CppClassPointerStore<AssetSwapState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.AssetSwapping", "AssetSwapState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AssetSwapState>.NativeClassPtr);
		AssetSwapState.NativeFieldInfoPtr_CurrentState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AssetSwapState>.NativeClassPtr, "CurrentState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AssetSwapState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentState;

	public AssetSwapFlags CurrentState;
}
```

## Server Systems

- [AssetSwappingSystem](/systems/server/AssetSwappingSystem)

## Client Systems

- [AssetSwappingSystem](/systems/client/AssetSwappingSystem)
