---
nav_exclude: true
search_exclude: true
---

# Script_SCTChatOnAggro_Buffer

```csharp
[StructLayout(2)]
public struct Script_SCTChatOnAggro_Buffer
{
	static Script_SCTChatOnAggro_Buffer()
	{
		Il2CppClassPointerStore<Script_SCTChatOnAggro_Buffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SCTChatOnAggro_Buffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SCTChatOnAggro_Buffer>.NativeClassPtr);
		Script_SCTChatOnAggro_Buffer.NativeFieldInfoPtr_Text = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTChatOnAggro_Buffer>.NativeClassPtr, "Text");
		Script_SCTChatOnAggro_Buffer.NativeFieldInfoPtr_Weight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTChatOnAggro_Buffer>.NativeClassPtr, "Weight");
		Script_SCTChatOnAggro_Buffer.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SCTChatOnAggro_Buffer>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SCTChatOnAggro_Buffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Text;
	private static readonly IntPtr NativeFieldInfoPtr_Weight;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	[FieldOffset(0)]
	public LocalizationKey Text;
	[FieldOffset(16)]
	public int Weight;
	[FieldOffset(20)]
	public AggroSCTChatType Type;
}
