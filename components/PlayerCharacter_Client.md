---
nav_exclude: true
search_exclude: true
---

# PlayerCharacter_Client

```csharp
public struct PlayerCharacter_Client
{
	static PlayerCharacter_Client()
	{
		Il2CppClassPointerStore<PlayerCharacter_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "PlayerCharacter_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlayerCharacter_Client>.NativeClassPtr);
		PlayerCharacter_Client.NativeFieldInfoPtr_FilteredName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerCharacter_Client>.NativeClassPtr, "FilteredName");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlayerCharacter_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FilteredName;

	public FixedString64Bytes FilteredName;
}
```
