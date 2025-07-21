---
nav_exclude: true
search_exclude: false
---

# CombatMusicSource_Server

```csharp
public struct CombatMusicSource_Server
{
	static CombatMusicSource_Server()
	{
		Il2CppClassPointerStore<CombatMusicSource_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CombatMusicSource_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CombatMusicSource_Server>.NativeClassPtr);
		CombatMusicSource_Server.NativeFieldInfoPtr_Active = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CombatMusicSource_Server>.NativeClassPtr, "Active");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CombatMusicSource_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Active;

	public ModifiableBool Active;
}
```
