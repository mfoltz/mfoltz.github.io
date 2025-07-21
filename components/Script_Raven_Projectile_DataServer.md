---
nav_exclude: true
search_exclude: false
---

# Script_Raven_Projectile_DataServer

```csharp
public struct Script_Raven_Projectile_DataServer
{
	static Script_Raven_Projectile_DataServer()
	{
		Il2CppClassPointerStore<Script_Raven_Projectile_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Raven_Projectile_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Raven_Projectile_DataServer>.NativeClassPtr);
		Script_Raven_Projectile_DataServer.NativeFieldInfoPtr_SpellDamage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Raven_Projectile_DataServer>.NativeClassPtr, "SpellDamage");
		Script_Raven_Projectile_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Raven_Projectile_DataServer>.NativeClassPtr, "Radius");
		Script_Raven_Projectile_DataServer.NativeFieldInfoPtr_Ticks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Raven_Projectile_DataServer>.NativeClassPtr, "Ticks");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Raven_Projectile_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellDamage;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_Ticks;

	public float SpellDamage;

	public float Radius;

	public int Ticks;
}
```
