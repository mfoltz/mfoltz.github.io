# Script_Buff_SetHybridModel_DataClient

```csharp
[StructLayout(2)]
public struct Script_Buff_SetHybridModel_DataClient
{
	static Script_Buff_SetHybridModel_DataClient()
	{
		Il2CppClassPointerStore<Script_Buff_SetHybridModel_DataClient>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_SetHybridModel_DataClient");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_SetHybridModel_DataClient>.NativeClassPtr);
		Script_Buff_SetHybridModel_DataClient.NativeFieldInfoPtr_HybridModel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_SetHybridModel_DataClient>.NativeClassPtr, "HybridModel");
		Script_Buff_SetHybridModel_DataClient.NativeFieldInfoPtr_ColorCollection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_SetHybridModel_DataClient>.NativeClassPtr, "ColorCollection");
		Script_Buff_SetHybridModel_DataClient.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_SetHybridModel_DataClient>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_SetHybridModel_DataClient>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HybridModel;
	private static readonly IntPtr NativeFieldInfoPtr_ColorCollection;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	[FieldOffset(0)]
	public UseHybridModelPrefabsBlob.PrefabData HybridModel;
	[FieldOffset(20)]
	public PrefabGUID ColorCollection;
	[FieldOffset(24)]
	public SetHybridModelType Type;
}
