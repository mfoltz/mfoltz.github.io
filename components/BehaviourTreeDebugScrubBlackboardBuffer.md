# BehaviourTreeDebugScrubBlackboardBuffer

```csharp
[StructLayout(2)]
public struct BehaviourTreeDebugScrubBlackboardBuffer
{
	static BehaviourTreeDebugScrubBlackboardBuffer()
	{
		Il2CppClassPointerStore<BehaviourTreeDebugScrubBlackboardBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "BehaviourTreeDebugScrubBlackboardBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTreeDebugScrubBlackboardBuffer>.NativeClassPtr);
		BehaviourTreeDebugScrubBlackboardBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeDebugScrubBlackboardBuffer>.NativeClassPtr, "Value");
		BehaviourTreeDebugScrubBlackboardBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_BlackboardElement_BehaviourTreeDebugScrubBlackboardBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BehaviourTreeDebugScrubBlackboardBuffer>.NativeClassPtr, 100665709);
		BehaviourTreeDebugScrubBlackboardBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_BehaviourTreeDebugScrubBlackboardBuffer_BlackboardElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BehaviourTreeDebugScrubBlackboardBuffer>.NativeClassPtr, 100665710);
	}
	[CallerCount(0)]
	public unsafe static implicit operator BlackboardElement(BehaviourTreeDebugScrubBlackboardBuffer e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BehaviourTreeDebugScrubBlackboardBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_BlackboardElement_BehaviourTreeDebugScrubBlackboardBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static implicit operator BehaviourTreeDebugScrubBlackboardBuffer(BlackboardElement e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BehaviourTreeDebugScrubBlackboardBuffer.NativeMethodInfoPtr_op_Implicit_Public_Static_BehaviourTreeDebugScrubBlackboardBuffer_BlackboardElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTreeDebugScrubBlackboardBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_BlackboardElement_BehaviourTreeDebugScrubBlackboardBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_BehaviourTreeDebugScrubBlackboardBuffer_BlackboardElement_0;
	[FieldOffset(0)]
	public byte Value;
}
