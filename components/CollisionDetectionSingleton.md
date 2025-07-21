---
nav_exclude: true
search_exclude: false
---

# CollisionDetectionSingleton

```csharp
public struct CollisionDetectionSingleton
{
	static CollisionDetectionSingleton()
	{
		Il2CppClassPointerStore<CollisionDetectionSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CollisionDetectionSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CollisionDetectionSingleton>.NativeClassPtr);
		CollisionDetectionSingleton.NativeFieldInfoPtr__Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CollisionDetectionSingleton>.NativeClassPtr, "_Data");
		CollisionDetectionSingleton.NativeMethodInfoPtr__ctor_Public_Void_Data_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CollisionDetectionSingleton>.NativeClassPtr, 100663937);
		CollisionDetectionSingleton.NativeMethodInfoPtr_GetCollisionDetectionAsync_Public_CollisionDetection_byref_JobHandle_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CollisionDetectionSingleton>.NativeClassPtr, 100663938);
		CollisionDetectionSingleton.NativeMethodInfoPtr_GetCollisionDetectionAndComplete_Public_CollisionDetection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CollisionDetectionSingleton>.NativeClassPtr, 100663939);
		CollisionDetectionSingleton.NativeMethodInfoPtr_AddReaderDependency_Public_Void_JobHandle_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CollisionDetectionSingleton>.NativeClassPtr, 100663940);
		CollisionDetectionSingleton.NativeMethodInfoPtr_AddWriterDependency_Public_Void_JobHandle_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CollisionDetectionSingleton>.NativeClassPtr, 100663941);
		CollisionDetectionSingleton.NativeMethodInfoPtr_GetDependencyRW_Public_JobHandleManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CollisionDetectionSingleton>.NativeClassPtr, 100663942);
	}

	public unsafe CollisionDetectionSingleton(CollisionDetectionSingleton.Data data)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref data;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CollisionDetectionSingleton.NativeMethodInfoPtr__ctor_Public_Void_Data_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe CollisionDetection GetCollisionDetectionAsync(out JobHandle dependency)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &dependency;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CollisionDetectionSingleton.NativeMethodInfoPtr_GetCollisionDetectionAsync_Public_CollisionDetection_byref_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe CollisionDetection GetCollisionDetectionAndComplete()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CollisionDetectionSingleton.NativeMethodInfoPtr_GetCollisionDetectionAndComplete_Public_CollisionDetection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void AddReaderDependency(JobHandle jobHandle)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref jobHandle;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CollisionDetectionSingleton.NativeMethodInfoPtr_AddReaderDependency_Public_Void_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void AddWriterDependency(JobHandle jobHandle)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref jobHandle;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CollisionDetectionSingleton.NativeMethodInfoPtr_AddWriterDependency_Public_Void_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe JobHandleManager GetDependencyRW()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CollisionDetectionSingleton.NativeMethodInfoPtr_GetDependencyRW_Public_JobHandleManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CollisionDetectionSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr__Data;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Data_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCollisionDetectionAsync_Public_CollisionDetection_byref_JobHandle_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCollisionDetectionAndComplete_Public_CollisionDetection_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddReaderDependency_Public_Void_JobHandle_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddWriterDependency_Public_Void_JobHandle_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetDependencyRW_Public_JobHandleManager_0;

	public CollisionDetectionSingleton.Data _Data;

	public struct Data
	{
		static Data()
		{
			Il2CppClassPointerStore<CollisionDetectionSingleton.Data>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<CollisionDetectionSingleton>.NativeClassPtr, "Data");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CollisionDetectionSingleton.Data>.NativeClassPtr);
			CollisionDetectionSingleton.Data.NativeFieldInfoPtr_Static = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CollisionDetectionSingleton.Data>.NativeClassPtr, "Static");
			CollisionDetectionSingleton.Data.NativeFieldInfoPtr_Dynamic = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CollisionDetectionSingleton.Data>.NativeClassPtr, "Dynamic");
			CollisionDetectionSingleton.Data.NativeFieldInfoPtr_WriterHandle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CollisionDetectionSingleton.Data>.NativeClassPtr, "WriterHandle");
			CollisionDetectionSingleton.Data.NativeFieldInfoPtr_ReaderHandle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CollisionDetectionSingleton.Data>.NativeClassPtr, "ReaderHandle");
			CollisionDetectionSingleton.Data.NativeMethodInfoPtr__ctor_Public_Void_Allocator_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CollisionDetectionSingleton.Data>.NativeClassPtr, 100663943);
			CollisionDetectionSingleton.Data.NativeMethodInfoPtr_Dispose_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CollisionDetectionSingleton.Data>.NativeClassPtr, 100663944);
		}

		public unsafe Data(Allocator allocator)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref allocator;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CollisionDetectionSingleton.Data.NativeMethodInfoPtr__ctor_Public_Void_Allocator_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe void Dispose()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CollisionDetectionSingleton.Data.NativeMethodInfoPtr_Dispose_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CollisionDetectionSingleton.Data>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_Static;
		private static readonly IntPtr NativeFieldInfoPtr_Dynamic;
		private static readonly IntPtr NativeFieldInfoPtr_WriterHandle;
		private static readonly IntPtr NativeFieldInfoPtr_ReaderHandle;
		private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Allocator_0;
		private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Void_0;

		public CollisionDetectionSingleton.Data.HashmapData Static;

		public CollisionDetectionSingleton.Data.HashmapData Dynamic;

		public JobHandleManager WriterHandle;

		public JobHandleManager ReaderHandle;

		public struct HashmapData
		{
			static HashmapData()
			{
				Il2CppClassPointerStore<CollisionDetectionSingleton.Data.HashmapData>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<CollisionDetectionSingleton.Data>.NativeClassPtr, "HashmapData");
				IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CollisionDetectionSingleton.Data.HashmapData>.NativeClassPtr);
				CollisionDetectionSingleton.Data.HashmapData.NativeFieldInfoPtr_CurrentCapacity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CollisionDetectionSingleton.Data.HashmapData>.NativeClassPtr, "CurrentCapacity");
				CollisionDetectionSingleton.Data.HashmapData.NativeFieldInfoPtr_EntityMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CollisionDetectionSingleton.Data.HashmapData>.NativeClassPtr, "EntityMap");
				CollisionDetectionSingleton.Data.HashmapData.NativeMethodInfoPtr_EnsureCapacity_Public_Void_JobHandleManager_Int32_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CollisionDetectionSingleton.Data.HashmapData>.NativeClassPtr, 100663945);
			}

			public unsafe void EnsureCapacity(JobHandleManager hashmapRWHandle, int requiredCapacity, bool keepHashmapContents)
			{
				IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
				*ptr = ref hashmapRWHandle;
				ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref requiredCapacity;
				ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref keepHashmapContents;
				IntPtr intPtr2;
				IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CollisionDetectionSingleton.Data.HashmapData.NativeMethodInfoPtr_EnsureCapacity_Public_Void_JobHandleManager_Int32_Boolean_0, ref this, (void**)ptr, ref intPtr2);
				Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			}
			public Object BoxIl2CppObject()
			{
				return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CollisionDetectionSingleton.Data.HashmapData>.NativeClassPtr, ref this));
			}
			private static readonly IntPtr NativeFieldInfoPtr_CurrentCapacity;
			private static readonly IntPtr NativeFieldInfoPtr_EntityMap;
			private static readonly IntPtr NativeMethodInfoPtr_EnsureCapacity_Public_Void_JobHandleManager_Int32_Boolean_0;

			public int CurrentCapacity;

			public NativeParallelMultiHashMap<int2, DetectedEntity> EntityMap;
		}
	}
}
```

## Server Systems

- [AlertAlliesOnDeathSystem](/systems/server/AlertAlliesOnDeathSystem)
- [EvaluateCastOptionsSystem](/systems/server/EvaluateCastOptionsSystem)
- [RespawnAiEventSystem](/systems/server/RespawnAiEventSystem)
- [StablesSystem_ClientEvents](/systems/server/StablesSystem_ClientEvents)
