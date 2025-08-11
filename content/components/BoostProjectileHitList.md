---
nav_exclude: true
search_exclude: true
---

# BoostProjectileHitList

```csharp
public struct BoostProjectileHitList
{
	static BoostProjectileHitList()
	{
		Il2CppClassPointerStore<BoostProjectileHitList>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BoostProjectileHitList");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BoostProjectileHitList>.NativeClassPtr);
		BoostProjectileHitList.NativeFieldInfoPtr_TimeHit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoostProjectileHitList>.NativeClassPtr, "TimeHit");
		BoostProjectileHitList.NativeFieldInfoPtr_HitEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BoostProjectileHitList>.NativeClassPtr, "HitEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BoostProjectileHitList>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeHit;
	private static readonly IntPtr NativeFieldInfoPtr_HitEntity;

	public double TimeHit;

	public Entity HitEntity;
}
```
