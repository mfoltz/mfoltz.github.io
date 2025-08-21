---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CustomizeCharacterEvent
{
	static CustomizeCharacterEvent()
	{
		Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CustomizeCharacterEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr);
		CustomizeCharacterEvent.NativeFieldInfoPtr_StationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, "StationId");
		CustomizeCharacterEvent.NativeFieldInfoPtr_BodyTypeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, "BodyTypeIndex");
		CustomizeCharacterEvent.NativeFieldInfoPtr_SkintoneIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, "SkintoneIndex");
		CustomizeCharacterEvent.NativeFieldInfoPtr_FaceIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, "FaceIndex");
		CustomizeCharacterEvent.NativeFieldInfoPtr_EyeColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, "EyeColorIndex");
		CustomizeCharacterEvent.NativeFieldInfoPtr_HairStyleIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, "HairStyleIndex");
		CustomizeCharacterEvent.NativeFieldInfoPtr_HairColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, "HairColorIndex");
		CustomizeCharacterEvent.NativeFieldInfoPtr_FeaturesIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, "FeaturesIndex");
		CustomizeCharacterEvent.NativeFieldInfoPtr_AccessoriesIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, "AccessoriesIndex");
		CustomizeCharacterEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, 100684349);
		CustomizeCharacterEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, 100684350);
		CustomizeCharacterEvent.NativeMethodInfoPtr_ContainsValidData_Public_Boolean_Entity_UserContentFlags_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, 100684351);
		CustomizeCharacterEvent.NativeMethodInfoPtr_CheckFeaturesRequirements_Private_Boolean_Byte_UserContentFlags_DynamicBuffer_1_T_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, 100684352);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CustomizeCharacterEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CustomizeCharacterEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe bool ContainsValidData(Entity customizationSettingsEntity, UserContentFlags userContent, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref customizationSettingsEntity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref userContent;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CustomizeCharacterEvent.NativeMethodInfoPtr_ContainsValidData_Public_Boolean_Entity_UserContentFlags_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool CheckFeaturesRequirements<T>(byte index, UserContentFlags userContent, DynamicBuffer<T> features)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref index;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref userContent;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref features;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CustomizeCharacterEvent.MethodInfoStoreGeneric_CheckFeaturesRequirements_Private_Boolean_Byte_UserContentFlags_DynamicBuffer_1_T_0<T>.Pointer, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StationId;
	private static readonly IntPtr NativeFieldInfoPtr_BodyTypeIndex;
	private static readonly IntPtr NativeFieldInfoPtr_SkintoneIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FaceIndex;
	private static readonly IntPtr NativeFieldInfoPtr_EyeColorIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HairStyleIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HairColorIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FeaturesIndex;
	private static readonly IntPtr NativeFieldInfoPtr_AccessoriesIndex;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_ContainsValidData_Public_Boolean_Entity_UserContentFlags_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_CheckFeaturesRequirements_Private_Boolean_Byte_UserContentFlags_DynamicBuffer_1_T_0;

	public NetworkId StationId;

	public byte BodyTypeIndex;

	public byte SkintoneIndex;

	public byte FaceIndex;

	public byte EyeColorIndex;

	public byte HairStyleIndex;

	public byte HairColorIndex;

	public byte FeaturesIndex;

	public byte AccessoriesIndex;
	private sealed class MethodInfoStoreGeneric_CheckFeaturesRequirements_Private_Boolean_Byte_UserContentFlags_DynamicBuffer_1_T_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(CustomizeCharacterEvent.NativeMethodInfoPtr_CheckFeaturesRequirements_Private_Boolean_Byte_UserContentFlags_DynamicBuffer_1_T_0, Il2CppClassPointerStore<CustomizeCharacterEvent>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
}
```
