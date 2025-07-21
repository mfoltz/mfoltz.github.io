---
nav_exclude: true
search_exclude: false
---

# HitList

```csharp
public struct HitList
{
	static HitList()
	{
		Il2CppClassPointerStore<HitList>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "HitList");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HitList>.NativeClassPtr);
		HitList.NativeFieldInfoPtr_TimeHit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitList>.NativeClassPtr, "TimeHit");
		HitList.NativeFieldInfoPtr_HitEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitList>.NativeClassPtr, "HitEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HitList>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeHit;
	private static readonly IntPtr NativeFieldInfoPtr_HitEntity;

	public double TimeHit;

	public Entity HitEntity;
}
```
