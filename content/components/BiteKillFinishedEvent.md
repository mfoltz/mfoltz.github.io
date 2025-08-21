---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BiteKillFinishedEvent
{
	static BiteKillFinishedEvent()
	{
		Il2CppClassPointerStore<BiteKillFinishedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BiteKillFinishedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BiteKillFinishedEvent>.NativeClassPtr);
		BiteKillFinishedEvent.NativeFieldInfoPtr_Player = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BiteKillFinishedEvent>.NativeClassPtr, "Player");
		BiteKillFinishedEvent.NativeFieldInfoPtr_Victim = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BiteKillFinishedEvent>.NativeClassPtr, "Victim");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BiteKillFinishedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Player;
	private static readonly IntPtr NativeFieldInfoPtr_Victim;

	public Entity Player;

	public Entity Victim;
}
```
