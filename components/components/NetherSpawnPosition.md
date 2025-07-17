---
nav_exclude: true
search_exclude: true
---

# NetherSpawnPosition

```csharp
[StructLayout(2)]
public struct NetherSpawnPosition
{
	static NetherSpawnPosition()
	{
		Il2CppClassPointerStore<NetherSpawnPosition>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "NetherSpawnPosition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetherSpawnPosition>.NativeClassPtr);
		NetherSpawnPosition.NativeFieldInfoPtr_NetherSpawnCoffinPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetherSpawnPosition>.NativeClassPtr, "NetherSpawnCoffinPrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetherSpawnPosition>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NetherSpawnCoffinPrefab;
	[FieldOffset(0)]
	public PrefabGUID NetherSpawnCoffinPrefab;
}
