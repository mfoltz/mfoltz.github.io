---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastleBuildingShowOnlyInPreview
{
	static CastleBuildingShowOnlyInPreview()
	{
		Il2CppClassPointerStore<CastleBuildingShowOnlyInPreview>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleBuildingShowOnlyInPreview");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleBuildingShowOnlyInPreview>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleBuildingShowOnlyInPreview>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [DisableShowOnlyInPreviewSystem_Server]({{% relref "systems/server/DisableShowOnlyInPreviewSystem_Server.md" %}})

## Client Systems

- [DisableShowOnlyInPreviewSystem_Client]({{% relref "systems/client/DisableShowOnlyInPreviewSystem_Client.md" %}})
