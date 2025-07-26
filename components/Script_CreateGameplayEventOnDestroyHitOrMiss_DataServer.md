# Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer

```csharp
[StructLayout(2)]
public struct Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer
{
	static Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer()
	{
		Il2CppClassPointerStore<Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer>.NativeClassPtr);
		Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer.NativeFieldInfoPtr_HitGameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer>.NativeClassPtr, "HitGameplayEventId");
		Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer.NativeFieldInfoPtr_MissGameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer>.NativeClassPtr, "MissGameplayEventId");
		Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer.NativeFieldInfoPtr_Conditional = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer>.NativeClassPtr, "Conditional");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CreateGameplayEventOnDestroyHitOrMiss_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HitGameplayEventId;
	private static readonly IntPtr NativeFieldInfoPtr_MissGameplayEventId;
	private static readonly IntPtr NativeFieldInfoPtr_Conditional;
	[FieldOffset(0)]
	public GameplayEventId HitGameplayEventId;
	[FieldOffset(8)]
	public GameplayEventId MissGameplayEventId;
	[FieldOffset(16)]
	public BlobAssetReference<ConditionBlob> Conditional;
}
