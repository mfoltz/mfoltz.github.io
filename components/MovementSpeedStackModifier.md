# MovementSpeedStackModifier

```csharp
[StructLayout(2)]
public struct MovementSpeedStackModifier
{
	static MovementSpeedStackModifier()
	{
		Il2CppClassPointerStore<MovementSpeedStackModifier>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MovementSpeedStackModifier");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MovementSpeedStackModifier>.NativeClassPtr);
		MovementSpeedStackModifier.NativeFieldInfoPtr_BaseValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovementSpeedStackModifier>.NativeClassPtr, "BaseValue");
		MovementSpeedStackModifier.NativeFieldInfoPtr_MoveSpeedPerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MovementSpeedStackModifier>.NativeClassPtr, "MoveSpeedPerStack");
		MovementSpeedStackModifier.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MovementSpeedStackModifier>.NativeClassPtr, 100667377);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 75970, XrefRangeEnd = 75976, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MovementSpeedStackModifier.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MovementSpeedStackModifier>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BaseValue;
	private static readonly IntPtr NativeFieldInfoPtr_MoveSpeedPerStack;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public float BaseValue;
	[FieldOffset(4)]
	public float MoveSpeedPerStack;
}
