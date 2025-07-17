---
nav_exclude: true
search_exclude: true
---

# BloodHuntsData

```csharp
public struct BloodHuntsData
{
	static BloodHuntsData()
	{
		Il2CppClassPointerStore<BloodHuntsData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BloodHuntsData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodHuntsData>.NativeClassPtr);
		BloodHuntsData.NativeFieldInfoPtr_UnlockGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodHuntsData>.NativeClassPtr, "UnlockGuid");
		BloodHuntsData.NativeFieldInfoPtr_TrackPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodHuntsData>.NativeClassPtr, "TrackPrefabGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodHuntsData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnlockGuid;
	private static readonly IntPtr NativeFieldInfoPtr_TrackPrefabGuid;

	public SequenceGUID UnlockGuid;

	public PrefabGUID TrackPrefabGuid;
}
```
