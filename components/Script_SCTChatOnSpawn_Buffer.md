---
nav_exclude: true
search_exclude: false
---

# Script_SCTChatOnSpawn_Buffer

```csharp
public struct Script_SCTChatOnSpawn_Buffer
{
	static Script_SCTChatOnSpawn_Buffer()
	{
		Il2CppClassPointerStore<Script_SCTChatOnSpawn_Buffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SCTChatOnSpawn_Buffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SCTChatOnSpawn_Buffer>.NativeClassPtr);
		Script_SCTChatOnSpawn_Buffer.NativeFieldInfoPtr_Text = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTChatOnSpawn_Buffer>.NativeClassPtr, "Text");
		Script_SCTChatOnSpawn_Buffer.NativeFieldInfoPtr_Weight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTChatOnSpawn_Buffer>.NativeClassPtr, "Weight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SCTChatOnSpawn_Buffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Text;
	private static readonly IntPtr NativeFieldInfoPtr_Weight;

	public LocalizationKey Text;

	public int Weight;
}
```
