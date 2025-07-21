---
nav_exclude: true
search_exclude: false
---

# Script_GarlicAreaDebuff_DataShared

```csharp
public struct Script_GarlicAreaDebuff_DataShared
{
	static Script_GarlicAreaDebuff_DataShared()
	{
		Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Gameplay.Scripting", "Script_GarlicAreaDebuff_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataShared>.NativeClassPtr);
		Script_GarlicAreaDebuff_DataShared.NativeFieldInfoPtr_IsInArea = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataShared>.NativeClassPtr, "IsInArea");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_GarlicAreaDebuff_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsInArea;

	public bool IsInArea;
}
```
