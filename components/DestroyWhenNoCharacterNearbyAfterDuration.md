---
nav_exclude: true
search_exclude: false
---

# DestroyWhenNoCharacterNearbyAfterDuration

```csharp
public struct DestroyWhenNoCharacterNearbyAfterDuration
{
	static DestroyWhenNoCharacterNearbyAfterDuration()
	{
		Il2CppClassPointerStore<DestroyWhenNoCharacterNearbyAfterDuration>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DestroyWhenNoCharacterNearbyAfterDuration");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyWhenNoCharacterNearbyAfterDuration>.NativeClassPtr);
		DestroyWhenNoCharacterNearbyAfterDuration.NativeFieldInfoPtr_RemoveAtTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyWhenNoCharacterNearbyAfterDuration>.NativeClassPtr, "RemoveAtTime");
		DestroyWhenNoCharacterNearbyAfterDuration.NativeFieldInfoPtr_MinimumRemoveDurationIfNearby = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyWhenNoCharacterNearbyAfterDuration>.NativeClassPtr, "MinimumRemoveDurationIfNearby");
		DestroyWhenNoCharacterNearbyAfterDuration.NativeFieldInfoPtr_RandomAdditionalDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyWhenNoCharacterNearbyAfterDuration>.NativeClassPtr, "RandomAdditionalDuration");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyWhenNoCharacterNearbyAfterDuration>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RemoveAtTime;
	private static readonly IntPtr NativeFieldInfoPtr_MinimumRemoveDurationIfNearby;
	private static readonly IntPtr NativeFieldInfoPtr_RandomAdditionalDuration;

	public double RemoveAtTime;

	public float MinimumRemoveDurationIfNearby;

	public float RandomAdditionalDuration;
}
```

## Server Systems

- [DestroyWhenNoCharacterNearbyAfterDurationSystem_Spawn](/systems/server/DestroyWhenNoCharacterNearbyAfterDurationSystem_Spawn)
