---
nav_exclude: true
search_exclude: false
---

# TraderSpawnData

```csharp
public struct TraderSpawnData
{
	static TraderSpawnData()
	{
		Il2CppClassPointerStore<TraderSpawnData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TraderSpawnData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TraderSpawnData>.NativeClassPtr);
		TraderSpawnData.NativeFieldInfoPtr_RestockTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderSpawnData>.NativeClassPtr, "RestockTime");
		TraderSpawnData.NativeFieldInfoPtr_PrevRestockTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderSpawnData>.NativeClassPtr, "PrevRestockTime");
		TraderSpawnData.NativeFieldInfoPtr_NextRestockTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderSpawnData>.NativeClassPtr, "NextRestockTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TraderSpawnData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RestockTime;
	private static readonly IntPtr NativeFieldInfoPtr_PrevRestockTime;
	private static readonly IntPtr NativeFieldInfoPtr_NextRestockTime;

	public float RestockTime;

	public double PrevRestockTime;

	public double NextRestockTime;
}
```

## Server Systems

- [TraderSyncSystem](/systems/server/TraderSyncSystem)
