# Script_SpellSchoolPassive_Storm_FeedFrenzy_DataServer

```csharp
[StructLayout(2)]
public struct Script_SpellSchoolPassive_Storm_FeedFrenzy_DataServer
{
	static Script_SpellSchoolPassive_Storm_FeedFrenzy_DataServer()
	{
		Il2CppClassPointerStore<Script_SpellSchoolPassive_Storm_FeedFrenzy_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SpellSchoolPassive_Storm_FeedFrenzy_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SpellSchoolPassive_Storm_FeedFrenzy_DataServer>.NativeClassPtr);
		Script_SpellSchoolPassive_Storm_FeedFrenzy_DataServer.NativeFieldInfoPtr_BuffPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpellSchoolPassive_Storm_FeedFrenzy_DataServer>.NativeClassPtr, "BuffPrefab");
		Script_SpellSchoolPassive_Storm_FeedFrenzy_DataServer.NativeFieldInfoPtr_PassivePrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpellSchoolPassive_Storm_FeedFrenzy_DataServer>.NativeClassPtr, "PassivePrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SpellSchoolPassive_Storm_FeedFrenzy_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_PassivePrefab;
	[FieldOffset(0)]
	public PrefabGUID BuffPrefab;
	[FieldOffset(4)]
	public PrefabGUID PassivePrefab;
}
