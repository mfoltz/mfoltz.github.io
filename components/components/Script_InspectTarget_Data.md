---
nav_exclude: true
search_exclude: true
---

# Script_InspectTarget_Data

```csharp
[StructLayout(2)]
public struct Script_InspectTarget_Data
{
	static Script_InspectTarget_Data()
	{
		Il2CppClassPointerStore<Script_InspectTarget_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Gameplay", "Script_InspectTarget_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_InspectTarget_Data>.NativeClassPtr);
		Script_InspectTarget_Data.NativeFieldInfoPtr_LoreText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_InspectTarget_Data>.NativeClassPtr, "LoreText");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_InspectTarget_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LoreText;
	[FieldOffset(0)]
	public Guid LoreText;
}
