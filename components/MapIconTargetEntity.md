---
nav_exclude: true
search_exclude: false
---

# MapIconTargetEntity

```csharp
public struct MapIconTargetEntity
{
	static MapIconTargetEntity()
	{
		Il2CppClassPointerStore<MapIconTargetEntity>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MapIconTargetEntity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapIconTargetEntity>.NativeClassPtr);
		MapIconTargetEntity.NativeFieldInfoPtr_TargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconTargetEntity>.NativeClassPtr, "TargetEntity");
		MapIconTargetEntity.NativeFieldInfoPtr_TargetNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconTargetEntity>.NativeClassPtr, "TargetNetworkId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapIconTargetEntity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_TargetNetworkId;

	public NetworkedEntity TargetEntity;

	public NetworkId TargetNetworkId;
}
```
