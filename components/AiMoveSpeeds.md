# AiMoveSpeeds

```csharp
[StructLayout(2)]
public struct AiMoveSpeeds
{
	static AiMoveSpeeds()
	{
		Il2CppClassPointerStore<AiMoveSpeeds>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AiMoveSpeeds");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AiMoveSpeeds>.NativeClassPtr);
		AiMoveSpeeds.NativeFieldInfoPtr_Walk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMoveSpeeds>.NativeClassPtr, "Walk");
		AiMoveSpeeds.NativeFieldInfoPtr_Run = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMoveSpeeds>.NativeClassPtr, "Run");
		AiMoveSpeeds.NativeFieldInfoPtr_Circle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMoveSpeeds>.NativeClassPtr, "Circle");
		AiMoveSpeeds.NativeFieldInfoPtr_Return = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMoveSpeeds>.NativeClassPtr, "Return");
		AiMoveSpeeds.NativeMethodInfoPtr_Get_Public_Single_AiMoveSpeed_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AiMoveSpeeds>.NativeClassPtr, 100663963);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1055368, RefRangeEnd = 1055369, XrefRangeStart = 1055368, XrefRangeEnd = 1055368, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float Get(AiMoveSpeed speed)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref speed;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AiMoveSpeeds.NativeMethodInfoPtr_Get_Public_Single_AiMoveSpeed_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AiMoveSpeeds>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Walk;
	private static readonly IntPtr NativeFieldInfoPtr_Run;
	private static readonly IntPtr NativeFieldInfoPtr_Circle;
	private static readonly IntPtr NativeFieldInfoPtr_Return;
	private static readonly IntPtr NativeMethodInfoPtr_Get_Public_Single_AiMoveSpeed_0;
	[FieldOffset(0)]
	public ModifiableFloat Walk;
	[FieldOffset(4)]
	public ModifiableFloat Run;
	[FieldOffset(8)]
	public ModifiableFloat Circle;
	[FieldOffset(12)]
	public ModifiableFloat Return;
}
