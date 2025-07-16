# AnimationLayerBuffer

```csharp
[StructLayout(2)]
public struct AnimationLayerBuffer
{
	static AnimationLayerBuffer()
	{
		Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "AnimationLayerBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr);
		AnimationLayerBuffer.NativeFieldInfoPtr_AnimationLayer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr, "AnimationLayer");
		AnimationLayerBuffer.NativeFieldInfoPtr_WaitCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr, "WaitCondition");
		AnimationLayerBuffer.NativeFieldInfoPtr_CurrentWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr, "CurrentWeight");
		AnimationLayerBuffer.NativeFieldInfoPtr_WeightGoal = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr, "WeightGoal");
		AnimationLayerBuffer.NativeFieldInfoPtr_BlendTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr, "BlendTime");
		AnimationLayerBuffer.NativeFieldInfoPtr_AnimatorLayer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr, "AnimatorLayer");
		AnimationLayerBuffer.NativeMethodInfoPtr__ctor_Public_Void_AnimationLayerEnum_Int32_AnimationLayerWaitCondition_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr, 100685778);
		AnimationLayerBuffer.NativeMethodInfoPtr_AddWaitCondition_Public_Void_AnimationLayerEnum_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr, 100685779);
		AnimationLayerBuffer.NativeMethodInfoPtr_RemoveWaitCondition_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr, 100685780);
		AnimationLayerBuffer.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr, 100685781);
	}
	[CallerCount(0)]
	public unsafe AnimationLayerBuffer(AnimationLayerEnum animationLayer, int animatorLayer, AnimationLayerBuffer.AnimationLayerWaitCondition waitCondition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref animationLayer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref animatorLayer;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref waitCondition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AnimationLayerBuffer.NativeMethodInfoPtr__ctor_Public_Void_AnimationLayerEnum_Int32_AnimationLayerWaitCondition_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe void AddWaitCondition(AnimationLayerEnum animationLayer, float weight)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref animationLayer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref weight;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AnimationLayerBuffer.NativeMethodInfoPtr_AddWaitCondition_Public_Void_AnimationLayerEnum_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe void RemoveWaitCondition()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AnimationLayerBuffer.NativeMethodInfoPtr_RemoveWaitCondition_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 308904, XrefRangeEnd = 308914, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AnimationLayerBuffer.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AnimationLayer;
	private static readonly IntPtr NativeFieldInfoPtr_WaitCondition;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentWeight;
	private static readonly IntPtr NativeFieldInfoPtr_WeightGoal;
	private static readonly IntPtr NativeFieldInfoPtr_BlendTime;
	private static readonly IntPtr NativeFieldInfoPtr_AnimatorLayer;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_AnimationLayerEnum_Int32_AnimationLayerWaitCondition_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddWaitCondition_Public_Void_AnimationLayerEnum_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveWaitCondition_Public_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	[FieldOffset(0)]
	public readonly AnimationLayerEnum AnimationLayer;
	[FieldOffset(4)]
	public AnimationLayerBuffer.AnimationLayerWaitCondition WaitCondition;
	[FieldOffset(16)]
	public float CurrentWeight;
	[FieldOffset(20)]
	public float WeightGoal;
	[FieldOffset(24)]
	public float BlendTime;
	[FieldOffset(28)]
	public readonly int AnimatorLayer;
	[StructLayout(2)]
	public struct AnimationLayerWaitCondition
	{
		static AnimationLayerWaitCondition()
		{
			Il2CppClassPointerStore<AnimationLayerBuffer.AnimationLayerWaitCondition>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<AnimationLayerBuffer>.NativeClassPtr, "AnimationLayerWaitCondition");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AnimationLayerBuffer.AnimationLayerWaitCondition>.NativeClassPtr);
			AnimationLayerBuffer.AnimationLayerWaitCondition.NativeFieldInfoPtr_AnimationLayer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimationLayerBuffer.AnimationLayerWaitCondition>.NativeClassPtr, "AnimationLayer");
			AnimationLayerBuffer.AnimationLayerWaitCondition.NativeFieldInfoPtr_Weight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimationLayerBuffer.AnimationLayerWaitCondition>.NativeClassPtr, "Weight");
			AnimationLayerBuffer.AnimationLayerWaitCondition.NativeFieldInfoPtr_IsWaiting = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimationLayerBuffer.AnimationLayerWaitCondition>.NativeClassPtr, "IsWaiting");
			AnimationLayerBuffer.AnimationLayerWaitCondition.NativeMethodInfoPtr__ctor_Public_Void_AnimationLayerEnum_Single_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AnimationLayerBuffer.AnimationLayerWaitCondition>.NativeClassPtr, 100685782);
		}
		[CallerCount(0)]
		public unsafe AnimationLayerWaitCondition(AnimationLayerEnum animationLayer, float weight, bool isWaiting = false)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref animationLayer;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref weight;
			ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref isWaiting;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AnimationLayerBuffer.AnimationLayerWaitCondition.NativeMethodInfoPtr__ctor_Public_Void_AnimationLayerEnum_Single_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AnimationLayerBuffer.AnimationLayerWaitCondition>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_AnimationLayer;
		private static readonly IntPtr NativeFieldInfoPtr_Weight;
		private static readonly IntPtr NativeFieldInfoPtr_IsWaiting;
		private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_AnimationLayerEnum_Single_Boolean_0;
		[FieldOffset(0)]
		public AnimationLayerEnum AnimationLayer;
		[FieldOffset(4)]
		public float Weight;
		[FieldOffset(8)]
		[MarshalAs(4)]
		public bool IsWaiting;
	}
}
