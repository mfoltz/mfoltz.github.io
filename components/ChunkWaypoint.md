---
nav_exclude: true
search_exclude: true
---

# ChunkWaypoint

```csharp
public struct ChunkWaypoint
{
	static ChunkWaypoint()
	{
		Il2CppClassPointerStore<ChunkWaypoint>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ChunkWaypoint");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkWaypoint>.NativeClassPtr);
		ChunkWaypoint.NativeFieldInfoPtr_DefaultUnlocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWaypoint>.NativeClassPtr, "DefaultUnlocked");
		ChunkWaypoint.NativeFieldInfoPtr_IsLocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWaypoint>.NativeClassPtr, "IsLocked");
		ChunkWaypoint.NativeFieldInfoPtr_CustomTeleportBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWaypoint>.NativeClassPtr, "CustomTeleportBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkWaypoint>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DefaultUnlocked;
	private static readonly IntPtr NativeFieldInfoPtr_IsLocked;
	private static readonly IntPtr NativeFieldInfoPtr_CustomTeleportBuff;

	public bool DefaultUnlocked;

	public bool IsLocked;

	public PrefabGUID CustomTeleportBuff;
}
```
