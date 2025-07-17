---
nav_exclude: true
search_exclude: true
---

# Script_FlameWhipHeightCheck_Data

```csharp
[StructLayout(2)]
public struct Script_FlameWhipHeightCheck_Data
{
	static Script_FlameWhipHeightCheck_Data()
	{
		Il2CppClassPointerStore<Script_FlameWhipHeightCheck_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_FlameWhipHeightCheck_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_FlameWhipHeightCheck_Data>.NativeClassPtr);
		Script_FlameWhipHeightCheck_Data.NativeFieldInfoPtr_ListenerEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_FlameWhipHeightCheck_Data>.NativeClassPtr, "ListenerEventId");
		Script_FlameWhipHeightCheck_Data.NativeFieldInfoPtr_CreateEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_FlameWhipHeightCheck_Data>.NativeClassPtr, "CreateEventId");
		Script_FlameWhipHeightCheck_Data.NativeFieldInfoPtr_MaxHeightDiff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_FlameWhipHeightCheck_Data>.NativeClassPtr, "MaxHeightDiff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_FlameWhipHeightCheck_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ListenerEventId;
	private static readonly IntPtr NativeFieldInfoPtr_CreateEventId;
	private static readonly IntPtr NativeFieldInfoPtr_MaxHeightDiff;
	[FieldOffset(0)]
	public GameplayEventId ListenerEventId;
	[FieldOffset(8)]
	public GameplayEventId CreateEventId;
	[FieldOffset(16)]
	public float MaxHeightDiff;
}
