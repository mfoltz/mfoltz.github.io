---
nav_exclude: true
search_exclude: true
---

# Script_StealthBush_Environment_Data

```csharp
[StructLayout(2)]
public struct Script_StealthBush_Environment_Data
{
	static Script_StealthBush_Environment_Data()
	{
		Il2CppClassPointerStore<Script_StealthBush_Environment_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_StealthBush_Environment_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_StealthBush_Environment_Data>.NativeClassPtr);
		Script_StealthBush_Environment_Data.NativeFieldInfoPtr_RootEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_StealthBush_Environment_Data>.NativeClassPtr, "RootEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_StealthBush_Environment_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RootEntity;
	[FieldOffset(0)]
	public Entity RootEntity;
}
