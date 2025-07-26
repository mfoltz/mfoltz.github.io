---
nav_exclude: true
search_exclude: true
---

# UpdateTranslationWithOffset

```csharp
public struct UpdateTranslationWithOffset
{
	static UpdateTranslationWithOffset()
	{
		Il2CppClassPointerStore<UpdateTranslationWithOffset>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UpdateTranslationWithOffset");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UpdateTranslationWithOffset>.NativeClassPtr);
		UpdateTranslationWithOffset.NativeFieldInfoPtr_TranslationOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpdateTranslationWithOffset>.NativeClassPtr, "TranslationOffset");
		UpdateTranslationWithOffset.NativeFieldInfoPtr_TranslationSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpdateTranslationWithOffset>.NativeClassPtr, "TranslationSource");
		UpdateTranslationWithOffset.NativeFieldInfoPtr_RotationSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpdateTranslationWithOffset>.NativeClassPtr, "RotationSource");
		UpdateTranslationWithOffset.NativeFieldInfoPtr_VelocityOffsetFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpdateTranslationWithOffset>.NativeClassPtr, "VelocityOffsetFactor");
		UpdateTranslationWithOffset.NativeFieldInfoPtr_MaxSpeedClamp = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpdateTranslationWithOffset>.NativeClassPtr, "MaxSpeedClamp");
		UpdateTranslationWithOffset.NativeFieldInfoPtr_VelocityOffsetIsOnlyPerpendicular = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpdateTranslationWithOffset>.NativeClassPtr, "VelocityOffsetIsOnlyPerpendicular");
		UpdateTranslationWithOffset.NativeFieldInfoPtr_ResolveCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpdateTranslationWithOffset>.NativeClassPtr, "ResolveCollision");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UpdateTranslationWithOffset>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TranslationOffset;
	private static readonly IntPtr NativeFieldInfoPtr_TranslationSource;
	private static readonly IntPtr NativeFieldInfoPtr_RotationSource;
	private static readonly IntPtr NativeFieldInfoPtr_VelocityOffsetFactor;
	private static readonly IntPtr NativeFieldInfoPtr_MaxSpeedClamp;
	private static readonly IntPtr NativeFieldInfoPtr_VelocityOffsetIsOnlyPerpendicular;
	private static readonly IntPtr NativeFieldInfoPtr_ResolveCollision;

	public float3 TranslationOffset;

	public UpdateTranslationTarget_Enum TranslationSource;

	public UpdateRotationTarget_Enum RotationSource;

	public float VelocityOffsetFactor;

	public float MaxSpeedClamp;

	public bool VelocityOffsetIsOnlyPerpendicular;

	public bool ResolveCollision;
}
```
