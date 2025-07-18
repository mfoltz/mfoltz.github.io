---
nav_exclude: true
search_exclude: true
---

# CastleBuildingAttachToParentsBuffer

```csharp
public struct CastleBuildingAttachToParentsBuffer
{
	static CastleBuildingAttachToParentsBuffer()
	{
		Il2CppClassPointerStore<CastleBuildingAttachToParentsBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleBuildingAttachToParentsBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleBuildingAttachToParentsBuffer>.NativeClassPtr);
		CastleBuildingAttachToParentsBuffer.NativeFieldInfoPtr_ParentEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachToParentsBuffer>.NativeClassPtr, "ParentEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleBuildingAttachToParentsBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ParentEntity;

	public NetworkedEntity ParentEntity;
}
```

## Server Systems

- [CastleBuildingAttachmentCleanup](/systems/server/CastleBuildingAttachmentCleanup)
