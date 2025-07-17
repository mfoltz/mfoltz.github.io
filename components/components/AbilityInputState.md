---
nav_exclude: true
search_exclude: true
---

# AbilityInputState

```csharp
[StructLayout(2)]
public struct AbilityInputState
{
	static AbilityInputState()
	{
		Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityInputState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr);
		AbilityInputState.NativeFieldInfoPtr_AbilityInputDown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr, "AbilityInputDown");
		AbilityInputState.NativeFieldInfoPtr_AbilityInputPressed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr, "AbilityInputPressed");
		AbilityInputState.NativeFieldInfoPtr_AbilityInputUp = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr, "AbilityInputUp");
		AbilityInputState.NativeFieldInfoPtr_IgnoredUntilReleasedInputs = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr, "IgnoredUntilReleasedInputs");
		AbilityInputState.NativeFieldInfoPtr_Interrupt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr, "Interrupt");
		AbilityInputState.NativeFieldInfoPtr_BlockReleaseCast = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr, "BlockReleaseCast");
		AbilityInputState.NativeFieldInfoPtr__LastControllerType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr, "_LastControllerType");
		AbilityInputState.NativeMethodInfoPtr__ctor_Public_Void_Allocator_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr, 100672393);
		AbilityInputState.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr, 100672394);
		AbilityInputState.NativeMethodInfoPtr_HandleInput_Public_Void_InputState_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr, 100672395);
		AbilityInputState.NativeMethodInfoPtr_IsAbilityInput_Private_Static_Boolean_ButtonInputAction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr, 100672396);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 140008, RefRangeEnd = 140009, XrefRangeStart = 139991, XrefRangeEnd = 140008, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe AbilityInputState(Allocator allocator)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref allocator;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityInputState.NativeMethodInfoPtr__ctor_Public_Void_Allocator_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 140019, RefRangeEnd = 140020, XrefRangeStart = 140009, XrefRangeEnd = 140019, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityInputState.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 140073, RefRangeEnd = 140074, XrefRangeStart = 140020, XrefRangeEnd = 140073, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void HandleInput(InputState inputState)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref inputState;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityInputState.NativeMethodInfoPtr_HandleInput_Public_Void_InputState_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe static bool IsAbilityInput(ButtonInputAction input)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityInputState.NativeMethodInfoPtr_IsAbilityInput_Private_Static_Boolean_ButtonInputAction_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityInputState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityInputDown;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityInputPressed;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityInputUp;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoredUntilReleasedInputs;
	private static readonly IntPtr NativeFieldInfoPtr_Interrupt;
	private static readonly IntPtr NativeFieldInfoPtr_BlockReleaseCast;
	private static readonly IntPtr NativeFieldInfoPtr__LastControllerType;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Allocator_0;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_HandleInput_Public_Void_InputState_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsAbilityInput_Private_Static_Boolean_ButtonInputAction_0;
	[FieldOffset(0)]
	public NativeList<ButtonInputAction> AbilityInputDown;
	[FieldOffset(8)]
	public NativeList<ButtonInputAction> AbilityInputPressed;
	[FieldOffset(16)]
	public NativeList<ButtonInputAction> AbilityInputUp;
	[FieldOffset(24)]
	public NativeHashSet<int> IgnoredUntilReleasedInputs;
	[FieldOffset(32)]
	[MarshalAs(4)]
	public bool Interrupt;
	[FieldOffset(33)]
	[MarshalAs(4)]
	public bool BlockReleaseCast;
	[FieldOffset(34)]
	public ControllerType _LastControllerType;
}
