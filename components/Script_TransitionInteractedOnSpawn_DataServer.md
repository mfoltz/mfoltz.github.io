# Script_TransitionInteractedOnSpawn_DataServer

```csharp
[StructLayout(2)]
public struct Script_TransitionInteractedOnSpawn_DataServer
{
	static Script_TransitionInteractedOnSpawn_DataServer()
	{
		Il2CppClassPointerStore<Script_TransitionInteractedOnSpawn_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_TransitionInteractedOnSpawn_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_TransitionInteractedOnSpawn_DataServer>.NativeClassPtr);
		Script_TransitionInteractedOnSpawn_DataServer.NativeFieldInfoPtr_TransitionId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_TransitionInteractedOnSpawn_DataServer>.NativeClassPtr, "TransitionId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_TransitionInteractedOnSpawn_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TransitionId;
	[FieldOffset(0)]
	public FixedString32Bytes TransitionId;
}
