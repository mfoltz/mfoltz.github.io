---
nav_exclude: true
search_exclude: false
---

# BlobAssetOwner

```csharp
public struct BlobAssetOwner
{
	static BlobAssetOwner()
	{
		Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "BlobAssetOwner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr);
		BlobAssetOwner.NativeFieldInfoPtr_BlobAssetBatchPtr = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, "BlobAssetBatchPtr");
		BlobAssetOwner.NativeMethodInfoPtr__ctor_Public_Void_ptr_Void_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, 100665646);
		BlobAssetOwner.NativeMethodInfoPtr_get_IsCreated_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, 100665647);
		BlobAssetOwner.NativeMethodInfoPtr_Release_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, 100665648);
		BlobAssetOwner.NativeMethodInfoPtr_Retain_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, 100665649);
		BlobAssetOwner.NativeMethodInfoPtr___codegen__Retain_Public_Static_Void_IntPtr_2 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, 100665650);
		BlobAssetOwner.NativeMethodInfoPtr___codegen__Release_Public_Static_Void_IntPtr_2 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, 100665651);
		BlobAssetOwner.NativeMethodInfoPtr_Method_Public_Static_Void_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, 100665652);
		BlobAssetOwner.NativeMethodInfoPtr_Method_Public_Static_Void_IntPtr_1 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, 100665653);
	}

	public unsafe BlobAssetOwner(void* buffer, int expectedTotalDataSize)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = buffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref expectedTotalDataSize;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.NativeMethodInfoPtr__ctor_Public_Void_ptr_Void_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public unsafe bool IsCreated
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.NativeMethodInfoPtr_get_IsCreated_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe void Release()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.NativeMethodInfoPtr_Release_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Retain()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.NativeMethodInfoPtr_Retain_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static void __codegen__Retain(IntPtr self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.NativeMethodInfoPtr___codegen__Retain_Public_Static_Void_IntPtr_2, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static void __codegen__Release(IntPtr self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.NativeMethodInfoPtr___codegen__Release_Public_Static_Void_IntPtr_2, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static void Method_Public_Static_Void_IntPtr_0(IntPtr self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.NativeMethodInfoPtr_Method_Public_Static_Void_IntPtr_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static void Method_Public_Static_Void_IntPtr_1(IntPtr self)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref self;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.NativeMethodInfoPtr_Method_Public_Static_Void_IntPtr_1, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlobAssetBatchPtr;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_ptr_Void_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsCreated_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_Release_Public_Virtual_Final_New_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_Retain_Public_Virtual_Final_New_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__Retain_Public_Static_Void_IntPtr_2;
	private static readonly IntPtr NativeMethodInfoPtr___codegen__Release_Public_Static_Void_IntPtr_2;
	private static readonly IntPtr NativeMethodInfoPtr_Method_Public_Static_Void_IntPtr_0;
	private static readonly IntPtr NativeMethodInfoPtr_Method_Public_Static_Void_IntPtr_1;

	public unsafe BlobAssetBatch* BlobAssetBatchPtr;

	public sealed class MulticastDelegateNPublicSealedVoInVoObseInBeIA0 : MulticastDelegate
	{
		static MulticastDelegateNPublicSealedVoInVoObseInBeIA0()
		{
			Il2CppClassPointerStore<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, "__codegen__Retain_000008CF$PostfixBurstDelegate");
			BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0.NativeMethodInfoPtr__ctor_Public_Void_Object_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0>.NativeClassPtr, 100665654);
			BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0.NativeMethodInfoPtr_Invoke_Public_Virtual_New_Void_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0>.NativeClassPtr, 100665655);
			BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0.NativeMethodInfoPtr_BeginInvoke_Public_Virtual_New_IAsyncResult_IntPtr_AsyncCallback_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0>.NativeClassPtr, 100665656);
			BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0.NativeMethodInfoPtr_EndInvoke_Public_Virtual_New_Void_IAsyncResult_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0>.NativeClassPtr, 100665657);
		}

		public unsafe MulticastDelegateNPublicSealedVoInVoObseInBeIA0(Object A_1, IntPtr A_2) : this(IL2CPP.il2cpp_object_new(Il2CppClassPointerStore<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0>.NativeClassPtr))
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.Il2CppObjectBaseToPtr(A_1);
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref A_2;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0.NativeMethodInfoPtr__ctor_Public_Void_Object_IntPtr_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe void Invoke(IntPtr self)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref self;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0.NativeMethodInfoPtr_Invoke_Public_Virtual_New_Void_IntPtr_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe IAsyncResult BeginInvoke(IntPtr self, AsyncCallback A_2, Object A_3)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref self;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtr(A_2);
			ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtr(A_3);
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0.NativeMethodInfoPtr_BeginInvoke_Public_Virtual_New_IAsyncResult_IntPtr_AsyncCallback_Object_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			IntPtr intPtr3 = intPtr;
			return (intPtr3 != 0) ? Il2CppObjectPool.Get<IAsyncResult>(intPtr3) : null;
		}

		public unsafe void EndInvoke(IAsyncResult A_1)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.Il2CppObjectBaseToPtr(A_1);
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0.NativeMethodInfoPtr_EndInvoke_Public_Virtual_New_Void_IAsyncResult_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		public MulticastDelegateNPublicSealedVoInVoObseInBeIA0(IntPtr pointer) : base(pointer)
		{
		}
		public static implicit operator BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0(Action<IntPtr> A_0)
		{
			return DelegateSupport.ConvertDelegate<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0>(A_0);
		}
		public static BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0 operator +(BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0 A_0, BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0 A_1)
		{
			return Delegate.Combine(A_0, A_1).Cast<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0>();
		}
		public static BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0 operator -(BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0 A_0, BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0 A_1)
		{
			Delegate result;
			Delegate @delegate = result = Delegate.Remove(A_0, A_1);
			if (@delegate != null)
			{
				result = @delegate.Cast<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA0>();
			}
			return result;
		}
		private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Object_IntPtr_0;
		private static readonly IntPtr NativeMethodInfoPtr_Invoke_Public_Virtual_New_Void_IntPtr_0;
		private static readonly IntPtr NativeMethodInfoPtr_BeginInvoke_Public_Virtual_New_IAsyncResult_IntPtr_AsyncCallback_Object_0;
		private static readonly IntPtr NativeMethodInfoPtr_EndInvoke_Public_Virtual_New_Void_IAsyncResult_0;
	}

	public static class ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0 : Object
	{
		static ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0()
		{
			Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, "__codegen__Retain_000008CF$BurstDirectCall");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0>.NativeClassPtr);
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeFieldInfoPtr_Pointer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0>.NativeClassPtr, "Pointer");
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeFieldInfoPtr_DeferredCompilation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0>.NativeClassPtr, "DeferredCompilation");
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeMethodInfoPtr_GetFunctionPointerDiscard_Private_Static_Void_byref_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0>.NativeClassPtr, 100665658);
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeMethodInfoPtr_GetFunctionPointer_Private_Static_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0>.NativeClassPtr, 100665659);
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeMethodInfoPtr_Constructor_Public_Static_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0>.NativeClassPtr, 100665660);
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeMethodInfoPtr_Initialize_Public_Static_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0>.NativeClassPtr, 100665661);
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeMethodInfoPtr_Invoke_Public_Static_Void_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0>.NativeClassPtr, 100665663);
		}

		public unsafe static void GetFunctionPointerDiscard(ref IntPtr A_0)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &A_0;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeMethodInfoPtr_GetFunctionPointerDiscard_Private_Static_Void_byref_IntPtr_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe static IntPtr GetFunctionPointer()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeMethodInfoPtr_GetFunctionPointer_Private_Static_IntPtr_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		public unsafe static void Constructor()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeMethodInfoPtr_Constructor_Public_Static_Void_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe static void Initialize()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeMethodInfoPtr_Initialize_Public_Static_Void_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe static void Invoke(IntPtr self)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref self;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeMethodInfoPtr_Invoke_Public_Static_Void_IntPtr_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		public ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0(IntPtr pointer) : base(pointer)
		{
		}
		public unsafe static IntPtr Pointer
		{
			get
			{
				IntPtr result;
				IL2CPP.il2cpp_field_static_get_value(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeFieldInfoPtr_Pointer, (void*)(&result));
				return result;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeFieldInfoPtr_Pointer, (void*)(&value));
			}
		}
		public unsafe static IntPtr DeferredCompilation
		{
			get
			{
				IntPtr result;
				IL2CPP.il2cpp_field_static_get_value(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeFieldInfoPtr_DeferredCompilation, (void*)(&result));
				return result;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe0.NativeFieldInfoPtr_DeferredCompilation, (void*)(&value));
			}
		}
		private static readonly IntPtr NativeFieldInfoPtr_Pointer;
		private static readonly IntPtr NativeFieldInfoPtr_DeferredCompilation;
		private static readonly IntPtr NativeMethodInfoPtr_GetFunctionPointerDiscard_Private_Static_Void_byref_IntPtr_0;
		private static readonly IntPtr NativeMethodInfoPtr_GetFunctionPointer_Private_Static_IntPtr_0;
		private static readonly IntPtr NativeMethodInfoPtr_Constructor_Public_Static_Void_0;
		private static readonly IntPtr NativeMethodInfoPtr_Initialize_Public_Static_Void_0;
		private static readonly IntPtr NativeMethodInfoPtr_Invoke_Public_Static_Void_IntPtr_0;
	}

	public sealed class MulticastDelegateNPublicSealedVoInVoObseInBeIA1 : MulticastDelegate
	{
		static MulticastDelegateNPublicSealedVoInVoObseInBeIA1()
		{
			Il2CppClassPointerStore<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, "__codegen__Release_000008D0$PostfixBurstDelegate");
			BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1.NativeMethodInfoPtr__ctor_Public_Void_Object_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1>.NativeClassPtr, 100665664);
			BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1.NativeMethodInfoPtr_Invoke_Public_Virtual_New_Void_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1>.NativeClassPtr, 100665665);
			BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1.NativeMethodInfoPtr_BeginInvoke_Public_Virtual_New_IAsyncResult_IntPtr_AsyncCallback_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1>.NativeClassPtr, 100665666);
			BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1.NativeMethodInfoPtr_EndInvoke_Public_Virtual_New_Void_IAsyncResult_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1>.NativeClassPtr, 100665667);
		}

		public unsafe MulticastDelegateNPublicSealedVoInVoObseInBeIA1(Object A_1, IntPtr A_2) : this(IL2CPP.il2cpp_object_new(Il2CppClassPointerStore<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1>.NativeClassPtr))
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.Il2CppObjectBaseToPtr(A_1);
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref A_2;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1.NativeMethodInfoPtr__ctor_Public_Void_Object_IntPtr_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe void Invoke(IntPtr self)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref self;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1.NativeMethodInfoPtr_Invoke_Public_Virtual_New_Void_IntPtr_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe IAsyncResult BeginInvoke(IntPtr self, AsyncCallback A_2, Object A_3)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref self;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtr(A_2);
			ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtr(A_3);
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1.NativeMethodInfoPtr_BeginInvoke_Public_Virtual_New_IAsyncResult_IntPtr_AsyncCallback_Object_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			IntPtr intPtr3 = intPtr;
			return (intPtr3 != 0) ? Il2CppObjectPool.Get<IAsyncResult>(intPtr3) : null;
		}

		public unsafe void EndInvoke(IAsyncResult A_1)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.Il2CppObjectBaseToPtr(A_1);
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1.NativeMethodInfoPtr_EndInvoke_Public_Virtual_New_Void_IAsyncResult_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		public MulticastDelegateNPublicSealedVoInVoObseInBeIA1(IntPtr pointer) : base(pointer)
		{
		}
		public static implicit operator BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1(Action<IntPtr> A_0)
		{
			return DelegateSupport.ConvertDelegate<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1>(A_0);
		}
		public static BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1 operator +(BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1 A_0, BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1 A_1)
		{
			return Delegate.Combine(A_0, A_1).Cast<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1>();
		}
		public static BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1 operator -(BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1 A_0, BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1 A_1)
		{
			Delegate result;
			Delegate @delegate = result = Delegate.Remove(A_0, A_1);
			if (@delegate != null)
			{
				result = @delegate.Cast<BlobAssetOwner.MulticastDelegateNPublicSealedVoInVoObseInBeIA1>();
			}
			return result;
		}
		private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Object_IntPtr_0;
		private static readonly IntPtr NativeMethodInfoPtr_Invoke_Public_Virtual_New_Void_IntPtr_0;
		private static readonly IntPtr NativeMethodInfoPtr_BeginInvoke_Public_Virtual_New_IAsyncResult_IntPtr_AsyncCallback_Object_0;
		private static readonly IntPtr NativeMethodInfoPtr_EndInvoke_Public_Virtual_New_Void_IAsyncResult_0;
	}

	public static class ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1 : Object
	{
		static ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1()
		{
			Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<BlobAssetOwner>.NativeClassPtr, "__codegen__Release_000008D0$BurstDirectCall");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1>.NativeClassPtr);
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeFieldInfoPtr_Pointer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1>.NativeClassPtr, "Pointer");
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeFieldInfoPtr_DeferredCompilation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1>.NativeClassPtr, "DeferredCompilation");
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeMethodInfoPtr_GetFunctionPointerDiscard_Private_Static_Void_byref_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1>.NativeClassPtr, 100665668);
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeMethodInfoPtr_GetFunctionPointer_Private_Static_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1>.NativeClassPtr, 100665669);
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeMethodInfoPtr_Constructor_Public_Static_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1>.NativeClassPtr, 100665670);
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeMethodInfoPtr_Initialize_Public_Static_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1>.NativeClassPtr, 100665671);
			BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeMethodInfoPtr_Invoke_Public_Static_Void_IntPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1>.NativeClassPtr, 100665673);
		}

		public unsafe static void GetFunctionPointerDiscard(ref IntPtr A_0)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &A_0;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeMethodInfoPtr_GetFunctionPointerDiscard_Private_Static_Void_byref_IntPtr_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe static IntPtr GetFunctionPointer()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeMethodInfoPtr_GetFunctionPointer_Private_Static_IntPtr_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		public unsafe static void Constructor()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeMethodInfoPtr_Constructor_Public_Static_Void_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe static void Initialize()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeMethodInfoPtr_Initialize_Public_Static_Void_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe static void Invoke(IntPtr self)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref self;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeMethodInfoPtr_Invoke_Public_Static_Void_IntPtr_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		public ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1(IntPtr pointer) : base(pointer)
		{
		}
		public unsafe static IntPtr Pointer
		{
			get
			{
				IntPtr result;
				IL2CPP.il2cpp_field_static_get_value(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeFieldInfoPtr_Pointer, (void*)(&result));
				return result;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeFieldInfoPtr_Pointer, (void*)(&value));
			}
		}
		public unsafe static IntPtr DeferredCompilation
		{
			get
			{
				IntPtr result;
				IL2CPP.il2cpp_field_static_get_value(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeFieldInfoPtr_DeferredCompilation, (void*)(&result));
				return result;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(BlobAssetOwner.ObjectNInternalAbstractSealedInPoDeInGeVoObCoGe1.NativeFieldInfoPtr_DeferredCompilation, (void*)(&value));
			}
		}
		private static readonly IntPtr NativeFieldInfoPtr_Pointer;
		private static readonly IntPtr NativeFieldInfoPtr_DeferredCompilation;
		private static readonly IntPtr NativeMethodInfoPtr_GetFunctionPointerDiscard_Private_Static_Void_byref_IntPtr_0;
		private static readonly IntPtr NativeMethodInfoPtr_GetFunctionPointer_Private_Static_IntPtr_0;
		private static readonly IntPtr NativeMethodInfoPtr_Constructor_Public_Static_Void_0;
		private static readonly IntPtr NativeMethodInfoPtr_Initialize_Public_Static_Void_0;
		private static readonly IntPtr NativeMethodInfoPtr_Invoke_Public_Static_Void_IntPtr_0;
	}
}
```

## Server Systems

- [ManagedDataSystem](/systems/server/ManagedDataSystem)
- [RegisterPrefabEventsCleanupSystem](/systems/server/RegisterPrefabEventsCleanupSystem)
- [RetainBlobAssetSystem](/systems/server/RetainBlobAssetSystem)
- [SetupRetainBlobAssetsSystem](/systems/server/SetupRetainBlobAssetsSystem)

## Client Systems

- [RetainBlobAssetSystem](/systems/client/RetainBlobAssetSystem)
- [SetupRetainBlobAssetsSystem](/systems/client/SetupRetainBlobAssetsSystem)
