---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_Blood_CrimsonBeam_HitElement
{
	static Script_Blood_CrimsonBeam_HitElement()
	{
		Il2CppClassPointerStore<Script_Blood_CrimsonBeam_HitElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Blood_CrimsonBeam_HitElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_HitElement>.NativeClassPtr);
		Script_Blood_CrimsonBeam_HitElement.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_HitElement>.NativeClassPtr, "Entity");
		Script_Blood_CrimsonBeam_HitElement.NativeFieldInfoPtr_TimeHit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_HitElement>.NativeClassPtr, "TimeHit");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_HitElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_TimeHit;

	public Entity Entity;

	public float TimeHit;
}
```
