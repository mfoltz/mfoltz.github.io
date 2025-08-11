---
nav_exclude: true
search_exclude: true
---

# PacketBookkeeperSystemData

```csharp
public struct PacketBookkeeperSystemData
{
	static PacketBookkeeperSystemData()
	{
		Il2CppClassPointerStore<PacketBookkeeperSystemData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "PacketBookkeeperSystemData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PacketBookkeeperSystemData>.NativeClassPtr);
		PacketBookkeeperSystemData.NativeFieldInfoPtr_PacketBookkeeperData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PacketBookkeeperSystemData>.NativeClassPtr, "PacketBookkeeperData");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PacketBookkeeperSystemData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PacketBookkeeperData;

	public PacketBookkeeperData PacketBookkeeperData;
}
```

## Server Systems

- [PacketBookkeeperSystem](/systems/server/PacketBookkeeperSystem)
