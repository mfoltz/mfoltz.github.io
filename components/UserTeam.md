---
nav_exclude: true
search_exclude: false
---

# UserTeam

```csharp
public struct UserTeam
{
	static UserTeam()
	{
		Il2CppClassPointerStore<UserTeam>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UserTeam");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserTeam>.NativeClassPtr);
		UserTeam.NativeFieldInfoPtr_UserEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserTeam>.NativeClassPtr, "UserEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserTeam>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UserEntity;

	public Entity UserEntity;
}
```
