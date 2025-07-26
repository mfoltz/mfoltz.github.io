# Script_ApplyDashOnDamageTaken_DataServer

```csharp
[StructLayout(2)]
public struct Script_ApplyDashOnDamageTaken_DataServer
{
	static Script_ApplyDashOnDamageTaken_DataServer()
	{
		Il2CppClassPointerStore<Script_ApplyDashOnDamageTaken_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ApplyDashOnDamageTaken_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ApplyDashOnDamageTaken_DataServer>.NativeClassPtr);
		Script_ApplyDashOnDamageTaken_DataServer.NativeFieldInfoPtr_NewDashEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyDashOnDamageTaken_DataServer>.NativeClassPtr, "NewDashEntity");
		Script_ApplyDashOnDamageTaken_DataServer.NativeFieldInfoPtr_OnStatChangeListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ApplyDashOnDamageTaken_DataServer>.NativeClassPtr, "OnStatChangeListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ApplyDashOnDamageTaken_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NewDashEntity;
	private static readonly IntPtr NativeFieldInfoPtr_OnStatChangeListener;
	[FieldOffset(0)]
	public PrefabGUID NewDashEntity;
	[FieldOffset(4)]
	public ListenerId OnStatChangeListener;
}
