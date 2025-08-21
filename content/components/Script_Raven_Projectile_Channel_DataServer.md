---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_Raven_Projectile_Channel_DataServer
{
	static Script_Raven_Projectile_Channel_DataServer()
	{
		Il2CppClassPointerStore<Script_Raven_Projectile_Channel_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Raven_Projectile_Channel_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Raven_Projectile_Channel_DataServer>.NativeClassPtr);
		Script_Raven_Projectile_Channel_DataServer.NativeFieldInfoPtr_SpellType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Raven_Projectile_Channel_DataServer>.NativeClassPtr, "SpellType");
		Script_Raven_Projectile_Channel_DataServer.NativeFieldInfoPtr_ChannelSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Raven_Projectile_Channel_DataServer>.NativeClassPtr, "ChannelSequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Raven_Projectile_Channel_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellType;
	private static readonly IntPtr NativeFieldInfoPtr_ChannelSequence;

	public PrefabGUID SpellType;

	public SequenceGUID ChannelSequence;
}
```
