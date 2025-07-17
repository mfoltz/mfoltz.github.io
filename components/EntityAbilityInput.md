---
nav_exclude: true
search_exclude: true
---

# EntityAbilityInput

```csharp
[StructLayout(2)]
public struct EntityAbilityInput
{
	static EntityAbilityInput()
	{
		Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EntityAbilityInput");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr);
		EntityAbilityInput.NativeFieldInfoPtr_QueueAbilityUntil = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "QueueAbilityUntil");
		EntityAbilityInput.NativeFieldInfoPtr_PrepareCastGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "PrepareCastGroup");
		EntityAbilityInput.NativeFieldInfoPtr_ActiveCastGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "ActiveCastGroup");
		EntityAbilityInput.NativeFieldInfoPtr_QueuedCastGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "QueuedCastGroup");
		EntityAbilityInput.NativeFieldInfoPtr_CastInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "CastInput");
		EntityAbilityInput.NativeFieldInfoPtr_AbilityState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "AbilityState");
		EntityAbilityInput.NativeFieldInfoPtr_HasMoveInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "HasMoveInput");
		EntityAbilityInput.NativeFieldInfoPtr_Interrupt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "Interrupt");
		EntityAbilityInput.NativeFieldInfoPtr_InterruptByPrepare = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "InterruptByPrepare");
		EntityAbilityInput.NativeMethodInfoPtr_GetMostRelevantCastGroup_Public_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, 100666018);
	}
	[CallerCount(0)]
	public unsafe Entity GetMostRelevantCastGroup()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityAbilityInput.NativeMethodInfoPtr_GetMostRelevantCastGroup_Public_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_QueueAbilityUntil;
	private static readonly IntPtr NativeFieldInfoPtr_PrepareCastGroup;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveCastGroup;
	private static readonly IntPtr NativeFieldInfoPtr_QueuedCastGroup;
	private static readonly IntPtr NativeFieldInfoPtr_CastInput;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityState;
	private static readonly IntPtr NativeFieldInfoPtr_HasMoveInput;
	private static readonly IntPtr NativeFieldInfoPtr_Interrupt;
	private static readonly IntPtr NativeFieldInfoPtr_InterruptByPrepare;
	private static readonly IntPtr NativeMethodInfoPtr_GetMostRelevantCastGroup_Public_Entity_0;
	[FieldOffset(0)]
	public double QueueAbilityUntil;
	[FieldOffset(8)]
	public Entity PrepareCastGroup;
	[FieldOffset(16)]
	public Entity ActiveCastGroup;
	[FieldOffset(24)]
	public Entity QueuedCastGroup;
	[FieldOffset(32)]
	public ButtonInputAction CastInput;
	[FieldOffset(36)]
	public AbilityStateMachine AbilityState;
	[FieldOffset(38)]
	[MarshalAs(4)]
	public bool HasMoveInput;
	[FieldOffset(39)]
	[MarshalAs(4)]
	public bool Interrupt;
	[FieldOffset(40)]
	[MarshalAs(4)]
	public bool InterruptByPrepare;
}
