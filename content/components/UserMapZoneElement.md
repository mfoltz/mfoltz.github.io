---
nav_exclude: true
search_exclude: true
---

```csharp
public struct UserMapZoneElement
{
	static UserMapZoneElement()
	{
		Il2CppClassPointerStore<UserMapZoneElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UserMapZoneElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserMapZoneElement>.NativeClassPtr);
		UserMapZoneElement.NativeFieldInfoPtr_MapType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserMapZoneElement>.NativeClassPtr, "MapType");
		UserMapZoneElement.NativeFieldInfoPtr_IsChunkInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserMapZoneElement>.NativeClassPtr, "IsChunkInstance");
		UserMapZoneElement.NativeFieldInfoPtr_ZoneStartChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserMapZoneElement>.NativeClassPtr, "ZoneStartChunk");
		UserMapZoneElement.NativeFieldInfoPtr_UserZoneEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserMapZoneElement>.NativeClassPtr, "UserZoneEntity");
		UserMapZoneElement.NativeMethodInfoPtr_IsWorldZone_Public_Boolean_WorldZoneId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserMapZoneElement>.NativeClassPtr, 100672790);
	}

	public unsafe bool IsWorldZone(WorldZoneId zoneId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref zoneId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserMapZoneElement.NativeMethodInfoPtr_IsWorldZone_Public_Boolean_WorldZoneId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserMapZoneElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MapType;
	private static readonly IntPtr NativeFieldInfoPtr_IsChunkInstance;
	private static readonly IntPtr NativeFieldInfoPtr_ZoneStartChunk;
	private static readonly IntPtr NativeFieldInfoPtr_UserZoneEntity;
	private static readonly IntPtr NativeMethodInfoPtr_IsWorldZone_Public_Boolean_WorldZoneId_0;

	public MapType MapType;

	public bool IsChunkInstance;

	public TerrainChunk ZoneStartChunk;

	public NetworkedEntity UserZoneEntity;
}
```
