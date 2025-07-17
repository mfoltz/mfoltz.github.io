---
nav_exclude: true
search_exclude: true
---

# UpdateTranslationWithOffset

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public float3 TranslationOffset;
	[FieldOffset(12)]
	public UpdateTranslationTarget_Enum TranslationSource;
	[FieldOffset(13)]
	public UpdateRotationTarget_Enum RotationSource;
	[FieldOffset(16)]
	public float VelocityOffsetFactor;
	[FieldOffset(20)]
	public float MaxSpeedClamp;
	[FieldOffset(24)]
	[MarshalAs(4)]
	public bool VelocityOffsetIsOnlyPerpendicular;
	[FieldOffset(25)]
	[MarshalAs(4)]
	public bool ResolveCollision;
}
