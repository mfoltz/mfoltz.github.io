---
nav_exclude: true
search_exclude: true
---

# CreateCharacterEvent

```csharp
public struct CreateCharacterEvent
{
	static CreateCharacterEvent()
	{
		Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CreateCharacterEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr);
		CreateCharacterEvent.NativeFieldInfoPtr_GenderIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr, "GenderIndex");
		CreateCharacterEvent.NativeFieldInfoPtr_SkintoneIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr, "SkintoneIndex");
		CreateCharacterEvent.NativeFieldInfoPtr_FaceIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr, "FaceIndex");
		CreateCharacterEvent.NativeFieldInfoPtr_EyeColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr, "EyeColorIndex");
		CreateCharacterEvent.NativeFieldInfoPtr_HairStyleIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr, "HairStyleIndex");
		CreateCharacterEvent.NativeFieldInfoPtr_HairColorIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr, "HairColorIndex");
		CreateCharacterEvent.NativeFieldInfoPtr_FeaturesIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr, "FeaturesIndex");
		CreateCharacterEvent.NativeFieldInfoPtr_AccessoriesIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr, "AccessoriesIndex");
		CreateCharacterEvent.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr, "Name");
		CreateCharacterEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr, 100684455);
		CreateCharacterEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr, 100684456);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CreateCharacterEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CreateCharacterEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateCharacterEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GenderIndex;
	private static readonly IntPtr NativeFieldInfoPtr_SkintoneIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FaceIndex;
	private static readonly IntPtr NativeFieldInfoPtr_EyeColorIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HairStyleIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HairColorIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FeaturesIndex;
	private static readonly IntPtr NativeFieldInfoPtr_AccessoriesIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public byte GenderIndex;

	public byte SkintoneIndex;

	public byte FaceIndex;

	public byte EyeColorIndex;

	public byte HairStyleIndex;

	public byte HairColorIndex;

	public byte FeaturesIndex;

	public byte AccessoriesIndex;

	public FixedString64Bytes Name;
}
```
