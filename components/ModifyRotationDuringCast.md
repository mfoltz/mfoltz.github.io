---
nav_exclude: true
search_exclude: false
---

# ModifyRotationDuringCast

```csharp
public struct ModifyRotationDuringCast
{
	static ModifyRotationDuringCast()
	{
		Il2CppClassPointerStore<ModifyRotationDuringCast>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "ModifyRotationDuringCast");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyRotationDuringCast>.NativeClassPtr);
		ModifyRotationDuringCast.NativeFieldInfoPtr_CastRotationData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotationDuringCast>.NativeClassPtr, "CastRotationData");
		ModifyRotationDuringCast.NativeFieldInfoPtr_PostCastRotationData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotationDuringCast>.NativeClassPtr, "PostCastRotationData");
		ModifyRotationDuringCast.NativeFieldInfoPtr_CastModifyRotationEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotationDuringCast>.NativeClassPtr, "CastModifyRotationEntity");
		ModifyRotationDuringCast.NativeFieldInfoPtr_PostCastModifyRotationEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyRotationDuringCast>.NativeClassPtr, "PostCastModifyRotationEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyRotationDuringCast>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastRotationData;
	private static readonly IntPtr NativeFieldInfoPtr_PostCastRotationData;
	private static readonly IntPtr NativeFieldInfoPtr_CastModifyRotationEntity;
	private static readonly IntPtr NativeFieldInfoPtr_PostCastModifyRotationEntity;

	public ModifyRotation CastRotationData;

	public ModifyRotation PostCastRotationData;

	public Entity CastModifyRotationEntity;

	public Entity PostCastModifyRotationEntity;
}
```
