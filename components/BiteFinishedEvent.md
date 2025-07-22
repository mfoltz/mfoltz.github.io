---
nav_exclude: true
search_exclude: false
---

# BiteFinishedEvent

```csharp
public struct BiteFinishedEvent
{
	static BiteFinishedEvent()
	{
		Il2CppClassPointerStore<BiteFinishedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BiteFinishedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BiteFinishedEvent>.NativeClassPtr);
		BiteFinishedEvent.NativeFieldInfoPtr_Player = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BiteFinishedEvent>.NativeClassPtr, "Player");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BiteFinishedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Player;

	public Entity Player;
}
```
