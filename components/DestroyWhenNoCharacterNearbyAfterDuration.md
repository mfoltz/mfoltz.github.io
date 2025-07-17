---
nav_exclude: true
search_exclude: true
---

# DestroyWhenNoCharacterNearbyAfterDuration

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public double RemoveAtTime;
	[FieldOffset(8)]
	public float MinimumRemoveDurationIfNearby;
	[FieldOffset(12)]
	public float RandomAdditionalDuration;
}
