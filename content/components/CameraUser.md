---
nav_exclude: true
search_exclude: true
---

# CameraUser

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

- [CursorPositionSystem](/systems/client/CursorPositionSystem)
- [GameplayInputSystem](/systems/client/GameplayInputSystem)
- [PickingSystem](/systems/client/PickingSystem)
- [UpdateSurfaceTextureSystem](/systems/client/UpdateSurfaceTextureSystem)
- [VivoxClientSystem](/systems/client/VivoxClientSystem)
