---
nav_exclude: true
search_exclude: false
---

# AbilityBar_Server

```csharp
public struct AbilityBar_Server
{
	static AbilityBar_Server()
	{
		Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityBar_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr);
		AbilityBar_Server.NativeFieldInfoPtr_HandledClientInterruptCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, "HandledClientInterruptCounter");
		AbilityBar_Server.NativeFieldInfoPtr_HandledServerInterruptCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, "HandledServerInterruptCounter");
		AbilityBar_Server.NativeFieldInfoPtr_ClientInterruptCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, "ClientInterruptCounter");
		AbilityBar_Server.NativeFieldInfoPtr_ClientCastStartedCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, "ClientCastStartedCounter");
		AbilityBar_Server.NativeFieldInfoPtr_ClientCastGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, "ClientCastGroup");
		AbilityBar_Server.NativeFieldInfoPtr_SpellBlockDebuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, "SpellBlockDebuff");
		AbilityBar_Server.NativeFieldInfoPtr_SpellBlockResultBuffPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, "SpellBlockResultBuffPrefab");
		AbilityBar_Server.NativeFieldInfoPtr_SpellBlockTriggerSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, "SpellBlockTriggerSequence");
		AbilityBar_Server.NativeFieldInfoPtr_SpellBlockResultBuffDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, "SpellBlockResultBuffDuration");
		AbilityBar_Server.NativeFieldInfoPtr_IsSpellBlocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, "IsSpellBlocked");
		AbilityBar_Server.NativeMethodInfoPtr_ApplySpellBlock_Public_Void_Entity_PrefabGUID_Single_SequenceGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, 100663699);
		AbilityBar_Server.NativeMethodInfoPtr_RemoveSpellBlock_Public_Void_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, 100663700);
		AbilityBar_Server.NativeMethodInfoPtr_ClearSpellBlocked_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, 100663701);
	}

	public unsafe void ApplySpellBlock(Entity applier, PrefabGUID spellBlockResultBuffPrefab, float spellBlockResultBuffDuration, SequenceGUID spellBlockTriggerSequence)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref applier;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref spellBlockResultBuffPrefab;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref spellBlockResultBuffDuration;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref spellBlockTriggerSequence;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Server.NativeMethodInfoPtr_ApplySpellBlock_Public_Void_Entity_PrefabGUID_Single_SequenceGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void RemoveSpellBlock(Entity applier)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref applier;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Server.NativeMethodInfoPtr_RemoveSpellBlock_Public_Void_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void ClearSpellBlocked()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityBar_Server.NativeMethodInfoPtr_ClearSpellBlocked_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityBar_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HandledClientInterruptCounter;
	private static readonly IntPtr NativeFieldInfoPtr_HandledServerInterruptCounter;
	private static readonly IntPtr NativeFieldInfoPtr_ClientInterruptCounter;
	private static readonly IntPtr NativeFieldInfoPtr_ClientCastStartedCounter;
	private static readonly IntPtr NativeFieldInfoPtr_ClientCastGroup;
	private static readonly IntPtr NativeFieldInfoPtr_SpellBlockDebuff;
	private static readonly IntPtr NativeFieldInfoPtr_SpellBlockResultBuffPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_SpellBlockTriggerSequence;
	private static readonly IntPtr NativeFieldInfoPtr_SpellBlockResultBuffDuration;
	private static readonly IntPtr NativeFieldInfoPtr_IsSpellBlocked;
	private static readonly IntPtr NativeMethodInfoPtr_ApplySpellBlock_Public_Void_Entity_PrefabGUID_Single_SequenceGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveSpellBlock_Public_Void_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_ClearSpellBlocked_Public_Void_0;

	public int HandledClientInterruptCounter;

	public int HandledServerInterruptCounter;

	public int ClientInterruptCounter;

	public int ClientCastStartedCounter;

	public Entity ClientCastGroup;

	public Entity SpellBlockDebuff;

	public PrefabGUID SpellBlockResultBuffPrefab;

	public SequenceGUID SpellBlockTriggerSequence;

	public float SpellBlockResultBuffDuration;

	public bool IsSpellBlocked;
}
```
