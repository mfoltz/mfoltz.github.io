---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SpawnGroup_SpawnTableBuffer
{
	static SpawnGroup_SpawnTableBuffer()
	{
		Il2CppClassPointerStore<SpawnGroup_SpawnTableBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM", "SpawnGroup_SpawnTableBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnGroup_SpawnTableBuffer>.NativeClassPtr);
		SpawnGroup_SpawnTableBuffer.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnGroup_SpawnTableBuffer>.NativeClassPtr, "Prefab");
		SpawnGroup_SpawnTableBuffer.NativeFieldInfoPtr_SpawnChanceWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnGroup_SpawnTableBuffer>.NativeClassPtr, "SpawnChanceWeight");
		SpawnGroup_SpawnTableBuffer.NativeFieldInfoPtr_SpawnBlockingRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnGroup_SpawnTableBuffer>.NativeClassPtr, "SpawnBlockingRadius");
		SpawnGroup_SpawnTableBuffer.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnGroup_SpawnTableBuffer>.NativeClassPtr, "Amount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnGroup_SpawnTableBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnChanceWeight;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnBlockingRadius;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;

	public PrefabGUID Prefab;

	public float SpawnChanceWeight;

	public float SpawnBlockingRadius;

	public int Amount;
}
```
