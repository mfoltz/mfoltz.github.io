# Script_SetBehaviourTreeStateOnGameplayEvent_DataServer

```csharp
[StructLayout(2)]
public struct Script_SetBehaviourTreeStateOnGameplayEvent_DataServer
{
	static Script_SetBehaviourTreeStateOnGameplayEvent_DataServer()
	{
		Il2CppClassPointerStore<Script_SetBehaviourTreeStateOnGameplayEvent_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SetBehaviourTreeStateOnGameplayEvent_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SetBehaviourTreeStateOnGameplayEvent_DataServer>.NativeClassPtr);
		Script_SetBehaviourTreeStateOnGameplayEvent_DataServer.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetBehaviourTreeStateOnGameplayEvent_DataServer>.NativeClassPtr, "State");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SetBehaviourTreeStateOnGameplayEvent_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_State;
	[FieldOffset(0)]
	public GenericEnemyState State;
}
