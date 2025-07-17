---
nav_exclude: true
search_exclude: true
---

# SpawnPhysicsObjectOnDeath

```csharp
[StructLayout(2)]
public struct SpawnPhysicsObjectOnDeath
{
	static SpawnPhysicsObjectOnDeath()
	{
		Il2CppClassPointerStore<SpawnPhysicsObjectOnDeath>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SpawnPhysicsObjectOnDeath");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnPhysicsObjectOnDeath>.NativeClassPtr);
		SpawnPhysicsObjectOnDeath.NativeFieldInfoPtr_PhysicsObjectPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnPhysicsObjectOnDeath>.NativeClassPtr, "PhysicsObjectPrefab");
		SpawnPhysicsObjectOnDeath.NativeFieldInfoPtr_AlwaysSpawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnPhysicsObjectOnDeath>.NativeClassPtr, "AlwaysSpawn");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnPhysicsObjectOnDeath>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PhysicsObjectPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysSpawn;
	[FieldOffset(0)]
	public PrefabGUID PhysicsObjectPrefab;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool AlwaysSpawn;
}
