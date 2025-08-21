---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastleHeartPhased
{
	static CastleHeartPhased()
	{
		Il2CppClassPointerStore<CastleHeartPhased>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleHeartPhased");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleHeartPhased>.NativeClassPtr);
		CastleHeartPhased.NativeFieldInfoPtr_LastPlayerCharacter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartPhased>.NativeClassPtr, "LastPlayerCharacter");
		CastleHeartPhased.NativeFieldInfoPtr_InactivityDestroyTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartPhased>.NativeClassPtr, "InactivityDestroyTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleHeartPhased>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastPlayerCharacter;
	private static readonly IntPtr NativeFieldInfoPtr_InactivityDestroyTime;

	public NetworkedEntity LastPlayerCharacter;

	public double InactivityDestroyTime;
}
```
