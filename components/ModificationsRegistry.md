---
nav_exclude: true
search_exclude: true
---

# ModificationsRegistry

```csharp
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

	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

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

	public unsafe static void LogModifiableInfo(ModifiableKey key, WorldType worldType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref key;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref worldType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_LogModifiableInfo_Private_Static_Void_ModifiableKey_WorldType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

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

	public unsafe void DisposeEntityEntries(Entity entity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_DisposeEntityEntries_Public_Void_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

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

	public unsafe void GetFormattedModificationsMessage(StringBuilder stringBuilder, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(stringBuilder);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_GetFormattedModificationsMessage_Public_Void_StringBuilder_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

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

	public unsafe void Serialize(ref NetBufferOut netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_Serialize_Public_Void_byref_NetBufferOut_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, ref PersistentDeserializationHeaderData headerData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &headerData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_Deserialize_Public_Void_byref_NetBufferIn_byref_PersistentDeserializationHeaderData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

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

	public unsafe static void SerializeSourceReferences(ref NativeParallelMultiHashMap<Entity, ModificationReference> sourceReferences, ref NetBufferOut netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &sourceReferences;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_SerializeSourceReferences_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModificationReference_byref_NetBufferOut_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

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

	public unsafe static void SerializeEntityModifiableEntries(ref NativeParallelMultiHashMap<Entity, ModifiableFieldId> modifiableEntries, ref NetBufferOut netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &modifiableEntries;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.NativeMethodInfoPtr_SerializeEntityModifiableEntries_Private_Static_Void_byref_NativeParallelMultiHashMap_2_Entity_ModifiableFieldId_byref_NetBufferOut_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

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

	public ModificationIDs IdGenerator;

	public NativeParallelMultiHashMap<Entity, ModificationReference> _SourceReferences;

	public NativeParallelMultiHashMap<Entity, ModifiableFieldId> _EntityModifiableEntries;

	public ModifiableEntries<float> _FloatEntries;

	public ModifiableEntries<int> _IntEntries;

	public ModifiableEntries<Entity> _EntityEntries;

	public ModifiableEntries<float3> _Float3Entries;

	public ModifiableEntries<long> _LongEntries;

	public ModifiableEntries<PrefabGUID> _PrefabGUIDEntries;

	public ModifiableEntries<NetworkedEntity> _NetworkedEntityEntries;

	public ModifiableEntries<bool> _BoolEntries;

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

		public unsafe __c() : this(IL2CPP.il2cpp_object_new(Il2CppClassPointerStore<ModificationsRegistry.__c>.NativeClassPtr))
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModificationsRegistry.__c.NativeMethodInfoPtr__ctor_Public_Void_0, IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

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
```
