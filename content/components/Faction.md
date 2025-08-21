---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Faction
{
	static Faction()
	{
		Il2CppClassPointerStore<Faction>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Faction");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Faction>.NativeClassPtr);
		Faction.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Faction>.NativeClassPtr, "Data");
		Faction.NativeMethodInfoPtr_IsFriendlyTowards_Public_Boolean_byref_Faction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Faction>.NativeClassPtr, 100663972);
		Faction.NativeMethodInfoPtr_IsNeutralTowards_Public_Boolean_byref_Faction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Faction>.NativeClassPtr, 100663973);
		Faction.NativeMethodInfoPtr_IsHostileTowards_Public_Boolean_byref_Faction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Faction>.NativeClassPtr, 100663974);
		Faction.NativeMethodInfoPtr_HasRelationTowards_Public_Boolean_FactionRelation_byref_Faction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Faction>.NativeClassPtr, 100663975);
		Faction.NativeMethodInfoPtr_HasRelationTowards_Public_Boolean_FactionEnum_byref_Faction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Faction>.NativeClassPtr, 100663976);
		Faction.NativeMethodInfoPtr_GetRelation_Public_FactionEnum_FactionRelation_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Faction>.NativeClassPtr, 100663977);
	}

	public unsafe bool IsFriendlyTowards([In] ref Faction faction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &faction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Faction.NativeMethodInfoPtr_IsFriendlyTowards_Public_Boolean_byref_Faction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsNeutralTowards([In] ref Faction faction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &faction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Faction.NativeMethodInfoPtr_IsNeutralTowards_Public_Boolean_byref_Faction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsHostileTowards([In] ref Faction faction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &faction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Faction.NativeMethodInfoPtr_IsHostileTowards_Public_Boolean_byref_Faction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool HasRelationTowards(FactionRelation relation, [In] ref Faction faction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref relation;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &faction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Faction.NativeMethodInfoPtr_HasRelationTowards_Public_Boolean_FactionRelation_byref_Faction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool HasRelationTowards(FactionEnum relation, [In] ref Faction faction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref relation;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &faction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Faction.NativeMethodInfoPtr_HasRelationTowards_Public_Boolean_FactionEnum_byref_Faction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe FactionEnum GetRelation(FactionRelation relation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref relation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Faction.NativeMethodInfoPtr_GetRelation_Public_FactionEnum_FactionRelation_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Faction>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	private static readonly IntPtr NativeMethodInfoPtr_IsFriendlyTowards_Public_Boolean_byref_Faction_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsNeutralTowards_Public_Boolean_byref_Faction_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsHostileTowards_Public_Boolean_byref_Faction_0;
	private static readonly IntPtr NativeMethodInfoPtr_HasRelationTowards_Public_Boolean_FactionRelation_byref_Faction_0;
	private static readonly IntPtr NativeMethodInfoPtr_HasRelationTowards_Public_Boolean_FactionEnum_byref_Faction_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRelation_Public_FactionEnum_FactionRelation_0;

	public BlobAssetReference<FactionBlobAsset> Data;
}
```
