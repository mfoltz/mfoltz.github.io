---
nav_exclude: true
search_exclude: true
---

# Pull_Team

```csharp
public struct Pull_Team
{
	static Pull_Team()
	{
		Il2CppClassPointerStore<Pull_Team>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "Pull_Team");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Pull_Team>.NativeClassPtr);
		Pull_Team.NativeFieldInfoPtr_FromEntityRegister = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Pull_Team>.NativeClassPtr, "FromEntityRegister");
		Pull_Team.NativeFieldInfoPtr_ToTeamRegister = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Pull_Team>.NativeClassPtr, "ToTeamRegister");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Pull_Team>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromEntityRegister;
	private static readonly IntPtr NativeFieldInfoPtr_ToTeamRegister;

	public int FromEntityRegister;

	public int ToTeamRegister;
}
```
