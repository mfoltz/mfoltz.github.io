---
nav_exclude: true
search_exclude: true
---

# ModificationsRegistry

```csharp
[StructLayout(2)]
public struct ModificationsRegistry
{
	static ModificationsRegistry()
	{
		Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ModificationsRegistry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr);
		ModificationsRegistry.NativeFieldInfoPtr_IdGenerator = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "IdGenerator");
		ModificationsRegistry.NativeFieldInfoPtr__SourceReferences = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_SourceReferences");
		ModificationsRegistry.NativeFieldInfoPtr__EntityModifiableEntries = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_EntityModifiableEntries");
		ModificationsRegistry.NativeFieldInfoPtr__FloatEntries = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_FloatEntries");
		ModificationsRegistry.NativeFieldInfoPtr__IntEntries = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_IntEntries");
		ModificationsRegistry.NativeFieldInfoPtr__EntityEntries = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_EntityEntries");
		ModificationsRegistry.NativeFieldInfoPtr__Float3Entries = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_Float3Entries");
		ModificationsRegistry.NativeFieldInfoPtr__LongEntries = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_LongEntries");
		ModificationsRegistry.NativeFieldInfoPtr__PrefabGUIDEntries = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_PrefabGUIDEntries");
		ModificationsRegistry.NativeFieldInfoPtr__NetworkedEntityEntries = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_NetworkedEntityEntries");
		ModificationsRegistry.NativeFieldInfoPtr__BoolEntries = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_BoolEntries");
		ModificationsRegistry.NativeFieldInfoPtr__WorldType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_WorldType");
		ModificationsRegistry.NativeFieldInfoPtr__SerializeSourceReferences = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_SerializeSourceReferences");
		ModificationsRegistry.NativeFieldInfoPtr__SerializeModifiableEntries = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_SerializeModifiableEntries");
		ModificationsRegistry.NativeFieldInfoPtr__SerializeEntityModifiableEntries = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "_SerializeEntityModifiableEntries");
		ModificationsRegistry.NativeMethodInfoPtr__ctor_Public_Void_byref_ModificationIDs_WorldType_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666374);
		ModificationsRegistry.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666375);
		ModificationsRegistry.NativeMethodInfoPtr_CreateModification_Private_ModificationData_1_TValue_ModificationType_TValue_Int32_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666376);
		ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_TValue_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666377);
		ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Private_TValue_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666378);
		ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Private_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_byref_Readonly_TValue_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666379);
		ModificationsRegistry.NativeMethodInfoPtr_AddModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_byref_ModificationData_1_TValue_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666380);
		ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_ModificationId_byref_TValue_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666381);
		ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666382);
		ModificationsRegistry.NativeMethodInfoPtr_TryRemoveEntryModification_Private_Static_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_ModificationId_byref_ModifiableEntry_1_TValue_byref_ModificationData_1_TValue_Boolean_WorldType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666383);
		ModificationsRegistry.NativeMethodInfoPtr_LogModifiableInfo_Private_Static_Void_ModifiableKey_WorldType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666384);
		ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Private_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666385);
		ModificationsRegistry.NativeMethodInfoPtr_DisposeEntityEntries_Public_Void_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666386);
		ModificationsRegistry.NativeMethodInfoPtr_ClearLooseSourceModifications_Public_Int32_Entity_byref_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666387);
		ModificationsRegistry.NativeMethodInfoPtr_RemoveAndFixReference_Private_Void_byref_ModificationReference_byref_ModifiableEntries_1_TValue_byref_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666388);
		ModificationsRegistry.NativeMethodInfoPtr_GetSourceModificationReferences_Public_NativeArray_1_ModificationReference_Entity_Allocator_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666389);
		ModificationsRegistry.NativeMethodInfoPtr_GetMetricCounts_Public_Void_byref_Int32_byref_Int32_byref_Int32_byref_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666390);
		ModificationsRegistry.NativeMethodInfoPtr_GetEntryCounts_Private_Static_Void_byref_Int32_byref_Int32_byref_Int32_byref_ModifiableEntries_1_T_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666391);
		ModificationsRegistry.NativeMethodInfoPtr_GetFormattedModificationsMessage_Public_Void_StringBuilder_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666392);
		ModificationsRegistry.NativeMethodInfoPtr_PrintEntityList_Private_Static_Void_StringBuilder_EntityManager_byref_PrefabLookupMap_Dictionary_2_Entity_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666393);
		ModificationsRegistry.NativeMethodInfoPtr_GetFormattedEntityModificationsMessage_Public_Void_StringBuilder_EntityManager_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666394);
		ModificationsRegistry.NativeMethodInfoPtr_GetFormattedEntityModificationsMessage_Private_Void_StringBuilder_EntityManager_Entity_byref_PrintModificationsData_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666395);
		ModificationsRegistry.NativeMethodInfoPtr_TryGetFieldName_Private_Static_Boolean_FieldIdentifier_Dictionary_2_FieldIdentifier_String_byref_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666396);
		ModificationsRegistry.NativeMethodInfoPtr_GetFormattedModificationsForKey_Private_Static_Void_Entity_byref_ModifiableEntries_1_TValue_byref_ModifiableKey_StringBuilder_byref_EntityManager_byref_PrintModificationsData_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666397);
		ModificationsRegistry.NativeMethodInfoPtr_LogIfNaN_Private_Void_ModifiableKey_ModifiableFloat_Single_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666398);
		ModificationsRegistry.NativeMethodInfoPtr_LogIfNaN_Private_Void_ModifiableKey_ModifiableFloat3_float3_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666399);
		ModificationsRegistry.NativeMethodInfoPtr_LogNaN_Private_Void_ModifiableKey_TValue_ModifiableEntry_1_TValue_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666400);
		ModificationsRegistry.NativeMethodInfoPtr_Serialize_Public_Void_byref_NetBufferOut_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666401);
		ModificationsRegistry.NativeMethodInfoPtr_Deserialize_Public_Void_byref_NetBufferIn_byref_PersistentDeserializationHeaderData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666402);
		ModificationsRegistry.NativeMethodInfoPtr_RemapModificationIds_Public_Void_byref_NativeParallelHashMap_2_ModificationId_ModificationId_byref_Int32_byref_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666403);
		ModificationsRegistry.NativeMethodInfoPtr_SerializeSourceReferences_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModificationReference_byref_NetBufferOut_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666404);
		ModificationsRegistry.NativeMethodInfoPtr_DeserializeSourceReferences_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModificationReference_byref_NetBufferIn_byref_PersistentDeserializationHeaderData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666405);
		ModificationsRegistry.NativeMethodInfoPtr_SerializeEntityModifiableEntries_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModifiableFieldId_byref_NetBufferOut_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666406);
		ModificationsRegistry.NativeMethodInfoPtr_DeserializeModifiableEntries_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModifiableFieldId_byref_NetBufferIn_byref_PersistentDeserializationHeaderData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666407);
		ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666408);
		ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Single_Entity_byref_TComponent_byref_ModifiableFloat_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666409);
		ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableFloat_byref_Readonly_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666410);
		ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationType_Single_Int32_Entity_byref_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666411);
		ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationId_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666412);
		ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666413);
		ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666414);
		ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666415);
		ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Int32_Entity_byref_TComponent_byref_ModifiableInt_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666416);
		ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableInt_byref_Readonly_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666417);
		ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationType_Int32_Int32_Entity_byref_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666418);
		ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationId_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666419);
		ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666420);
		ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666421);
		ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666422);
		ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Entity_Entity_byref_TComponent_byref_ModifiableEntity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666423);
		ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableEntity_byref_Readonly_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666424);
		ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationType_Entity_Int32_Entity_byref_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666425);
		ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationId_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666426);
		ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666427);
		ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666428);
		ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666429);
		ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_float3_Entity_byref_TComponent_byref_ModifiableFloat3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666430);
		ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableFloat3_byref_Readonly_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666431);
		ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationType_float3_Int32_Entity_byref_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666432);
		ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationId_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666433);
		ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666434);
		ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666435);
		ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_Int64_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666436);
		ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Int64_Entity_byref_TComponent_byref_ModifiableLong_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666437);
		ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableLong_byref_Readonly_Int64_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666438);
		ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationType_Int64_Int32_Entity_byref_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666439);
		ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationId_Int64_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666440);
		ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666441);
		ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666442);
		ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666443);
		ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_PrefabGUID_Entity_byref_TComponent_byref_ModifiablePrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666444);
		ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiablePrefabGUID_byref_Readonly_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666445);
		ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationType_PrefabGUID_Int32_Entity_byref_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666446);
		ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationId_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666447);
		ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666448);
		ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666449);
		ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_NetworkedEntity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666450);
		ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_NetworkedEntity_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666451);
		ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_byref_Readonly_NetworkedEntity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666452);
		ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationType_NetworkedEntity_Int32_Entity_byref_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666453);
		ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationId_NetworkedEntity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666454);
		ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666455);
		ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666456);
		ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666457);
		ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableBool_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666458);
		ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableBool_byref_Readonly_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666459);
		ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationType_Boolean_Int32_Entity_byref_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666460);
		ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationId_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666461);
		ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666462);
		ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, 100666463);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1083444, RefRangeEnd = 1083445, XrefRangeStart = 1083412, XrefRangeEnd = 1083444, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe ModificationsRegistry([In] ref ModificationIDs idGenerator, WorldType worldType, int capacity = 512)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &idGenerator;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref worldType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref capacity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr__ctor_Public_Void_byref_ModificationIDs_WorldType_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1083502, RefRangeEnd = 1083503, XrefRangeStart = 1083445, XrefRangeEnd = 1083502, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1083503, XrefRangeEnd = 1083505, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe ModificationData<TValue> CreateModification<TValue>(ModificationType modType, TValue modValue, int priority, Entity modificationSource)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modType;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr;
		if (!typeof(TValue).IsValueType)
		{
			TValue tvalue = modValue;
			intPtr = ((tvalue is string) ? IL2CPP.ManagedStringToIl2Cpp(tvalue as string) : IL2CPP.Il2CppObjectBaseToPtr(tvalue as Il2CppObjectBase));
		}
		else
		{
			intPtr = ref modValue;
		}
		ptr2 = intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref priority;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationSource;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_CreateModification_Private_ModificationData_1_TValue_ModificationType_TValue_Int32_Entity_0<TValue>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1083517, RefRangeEnd = 1083518, XrefRangeStart = 1083505, XrefRangeEnd = 1083517, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetBaseValue<TModifiable, TValue>([In] ref ModifiableKey key, ref TModifiable modifiable, ref ModifiableEntries<TValue> modifiableEntries, TValue newBaseValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &key;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiable);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiableEntries;
		ref IntPtr ptr3 = ref ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr2;
		if (!typeof(TValue).IsValueType)
		{
			TValue tvalue = newBaseValue;
			intPtr2 = ((tvalue is string) ? IL2CPP.ManagedStringToIl2Cpp(tvalue as string) : IL2CPP.Il2CppObjectBaseToPtr(tvalue as Il2CppObjectBase));
		}
		else
		{
			intPtr2 = ref newBaseValue;
		}
		ptr3 = intPtr2;
		IntPtr intPtr4;
		IntPtr intPtr3 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_SetBaseValue_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_TValue_0<TModifiable, TValue>.Pointer, ref this, (void**)ptr, ref intPtr4);
		Il2CppException.RaiseExceptionIfNecessary(intPtr4);
		IntPtr intPtr5 = intPtr;
		modifiable = ((intPtr5 == 0) ? null : IL2CPP.PointerToValueGeneric<TModifiable>(intPtr5, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1083518, XrefRangeEnd = 1083523, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe TValue GetBaseValue<TModifiable, TValue>([In] ref ModifiableKey key, [In] ref TModifiable modifiable, ref ModifiableEntries<TValue> modifiableEntries)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &key;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiable);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiableEntries;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_GetBaseValue_Private_TValue_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_0<TModifiable, TValue>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiable = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TModifiable>(intPtr4, false, false));
		return IL2CPP.PointerToValueGeneric<TValue>(intPtr2, false, true);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1083523, XrefRangeEnd = 1083532, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetEntry<TValue>([In] ref ModifiableKey key, ref ModifiableEntries<TValue> modifiableEntries, out ModifiableEntry<TValue>.Readonly modifiableEntry)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &key;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiableEntries;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiableEntry;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_TryGetEntry_Private_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_byref_Readonly_TValue_0<TValue>.Pointer, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1083597, RefRangeEnd = 1083598, XrefRangeStart = 1083532, XrefRangeEnd = 1083597, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddModification<TModifiable, TValue>([In] ref ModifiableKey key, ref TModifiable modifiable, ref ModifiableEntries<TValue> modifiableEntries, [In] ref ModificationData<TValue> data)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &key;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiable);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiableEntries;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &data;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_AddModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_byref_ModificationData_1_TValue_0<TModifiable, TValue>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiable = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TModifiable>(intPtr4, false, false));
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1083633, RefRangeEnd = 1083634, XrefRangeStart = 1083598, XrefRangeEnd = 1083633, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UpdateModification<TModifiable, TValue>([In] ref ModifiableKey key, ref TModifiable modifiable, ref ModifiableEntries<TValue> modifiableEntries, ModificationId modificationId, [In] ref TValue modValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &key;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiable);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiableEntries;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		ref IntPtr ptr3 = ref ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr2 = IL2CPP.Il2CppObjectBaseToPtr(modValue);
		ptr3 = &intPtr2;
		IntPtr intPtr4;
		IntPtr intPtr3 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_UpdateModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_ModificationId_byref_TValue_0<TModifiable, TValue>.Pointer, ref this, (void**)ptr, ref intPtr4);
		Il2CppException.RaiseExceptionIfNecessary(intPtr4);
		IntPtr intPtr5 = intPtr;
		modifiable = ((intPtr5 == 0) ? null : IL2CPP.PointerToValueGeneric<TModifiable>(intPtr5, false, false));
		IntPtr intPtr6 = intPtr2;
		modValue = ((intPtr6 == 0) ? null : IL2CPP.PointerToValueGeneric<TValue>(intPtr6, false, false));
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1083652, RefRangeEnd = 1083653, XrefRangeStart = 1083634, XrefRangeEnd = 1083652, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void RemoveModification<TModifiable, TValue>([In] ref ModifiableKey key, ref TModifiable modifiable, ref ModifiableEntries<TValue> modifiableEntries, ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &key;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiable);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiableEntries;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_RemoveModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_ModificationId_0<TModifiable, TValue>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiable = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TModifiable>(intPtr4, false, false));
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1083700, RefRangeEnd = 1083702, XrefRangeStart = 1083653, XrefRangeEnd = 1083700, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool TryRemoveEntryModification<TValue>([In] ref ModifiableKey key, ref ModifiableEntries<TValue> modifiableEntries, ModificationId modificationId, out ModifiableEntry<TValue> entry, out ModificationData<TValue> removedModification, bool logError, WorldType worldType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &key;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiableEntries;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entry;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &removedModification;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref logError;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref worldType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_TryRemoveEntryModification_Private_Static_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_ModificationId_byref_ModifiableEntry_1_TValue_byref_ModificationData_1_TValue_Boolean_WorldType_0<TValue>.Pointer, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(5)]
	[CachedScanResults(RefRangeStart = 1083710, RefRangeEnd = 1083715, XrefRangeStart = 1083702, XrefRangeEnd = 1083710, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void LogModifiableInfo(ModifiableKey key, WorldType worldType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref key;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref worldType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_LogModifiableInfo_Private_Static_Void_ModifiableKey_WorldType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1083753, RefRangeEnd = 1083755, XrefRangeStart = 1083715, XrefRangeEnd = 1083753, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool DisposeModifications<TValue>([In] ref ModifiableKey key, ref ModifiableEntries<TValue> modifiableEntries, bool logError = true)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &key;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiableEntries;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref logError;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_DisposeModifications_Private_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_Boolean_0<TValue>.Pointer, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1083795, RefRangeEnd = 1083796, XrefRangeStart = 1083755, XrefRangeEnd = 1083795, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void DisposeEntityEntries(Entity entity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_DisposeEntityEntries_Public_Void_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1083854, RefRangeEnd = 1083855, XrefRangeStart = 1083796, XrefRangeEnd = 1083854, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe int ClearLooseSourceModifications(Entity entity, ref EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_ClearLooseSourceModifications_Public_Int32_Entity_byref_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1083868, RefRangeEnd = 1083869, XrefRangeStart = 1083855, XrefRangeEnd = 1083868, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void RemoveAndFixReference<TModifiable, TValue>([In] ref ModificationReference reference, ref ModifiableEntries<TValue> modifiableEntries, ref EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &reference;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiableEntries;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_RemoveAndFixReference_Private_Void_byref_ModificationReference_byref_ModifiableEntries_1_TValue_byref_EntityManager_0<TModifiable, TValue>.Pointer, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1083869, XrefRangeEnd = 1083891, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe NativeArray<ModificationReference> GetSourceModificationReferences(Entity sourceEntity, Allocator allocator)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref sourceEntity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref allocator;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_GetSourceModificationReferences_Public_NativeArray_1_ModificationReference_Entity_Allocator_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1083919, RefRangeEnd = 1083920, XrefRangeStart = 1083891, XrefRangeEnd = 1083919, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void GetMetricCounts(out int modifiableEntries, out int modifications, out int totalModifications, out int freeModifications)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &modifiableEntries;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifications;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &totalModifications;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &freeModifications;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_GetMetricCounts_Public_Void_byref_Int32_byref_Int32_byref_Int32_byref_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1083930, RefRangeEnd = 1083931, XrefRangeStart = 1083920, XrefRangeEnd = 1083930, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void GetEntryCounts<T>(ref int modifiables, ref int modifications, ref int freeModifications, [In] ref ModifiableEntries<T> modificationEntries)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &modifiables;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifications;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &freeModifications;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modificationEntries;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_GetEntryCounts_Private_Static_Void_byref_Int32_byref_Int32_byref_Int32_byref_ModifiableEntries_1_T_0<T>.Pointer, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1084134, RefRangeEnd = 1084135, XrefRangeStart = 1083931, XrefRangeEnd = 1084134, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void GetFormattedModificationsMessage(StringBuilder stringBuilder, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(stringBuilder);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_GetFormattedModificationsMessage_Public_Void_StringBuilder_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1084234, RefRangeEnd = 1084236, XrefRangeStart = 1084135, XrefRangeEnd = 1084234, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void PrintEntityList(StringBuilder stringBuilder, EntityManager entityManager, [In] ref PrefabLookupMap prefabLookupMap, Dictionary<Entity, int> modificationsPerEntity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(stringBuilder);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &prefabLookupMap;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtr(modificationsPerEntity);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_PrintEntityList_Private_Static_Void_StringBuilder_EntityManager_byref_PrefabLookupMap_Dictionary_2_Entity_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1084317, RefRangeEnd = 1084318, XrefRangeStart = 1084236, XrefRangeEnd = 1084317, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void GetFormattedEntityModificationsMessage(StringBuilder stringBuilder, EntityManager entityManager, Entity entity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(stringBuilder);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_GetFormattedEntityModificationsMessage_Public_Void_StringBuilder_EntityManager_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1084354, RefRangeEnd = 1084356, XrefRangeStart = 1084318, XrefRangeEnd = 1084354, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void GetFormattedEntityModificationsMessage(StringBuilder stringBuilder, EntityManager entityManager, Entity entity, ref ModificationsRegistry.PrintModificationsData data, int indent)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(stringBuilder);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtrNotNull(data);
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref indent;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_GetFormattedEntityModificationsMessage_Private_Void_StringBuilder_EntityManager_Entity_byref_PrintModificationsData_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1084407, RefRangeEnd = 1084409, XrefRangeStart = 1084356, XrefRangeEnd = 1084407, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool TryGetFieldName(ModificationsRegistry.FieldIdentifier fieldId, Dictionary<ModificationsRegistry.FieldIdentifier, string> fieldNameCache, out string fieldName)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(fieldId));
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtr(fieldNameCache);
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = 0;
		ptr2 = &intPtr;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_TryGetFieldName_Private_Static_Boolean_FieldIdentifier_Dictionary_2_FieldIdentifier_String_byref_String_0, 0, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		fieldName = IL2CPP.Il2CppStringToManaged(intPtr);
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1084552, RefRangeEnd = 1084553, XrefRangeStart = 1084409, XrefRangeEnd = 1084552, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void GetFormattedModificationsForKey<TModifiable, TValue>(Entity modifiedEntity, ref ModifiableEntries<TValue> entries, [In] ref ModifiableKey key, StringBuilder stringBuilder, ref EntityManager entityManager, ref ModificationsRegistry.PrintModificationsData data, int indent)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiedEntity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entries;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &key;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtr(stringBuilder);
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entityManager;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = IL2CPP.Il2CppObjectBaseToPtrNotNull(data);
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref indent;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_GetFormattedModificationsForKey_Private_Static_Void_Entity_byref_ModifiableEntries_1_TValue_byref_ModifiableKey_StringBuilder_byref_EntityManager_byref_PrintModificationsData_Int32_0<TModifiable, TValue>.Pointer, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(5)]
	[CachedScanResults(RefRangeStart = 1084565, RefRangeEnd = 1084570, XrefRangeStart = 1084553, XrefRangeEnd = 1084565, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void LogIfNaN(ModifiableKey key, ModifiableFloat modifiable, float modifyValue, ModificationId id)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref key;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modifiable;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modifyValue;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref id;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_LogIfNaN_Private_Void_ModifiableKey_ModifiableFloat_Single_ModificationId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1084584, RefRangeEnd = 1084586, XrefRangeStart = 1084570, XrefRangeEnd = 1084584, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void LogIfNaN(ModifiableKey key, ModifiableFloat3 modifiable, float3 modifyValue, ModificationId id)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref key;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modifiable;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modifyValue;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref id;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_LogIfNaN_Private_Void_ModifiableKey_ModifiableFloat3_float3_ModificationId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1084641, RefRangeEnd = 1084642, XrefRangeStart = 1084586, XrefRangeEnd = 1084641, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void LogNaN<TValue>(ModifiableKey key, TValue value, ModifiableEntry<TValue> entry, ModificationId id)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref key;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr;
		if (!typeof(TValue).IsValueType)
		{
			TValue tvalue = value;
			intPtr = ((tvalue is string) ? IL2CPP.ManagedStringToIl2Cpp(tvalue as string) : IL2CPP.Il2CppObjectBaseToPtr(tvalue as Il2CppObjectBase));
		}
		else
		{
			intPtr = ref value;
		}
		ptr2 = intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entry;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref id;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_LogNaN_Private_Void_ModifiableKey_TValue_ModifiableEntry_1_TValue_ModificationId_0<TValue>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1084707, RefRangeEnd = 1084708, XrefRangeStart = 1084642, XrefRangeEnd = 1084707, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_Serialize_Public_Void_byref_NetBufferOut_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1084765, RefRangeEnd = 1084766, XrefRangeStart = 1084708, XrefRangeEnd = 1084765, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, ref PersistentDeserializationHeaderData headerData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &headerData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_Deserialize_Public_Void_byref_NetBufferIn_byref_PersistentDeserializationHeaderData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1084877, RefRangeEnd = 1084878, XrefRangeStart = 1084766, XrefRangeEnd = 1084877, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void RemapModificationIds(ref NativeParallelHashMap<ModificationId, ModificationId> remapping, out int oldMaxId, out int newMaxId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &remapping;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &oldMaxId;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &newMaxId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_RemapModificationIds_Public_Void_byref_NativeParallelHashMap_2_ModificationId_ModificationId_byref_Int32_byref_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1084906, RefRangeEnd = 1084907, XrefRangeStart = 1084878, XrefRangeEnd = 1084906, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void SerializeSourceReferences(ref NativeParallelMultiHashMap<Entity, ModificationReference> sourceReferences, ref NetBufferOut netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &sourceReferences;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_SerializeSourceReferences_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModificationReference_byref_NetBufferOut_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1084948, RefRangeEnd = 1084949, XrefRangeStart = 1084907, XrefRangeEnd = 1084948, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void DeserializeSourceReferences(ref NativeParallelMultiHashMap<Entity, ModificationReference> sourceReferences, ref NetBufferIn netBuffer, ref PersistentDeserializationHeaderData headerData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &sourceReferences;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &netBuffer;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &headerData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_DeserializeSourceReferences_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModificationReference_byref_NetBufferIn_byref_PersistentDeserializationHeaderData_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1084977, RefRangeEnd = 1084978, XrefRangeStart = 1084949, XrefRangeEnd = 1084977, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void SerializeEntityModifiableEntries(ref NativeParallelMultiHashMap<Entity, ModifiableFieldId> modifiableEntries, ref NetBufferOut netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &modifiableEntries;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_SerializeEntityModifiableEntries_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModifiableFieldId_byref_NetBufferOut_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1085017, RefRangeEnd = 1085018, XrefRangeStart = 1084978, XrefRangeEnd = 1085017, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void DeserializeModifiableEntries(ref NativeParallelMultiHashMap<Entity, ModifiableFieldId> modifiableEntries, ref NetBufferIn netBuffer, ref PersistentDeserializationHeaderData headerData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &modifiableEntries;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &netBuffer;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &headerData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_DeserializeModifiableEntries_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModifiableFieldId_byref_NetBufferIn_byref_PersistentDeserializationHeaderData_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085018, XrefRangeEnd = 1085030, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat modifiable, float newBaseValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newBaseValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_Single_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085030, XrefRangeEnd = 1085046, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float GetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_Single_Entity_byref_TComponent_byref_ModifiableFloat_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085046, XrefRangeEnd = 1085053, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetEntry<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat modifiable, out ModifiableEntry<float>.Readonly entry)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entry;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableFloat_byref_Readonly_Single_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(15)]
	[CachedScanResults(RefRangeStart = 1085069, RefRangeEnd = 1085084, XrefRangeStart = 1085053, XrefRangeEnd = 1085069, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat modifiable, ModificationType modType, float modValue, int priority, Entity modificationSource, out ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref priority;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationSource;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationType_Single_Int32_Entity_byref_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085084, XrefRangeEnd = 1085097, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UpdateModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat modifiable, ModificationId modificationId, float modValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationId_Single_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085097, XrefRangeEnd = 1085109, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void RemoveModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat modifiable, ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085109, XrefRangeEnd = 1085116, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void DisposeModifications<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085116, XrefRangeEnd = 1085128, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableInt modifiable, int newBaseValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newBaseValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_Int32_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085128, XrefRangeEnd = 1085144, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe int GetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableInt modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_Int32_Entity_byref_TComponent_byref_ModifiableInt_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085144, XrefRangeEnd = 1085151, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetEntry<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableInt modifiable, out ModifiableEntry<int>.Readonly entry)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entry;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableInt_byref_Readonly_Int32_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085151, XrefRangeEnd = 1085165, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableInt modifiable, ModificationType modType, int modValue, int priority, Entity modificationSource, out ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref priority;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationSource;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationType_Int32_Int32_Entity_byref_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085165, XrefRangeEnd = 1085177, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UpdateModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableInt modifiable, ModificationId modificationId, int modValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationId_Int32_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085177, XrefRangeEnd = 1085189, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void RemoveModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableInt modifiable, ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085189, XrefRangeEnd = 1085196, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void DisposeModifications<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableInt modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085196, XrefRangeEnd = 1085208, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableEntity modifiable, Entity newBaseValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newBaseValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_Entity_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085208, XrefRangeEnd = 1085224, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe Entity GetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableEntity modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_Entity_Entity_byref_TComponent_byref_ModifiableEntity_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085224, XrefRangeEnd = 1085231, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetEntry<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableEntity modifiable, out ModifiableEntry<Entity>.Readonly entry)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entry;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableEntity_byref_Readonly_Entity_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085231, XrefRangeEnd = 1085245, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableEntity modifiable, ModificationType modType, Entity modValue, int priority, Entity modificationSource, out ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref priority;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationSource;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationType_Entity_Int32_Entity_byref_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085245, XrefRangeEnd = 1085257, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UpdateModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableEntity modifiable, ModificationId modificationId, Entity modValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationId_Entity_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085257, XrefRangeEnd = 1085269, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void RemoveModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableEntity modifiable, ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085269, XrefRangeEnd = 1085276, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void DisposeModifications<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableEntity modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085276, XrefRangeEnd = 1085288, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat3 modifiable, float3 newBaseValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newBaseValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_float3_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085288, XrefRangeEnd = 1085299, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float3 GetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat3 modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_float3_Entity_byref_TComponent_byref_ModifiableFloat3_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085299, XrefRangeEnd = 1085306, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetEntry<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat3 modifiable, out ModifiableEntry<float3>.Readonly entry)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entry;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableFloat3_byref_Readonly_float3_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1085322, RefRangeEnd = 1085323, XrefRangeStart = 1085306, XrefRangeEnd = 1085322, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat3 modifiable, ModificationType modType, float3 modValue, int priority, Entity modificationSource, out ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref priority;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationSource;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationType_float3_Int32_Entity_byref_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085323, XrefRangeEnd = 1085336, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UpdateModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat3 modifiable, ModificationId modificationId, float3 modValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationId_float3_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085336, XrefRangeEnd = 1085348, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void RemoveModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat3 modifiable, ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085348, XrefRangeEnd = 1085355, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void DisposeModifications<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableFloat3 modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085355, XrefRangeEnd = 1085367, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableLong modifiable, long newBaseValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newBaseValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_Int64_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085367, XrefRangeEnd = 1085378, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe long GetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableLong modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_Int64_Entity_byref_TComponent_byref_ModifiableLong_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085378, XrefRangeEnd = 1085385, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetEntry<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableLong modifiable, out ModifiableEntry<long>.Readonly entry)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entry;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableLong_byref_Readonly_Int64_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085385, XrefRangeEnd = 1085399, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableLong modifiable, ModificationType modType, long modValue, int priority, Entity modificationSource, out ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref priority;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationSource;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationType_Int64_Int32_Entity_byref_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085399, XrefRangeEnd = 1085411, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UpdateModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableLong modifiable, ModificationId modificationId, long modValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationId_Int64_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085411, XrefRangeEnd = 1085423, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void RemoveModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableLong modifiable, ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085423, XrefRangeEnd = 1085430, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void DisposeModifications<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableLong modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085430, XrefRangeEnd = 1085442, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiablePrefabGUID modifiable, PrefabGUID newBaseValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newBaseValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_PrefabGUID_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085442, XrefRangeEnd = 1085458, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe PrefabGUID GetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiablePrefabGUID modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_PrefabGUID_Entity_byref_TComponent_byref_ModifiablePrefabGUID_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085458, XrefRangeEnd = 1085470, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetEntry<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiablePrefabGUID modifiable, out ModifiableEntry<PrefabGUID>.Readonly entry)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entry;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiablePrefabGUID_byref_Readonly_PrefabGUID_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085470, XrefRangeEnd = 1085484, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiablePrefabGUID modifiable, ModificationType modType, PrefabGUID modValue, int priority, Entity modificationSource, out ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref priority;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationSource;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationType_PrefabGUID_Int32_Entity_byref_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085484, XrefRangeEnd = 1085491, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UpdateModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiablePrefabGUID modifiable, ModificationId modificationId, PrefabGUID modValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationId_PrefabGUID_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085491, XrefRangeEnd = 1085503, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void RemoveModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiablePrefabGUID modifiable, ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085503, XrefRangeEnd = 1085510, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void DisposeModifications<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiablePrefabGUID modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085510, XrefRangeEnd = 1085517, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableNetworkedEntity modifiable, NetworkedEntity newBaseValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newBaseValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_NetworkedEntity_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085517, XrefRangeEnd = 1085528, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe NetworkedEntity GetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableNetworkedEntity modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_NetworkedEntity_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085528, XrefRangeEnd = 1085535, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetEntry<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableNetworkedEntity modifiable, out ModifiableEntry<NetworkedEntity>.Readonly entry)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entry;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_byref_Readonly_NetworkedEntity_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085535, XrefRangeEnd = 1085545, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableNetworkedEntity modifiable, ModificationType modType, NetworkedEntity modValue, int priority, Entity modificationSource, out ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref priority;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationSource;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationType_NetworkedEntity_Int32_Entity_byref_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085545, XrefRangeEnd = 1085552, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UpdateModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableNetworkedEntity modifiable, ModificationId modificationId, NetworkedEntity modValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationId_NetworkedEntity_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085552, XrefRangeEnd = 1085559, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void RemoveModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableNetworkedEntity modifiable, ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085559, XrefRangeEnd = 1085566, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void DisposeModifications<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableNetworkedEntity modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085566, XrefRangeEnd = 1085578, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableBool modifiable, bool newBaseValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newBaseValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_Boolean_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085578, XrefRangeEnd = 1085589, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool GetBaseValue<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableBool modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableBool_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085589, XrefRangeEnd = 1085596, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryGetEntry<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableBool modifiable, out ModifiableEntry<bool>.Readonly entry)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entry;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableBool_byref_Readonly_Boolean_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085596, XrefRangeEnd = 1085610, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableBool modifiable, ModificationType modType, bool modValue, int priority, Entity modificationSource, out ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref priority;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationSource;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationType_Boolean_Int32_Entity_byref_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085610, XrefRangeEnd = 1085622, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UpdateModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableBool modifiable, ModificationId modificationId, bool modValue)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modValue;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationId_Boolean_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085622, XrefRangeEnd = 1085634, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void RemoveModification<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableBool modifiable, ModificationId modificationId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modificationId;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationId_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1085634, XrefRangeEnd = 1085641, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void DisposeModifications<TComponent>(Entity modifiableEntity, ref TComponent modifiableComponent, ref ModifiableBool modifiable)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref modifiableEntity;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(modifiableComponent);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &modifiable;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_0<TComponent>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		modifiableComponent = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<TComponent>(intPtr4, false, false));
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, ref this));
	}
	public unsafe static ProfilerMarker _SerializeSourceReferences
	{
		get
		{
			ProfilerMarker result;
			IL2CPP.il2cpp_field_static_get_value(ModificationsRegistry.NativeFieldInfoPtr__SerializeSourceReferences, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(ModificationsRegistry.NativeFieldInfoPtr__SerializeSourceReferences, (void*)(&value));
		}
	}
	public unsafe static ProfilerMarker _SerializeModifiableEntries
	{
		get
		{
			ProfilerMarker result;
			IL2CPP.il2cpp_field_static_get_value(ModificationsRegistry.NativeFieldInfoPtr__SerializeModifiableEntries, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(ModificationsRegistry.NativeFieldInfoPtr__SerializeModifiableEntries, (void*)(&value));
		}
	}
	public unsafe static ProfilerMarker _SerializeEntityModifiableEntries
	{
		get
		{
			ProfilerMarker result;
			IL2CPP.il2cpp_field_static_get_value(ModificationsRegistry.NativeFieldInfoPtr__SerializeEntityModifiableEntries, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(ModificationsRegistry.NativeFieldInfoPtr__SerializeEntityModifiableEntries, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_IdGenerator;
	private static readonly IntPtr NativeFieldInfoPtr__SourceReferences;
	private static readonly IntPtr NativeFieldInfoPtr__EntityModifiableEntries;
	private static readonly IntPtr NativeFieldInfoPtr__FloatEntries;
	private static readonly IntPtr NativeFieldInfoPtr__IntEntries;
	private static readonly IntPtr NativeFieldInfoPtr__EntityEntries;
	private static readonly IntPtr NativeFieldInfoPtr__Float3Entries;
	private static readonly IntPtr NativeFieldInfoPtr__LongEntries;
	private static readonly IntPtr NativeFieldInfoPtr__PrefabGUIDEntries;
	private static readonly IntPtr NativeFieldInfoPtr__NetworkedEntityEntries;
	private static readonly IntPtr NativeFieldInfoPtr__BoolEntries;
	private static readonly IntPtr NativeFieldInfoPtr__WorldType;
	private static readonly IntPtr NativeFieldInfoPtr__SerializeSourceReferences;
	private static readonly IntPtr NativeFieldInfoPtr__SerializeModifiableEntries;
	private static readonly IntPtr NativeFieldInfoPtr__SerializeEntityModifiableEntries;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_byref_ModificationIDs_WorldType_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateModification_Private_ModificationData_1_TValue_ModificationType_TValue_Int32_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetBaseValue_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_TValue_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBaseValue_Private_TValue_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetEntry_Private_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_byref_Readonly_TValue_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_byref_ModificationData_1_TValue_0;
	private static readonly IntPtr NativeMethodInfoPtr_UpdateModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_ModificationId_byref_TValue_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryRemoveEntryModification_Private_Static_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_ModificationId_byref_ModifiableEntry_1_TValue_byref_ModificationData_1_TValue_Boolean_WorldType_0;
	private static readonly IntPtr NativeMethodInfoPtr_LogModifiableInfo_Private_Static_Void_ModifiableKey_WorldType_0;
	private static readonly IntPtr NativeMethodInfoPtr_DisposeModifications_Private_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_DisposeEntityEntries_Public_Void_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_ClearLooseSourceModifications_Public_Int32_Entity_byref_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveAndFixReference_Private_Void_byref_ModificationReference_byref_ModifiableEntries_1_TValue_byref_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetSourceModificationReferences_Public_NativeArray_1_ModificationReference_Entity_Allocator_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetMetricCounts_Public_Void_byref_Int32_byref_Int32_byref_Int32_byref_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetEntryCounts_Private_Static_Void_byref_Int32_byref_Int32_byref_Int32_byref_ModifiableEntries_1_T_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetFormattedModificationsMessage_Public_Void_StringBuilder_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_PrintEntityList_Private_Static_Void_StringBuilder_EntityManager_byref_PrefabLookupMap_Dictionary_2_Entity_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetFormattedEntityModificationsMessage_Public_Void_StringBuilder_EntityManager_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetFormattedEntityModificationsMessage_Private_Void_StringBuilder_EntityManager_Entity_byref_PrintModificationsData_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetFieldName_Private_Static_Boolean_FieldIdentifier_Dictionary_2_FieldIdentifier_String_byref_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetFormattedModificationsForKey_Private_Static_Void_Entity_byref_ModifiableEntries_1_TValue_byref_ModifiableKey_StringBuilder_byref_EntityManager_byref_PrintModificationsData_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_LogIfNaN_Private_Void_ModifiableKey_ModifiableFloat_Single_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_LogIfNaN_Private_Void_ModifiableKey_ModifiableFloat3_float3_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_LogNaN_Private_Void_ModifiableKey_TValue_ModifiableEntry_1_TValue_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Void_byref_NetBufferOut_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Void_byref_NetBufferIn_byref_PersistentDeserializationHeaderData_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemapModificationIds_Public_Void_byref_NativeParallelHashMap_2_ModificationId_ModificationId_byref_Int32_byref_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_SerializeSourceReferences_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModificationReference_byref_NetBufferOut_0;
	private static readonly IntPtr NativeMethodInfoPtr_DeserializeSourceReferences_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModificationReference_byref_NetBufferIn_byref_PersistentDeserializationHeaderData_0;
	private static readonly IntPtr NativeMethodInfoPtr_SerializeEntityModifiableEntries_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModifiableFieldId_byref_NetBufferOut_0;
	private static readonly IntPtr NativeMethodInfoPtr_DeserializeModifiableEntries_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModifiableFieldId_byref_NetBufferIn_byref_PersistentDeserializationHeaderData_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Single_Entity_byref_TComponent_byref_ModifiableFloat_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableFloat_byref_Readonly_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationType_Single_Int32_Entity_byref_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationId_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Int32_Entity_byref_TComponent_byref_ModifiableInt_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableInt_byref_Readonly_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationType_Int32_Int32_Entity_byref_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationId_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Entity_Entity_byref_TComponent_byref_ModifiableEntity_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableEntity_byref_Readonly_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationType_Entity_Int32_Entity_byref_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationId_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_float3_Entity_byref_TComponent_byref_ModifiableFloat3_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableFloat3_byref_Readonly_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationType_float3_Int32_Entity_byref_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationId_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_Int64_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Int64_Entity_byref_TComponent_byref_ModifiableLong_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableLong_byref_Readonly_Int64_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationType_Int64_Int32_Entity_byref_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationId_Int64_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_PrefabGUID_Entity_byref_TComponent_byref_ModifiablePrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiablePrefabGUID_byref_Readonly_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationType_PrefabGUID_Int32_Entity_byref_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationId_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_NetworkedEntity_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_NetworkedEntity_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_byref_Readonly_NetworkedEntity_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationType_NetworkedEntity_Int32_Entity_byref_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationId_NetworkedEntity_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableBool_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableBool_byref_Readonly_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationType_Boolean_Int32_Entity_byref_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationId_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationId_0;
	private static readonly IntPtr NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_0;
	[FieldOffset(0)]
	public ModificationIDs IdGenerator;
	[FieldOffset(8)]
	public NativeParallelMultiHashMap<Entity, ModificationReference> _SourceReferences;
	[FieldOffset(24)]
	public NativeParallelMultiHashMap<Entity, ModifiableFieldId> _EntityModifiableEntries;
	[FieldOffset(40)]
	public ModifiableEntries<float> _FloatEntries;
	[FieldOffset(72)]
	public ModifiableEntries<int> _IntEntries;
	[FieldOffset(104)]
	public ModifiableEntries<Entity> _EntityEntries;
	[FieldOffset(136)]
	public ModifiableEntries<float3> _Float3Entries;
	[FieldOffset(168)]
	public ModifiableEntries<long> _LongEntries;
	[FieldOffset(200)]
	public ModifiableEntries<PrefabGUID> _PrefabGUIDEntries;
	[FieldOffset(232)]
	public ModifiableEntries<NetworkedEntity> _NetworkedEntityEntries;
	[FieldOffset(264)]
	public ModifiableEntries<bool> _BoolEntries;
	[FieldOffset(296)]
	public readonly WorldType _WorldType;
	public sealed class PrintModificationsData : ValueType
	{
		static PrintModificationsData()
		{
			Il2CppClassPointerStore<ModificationsRegistry.PrintModificationsData>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "PrintModificationsData");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModificationsRegistry.PrintModificationsData>.NativeClassPtr);
			ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_IndentLookup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry.PrintModificationsData>.NativeClassPtr, "IndentLookup");
			ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_PrefabLookupMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry.PrintModificationsData>.NativeClassPtr, "PrefabLookupMap");
			ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_FieldNameCache = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry.PrintModificationsData>.NativeClassPtr, "FieldNameCache");
			ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_EntitiesByModificationCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry.PrintModificationsData>.NativeClassPtr, "EntitiesByModificationCount");
			ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_EntitiesByAppliedModificationsCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry.PrintModificationsData>.NativeClassPtr, "EntitiesByAppliedModificationsCount");
		}
		public PrintModificationsData(IntPtr pointer) : base(pointer)
		{
		}
		public PrintModificationsData() : base(IL2CPP.il2cpp_object_new(Il2CppClassPointerStore<ModificationsRegistry.PrintModificationsData>.NativeClassPtr))
		{
		}
		public unsafe Il2CppStringArray IndentLookup
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_IndentLookup);
				IntPtr intPtr2 = *intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Il2CppStringArray>(intPtr2) : null;
			}
			set
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IL2CPP.il2cpp_gc_wbarrier_set_field(intPtr, intPtr + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_IndentLookup), IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe PrefabLookupMap PrefabLookupMap
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_PrefabLookupMap);
				return *intPtr;
			}
			set
			{
				*(IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_PrefabLookupMap)) = value;
			}
		}
		public unsafe Dictionary<ModificationsRegistry.FieldIdentifier, string> FieldNameCache
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_FieldNameCache);
				IntPtr intPtr2 = *intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Dictionary<ModificationsRegistry.FieldIdentifier, string>>(intPtr2) : null;
			}
			set
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IL2CPP.il2cpp_gc_wbarrier_set_field(intPtr, intPtr + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_FieldNameCache), IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe Dictionary<Entity, int> EntitiesByModificationCount
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_EntitiesByModificationCount);
				IntPtr intPtr2 = *intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Dictionary<Entity, int>>(intPtr2) : null;
			}
			set
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IL2CPP.il2cpp_gc_wbarrier_set_field(intPtr, intPtr + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_EntitiesByModificationCount), IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe Dictionary<Entity, int> EntitiesByAppliedModificationsCount
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_EntitiesByAppliedModificationsCount);
				IntPtr intPtr2 = *intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Dictionary<Entity, int>>(intPtr2) : null;
			}
			set
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IL2CPP.il2cpp_gc_wbarrier_set_field(intPtr, intPtr + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.PrintModificationsData.NativeFieldInfoPtr_EntitiesByAppliedModificationsCount), IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		private static readonly IntPtr NativeFieldInfoPtr_IndentLookup;
		private static readonly IntPtr NativeFieldInfoPtr_PrefabLookupMap;
		private static readonly IntPtr NativeFieldInfoPtr_FieldNameCache;
		private static readonly IntPtr NativeFieldInfoPtr_EntitiesByModificationCount;
		private static readonly IntPtr NativeFieldInfoPtr_EntitiesByAppliedModificationsCount;
	}
	public sealed class FieldIdentifier : ValueType
	{
		static FieldIdentifier()
		{
			Il2CppClassPointerStore<ModificationsRegistry.FieldIdentifier>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "FieldIdentifier");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModificationsRegistry.FieldIdentifier>.NativeClassPtr);
			ModificationsRegistry.FieldIdentifier.NativeFieldInfoPtr_ParentType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry.FieldIdentifier>.NativeClassPtr, "ParentType");
			ModificationsRegistry.FieldIdentifier.NativeFieldInfoPtr_FieldOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry.FieldIdentifier>.NativeClassPtr, "FieldOffset");
			ModificationsRegistry.FieldIdentifier.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_FieldIdentifier_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry.FieldIdentifier>.NativeClassPtr, 100666465);
			ModificationsRegistry.FieldIdentifier.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry.FieldIdentifier>.NativeClassPtr, 100666466);
			ModificationsRegistry.FieldIdentifier.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry.FieldIdentifier>.NativeClassPtr, 100666467);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1083383, XrefRangeEnd = 1083386, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe bool Equals(ModificationsRegistry.FieldIdentifier other)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(other));
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.FieldIdentifier.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_FieldIdentifier_0, IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(this)), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1083386, XrefRangeEnd = 1083391, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe override bool Equals(Object obj)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.FieldIdentifier.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(this)), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1083391, XrefRangeEnd = 1083410, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe override int GetHashCode()
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.FieldIdentifier.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, IL2CPP.il2cpp_object_unbox(IL2CPP.Il2CppObjectBaseToPtrNotNull(this)), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public FieldIdentifier(IntPtr pointer) : base(pointer)
		{
		}
		public FieldIdentifier() : base(IL2CPP.il2cpp_object_new(Il2CppClassPointerStore<ModificationsRegistry.FieldIdentifier>.NativeClassPtr))
		{
		}
		public unsafe Type ParentType
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.FieldIdentifier.NativeFieldInfoPtr_ParentType);
				IntPtr intPtr2 = *intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Type>(intPtr2) : null;
			}
			set
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
				IL2CPP.il2cpp_gc_wbarrier_set_field(intPtr, intPtr + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.FieldIdentifier.NativeFieldInfoPtr_ParentType), IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe int FieldOffset
		{
			get
			{
				IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.FieldIdentifier.NativeFieldInfoPtr_FieldOffset);
				return *intPtr;
			}
			set
			{
				*(IL2CPP.Il2CppObjectBaseToPtrNotNull(this) + (IntPtr)IL2CPP.il2cpp_field_get_offset(ModificationsRegistry.FieldIdentifier.NativeFieldInfoPtr_FieldOffset)) = value;
			}
		}
		private static readonly IntPtr NativeFieldInfoPtr_ParentType;
		private static readonly IntPtr NativeFieldInfoPtr_FieldOffset;
		private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_FieldIdentifier_0;
		private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
		private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	}
	[ObfuscatedName("ProjectM.ModificationsRegistry+<>c")]
	[Serializable]
	public sealed class __c : Object
	{
		static __c()
		{
			Il2CppClassPointerStore<ModificationsRegistry.__c>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr, "<>c");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModificationsRegistry.__c>.NativeClassPtr);
			ModificationsRegistry.__c.NativeFieldInfoPtr___9 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry.__c>.NativeClassPtr, "<>9");
			ModificationsRegistry.__c.NativeFieldInfoPtr___9__31_0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry.__c>.NativeClassPtr, "<>9__31_0");
			ModificationsRegistry.__c.NativeFieldInfoPtr___9__32_0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry.__c>.NativeClassPtr, "<>9__32_0");
			ModificationsRegistry.__c.NativeFieldInfoPtr___9__32_1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModificationsRegistry.__c>.NativeClassPtr, "<>9__32_1");
			ModificationsRegistry.__c.NativeMethodInfoPtr__ctor_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry.__c>.NativeClassPtr, 100666469);
			ModificationsRegistry.__c.NativeMethodInfoPtr__GetFormattedModificationsMessage_b__31_0_Internal_PrefabGUID_ValueTuple_Unboxed_2_Entity_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry.__c>.NativeClassPtr, 100666470);
			ModificationsRegistry.__c.NativeMethodInfoPtr__PrintEntityList_b__32_0_Internal_Boolean_KeyValuePair_Unboxed_2_Entity_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry.__c>.NativeClassPtr, 100666471);
			ModificationsRegistry.__c.NativeMethodInfoPtr__PrintEntityList_b__32_1_Internal_Int32_KeyValuePair_Unboxed_2_Entity_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModificationsRegistry.__c>.NativeClassPtr, 100666472);
		}
		[CallerCount(6)]
		[CachedScanResults(RefRangeStart = 40, RefRangeEnd = 46, XrefRangeStart = 40, XrefRangeEnd = 46, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe __c() : this(IL2CPP.il2cpp_object_new(Il2CppClassPointerStore<ModificationsRegistry.__c>.NativeClassPtr))
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.__c.NativeMethodInfoPtr__ctor_Public_Void_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
		[CallerCount(0)]
		public unsafe PrefabGUID _GetFormattedModificationsMessage_b__31_0(ValueTuple_Unboxed<Entity, PrefabGUID> x)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref x;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.__c.NativeMethodInfoPtr__GetFormattedModificationsMessage_b__31_0_Internal_PrefabGUID_ValueTuple_Unboxed_2_Entity_PrefabGUID_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1083410, XrefRangeEnd = 1083411, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe bool _PrintEntityList_b__32_0(KeyValuePair_Unboxed<Entity, int> x)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref x;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.__c.NativeMethodInfoPtr__PrintEntityList_b__32_0_Internal_Boolean_KeyValuePair_Unboxed_2_Entity_Int32_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1083411, XrefRangeEnd = 1083412, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe int _PrintEntityList_b__32_1(KeyValuePair_Unboxed<Entity, int> x)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref x;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.__c.NativeMethodInfoPtr__PrintEntityList_b__32_1_Internal_Int32_KeyValuePair_Unboxed_2_Entity_Int32_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public __c(IntPtr pointer) : base(pointer)
		{
		}
		public unsafe static ModificationsRegistry.__c __9
		{
			get
			{
				IntPtr intPtr;
				IL2CPP.il2cpp_field_static_get_value(ModificationsRegistry.__c.NativeFieldInfoPtr___9, (void*)(&intPtr));
				IntPtr intPtr2 = intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<ModificationsRegistry.__c>(intPtr2) : null;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(ModificationsRegistry.__c.NativeFieldInfoPtr___9, IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe static Func<ValueTuple_Unboxed<Entity, PrefabGUID>, PrefabGUID> __9__31_0
		{
			get
			{
				IntPtr intPtr;
				IL2CPP.il2cpp_field_static_get_value(ModificationsRegistry.__c.NativeFieldInfoPtr___9__31_0, (void*)(&intPtr));
				IntPtr intPtr2 = intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Func<ValueTuple_Unboxed<Entity, PrefabGUID>, PrefabGUID>>(intPtr2) : null;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(ModificationsRegistry.__c.NativeFieldInfoPtr___9__31_0, IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe static Func<KeyValuePair_Unboxed<Entity, int>, bool> __9__32_0
		{
			get
			{
				IntPtr intPtr;
				IL2CPP.il2cpp_field_static_get_value(ModificationsRegistry.__c.NativeFieldInfoPtr___9__32_0, (void*)(&intPtr));
				IntPtr intPtr2 = intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Func<KeyValuePair_Unboxed<Entity, int>, bool>>(intPtr2) : null;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(ModificationsRegistry.__c.NativeFieldInfoPtr___9__32_0, IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		public unsafe static Func<KeyValuePair_Unboxed<Entity, int>, int> __9__32_1
		{
			get
			{
				IntPtr intPtr;
				IL2CPP.il2cpp_field_static_get_value(ModificationsRegistry.__c.NativeFieldInfoPtr___9__32_1, (void*)(&intPtr));
				IntPtr intPtr2 = intPtr;
				return (intPtr2 != 0) ? Il2CppObjectPool.Get<Func<KeyValuePair_Unboxed<Entity, int>, int>>(intPtr2) : null;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(ModificationsRegistry.__c.NativeFieldInfoPtr___9__32_1, IL2CPP.Il2CppObjectBaseToPtr(value));
			}
		}
		private static readonly IntPtr NativeFieldInfoPtr___9;
		private static readonly IntPtr NativeFieldInfoPtr___9__31_0;
		private static readonly IntPtr NativeFieldInfoPtr___9__32_0;
		private static readonly IntPtr NativeFieldInfoPtr___9__32_1;
		private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_0;
		private static readonly IntPtr NativeMethodInfoPtr__GetFormattedModificationsMessage_b__31_0_Internal_PrefabGUID_ValueTuple_Unboxed_2_Entity_PrefabGUID_0;
		private static readonly IntPtr NativeMethodInfoPtr__PrintEntityList_b__32_0_Internal_Boolean_KeyValuePair_Unboxed_2_Entity_Int32_0;
		private static readonly IntPtr NativeMethodInfoPtr__PrintEntityList_b__32_1_Internal_Int32_KeyValuePair_Unboxed_2_Entity_Int32_0;
	}
	private sealed class MethodInfoStoreGeneric_CreateModification_Private_ModificationData_1_TValue_ModificationType_TValue_Int32_Entity_0<TValue>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_CreateModification_Private_ModificationData_1_TValue_ModificationType_TValue_Int32_Entity_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TValue>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_SetBaseValue_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_TValue_0<TModifiable, TValue>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_TValue_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TModifiable>.NativeClassPtr)),
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TValue>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_GetBaseValue_Private_TValue_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_0<TModifiable, TValue>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Private_TValue_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TModifiable>.NativeClassPtr)),
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TValue>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_TryGetEntry_Private_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_byref_Readonly_TValue_0<TValue>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Private_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_byref_Readonly_TValue_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TValue>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_AddModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_byref_ModificationData_1_TValue_0<TModifiable, TValue>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_AddModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_byref_ModificationData_1_TValue_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TModifiable>.NativeClassPtr)),
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TValue>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_UpdateModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_ModificationId_byref_TValue_0<TModifiable, TValue>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_ModificationId_byref_TValue_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TModifiable>.NativeClassPtr)),
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TValue>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_RemoveModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_ModificationId_0<TModifiable, TValue>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Private_Void_byref_ModifiableKey_byref_TModifiable_byref_ModifiableEntries_1_TValue_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TModifiable>.NativeClassPtr)),
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TValue>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_TryRemoveEntryModification_Private_Static_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_ModificationId_byref_ModifiableEntry_1_TValue_byref_ModificationData_1_TValue_Boolean_WorldType_0<TValue>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_TryRemoveEntryModification_Private_Static_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_ModificationId_byref_ModifiableEntry_1_TValue_byref_ModificationData_1_TValue_Boolean_WorldType_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TValue>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_DisposeModifications_Private_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_Boolean_0<TValue>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Private_Boolean_byref_ModifiableKey_byref_ModifiableEntries_1_TValue_Boolean_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TValue>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_RemoveAndFixReference_Private_Void_byref_ModificationReference_byref_ModifiableEntries_1_TValue_byref_EntityManager_0<TModifiable, TValue>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_RemoveAndFixReference_Private_Void_byref_ModificationReference_byref_ModifiableEntries_1_TValue_byref_EntityManager_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TModifiable>.NativeClassPtr)),
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TValue>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_GetEntryCounts_Private_Static_Void_byref_Int32_byref_Int32_byref_Int32_byref_ModifiableEntries_1_T_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_GetEntryCounts_Private_Static_Void_byref_Int32_byref_Int32_byref_Int32_byref_ModifiableEntries_1_T_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_GetFormattedModificationsForKey_Private_Static_Void_Entity_byref_ModifiableEntries_1_TValue_byref_ModifiableKey_StringBuilder_byref_EntityManager_byref_PrintModificationsData_Int32_0<TModifiable, TValue>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_GetFormattedModificationsForKey_Private_Static_Void_Entity_byref_ModifiableEntries_1_TValue_byref_ModifiableKey_StringBuilder_byref_EntityManager_byref_PrintModificationsData_Int32_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TModifiable>.NativeClassPtr)),
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TValue>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_LogNaN_Private_Void_ModifiableKey_TValue_ModifiableEntry_1_TValue_ModificationId_0<TValue>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_LogNaN_Private_Void_ModifiableKey_TValue_ModifiableEntry_1_TValue_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TValue>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_Single_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_Single_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_Single_Entity_byref_TComponent_byref_ModifiableFloat_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Single_Entity_byref_TComponent_byref_ModifiableFloat_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableFloat_byref_Readonly_Single_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableFloat_byref_Readonly_Single_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationType_Single_Int32_Entity_byref_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationType_Single_Int32_Entity_byref_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationId_Single_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationId_Single_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_Int32_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_Int32_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_Int32_Entity_byref_TComponent_byref_ModifiableInt_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Int32_Entity_byref_TComponent_byref_ModifiableInt_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableInt_byref_Readonly_Int32_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableInt_byref_Readonly_Int32_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationType_Int32_Int32_Entity_byref_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationType_Int32_Int32_Entity_byref_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationId_Int32_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationId_Int32_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableInt_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_Entity_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_Entity_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_Entity_Entity_byref_TComponent_byref_ModifiableEntity_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Entity_Entity_byref_TComponent_byref_ModifiableEntity_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableEntity_byref_Readonly_Entity_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableEntity_byref_Readonly_Entity_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationType_Entity_Int32_Entity_byref_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationType_Entity_Int32_Entity_byref_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationId_Entity_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationId_Entity_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableEntity_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_float3_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_float3_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_float3_Entity_byref_TComponent_byref_ModifiableFloat3_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_float3_Entity_byref_TComponent_byref_ModifiableFloat3_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableFloat3_byref_Readonly_float3_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableFloat3_byref_Readonly_float3_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationType_float3_Int32_Entity_byref_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationType_float3_Int32_Entity_byref_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationId_float3_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationId_float3_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableFloat3_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_Int64_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_Int64_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_Int64_Entity_byref_TComponent_byref_ModifiableLong_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Int64_Entity_byref_TComponent_byref_ModifiableLong_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableLong_byref_Readonly_Int64_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableLong_byref_Readonly_Int64_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationType_Int64_Int32_Entity_byref_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationType_Int64_Int32_Entity_byref_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationId_Int64_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationId_Int64_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableLong_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_PrefabGUID_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_PrefabGUID_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_PrefabGUID_Entity_byref_TComponent_byref_ModifiablePrefabGUID_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_PrefabGUID_Entity_byref_TComponent_byref_ModifiablePrefabGUID_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiablePrefabGUID_byref_Readonly_PrefabGUID_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiablePrefabGUID_byref_Readonly_PrefabGUID_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationType_PrefabGUID_Int32_Entity_byref_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationType_PrefabGUID_Int32_Entity_byref_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationId_PrefabGUID_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationId_PrefabGUID_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiablePrefabGUID_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_NetworkedEntity_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_NetworkedEntity_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_NetworkedEntity_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_NetworkedEntity_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_byref_Readonly_NetworkedEntity_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_byref_Readonly_NetworkedEntity_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationType_NetworkedEntity_Int32_Entity_byref_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationType_NetworkedEntity_Int32_Entity_byref_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationId_NetworkedEntity_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationId_NetworkedEntity_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableNetworkedEntity_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_Boolean_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_SetBaseValue_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_Boolean_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_GetBaseValue_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableBool_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_GetBaseValue_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableBool_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableBool_byref_Readonly_Boolean_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_TryGetEntry_Public_Virtual_Final_New_Boolean_Entity_byref_TComponent_byref_ModifiableBool_byref_Readonly_Boolean_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationType_Boolean_Int32_Entity_byref_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_AddModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationType_Boolean_Int32_Entity_byref_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationId_Boolean_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_UpdateModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationId_Boolean_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationId_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_RemoveModification_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_ModificationId_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_0<TComponent>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(ModificationsRegistry.NativeMethodInfoPtr_DisposeModifications_Public_Virtual_Final_New_Void_Entity_byref_TComponent_byref_ModifiableBool_0, Il2CppClassPointerStore<ModificationsRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComponent>.NativeClassPtr))
		}))));
	}
}
