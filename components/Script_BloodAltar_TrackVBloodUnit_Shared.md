---
nav_exclude: true
search_exclude: true
---

# Script_BloodAltar_TrackVBloodUnit_Shared

```csharp
public struct Script_BloodAltar_TrackVBloodUnit_Shared
{
	static Script_BloodAltar_TrackVBloodUnit_Shared()
	{
		Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Shared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Script_BloodAltar_TrackVBloodUnit_Shared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Shared>.NativeClassPtr);
		Script_BloodAltar_TrackVBloodUnit_Shared.NativeFieldInfoPtr_TrackPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Shared>.NativeClassPtr, "TrackPosition");
		Script_BloodAltar_TrackVBloodUnit_Shared.NativeFieldInfoPtr_TrackedUnit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Shared>.NativeClassPtr, "TrackedUnit");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_BloodAltar_TrackVBloodUnit_Shared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TrackPosition;
	private static readonly IntPtr NativeFieldInfoPtr_TrackedUnit;

	public float3 TrackPosition;

	public PrefabGUID TrackedUnit;
}
```
