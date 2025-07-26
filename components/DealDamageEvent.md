---
nav_exclude: true
search_exclude: true
---

# DealDamageEvent

```csharp
public struct DealDamageEvent
{
	static DealDamageEvent()
	{
		Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DealDamageEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr);
		DealDamageEvent.NativeFieldInfoPtr_MaterialModifiers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, "MaterialModifiers");
		DealDamageEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, "Target");
		DealDamageEvent.NativeFieldInfoPtr_SpellSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, "SpellSource");
		DealDamageEvent.NativeFieldInfoPtr_MainType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, "MainType");
		DealDamageEvent.NativeFieldInfoPtr_MainFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, "MainFactor");
		DealDamageEvent.NativeFieldInfoPtr_ResourceModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, "ResourceModifier");
		DealDamageEvent.NativeFieldInfoPtr_RawDamage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, "RawDamage");
		DealDamageEvent.NativeFieldInfoPtr_RawDamagePercent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, "RawDamagePercent");
		DealDamageEvent.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, "Modifier");
		DealDamageEvent.NativeFieldInfoPtr_DealDamageFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, "DealDamageFlags");
		DealDamageEvent.NativeMethodInfoPtr__ctor_Public_Void_Entity_MainDamageType_Single_Single_EntityTypeModifiers_Entity_Single_Single_Single_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, 100665644);
		DealDamageEvent.NativeMethodInfoPtr_HasFlag_Public_Boolean_DealDamageFlag_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, 100665645);
		DealDamageEvent.NativeMethodInfoPtr_CreateDealDamageEvent_Public_Static_Entity_EntityCommandBuffer_Entity_DealDamageParameters_Entity_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, 100665646);
		DealDamageEvent.NativeMethodInfoPtr_CreateDealDamageEvent_Public_Static_Entity_EntityCommandBuffer_Entity_MainDamageType_Single_Single_EntityTypeModifiers_Entity_Single_Single_Single_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, 100665647);
		DealDamageEvent.NativeMethodInfoPtr_CreateDealDamageEvent_Public_Static_Entity_EntityManager_Entity_DealDamageParameters_Entity_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, 100665648);
		DealDamageEvent.NativeMethodInfoPtr_CreateDealDamageEvent_Public_Static_Entity_EntityManager_Entity_MainDamageType_Single_Single_EntityTypeModifiers_Entity_Single_Single_Single_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, 100665649);
	}

	public unsafe DealDamageEvent(Entity target, MainDamageType mainType, float mainFactor, float resourceModifier, EntityTypeModifiers materialModifiers, Entity source, float rawDamage, float rawDamagePercent, float modifier, int dealDamageFlags)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)10) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref target;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref mainType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref mainFactor;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref resourceModifier;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref materialModifiers;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref source;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref rawDamage;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref rawDamagePercent;
		ptr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modifier;
		ptr[checked(unchecked((UIntPtr)9) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref dealDamageFlags;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DealDamageEvent.NativeMethodInfoPtr__ctor_Public_Void_Entity_MainDamageType_Single_Single_EntityTypeModifiers_Entity_Single_Single_Single_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe bool HasFlag(DealDamageFlag flag)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref flag;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DealDamageEvent.NativeMethodInfoPtr_HasFlag_Public_Boolean_DealDamageFlag_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Entity CreateDealDamageEvent(EntityCommandBuffer commandBuffer, Entity entity, DealDamageParameters parameters, Entity source, float modifier = 1f)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref parameters;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref source;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modifier;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DealDamageEvent.NativeMethodInfoPtr_CreateDealDamageEvent_Public_Static_Entity_EntityCommandBuffer_Entity_DealDamageParameters_Entity_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Entity CreateDealDamageEvent(EntityCommandBuffer commandBuffer, Entity entity, MainDamageType mainType, float mainFactor, float resourceModifier, EntityTypeModifiers materialModifier, Entity source, float rawDamage = 0f, float rawDamagePercentage = 0f, float modifier = 1f, int dealDamageFlags = 2048)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)11) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref mainType;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref mainFactor;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref resourceModifier;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref materialModifier;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref source;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref rawDamage;
		ptr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref rawDamagePercentage;
		ptr[checked(unchecked((UIntPtr)9) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modifier;
		ptr[checked(unchecked((UIntPtr)10) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref dealDamageFlags;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DealDamageEvent.NativeMethodInfoPtr_CreateDealDamageEvent_Public_Static_Entity_EntityCommandBuffer_Entity_MainDamageType_Single_Single_EntityTypeModifiers_Entity_Single_Single_Single_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Entity CreateDealDamageEvent(EntityManager entityManager, Entity entity, DealDamageParameters parameters, Entity source, float modifier = 1f)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref parameters;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref source;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modifier;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DealDamageEvent.NativeMethodInfoPtr_CreateDealDamageEvent_Public_Static_Entity_EntityManager_Entity_DealDamageParameters_Entity_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Entity CreateDealDamageEvent(EntityManager entityManager, Entity entity, MainDamageType mainType, float mainFactor, float resourceModifier, EntityTypeModifiers materialModifier, Entity source, float rawDamage = 0f, float rawDamagePercent = 0f, float modifier = 1f, int dealDamageFlags = 2050)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)11) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref mainType;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref mainFactor;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref resourceModifier;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref materialModifier;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref source;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref rawDamage;
		ptr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref rawDamagePercent;
		ptr[checked(unchecked((UIntPtr)9) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modifier;
		ptr[checked(unchecked((UIntPtr)10) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref dealDamageFlags;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DealDamageEvent.NativeMethodInfoPtr_CreateDealDamageEvent_Public_Static_Entity_EntityManager_Entity_MainDamageType_Single_Single_EntityTypeModifiers_Entity_Single_Single_Single_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DealDamageEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaterialModifiers;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_SpellSource;
	private static readonly IntPtr NativeFieldInfoPtr_MainType;
	private static readonly IntPtr NativeFieldInfoPtr_MainFactor;
	private static readonly IntPtr NativeFieldInfoPtr_ResourceModifier;
	private static readonly IntPtr NativeFieldInfoPtr_RawDamage;
	private static readonly IntPtr NativeFieldInfoPtr_RawDamagePercent;
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;
	private static readonly IntPtr NativeFieldInfoPtr_DealDamageFlags;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Entity_MainDamageType_Single_Single_EntityTypeModifiers_Entity_Single_Single_Single_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_HasFlag_Public_Boolean_DealDamageFlag_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateDealDamageEvent_Public_Static_Entity_EntityCommandBuffer_Entity_DealDamageParameters_Entity_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateDealDamageEvent_Public_Static_Entity_EntityCommandBuffer_Entity_MainDamageType_Single_Single_EntityTypeModifiers_Entity_Single_Single_Single_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateDealDamageEvent_Public_Static_Entity_EntityManager_Entity_DealDamageParameters_Entity_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateDealDamageEvent_Public_Static_Entity_EntityManager_Entity_MainDamageType_Single_Single_EntityTypeModifiers_Entity_Single_Single_Single_Int32_0;

	public EntityTypeModifiers MaterialModifiers;

	public Entity Target;

	public Entity SpellSource;

	public readonly MainDamageType MainType;

	public readonly float MainFactor;

	public readonly float ResourceModifier;

	public readonly float RawDamage;

	public readonly float RawDamagePercent;

	public readonly float Modifier;

	public readonly int DealDamageFlags;
}
```
