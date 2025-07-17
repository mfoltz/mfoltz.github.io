---
nav_exclude: true
search_exclude: true
---

# WorldZoneId

```csharp
public struct WorldZoneId
{
	static WorldZoneId()
	{
		Il2CppClassPointerStore<WorldZoneId>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "WorldZoneId");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldZoneId>.NativeClassPtr);
		WorldZoneId.NativeFieldInfoPtr_MapType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldZoneId>.NativeClassPtr, "MapType");
		WorldZoneId.NativeFieldInfoPtr_ZoneStartChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldZoneId>.NativeClassPtr, "ZoneStartChunk");
		WorldZoneId.NativeFieldInfoPtr_ZoneChunkSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldZoneId>.NativeClassPtr, "ZoneChunkSize");
		WorldZoneId.NativeFieldInfoPtr_IsChunkInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldZoneId>.NativeClassPtr, "IsChunkInstance");
		WorldZoneId.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_WorldZoneId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WorldZoneId>.NativeClassPtr, 100664537);
		WorldZoneId.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WorldZoneId>.NativeClassPtr, 100664538);
	}

	public unsafe bool Equals(WorldZoneId other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WorldZoneId.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_WorldZoneId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WorldZoneId.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldZoneId>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MapType;
	private static readonly IntPtr NativeFieldInfoPtr_ZoneStartChunk;
	private static readonly IntPtr NativeFieldInfoPtr_ZoneChunkSize;
	private static readonly IntPtr NativeFieldInfoPtr_IsChunkInstance;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_WorldZoneId_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;

	public MapType MapType;

	public TerrainChunk ZoneStartChunk;

	public int2 ZoneChunkSize;

	public bool IsChunkInstance;
}
```
