# GameplayEventListeners

```csharp
[StructLayout(2)]
public struct GameplayEventListeners
{
	static GameplayEventListeners()
	{
		Il2CppClassPointerStore<GameplayEventListeners>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GameplayEventListeners");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GameplayEventListeners>.NativeClassPtr);
		GameplayEventListeners.NativeFieldInfoPtr_EventIdIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventListeners>.NativeClassPtr, "EventIdIndex");
		GameplayEventListeners.NativeFieldInfoPtr_EventIndexOfType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventListeners>.NativeClassPtr, "EventIndexOfType");
		GameplayEventListeners.NativeFieldInfoPtr_ConditionBlob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventListeners>.NativeClassPtr, "ConditionBlob");
		GameplayEventListeners.NativeFieldInfoPtr_GameplayEventType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventListeners>.NativeClassPtr, "GameplayEventType");
		GameplayEventListeners.NativeFieldInfoPtr_GameplayEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventListeners>.NativeClassPtr, "GameplayEventId");
		GameplayEventListeners.NativeMethodInfoPtr__ctor_Public_Void_GameplayEventTypeEnum_GameplayEventId_Int32_Int32_BlobAssetReference_1_ConditionBlob_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<GameplayEventListeners>.NativeClassPtr, 100665923);
	}
	[CallerCount(0)]
	public unsafe GameplayEventListeners(GameplayEventTypeEnum gameplayEventType, GameplayEventId gameplayEventId, int eventIdIndex, int eventIndexOfType, BlobAssetReference<ConditionBlob> conditionBlob)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref gameplayEventType;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gameplayEventId;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref eventIdIndex;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref eventIndexOfType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref conditionBlob;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(GameplayEventListeners.NativeMethodInfoPtr__ctor_Public_Void_GameplayEventTypeEnum_GameplayEventId_Int32_Int32_BlobAssetReference_1_ConditionBlob_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GameplayEventListeners>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventIdIndex;
	private static readonly IntPtr NativeFieldInfoPtr_EventIndexOfType;
	private static readonly IntPtr NativeFieldInfoPtr_ConditionBlob;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventType;
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEventId;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_GameplayEventTypeEnum_GameplayEventId_Int32_Int32_BlobAssetReference_1_ConditionBlob_0;
	[FieldOffset(0)]
	public int EventIdIndex;
	[FieldOffset(4)]
	public int EventIndexOfType;
	[FieldOffset(8)]
	public BlobAssetReference<ConditionBlob> ConditionBlob;
	[FieldOffset(16)]
	public GameplayEventTypeEnum GameplayEventType;
	[FieldOffset(20)]
	public GameplayEventId GameplayEventId;
}
