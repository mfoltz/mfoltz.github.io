# Script_CreateGameplayEventOnHitDetection_DataServer

```csharp
[StructLayout(2)]
public struct Script_CreateGameplayEventOnHitDetection_DataServer
{
	static Script_CreateGameplayEventOnHitDetection_DataServer()
	{
		Il2CppClassPointerStore<Script_CreateGameplayEventOnHitDetection_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_CreateGameplayEventOnHitDetection_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitDetection_DataServer>.NativeClassPtr);
		Script_CreateGameplayEventOnHitDetection_DataServer.NativeFieldInfoPtr_TargetMainCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitDetection_DataServer>.NativeClassPtr, "TargetMainCategory");
		Script_CreateGameplayEventOnHitDetection_DataServer.NativeFieldInfoPtr_TargetMaterialCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitDetection_DataServer>.NativeClassPtr, "TargetMaterialCategory");
		Script_CreateGameplayEventOnHitDetection_DataServer.NativeFieldInfoPtr_TargetHitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitDetection_DataServer>.NativeClassPtr, "TargetHitFilter");
		Script_CreateGameplayEventOnHitDetection_DataServer.NativeFieldInfoPtr_GameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitDetection_DataServer>.NativeClassPtr, "GameplayEventId");
		Script_CreateGameplayEventOnHitDetection_DataServer.NativeFieldInfoPtr_GameplayEventIdNoHit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitDetection_DataServer>.NativeClassPtr, "GameplayEventIdNoHit");
		Script_CreateGameplayEventOnHitDetection_DataServer.NativeFieldInfoPtr_MultipleHits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitDetection_DataServer>.NativeClassPtr, "MultipleHits");
		Script_CreateGameplayEventOnHitDetection_DataServer.NativeFieldInfoPtr_TargetFilterCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitDetection_DataServer>.NativeClassPtr, "TargetFilterCondition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_CreateGameplayEventOnHitDetection_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetMainCategory;
	private static readonly IntPtr NativeFieldInfoPtr_TargetMaterialCategory;
	private static readonly IntPtr NativeFieldInfoPtr_TargetHitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventId;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventIdNoHit;
	private static readonly IntPtr NativeFieldInfoPtr_MultipleHits;
	private static readonly IntPtr NativeFieldInfoPtr_TargetFilterCondition;
	[FieldOffset(0)]
	public MainEntityCategory TargetMainCategory;
	[FieldOffset(1)]
	public MaterialCategory TargetMaterialCategory;
	[FieldOffset(2)]
	public HitFilter TargetHitFilter;
	[FieldOffset(4)]
	public GameplayEventId GameplayEventId;
	[FieldOffset(12)]
	public GameplayEventId GameplayEventIdNoHit;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool MultipleHits;
	[FieldOffset(24)]
	public BlobAssetReference<ConditionBlob> TargetFilterCondition;
}
