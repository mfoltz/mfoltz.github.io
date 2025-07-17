---
nav_exclude: true
search_exclude: true
---

# PlayerCharacter

```csharp
public struct PlayerCharacter
{
	static PlayerCharacter()
	{
		Il2CppClassPointerStore<PlayerCharacter>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PlayerCharacter");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlayerCharacter>.NativeClassPtr);
		PlayerCharacter.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerCharacter>.NativeClassPtr, "Name");
		PlayerCharacter.NativeFieldInfoPtr_SmartClanName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerCharacter>.NativeClassPtr, "SmartClanName");
		PlayerCharacter.NativeFieldInfoPtr_UserEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerCharacter>.NativeClassPtr, "UserEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlayerCharacter>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_SmartClanName;
	private static readonly IntPtr NativeFieldInfoPtr_UserEntity;

	public FixedString64Bytes Name;

	public FixedString32Bytes SmartClanName;

	public Entity UserEntity;
}
```
