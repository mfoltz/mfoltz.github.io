# Script_Spectral_Recharge_DataShared

```csharp
[StructLayout(2)]
public struct Script_Spectral_Recharge_DataShared
{
	static Script_Spectral_Recharge_DataShared()
	{
		Il2CppClassPointerStore<Script_Spectral_Recharge_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Spectral_Recharge_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Spectral_Recharge_DataShared>.NativeClassPtr);
		Script_Spectral_Recharge_DataShared.NativeFieldInfoPtr_OnSpawnEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Spectral_Recharge_DataShared>.NativeClassPtr, "OnSpawnEventId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Spectral_Recharge_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OnSpawnEventId;
	[FieldOffset(0)]
	public GameplayEventId OnSpawnEventId;
}
