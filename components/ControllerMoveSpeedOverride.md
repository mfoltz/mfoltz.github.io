---
nav_exclude: true
search_exclude: true
---

# ControllerMoveSpeedOverride

```csharp
[StructLayout(2)]
public struct ControllerMoveSpeedOverride
{
	static ControllerMoveSpeedOverride()
	{
		Il2CppClassPointerStore<ControllerMoveSpeedOverride>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ControllerMoveSpeedOverride");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ControllerMoveSpeedOverride>.NativeClassPtr);
		ControllerMoveSpeedOverride.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ControllerMoveSpeedOverride>.NativeClassPtr, "Value");
		ControllerMoveSpeedOverride.NativeFieldInfoPtr_CurrentModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ControllerMoveSpeedOverride>.NativeClassPtr, "CurrentModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ControllerMoveSpeedOverride>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentModId;
	[FieldOffset(0)]
	public AiMoveSpeed Value;
	[FieldOffset(4)]
	public ModificationId CurrentModId;
}
