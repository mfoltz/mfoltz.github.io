---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CameraUser
{
	static CameraUser()
	{
		Il2CppClassPointerStore<CameraUser>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CameraUser");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CameraUser>.NativeClassPtr);
		CameraUser.NativeFieldInfoPtr_CameraEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraUser>.NativeClassPtr, "CameraEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CameraUser>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CameraEntity;

	public Entity CameraEntity;
}
```

## Client Systems

- [CursorPositionSystem]({{% relref "systems/client/CursorPositionSystem.md" %}})
- [GameplayInputSystem]({{% relref "systems/client/GameplayInputSystem.md" %}})
- [PickingSystem]({{% relref "systems/client/PickingSystem.md" %}})
- [UpdateSurfaceTextureSystem]({{% relref "systems/client/UpdateSurfaceTextureSystem.md" %}})
- [VivoxClientSystem]({{% relref "systems/client/VivoxClientSystem.md" %}})
