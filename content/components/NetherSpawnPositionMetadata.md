---
nav_exclude: true
search_exclude: true
---

```csharp
public struct NetherSpawnPositionMetadata
{
	static NetherSpawnPositionMetadata()
	{
		Il2CppClassPointerStore<NetherSpawnPositionMetadata>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "NetherSpawnPositionMetadata");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetherSpawnPositionMetadata>.NativeClassPtr);
		NetherSpawnPositionMetadata.NativeFieldInfoPtr_MaxPositions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetherSpawnPositionMetadata>.NativeClassPtr, "MaxPositions");
		NetherSpawnPositionMetadata.NativeFieldInfoPtr_Pos0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetherSpawnPositionMetadata>.NativeClassPtr, "Pos0");
		NetherSpawnPositionMetadata.NativeFieldInfoPtr_Pos1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetherSpawnPositionMetadata>.NativeClassPtr, "Pos1");
		NetherSpawnPositionMetadata.NativeFieldInfoPtr_Pos2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetherSpawnPositionMetadata>.NativeClassPtr, "Pos2");
		NetherSpawnPositionMetadata.NativeFieldInfoPtr_Pos3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetherSpawnPositionMetadata>.NativeClassPtr, "Pos3");
		NetherSpawnPositionMetadata.NativeMethodInfoPtr_get_Item_Public_get_SpawnPosition_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetherSpawnPositionMetadata>.NativeClassPtr, 100664657);
		NetherSpawnPositionMetadata.NativeMethodInfoPtr_set_Item_Public_set_Void_Int32_SpawnPosition_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetherSpawnPositionMetadata>.NativeClassPtr, 100664658);
	}
	public unsafe NetherSpawnPositionMetadata.SpawnPosition this[int index]
	{

		get
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref index;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetherSpawnPositionMetadata.NativeMethodInfoPtr_get_Item_Public_get_SpawnPosition_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref index;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetherSpawnPositionMetadata.NativeMethodInfoPtr_set_Item_Public_set_Void_Int32_SpawnPosition_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetherSpawnPositionMetadata>.NativeClassPtr, ref this));
	}
	public unsafe static int MaxPositions
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(NetherSpawnPositionMetadata.NativeFieldInfoPtr_MaxPositions, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(NetherSpawnPositionMetadata.NativeFieldInfoPtr_MaxPositions, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxPositions;
	private static readonly IntPtr NativeFieldInfoPtr_Pos0;
	private static readonly IntPtr NativeFieldInfoPtr_Pos1;
	private static readonly IntPtr NativeFieldInfoPtr_Pos2;
	private static readonly IntPtr NativeFieldInfoPtr_Pos3;
	private static readonly IntPtr NativeMethodInfoPtr_get_Item_Public_get_SpawnPosition_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_Item_Public_set_Void_Int32_SpawnPosition_0;

	public NetherSpawnPositionMetadata.SpawnPosition Pos0;

	public NetherSpawnPositionMetadata.SpawnPosition Pos1;

	public NetherSpawnPositionMetadata.SpawnPosition Pos2;

	public NetherSpawnPositionMetadata.SpawnPosition Pos3;

	public struct SpawnPosition
	{
		static SpawnPosition()
		{
			Il2CppClassPointerStore<NetherSpawnPositionMetadata.SpawnPosition>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<NetherSpawnPositionMetadata>.NativeClassPtr, "SpawnPosition");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetherSpawnPositionMetadata.SpawnPosition>.NativeClassPtr);
			NetherSpawnPositionMetadata.SpawnPosition.NativeFieldInfoPtr_SpawnPosGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetherSpawnPositionMetadata.SpawnPosition>.NativeClassPtr, "SpawnPosGUID");
			NetherSpawnPositionMetadata.SpawnPosition.NativeFieldInfoPtr_LocalChunkTRS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetherSpawnPositionMetadata.SpawnPosition>.NativeClassPtr, "LocalChunkTRS");
			NetherSpawnPositionMetadata.SpawnPosition.NativeFieldInfoPtr_TransformIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetherSpawnPositionMetadata.SpawnPosition>.NativeClassPtr, "TransformIndex");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetherSpawnPositionMetadata.SpawnPosition>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_SpawnPosGUID;
		private static readonly IntPtr NativeFieldInfoPtr_LocalChunkTRS;
		private static readonly IntPtr NativeFieldInfoPtr_TransformIndex;

		public PrefabGUID SpawnPosGUID;

		public float4x4 LocalChunkTRS;

		public StaticTransformIndex TransformIndex;
	}
}
```
