---
nav_exclude: true
search_exclude: true
---

# FromCharacter

```csharp
public struct FromCharacter
{
	static FromCharacter()
	{
		Il2CppClassPointerStore<FromCharacter>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "FromCharacter");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FromCharacter>.NativeClassPtr);
		FromCharacter.NativeFieldInfoPtr_User = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FromCharacter>.NativeClassPtr, "User");
		FromCharacter.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FromCharacter>.NativeClassPtr, "Character");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FromCharacter>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_User;
	private static readonly IntPtr NativeFieldInfoPtr_Character;

	public Entity User;

	public Entity Character;
}
```

## Server Systems

- [ProjectM.Gameplay.Clan.ClanSystem_Server](/systems/ProjectM.Gameplay.Clan.ClanSystem_Server)
- [ProjectM.SplitItemSystem](/systems/ProjectM.SplitItemSystem)
- [ProjectM.SplitItemV2System](/systems/ProjectM.SplitItemV2System)
