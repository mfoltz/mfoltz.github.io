---
nav_exclude: true
search_exclude: true
---

# SpawnChainChild

```csharp
public struct SpawnChainChild
{
	static SpawnChainChild()
	{
		Il2CppClassPointerStore<SpawnChainChild>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpawnChainChild");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnChainChild>.NativeClassPtr);
		SpawnChainChild.NativeFieldInfoPtr_SpawnChain = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnChainChild>.NativeClassPtr, "SpawnChain");
		SpawnChainChild.NativeFieldInfoPtr_SpawnChainElementIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnChainChild>.NativeClassPtr, "SpawnChainElementIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnChainChild>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnChain;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnChainElementIndex;

	public Entity SpawnChain;

	public int SpawnChainElementIndex;
}
```
