---
nav_exclude: true
search_exclude: true
---

```csharp
public struct EntitiesGraphicsBatchPartition
{
	static EntitiesGraphicsBatchPartition()
	{
		Il2CppClassPointerStore<EntitiesGraphicsBatchPartition>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "EntitiesGraphicsBatchPartition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntitiesGraphicsBatchPartition>.NativeClassPtr);
		EntitiesGraphicsBatchPartition.NativeFieldInfoPtr_PartitionValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntitiesGraphicsBatchPartition>.NativeClassPtr, "PartitionValue");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntitiesGraphicsBatchPartition>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PartitionValue;

	public ulong PartitionValue;
}
```
