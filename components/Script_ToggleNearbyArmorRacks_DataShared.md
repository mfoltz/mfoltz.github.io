# Script_ToggleNearbyArmorRacks_DataShared

```csharp
[StructLayout(2)]
public struct Script_ToggleNearbyArmorRacks_DataShared
{
	static Script_ToggleNearbyArmorRacks_DataShared()
	{
		Il2CppClassPointerStore<Script_ToggleNearbyArmorRacks_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ToggleNearbyArmorRacks_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ToggleNearbyArmorRacks_DataShared>.NativeClassPtr);
		Script_ToggleNearbyArmorRacks_DataShared.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ToggleNearbyArmorRacks_DataShared>.NativeClassPtr, "Radius");
		Script_ToggleNearbyArmorRacks_DataShared.NativeFieldInfoPtr_Activate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ToggleNearbyArmorRacks_DataShared>.NativeClassPtr, "Activate");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ToggleNearbyArmorRacks_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_Activate;
	[FieldOffset(0)]
	public float Radius;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool Activate;
}
