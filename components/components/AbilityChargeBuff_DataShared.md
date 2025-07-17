---
nav_exclude: true
search_exclude: true
---

# AbilityChargeBuff_DataShared

```csharp
[StructLayout(2)]
public struct AbilityChargeBuff_DataShared
{
	static AbilityChargeBuff_DataShared()
	{
		Il2CppClassPointerStore<AbilityChargeBuff_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "AbilityChargeBuff_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityChargeBuff_DataShared>.NativeClassPtr);
		AbilityChargeBuff_DataShared.NativeFieldInfoPtr_IsActive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeBuff_DataShared>.NativeClassPtr, "IsActive");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityChargeBuff_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsActive;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool IsActive;
}
